import { siteConfig } from "@/data/site-config";

const clean = (value?: string | null) => value?.trim() ?? "";

// Direct-contact defaults so every WhatsApp / call link works out of the box.
// Override in production via environment variables if the number ever changes.
const DEFAULT_WHATSAPP = "918707094072";
const DEFAULT_PHONE = "+918707094072";

export const contactConfig = {
  siteUrl: clean(process.env.SITE_URL) || "http://localhost:3000",
  phone: clean(process.env.PHONE_NUMBER) || DEFAULT_PHONE,
  whatsapp: clean(process.env.WHATSAPP_NUMBER) || DEFAULT_WHATSAPP,
  email: clean(process.env.BUSINESS_EMAIL),
  profilePdfUrl: clean(process.env.PROFILE_PDF_URL),
  formEndpoint:
    clean(process.env.FORM_DESTINATION) || clean(process.env.FORM_ENDPOINT),
  analyticsId: clean(process.env.ANALYTICS_ID),
};

// Digits-only number used to build every wa.me deep link.
export const whatsappNumber = contactConfig.whatsapp.replace(/\D/g, "");

export const whatsappMessage =
  "Hello Saumya, I found your website and would like to discuss QA support for my company.";

/**
 * Builds a WhatsApp click-to-chat link that opens a chat with Saumya with the
 * given message pre-filled. Works on mobile (opens the app) and desktop
 * (WhatsApp Web / desktop app). Falls back to the contact page if no number is
 * configured.
 */
export function buildWhatsappHref(message: string = whatsappMessage) {
  if (!whatsappNumber) {
    return "/contact";
  }

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const phoneHref = contactConfig.phone
  ? `tel:${contactConfig.phone.replace(/\s+/g, "")}`
  : "/contact";

export const emailHref = contactConfig.email
  ? `mailto:${contactConfig.email}`
  : "/contact";

export const whatsappHref = buildWhatsappHref();

export const profileHref =
  contactConfig.profilePdfUrl || "/contact?subject=professional-profile";

export const absoluteUrl = (path = "/") =>
  new URL(path, contactConfig.siteUrl).toString();

export const hasDirectContact =
  Boolean(contactConfig.phone) ||
  Boolean(contactConfig.whatsapp) ||
  Boolean(contactConfig.email);

export const companyDescription = `${siteConfig.name} is an ${siteConfig.title.toLowerCase()} based in ${siteConfig.location}.`;
