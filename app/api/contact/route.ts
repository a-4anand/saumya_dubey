import { NextResponse } from "next/server";

import { requirementSchema, sanitizePayload } from "@/lib/contact";
import { contactConfig } from "@/lib/site";

const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";
}

function isRateLimited(clientKey: string) {
  const now = Date.now();
  const entry = rateLimitStore.get(clientKey);

  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(clientKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW,
    });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function POST(request: Request) {
  if (!contactConfig.formEndpoint) {
    return NextResponse.json(
      {
        message:
          "Contact form forwarding is not configured yet. Please use WhatsApp, phone or email in the meantime.",
      },
      { status: 503 },
    );
  }

  const clientKey = getClientKey(request);

  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      {
        message: "Too many enquiries in a short period. Please try again later.",
      },
      { status: 429 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid form submission." },
      { status: 400 },
    );
  }

  const parsed = requirementSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please complete all required fields with valid information." },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  if (Date.now() - parsed.data.submittedAt < 1500) {
    return NextResponse.json(
      { message: "Please take a moment to review the form and try again." },
      { status: 400 },
    );
  }

  const payload = sanitizePayload(parsed.data);

  const forwardedResponse = await fetch(contactConfig.formEndpoint, {
    body: JSON.stringify({
      ...payload,
      receivedAt: new Date().toISOString(),
      source: "saumya-website",
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!forwardedResponse.ok) {
    return NextResponse.json(
      {
        message:
          "The enquiry could not be delivered right now. Please use WhatsApp, phone or email as a fallback.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
