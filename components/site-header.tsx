import { siteConfig } from "@/data/site-config";

import { TrackableLink } from "./trackable-link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <TrackableLink ariaLabel="Saumya Dubey home" className="brand" href="/">
          <span className="brand-lockup">
            <strong>{siteConfig.name.toUpperCase()}</strong>
            <small>{siteConfig.headerDescriptor}</small>
          </span>
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
          Book a Scope Call
        </TrackableLink>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <div className="mobile-nav-panel">
            {siteConfig.navItems.map((item) => (
              <TrackableLink className="mobile-nav-link" href={item.href} key={item.href}>
                {item.label}
              </TrackableLink>
            ))}
            <TrackableLink
              className="button button-header"
              eventLabel="mobile consultation"
              eventName="consultation_click"
              href="/contact"
            >
              Book a Scope Call
            </TrackableLink>
          </div>
        </details>
      </div>
    </header>
  );
}
