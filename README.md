# Notes from my Desk

A personal blog website for James McGrath, built with Next.js and Vanilla CSS.
This project emphasizes performance, accessibility, and a premium "no-framework" aesthetic.

## Tech Stack
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: Vanilla CSS (CSS Modules & Clean internal Design System)
- **Content**: Markdown with `gray-matter` & `remark`
- **Typography**: Inter (UI) & Lora (Content) via `next/font`
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Content

Posts are stored as Markdown files in the `/posts` directory.

1. Create a new file in `/posts`, e.g., `my-new-story.md`.
2. Add the required Frontmatter at the top of the file:

```markdown
---
title: "The Title of Your Post"
date: "2025-12-16"
excerpt: "A short summary of the post that appears on the home and blog index pages."
coverImage: "/images/your-image.jpg" # Optional. Image must exist in public/images/
---
```

3. Write your content below the frontmatter using standard Markdown.

### Images
Place any images you want to use in the `public/images/` directory. You can reference them in your markdown as `/images/filename.jpg`.

## Design System

The project uses a lightweight specific design system defined in `src/app/globals.css`.
Key variables:
- `--primary`: Main text color
- `--accent`: Link & highlight color
- `--background`: Page background
- `--font-serif`: Used for headings and article content

Dark mode is supported automatically via `prefers-color-scheme`.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com).
Simply connect this repository to your Vercel account, and it will auto-detect the Next.js settings.

### Production Build locally
To test the production build (recommended for performance testing):

```bash
npm run build
npm start
```
