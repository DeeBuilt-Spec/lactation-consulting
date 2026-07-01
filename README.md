# Latched — Design Directions

A static spec repo with three distinct homepage design directions for the same virtual lactation consulting practice. Plain React + React Router + Tailwind. No backend, no auth, no API.

## Routes
- `/` — chooser
- `/site1` — Clinical Warmth
- `/site2` — Tender
- `/site3` — Quiet Care

## Renaming
`Latched` is a placeholder business name. Find-and-replace `Latched` repo-wide to rename. Most copy lives in `src/content/latched.ts` — change a line there and it updates across all three directions.

## Content notes
Copy is positioning and reassurance, not medical advice. Nothing in the content file is a clinical claim, guarantee, or promise of outcomes — keep it that way when editing. Credentials (RN · MPH · IBCLC), testimonials, and imagery are all placeholders. Images are Unsplash URLs marked as `IMAGE SLOT` in `latched.ts`; swap for warm, candid, human photos (never clinical stock).

## GitHub Pages
Serves at a route under the shared subdomain: `https://spec.deebuilt.co/lactation-consulting/`. The deploy workflow sets `VITE_BASE=/lactation-consulting/`. `public/404.html` redirects deep routes to the project base so `/site1`–`/site5` resolve on refresh. No CNAME here — the custom domain lives on the `deebuilt-spec.github.io` apex repo.

## Local dev
`npm install` then `npm run dev` (port 5103).
