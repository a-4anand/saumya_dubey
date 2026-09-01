import { siteConfig } from "@/data/site-config";
import { absoluteUrl, contactConfig, whatsappNumber } from "@/lib/site";

export function StructuredData() {
  const serviceNames = [
    "QA documentation cleanup",
    "Batch record review support",
    "SOP revision support",
    "Internal audit readiness support",
    "GMP documentation support",
    "COA, specification, STP and TDS review",
    "Ayurvedic and herbal documentation support",
  ];

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
          "@id": absoluteUrl("/#person"),
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": absoluteUrl("/#professional-service"),
        name: siteConfig.name,
        alternateName: "Saumya Dubey QA & GMP Consulting",
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
        image: absoluteUrl("/images/saumya-hero.png"),
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "QA, GMP and documentation consulting services",
          itemListElement: serviceNames.map((serviceName) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: serviceName,
              provider: {
                "@id": absoluteUrl("/#professional-service"),
              },
              areaServed: "Surat, Gujarat and remote engagements across India",
            },
          })),
        },
        sameAs: whatsappNumber ? [`https://wa.me/${whatsappNumber}`] : undefined,
      },
      {
        "@type": "Person",
        "@id": absoluteUrl("/#person"),
        name: siteConfig.name,
        jobTitle: siteConfig.title,
        image: absoluteUrl("/images/saumya-about.png"),
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
