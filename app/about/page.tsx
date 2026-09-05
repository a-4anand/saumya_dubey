import Image from "next/image";

import { TrackableLink } from "@/components/trackable-link";
import { experienceTimeline, siteConfig } from "@/data/site-config";
import { createMetadata } from "@/lib/metadata";

const principles = [
  "Precision in document scope and review expectations",
  "Honest boundaries before accepting work",
  "Controlled documentation and clear responsibility split",
  "Confidentiality before document exchange",
  "Practical delivery with status, review and closeout",
];

const scalableRoles = [
  "Founder / Managing Consultant",
  "QA Consultant / Senior QA Consultant",
  "Documentation Specialist",
  "Audit Specialist",
  "Regulatory Consultant when qualified capacity exists",
  "Client Coordinator when project volume requires it",
];

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn why QORIVARA exists, how it scopes QA support and how Saumya Dubey leads the current practice.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero-luxury">
        <div className="container editorial-split editorial-split-large">
          <div className="editorial-copy">
            <p className="eyebrow">About QORIVARA</p>
            <h1>A focused QA consultancy built around controlled documentation work.</h1>
            <p className="body-large">
              QORIVARA exists for regulated manufacturing teams that need scoped QA documentation,
              quality-system and audit-readiness support without exaggerated claims or unclear
              responsibility.
            </p>
          </div>
          <div className="editorial-media editorial-media-offset">
            <Image
              alt="Saumya Dubey, Founder and Lead QA Consultant at QORIVARA Life Sciences."
              className="editorial-image editorial-image-portrait"
              height={1024}
              priority
              sizes="(max-width: 980px) 100vw, 42vw"
              src="/images/saumya-about.png"
              width={1536}
            />
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container editorial-split">
          <div>
            <p className="eyebrow">Operating Principles</p>
            <h2>The firm is designed around method, not a personality-led promise.</h2>
            <p className="section-description">
              QORIVARA accepts work only when the scope, competence, client inputs, confidentiality
              expectations and responsibility split can be defined clearly.
            </p>
          </div>
          <ul className="detail-list">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container editorial-split">
          <div>
            <p className="eyebrow">Delivery Model</p>
            <h2>Founder-led today, structured to add qualified professionals later.</h2>
            <p className="section-description">
              Saumya is the public founder and current lead consultant. As QORIVARA grows, services
              can be assigned to appropriately qualified professionals without changing the core
              promise: defined scope, controlled delivery and responsible review.
            </p>
          </div>
          <div className="card">
            <p className="eyebrow">Future Role Architecture</p>
            <ul className="detail-list">
              {scalableRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container editorial-split editorial-split-large">
          <div>
            <p className="eyebrow">Founder</p>
            <h2>Saumya Dubey</h2>
            <p className="founder-title">{siteConfig.founderTitle}</p>
            <div className="founder-credentials">
              {siteConfig.credibilityStrip.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p className="section-description">
              Saumya brings approximately three years of pharmaceutical Quality Assurance
              experience and education in Pharmaceutical Chemistry and Ayurveda to QORIVARA&apos;s
              present service scope.
            </p>
            <TrackableLink className="button button-secondary" href="/professional-scope">
              Read professional scope
            </TrackableLink>
          </div>
          <figure className="experience-image-frame">
            <Image
              alt="Saumya Dubey in a previous professional QA cleanroom setting."
              className="experience-image"
              height={1824}
              sizes="(max-width: 980px) 100vw, 34vw"
              src="/images/real-experience/codex-clipboard-19fc0b89-6b54-4a69-a6a0-d03c92ba830a.png"
              width={862}
            />
            <figcaption>Previous professional experience; not a QORIVARA facility or client project.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Previous Professional Experience</p>
            <h2>Career history, presented as background only.</h2>
            <p className="section-description">
              These organizations are previous employers, not QORIVARA clients, partners, sponsors
              or endorsers.
            </p>
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
        </div>
      </section>
    </>
  );
}
