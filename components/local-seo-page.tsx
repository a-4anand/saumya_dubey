import Image from "next/image";

import type { LocalSeoPage } from "@/data/local-seo";
import { siteConfig } from "@/data/site-config";
import { buildWhatsappHref, phoneHref } from "@/lib/site";

import { WhatsAppIcon } from "./icons";
import { TrackableLink } from "./trackable-link";

interface LocalSeoPageViewProps {
  page: LocalSeoPage;
}

export function LocalSeoPageView({ page }: LocalSeoPageViewProps) {
  const message = `Hello Saumya, I found your website while searching for ${page.eyebrow}. I want to discuss QA support for my business.`;

  return (
    <>
      <section className="page-hero-luxury local-seo-hero">
        <div className="container page-hero-grid-wide">
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="lead">{page.intro}</p>
            <div className="hero-actions">
              <TrackableLink
                className="button button-primary"
                eventLabel={`${page.slug} consultation`}
                eventName="consultation_click"
                href="/contact"
              >
                Discuss a QA Requirement
              </TrackableLink>
              <TrackableLink
                className="button button-whatsapp"
                eventLabel={`${page.slug} whatsapp`}
                eventName="whatsapp_click"
                href={buildWhatsappHref(message)}
              >
                <WhatsAppIcon />
                WhatsApp Qorivara
              </TrackableLink>
            </div>
          </div>
          <div className="page-hero-note local-seo-note">
            <p className="eyebrow">Area Served</p>
            <h2>{page.primaryArea}</h2>
            <p>
              {siteConfig.name} provides independent QA, GMP, documentation and quality-system
              support for pharmaceutical, Ayurvedic, nutraceutical and related manufacturing
              businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container local-seo-grid">
          <div>
            <p className="eyebrow">Business Problems</p>
            <h2>Best fit when your QA workload has a visible bottleneck.</h2>
            <ul className="local-seo-list">
              {page.problems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Support Available</p>
            <h2>What Saumya can help with.</h2>
            <ul className="local-seo-list">
              {page.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-editorial">
        <div className="container editorial-split">
          <div className="editorial-copy">
            <p className="eyebrow">Why Saumya</p>
            <h2>Direct, founder-led QA support instead of generic consulting noise.</h2>
            <p className="section-description">{page.proof}</p>
            <p className="section-description">
              Start by sharing the document type, audit pressure, backlog or quality-system issue.
              Saumya can then confirm whether the requirement is a good fit and what support makes
              sense.
            </p>
            <div className="hero-actions">
              <TrackableLink
                className="button button-primary"
                eventLabel={`${page.slug} form`}
                eventName="consultation_click"
                href="/contact"
              >
                Use the quick form
              </TrackableLink>
              <TrackableLink
                className="button button-secondary"
                eventLabel={`${page.slug} call`}
                eventName="call_click"
                href={phoneHref}
              >
                Call Saumya
              </TrackableLink>
            </div>
          </div>
          <figure className="proof-portrait">
            <Image
              alt="Saumya Dubey in a professional QA documentation setting."
              className="proof-portrait-image"
              height={1024}
              sizes="(max-width: 980px) 100vw, 42vw"
              src="/images/selected-gallery/codex-clipboard-2ee06e77-2ba9-4652-911f-95719619aa2f.png"
              width={1536}
            />
            <figcaption>Independent QA support for documentation-heavy manufacturing teams.</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
