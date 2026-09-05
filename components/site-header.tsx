import Image from "next/image";

import { siteConfig } from "@/data/site-config";
import { TrackableLink } from "./trackable-link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <TrackableLink ariaLabel="Qorivara Life Sciences home" className="brand" href="/">
          <Image
            alt="Qorivara Life Sciences"
            className="brand-logo"
            height={1065}
            priority
            src="/brand/qorivara/03-platform-exports/svg/24-website-header-light.svg"
            width={4096}
          />
        </TrackableLink>

        <nav aria-label="Primary" className="desktop-nav">
          {siteConfig.navItems.map((item) => (
            <TrackableLink className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </TrackableLink>
          ))}
        </nav>

        <TrackableLink
          className="button button-header desktop-cta"
          eventLabel="header consultation"
          eventName="consultation_click"
          href="/contact"
        >
          Discuss a Requirement
        </TrackableLink>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-nav-panel">
            {siteConfig.navItems.map((item) => (
              <TrackableLink className="mobile-nav-link" href={item.href} key={item.href}>
                {item.label}
              </TrackableLink>
            ))}
            <TrackableLink
              className="button button-header"
              eventLabel="mobile menu consultation"
              eventName="consultation_click"
              href="/contact"
            >
              Discuss a Requirement
            </TrackableLink>
          </div>
        </details>
      </div>
    </header>
  );
}
