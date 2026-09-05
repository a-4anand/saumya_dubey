import Image from "next/image";

import { TrackableLink } from "@/components/trackable-link";
import { serviceDefinitions } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

const sectors = [
  {
    title: "Pharmaceuticals",
    context: "Documentation, batch records, SOP control, quality-system records and audit readiness.",
    framing:
      "Work may reference GMP-aligned documentation and applicable Drugs Rules/Schedule M context without promising compliance, certification or inspection outcome.",
    boundary:
      "QORIVARA does not grant licences, certify GMP or replace the manufacturer's authorized personnel.",
    services: ["batch-record-review", "sop-documentation", "audit-readiness-self-inspection"],
  },
  {
    title: "Ayurveda / Herbal",
    context: "Scoped documentation and QA support for Ayurveda-linked and herbal manufacturers.",
    framing:
      "The context is ASU/Schedule T, not pharmaceutical Schedule M. Saumya's D.Pharm Ayurveda background supports practical documentation understanding.",
    boundary:
      "Specialist licensing, laboratory or legal interpretations must be handled by appropriately qualified professionals.",
    services: ["sop-documentation", "qa-documentation-review", "technical-document-review"],
  },
  {
    title: "Nutraceuticals",
    context: "Documentation-quality support where food-law and FSSAI context must stay distinct from pharmaceutical claims.",
    framing:
      "Current public support is limited to documentation quality, review discipline and scoped QA records.",
    boundary:
      "Claims, labelling, licensing and specialist FSSAI regulatory interpretation require a qualified professional.",
    services: ["qa-documentation-review", "technical-document-review", "overflow-qa-support"],
  },
  {
    title: "Cosmetics / Private Label",
    context: "Discovery and scoping for adjacent regulated or partner-manufacturing documentation questions.",
    framing:
      "QORIVARA can help clarify the documentation support need and responsibility split before accepting scope.",
    boundary:
      "Detailed cosmetics regulatory work, licence outcomes or manufacturer responsibility are not marketed as current public services.",
    services: ["qa-documentation-review", "overflow-qa-support"],
  },
];

export const metadata = createMetadata({
  title: "Industries",
  description:
    "Regulated manufacturing contexts QORIVARA supports within defined QA documentation and quality-system scope.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero-luxury">
        <div className="container narrow">
          <p className="eyebrow">Industries</p>
          <h1>Regulated manufacturing contexts we support.</h1>
          <p className="body-large">
            QORIVARA separates sectors by present competence, applicable context and responsibility
            boundary. The goal is useful QA documentation support, not a broad regulatory shortcut.
          </p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container sector-grid">
          {sectors.map((sector) => (
            <article className="card sector-card" key={sector.title}>
              <p className="eyebrow">{sector.title}</p>
              <h2>{sector.title}</h2>
              <p>{sector.context}</p>
              <p>{sector.framing}</p>
              <div className="scope-note">
                <strong>Present boundary</strong>
                <p>{sector.boundary}</p>
              </div>
              <div className="sector-service-links">
                {sector.services.map((slug) => {
                  const service = serviceDefinitions.find((item) => item.slug === slug);
                  return service ? (
                    <TrackableLink href={`/services/${slug}`} key={slug}>
                      {service.shortTitle}
                    </TrackableLink>
                  ) : null;
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container detail-image-grid">
          <div>
            <p className="eyebrow">Next Step</p>
            <h2>Discuss the sector and document type before scope is accepted.</h2>
            <p className="section-description">
              Work outside current competence is declined, narrowed or assigned only when an
              appropriately qualified professional is available.
            </p>
            <TrackableLink className="button button-primary" href="/contact">
              Discuss a requirement
            </TrackableLink>
          </div>
          <Image
            alt="Controlled pharmaceutical manufacturing environment."
            className="editorial-image detail-feature-image"
            height={941}
            sizes="(max-width: 980px) 100vw, 44vw"
            src="/images/pharma-manufacturing.png"
            width={1672}
          />
        </div>
      </section>
    </>
  );
}
