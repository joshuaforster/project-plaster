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
