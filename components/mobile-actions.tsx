import { WhatsAppIcon } from "@/components/icons";
import { hasDirectContact, phoneHref, whatsappHref } from "@/lib/site";

import { TrackableLink } from "./trackable-link";

export function MobileActions() {
  if (!hasDirectContact) {
    return null;
  }

  return (
    <div className="mobile-actions">
      <TrackableLink
        className="button button-whatsapp mobile-action"
        eventLabel="mobile whatsapp"
        eventName="whatsapp_click"
        href={whatsappHref}
      >
        <WhatsAppIcon size={18} />
        WhatsApp
      </TrackableLink>
      <TrackableLink
        className="button button-secondary mobile-action"
        eventLabel="mobile call"
        eventName="call_click"
        href={phoneHref}
      >
        Call
      </TrackableLink>
    </div>
  );
}
