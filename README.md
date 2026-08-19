# Kenya Children Assembly — Digital Chamber

A premium, Assembly-first digital platform for the **Kenya Children Assembly (NCA)**.

## Vision

NCA is designed as a digital civic institution rather than a brochure website: a public chamber for representation, Assembly business, leadership, county voices, sessions, resources and safe participation.

## Modern stack

- **Next.js App Router** — full-stack React foundation and Vercel-native deployment
- **TypeScript** — typed application architecture
- **Tailwind CSS v4** — modern design system and responsive styling
- **shadcn/ui architecture** — composable, accessible UI direction
- **Lucide React** — consistent interface iconography
- **Supabase-ready** — PostgreSQL, authentication and Row Level Security foundation for the production data layer
- **PWA** — installable experience with offline shell
- **Vercel** — production hosting and preview deployments

Next.js + Tailwind + shadcn/ui is a current supported workflow, and Supabase provides an SSR-compatible integration for Next.js authentication and server/client data access. citeturn0search2turn0search3

## Product areas

- Assembly chamber
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

The repository is structured for **Vercel**. The project should be deployed from the repository root; no static `site/` output directory is required.

## Brand

The Kenya Children Assembly emblem is used as the primary visual identity across the header, hero, leadership area, footer, favicon and PWA manifest.

---

**Sauti Yako • Your Voice** 🇰🇪
