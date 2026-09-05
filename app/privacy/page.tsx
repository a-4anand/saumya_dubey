import { createMetadata } from "@/lib/metadata";
import { contactConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy",
  description:
    "Privacy notice for QORIVARA Life Sciences enquiry handling, direct contact channels and website analytics.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy notice</h1>
        <article className="prose">
          <p>
            Effective date: 5 September 2026. Notice version: 2026-09-05. This notice should be
            reviewed by the business owner and qualified counsel before production release.
          </p>
          <p>
            QORIVARA Life Sciences is the business receiving enquiries through this website. Privacy
            requests can be sent to {contactConfig.email}.
          </p>
          <p>
            The guided enquiry form collects only information a visitor chooses to provide: name,
            company, work email, optional role, phone or WhatsApp number, industry, location,
            service need, delivery-mode preference, timeframe and a non-confidential requirement
            summary.
          </p>
          <p>
            The information is used to review fit, respond to the enquiry, prepare a scope or
            proposal where appropriate and maintain a basic lead reference. The public form does not
            accept file uploads and should not be used for confidential records, proprietary
            formulas, credentials, patient or employee data, batch identifiers or regulated
            documents.
          </p>
          <p>
            The site is hosted on Vercel-compatible infrastructure. If a form endpoint or lead
            webhook is configured, enquiry data is sent server-side to that configured provider.
            If analytics are configured, events must remain privacy-safe and must not include names,
            emails, phone numbers, company names, message bodies or document identifiers.
          </p>
          <p>
            WhatsApp is available as a secondary direct channel. If a visitor chooses WhatsApp, the
            conversation is handled by WhatsApp/Meta under its applicable terms and policies. The
            website uses only a minimal non-confidential WhatsApp prefill.
          </p>
          <p>
            QORIVARA keeps enquiry information only as long as needed for review, response, legal or
            business record purposes. Exact retention periods, deletion workflow, data-processing
            locations and provider contracts require final owner/legal confirmation before release.
          </p>
          <p>
            Visitors may request access, correction, withdrawal or deletion by contacting
            {` ${contactConfig.email}`}. QORIVARA will handle requests according to applicable law
            and verified identity.
          </p>
          <p>
            The form is intended for business enquiries from adults. Do not submit children&apos;s
            personal data or sensitive personal information through this website.
          </p>
        </article>
      </div>
    </section>
  );
}
