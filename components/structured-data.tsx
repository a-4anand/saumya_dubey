import { siteConfig } from "@/data/site-config";
import { serviceDefinitions } from "@/data/services";
import { absoluteUrl, contactConfig } from "@/lib/site";

export function StructuredData() {
  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: siteConfig.name,
        url: absoluteUrl("/"),
        inLanguage: "en-IN",
        publisher: {
          "@id": absoluteUrl("/#professional-service"),
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": absoluteUrl("/#professional-service"),
        name: siteConfig.name,
        alternateName: "Qorivara",
        description: siteConfig.description,
        areaServed: [
          {
            "@type": "City",
            name: "Surat",
          },
          {
            "@type": "State",
            name: "Gujarat",
          },
          {
            "@type": "Country",
            name: "India",
          },
        ],
        telephone: contactConfig.phone || undefined,
        email: contactConfig.email || undefined,
        url: absoluteUrl("/"),
        image: absoluteUrl(
          "/brand/qorivara/02-colorway-exports/png/qorivara-full-horizontal-forest-on-warm-cream.png",
        ),
        logo: absoluteUrl("/brand/qorivara/03-platform-exports/svg/24-website-header-light.svg"),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "QA, GMP and documentation consulting services",
          itemListElement: serviceDefinitions.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              provider: {
                "@id": absoluteUrl("/#professional-service"),
              },
              areaServed: "Surat, Gujarat and remote engagements across India",
            },
          })),
        },
        founder: {
          "@id": absoluteUrl("/#person"),
        },
      },
      {
        "@type": "Person",
        "@id": absoluteUrl("/#person"),
        name: siteConfig.founderName,
        jobTitle: siteConfig.founderTitle,
        image: absoluteUrl(
          "/images/selected-gallery/codex-clipboard-2ee06e77-2ba9-4652-911f-95719619aa2f.png",
        ),
        url: absoluteUrl("/about"),
        knowsAbout: [
          "Quality assurance",
          "GMP documentation",
          "SOP revision",
          "Batch record review",
          "Internal audit readiness",
          "Pharmaceutical quality systems",
          "Ayurvedic documentation",
        ],
        worksFor: {
          "@id": absoluteUrl("/#professional-service"),
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
      },
    ],
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
      type="application/ld+json"
    />
  );
}
