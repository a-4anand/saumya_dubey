import Image from "next/image";

import { ServiceAccordion } from "@/components/service-accordion";
import { createMetadata } from "@/lib/metadata";

const serviceItems = [
  {
    number: "01",
    title: "Batch Record Review Support",
    meta: "Backlog · Final review · QA bandwidth",
    description:
      "Useful when final batch review is slowing the team down and extra disciplined QA checking is needed.",
    imageSrc: "/images/document-review.png",
    imageAlt: "Saumya Dubey reviewing batch record documentation.",
    bullets: ["Review capacity", "Final checking", "Structured feedback"],
  },
  {
    number: "02",
    title: "SOP Revision & Documentation Cleanup",
    meta: "Revision support · Consistency · Control",
    description:
      "Support SOP revision and related cleanup so procedures stay current, readable and easier to control.",
    imageSrc: "/images/document-review.png",
    imageAlt: "SOP and QA documentation review workspace.",
    bullets: ["Revision discipline", "Formatting consistency", "Document cleanup"],
  },
  {
    number: "03",
    title: "Internal Audit Readiness Support",
    meta: "Gap review · Self-inspection · Follow-through",
    description:
      "Bring in a fresh review when documents, records and system gaps need a clearer internal check before outside pressure increases.",
    imageSrc: "/images/qa-audit.png",
    imageAlt: "Internal QA audit review in a regulated environment.",
    bullets: ["Independent review", "Gap visibility", "Practical next steps"],
  },
  {
    number: "04",
    title: "Change Control & Quality-System Support",
    meta: "Documentation support · Structure · Follow-through",
    description:
      "Support change-control and related quality-system documentation work where follow-through and structure need strengthening.",
    imageSrc: "/images/pharma-manufacturing.png",
    imageAlt: "Controlled pharmaceutical production environment for change-control context.",
    bullets: ["Change-control support", "Document structure", "Quality-system follow-through"],
  },
  {
    number: "05",
    title: "COA, Specifications, STP & TDS Review",
    meta: "Technical review · Consistency · Detail",
    description:
      "Review technical documents so important details stay consistent and easier to rely on across QA workflows.",
    imageSrc: "/images/coa-specification.png",
    imageAlt: "Specification and STP review in a QA lab.",
    bullets: ["COA review", "Specification checks", "STP / TDS consistency"],
  },
  {
    number: "06",
    title: "Overflow QA Support for Growing Teams",
    meta: "Overflow support · Backlog reduction · Scoped engagement",
    description:
      "Useful when documentation and review pressure have outgrown internal bandwidth and the business needs targeted help fast.",
    imageSrc: "/images/pharma-manufacturing.png",
    imageAlt: "Controlled manufacturing environment supporting QA documentation.",
    bullets: ["Project-based support", "Ongoing support", "QA workload relief"],
  },
  {
    number: "07",
    title: "Ayurvedic / Herbal Documentation Support",
    meta: "Ayurvedic context · Documentation review · Scoped support",
    description:
      "A strong fit for Ayurveda-linked and herbal manufacturers that need disciplined formal documentation support.",
    imageSrc: "/images/ayurvedic-quality.png",
    imageAlt: "Ayurvedic and herbal quality documentation review.",
    bullets: ["Sector fit", "Documentation quality", "Practical support"],
  },
];

export const metadata = createMetadata({
  title: "Services",
  description:
    "Explore the business-focused QA, documentation, audit-readiness and backlog support services Saumya Dubey offers manufacturers.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero-luxury">
        <div className="container editorial-split">
          <div className="editorial-copy">
            <p className="eyebrow">Services</p>
            <h1>Support built around live QA bottlenecks.</h1>
            <p className="body-large">
              These offers are designed for manufacturers that need cleaner documentation, sharper
              review discipline or extra QA support where the workload has started getting ahead of
              the team.
            </p>
          </div>
          <div className="editorial-media editorial-media-offset">
            <Image
              alt="Documentation review and QA support workspace."
              className="editorial-image"
              height={1024}
              priority
              sizes="(max-width: 980px) 100vw, 42vw"
              src="/images/document-review.png"
              width={1536}
            />
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container section-shell section-shell-cream">
          <ServiceAccordion items={serviceItems} />
        </div>
      </section>

      <section className="signature-process-section">
        <div className="container section-shell section-shell-sage editorial-split editorial-split-large">
          <div className="editorial-copy">
            <p className="eyebrow">Best fit</p>
            <h2>Most service enquiries begin with one messy pressure point.</h2>
            <p className="section-description">
              The requirement does not need to be perfectly scoped before the first conversation.
              Businesses usually reach out when backlog, revisions, audit preparation or technical
              document review have already become harder to manage internally.
            </p>
          </div>
          <div className="editorial-list-block">
            <p className="eyebrow">Typical starting points</p>
            <ul className="detail-list detail-list-two-column">
              <li>Batch record backlog</li>
              <li>SOP revision work</li>
              <li>Documentation cleanup</li>
              <li>Audit-readiness support</li>
              <li>Specification and COA review</li>
              <li>Overflow QA support</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
