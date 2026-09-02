import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { TrackableLink } from "@/components/trackable-link";
import { WhatsAppIcon } from "@/components/icons";
import { experienceTimeline, processSteps, siteConfig } from "@/data/site-config";
import { createMetadata } from "@/lib/metadata";
import { phoneHref, whatsappHref } from "@/lib/site";

const experienceImagePrimary = "/images/qa-audit.png";
const experienceImageSecondary = "/images/coa-specification.png";
const contactImage = "/images/document-review.png";

const problemItems = [
  {
    title: "Batch records are waiting for final QA review",
    signal: "Release confidence starts depending on rushed checking.",
    fix: "Saumya adds a disciplined second pass, captures missing details and helps the team move records forward with clearer control.",
  },
  {
    title: "SOPs are outdated or inconsistent",
    signal: "Procedures no longer match how the work is actually happening.",
    fix: "She supports revision, cleanup and formatting so documents become easier to use, review and maintain.",
  },
  {
    title: "Audit preparation is becoming reactive",
    signal: "Teams wait until pressure rises, then try to clean everything at once.",
    fix: "Saumya helps identify visible documentation gaps early and turns them into practical follow-through actions.",
  },
  {
    title: "Your QA team is stretched",
    signal: "Daily workload keeps winning over important documentation work.",
    fix: "She can take a scoped overflow requirement so internal QA keeps momentum without adding a permanent layer.",
  },
];

const serviceItems = [
  {
    title: "Batch record review support",
    description:
      "Extra QA review capacity for teams that need records checked carefully, consistently and without slowing internal release work.",
    signature: "Final review · Backlog reduction · QA bandwidth",
    deliverables: ["BMR / BPR review support", "Missing-entry checks", "Clear review observations"],
    value: "Helps reduce release delays and gives internal QA a cleaner handover.",
  },
  {
    title: "SOP revision and document cleanup",
    description:
      "Practical support for SOP updates, formatting consistency, document structure and controlled cleanup where procedures have become hard to maintain.",
    signature: "Revision discipline · Document control · Cleaner handover",
    deliverables: ["SOP revision support", "Format and numbering cleanup", "Procedure clarity review"],
    value: "Makes SOPs easier for teams to follow, control and defend during review.",
  },
  {
    title: "Internal audit readiness",
    description:
      "A focused outside review for internal audits, self-inspections and preparation work where the team needs gap visibility before pressure builds.",
    signature: "Gap review · Self-inspection · Practical next steps",
    deliverables: ["Document gap review", "Self-inspection support", "Action-point preparation"],
    value: "Turns audit anxiety into a practical list of issues the team can act on.",
  },
  {
    title: "COA, specifications, STP and TDS review",
    description:
      "Technical document review for teams that need stronger consistency, clearer wording and fewer avoidable corrections.",
    signature: "Technical clarity · Consistency · Detail review",
    deliverables: ["COA review", "Specification checks", "STP / TDS consistency review"],
    value: "Reduces avoidable back-and-forth caused by unclear or inconsistent technical documents.",
  },
  {
    title: "Quality-system and change-control support",
    description:
      "Scoped help for quality-system records, change-control documentation and supporting files that need tighter structure and follow-through.",
    signature: "Structure · Control · Follow-through",
    deliverables: ["Change-control support", "Quality record cleanup", "Follow-through tracking"],
    value: "Keeps quality-system work from becoming scattered, delayed or hard to trace.",
  },
  {
    title: "Ayurvedic and herbal documentation support",
    description:
      "A strong fit for Ayurveda-linked and herbal manufacturers where formal QA documentation still needs practical product-context understanding.",
    signature: "Ayurveda fit · Herbal context · QA documentation",
    deliverables: ["Ayurvedic documentation review", "Herbal product context support", "QA file cleanup"],
    value: "Brings pharma-style documentation discipline without losing Ayurveda-linked context.",
  },
];

const whyItems = [
  "You work directly with Saumya, not a sales layer or junior delivery team.",
  "Her background is hands-on QA work inside real manufacturing environments.",
  "Her Pharmaceutical Chemistry and Ayurveda education fits both pharma and Ayurveda-linked businesses.",
  "The work is scoped around the bottleneck your team is actually facing.",
  "Communication is simple: WhatsApp, call or a short requirement form that opens directly for Saumya.",
];

export const metadata = createMetadata({
  title: "Independent QA & GMP Consulting for Manufacturing Businesses",
  description:
    "Saumya Dubey provides founder-led QA, GMP, documentation and quality-system support for pharmaceutical, Ayurvedic and related manufacturing businesses.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <StructuredData />

      <section className="hero-luxury">
        <div className="container hero-luxury-grid">
          <div className="hero-luxury-copy">
            <p className="hero-name">{siteConfig.heroEyebrow}</p>
            <p className="hero-descriptor">QA · GMP · DOCUMENTATION · QUALITY SYSTEMS</p>
            <h1>{siteConfig.heroHeadline}</h1>
            <p className="body-large">{siteConfig.heroDescription}</p>
            <div className="hero-credential-row" aria-label="Saumya Dubey credentials">
              {siteConfig.credibilityStrip.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-actions">
              <TrackableLink
                className="button button-primary"
                eventLabel="hero qa requirement"
                eventName="consultation_click"
                href="/contact"
              >
                Discuss a QA Requirement
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
                alt="Saumya Dubey in a professional QA consulting portrait."
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
          <span>3+ Years QA Experience</span>
          <span>Surat · Gujarat · Remote support</span>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container founder-proof-grid">
          <div className="founder-proof-copy">
            <p className="eyebrow">Who Is Saumya?</p>
            <h2>Founder-led QA support from someone who has worked inside the system.</h2>
            <p className="section-description">
              Saumya Dubey supports pharmaceutical, Ayurvedic, nutraceutical and related
              manufacturing businesses with QA documentation, review discipline and quality-system
              work. The value is not theory. It is practical help when records, SOPs and audit
              preparation are already taking time away from the team.
            </p>
          </div>
          <figure className="proof-portrait">
            <Image
              alt="Saumya Dubey in a professional office setting."
              className="proof-portrait-image"
              height={1024}
              sizes="(max-width: 980px) 100vw, 36vw"
              src="/images/saumya-about.png"
              width={1536}
            />
            <figcaption>
              Direct communication, scoped support and clear handover from the person doing the QA
              work.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section problem-section">
        <div className="container problem-layout">
          <SectionHeading
            eyebrow="What She Fixes"
            title="When QA work starts slowing the business, the engagement starts there."
            description="The website should not teach clients what QA means. It should help them recognize their own bottleneck and make it easy to ask Saumya for focused support."
          />
          <div className="problem-card-grid">
            {problemItems.map((item, index) => (
              <article className="problem-card-item" key={item.title}>
                <span className="problem-card-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="problem-signal">{item.signal}</p>
                  <p>{item.fix}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-forest">
        <div className="container services-editorial-grid">
          <div className="services-editorial-copy">
            <p className="eyebrow">What Saumya Offers</p>
            <h2>Scoped QA support that feels senior, calm and usable.</h2>
            <p className="section-description">
              Each service is framed around a real operational outcome: cleaner records, fewer
              documentation corrections, better review discipline and more confidence before audits
              or handover.
            </p>
            <TrackableLink
              className="button button-light"
              eventLabel="services contact"
              eventName="consultation_click"
              href="/contact"
            >
              Send your requirement
            </TrackableLink>
          </div>
          <div className="service-signature-list">
            {serviceItems.map((item) => (
              <article className="service-signature-card" key={item.title}>
                <p className="service-signature">{item.signature}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="service-outcome-box">
                  <strong>What the company gets</strong>
                  <p>{item.value}</p>
                </div>
                <ul className="service-deliverable-list">
                  {item.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container real-experience-grid">
          <div className="real-experience-copy">
            <p className="eyebrow">Why Trust Her?</p>
            <h2>Real workplace exposure, presented honestly.</h2>
            <p className="section-description">
              These images support Saumya&apos;s professional background and QA experience. They are
              shown as previous experience and work-context proof, not as fabricated client case
              studies or promised outcomes.
            </p>
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
          </div>
          <div className="experience-image-stack">
            <figure className="experience-image-frame experience-image-tall">
              <Image
                alt="Internal QA audit and self-inspection review in a pharmaceutical setting."
                className="experience-image"
                height={1024}
                sizes="(max-width: 980px) 100vw, 26vw"
                src={experienceImagePrimary}
                width={1536}
              />
              <figcaption>Audit-readiness and QA system review context</figcaption>
            </figure>
            <figure className="experience-image-frame">
              <Image
                alt="COA and specification review support in a QA laboratory."
                className="experience-image"
                height={1024}
                sizes="(max-width: 980px) 100vw, 32vw"
                src={experienceImageSecondary}
                width={1536}
              />
              <figcaption>Specification, COA, STP and technical document support</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container why-hire-layout">
          <div>
            <p className="eyebrow">Why Hire Saumya?</p>
            <h2>Because the problem is usually not knowledge. It is capacity, discipline and follow-through.</h2>
          </div>
          <div className="why-hire-list">
            {whyItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container engagement-grid">
          <div>
            <p className="eyebrow">How Engagement Works</p>
            <h2>Simple enough to start quickly. Structured enough to be useful.</h2>
          </div>
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

      <section className="section contact-closing-section">
        <div className="container contact-closing-grid contact-closing-premium">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Tell Saumya what is stuck. The message opens directly in WhatsApp.</h2>
            <p className="section-description">
              Share the document type, backlog, review issue or audit pressure point. If you use
              the form, the details are formatted into a WhatsApp message for Saumya at
              +91 87070 94072.
            </p>
            <p className="contact-location-line">Surat · Gujarat · Remote support across India</p>
            <div className="contact-closing-actions">
              <TrackableLink
                className="button button-primary"
                eventLabel="closing consultation"
                eventName="consultation_click"
                href="/contact"
              >
                Fill the quick form
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
                Call Saumya
              </TrackableLink>
            </div>
          </div>
          <figure className="contact-proof-image">
            <Image
              alt="Saumya Dubey reviewing QA documentation and production records."
              className="experience-image"
              height={1024}
              sizes="(max-width: 980px) 100vw, 34vw"
              src={contactImage}
              width={1536}
            />
            <figcaption>Founder-led review support for documentation-heavy teams</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
