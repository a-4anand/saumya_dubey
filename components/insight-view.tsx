"use client";

import { useEffect } from "react";

import { trackEvent } from "./page-view-tracker";

interface InsightViewProps {
  slug: string;
}

export function InsightView({ slug }: InsightViewProps) {
  useEffect(() => {
    trackEvent("insight_view", {
      slug,
    });
  }, [slug]);

  return null;
}
