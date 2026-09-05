"use client";

import { type FormEvent, useState } from "react";

import {
  preferredContactMethods,
  requirementOptions,
} from "@/data/site-config";
import { WhatsAppIcon } from "@/components/icons";
import { trackEvent } from "@/components/page-view-tracker";
import { buildWhatsappHref } from "@/lib/site";
import { formatWhatsappEnquiry } from "@/lib/whatsapp";

import { TrackableLink } from "./trackable-link";

interface ContactFormProps {
  whatsappHref: string;
}

interface ContactState {
  error: string;
  pending: boolean;
  success: boolean;
  sentHref: string;
}

const initialState: ContactState = {
  error: "",
  pending: false,
  success: false,
  sentHref: "",
};

/**
 * Opens WhatsApp with the enquiry pre-filled. Tries a new tab first (nice on
 * desktop / WhatsApp Web); falls back to same-tab navigation if the browser
 * blocks the popup so the message is never lost.
 */
function openWhatsApp(href: string) {
  if (typeof window === "undefined") {
    return;
  }

  const opened = window.open(href, "_blank", "noopener,noreferrer");
  if (!opened) {
    window.location.href = href;
  }
}

export function ContactForm({ whatsappHref }: ContactFormProps) {
  const [state, setState] = useState(initialState);
  const [submittedAt] = useState(() => Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: silently ignore bots without giving them feedback.
    if (String(formData.get("website") || "")) {
      return;
    }

    setState({ ...initialState, pending: true });

    const fields = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      designation: String(formData.get("designation") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      industry: String(formData.get("industry") || ""),
      requirement: String(formData.get("requirement") || ""),
      preferredContactMethod: String(
        formData.get("preferredContactMethod") || "",
      ),
      message: String(formData.get("message") || ""),
    };

    const whatsappText = formatWhatsappEnquiry(fields);
    const href = buildWhatsappHref(whatsappText);

    // Fire the WhatsApp hand-off inside the click gesture so it isn't blocked.
    openWhatsApp(href);

    trackEvent("contact_form_submit", {
      location: "contact_page",
      channel: "whatsapp",
    });

    // Best-effort server backup. If a FORM_DESTINATION is configured the
    // enquiry is also forwarded there; if not, this quietly no-ops and the
    // WhatsApp hand-off is still the source of truth.
    void fetch("/api/contact", {
      body: JSON.stringify({ ...fields, website: "", submittedAt }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    }).catch(() => {
      // Ignored: WhatsApp is the primary delivery channel.
    });

    form.reset();
    setState({ error: "", pending: false, success: true, sentHref: href });
  }

  if (state.success) {
    return (
      <div className="card contact-success">
        <p className="eyebrow">Almost done</p>
        <h3>WhatsApp is opening with your enquiry ready to send.</h3>
        <p>
          Just tap <strong>send</strong> in WhatsApp and it lands directly with
          Qorivara. Saumya typically replies the same day.
        </p>
        <div className="contact-success-actions">
          <TrackableLink
            className="button button-whatsapp"
            eventLabel="contact success whatsapp"
            eventName="whatsapp_click"
            href={state.sentHref || whatsappHref}
          >
            <WhatsAppIcon />
            Didn&apos;t open? Tap here
          </TrackableLink>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field">
          <span>Name</span>
          <input name="name" placeholder="Your name" required type="text" />
        </label>
        <label className="field">
          <span>Company</span>
          <input name="company" placeholder="Company name" required type="text" />
        </label>
        <label className="field">
          <span>Designation</span>
          <input
            name="designation"
            placeholder="Founder, QA Head, Plant Head..."
            required
            type="text"
          />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" placeholder="you@company.com" required type="email" />
        </label>
        <label className="field">
          <span>Phone / WhatsApp</span>
          <input name="phone" placeholder="+91" required type="tel" />
        </label>
        <label className="field">
          <span>Industry</span>
          <input
            name="industry"
            placeholder="Pharmaceutical, Ayurvedic, Nutraceutical..."
            required
            type="text"
          />
        </label>
        <label className="field">
          <span>Requirement</span>
          <select defaultValue="" name="requirement" required>
            <option disabled value="">
              Select a requirement
            </option>
            {requirementOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Preferred contact method</span>
          <select defaultValue="" name="preferredContactMethod" required>
            <option disabled value="">
              Select a preference
            </option>
            {preferredContactMethods.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="field">
        <span>Requirement details</span>
        <textarea
          name="message"
          placeholder="Describe the bottleneck, affected documents, backlog or audit-readiness issue."
          required
          rows={6}
        />
      </label>

      <input
        aria-hidden="true"
        autoComplete="off"
        className="honeypot"
        name="website"
        tabIndex={-1}
        type="text"
      />

      {state.error ? <p className="form-error">{state.error}</p> : null}

      <button
        className="button button-whatsapp button-block"
        disabled={state.pending}
        type="submit"
      >
        <WhatsAppIcon />
        {state.pending ? "Opening WhatsApp..." : "Send to Qorivara on WhatsApp"}
      </button>
      <p className="contact-form-note">
        Your details open in WhatsApp, neatly formatted. Tap send and Qorivara
        gets it directly. No account signup, no waiting.
      </p>
    </form>
  );
}
