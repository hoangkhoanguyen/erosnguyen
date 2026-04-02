---
name: html-to-next-page
description: Converts static HTML mockups (especially multi-section pages under docs/inputhtmls) into Next.js App Router pages or React section components for this portfolio. Maps Tailwind-style tokens from the mock (primary, background-light/dark, surface, glass-card, animations) to project CSS variables and existing utilities in src/app/globals.css. Use when the user references docs/inputhtmls/*.html, asks to port a section or full page from HTML, or to sync a Storybook-style HTML export with the live site.
---

# HTML mockup → Next.js page/section (portfolio-eros)

## Clarify scope

1. **Full page**: New or updated `src/app/<route>/page.tsx` composing sections; avoid duplicating `Header` / `Footer` (already in `src/app/layout.tsx`).
2. **Single section**: New or updated component under `src/components/features/` (mirror `home-page/` grouping) and import it from the target page.
3. If the user names a section (e.g. hero, testimonials), extract only that subtree from the HTML (`<section>`, `<header>` region, or element with a clear id/class).

Read the HTML file completely enough to preserve structure, copy, and responsive classes before coding.

## Strip what never ships

- Remove `<script src="https://cdn.tailwindcss.com">` and inline `tailwind.config` from the mock; the app uses Tailwind v4 via `globals.css` (`@import "tailwindcss"`, `@theme inline`).
- Remove Google Fonts / Material Symbols links unless the user explicitly wants those assets; default typography is Geist from `src/app/layout.tsx` (`font-sans`). Only add `next/font` for a mock font if requested.
- Replace `<a href>` to internal routes with `import Link from "next/link"`.
- Use `next/image` for static images when paths exist in `public/`; otherwise keep a placeholder or the user-supplied `src` with explicit dimensions where possible.

## Map mock tokens → project tokens

The mock often extends Tailwind with hex colors that match `--pallete-*` in `globals.css`. **Do not hard-code mock hex values** unless filling a one-off decorative gradient; prefer theme tokens so `data-theme` and `.dark` keep working.

| Mock class / meaning | Prefer in this repo |
|----------------------|---------------------|
| `bg-background-light`, `dark:bg-background-dark`, body background | `bg-background` |
| `text-gray-800`, `dark:text-gray-200` (body text) | `text-foreground` |
| Secondary / subdued text | `text-muted-foreground` |
| `primary`, `text-primary`, `bg-primary/10` | `text-primary`, `bg-primary/10`, borders `border-primary` (maps to `--color-primary` / palette) |
| `primary-dark`, gradients to primary | `primary-dark`, `primary-light` utilities from `@theme` (`--color-primary-dark`, `--color-primary-light`) |
| Surfaces / cards | `bg-surface`, `bg-card`, `border-stroke` |
| Borders like `border-gray-200/50`, `dark:border-white/10` | `border-stroke` or `border-border` depending on context |
| Mock `glass-card` | Use existing `.glass-card` in `globals.css` (same class name) |
| `animate-fade-in-up`, `delay-*`, `animate-float`, `animate-float-delayed` | Use the same class names; keyframes already defined in `globals.css` |
| `container` + horizontal padding | Prefer `@utility container` pattern: `className="container"` as used elsewhere |

If the mock uses arbitrary hex that matches `--pallete-primary-main` / background palette, still prefer token classes so theme switching stays consistent.

## React / Next patterns

- Default to **Server Components**; add `"use client"` only when using hooks, client-only browser APIs, or interactive widgets that require it.
- Reuse `@/components/ui` (`Button`, etc.) for CTAs instead of raw `<button>` when the design aligns with existing variants.
- Icons: prefer `lucide-react` (see existing sections) over Material Symbols from the mock; map symbol meaning to closest Lucide icon.
- Preserve semantic HTML (`section`, `heading` hierarchy, `aria` on icons/buttons where appropriate).
- Match local conventions: import alias `@/`, named exports vs default as used in neighboring feature files.

## File placement

- Page: `src/app/<segment>/page.tsx`.
- Section module: `src/components/features/<area>/<Name>Section.tsx` (or existing folder the user points to).
- If the mock duplicates site chrome (top nav in HTML), **omit** it or merge behavior into existing `Header` only when the user asks; otherwise strip nav from the conversion.

## Verification checklist

- [ ] No CDN Tailwind or duplicate global animations that already exist in `globals.css`.
- [ ] Colors go through `bg-background`, `text-foreground`, `primary*`, `surface`, `stroke`, `muted-foreground` where applicable.
- [ ] Layout does not nest a second full header/footer unless explicitly requested.
- [ ] `pnpm lint` / typecheck passes for touched files.

## Optional reference

For a concrete mock shape, see `docs/inputhtmls/home.html` (multi-section, `dark` class, extended colors). Use it as a structural reference only; output must follow this repo’s components and tokens.
