# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on http://localhost:3000 (auto-falls to 3001 if busy)
npm run build    # production build — SSGs all 12 /projects/[id] pages
npm run start    # serve the built output
npm run lint     # next lint (no custom rules)
```

No test framework is configured.

## Architecture

This is a **Next.js 15 App Router / TypeScript** portfolio site for an artist named SACHIE. It was ported from a React-via-Babel-standalone prototype (delivered as a Claude Design handoff bundle); the bundle is not in the repo — work from the live source.

### The genre system is the central abstraction

Everything UI-facing keys off **five fixed genres** (`music`, `dj`, `vj`, `movie`, `design`), each with a color. Source of truth: `lib/genres.ts`. A given project's genre drives:

- the colored marker dot (`<GenreMark>` in `components/GenreMark.tsx`)
- the hover-overlay background on the thumbnail (via `--genre-color` CSS var set inline on `.thumb-cell`)
- the active filter button color on the Projects page
- the active-link orange underline in the header (hardcoded to `--music`)

When adding UI that varies by genre, follow the existing pattern: pipe the color in through `--genre-color` on a parent element, then reference `var(--genre-color)` in CSS.

### Data lives in `lib/projects.ts`

The 12 `PROJECTS` are dummy content. Each project has a `media: MediaItem[]` array where items are `image | video | youtube` (discriminated union — see `MediaItem` type). To swap in real content, edit this file directly; nothing else needs to change. Helpers at the top (`unsplash`, `sampleVideo`, `img`, `vid`, `yt`) are convenience constructors for the dummy data — feel free to remove them when real URLs replace the placeholders.

### Routes (App Router)

- `/` → `app/page.tsx` — Projects grid (uses `<ProjectsGrid>`)
- `/about`, `/contact` — pure static content; edit the JSX directly to update copy
- `/projects/[id]` → SSG via `generateStaticParams` over `PROJECTS`
- All four routes share `app/layout.tsx` (fonts via `next/font`, Header, Footer)

### Server vs client component split

Components are **server by default**. Only three need `"use client"`:
- `Header.tsx` — needs `usePathname` for active-link detection
- `ProjectsGrid.tsx` — owns the genre filter `useState`
- `MediaCarousel.tsx` — owns the carousel index `useState` + keyboard listener

`ThumbCard`, `GenreMark`, `GenreLabel`, `Footer` are all server components. Keep them that way unless you genuinely need state — the hover behavior is pure CSS (`.hover-color .thumb:hover .thumb-overlay`), not JS.

### Styling: `app/globals.css` was ported verbatim from the design prototype

The CSS is intentionally a near-1:1 copy of the design handoff's `styles.css`. It contains classes and variants that are **not currently used in the live code** (e.g. `.hover-text`, `.hover-zoom`, `.grid-border`, `.grid-color-border`, `.cursor-trail`, `.gm.triangle/square/diamond/star/bar`, `.detail .media-stripes`). They were left in to preserve fidelity with the design source and to make later variant swaps trivial. Don't delete them as "dead code" unless explicitly asked.

The only modifications from the design source are:
- `--font` / `--mono` were changed to reference `next/font`-injected CSS variables (`--font-noto-sans-jp`, `--font-jetbrains-mono`)
- Two `align-items: end` → `flex-end` for autoprefixer compatibility
- `.thumb { display: block }` was added because the prototype's `.thumb` was a `<div>` but here it's wrapped by `<Link>` (= `<a>`), and inline elements ignore `aspect-ratio` — without `display: block`, all thumbnails collapse to zero height

The "Tweaks panel" UI from the prototype (hover-mode and grid-variant switcher) was intentionally **not ported**. The grid hardcodes `hover-color grid-borderless` in `ProjectsGrid.tsx`. If reintroducing variants, the CSS already supports them — just change the className.

### Path alias

`@/*` resolves to the project root (`tsconfig.json`). Imports look like `@/lib/genres`, `@/components/Header`.

### Deploy

GitHub repo `sachiesaaan/sachie-portfolio` is connected to Vercel; pushes to `main` auto-deploy. No `vercel.json` — Next.js defaults are used.
