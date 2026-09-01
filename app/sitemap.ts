import type { MetadataRoute } from "next";

import { localSeoSlugs } from "@/data/local-seo";
import { getAllInsights } from "@/lib/insights";
import { absoluteUrl } from "@/lib/site";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/industries",
  "/how-it-works",
  "/insights",
  "/contact",
  "/faq",
  "/privacy",
  "/professional-scope",
  ...localSeoSlugs,
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const insights = await getAllInsights();

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route || "/"),
    })),
    ...insights.map((article) => ({
      url: absoluteUrl(`/insights/${article.slug}`),
    })),
  ];
}
