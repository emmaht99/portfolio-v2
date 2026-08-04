# Redesign Specification

## Phase 3 — Technical and Design Specification

Status: Ready for implementation

Based on:

- SITE_AUDIT.md
- REDESIGN_STRATEGY.md

## Project Goal

Build a modern UX/Product Design portfolio that communicates Emma's design ability, process, and impact within seconds.

The redesign should:

- Preserve the existing warm editorial personality.
- Improve recruiter scanning and evaluation.
- Demonstrate UX thinking, not only visual execution.
- Create a scalable component system for future projects.
- Improve accessibility, performance, and maintainability.

---

# Technical Direction

## Framework

Build using:

- Next.js
- TypeScript
- Tailwind CSS
- Component-based architecture

The application should prioritize:

- Reusable components
- Clean content structure
- Accessibility
- Performance
- Easy future updates

---

# Site Structure
/
├── Home
/work
├── All projects
├── Project filtering
/work/[project]
├── Individual case studies
/about
├── Personal story and background
/contact
├── Contact information and CTA

---

# Global Components

## SiteHeader

Purpose:
Provide persistent navigation and orientation.

Contains:

- Emma H. Tandle wordmark
- Work link
- About link
- Contact link
- Optional resume CTA

Requirements:

- Sticky or persistent behavior
- Active route indication
- Accessible navigation
- Mobile menu support

Mobile menu requirements:

- Proper button semantics
- Focus trap
- Escape key closes menu
- Large touch targets
- Screen-reader labels

---

## Footer

Contains:

- Name/identity
- Social links
- Contact
- Copyright

Should remain minimal.

---

## Button

Variants:

- Primary CTA
- Secondary CTA
- Text link
- External link

Requirements:

- Consistent styling
- Clear hover/focus states
- Accessible labels

---

# Homepage Specification

Purpose:

Convert visitors into interested recruiters or collaborators.

The homepage should answer:

1. Who is Emma?
2. What does she design?
3. Why should someone explore her work?

---

# Homepage Structure

## 1. Hero Section

Contains:

- Name
- Professional title
- Short value proposition
- Primary CTA
- Secondary CTA

Example structure:
Emma H Tandle
UX Designer creating thoughtful digital experiences through research, interaction design, and visual storytelling.
[View work]
[Contact]


Requirements:

- Strong first impression
- Clear discipline
- Avoid vague positioning

---

## 2. Featured Projects

Display:

Three strongest projects.

Order:

1. Skytsengel
2. Caritas Fællesskab
3. Deichman Wrapped

Each card includes:

- Cover image
- Project title
- Category
- Year
- Short description
- Tags
- Role
- View case study CTA

---

## 3. Capabilities / Approach

Purpose:

Explain how Emma works.

Include:

- Research
- UX strategy
- Interaction design
- Prototyping
- Visual design
- AI-assisted workflows

Keep concise.

---

## 4. Social Proof

Include:

- Testimonials
- Collaborators
- Relevant logos if applicable

Purpose:

Demonstrate teamwork and professional trust.

---

## 5. Contact Section

Include:

- Clear invitation
- Email CTA
- LinkedIn/social links

Requirements:

Avoid unclear email behavior.

---

# Work Page Specification

Purpose:

Provide a complete project archive.

Contains:

## Project Grid

Each project card includes:

- Image
- Title
- Category
- Year
- Description
- Tags
- Case study link

---

## Filters

Categories:

- All
- UX Design
- Product Design
- Visual Design
- AI / Prototyping

Requirements:

- Accessible buttons/tabs
- Visible active state
- Keyboard support
- Screen-reader result announcements

---

# Case Study Specification

Purpose:

Allow recruiters to quickly evaluate design thinking.

Each case study follows the same structure.

---

# Case Study Layout

## 1. Case Study Hero

Contains:

- Project title
- Short summary
- Cover image

---

## 2. At A Glance

Display:

- Role
- Context
- Timeline
- Team
- Tools
- Deliverables

Example:
Role:
UX research, interaction design
Context:
Self-initiated project
Timeline:
4 weeks
Tools:
Figma, interviews, prototyping
Deliverables:
Research, prototype, visual system

---

## 3. Challenge / Context

Explain:

- The problem
- Users involved
- Constraints
- Why the project mattered

---

## 4. Process

Show:

- Research
- Insights
- Ideation
- Iteration
- Testing

Focus on reasoning.

---

## 5. Outcome / Impact

Explain:

- Results
- Learnings
- Improvements
- Reflection

Avoid only showing final UI.

---

## 6. Visual Artefacts

Include:

- Wireframes
- Research outputs
- Prototype images
- Final designs

Images should include:

- Responsive sizing
- Captions
- Alt text

---

## 7. Navigation

Every case study includes:

- Previous project
- Next project
- Contact CTA

---

# About Page Specification

Purpose:

Build personal connection while maintaining professional credibility.

Sections:

## Professional Story

Include:

- Background
- Design approach
- Experience

---

## Personal Section

Maintain:

- Collage style
- Personality
- Human elements

---

## Principles / Strengths

Highlight:

- Collaboration
- Curiosity
- Research-driven design
- Problem solving

---

# Content Model

Projects should be stored as structured data.

Example:

```ts
Project {
 title
 slug
 category
 year
 description
 coverImage
 role
 context
 timeline
 tools
 deliverables
 challenge
 process
 outcome
 images
 prototypeLink
}

# Accessibility Requirements

Accessibility is a core requirement of the portfolio redesign.

The portfolio should allow all visitors to evaluate Emma's work regardless of input method, ability, or device.

## Semantic Structure

Every page must include:

- Semantic HTML landmarks:
  - header
  - nav
  - main
  - footer
- One clear h1 per page
- Logical heading hierarchy
- Meaningful document structure

---

## Keyboard Accessibility

All interactive elements must support keyboard navigation.

Requirements:

- Visible focus states
- Logical tab order
- No unnecessary focusable elements
- Keyboard-accessible menus
- Keyboard-accessible filters

---

## Navigation Accessibility

The navigation must include:

- Skip-to-content link
- Clear active page indication
- Properly labelled mobile menu button
- Focus management when menus open
- Escape key support for closing menus

---

## Project Filters

Filters must be implemented as accessible controls.

Requirements:

- Semantic buttons or tabs
- Clear selected/active state
- Keyboard support
- Screen-reader announcement when results change

---

## Images

Images must use appropriate alternative text.

Rules:

- Meaningful project images require descriptive alt text.
- Decorative collage elements should use empty alt text.
- Images should include appropriate captions where additional context is needed.

---

## Colour and Contrast

All text and interactive elements must meet WCAG AA contrast requirements.

Avoid:

- Browser-default link colours
- Uncontrolled visited states
- Low-contrast metadata

---

## Motion

Motion should respect user preferences.

Requirements:

- Support prefers-reduced-motion
- Avoid unnecessary animation
- Use motion only when it improves:
  - hierarchy
  - feedback
  - continuity

---

## Touch Targets

Interactive elements should maintain comfortable mobile usability.

Requirement:

- Minimum touch target size of 44 × 44 px

---

# Performance Requirements

The portfolio should remain visually rich while loading quickly and efficiently.

Performance is especially important for mobile users and slower connections.

## Images

Requirements:

- Use modern image formats:
  - AVIF
  - WebP
- Provide responsive image sizing
- Include explicit image dimensions
- Avoid unnecessarily large source files
- Lazy-load below-the-fold images

Priority:

- Hero imagery and first visible content should load first.
- Secondary imagery should load progressively.

---

## Animation and Media

Avoid expensive media implementations.

Requirements:

- Replace heavy GIFs with optimized alternatives:
  - WebM/video
  - CSS animation
  - optimized image sequences

Animations should not negatively affect loading performance.

---

## Fonts

Optimize typography loading.

Requirements:

- Limit font weights
- Avoid unnecessary font files
- Use font-display: swap
- Prevent layout shifts caused by fonts

---

## JavaScript

Keep client-side JavaScript minimal.

Requirements:

- Prefer server components where possible
- Avoid unnecessary dependencies
- Isolate interactive components
- Avoid unnecessary third-party scripts

---

## Third-Party Content

Avoid unnecessary external scripts.

Review:

- Analytics
- Tracking tools
- Embedded content
- External widgets

Only include tools that provide clear value.

---

## Loading Strategy

Use progressive loading patterns.

Requirements:

- Prioritize above-the-fold content
- Lazy-load non-critical content
- Avoid loading hidden content unnecessarily

---

# Design Principles

The redesigned portfolio should follow these principles.

## Editorial

The portfolio should feel intentional and crafted.

Maintain:

- Strong typography
- Thoughtful spacing
- Visual storytelling
- Clear hierarchy

Avoid:

- Generic portfolio templates
- Overly corporate layouts
- Excessive UI decoration

---

## Human

The portfolio should communicate Emma as a designer and person.

Maintain:

- Warmth
- Personality
- Playfulness
- Authentic voice

The design should feel personal while remaining professional.

---

## Professional

The portfolio must support hiring decisions.

Visitors should quickly understand:

- Emma's role
- Design strengths
- Problem-solving ability
- Project impact

---

## Accessible

Accessibility should influence every design decision.

The experience should be:

- Easy to navigate
- Easy to read
- Keyboard friendly
- Inclusive by default

---

## Scalable

The system should support future growth.

Requirements:

- Reusable components
- Consistent patterns
- Structured project data
- Easy addition of new case studies

---

## UX-Focused

The redesign should demonstrate UX thinking through the portfolio itself.

The website should embody:

- Clear hierarchy
- Reduced cognitive load
- Intentional interactions
- User-centered decisions