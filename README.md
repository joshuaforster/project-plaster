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

The contact form is configured for native Netlify form handling:

- `name="contact"`
- `data-netlify="true"`
- `<input type="hidden" name="form-name" value="contact" />`
- `netlify-honeypot="bot-field"`

Deployment checklist:

1. Keep **Form detection enabled** in Netlify.
2. Deploy the site once.
3. Submit the contact form on the live site.
4. Confirm submissions in **Netlify Dashboard -> Forms -> contact**.
