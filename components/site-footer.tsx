import { siteConfig } from "@/data/site-config";
import { contactConfig, emailHref, phoneHref, whatsappHref } from "@/lib/site";

import { TrackableLink } from "./trackable-link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Saumya Dubey</p>
          <h2 className="footer-title">{siteConfig.headerDescriptor}</h2>
          <p className="footer-copy footer-emphasis">{siteConfig.serviceDescriptor}</p>
          <p className="footer-copy">{siteConfig.location}</p>
          <p className="footer-copy">
            Serving Surat, South Gujarat, Gujarat and remote engagements across
            India where appropriate.
          </p>
        </div>

        <div>
          <h3>Navigate</h3>
          <div className="footer-links">
            {siteConfig.footerItems.map((item) => (
              <TrackableLink className="footer-link" href={item.href} key={item.href}>
                {item.label}
              </TrackableLink>
            ))}
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <div className="footer-links">
            <TrackableLink
              className="footer-link"
              eventLabel="footer whatsapp"
              eventName="whatsapp_click"
              href={whatsappHref}
            >
              WhatsApp Saumya
            </TrackableLink>
            <TrackableLink className="footer-link" href="/contact">
              Request a scope discussion
            </TrackableLink>
            <TrackableLink
              className="footer-link"
              eventLabel="footer phone"
              eventName="call_click"
              href={phoneHref}
            >
              {contactConfig.phone || "Phone via configuration"}
            </TrackableLink>
            <TrackableLink className="footer-link" href={emailHref}>
              {contactConfig.email || "Email via configuration"}
            </TrackableLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
