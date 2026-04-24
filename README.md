# data.kolawoles.com

Analytics & BI portfolio — the Data vertical of the Kolawoles ecosystem.

## Stack

- **Next.js 14** (App Router)
- **Framer Motion** — scroll-triggered animations, entrance sequences
- **Tailwind CSS**
- **Syne + DM Sans** via `next/font/google`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
src/
  app/
    layout.tsx      # Root layout, fonts, metadata
    page.tsx        # Full page — Hero, Work, Stack, About, Contact
    globals.css     # CSS variables (blue accent), base styles
  components/
    Cursor.tsx      # Spring-animated custom cursor
    Nav.tsx         # Fixed nav with section links
```

## Sections

- **Hero** — Headline, description, CTAs, scroll indicator
- **Work** — 5 client engagements (HBGI current, Northside, Hiscox, Manhattan, Costco)
- **Stack** — 6 categories: Visualization, Data Platform, Languages, ETL, Modeling, Tools
- **About** — Bio paragraph
- **Contact** — CTA card with email link

## Accent Color

Blue: `#1a6cf5` — defined as `--accent` in `globals.css`. Change once, updates everywhere.

## Deploy

Push to GitHub, connect to Vercel. Set custom domain to `data.kolawoles.com`.
