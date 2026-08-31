import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy",
  description: "Privacy information for Saumya Dubey's consulting website.",
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
            This website may collect contact information that a visitor chooses
            to submit through the enquiry form, including name, company,
            designation, email address, phone number, industry, requirement and
            preferred contact method.
          </p>
          <p>
            The information is used only to review the enquiry, respond to the
            request and discuss the relevant QA support requirement. Information
            is not collected for unrelated marketing claims or fabricated case
            studies.
          </p>
          <p>
            Confidential company information should be shared only through agreed
            channels and, where appropriate, subject to confidentiality
            arrangements.
          </p>
          <p>
            Analytics may be used to understand page visits, CTA clicks and form
            submissions if configured for the website. Sensitive information
            should not be submitted through website forms unless appropriate
            arrangements are in place.
          </p>
        </article>
      </div>
    </section>
  );
}
