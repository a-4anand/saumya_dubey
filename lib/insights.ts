import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

import type { InsightFrontmatter } from "@/types/content";

const insightsDirectory = path.join(process.cwd(), "data", "insights");

export interface InsightArticle extends InsightFrontmatter {
  content: string;
}

export async function getInsightSlugs() {
  const files = await fs.readdir(insightsDirectory);
  return files.filter((file) => file.endsWith(".md"));
}

export async function getAllInsights(): Promise<InsightArticle[]> {
  const slugs = await getInsightSlugs();
  const items = await Promise.all(
    slugs.map(async (fileName) => {
      const filePath = path.join(insightsDirectory, fileName);
      const source = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(source);

      return {
        ...(data as InsightFrontmatter),
        content,
      };
    }),
  );

  return items.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getInsightBySlug(slug: string) {
  const items = await getAllInsights();
  return items.find((item) => item.slug === slug) ?? null;
}
