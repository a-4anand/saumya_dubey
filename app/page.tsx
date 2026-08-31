import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { ServiceAccordion } from "@/components/service-accordion";
import { StructuredData } from "@/components/structured-data";
import { TrackableLink } from "@/components/trackable-link";
import { WhatsAppIcon } from "@/components/icons";
import { experienceTimeline, processSteps, siteConfig } from "@/data/site-config";
import { createMetadata } from "@/lib/metadata";
import { phoneHref, whatsappHref } from "@/lib/site";

const problemItems = [
  {
    title: "Batch record backlog",
    description:
      "Final review starts piling up, release pressure rises and internal QA loses time to repeat checking.",
  },
  {
    title: "SOP revisions slipping",
    description:
      "Procedures drift away from current operations when revision work keeps getting pushed behind daily workload.",
  },
  {
    title: "Audit-readiness pressure",
    description:
      "Teams suddenly need cleaner records, better control and a sharper review process before audits or inspections.",
  },
  {
    title: "Documentation inconsistency",
    description:
      "Formatting gaps, missing details and uneven standards create avoidable rework across the quality system.",
  },
  {
    title: "Stretched QA bandwidth",
    description:
      "The workload grows faster than the team, so review quality drops or the backlog starts compounding.",
  },
  {
    title: "Need for a second review",
    description:
      "Sometimes the fastest way to reduce risk is a fresh, disciplined outside review of the work already in motion.",
  },
];

const supportItems = [
  "Batch record review support",
  "SOP revision and document cleanup",
  "QA documentation standardization",
  "Internal audit readiness support",
  "COA, specification and technical document review",
  "Overflow QA support for stretched teams",
];

const serviceItems = [
  {
    number: "01",
    title: "Batch Record Review Support",
    meta: "Backlog · Final review · QA bandwidth",
    description:
      "Useful when final batch review starts slowing the team down and an additional disciplined QA pass is needed.",
    imageSrc: "/images/document-review.png",
    imageAlt: "Saumya Dubey reviewing batch record documentation.",
    bullets: [
      "Additional review capacity",
      "Focused final checking",
      "Structured QA feedback",
    ],
  },
  {
    number: "02",
    title: "SOP Revision & Documentation Cleanup",
    meta: "Revision support · Consistency · Control",
    description:
      "Support SOP revision and related documentation cleanup so procedures stay current, clearer and easier to control.",
    imageSrc: "/images/document-review.png",
    imageAlt: "Document review workspace for SOP revision and QA documentation support.",
    bullets: ["Revision discipline", "Formatting consistency", "Practical cleanup"],
  },
  {
    number: "03",
    title: "Internal Audit Readiness Support",
    meta: "Gap review · Self-inspection · Follow-through",
    description:
      "Bring in a second set of eyes when teams need a clearer view of documentation gaps before audit pressure builds.",
    imageSrc: "/images/qa-audit.png",
    imageAlt: "Internal QA audit review in a pharmaceutical setting.",
    bullets: ["Independent review", "Gap visibility", "Practical next steps"],
  },
  {
    number: "04",
    title: "Change Control & Quality-System Support",
    meta: "Documentation support · Structure · Follow-through",
    description:
      "Support change-control and related QA system documentation where structure and follow-through need tightening.",
    imageSrc: "/images/pharma-manufacturing.png",
    imageAlt: "Controlled pharmaceutical manufacturing environment.",
    bullets: ["Change-control clarity", "Document structure", "Quality-system support"],
  },
  {
    number: "05",
    title: "COA, Specifications, STP & TDS Review",
    meta: "Technical review · Consistency · Detail",
    description:
      "Review technical documents carefully so teams are not losing time to avoidable inconsistency or unclear details.",
    imageSrc: "/images/coa-specification.png",
    imageAlt: "Specification and technical document review in a QA laboratory.",
    bullets: ["COA review", "Specification checks", "STP / TDS consistency"],
  },
  {
    number: "06",
    title: "Overflow QA Support for Growing Teams",
    meta: "Overflow support · Backlog reduction · Scoped engagement",
    description:
      "Useful when documentation and review pressure have outgrown internal capacity and the team needs extra help fast.",
    imageSrc: "/images/pharma-manufacturing.png",
    imageAlt: "Manufacturing floor supporting QA workload management.",
    bullets: ["Project-based support", "Ongoing support", "QA workload relief"],
  },
  {
    number: "07",
    title: "Ayurvedic / Herbal Documentation Support",
    meta: "Ayurvedic context · Documentation review · Scoped support",
    description:
      "A strong fit where Ayurveda-linked or herbal manufacturing still needs disciplined, formal documentation support.",
    imageSrc: "/images/ayurvedic-quality.png",
    imageAlt: "Ayurvedic and herbal documentation review in a quality environment.",
    bullets: ["Sector fit", "Documentation quality", "Practical support"],
  },
];

const whySaumyaItems = [
  {
    title: "Direct founder involvement",
    description: "You work directly with Saumya throughout the engagement, not through a layered consulting team.",
  },
  {
    title: "Real QA context",
    description: "The background comes from hands-on QA roles in regulated manufacturing, not only generic advisory copy.",
  },
  {
    title: "Strong sector fit",
    description: "Pharmaceutical Chemistry and Ayurveda training make the work especially credible for pharma and Ayurveda-linked businesses.",
  },
  {
    title: "Useful for backlog pressure",
    description: "A good fit when internal teams need review help, document cleanup or extra QA capacity without hiring immediately.",
  },
  {
    title: "Scoped and practical",
    description: "Engagements are shaped around a live bottleneck, not padded into a vague consulting package.",
  },
  {
    title: "Flexible engagement",
    description: "One-time cleanup, focused review work and ongoing support can all be discussed within scope.",
  },
];

const processLabels = ["Backlog", "Review", "Control", "Confidence"];

const processSubLabels = ["Records", "SOPs", "QA Systems", "Audits"];

const commonRequirementLabels = [
  "Batch record backlog",
  "SOP revision",
  "Audit readiness",
  "COA review",
  "Specification checks",
  "Change control",
  "QA overflow",
  "Documentation cleanup",
];

export const metadata = createMetadata({
  title: "QA Support for Documentation-Heavy Manufacturing Teams",
  description:
    "Saumya Dubey helps regulated manufacturers reduce QA backlog, strengthen documentation and improve audit readiness with founder-led support.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <StructuredData />

      <section className="hero-luxury">
        <div className="container hero-luxury-grid">
          <div className="hero-luxury-copy">
            <p className="hero-descriptor">Founder-led QA support for regulated manufacturers</p>
            <h1>{siteConfig.heroHeadline}</h1>
            <p className="body-large">{siteConfig.heroDescription}</p>
            <p className="hero-credibility-line">
              Batch records, SOPs, audit readiness and documentation support for pharmaceutical,
              Ayurvedic, nutraceutical and related manufacturing teams.
            </p>
            <div className="hero-actions">
              <TrackableLink
                className="button button-primary"
                eventLabel="hero qa requirement"
                eventName="consultation_click"
                href="/contact"
              >
                Book a Scope Call
              </TrackableLink>
              <TrackableLink
                className="button button-whatsapp"
                eventLabel="hero whatsapp"
                eventName="whatsapp_click"
                href={whatsappHref}
              >
                <WhatsAppIcon />
                WhatsApp Saumya
              </TrackableLink>
            </div>
          </div>

          <div className="hero-portrait-stage">
            <div className="hero-portrait-accent" />
            <div className="hero-portrait-frame">
              <Image
                alt="Saumya Dubey in a premium professional portrait for her QA consulting website."
                className="hero-portrait-image"
                height={1024}
                priority
                sizes="(max-width: 980px) 100vw, 42vw"
                src="/images/saumya-hero.png"
                width={1536}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="trust-type-strip">
        <div className="container trust-type-row">
          <span>B.Sc. Pharmaceutical Chemistry</span>
          <span>D.Pharm — Ayurveda</span>
          <span>Founder-led support</span>
          <span>On-site in Gujarat · Remote across India</span>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container section-shell section-shell-cream">
          <SectionHeading
            eyebrow="Where Businesses Get Stuck"
            title="The work usually breaks down long before an audit does."
            description="Most clients do not need a lecture on QA. They need cleaner documentation, disciplined review and practical support where the pressure is already visible."
          />
          <div className="problem-card-grid">
            {problemItems.map((item, index) => (
              <article className="problem-card-item" key={item.title}>
                <span className="problem-card-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="problem-card-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container section-shell section-shell-sage editorial-split editorial-split-large">
          <div className="editorial-media editorial-media-offset">
            <Image
              alt="Saumya Dubey reviewing QA documents and production records for client support."
              className="editorial-image"
              height={1024}
              sizes="(max-width: 980px) 100vw, 45vw"
              src="/images/document-review.png"
              width={1536}
            />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">How Saumya Helps</p>
            <h2>Focused support where QA pressure starts affecting operations.</h2>
            <p className="section-description">
              The engagement starts with the live bottleneck: batch records waiting for review,
              SOPs slipping behind, technical documents needing cleanup, or audit-readiness work
              that the team does not have enough time to finish properly.
            </p>
            <ul className="editorial-type-list">
              {supportItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="signature-process-section">
        <div className="container signature-process-shell">
          <div className="signature-process">
            <div className="signature-process-words">
              {processLabels.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="signature-process-line" />
            <div className="signature-process-notes">
              {processSubLabels.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-forest">
        <div className="container section-shell section-shell-forest">
          <SectionHeading
            eyebrow="Services"
            title="Support designed around business bottlenecks, not generic consulting packages."
            description="Each engagement is scoped around a real requirement such as review backlog, revision work, audit-readiness pressure or overflow QA support."
          />
          <ServiceAccordion items={serviceItems} />
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container section-shell section-shell-cream">
          <SectionHeading
            eyebrow="Who Typically Hires Saumya"
            title="A fit for documentation-heavy regulated manufacturing environments."
            description="Best suited to businesses where QA paperwork directly affects release confidence, audit readiness and day-to-day control."
          />

          <div className="industry-story-grid">
            <article className="industry-story industry-story-wide">
              <div className="industry-story-copy">
                <p className="eyebrow">Pharmaceutical</p>
                <h3>Useful when documentation pressure starts affecting review quality and operational confidence.</h3>
                <p>
                  A strong fit for pharmaceutical teams that need cleaner records, stronger review
                  discipline and extra QA support without building a large external consulting layer.
                </p>
              </div>
              <Image
                alt="Pharmaceutical manufacturing floor."
                className="story-image story-image-wide"
                height={941}
                sizes="(max-width: 980px) 100vw, 62vw"
                src="/images/pharma-manufacturing.png"
                width={1672}
              />
            </article>

            <article className="industry-story">
              <Image
                alt="Ayurvedic and herbal quality documentation review."
                className="story-image"
                height={1024}
                sizes="(max-width: 980px) 100vw, 40vw"
                src="/images/ayurvedic-quality.png"
                width={1536}
              />
              <div className="industry-story-copy">
                <p className="eyebrow">Ayurvedic / Herbal</p>
                <h3>Especially relevant where Ayurveda-linked manufacturing needs both sector fit and formal documentation discipline.</h3>
                <p>
                  The Pharmaceutical Chemistry and Ayurveda background strengthens the fit for
                  businesses that need practical support without losing technical credibility.
                </p>
              </div>
            </article>

            <article className="industry-story industry-story-text">
              <p className="eyebrow">Related manufacturing</p>
              <h3>Nutraceutical, cosmetic and third-party support can be scoped around the exact pressure point.</h3>
              <p>
                The best use case is usually backlog cleanup, document review, QA coordination or
                temporary support where quality work is outgrowing internal bandwidth.
              </p>
              <ul className="detail-list detail-list-compact">
                <li>Nutraceutical</li>
                <li>Cosmetic / related manufacturing</li>
                <li>Third-party / private label coordination</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="audit-feature-section">
        <div className="container section-shell section-shell-sage">
          <Image
            alt="Internal QA audit and self-inspection review."
            className="audit-feature-image"
            height={1024}
            sizes="100vw"
            src="/images/qa-audit.png"
            width={1536}
          />
          <div className="audit-feature-copy">
            <p className="eyebrow">Second Review</p>
            <h2>Useful when the team is too close to the work to spot gaps quickly.</h2>
            <p className="section-description">
              Internal audits, self-inspections and targeted document reviews become much more
              useful when someone can step in with a disciplined outside perspective before the
              pressure becomes expensive.
            </p>
            <TrackableLink
              className="service-link"
              eventLabel="audit consultation"
              eventName="consultation_click"
              href="/contact"
            >
              Discuss Audit-Readiness Support
            </TrackableLink>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container section-shell section-shell-cream editorial-split editorial-split-reverse">
          <div className="editorial-copy">
            <p className="eyebrow">Why Hire Saumya</p>
            <h2>You work directly with the person doing the review and support.</h2>
            <p className="body-large">
              This is founder-led QA support for businesses that need practical help, not a
              bloated consulting setup.
            </p>
            <p className="section-description">
              Saumya brings Pharmaceutical Chemistry, D.Pharm in Ayurveda and hands-on QA roles
              across regulated manufacturing settings. Former employers are part of her factual
              professional path, not presented as current consulting clients.
            </p>
          </div>
          <div className="editorial-media">
            <Image
              alt="Saumya Dubey portrait in a professional office."
              className="editorial-image editorial-image-portrait"
              height={1024}
              sizes="(max-width: 980px) 100vw, 42vw"
              src="/images/saumya-about.png"
              width={1536}
            />
          </div>
        </div>

        <div className="career-timeline">
          {experienceTimeline.map((entry, index) => (
            <article className="career-timeline-row" key={`${entry.yearLabel}-${entry.company}`}>
              <div className="career-timeline-year">{entry.yearLabel}</div>
              <div className="career-timeline-line" aria-hidden="true">
                {index < experienceTimeline.length - 1 ? <span /> : null}
              </div>
              <div className="career-timeline-copy">
                <h3>{entry.company}</h3>
                <p>{entry.role}</p>
                {entry.note ? <p className="timeline-note">{entry.note}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container section-shell section-shell-cream editorial-split">
          <div className="editorial-media editorial-media-small">
            <Image
              alt="COA and specification review support in a QA environment."
              className="editorial-image"
              height={1024}
              sizes="(max-width: 980px) 100vw, 38vw"
              src="/images/coa-specification.png"
              width={1536}
            />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">Common Requirements</p>
            <h2>Most engagements start with one concrete pressure point.</h2>
            <p className="section-description">
              Clients usually come in with a single visible problem. The scope becomes clearer once
              that bottleneck is named and the affected documents are reviewed.
            </p>
            <div className="label-cloud">
              {commonRequirementLabels.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="why-saumya-section">
        <div className="container section-shell section-shell-forest-plain">
          <SectionHeading
            eyebrow="Why Saumya"
            title="Why businesses choose a focused consultant instead of letting the backlog grow."
            description="The value is direct communication, disciplined review and useful QA support where the internal team is already stretched."
          />
          <div className="principles-grid">
            {whySaumyaItems.map((item) => (
              <article className="principle-item" key={item.title}>
                <p className="principle-label">{item.title}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-forest-soft">
        <div className="container section-shell section-shell-cream">
          <SectionHeading
            eyebrow="How It Works"
            title="A simple engagement model for urgent or messy QA work."
            description="Start with the bottleneck, review the current state, complete the agreed support and close with usable outputs and next actions."
          />
          <div className="process-line-layout">
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

      <section className="first-engagement-section">
        <div className="container section-shell section-shell-sage first-engagement-band">
          <div>
            <p className="eyebrow">First Conversation</p>
            <h2>Bring the bottleneck, not a polished brief.</h2>
            <p className="section-description">
              If you only know that batch records, SOP revisions, audit preparation or document
              review are slipping, that is enough to start. The first step is defining whether the
              requirement is a good fit and what support would actually help.
            </p>
          </div>
          <div className="hero-actions">
            <TrackableLink
              className="button button-primary"
              eventLabel="first engagement consultation"
              eventName="consultation_click"
              href="/contact"
            >
              Book a Scope Call
            </TrackableLink>
            <TrackableLink
              className="button button-whatsapp"
              eventLabel="first engagement whatsapp"
              eventName="whatsapp_click"
              href={whatsappHref}
            >
              <WhatsAppIcon />
              WhatsApp Saumya
            </TrackableLink>
          </div>
        </div>
      </section>

      <section className="section contact-closing-section">
        <div className="container section-shell section-shell-cream contact-closing-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Tell Saumya what is slowing the QA process.</h2>
            <p className="section-description">
              Share the document type, backlog, review issue or audit pressure point. The first
              step is simply deciding whether the requirement is a good fit.
            </p>
            <p className="contact-location-line">Surat · Gujarat · Remote support</p>
          </div>
          <div className="contact-closing-actions">
            <TrackableLink
              className="button button-primary"
              eventLabel="closing consultation"
              eventName="consultation_click"
              href="/contact"
            >
              Book a Scope Call
            </TrackableLink>
            <TrackableLink
              className="button button-whatsapp"
              eventLabel="closing whatsapp"
              eventName="whatsapp_click"
              href={whatsappHref}
            >
              <WhatsAppIcon />
              WhatsApp Saumya
            </TrackableLink>
            <TrackableLink
              className="button button-secondary"
              eventLabel="closing call"
              eventName="call_click"
              href={phoneHref}
            >
              Call
            </TrackableLink>
          </div>
        </div>
      </section>
    </>
  );
}
