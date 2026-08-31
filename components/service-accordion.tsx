import Image from "next/image";

import { TrackableLink } from "./trackable-link";

interface ServiceAccordionItem {
  number: string;
  title: string;
  meta: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bullets?: string[];
}

interface ServiceAccordionProps {
  items: ServiceAccordionItem[];
}

export function ServiceAccordion({ items }: ServiceAccordionProps) {
  return (
    <div className="service-accordion">
      {items.map((item, index) => (
        <details
          className="service-detail"
          key={item.title}
          open={index === 0}
        >
          <summary className="service-summary">
            <div className="service-summary-main">
              <span className="service-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="service-meta">{item.meta}</p>
              </div>
            </div>
            <span aria-hidden="true" className="service-arrow">
              →
            </span>
          </summary>

          <div className="service-detail-panel">
            <div className="service-detail-copy">
              <p>{item.description}</p>
              {item.bullets?.length ? (
                <ul className="detail-list detail-list-compact">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              <TrackableLink
                className="service-link"
                eventLabel={item.title}
                eventName="service_click"
                href="/contact"
              >
                Discuss this requirement
              </TrackableLink>
            </div>

            <div className="service-preview">
              <Image
                alt={item.imageAlt}
                className="service-preview-image"
                height={1024}
                sizes="(max-width: 900px) 100vw, 32vw"
                src={item.imageSrc}
                width={1536}
              />
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
