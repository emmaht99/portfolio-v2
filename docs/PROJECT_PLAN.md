# Project Plan

## Phase 4 — Implementation Roadmap

Status: Approved, not yet started

Based on:
- SITE_AUDIT.md
- REDESIGN_STRATEGY.md
- REDESIGN_SPEC.md

This roadmap translates the approved strategy and specification into an ordered sequence of implementation phases. Each phase lists its purpose, scope, and expected outcome. Phases are intended to be completed in order, since later phases (Work, Case Studies, Home) depend on the foundation and global components built earlier.

---

## Phase A — Foundation

### Purpose

Establish the design tokens, typography, content model, and routing skeleton that every later phase depends on.

### Scope

- Define the color palette (warm ivory canvas, deep navy ink, sky-blue accent, coral highlight, warm gray neutral) as design tokens.
- Define the typography scale (Display, H1–H3, Body, Meta) for desktop and mobile.
- Define the 4px spacing scale.
- Replace Geist fonts with Libre Baskerville (display) and a clean sans-serif (body/interface), loaded with limited weights and `font-display: swap`.
- Build a typed project content model (`Project` shape: title, slug, category, year, description, coverImage, role, context, timeline, tools, deliverables, challenge, process, outcome, images, prototypeLink) and seed it with the four real projects in priority order (Skytsengel, Caritas Fællesskab, Deichman Wrapped, TMNDEF Wine Label).
- Scaffold the App Router structure: `/`, `/work`, `/work/[project]`, `/about`, `/contact`.

### Expected Outcome

A working, unstyled route skeleton with real design tokens and real project data wired in, ready for components to be built on top of. No visual polish yet.

---

## Phase B — Global Components

### Purpose

Build the persistent, site-wide UI that appears on every page: navigation, footer, and shared interactive primitives.

### Scope

- `SiteHeader` with wordmark, Work/About/Contact links, active-route indication, sticky/persistent behavior, and a skip-to-content link.
- `MobileMenu` with proper button semantics, focus trap, Escape-to-close, and large touch targets.
- `Footer` with identity, social links, contact, and copyright — with no Framer or third-party platform branding.
- `Button`/`TextLink` primitives covering primary CTA, secondary CTA, text link, and external link variants, each with visible hover/focus states and accessible labeling.

### Expected Outcome

A consistent, accessible navigation and footer shell usable across all pages, plus a shared button/link system other components will reuse instead of one-off styles.

---

## Phase C — Work Surface

### Purpose

Deliver the "searchable archive" experience described in REDESIGN_STRATEGY.md — a scannable, filterable list of all projects.

### Scope

- `ProjectCard`: consistent aspect ratio, cover image via `next/image`, project type/year, title, one-line value statement, tags, role, and a clear "view case study" affordance.
- `ProjectFilters`: accessible button/tab group (All, UX Design, Product Design, Visual Design, AI/Prototyping) with visible selected state, full keyboard support, and screen-reader announcement of result counts.
- `/work` page assembling the filterable grid from the content model.

### Expected Outcome

A `/work` page where every project is easy to compare at a glance and can be filtered by category using a real accessible control, replacing the current unlabeled focusable-div filters.

---

## Phase D — Case Studies

### Purpose

Restructure long-form project narratives so recruiters can evaluate relevance before investing time in reading, per the "at a glance" requirement in REDESIGN_STRATEGY.md and REDESIGN_SPEC.md.

### Scope

- `CaseStudyHero`: project title, short summary, cover image.
- `FactGrid`: Role, Context, Timeline, Team, Tools, Deliverables shown immediately after the hero.
- `ContentSection`: consistent rhythm for Challenge/Context, Process, and Outcome/Impact sections.
- `MediaFrame`: responsive images with captions and descriptive alt text for wireframes, research outputs, prototypes, and final designs.
- Previous/next project navigation plus a contact CTA at the end of every case study.
- `/work/[project]` dynamic route using `generateStaticParams` from the content model, with per-project metadata.

### Expected Outcome

A single, consistent case-study template used by all four projects, where role/timeline/outcome are visible within seconds and navigation between projects is reliable and consistent (addressing the current inconsistent prev/next behavior).

---

## Phase E — Home & About

### Purpose

Turn the homepage into the "concise conversion page" described in REDESIGN_STRATEGY.md, and give the About page a clear professional-plus-personal structure.

### Scope

- Home: hero (name, title, value proposition, primary + secondary CTA), three featured `ProjectCard`s in strategic order (Skytsengel, Caritas Fællesskab, Deichman Wrapped), a concise Capabilities/Approach section, a Social Proof section (testimonials/collaborators), and a `ContactPanel`.
- About: professional story, personal/collage section preserving the existing warm personality, and a Principles/Strengths section.

### Expected Outcome

A homepage that communicates who Emma is, what she designs, and which work is strongest within seconds — and an About page that builds personal connection without losing professional credibility.

---

## Phase F — Polish & Verification

### Purpose

Confirm the rebuilt portfolio actually meets the accessibility, performance, and motion requirements set out in REDESIGN_SPEC.md, not just that it visually resembles the spec.

### Scope

- Motion pass: shared, `prefers-reduced-motion`-aware transition utilities for hero entrance, card hover/lift, and one-time image reveals.
- Accessibility pass: landmark structure, one `h1` per page, heading hierarchy, focus indicators, keyboard walkthrough, WCAG AA contrast check on the new palette, and 44×44px touch target audit.
- Performance pass: image format (AVIF/WebP) and sizing audit, below-the-fold lazy loading, confirmation that interactive components are isolated behind `"use client"` only where required.
- Verification: `tsc --noEmit`, `npm run lint`, `npm run build`, and a Lighthouse pass compared against the SITE_AUDIT.md baseline (Desktop 66/93/73/100, Mobile 45/93/73/100).

### Expected Outcome

Measurable evidence — not just visual impression — that the rebuild improved performance and technical best practices while at least maintaining the current accessibility and SEO scores.

---

# Success Criteria

Per REDESIGN_STRATEGY.md, the finished rebuild should:

- Communicate Emma's role and strengths within seconds.
- Make the strongest UX/product work immediately discoverable.
- Help recruiters understand projects without reading every detail.
- Demonstrate research, reasoning, iteration, and outcomes.
- Preserve the existing warm editorial personality.
- Improve accessibility and performance compared to the Framer version.
- Provide a scalable component system for future projects.

# Next Phase

Implementation begins only after explicit approval, phase by phase, starting with Phase A.
