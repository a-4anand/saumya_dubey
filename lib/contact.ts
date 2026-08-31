import { z } from "zod";

import { sanitizeText } from "@/lib/whatsapp";

export const requirementSchema = z.object({
  name: z.string().trim().min(2).max(80),
  company: z.string().trim().min(2).max(120),
  designation: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().min(7).max(30),
  industry: z.string().trim().min(2).max(80),
  requirement: z.string().trim().min(2).max(80),
  preferredContactMethod: z.string().trim().min(2).max(40),
  message: z.string().trim().min(20).max(2000),
  website: z.string().trim().max(0).optional().or(z.literal("")),
  submittedAt: z.number().int().positive(),
});

export type ContactPayload = z.infer<typeof requirementSchema>;

export function sanitizePayload(payload: ContactPayload): ContactPayload {
  return {
    ...payload,
    name: sanitizeText(payload.name),
    company: sanitizeText(payload.company),
    designation: sanitizeText(payload.designation),
    email: sanitizeText(payload.email),
    phone: sanitizeText(payload.phone),
    industry: sanitizeText(payload.industry),
    requirement: sanitizeText(payload.requirement),
    preferredContactMethod: sanitizeText(payload.preferredContactMethod),
    message: sanitizeText(payload.message),
  };
}
