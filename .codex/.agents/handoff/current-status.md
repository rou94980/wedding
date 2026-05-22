# Current Status

Last updated: 2026-05-22

## Repository

- Project path: `D:\Users\005708\test_project\wedding-invitation`
- Stack: React 18, Vite 5, Tailwind CSS 3, Framer Motion 11, React Router DOM 6
- Deployment target: GitHub Pages

## Confirmed Working State

The following was completed and verified on 2026-05-22:

- `npm install`
- `npm run build`

Build succeeded and produced:

- `dist/index.html`
- `dist/404.html`
- `dist/assets/*`
- `dist/assets/images/*`

## Implemented Features

### Home Page

- Envelope intro overlay with tap-to-open interaction
- Card slide-up animation from the envelope
- Hero section implemented with variant switching support
  - Active now: single full-bleed image
  - Reserved: 3-image triptych hero
- Wedding info section
- Masonry-style gallery with restrained motion
- Lightbox for enlarged photo viewing
- Countdown section
- Contact section
- Seat-search teaser CTA

### Routing

- `/`
- `/seat-search`

### Data

- `src/data/site.json`
  - site meta
  - couple copy
  - hero configuration
  - event data
  - countdown target
  - contact data
  - seat-search copy
- `src/data/gallery.json`
  - gallery item order
  - captions
  - offsets
  - rotation hints
  - image paths

## Key Files

- `AGENTS.md`
- `README.md`
- `src/pages/HomePage.jsx`
- `src/pages/SeatSearchPage.jsx`
- `src/components/intro/EnvelopeIntro.jsx`
- `src/components/sections/HeroSection.jsx`
- `src/components/sections/GallerySection.jsx`
- `src/components/sections/PhotoLightbox.jsx`
- `src/router/AppRouter.jsx`
- `src/data/site.json`
- `src/data/gallery.json`
- `.env.production`
- `vite.config.js`
- `public/404.html`

## Design Decisions Already Made

- Use provided wedding photos directly from `public/assets/images`
- Keep the envelope animation expressive, but make the rest of the page quieter
- Use large whitespace and warm neutral tones instead of decorative effects
- Keep content editable through JSON, not hardcoded inside components
- Reserve seat search as a second-phase route, not a modal or inline widget

## Known Follow-Up Work

### High Priority

- Replace placeholder wedding info with final event data
- Replace placeholder contact data with real links
- Confirm the final GitHub repository name and update `VITE_BASE_PATH` if needed

### Phase 2

- Build real seat search interaction on `/seat-search`
- Define seat data structure
- Decide whether seat lookup stays JSON-only or moves to a hosted API later

### Optional Polish

- Add loading optimization if image payload feels heavy
- Add image selection controls in JSON for swapping Hero defaults
- Fine-tune text copy and typography after final content is available

## Constraints For The Next Codex

- Do not remove the GitHub Pages SPA fallback unless routing strategy changes completely
- Do not move image data out of JSON without a clear reason
- Do not introduce excessive animation into the gallery or content sections
- Preserve mobile-first behavior when editing layouts

