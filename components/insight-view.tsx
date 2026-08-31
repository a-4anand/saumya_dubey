"use client";

import { useEffect } from "react";

import { trackEvent } from "./page-view-tracker";

interface InsightViewProps {
  slug: string;
  title: string;
}

export function InsightView({ slug, title }: InsightViewProps) {
  useEffect(() => {
    trackEvent("insight_view", {
      slug,
      title,
    });
  }, [slug, title]);

  return null;
}
