import { processSteps } from "@/data/site-config";
import { createMetadata } from "@/lib/metadata";
import { TrackableLink } from "@/components/trackable-link";

export const metadata = createMetadata({
  title: "How It Works",
  description:
    "Understand QORIVARA's seven-stage path from requirement fit check to scope, NDA, controlled delivery, review and closeout.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <section className="page-hero-luxury">
        <div className="container narrow">
          <p className="eyebrow">How It Works</p>
          <h1>A controlled path for QA documentation support.</h1>
          <p className="body-large">
            QORIVARA starts with fit and responsibility before confidential work begins. The process
            is deliberately structured for regulated manufacturing teams.
          </p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="method-step-list">
            {processSteps.map((step) => (
              <article className="method-step" key={step.step}>
                <span className="process-line-number">{step.step}</span>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container section-shell section-shell-sage">
          <p className="eyebrow">Responsibility Statement</p>
          <h2>External support does not replace client-authorized responsibility.</h2>
          <p className="section-description">
            QORIVARA does not replace the manufacturer&apos;s designated personnel, approvals, licences
            or regulated decision-making. Work outside available competence is declined, narrowed
            or assigned only when an appropriately qualified professional is available.
          </p>
          <TrackableLink className="button button-secondary" href="/professional-scope">
            Read professional scope
          </TrackableLink>
        </div>
      </section>
    </>
  );
}
