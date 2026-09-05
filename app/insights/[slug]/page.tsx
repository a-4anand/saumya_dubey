import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { InsightView } from "@/components/insight-view";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrackableLink } from "@/components/trackable-link";
import { getServiceBySlug } from "@/data/services";
import { getAllInsights, getInsightBySlug } from "@/lib/insights";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export async function generateStaticParams() {
  const insights = await getAllInsights();
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getInsightBySlug(slug);

  if (!article) {
    return createMetadata({
      title: "Insight",
      description: "QA insight",
      path: `/insights/${slug}`,
    });
  }

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const allInsights = await getAllInsights();
  const related = allInsights
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);
  const relatedService = article.relatedService
    ? getServiceBySlug(article.relatedService)
    : null;
  const author = article.author || "Saumya Dubey";
  const publishedAt = article.publishedAt || "2026-09-05";
  const reviewedAt = article.reviewedAt || publishedAt;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: publishedAt,
    dateModified: reviewedAt,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@id": absoluteUrl("/#professional-service"),
    },
    mainEntityOfPage: absoluteUrl(`/insights/${article.slug}`),
    image: absoluteUrl(
      "/brand/qorivara/02-colorway-exports/png/qorivara-full-horizontal-forest-on-warm-cream.png",
    ),
  };

  return (
    <section className="section article-section">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        type="application/ld+json"
      />
      <div className="container narrow">
        <Breadcrumbs
          items={[
            { label: "Insights", href: "/insights" },
            { label: article.title, href: `/insights/${article.slug}` },
          ]}
        />
        <p className="article-meta">{article.pillar || article.category}</p>
        <h1>{article.title}</h1>
        <p className="body-large">{article.excerpt}</p>
        <div className="article-byline">
          <span>Author: {author}</span>
          <span>Published: {publishedAt}</span>
          <span>Reviewed: {reviewedAt}</span>
        </div>
        <p className="scope-note">
          This guide is practical education for QA documentation discussions. It is not legal,
          regulatory or certification advice.
        </p>
        <InsightView slug={article.slug} />
        <article className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
        </article>
        {article.sources?.length ? (
          <section className="article-sources">
            <h2>Sources</h2>
            <ul className="detail-list">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} rel="noreferrer" target="_blank">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <div className="cta-actions">
          {relatedService ? (
            <TrackableLink
              className="button button-primary"
              eventLabel={relatedService.slug}
              eventName="service_cta_click"
              href={`/services/${relatedService.slug}`}
            >
              Related service
            </TrackableLink>
          ) : null}
          <TrackableLink className="button button-secondary" href="/contact">
            Discuss a requirement
          </TrackableLink>
        </div>
        <section className="related-articles">
          <h2>Related reading</h2>
          <div className="insight-grid">
            {related.map((item) => (
              <article className="card insight-card" key={item.slug}>
                <p className="article-meta">{item.category}</p>
                <h3>{item.title}</h3>
                <TrackableLink className="button button-ghost" href={`/insights/${item.slug}`}>
                  Read article
                </TrackableLink>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
