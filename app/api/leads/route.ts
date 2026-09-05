import { NextResponse } from "next/server";

import { createLeadRecord, formatLeadNotification, leadSchema } from "@/lib/leads";
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
    rateLimitStore.set(clientKey, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

function originAllowed(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) {
    return true;
  }

  if (origin === new URL(contactConfig.siteUrl).origin) {
    return true;
  }

  if (process.env.NODE_ENV !== "production") {
    const hostname = new URL(origin).hostname;
    return hostname === "localhost" || hostname === "127.0.0.1";
  }

  return false;
}

async function postJson(url: string, body: unknown, headers: HeadersInit = {}) {
  return fetch(url, {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    method: "POST",
  });
}

export async function POST(request: Request) {
  if (!originAllowed(request)) {
    return NextResponse.json({ message: "Invalid submission origin." }, { status: 403 });
  }

  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      { message: "Too many enquiries in a short period. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please complete the required fields with valid information." },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  if (Date.now() - parsed.data.submittedAt < 1800) {
    return NextResponse.json(
      { message: "Please take a moment to review the form and try again." },
      { status: 400 },
    );
  }

  const lead = createLeadRecord(parsed.data, request.url);
  const notification = formatLeadNotification(lead);

  if (contactConfig.leadWebhookUrl) {
    const webhookResponse = await postJson(
      contactConfig.leadWebhookUrl,
      { lead, notification },
      contactConfig.leadWebhookSecret
        ? { "x-qorivara-signature": contactConfig.leadWebhookSecret }
        : {},
    );

    if (!webhookResponse.ok) {
      return NextResponse.json(
        {
          message:
            "The enquiry could not be delivered right now. Please use email or WhatsApp as a fallback.",
        },
        { status: 502 },
      );
    }
  } else if (contactConfig.formEndpoint) {
    const forwardedResponse = await postJson(contactConfig.formEndpoint, {
      lead,
      notification,
      to: contactConfig.contactToEmail,
    });

    if (!forwardedResponse.ok) {
      return NextResponse.json(
        {
          message:
            "The enquiry could not be delivered right now. Please use email or WhatsApp as a fallback.",
        },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({
    ok: true,
    leadId: lead.id,
    message:
      "Thank you. QORIVARA has received the enquiry reference and will review fit before requesting any confidential documents.",
    transportConfigured: Boolean(contactConfig.leadWebhookUrl || contactConfig.formEndpoint),
  });
}
