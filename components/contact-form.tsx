"use client";

import { type FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { WhatsAppIcon } from "@/components/icons";
import { trackEvent } from "@/components/page-view-tracker";
import { serviceDefinitions } from "@/data/services";
import { buildMinimalWhatsappHref } from "@/lib/site";

import { TrackableLink } from "./trackable-link";

interface ContactFormProps {
  whatsappHref: string;
}

interface ContactState {
  error: string;
  pending: boolean;
  success: boolean;
  leadId: string;
  transportConfigured: boolean;
}

const initialState: ContactState = {
  error: "",
  pending: false,
  success: false,
  leadId: "",
  transportConfigured: true,
};

const conditionalQuestions: Record<string, Array<{ name: string; label: string; placeholder: string }>> = {
  "batch-record-review": [
    { name: "recordType", label: "Record type", placeholder: "BMR, BPR or both" },
    { name: "approximateCount", label: "Approximate count", placeholder: "Example: 12 executed records" },
    { name: "templateOrExecuted", label: "Template or executed records", placeholder: "Template, executed records or both" },
    { name: "urgency", label: "Urgency", placeholder: "Example: needed before month end" },
  ],
  "sop-documentation": [
    { name: "approximateCount", label: "Approximate SOP count", placeholder: "Example: 8 SOPs" },
    { name: "department", label: "Department or area", placeholder: "Example: Production, QA, warehouse" },
    { name: "sopNeed", label: "SOP need", placeholder: "New, revise or review" },
    { name: "targetWindow", label: "Target window", placeholder: "Example: 2 to 3 weeks" },
  ],
  "audit-readiness-self-inspection": [
    { name: "auditType", label: "Audit or self-inspection type", placeholder: "Internal, customer, regulatory preparation" },
    { name: "expectedDate", label: "Expected date", placeholder: "Example: November 2026" },
    { name: "modePreference", label: "Mode preference", placeholder: "Remote, hybrid or on-site" },
  ],
  "technical-document-review": [
    { name: "documentTypes", label: "Document types", placeholder: "COA, specification, STP or TDS" },
    { name: "approximateVolume", label: "Approximate volume", placeholder: "Example: 20 COAs and 5 specifications" },
    { name: "reviewObjective", label: "Review objective", placeholder: "Consistency, cleanup, pre-audit review" },
  ],
  "overflow-qa-support": [
    { name: "expectedDuration", label: "Expected duration", placeholder: "Example: 3 months" },
    { name: "workloadPattern", label: "Workload pattern", placeholder: "Recurring weekly review, backlog sprint, ad hoc" },
    { name: "cadencePreference", label: "Cadence preference", placeholder: "Weekly status, monthly summary" },
  ],
  other: [
    { name: "productOrSectorContext", label: "Product or sector context", placeholder: "Example: herbal, nutraceutical, private label" },
    { name: "decisionNeeded", label: "Decision needed", placeholder: "What are you trying to decide or prepare?" },
  ],
};

export function ContactForm({ whatsappHref }: ContactFormProps) {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";
  const safeInitialService = serviceDefinitions.some((item) => item.slug === initialService)
    ? initialService
    : "";
  const [state, setState] = useState(initialState);
  const [startedAt] = useState(() => Date.now());
  const [serviceNeed, setServiceNeed] = useState(safeInitialService);
  const [company, setCompany] = useState("");
  const [formStarted, setFormStarted] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const serviceOptions = useMemo(
    () => serviceDefinitions.map((service) => ({ value: service.slug, label: service.title })),
    [],
  );
  const selectedQuestions = conditionalQuestions[serviceNeed] ?? conditionalQuestions.other;
  const selectedServiceLabel =
    serviceOptions.find((service) => service.value === serviceNeed)?.label || serviceNeed || "QA support";
  const minimalWhatsappHref =
    serviceNeed || company ? buildMinimalWhatsappHref(selectedServiceLabel, company) : whatsappHref;

  useEffect(() => {
    if ((state.error || state.success) && statusRef.current) {
      statusRef.current.focus();
    }
  }, [state.error, state.success]);

  function markStarted() {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent("form_started", { page: pathname });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    markStarted();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const conditional = Object.fromEntries(
      selectedQuestions
        .map((question) => [question.name, String(formData.get(question.name) || "").trim()] as const)
        .filter(([, value]) => value),
    );

    const payload = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      workEmail: String(formData.get("workEmail") || ""),
      serviceNeed: String(formData.get("serviceNeed") || ""),
      requirementSummary: String(formData.get("requirementSummary") || ""),
      role: String(formData.get("role") || ""),
      companyType: String(formData.get("companyType") || ""),
      phoneOrWhatsApp: String(formData.get("phoneOrWhatsApp") || ""),
      industry: String(formData.get("industry") || ""),
      location: String(formData.get("location") || ""),
      preferredDeliveryMode: String(formData.get("preferredDeliveryMode") || ""),
      timeframe: String(formData.get("timeframe") || ""),
      preferredContactMethod: String(formData.get("preferredContactMethod") || ""),
      conditional,
      website: String(formData.get("website") || ""),
      submittedAt: startedAt,
      sourcePath: pathname,
      privacyAcknowledged: formData.get("privacyAcknowledged") === "on",
    };

    setState({ ...initialState, pending: true });

    try {
      const response = await fetch("/api/leads", {
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const result = (await response.json()) as {
        message?: string;
        leadId?: string;
        transportConfigured?: boolean;
      };

      if (!response.ok) {
        trackEvent("form_error", { page: pathname });
        setState({
          ...initialState,
          error: result.message || "The enquiry could not be submitted. Please try again.",
        });
        return;
      }

      trackEvent("form_submitted", { page: pathname, service: payload.serviceNeed });
      form.reset();
      setServiceNeed("");
      setCompany("");
      setState({
        error: "",
        pending: false,
        success: true,
        leadId: result.leadId || "",
        transportConfigured: result.transportConfigured !== false,
      });
    } catch {
      trackEvent("form_error", { page: pathname });
      setState({
        ...initialState,
        error: "The enquiry could not be submitted. Please email or WhatsApp QORIVARA as a fallback.",
      });
    }
  }

  if (state.success) {
    return (
      <div aria-live="polite" className="card contact-success" ref={statusRef} tabIndex={-1}>
        <p className="eyebrow">Received</p>
        <h3>Your enquiry reference is {state.leadId || "confirmed"}.</h3>
        <p>
          QORIVARA will review fit before requesting any confidential records. If documents are
          needed, scope, NDA and an approved exchange method come first.
        </p>
        {!state.transportConfigured ? (
          <p>
            Form forwarding is not configured in this environment. Please use email or WhatsApp and
            mention this reference.
          </p>
        ) : null}
        <div className="contact-success-actions">
          <TrackableLink className="button button-secondary" href="/services">
            Review services
          </TrackableLink>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onFocus={markStarted} onSubmit={handleSubmit}>
      <div aria-live="polite" className="form-status" ref={statusRef} tabIndex={-1}>
        {state.error ? (
          <div className="form-error-summary">
            <strong>Submission needs attention.</strong>
            <p>{state.error}</p>
          </div>
        ) : null}
      </div>

      <fieldset className="form-fieldset">
        <legend>Required details</legend>
        <div className="form-grid">
          <label className="field" htmlFor="lead-name">
            <span>Name</span>
            <input autoComplete="name" id="lead-name" maxLength={80} name="name" required type="text" />
          </label>
          <label className="field" htmlFor="lead-company">
            <span>Company</span>
            <input
              autoComplete="organization"
              id="lead-company"
              maxLength={120}
              name="company"
              onChange={(event) => setCompany(event.currentTarget.value)}
              required
              type="text"
            />
          </label>
          <label className="field" htmlFor="lead-email">
            <span>Work email</span>
            <input autoComplete="email" id="lead-email" maxLength={140} name="workEmail" required type="email" />
          </label>
          <label className="field" htmlFor="lead-service">
            <span>Service / need</span>
            <select
              id="lead-service"
              name="serviceNeed"
              onChange={(event) => setServiceNeed(event.currentTarget.value)}
              required
              value={serviceNeed}
            >
              <option disabled value="">
                Select the closest fit
              </option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
              <option value="other">Other / not sure yet</option>
            </select>
          </label>
        </div>
        <label className="field" htmlFor="lead-summary">
          <span>Short requirement</span>
          <textarea
            aria-describedby="lead-summary-help"
            id="lead-summary"
            maxLength={1200}
            minLength={20}
            name="requirementSummary"
            required
            rows={5}
          />
          <small id="lead-summary-help">
            Keep this non-confidential. Describe the need, not batch IDs, formulas or records.
          </small>
        </label>
      </fieldset>

      <fieldset className="form-fieldset">
        <legend>Optional context</legend>
        <div className="form-grid">
          <label className="field" htmlFor="lead-role">
            <span>Role</span>
            <input autoComplete="organization-title" id="lead-role" maxLength={80} name="role" type="text" />
          </label>
          <label className="field" htmlFor="lead-phone">
            <span>Phone / WhatsApp</span>
            <input autoComplete="tel" id="lead-phone" inputMode="tel" maxLength={32} name="phoneOrWhatsApp" type="tel" />
          </label>
          <label className="field" htmlFor="lead-industry">
            <span>Industry</span>
            <input id="lead-industry" maxLength={80} name="industry" type="text" />
          </label>
          <label className="field" htmlFor="lead-mode">
            <span>Preferred delivery mode</span>
            <select id="lead-mode" name="preferredDeliveryMode">
              <option value="">No preference yet</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="on-site">On-site</option>
              <option value="not-sure">Not sure</option>
            </select>
          </label>
          <label className="field" htmlFor="lead-location">
            <span>Location</span>
            <input autoComplete="address-level2" id="lead-location" maxLength={120} name="location" type="text" />
          </label>
          <label className="field" htmlFor="lead-timeframe">
            <span>Timeframe</span>
            <input id="lead-timeframe" maxLength={80} name="timeframe" type="text" />
          </label>
          <label className="field" htmlFor="lead-contact-method">
            <span>Preferred contact</span>
            <select id="lead-contact-method" name="preferredContactMethod">
              <option value="">No preference</option>
              <option value="email">Email</option>
              <option value="phone">Phone call</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </label>
          <label className="field" htmlFor="lead-company-type">
            <span>Company type</span>
            <input id="lead-company-type" maxLength={80} name="companyType" type="text" />
          </label>
        </div>
      </fieldset>

      <fieldset className="form-fieldset">
        <legend>Service-specific questions</legend>
        <div className="form-grid">
          {selectedQuestions.map((question) => (
            <label className="field" htmlFor={`conditional-${question.name}`} key={question.name}>
              <span>{question.label}</span>
              <input
                id={`conditional-${question.name}`}
                maxLength={240}
                name={question.name}
                placeholder={question.placeholder}
                type="text"
              />
            </label>
          ))}
        </div>
      </fieldset>

      <input
        aria-hidden="true"
        autoComplete="off"
        className="honeypot"
        name="website"
        tabIndex={-1}
        type="text"
      />

      <div className="confidentiality-warning">
        Do not send confidential records, proprietary formulas, credentials, patient or employee
        data, or regulated documents through this public form. If the requirement is a fit,
        QORIVARA will agree an NDA and approved exchange method before documents are shared.
      </div>

      <label className="consent-row">
        <input name="privacyAcknowledged" required type="checkbox" />
        <span>
          I understand the public-form confidentiality warning and agree to the{" "}
          <TrackableLink href="/privacy">privacy notice</TrackableLink>.
        </span>
      </label>

      <button
        aria-busy={state.pending}
        className="button button-primary button-block"
        disabled={state.pending}
        type="submit"
      >
        {state.pending ? "Submitting..." : "Submit enquiry"}
      </button>
      <p className="contact-form-note">
        Prefer a quick message? WhatsApp is available as a secondary channel and will open under
        WhatsApp/Meta terms. Keep the prefill non-confidential.
      </p>
      <TrackableLink
        className="button button-whatsapp button-block"
        eventLabel={serviceNeed || "contact"}
        eventName="whatsapp_click"
        href={minimalWhatsappHref}
      >
        <WhatsAppIcon />
        WhatsApp QORIVARA
      </TrackableLink>
    </form>
  );
}
