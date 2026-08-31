import { siteConfig } from "@/data/site-config";
import { absoluteUrl, contactConfig } from "@/lib/site";

export function StructuredData() {
  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": absoluteUrl("/#professional-service"),
        name: siteConfig.name,
        description: siteConfig.description,
        areaServed: siteConfig.serviceAreas,
        telephone: contactConfig.phone || undefined,
        email: contactConfig.email || undefined,
        url: absoluteUrl("/"),
        image: absoluteUrl("/icon.svg"),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
      },
      {
        "@type": "Person",
        "@id": absoluteUrl("/about#person"),
        name: siteConfig.name,
        jobTitle: siteConfig.title,
        worksFor: {
          "@type": "Organization",
          name: siteConfig.name,
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
