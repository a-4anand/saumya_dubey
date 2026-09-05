import { randomUUID } from "node:crypto";

import { z } from "zod";

import { sanitizeText } from "@/lib/whatsapp";

export const privacyNoticeVersion = "2026-09-05";

const optionalText = (max = 160) => z.string().trim().max(max).optional().or(z.literal(""));

export const leadSchema = z
  .object({
    name: z.string().trim().min(2).max(80),
    company: z.string().trim().min(2).max(120),
    workEmail: z.string().trim().email().max(140),
    serviceNeed: z.string().trim().min(2).max(120),
    requirementSummary: z.string().trim().min(20).max(1200),
    role: optionalText(80),
    companyType: optionalText(80),
    phoneOrWhatsApp: optionalText(32),
    industry: optionalText(80),
    location: optionalText(120),
    preferredDeliveryMode: z.enum(["remote", "hybrid", "on-site", "not-sure"]).optional().or(z.literal("")),
    timeframe: optionalText(80),
    preferredContactMethod: z.enum(["email", "phone", "whatsapp"]).optional().or(z.literal("")),
    conditional: z.record(z.string(), z.string().trim().max(240)).optional(),
    website: z.string().trim().max(0).optional().or(z.literal("")),
    submittedAt: z.number().int().positive(),
    sourcePath: optionalText(180),
    privacyAcknowledged: z.literal(true),
  })
  .strict();

export type LeadPayload = z.infer<typeof leadSchema>;

export interface LeadRecord {
  id: string;
  createdAt: string;
  sourcePath?: string;
  attribution?: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };
  contact: {
    name: string;
    company: string;
    companyType?: string;
    workEmail: string;
    role?: string;
    phoneOrWhatsApp?: string;
    preferredContactMethod?: "email" | "phone" | "whatsapp";
  };
  requirement: {
    serviceNeed: string;
    industry?: string;
    location?: string;
    preferredDeliveryMode?: "remote" | "hybrid" | "on-site" | "not-sure";
    timeframe?: string;
    summary: string;
    conditional?: Record<string, string>;
  };
  privacyNoticeVersion: string;
  status: "new";
}

export function createLeadRecord(payload: LeadPayload, requestUrl: string): LeadRecord {
  const url = new URL(requestUrl);
  const attribution = {
    source: sanitizeText(url.searchParams.get("utm_source") || ""),
    medium: sanitizeText(url.searchParams.get("utm_medium") || ""),
    campaign: sanitizeText(url.searchParams.get("utm_campaign") || ""),
    term: sanitizeText(url.searchParams.get("utm_term") || ""),
    content: sanitizeText(url.searchParams.get("utm_content") || ""),
  };
  const cleanAttribution = Object.fromEntries(
    Object.entries(attribution).filter(([, value]) => value),
  ) as LeadRecord["attribution"];

  return {
    id: `QORI-${randomUUID().slice(0, 8).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    sourcePath: sanitizeText(payload.sourcePath || ""),
    attribution: cleanAttribution && Object.keys(cleanAttribution).length ? cleanAttribution : undefined,
    contact: {
      name: sanitizeText(payload.name),
      company: sanitizeText(payload.company),
      companyType: sanitizeText(payload.companyType || "") || undefined,
      workEmail: sanitizeText(payload.workEmail),
      role: sanitizeText(payload.role || "") || undefined,
      phoneOrWhatsApp: sanitizeText(payload.phoneOrWhatsApp || "") || undefined,
      preferredContactMethod: payload.preferredContactMethod || undefined,
    },
    requirement: {
      serviceNeed: sanitizeText(payload.serviceNeed),
      industry: sanitizeText(payload.industry || "") || undefined,
      location: sanitizeText(payload.location || "") || undefined,
      preferredDeliveryMode: payload.preferredDeliveryMode || undefined,
      timeframe: sanitizeText(payload.timeframe || "") || undefined,
      summary: sanitizeText(payload.requirementSummary),
      conditional: payload.conditional
        ? Object.fromEntries(
            Object.entries(payload.conditional)
              .map(([key, value]) => [sanitizeText(key), sanitizeText(value)] as const)
              .filter(([key, value]) => key && value),
          )
        : undefined,
    },
    privacyNoticeVersion,
    status: "new",
  };
}

export function formatLeadNotification(lead: LeadRecord) {
  return [
    `New QORIVARA lead: ${lead.id}`,
    `Created: ${lead.createdAt}`,
    `Source: ${lead.sourcePath || "not supplied"}`,
    "",
    `Name: ${lead.contact.name}`,
    `Company: ${lead.contact.company}`,
    `Work email: ${lead.contact.workEmail}`,
    `Role: ${lead.contact.role || "-"}`,
    `Phone/WhatsApp: ${lead.contact.phoneOrWhatsApp || "-"}`,
    "",
    `Service need: ${lead.requirement.serviceNeed}`,
    `Industry: ${lead.requirement.industry || "-"}`,
    `Delivery mode: ${lead.requirement.preferredDeliveryMode || "-"}`,
    `Timeframe: ${lead.requirement.timeframe || "-"}`,
    "",
    `Summary: ${lead.requirement.summary}`,
    "",
    "Do not request confidential documents until scope, NDA and approved exchange method are agreed.",
  ].join("\n");
}
