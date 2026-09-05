import { SectionHeading } from "@/components/section-heading";
import { TrackableLink } from "@/components/trackable-link";
import { getAllInsights } from "@/lib/insights";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "Read QORIVARA field guides on QA documentation, quality systems, audit readiness, sector context and QA capacity.",
  path: "/insights",
});

export default async function InsightsPage() {
  const insights = await getAllInsights();

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Insights</p>
            <h1>Practical writing for businesses dealing with documentation and QA pressure.</h1>
            <p className="body-large">
              These field guides clarify common bottlenecks, define practical review questions and
              route readers toward the relevant QORIVARA service scope.
            </p>
          </div>
          <aside className="card page-hero-note">
            <p className="eyebrow">Why read this</p>
            <p>
              Editorial pillars: QA Documentation, Quality Systems, Audit Readiness, Sector
              Context and QA Capacity.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Useful reading before you enquire"
            description="If one of these topics looks familiar, it is often a good signal that the requirement is worth discussing directly."
          />
          <div className="insight-grid">
            {insights.map((insight) => (
              <article className="card insight-card" key={insight.slug}>
                <p className="article-meta">{insight.category}</p>
                <h3>{insight.title}</h3>
                <p>{insight.excerpt}</p>
                <TrackableLink
                  className="button button-ghost"
                  eventLabel={insight.slug}
                  eventName="insight_click"
                  href={`/insights/${insight.slug}`}
                >
                  Read article
                </TrackableLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
