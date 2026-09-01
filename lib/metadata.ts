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
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
});
