# Redesign Strategy

## Phase 2 — Portfolio Redesign Strategy

Status: Approved

Based on:
- SITE_AUDIT.md
- UX heuristic evaluation
- Accessibility review
- Performance review
- Current portfolio assessment

## Goal

Transform the portfolio from a visually strong showcase into a recruiter-friendly UX/Product Design portfolio that clearly communicates:

- Who Emma is
- What design problems she solves
- How she approaches design
- The impact and outcomes of her work

The redesign should preserve the existing warm, playful, handmade/editorial personality while introducing a more disciplined product-case-study structure.

---

# North-Star Experience

A visitor should understand three things within seconds:

1. Who Emma is
2. What kind of design problems she solves
3. Which work best demonstrates her abilities

The redesign will retain the warm collage aesthetic while improving clarity, hierarchy, and evaluation speed for recruiters and hiring managers.

---

# New Information Architecture
Home
├── Hero: role, value proposition, primary CTA
├── Featured projects (3)
├── Capabilities / approach
├── Selected proof: testimonials + collaborators
└── Contact
Work
├── All projects
└── Accessible category filters
Case Study
├── At a glance
├── Context and challenge
├── Process
├── Outcome / impact
├── Visual artefacts
└── Next project + contact
About
├── Short professional story
├── Personal collage
├── Principles / strengths
└── Contact


## Justification

Home becomes a concise conversion page.

Work becomes the searchable archive.

Case studies become easier to evaluate within a recruiter's limited time.

---

# Navigation

Use a persistent, accessible header with:

- Wordmark: "Emma H. Tandle"
- Work
- About
- Contact
- Optional secondary CTA: "View résumé"

Requirements:

- Active route visibility
- Accessible navigation structure
- Mobile menu with:
  - Properly labelled menu button
  - Focus trap
  - Escape-to-close behavior
  - Large tap targets

## Justification

Clear orientation lowers cognitive load and provides quick routes to work and contact.

---

# Content Hierarchy

## Project Cards

Each project card should show:

- Cover image with meaningful alt text
- Project type/year
- Title
- One-line value statement
- Tags
- Clear "View case study" affordance

## Case Study Overview

Each case study begins with a concise overview:

| Field | Example |
|---|---|
| Role | UX research, interaction design |
| Context | Self-initiated / client / course |
| Timeline | 4 weeks |
| Deliverables | Research, prototype, visual system |
| Outcome | What changed or was learned |

## Justification

Visitors should determine project relevance before investing time in long-form reading.

---

# Layout and Mobile-First Direction

Use a single-column content flow as the baseline.

Expand to a two-column editorial grid only where comparison or visual storytelling benefits from it.

Requirements:

- Maintain readable content widths (~65–75 characters)
- Keep case-study prose constrained on wide screens
- Use intentional responsive image crops
- Use consistent project card aspect ratios
- Shorten mobile homepage length by tightening:
  - Skills
  - Testimonials
  - Company/client proof sections

## Justification

The redesign should preserve richness without creating an exhausting mobile experience.

---

# Accessibility Improvements

Requirements:

- Use semantic landmarks:
  - header
  - nav
  - main
  - footer
- One h1 per page
- Add skip-to-content link
- Provide visible focus indicators
- Build filters as accessible controls with:
  - selected state
  - keyboard support
  - screen-reader announcements
- Use descriptive image alt text
- Keep only decorative collage imagery as empty alt text
- Ensure WCAG AA contrast
- Label external destinations and mail links clearly
- Respect prefers-reduced-motion
- Maintain minimum touch targets of 44 × 44 px

## Justification

All visitors should be able to evaluate the portfolio independently regardless of input method, vision ability, or motion sensitivity.

---

# Performance Plan

Requirements:

- Use responsive modern image formats:
  - AVIF
  - WebP
- Include explicit image dimensions
- Prioritize only hero/first featured imagery
- Lazy-load below-fold media
- Replace expensive GIFs with:
  - Optimized video
  - WebM
  - Lightweight CSS motion
- Optimize font loading:
  - Limit font weights
  - Use font-display: swap
- Avoid unnecessary third-party scripts
- Keep client-side JavaScript minimal
- Isolate motion components

## Justification

A portfolio can be visually rich while still feeling immediate, especially on mobile and slower connections.

---

# Animation Strategy

Motion should support hierarchy, interaction, and continuity.

Use:

## Hero

- Gentle collage entrance once
- Avoid continuous decorative animation

## Project Cards

- Subtle hover/focus feedback
- Small lift effect
- Image crop shift
- Visible CTA

## Navigation

- Short opacity/position transitions only when they preserve context

## Case Studies

- Image reveals triggered once when entering view

## Accessibility

- Disable or simplify nonessential motion under prefers-reduced-motion

## Justification

Motion should communicate meaning rather than compete with content.

---

# Component System

| Component | Purpose |
|---|---|
| SiteHeader / MobileMenu | Global navigation and route orientation |
| Button / TextLink | Consistent primary, secondary, and external interactions |
| ProjectCard | Reusable project summary across Home and Work |
| ProjectFilters | Accessible category filtering |
| CaseStudyHero | Scannable project introduction |
| FactGrid | Role, timeline, tools, and deliverables |
| ContentSection | Consistent article rhythm |
| MediaFrame | Responsive images, captions, and visual comparisons |
| Testimonial | Structured social proof |
| ContactPanel | Clear conversion point |
| Footer | Identity, social links, and copyright |

## Justification

Reusable building blocks maintain consistency, reduce duplication, and make future projects easier to add.

---

# Design System

## Typography

| Token | Desktop | Mobile | Use |
|---|---|---|---|
| Display | 72px | 44px | Hero statements |
| H1 | 56px | 40px | Page titles |
| H2 | 40px | 32px | Major sections |
| H3 | 28px | 24px | Case-study sections |
| Body | 18px | 16px | Primary reading text |
| Meta | 14px | 14px | Tags, dates, labels |

Typography direction:

- Keep Libre Baskerville as the expressive display face.
- Use a clean sans-serif for reading and interface elements.
- Increase line-height for long-form case-study readability.

---

# Spacing System

Use a 4px base scale:

- 4
- 8
- 12
- 16
- 24
- 32
- 48
- 64
- 96
- 128

## Justification

Maintains the editorial feel while creating consistent spacing decisions.

---

# Color Palette

## Canvas

Warm ivory background.

## Ink

Deep navy for headings and primary text.

## Accent

Refined sky blue for primary actions.

## Highlight

Muted coral/pink for emphasis.

## Neutral

Warm gray for metadata and borders.

Requirements:

All final color combinations must meet contrast requirements before implementation.

---

# Interaction Patterns

Requirements:

- Featured cards are fully clickable with visible text links.
- Filters update results instantly and announce result count to screen readers.
- External prototype links clearly state destination.
- Contact CTA uses direct mail link and copy-email fallback.
- Long case studies include:
  - Compact table of contents on desktop
  - Jump menu on mobile

## Justification

These patterns reduce time-to-content and make expected behavior clear.

---

# Prioritized Project Presentation

Projects should be ordered to best communicate UX/Product Design ability.

## 1. Skytsengel

Strength:
- Strongest research depth
- Social impact
- Complex problem space

## 2. Caritas Fællesskab

Strength:
- Participatory design
- Inclusive design narrative

## 3. Deichman Wrapped

Strength:
- Contemporary
- Playful
- AI-assisted product concept

## 4. TMNDEF Wine Label

Strength:
- Visual design contrast piece
- Presented as a concise visual case study

## Justification

This ordering makes the breadth of Emma's practice clear while leading with the strongest evidence of UX/product thinking.

---

# Success Criteria

The redesigned portfolio should:

- Communicate Emma's role and strengths within seconds.
- Make the strongest UX/product work immediately discoverable.
- Help recruiters understand projects without reading every detail.
- Demonstrate research, reasoning, iteration, and outcomes.
- Preserve the existing warm editorial personality.
- Improve accessibility and performance compared to the Framer version.
- Provide a scalable component system for future projects.

---

# Next Phase

Phase 3 will define the technical architecture, Next.js structure, reusable component contracts, and implementation plan before development begins.