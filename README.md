# 🇰🇪 Kenya Children Assembly — NCA

**Sauti Yako • Your Voice**

A modern, mobile-first digital home for the Kenya Children Assembly. The experience is intentionally built around the Assembly itself — representation, participation, children's rights, leadership, events, civic learning and responsible advocacy.

## What is inside

- Assembly-first homepage and navigation
- Interactive **Inside the Assembly** area
- Children's rights centre
- Leadership directory foundation
- Assembly calendar/events area
- Searchable resource centre with filters
- Safe **Speak Up** interface that does not transmit sensitive reports
- Responsive mobile navigation
- PWA manifest and offline service worker
- GitHub Pages deployment workflow
- Uploaded NCA emblem used throughout the interface

## Technology

- HTML5
- Modern responsive CSS
- Vanilla JavaScript ES modules
- Web App Manifest
- Service Worker / offline caching
- GitHub Actions + GitHub Pages

## Architecture

The public site is intentionally dependency-light so it can deploy reliably to GitHub Pages. The next production layer can add an authenticated backend for verified Assembly records, leadership profiles, motions, events, moderation and safeguarding workflows.

**Important:** the public demo does not claim to securely receive or store sensitive reports. Any real safeguarding/reporting workflow should be implemented with appropriate access controls, retention rules and verified safeguarding procedures before launch.

## Local preview

From the repository root, serve the `site/` directory with any static HTTP server:

```bash
python3 -m http.server 8000 --directory site
```

Then open `http://localhost:8000`.

## Deployment

Pushes to `main` run `.github/workflows/pages.yml`, which publishes the `site/` directory through GitHub Pages.
