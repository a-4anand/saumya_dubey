export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: "Documentation" | "Quality Systems" | "Batch / Record Review";
  bullets: string[];
  featured?: boolean;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ExperienceEntry {
  yearLabel: string;
  company: string;
  role: string;
  note?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface InsightFrontmatter {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  pillar?: string;
  author?: string;
  publishedAt?: string;
  reviewedAt?: string;
  relatedService?: string;
  sources?: Array<{
    label: string;
    url: string;
  }>;
}
