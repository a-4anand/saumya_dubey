import Image from "next/image";

import { TrackableLink } from "@/components/trackable-link";
import { experienceTimeline, siteConfig } from "@/data/site-config";
import { createMetadata } from "@/lib/metadata";
import { contactConfig, profileHref } from "@/lib/site";

const fitPoints = [
  "Direct communication with the person doing the work",
  "Background in Pharmaceutical Chemistry and Ayurveda",
  "Hands-on QA roles across regulated manufacturing settings",
  "Useful for backlog, document review and overflow QA support",
  "Scoped work instead of oversized consulting packages",
];

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn why Saumya Dubey is a strong fit for documentation-heavy QA support in pharmaceutical, Ayurvedic and related manufacturing businesses.",
  path: "/about",
});

export default function AboutPage() {
  const profileLabel = contactConfig.profilePdfUrl
    ? "Download professional profile"
    : "Request professional profile";

  return (
    <>
      <section className="page-hero-luxury">
        <div className="container editorial-split editorial-split-large">
          <div className="editorial-copy">
            <p className="eyebrow">About</p>
            <p className="hero-descriptor">{siteConfig.headerDescriptor}</p>
            <h1>Why businesses work directly with Saumya.</h1>
            <p className="body-large">
              Founder-led QA and documentation support for businesses that need practical help
              instead of a large consulting layer.
            </p>
            <p className="section-description">
              Saumya combines Pharmaceutical Chemistry, D.Pharm in Ayurveda and hands-on QA roles
              across regulated manufacturing settings to support document-heavy quality work with
              more structure and clarity.
            </p>
            <div className="hero-actions">
              <TrackableLink
                className="button button-secondary"
                eventLabel="about profile"
                eventName="profile_download"
                href={profileHref}
                newTab
              >
                {profileLabel}
              </TrackableLink>
            </div>
          </div>
          <div className="editorial-media editorial-media-offset">
            <Image
              alt="Portrait of Saumya Dubey in a professional office setting."
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
          <div className="editorial-copy">
            <p className="eyebrow">Why this background matters</p>
            <h2>A practical fit for documentation-heavy QA work.</h2>
            <p className="section-description">
              Businesses usually do not need abstract QA advice. They need someone who understands
              review pressure, documentation discipline and the operational reality behind the
              paperwork.
            </p>
            <p className="section-description">
              Saumya&apos;s previous roles are part of her factual experience and are presented as
              professional background only, not as current consulting clients.
            </p>
          </div>

          <div className="editorial-list-block">
            <p className="eyebrow">What clients get</p>
            <ul className="detail-list">
              {fitPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container">
          <SectionTitle title="Experience" />
          <div className="career-timeline career-timeline-animated">
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

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{title}</p>
      <h2>The career path behind the independent practice.</h2>
    </div>
  );
}
