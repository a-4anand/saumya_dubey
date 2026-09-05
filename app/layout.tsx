import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Analytics } from "@/components/analytics";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { MobileActions } from "@/components/mobile-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site-config";
import { absoluteUrl } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "QA consultant Surat",
    "GMP consultant Surat",
    "pharmaceutical QA consultant Gujarat",
    "QA documentation consultant Gujarat",
    "pharma SOP consultant",
    "pharma internal audit consultant",
    "pharma batch record review",
    "Ayurvedic QA consultant",
    "nutraceutical QA consultant",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: absoluteUrl("/"),
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
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      absoluteUrl(
        "/brand/qorivara/02-colorway-exports/png/qorivara-full-horizontal-forest-on-warm-cream.png",
      ),
    ],
  },
  icons: {
    icon: [
      {
        url: "/brand/qorivara/04-favicon/qorivara-favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/brand/qorivara/04-favicon/qorivara-favicon.ico",
        sizes: "any",
      },
      {
        url: "/brand/qorivara/04-favicon/qorivara-favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/brand/qorivara/04-favicon/qorivara-favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/brand/qorivara/04-favicon/qorivara-favicon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#123C32",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <MobileActions />
        </div>
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
