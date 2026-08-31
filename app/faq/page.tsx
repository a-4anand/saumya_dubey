import { FaqSchema } from "@/components/faq-schema";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/data/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQ",
  description: "Frequently asked questions about Saumya Dubey's business-focused QA and documentation support services.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <FaqSchema />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">FAQ</p>
          <h1>Common questions, answered clearly.</h1>
          <p className="body-large">
            These are the questions businesses usually ask before bringing in outside QA support
            for backlog, documentation and audit-readiness work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Frequently asked questions"
            description="The goal is to make the commercial fit clearer: what problems Saumya helps with, where the support is useful and how scope stays realistic."
          />
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article className="faq-card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
