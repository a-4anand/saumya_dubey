import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ScopeBoundary } from "@/components/scope-boundary";
import { TrackableLink } from "@/components/trackable-link";
import { getServiceBySlug, serviceDefinitions } from "@/data/services";
import { getAllInsights } from "@/lib/insights";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return serviceDefinitions.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const insights = await getAllInsights();
  const relatedInsight =
    insights.find((insight) => insight.slug === service.relatedInsightSlug) ?? insights[0];
  const intakeHref = `/contact?service=${encodeURIComponent(service.slug)}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/services/${service.slug}#service`),
    name: service.title,
    description: service.description,
    provider: {
      "@id": absoluteUrl("/#professional-service"),
    },
    areaServed: "India",
    serviceType: service.family,
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        type="application/ld+json"
      />
      <section className="page-hero-luxury">
        <div className="container narrow">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.shortTitle, href: `/services/${service.slug}` },
            ]}
          />
          <p className="eyebrow">{service.family}</p>
          <h1>{service.title}</h1>
          <p className="body-large">{service.outcome}</p>
          <p className="section-description">{service.description}</p>
          <div className="hero-actions">
            <TrackableLink
              className="button button-primary"
              eventLabel={service.slug}
              eventName="service_cta_click"
              href={intakeHref}
            >
              Request scope
            </TrackableLink>
            <TrackableLink className="button button-secondary" href="/professional-scope">
              Read professional scope
            </TrackableLink>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container service-page-grid">
          <InfoBlock title="Who It Is For" items={service.forWhom} />
          <InfoBlock title="Signals This Fits" items={service.signals} />
          <InfoBlock title="What QORIVARA Will Do" items={service.qorivaraDoes} />
          <InfoBlock title="Deliverables" items={service.deliverables} />
          <InfoBlock title="Included" items={service.included} />
          <InfoBlock title="Client Inputs" items={service.clientInputs} />
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container service-detail-layout">
          <ScopeBoundary items={service.excluded} />
          <article className="card">
            <p className="eyebrow">Delivery Mode</p>
            <h2>Remote, hybrid or on-site only where the work supports it.</h2>
            <div className="delivery-mode-row">
              {service.deliveryModes.map((mode) => (
                <span key={mode}>{mode}</span>
              ))}
            </div>
            <p>{service.modeNote}</p>
          </article>
          <article className="card">
            <p className="eyebrow">Engagement</p>
            <h2>Commercial model</h2>
            <ul className="detail-list">
              {service.engagementModels.map((model) => (
                <li key={model}>{model}</li>
              ))}
            </ul>
            <p>{service.responsibleRole}</p>
          </article>
          <InfoBlock title="Timeline And Quote Factors" items={service.timelineFactors} />
        </div>
      </section>

      <section className="section section-cream">
        <div className="container service-detail-layout">
          <article className="card">
            <p className="eyebrow">FAQ</p>
            {service.faqs.map((faq) => (
              <div className="faq-mini" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </article>
          <article className="card">
            <p className="eyebrow">Related Insight</p>
            <h2>{relatedInsight.title}</h2>
            <p>{relatedInsight.excerpt}</p>
            <TrackableLink className="button button-secondary" href={`/insights/${relatedInsight.slug}`}>
              Read guide
            </TrackableLink>
          </article>
          <article className="card">
            <p className="eyebrow">Next Step</p>
            <h2>Discuss this requirement.</h2>
            <p>
              Do not submit confidential records through the public form. If the fit is right,
              QORIVARA will agree an NDA and approved exchange method first.
            </p>
            <TrackableLink className="button button-primary" href={intakeHref}>
              Start guided intake
            </TrackableLink>
          </article>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="card">
      <p className="eyebrow">{title}</p>
      <ul className="detail-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
