import Image from "next/image";

import { StructuredData } from "@/components/structured-data";
import { TrackableLink } from "@/components/trackable-link";
import { WhatsAppIcon } from "@/components/icons";
import { experienceTimeline, processSteps, siteConfig } from "@/data/site-config";
import { createMetadata } from "@/lib/metadata";
import { emailHref, whatsappHref } from "@/lib/site";

const brandLogo =
  "/brand/qorivara/03-platform-exports/svg/24-website-header-light.svg";
const heroPortraitImage = "/images/saumya-hero.png";
const founderPortraitImage = "/images/saumya-about.png";
const cleanroomImage =
  "/images/real-experience/codex-clipboard-19fc0b89-6b54-4a69-a6a0-d03c92ba830a.png";
const qaDeskImage =
  "/images/real-experience/codex-clipboard-d7bb4d8b-be8a-4fd3-8957-134ba09e6189.png";
const whiteCoatImage = "/images/document-review.png";
const pharmaImage = "/images/pharma-manufacturing.png";
const ayurvedicImage = "/images/ayurvedic-quality.png";
const technicalImage = "/images/coa-specification.png";

const services = [
  {
    number: "01",
    title: "BMR / BPR",
    meta: "Preparation · Review · Revision",
    detail:
      "Support for batch manufacturing and packing records where accuracy, traceability and final-review confidence matter.",
  },
  {
    number: "02",
    title: "SOP",
    meta: "Preparation · Review · Revision",
    detail:
      "Practical cleanup and revision support so procedures stay current, readable and easier for teams to follow.",
  },
  {
    number: "03",
    title: "Change Control",
    meta: "Documentation · Structure · Follow-through",
    detail:
      "Help with change-control records and supporting documentation where scattered details need a clearer controlled path.",
  },
  {
    number: "04",
    title: "Internal Audit & Self-Inspection",
    meta: "Gap review · Preparation · Action points",
    detail:
      "Focused review before pressure builds, turning visible gaps into practical follow-through actions.",
  },
  {
    number: "05",
    title: "Specifications / STP / TDS",
    meta: "Technical consistency · Review · Cleanup",
    detail:
      "Review support for technical documents that need clearer wording, stronger consistency and fewer avoidable corrections.",
  },
  {
    number: "06",
    title: "COA Preparation & Review",
    meta: "Certificate review · Detail checks · QA handover",
    detail:
      "Preparation and review support for COAs where data presentation and quality review discipline need attention.",
  },
  {
    number: "07",
    title: "Batch Record Final Review",
    meta: "Backlog · Missing-entry checks · Release confidence",
    detail:
      "A disciplined second pass for teams that need batch records checked carefully without stretching internal QA further.",
  },
  {
    number: "08",
    title: "Area Monitoring & QA Documentation",
    meta: "Records · Logs · Quality-system support",
    detail:
      "Scoped support for area monitoring records and the supporting QA documentation that keeps quality systems traceable.",
  },
];

const industries = [
  "Pharmaceutical",
  "Ayurvedic / Herbal",
  "Nutraceutical",
  "Cosmetic / Related Manufacturing",
  "Third-Party / Private Label",
];

const whyQorivara = [
  {
    title: "Direct Access",
    text: "Clients work directly with Saumya Dubey, the founder and QA professional behind the work.",
  },
  {
    title: "Focused Scope",
    text: "Engagements stay close to the real bottleneck: records, SOPs, review pressure, audits or quality-system follow-through.",
  },
  {
    title: "Practical Experience",
    text: "The support is built from hands-on QA work across real manufacturing environments, not borrowed consulting theatre.",
  },
];

export const metadata = createMetadata({
  title: "Qorivara Life Sciences | QA, GMP & Documentation Consulting",
  description:
    "Practical QA, GMP, documentation and quality-system support for pharmaceutical, Ayurvedic, nutraceutical and related manufacturers.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <StructuredData />

      <section className="qori-hero">
        <div className="container qori-hero-grid">
          <div className="qori-hero-copy">
            <Image
              alt="Qorivara Life Sciences"
              className="qori-hero-logo"
              height={1065}
              priority
              src={brandLogo}
              width={4096}
            />
            <p className="hero-descriptor">{siteConfig.descriptor}</p>
            <h1>{siteConfig.heroHeadline}</h1>
            <p className="body-large">{siteConfig.heroDescription}</p>
            <div className="hero-credential-row" aria-label="Saumya Dubey credentials">
              {siteConfig.credibilityStrip.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p className="founder-line">
              Founded by <strong>Saumya Dubey</strong>, Founder & Lead QA Consultant.
            </p>
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
                WhatsApp Qorivara
              </TrackableLink>
            </div>
          </div>

          <figure className="qori-portrait">
            <Image
              alt="Saumya Dubey, founder of Qorivara Life Sciences."
              className="qori-portrait-image"
              height={1024}
              priority
              sizes="(max-width: 980px) 100vw, 42vw"
              src={heroPortraitImage}
              width={1536}
            />
            <figcaption>Qorivara is the company. Saumya is the person behind the QA work.</figcaption>
          </figure>
        </div>
      </section>

      <section className="trust-type-strip">
        <div className="container trust-type-row">
          <span>B.Sc. Pharmaceutical Chemistry</span>
          <span>D.Pharm — Ayurveda</span>
          <span>3+ Years QA Experience</span>
          <span>Surat · Gujarat · India</span>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container real-work-feature">
          <figure className="real-work-image">
            <Image
              alt="Saumya Dubey in a historical QA cleanroom work setting."
              className="experience-image"
              height={1824}
              loading="eager"
              sizes="(max-width: 980px) 100vw, 36vw"
              src={cleanroomImage}
              width={862}
            />
            <figcaption>Historical professional QA experience, not a Qorivara facility.</figcaption>
          </figure>
          <div>
            <p className="eyebrow">Real QA Experience</p>
            <h2>Built from real QA work.</h2>
            <p className="section-description">
              Qorivara is built on practical Quality Assurance experience across pharmaceutical
              environments. The work is grounded in records, review discipline, SOP control and the
              follow-through that manufacturing quality systems actually need.
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
        </div>
      </section>

      <section className="section qori-detail-section">
        <div className="container detail-image-grid">
          <div>
            <p className="eyebrow">Documentation</p>
            <h2>The work is often in the details.</h2>
            <p className="section-description">
              Qorivara supports the documents that slow teams down when they are outdated,
              incomplete or difficult to defend during review.
            </p>
            <div className="label-cloud">
              {["BMR / BPR", "SOP", "COA", "Specifications", "STP / TDS", "Batch Record Review"].map(
                (item) => (
                  <span key={item}>{item}</span>
                ),
              )}
            </div>
          </div>
          <Image
            alt="Saumya Dubey working at a QA desk with files and documentation."
            className="editorial-image detail-feature-image"
            height={1086}
            loading="eager"
            sizes="(max-width: 980px) 100vw, 44vw"
            src={qaDeskImage}
            width={1448}
          />
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container detail-image-grid detail-image-grid-reverse">
          <Image
            alt="Saumya Dubey reviewing QA documentation in a white coat."
            className="editorial-image detail-feature-image"
            height={1024}
            loading="eager"
            sizes="(max-width: 980px) 100vw, 44vw"
            src={whiteCoatImage}
            width={1536}
          />
          <div>
            <p className="eyebrow">Quality Systems</p>
            <h2>Quality systems need follow-through.</h2>
            <p className="section-description">
              Internal audits, self-inspections, change-control records and monitoring documents
              all need disciplined closure, not just good intentions.
            </p>
            <div className="label-cloud">
              {["Internal Audit", "Self Inspection", "Change Control", "Area Monitoring"].map(
                (item) => (
                  <span key={item}>{item}</span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-forest services-section">
        <div className="container services-editorial-grid">
          <div className="services-editorial-copy">
            <p className="eyebrow">Services</p>
            <h2>Precise support for documentation-heavy QA work.</h2>
            <p className="section-description">
              An editorial service list keeps the work scannable: numbers, thin dividers and
              expandable detail for the support a manufacturing team may actually need.
            </p>
          </div>
          <div className="qori-service-list">
            {services.map((service, index) => (
              <details className="qori-service-item" key={service.number} open={index === 0}>
                <summary>
                  <span>{service.number}</span>
                  <strong>{service.title}</strong>
                  <small>{service.meta}</small>
                </summary>
                <p>{service.detail}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container industries-editorial">
          <div>
            <p className="eyebrow">Industries</p>
            <h2>For regulated manufacturing businesses where quality records matter.</h2>
            <p className="section-description">
              The strongest fit is a team that needs practical QA documentation support, sharper
              review discipline or temporary bandwidth around a clear requirement.
            </p>
            <div className="industry-text-list">
              {industries.map((industry) => (
                <span key={industry}>{industry}</span>
              ))}
            </div>
          </div>
          <div className="industry-photo-pair">
            <Image
              alt="Pharmaceutical manufacturing environment."
              className="editorial-image"
              height={941}
              loading="eager"
              sizes="(max-width: 980px) 100vw, 28vw"
              src={pharmaImage}
              width={1672}
            />
            <Image
              alt="Ayurvedic and herbal quality documentation workplace."
              className="editorial-image"
              height={1024}
              loading="eager"
              sizes="(max-width: 980px) 100vw, 28vw"
              src={ayurvedicImage}
              width={1536}
            />
          </div>
        </div>
      </section>

      <section className="section founder-section">
        <div className="container founder-grid">
          <Image
            alt="Saumya Dubey, Founder and Lead QA Consultant at Qorivara Life Sciences."
            className="editorial-image founder-image"
            height={1024}
            loading="eager"
            sizes="(max-width: 980px) 100vw, 38vw"
            src={founderPortraitImage}
            width={1536}
          />
          <div>
            <p className="eyebrow">Founder</p>
            <h2>Meet Saumya.</h2>
            <p className="founder-title">Founder & Lead QA Consultant</p>
            <div className="founder-credentials">
              {siteConfig.credibilityStrip.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p className="section-description">
              Saumya&apos;s career began in hands-on QA roles and now continues through Qorivara
              Life Sciences in Surat. Her work is practical, document-aware and strongest where a
              business needs clear support without adding a large consulting layer.
            </p>
          </div>
        </div>
      </section>

      <section className="section why-qori-section">
        <div className="container">
          <p className="eyebrow">Why Qorivara</p>
          <h2>A focused partner for the work that needs attention.</h2>
          <div className="why-qori-grid">
            {whyQorivara.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container engagement-grid">
          <div>
            <p className="eyebrow">How It Works</p>
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

      <section className="section section-cream">
        <div className="container support-mode-grid">
          <article>
            <p className="eyebrow">Remote Support</p>
            <h3>Documentation and review work that can often be handled digitally.</h3>
            <p>
              Useful for scoped SOP, BMR/BPR, COA, specification, STP/TDS and quality-system record
              review when secure document sharing is practical.
            </p>
          </article>
          <article>
            <p className="eyebrow">Hybrid Support</p>
            <h3>Assignments that may benefit from periodic site visits.</h3>
            <p>
              Some quality-system and audit-readiness requirements are better discussed with site
              context, depending on location, scope and confidentiality needs.
            </p>
          </article>
          <Image
            alt="Technical QA documentation and specification review."
            className="editorial-image"
            height={1024}
            loading="eager"
            sizes="(max-width: 980px) 100vw, 28vw"
            src={technicalImage}
            width={1536}
          />
        </div>
      </section>

      <section className="section contact-closing-section">
        <div className="container contact-closing-grid contact-closing-premium">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Have a QA requirement?</h2>
            <p className="section-description">
              Tell Qorivara what you are working on and what support you need.
            </p>
            <p className="contact-location-line">Surat · Gujarat · India</p>
            <p className="contact-location-line">
              <a href={emailHref}>contact@qorivara.com</a>
            </p>
            <div className="contact-closing-actions">
              <TrackableLink
                className="button button-primary"
                eventLabel="closing consultation"
                eventName="consultation_click"
                href="/contact"
              >
                Discuss Your Requirement
              </TrackableLink>
              <TrackableLink
                className="button button-whatsapp"
                eventLabel="closing whatsapp"
                eventName="whatsapp_click"
                href={whatsappHref}
              >
                <WhatsAppIcon />
                WhatsApp Qorivara
              </TrackableLink>
            </div>
          </div>
          <Image
            alt="Qorivara Life Sciences quality documentation support context."
            className="editorial-image contact-image"
            height={1024}
            loading="eager"
            sizes="(max-width: 980px) 100vw, 34vw"
            src={technicalImage}
            width={1536}
          />
        </div>
      </section>
    </>
  );
}
