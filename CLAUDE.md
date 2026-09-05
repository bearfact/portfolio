# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml`).

- `pnpm dev` — start the dev server (http://localhost:3000)
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — run `next lint` (ESLint, config extends `next/core-web-vitals`)

There is no test suite configured in this repo.

## Architecture

This is a personal portfolio site ("DigDays") built with Next.js 14 App Router, React 18, TypeScript, and Tailwind CSS.

- **Routing**: File-based via `app/`. `app/page.tsx` is the home page, `app/projects/page.tsx` lists all projects, and each individual project write-up is a static route under `app/projects/(id)/<project>/page.tsx` (e.g. `fiso`, `hellofresh`, `redjade`). The `(id)` segment is a route group and does not affect the URL path.
- **Project data model**: There is no CMS or data file — each project's summary card and its detail page are both hand-written JSX. The list on `app/projects/page.tsx` renders `<Project>` components inline with hardcoded props (date, href, title, desc, images); the detail pages under `app/projects/(id)/*` are freeform long-form article JSX. Adding a new project means adding both a `<Project>` entry to the list page and a new detail page/route.
- **Shared UI** lives in `app/ui/`:
  - `project.tsx` — the project summary card used on the projects list page.
  - `back-tobutton.tsx` — the "back to X" link shown at the top of the projects list and each detail page.
  - `blocks.tsx` / `hero.tsx` — home page decorative pieces. `blocks.tsx` renders a full-screen grid of divs that flash a color from a d3 `interpolateRainbow` palette on hover and stash the last color in `localStorage`; `hero.tsx` reads that stored color back to tint the "DigDays" heading on mouse enter. These two components are coupled through `localStorage` (key `"color"`), not props or context.
- **Styling**: Tailwind CSS utility classes throughout; `tailwind.config.ts` adds `bg-gradient-radial`/`bg-gradient-conic` extensions. Global styles/fonts in `app/globals.css` and `app/layout.tsx` (uses `next/font/google` Inter).
- **Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/app/ui/back-tobutton`.
- **Images**: `next.config.mjs` allows remote images from any HTTPS host (`remotePatterns: [{ protocol: "https", hostname: "**" }]`). Static assets referenced by project pages live in `public/`.
