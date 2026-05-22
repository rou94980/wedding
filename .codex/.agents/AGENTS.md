# Codex Project Agent Guide

This repository is a JSON-driven wedding invitation site built with React, Vite, Tailwind CSS, Framer Motion, and React Router.

Before making changes, read these files in order:

1. `README.md`
2. `.agents/handoff/current-status.md`
3. `src/data/site.json`
4. `src/data/gallery.json`

## Project Rules

- Keep the project frontend-only. Do not add a backend or database.
- Keep wedding content JSON-driven under `src/data/`.
- Preserve GitHub Pages compatibility.
  - `BrowserRouter` must keep `basename={import.meta.env.BASE_URL}`
  - `vite.config.js` and `.env.production` control the base path
  - `public/404.html` must remain for SPA refresh support on GitHub Pages
- Keep the visual tone minimal, calm, and premium.
- Use Framer Motion selectively.
  - The envelope intro can be the strongest animation.
  - Content sections should stay restrained: fade, slight translate, light scale only.
- Keep mobile-first layouts.
- Images live in `public/assets/images/`.

## Working Agreement

- Prefer extending current components over rewriting them.
- If you change content, update JSON first and only adjust components when structure requires it.
- If you change deployment behavior, run `npm run build` before finishing.
- If you add a new page, wire it through `src/router/AppRouter.jsx`.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Done Criteria

- `npm run build` passes
- JSON remains the single source of content
- `/` and `/seat-search` still work with the current router setup
- GitHub Pages deployment assumptions remain documented

