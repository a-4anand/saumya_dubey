import { processSteps } from "@/data/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How It Works",
  description:
    "Understand how Saumya Dubey scopes, reviews and delivers business-focused QA and documentation support.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <section className="page-hero-luxury">
        <div className="container narrow">
          <p className="eyebrow">How it works</p>
          <h1>A simple process for messy QA requirements.</h1>
          <p className="body-large">
            The first step is not a giant consulting discovery phase. It is a practical review of
            where the documentation, records or QA process are already slowing the business.
          </p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container section-shell section-shell-cream">
          <div className="process-line-layout process-line-layout-large">
            {processSteps.map((step) => (
              <article className="process-line-item" key={step.step}>
                <span className="process-line-number">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="signature-process-section">
        <div className="container editorial-list-block">
          <p className="eyebrow">Working principles</p>
          <ul className="detail-list">
            <li>Start with the live bottleneck, not generic process theory.</li>
            <li>Keep the scope clear enough to be useful and commercially realistic.</li>
            <li>Handle confidential documentation carefully and professionally.</li>
            <li>Focus on practical outputs, not vague consulting theatre.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
