import { TrackableLink } from "@/components/trackable-link";
import { productizedOffers, serviceDefinitions, serviceFamilies } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Compare QORIVARA's scoped QA documentation, quality-system, audit-readiness and overflow QA services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero-luxury">
        <div className="container narrow">
          <p className="eyebrow">Services</p>
          <h1>Scoped QA services with clear outputs and boundaries.</h1>
          <p className="body-large">
            QORIVARA organizes current public work into three service families. Each service states
            what is included, what is excluded, what the client must provide and which delivery
            modes are realistic.
          </p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="service-family-stack">
            {serviceFamilies.map((family) => (
              <section className="service-family-block" key={family}>
                <div>
                  <p className="eyebrow">{family}</p>
                  <h2>{family}</h2>
                </div>
                <div className="service-hub-list">
                  {serviceDefinitions
                    .filter((service) => service.family === family)
                    .map((service) => (
                      <article className="service-hub-row" key={service.slug}>
                        <div>
                          <h3>{service.title}</h3>
                          <p>{service.outcome}</p>
                        </div>
                        <TrackableLink
                          className="button button-secondary"
                          eventLabel={service.slug}
                          eventName="service_cta_click"
                          href={`/services/${service.slug}`}
                        >
                          Review service
                        </TrackableLink>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Starting Points</p>
            <h2>Engagement models, not off-the-shelf promises.</h2>
            <p className="section-description">
              Timing and quote depend on document volume, source quality, complexity, urgency,
              meetings, iterations, specialist review and travel where applicable.
            </p>
          </div>
          <div className="offer-grid">
            {productizedOffers.map((offer) => (
              <article className="card" key={offer.title}>
                <h3>{offer.title}</h3>
                <p>
                  <strong>Scope:</strong> {offer.scope}
                </p>
                <p>
                  <strong>Outputs:</strong> {offer.outputs}
                </p>
                <p>
                  <strong>Boundary:</strong> {offer.boundary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
