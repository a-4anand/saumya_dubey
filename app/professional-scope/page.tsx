import { SectionHeading } from "@/components/section-heading";
import { professionalBoundaries } from "@/data/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Professional Scope",
  description: "Clear scope and professional boundaries for Saumya Dubey's QA and documentation consulting work.",
  path: "/professional-scope",
});

export default function ProfessionalScopePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Professional scope</p>
          <h1>Responsible support, clearly scoped.</h1>
          <p className="body-large">
            Clear boundaries make the work more useful. They protect trust, keep the engagement
            realistic and avoid promising what no responsible consultant should promise.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <SectionHeading
              title="Boundaries that support clarity and trust."
              description="These boundaries are not there to sound defensive. They help define where Saumya's support is useful and how the work stays credible."
            />
            <ul className="list-clean">
              {professionalBoundaries.map((boundary) => (
                <li key={boundary}>{boundary}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <p className="eyebrow">Why this matters</p>
            <h3>Clear scope makes outside QA support safer to trust.</h3>
            <p>
              Confidential material from previous employers is not reused, and prior SOPs, systems
              or records are not presented as reusable client assets.
            </p>
            <p>
              Clear boundaries also mean the work is not overstated as a legal replacement for
              designated personnel or a guarantee of compliance outcomes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
