# KCA — Kenya Children Assembly 🇰🇪

A premium, Assembly-first digital platform for the **KCA — Kenya Children Assembly**.

## Vision

KCA is designed as a digital civic institution rather than a brochure website: a dignified public chamber for representation, Assembly business, leadership, county voices, sessions, resources and safe participation.

## Modern stack

- **Next.js App Router** — full-stack React foundation and Vercel-native deployment
- **TypeScript** — typed application architecture
- **Tailwind CSS v4** — modern responsive design system
- **Lucide React** — consistent interface iconography
- **Supabase-ready** — PostgreSQL, authentication and Row Level Security foundation for the production data layer
- **PWA** — installable experience with offline shell
- **Vercel** — production hosting and preview deployments

## Product areas

- National Assembly chamber
- Motions & resolutions
- Questions & statements
- Debates & public records
- Committees & working groups
- Leadership & representation
- 47-county network
- Sessions & events
- Civic and children's-rights resources
- Safeguarding-first participation layer

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production build:

```bash
npm run build
npm start
```

## Environment

Supabase variables will be added when the production data layer is connected:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

The public site deliberately does **not** claim that sensitive safeguarding submissions are secure until the authenticated backend, access controls, escalation workflow and data-protection model are implemented.

## Deployment

The repository is structured for **Vercel**. Deploy from the repository root; no static `site/` output directory is required.

## Brand

The repository currently contains `logo.jpg`, and the website now uses that supplied logo consistently across the navigation, hero chamber, leadership area, footer, favicon and PWA manifest.

> If `logo.png` is added to `public/`, the branding can be switched to that file directly.

---

**Sauti Yako • Your Voice** 🇰🇪
