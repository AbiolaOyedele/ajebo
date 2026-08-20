# AjeboChops

Marketing site for AjeboChops, a Nigerian kitchen in Lekki Phase 1, Lagos.
Built to the structure of the Stack n Snack reference layout, in AjeboChops'
own brand.

## Stack

- **Next.js 16** (App Router) · TypeScript strict
- **Tailwind CSS v4** with design tokens in `src/app/globals.css`
- **Framer Motion** for scroll reveals · **Zod** for form validation
- Statically generated: 48 routes, no backend

## Getting started

```bash
npm install
npm run dev
```

Fonts ship with the repo, so a clean clone builds. See
[`src/fonts/README.md`](src/fonts/README.md) for the licensing note.

## Deploying

`vercel.json` pins the framework preset to `nextjs`. Without it Vercel imports
this repo as "Other", runs the build, then publishes `public/` as a static
folder. Every route 404s while the static assets still resolve, which makes it
look like a routing bug rather than a project-settings one.

## Structure

```
src/
  app/            routes: /, /menu/[slug], /legal/[slug], /contact
  components/
    ui/           primitives (Button, Marquee, PhoneFrame, Logo…)
    features/     page sections (Hero, MenuBrowser, RewardsSection…)
  data/           menu catalog, images, site config, legal copy
  types/          shared interfaces
  lib/            zod schemas
  utils/          pure helpers
public/dishes/    AjeboChops dish photography
```

## The menu data

`src/data/menu.ts` holds all 38 dishes across 10 categories. **Every name,
price, description and order link is transcribed from the live ordering
platform** (`ajebochops.daash.restaurant`). None of it is invented. Each dish
carries an `orderUrl` that deep-links to that exact item:

```
https://ajebochops.daash.restaurant/?productId=<id>&product=<slug>
```

Prices are the platform's "From" figures, the base before size or side options.

## Design system

Grounds alternate deep maroon `#4D0711` and cream `#FAF6EE`; brand orange
`#FF4F03` is an accent only, never a page ground. Surfaces are flat, with no
gradients and no shadows, except the phone mockup bezel, which is a physical
object. Nested corner radii follow the concentric rule (inner = outer −
padding): `button 12 · inner 12 · card 28 · section 44`.

## Known gaps

- **Testimonials in `src/data/testimonials.ts` are placeholder copy.** The brand
  has no public reviews to source. Replace before launch or drop the section.
- **Legal pages are structural boilerplate, not legal advice.** Have counsel
  review, particularly for NDPR compliance.
- Newsletter and contact forms validate client-side and confirm locally; they
  need a real endpoint (with server-side re-validation and rate limiting).
- Opening hours follow the ordering platform (9:00 AM – 1:00 AM); ajebochops.com
  states 10:00 AM – 10:00 PM. Confirm which is correct.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Verified at 375 / 768 / 1280: no horizontal overflow, and no WCAG AA contrast
failures across home, dish, contact and legal templates.
