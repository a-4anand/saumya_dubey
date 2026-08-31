import { ContactForm } from "@/components/contact-form";
import { WhatsAppIcon } from "@/components/icons";
import { TrackableLink } from "@/components/trackable-link";
import { createMetadata } from "@/lib/metadata";
import {
  contactConfig,
  emailHref,
  phoneHref,
  whatsappHref,
} from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Saumya Dubey to discuss QA backlog, documentation cleanup, audit-readiness or overflow support requirements.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero-luxury">
        <div className="container narrow">
          <p className="eyebrow">Contact</p>
          <h1>Tell Saumya where QA work is slowing the business.</h1>
          <p className="body-large">
            Share the backlog, review issue, document type or audit-readiness pressure point. The
            first step is deciding whether the requirement is a good fit and what support would
            help most.
          </p>
        </div>
      </section>

      <section className="section contact-closing-section">
        <div className="container contact-page-grid">
          <div className="contact-page-copy">
            <p className="contact-location-line">Surat · Gujarat · Remote support</p>
            <p className="section-description">
              Good starting points include batch record backlog, SOP revision, documentation
              cleanup, technical document review, self-inspection support or overflow QA work.
            </p>
            <div className="contact-direct-links">
              <TrackableLink
                className="button button-whatsapp"
                eventLabel="contact whatsapp"
                eventName="whatsapp_click"
                href={whatsappHref}
              >
                <WhatsAppIcon />
                WhatsApp Saumya
              </TrackableLink>
              <TrackableLink
                className="button button-secondary"
                eventLabel="contact phone"
                eventName="call_click"
                href={phoneHref}
              >
                Call
              </TrackableLink>
            </div>
            <p className="contact-reassurance">
              Fastest way to reach Saumya — messages usually get a same-day
              reply.
            </p>

            <div className="contact-method-list">
              <article className="contact-method">
                <span>WhatsApp</span>
                <strong>{contactConfig.whatsapp || "Set `WHATSAPP_NUMBER` before launch."}</strong>
              </article>
              <article className="contact-method">
                <span>Phone</span>
                <strong>{contactConfig.phone || "Set `PHONE_NUMBER` before launch."}</strong>
              </article>
              <article className="contact-method">
                <span>Email</span>
                <strong>{contactConfig.email || "Set `BUSINESS_EMAIL` before launch."}</strong>
                <TrackableLink className="service-link" href={emailHref}>
                  Send email
                </TrackableLink>
              </article>
            </div>
          </div>

          <div className="contact-form-panel contact-form-panel-luxury">
            <p className="eyebrow">Discuss your requirement</p>
            <h2>Share the bottleneck and the affected documents.</h2>
            <p className="section-description">
              You do not need a perfectly written brief. A short description of the backlog,
              document type, review pressure or business context is enough to begin.
            </p>
            <ContactForm whatsappHref={whatsappHref} />
          </div>
        </div>
      </section>
    </>
  );
}
