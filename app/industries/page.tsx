import Image from "next/image";

import { TrackableLink } from "@/components/trackable-link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Industries",
  description:
    "See which regulated manufacturing businesses are the best fit for Saumya Dubey's QA, documentation and backlog-reduction support.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero-luxury">
        <div className="container narrow">
          <p className="eyebrow">Industries</p>
          <h1>Built for manufacturers where documentation quality affects business confidence.</h1>
          <p className="body-large">
            The best fit is a business where records, reviews, SOP control and audit readiness are
            tied closely to operations, release confidence and management pressure.
          </p>
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container industry-story-grid">
          <article className="industry-story industry-story-wide">
            <div className="industry-story-copy">
              <p className="eyebrow">Pharmaceutical</p>
              <h3>Support for pharmaceutical teams where review quality and documentation control cannot slip.</h3>
              <p>
                A strong fit when batch records, SOPs, technical documents or audit-readiness work
                need more disciplined support than the current team bandwidth allows.
              </p>
            </div>
            <Image
              alt="Pharmaceutical manufacturing floor."
              className="story-image story-image-wide"
              height={941}
              priority
              sizes="(max-width: 980px) 100vw, 64vw"
              src="/images/pharma-manufacturing.png"
              width={1672}
            />
          </article>

          <article className="industry-story">
            <Image
              alt="Ayurvedic and herbal quality process."
              className="story-image"
              height={1024}
              sizes="(max-width: 980px) 100vw, 40vw"
              src="/images/ayurvedic-quality.png"
              width={1536}
            />
            <div className="industry-story-copy">
              <p className="eyebrow">Ayurvedic / Herbal</p>
              <h3>Especially aligned where Ayurveda-linked manufacturing needs both product understanding and formal documentation discipline.</h3>
              <p>
                The Pharmaceutical Chemistry and Ayurveda background strengthens the fit for
                document-heavy quality work in this sector.
              </p>
            </div>
          </article>

          <article className="industry-story">
            <Image
              alt="QA documentation and certificate review for related manufacturing sectors."
              className="story-image"
              height={1024}
              sizes="(max-width: 980px) 100vw, 40vw"
              src="/images/coa-specification.png"
              width={1536}
            />
            <div className="industry-story-copy">
              <p className="eyebrow">Nutraceutical / Related manufacturing</p>
              <h3>Useful where adjacent regulated sectors need stronger QA documentation and overflow review support.</h3>
              <p>
                The strongest use case is usually documentation cleanup, QA coordination, second
                review support or temporary bandwidth relief around a clear requirement.
              </p>
            </div>
          </article>

          <article className="industry-story industry-story-text">
            <p className="eyebrow">Also relevant</p>
            <h3>Cosmetic and third-party or private-label work can be discussed around the exact bottleneck.</h3>
            <p>
              The work is most useful when the pressure point is clear early: backlog, document
              review, SOP revision, QA coordination or audit-readiness support.
            </p>
            <TrackableLink
              className="service-link"
              eventLabel="industries consultation"
              eventName="consultation_click"
              href="/contact"
            >
              Discuss the bottleneck
            </TrackableLink>
          </article>
        </div>
      </section>
    </>
  );
}
