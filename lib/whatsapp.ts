// Pure, dependency-free helpers shared by the client contact form and the
// server API route. Kept separate from lib/contact.ts so the browser bundle
// never pulls in zod just to format a WhatsApp message.

const tagPattern = /<[^>]*>/g;
const whitespacePattern = /\s+/g;

export function sanitizeText(value: string) {
  return value.replace(tagPattern, "").replace(whitespacePattern, " ").trim();
}

export interface EnquiryFields {
  name: string;
  company: string;
  designation: string;
  email: string;
  phone: string;
  industry: string;
  requirement: string;
  preferredContactMethod: string;
  message: string;
}

/**
 * Formats a contact enquiry into a clean, WhatsApp-friendly message.
 * WhatsApp renders *bold* and newlines, so the result reads as a tidy,
 * scannable brief the moment it lands in Qorivara's chat.
 */
export function formatWhatsappEnquiry(fields: EnquiryFields) {
  const rows: Array<[string, string]> = [
    ["Name", fields.name],
    ["Company", fields.company],
    ["Role", fields.designation],
    ["Industry", fields.industry],
    ["Requirement", fields.requirement],
    ["Preferred contact", fields.preferredContactMethod],
    ["Email", fields.email],
    ["Phone", fields.phone],
  ];

  const detailLines = rows
    .map(([label, value]) => [label, sanitizeText(value)] as const)
    .filter(([, value]) => value.length > 0)
    .map(([label, value]) => `*${label}:* ${value}`);

  const details = sanitizeText(fields.message);

  const blocks = [
    "*New enquiry from your website*",
    detailLines.join("\n"),
    details ? `*Details*\n${details}` : "",
    "- Sent from the Qorivara Life Sciences website",
  ].filter((block) => block.length > 0);

  // Blank line between blocks for readable spacing in the chat.
  return blocks.join("\n\n");
}
