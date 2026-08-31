# Saumya Dubey Consulting Website

Premium, founder-led marketing site for Saumya Dubey's independent QA, GMP, documentation, and compliance consulting practice.

## Stack

- Next.js 16
- React 19
- TypeScript
- Markdown-driven insights content
- Server-side contact endpoint under `app/api/contact/route.ts`

## Local development

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
cp .env.example .env.local
```

3. Fill in the required variables:

```env
SITE_URL=http://localhost:3000
BUSINESS_EMAIL=
PHONE_NUMBER=
WHATSAPP_NUMBER=
PROFILE_PDF_URL=
FORM_DESTINATION=
ANALYTICS_ID=
```

4. Start the development server:

```bash
npm run dev
```

5. Open `http://localhost:3000`

## Environment variables

- `SITE_URL`: canonical base URL used for metadata, sitemap, and structured data
- `BUSINESS_EMAIL`: primary contact email
- `PHONE_NUMBER`: call CTA value and footer/contact display
- `WHATSAPP_NUMBER`: WhatsApp CTA target
- `PROFILE_PDF_URL`: downloadable professional profile link
- `FORM_DESTINATION`: external endpoint that receives validated contact submissions
- `ANALYTICS_ID`: optional analytics ID for CTA and page-view tracking

`FORM_ENDPOINT` is also supported as a backward-compatible alias, but `FORM_DESTINATION` is the preferred variable.

## Contact flow

- The website validates form data server-side with `zod`
- A honeypot field and minimum-fill-time check help reduce spam
- Lightweight in-memory rate limiting is applied per IP-like client key
- If `FORM_DESTINATION` is missing, the form intentionally returns a clear error instead of pretending success

## Content updates

- Business details, services, industries, FAQs, and experience are centralized in `data/site-config.ts`
- Insight articles live in `data/insights/*.md`
- Contact labels and external CTA links pull from environment-backed config in `lib/site.ts`

## Quality checks

Run:

```bash
npm run lint
npm run build
```

Production preview after a successful build:

```bash
npm run start
```

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Set the framework preset to Next.js if Vercel does not detect it automatically.
4. Add all required environment variables in the Vercel project settings.
5. Use the default commands:

```text
Build command: npm run build
Output setting: Next.js default
Install command: npm install
```

6. Deploy.

## Notes

- The site does not fabricate testimonials, case studies, or client logos.
- Previous employers are presented as professional background only.
- Services are written within the verified scope supplied in the original brief.
# saumya_dubey
