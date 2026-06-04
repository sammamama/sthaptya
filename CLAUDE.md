@AGENTS.md

# Sthaptya — Architectural Firm Website

Website for "Sthaptya", an architectural firm. Core theme: architecture with hills.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP, Motion (framer-motion), Lenis (smooth scrolling)
- **Fonts**: Helvetica (titles), Futura (descriptions) — sourced from Google Fonts

## Color Palette

| Name              | Hex       | Usage                                              |
|-------------------|-----------|-----------------------------------------------------|
| Maroon            | `#800020` | Primary brand color, text, accents                   |
| Dark Red          | `#5C0015` | Deep shadows, hover states, contrast                 |
| Crimson           | `#9B1B30` | Secondary accent, highlights                         |
| Bright Sky Blue   | `#75AEE2` | Sky background, cheerful atmosphere                  |
| Pure White        | `#FFFFFF` | Clouds, bright focal points against blue             |

## Design Direction

- Hero section uses parallax scrolling effect (GSAP + Lenis)
- Hills theme throughout — layered landscape visuals
- Clean, modern aesthetic befitting an architecture firm
- Smooth scroll behavior via Lenis

## Typography

- **Titles/Headings**: Helvetica — bold, clean, architectural feel
- **Body/Descriptions**: Futura — geometric, readable

## Commands

```
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # ESLint
```

## Project Structure

```
app/
  layout.tsx    # Root layout
  page.tsx      # Home page
  globals.css   # Global styles (Tailwind)
```
