import type { Metadata } from "next";

import { siteConfig } from "@/data/site-config";
import { absoluteUrl } from "@/lib/site";

interface MetadataInput {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

export const createMetadata = ({
  title,
  description,
  path = "/",
  keywords,
}: MetadataInput): Metadata => ({
  title,
  description,
  keywords,
  alternates: {
    canonical: absoluteUrl(path),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl(path),
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: absoluteUrl(
          "/brand/qorivara/02-colorway-exports/png/qorivara-full-horizontal-forest-on-warm-cream.png",
        ),
        width: 4096,
        height: 1229,
        alt: "Qorivara Life Sciences - Quality, Compliance, Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      absoluteUrl(
        "/brand/qorivara/02-colorway-exports/png/qorivara-full-horizontal-forest-on-warm-cream.png",
      ),
    ],
  },
});
