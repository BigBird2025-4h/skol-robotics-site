# Skol Robotics — FRC Team #9073

Fayette Academy's team site, built with Next.js + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

## Before you launch — placeholders to swap in

Search the codebase for "Placeholder" / "placeholder" to find everything
that needs real content:

- `src/app/sponsors/page.tsx` — sponsorship tier names/amounts, contact email
- `src/app/contact/page.tsx` — contact email, interest-form link
- `src/app/socials/page.tsx` — real social handles + links
- `src/app/history/page.tsx` — your team's real history/story
- `src/app/portfolio/page.tsx` — real robot photos, notebook, GitHub links
- `src/app/sitemap.ts` — update `BASE_URL` to your real deployed domain
- `public/logo.webp` — swap if you ever update your team logo

## Adding blog posts

Drop a new `.md` file into `src/content/blog/` with frontmatter:

```md
---
title: Your Post Title
date: 2026-08-01
description: One-line summary shown on the blog list.
---

Post content in Markdown here.
```

It'll show up automatically on `/blog`, newest first.
