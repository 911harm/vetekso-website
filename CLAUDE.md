# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (with --host for network access)
npm run build      # Type-check + build (astro check && astro build)
npm run preview    # Preview the production build
```

No test suite is configured.

## Architecture

Astro 4 site with React islands and Tailwind CSS. Spanish-language B2B SaaS marketing site for Vetekso.

**Component split:**
- `src/components/shared/` — Pure Astro components (Header, Footer, layout primitives). No interactivity.
- `src/components/client/` — React components (`client:load`). Used for nav menu toggle and the contact form.
- `src/components/pages/<page>/` — Page-specific Astro sections, imported directly into page files.

**Pages:** `index`, `nosotros`, `servicios`, `planes`, `contacto`, `a-tu-medida`, plus two Markdown legal pages (`tratamiento-de-datos`, `politicas-de-privacidad`) rendered via `MarkdownLayout.astro`.

**Global state:** `src/store/index.ts` exports a single nanostores `atom` (`isMenuOpen`) shared between the hamburger toggle (`ToggleMenu.tsx`) and the nav drawer (`NavMenu.tsx`).

**Contact form:** `ContactForm.tsx` sends via EmailJS. Requires three env vars:
- `PUBLIC_EMAIL_SERVICE_ID`
- `PUBLIC_EMAIL_TEMPLATE_ID`
- `PUBLIC_EMAIL_KEY`

**Shared data:** Navigation links and contact form field definitions live in `src/utils/consts.ts`. Update there to change nav or form fields globally.

**Styling:** Global SCSS in `Layout.astro` (`<style is:global lang="scss">`). Headings use *Podkova Variable* (serif); body uses *Plus Jakarta Sans* (loaded via Google Fonts). Background is `#030014` (near-black). Accent colors: `#841b71` (fuchsia/purple) and `#00105b` (dark blue). The `#markdown` id selector targets the legal page layout specifically.
