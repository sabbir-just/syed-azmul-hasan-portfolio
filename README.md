# Syed Azmul Hasan — Portfolio

A production-ready personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Designed for AI/ML research, data/business analyst, and MTO applications, with an academic-journal visual language (manuscript section numbering, citation-style publication list, metrics strip) suited for research- and corporate-facing audiences.

## Tech stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling, with a custom navy/gold design token system
- **Framer Motion** for scroll and load animations
- **lucide-react** for icons
- **next-themes** for light/dark mode
- Fonts: Fraunces (display serif), Inter (body), JetBrains Mono (data/labels) via `next/font/google`

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, metadata/SEO, JSON-LD
  page.tsx           # Assembles all sections
  globals.css         # Design tokens, base styles, utilities
components/
  Navbar.tsx, Hero.tsx, About.tsx, Research.tsx, Projects.tsx,
  Publications.tsx, Posters.tsx, Experience.tsx, Leadership.tsx,
  Certifications.tsx, Skills.tsx, Contact.tsx, Footer.tsx,
  SectionHeading.tsx, ThemeProvider.tsx, ThemeToggle.tsx
lib/
  data.ts            # All content (single source of truth — edit here)
public/
  resume.pdf          # Replace with your actual résumé
```

## Editing content

All text content (name, bio, projects, publications, skills, certifications,
contact links) lives in **`lib/data.ts`**. Update that file to change copy
without touching any component markup.

To add your photo, replace the placeholder block in `components/Hero.tsx`
with a Next.js `<Image>` pointing at a file in `public/` (e.g. `public/headshot.jpg`).

To add your résumé, replace `public/resume.pdf` with your actual PDF — the
"Download CV" and "Resume" buttons already link to `/resume.pdf`.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Click **Deploy**.

Alternatively, from the project root:

```bash
npm install -g vercel
vercel
```

## Notes

- Dark mode is fully supported and toggles via the sun/moon icon in the navbar (persisted via `next-themes`).
- The design respects `prefers-reduced-motion`.
- Update `metadataBase` and Open Graph URLs in `app/layout.tsx` once you have a production domain.
