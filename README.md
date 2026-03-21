# Project Plaster Website

Marketing website for a Norwich-based plastering business, built with Next.js App Router and Tailwind CSS.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contentful Setup

This project is wired so all page copy can be managed in Contentful while keeping hardcoded fallbacks.

Core integration files:

- `src/lib/contentful/client.ts` - server-only Contentful client
- `src/lib/contentful/queries.ts` - server-side query helpers
- `src/lib/contentful/copy.ts` - copy-path helpers for server/client components

Required environment variables:

```bash
CONTENTFUL_SPACE_ID=
CONTENTFUL_DELIVERY_ACCESS_TOKEN=
```

Optional environment variables:

```bash
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_PREVIEW_ACCESS_TOKEN=
CONTENTFUL_PAGE_CONTENT_TYPE=pageContent
CONTENTFUL_SERVICE_CONTENT_TYPE=service
CONTENTFUL_FAQ_CONTENT_TYPE=faq
```

Recommended content model:

- `pageContent` (single entry per page slug):
  - `slug` (Short text, unique)
  - `seoTitle` (Short text, optional)
  - `seoDescription`
  - `copy` (Object / JSON) - nested page keys used by components
- `service` (repeatable):
  - `title`
  - `description`
  - `content`
  - `image` (Asset)
  - `benefits` (List of Short text)
  - `sortOrder` (Number)
- `faq` (repeatable):
  - `question` (or `title`)
  - `answer`
  - `sortOrder` (Number)

Recommended `pageContent.slug` entries:

- `global`
- `home`
- `about`
- `services`
- `gallery`
- `faq`
- `contact`
- `contact-success`
- `privacy-policy`
- `terms`

Schema details and JSON examples are in `CONTENTFUL_SCHEMA.md`.

If Contentful values are missing, pages fall back to the existing hardcoded site content.

## Scripts

- `npm run dev` - start development server
- `npm run build` - production build
- `npm run start` - run production build
- `npm run lint` - run ESLint checks
- `npm run lint:fix` - auto-fix lint issues
- `npm run typecheck` - run TypeScript checks

## Netlify Forms Setup

This project uses the Next.js Runtime v5-compatible Netlify Forms setup:

- Static form definition file: `public/__forms.html`
- Runtime submit from React form: `POST /__forms.html` using AJAX
- Form name: `contact`
- Honeypot field: `bot-field`

Deployment checklist:

1. Keep **Form detection enabled** in Netlify.
2. Deploy the site once.
3. Submit the contact form on the live site.
4. Confirm submissions in **Netlify Dashboard -> Forms -> contact**.
