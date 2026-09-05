import Image from "next/image";

import { StructuredData } from "@/components/structured-data";
import { TrackableLink } from "@/components/trackable-link";
import { WhatsAppIcon } from "@/components/icons";
import { processSteps, siteConfig } from "@/data/site-config";
import { productizedOffers, serviceDefinitions, serviceFamilies } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
import { emailHref, whatsappHref } from "@/lib/site";

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

const industries = [
  "Pharmaceutical",
  "Ayurvedic / Herbal",
  "Nutraceutical",
  "Cosmetic / Related Manufacturing",
  "Third-Party / Private Label",
];

const whyQorivara = [
  {
    title: "Responsible Access",
    text: "Clients work directly with the responsible QORIVARA professional, with founder-led delivery or oversight where applicable today.",
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
  title: "Structured QA Support for Documentation-Heavy Manufacturing Teams",
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
            <p className="hero-descriptor">{siteConfig.descriptor}</p>
            <h1>Structured QA support for documentation-heavy manufacturing teams.</h1>
            <p className="body-large">
              QORIVARA helps pharmaceutical, Ayurvedic and selected regulated manufacturers reduce
              documentation backlog, strengthen review discipline and prepare for audits through
              scoped remote, hybrid and on-site support.
            </p>
            <div className="hero-credential-row" aria-label="Saumya Dubey credentials">
              {siteConfig.credibilityStrip.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p className="founder-line">
              Based in Surat · Remote support across India · NDA before confidential document exchange.
            </p>
            <div className="hero-actions">
              <TrackableLink
                className="button button-primary"
                eventLabel="hero qa requirement"
                eventName="hero_cta_click"
                href="/services"
              >
                Explore services
              </TrackableLink>
              <TrackableLink
                className="button button-secondary"
                eventLabel="hero discuss requirement"
                eventName="hero_cta_click"
                href="/contact"
              >
                Discuss a requirement
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
            <figcaption>Founder-led credibility inside a company-led QA service system.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container problem-layout">
          <div>
            <p className="eyebrow">Buyer Problems</p>
            <h2>Start with the pressure point.</h2>
            <p className="section-description">
              QORIVARA routes enquiries by the work product and responsibility boundary, not by a
              generic consulting catalogue.
            </p>
          </div>
          <div className="problem-card-grid">
            {[
              ["Batch records are waiting for review.", "batch-record-review"],
              ["SOPs need structured revision.", "sop-documentation"],
              ["An audit or self-inspection is approaching.", "audit-readiness-self-inspection"],
              ["The QA team needs temporary documentation capacity.", "overflow-qa-support"],
            ].map(([title, slug], index) => (
              <article className="problem-card-item" key={slug}>
                <span className="problem-card-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <TrackableLink
                    className="service-link"
                    eventLabel={slug}
                    eventName="service_cta_click"
                    href={`/services/${slug}`}
                  >
                    View the relevant service
                  </TrackableLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Service Families</p>
            <h2>One taxonomy for the work QORIVARA can support now.</h2>
          </div>
          <div className="service-family-grid">
            {serviceFamilies.map((family) => (
              <article className="card" key={family}>
                <p className="eyebrow">{family}</p>
                {serviceDefinitions
                  .filter((service) => service.family === family)
                  .map((service) => (
                    <TrackableLink
                      className="family-service-link"
                      eventLabel={service.slug}
                      eventName="service_cta_click"
                      href={`/services/${service.slug}`}
                      key={service.slug}
                    >
                      {service.title}
                    </TrackableLink>
                  ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-forest services-section">
        <div className="container services-editorial-grid">
          <div className="services-editorial-copy">
            <p className="eyebrow">Services</p>
            <h2>Precise support for documentation-heavy QA work.</h2>
            <p className="section-description">
              Each service page explains outputs, inputs, exclusions, delivery modes and the
              responsibility split before a buyer reaches the intake form.
            </p>
          </div>
          <div className="qori-service-list">
            {serviceDefinitions.map((service, index) => (
              <details className="qori-service-item" key={service.slug} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{service.title}</strong>
                  <small>{service.family}</small>
                </summary>
                <p>{service.outcome}</p>
                <TrackableLink
                  className="service-link service-link-light"
                  eventLabel={service.slug}
                  eventName="service_cta_click"
                  href={`/services/${service.slug}`}
                >
                  Review scope and deliverables
                </TrackableLink>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Starting Points</p>
            <h2>Productized enough to quote. Scoped enough to stay truthful.</h2>
          </div>
          <div className="offer-grid">
            {productizedOffers.map((offer) => (
              <article className="card" key={offer.title}>
                <h3>{offer.title}</h3>
                <p><strong>Scope:</strong> {offer.scope}</p>
                <p><strong>Outputs:</strong> {offer.outputs}</p>
                <p><strong>Boundary:</strong> {offer.boundary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container engagement-grid">
          <div>
            <p className="eyebrow">Controlled Method</p>
            <h2>Simple to start, controlled before confidential work begins.</h2>
          </div>
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

      <section className="section section-editorial">
        <div className="container support-mode-grid">
          <article>
            <p className="eyebrow">Remote</p>
            <h3>Documentation review, drafting support and status discussions.</h3>
            <p>Suitable after an NDA and approved secure exchange method.</p>
          </article>
          <article>
            <p className="eyebrow">Hybrid</p>
            <h3>Audit readiness, self-inspection and context-heavy QMS work.</h3>
            <p>Useful when site context helps but follow-through can continue remotely.</p>
          </article>
          <article>
            <p className="eyebrow">On-site</p>
            <h3>Physical walkthroughs and observation-based reviews.</h3>
            <p>Used only where the scope requires seeing the area, process or evidence.</p>
          </article>
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
        <div className="container founder-grid">
          <Image
            alt="Saumya Dubey, Founder and Lead QA Consultant at Qorivara Life Sciences."
            className="editorial-image founder-image"
            height={1024}
            sizes="(max-width: 980px) 100vw, 38vw"
            src={founderPortraitImage}
            width={1536}
          />
          <div>
            <p className="eyebrow">Founder Credibility</p>
            <h2>Saumya leads the current practice inside QORIVARA.</h2>
            <p className="founder-title">Founder & Lead QA Consultant</p>
            <div className="founder-credentials">
              {siteConfig.credibilityStrip.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p className="section-description">
              Her previous QA roles are presented as professional experience, not as QORIVARA
              clients, partners or endorsements. The full timeline sits on the About page.
            </p>
            <TrackableLink className="button button-secondary" href="/about">
              Read about QORIVARA
            </TrackableLink>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container industries-editorial">
          <div>
            <p className="eyebrow">Sectors</p>
            <h2>Defined scope for regulated manufacturing contexts.</h2>
            <p className="section-description">
              Pharmaceutical and Ayurveda/herbal documentation are current strengths. Nutraceutical,
              cosmetic and private-label enquiries are scoped carefully so QORIVARA does not imply
              regulatory authority it has not assigned.
            </p>
            <div className="industry-text-list">
              {industries.map((industry) => (
                <span key={industry}>{industry}</span>
              ))}
            </div>
            <TrackableLink className="button button-secondary" href="/industries">
              Review sector boundaries
            </TrackableLink>
          </div>
          <div className="industry-photo-pair">
            <Image
              alt="Pharmaceutical manufacturing environment."
              className="editorial-image"
              height={941}
              sizes="(max-width: 980px) 100vw, 28vw"
              src={pharmaImage}
              width={1672}
            />
            <Image
              alt="Ayurvedic and herbal quality documentation workplace."
              className="editorial-image"
              height={1024}
              sizes="(max-width: 980px) 100vw, 28vw"
              src={ayurvedicImage}
              width={1536}
            />
          </div>
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
