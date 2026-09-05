import { absoluteUrl } from "@/lib/site";
import { TrackableLink } from "./trackable-link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "Home", href: "/" }, ...items];
  const payload = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        {allItems.map((item, index) => (
          <span key={item.href}>
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            <TrackableLink href={item.href}>{item.label}</TrackableLink>
          </span>
        ))}
      </nav>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
        type="application/ld+json"
      />
    </>
  );
}
