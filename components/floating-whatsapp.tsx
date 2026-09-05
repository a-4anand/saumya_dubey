import { WhatsAppIcon } from "@/components/icons";
import { contactConfig, whatsappHref } from "@/lib/site";

import { TrackableLink } from "./trackable-link";

export function FloatingWhatsApp() {
  if (!contactConfig.whatsapp) {
    return null;
  }

  return (
    <TrackableLink
      ariaLabel="Chat with Qorivara on WhatsApp"
      className="floating-whatsapp"
      eventLabel="floating whatsapp"
      eventName="whatsapp_click"
      href={whatsappHref}
    >
      <span className="floating-whatsapp-icon" aria-hidden="true">
        <WhatsAppIcon size={26} />
      </span>
      <span className="floating-whatsapp-label">
        <strong>Chat with Qorivara</strong>
        <small>Usually replies same day</small>
      </span>
    </TrackableLink>
  );
}
