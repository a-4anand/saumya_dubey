"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { trackEvent } from "@/components/page-view-tracker";

interface TrackableLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  eventName?: string;
  eventLabel?: string;
  ariaLabel?: string;
  newTab?: boolean;
}

const externalPattern = /^(https?:\/\/|mailto:|tel:)/i;

export function TrackableLink({
  href,
  children,
  className,
  eventName,
  eventLabel,
  ariaLabel,
  newTab = false,
}: TrackableLinkProps) {
  const handleClick = () => {
    if (!eventName) {
      return;
    }

    trackEvent(eventName, eventLabel ? { label: eventLabel } : {});
  };

  if (externalPattern.test(href)) {
    return (
      <a
        aria-label={ariaLabel}
        className={className}
        href={href}
        onClick={handleClick}
        rel={newTab ? "noreferrer" : undefined}
        target={newTab ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      aria-label={ariaLabel}
      className={className}
      href={href}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
