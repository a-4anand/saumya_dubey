import { createMetadata } from "@/lib/metadata";
import { TrackableLink } from "@/components/trackable-link";

const boundaries = [
  "QORIVARA provides external consulting support within an agreed scope.",
  "The client's licensed or authorized personnel retain regulated approvals, release decisions and statutory responsibilities.",
  "Deliverables depend on the completeness and accuracy of information provided by the client.",
  "A gap review, audit-readiness review or self-inspection support is not certification and does not guarantee an inspection, approval or commercial result.",
  "Work outside current competence is declined, narrowed or assigned only when an appropriately qualified professional is available.",
  "Confidential information is requested only after scope, NDA where appropriate and an agreed protection/exchange process.",
  "Previous-employer material is not reused.",
];

export const metadata = createMetadata({
  title: "Professional Scope",
  description:
    "Plain-language professional boundaries for QORIVARA's QA documentation and quality-system consulting support.",
  path: "/professional-scope",
});

export default function ProfessionalScopePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Professional Scope</p>
          <h1>Responsible support, clearly scoped.</h1>
          <p className="body-large">
            These boundaries protect clients and QORIVARA by making the work, responsibility split
            and limits clear before confidential delivery begins.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail-layout">
          <article className="card scope-boundary">
            <p className="eyebrow">Current Policy</p>
            <h2>What QORIVARA can and cannot promise.</h2>
            <ul className="detail-list">
              {boundaries.map((boundary) => (
                <li key={boundary}>{boundary}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <p className="eyebrow">Before Documents</p>
            <h2>No public-form document exchange.</h2>
            <p>
              The public intake is for non-confidential requirement summaries only. If the
              requirement is a fit, QORIVARA will agree the scope, protection terms and approved
              exchange method before any controlled records, formulas or regulated documents are
              shared.
            </p>
            <TrackableLink className="button button-primary" href="/contact">
              Discuss a requirement
            </TrackableLink>
          </article>
        </div>
      </section>
    </>
  );
}
