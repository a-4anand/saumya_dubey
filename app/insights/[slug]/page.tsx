import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { InsightView } from "@/components/insight-view";
import { TrackableLink } from "@/components/trackable-link";
import { getAllInsights, getInsightBySlug } from "@/lib/insights";
import { createMetadata } from "@/lib/metadata";

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

  return (
    <section className="section">
      <div className="container narrow">
        <p className="article-meta">{article.category}</p>
        <h1>{article.title}</h1>
        <p className="body-large">{article.excerpt}</p>
        <InsightView slug={article.slug} title={article.title} />
        <article className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
        </article>
        <div className="cta-actions">
          <TrackableLink
            className="button button-primary"
            eventLabel={`article consultation ${article.slug}`}
            eventName="consultation_click"
            href="/contact"
          >
            Discuss your QA requirement
          </TrackableLink>
        </div>
      </div>
    </section>
  );
}
