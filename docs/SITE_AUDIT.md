# Technical Audit (Lighthouse)

## Summary

The current portfolio performs well in accessibility and SEO but has opportunities to improve performance and technical best practices.

## Lighthouse Scores

### Desktop

Performance: 66  
Accessibility: 93  
Best Practices: 73  
SEO: 100

### Mobile

Performance: 45  
Accessibility: 93  
Best Practices: 73  
SEO: 100

---

# Performance Findings

## 1. Image Optimization

Issue:
Large image delivery contributes significantly to page weight.

Estimated savings:
- Desktop: ~739 KiB
- Mobile: ~476 KiB

Recommendation:
- Use optimized image formats such as WebP/AVIF
- Resize images based on display size
- Use Next.js Image optimization in the rebuild

Priority:
High

---

## 2. JavaScript Usage

Issue:
Large amounts of unused JavaScript are being loaded.

Estimated savings:
~3.5 MB

Impact:
- Slower page loading
- Increased processing time
- Worse mobile experience

Recommendation:
- Reduce unnecessary dependencies
- Use component-level loading
- Avoid shipping unnecessary client-side JavaScript

Priority:
High

---

## 3. Network Payload

Issue:
Total network payload is approximately 5.5 MB.

Impact:
This particularly affects mobile users.

Recommendation:
- Optimize images
- Reduce third-party scripts
- Lazy-load non-critical content

Priority:
High

---

## 4. Cache Optimization

Issue:
Some resources could use improved cache lifetimes.

Estimated savings:
~109 KiB

Recommendation:
Configure caching strategy where possible.

Priority:
Medium

---

# Accessibility Findings

Accessibility score: 93

Current accessibility performance is strong.

Maintain:
- Semantic structure
- Good contrast
- Accessible interactions

During rebuild:
- Preserve WCAG AA standards
- Include keyboard navigation
- Include reduced-motion support

---

# Best Practices Findings

Score: 73

Opportunities:
- Review third-party dependencies
- Improve technical implementation
- Ensure modern web development standards

The Next.js rebuild should address these naturally through:
- optimized React architecture
- improved image handling
- reduced JavaScript
- cleaner dependencies

---

# Rebuild Technical Priorities

1. Optimize images with Next.js Image component
2. Minimize client-side JavaScript
3. Improve mobile loading performance
4. Maintain current accessibility strengths
5. Preserve strong SEO foundations

# Website Audit

## Phase 1 — Website Audit Complete

I reviewed the homepage, Projects, About Me, and all four case studies:

- Deichman Wrapped
- TMNDEF Wine Label
- Skytsengel
- Caritas Fællesskab

No code has been written.

---

# What Works Well

## Strong Personal Character

The portfolio has a distinctive identity through:

- Warm off-white background
- Deep blue serif display typography
- Collage-like imagery
- Conversational copy

The design feels personal and memorable while maintaining a modern editorial quality.

## Clear Design Discipline

The homepage quickly establishes Emma's discipline and presents work near the top of the page.

The portfolio communicates a broad skill set through a mix of:

- Product/UX design
- Visual design
- Research
- AI-assisted prototyping

## Strong Case Study Foundation

The four projects demonstrate meaningful breadth:

- Deichman Wrapped
- TMNDEF Wine Label
- Skytsengel
- Caritas Fællesskab

The strongest UX depth appears in Skytsengel and Caritas Fællesskab.

## Strong Contact Availability

Contact details are consistently available throughout the site.

The primary email CTA is easy to find.

## Mobile Experience

The mobile layout successfully reflows into a single-column structure without horizontal overflow.

---

# Information Architecture and User Journey

## Current Structure
Home
├── Hero + contact CTA
├── Featured work / filters
├── Skills
├── Testimonials
├── Client logos
└── Contact
Projects
└── Same four project cards
About Me
└── Personal collage + short bio
Project case studies
└── Overview → narrative/process → prototype/link → previous/next work → contact


## Current User Journey Assessment

The main journey is clear:

Arrive → View work → Open case study → Contact Emma

However, there are several opportunities to improve evaluation efficiency:

- Home and Projects pages substantially duplicate each other.
- There is no concise "best work" route.
- Project outcomes are not visible at scan level.
- Users cannot immediately understand whether projects are client, course, or self-initiated until entering a case study.

---

# UX Issues and Opportunities

## Project Filters

The category labels appear interactive but are implemented as focusable divs without semantic roles or visible state.

Issues:

- Users cannot clearly identify filtering functionality.
- Active/selected state is unclear.
- Keyboard behavior is not guaranteed.

Opportunity:

Create a proper accessible filter control with:

- Semantic buttons/tabs
- Selected states
- Keyboard support
- Clear interaction feedback

---

## Navigation

The top navigation is minimal but lacks:

- Active-page indication
- Resume link
- Direct contact destination

Opportunity:

Improve navigation clarity and recruiter efficiency.

---

## Project Cards

Homepage project cards have:

- Variable image proportions
- Different copy lengths
- Inconsistent scan patterns

This weakens project comparison.

Opportunity:

Create a more consistent project card system with:

- Project type
- Role
- Tools
- Timeline
- Outcome/impact summary

---

## Contact CTA

"Get in touch" opens an email client in a new target.

Issue:

The expected behavior is unclear.

Opportunity:

Clearly communicate:

- Email action
- External behavior
- Contact destination

---

## Project Prioritization

The strongest work is not currently prioritized through:

- Featured project status
- Outcomes
- Role information
- Timeline
- Tools

Opportunity:

Create a stronger hierarchy around the most valuable work for recruiters.

---

## Case Study Structure

Project pages require users to move through long narratives before finding essential context.

Opportunity:

Introduce an early "at a glance" summary containing:

- Role
- Timeline
- Team
- Tools
- Problem
- Outcome

This reduces cognitive load for recruiters.

---

## Case Study Navigation

Navigation between projects is inconsistent.

Some projects include next-project navigation, but there is no reliable previous/next system across all work.

Opportunity:

Create consistent project navigation.

---

## Repeated Content

Repeated contact markup appears in the rendered project-page structure.

Potential risks:

- Duplicate content
- Extra keyboard navigation stops
- Breakpoint-related accessibility issues

---

## Framer Branding

A Framer promotional footer link detracts from the premium personal-brand experience.

Opportunity:

Remove platform branding in the final portfolio experience.

---

# Visual System and Layout

## Typography

Typography system:

- Libre Baskerville for prominent blue headings
- DM Sans for body text and cards

Strengths:

- Strong personality
- Editorial feel
- Clear hierarchy

The desktop hero size (~80px) and mobile scaling (~42px) are appropriate.

---

## Color System

Current palette:

- Warm off-white: #F8F6F3
- Deep navy display headings
- Pale blue CTA
- Bright/pink visited-link behavior

The palette is cohesive and intentional.

Opportunity:

Replace browser-default link states with designed interaction states.

---

## Spacing

The portfolio has a spacious editorial feel.

Opportunity:

The mobile homepage extends to approximately 6,700px, creating a long journey before reaching contact.

Non-work sections should be evaluated for prioritization and compression.

---

## Components

Existing repeated patterns:

- Navigation
- Project cards
- Tags
- Contact panels
- Footer
- Case-study sections

Opportunity:

Convert these into a deliberate design system.

---

## Motion

The site includes smooth-scroll tooling but limited purposeful interaction feedback.

Opportunity:

Use motion strategically for:

- Feedback
- Transitions
- Storytelling

Ensure support for reduced-motion preferences.

---

# Accessibility Findings

## Images

All inspected homepage images lacked alternative text.

Guidance:

- Decorative imagery can use empty alt text.
- Meaningful project images and case-study visuals require descriptive alternatives.

---

## Filter Controls

Project filters are keyboard-focusable divs rather than buttons/tabs.

Missing:

- Role
- Label
- Selected state
- Guaranteed keyboard interaction

---

## Keyboard Navigation

Several non-link containers are focusable.

Risk:

Creates unclear and noisy keyboard navigation.

---

## Link Styling

Link colors rely partly on browser defaults, including visited pink.

Issue:

Visual consistency is reduced.

Opportunity:

Create intentional link states.

---

## Mobile Navigation

Navigation text is 12px on mobile.

Issue:

Smaller than comfortable touch and reading targets.

Opportunity:

Increase size and spacing.

---

## Navigation Structure

Missing:

- Visible skip link
- Clear active navigation state
- Evidence of a named main landmark

---

## Accessible Labels

Generic text such as "Test Prototype" needs clearer accessible naming.

Improvement:

Example:

"Open Skytsengel Figma prototype"

---

## Image Loading

All homepage images load eagerly.

Opportunity:

Use intentional lazy loading for below-the-fold content.

---

## Metadata

Metadata exists but is minimal.

Issues:

- Broad titles reused across pages
- Generic descriptions

Opportunity:

Create specific metadata per page and project.

---

# Performance Risks

These are implementation-level risks observed from the live page.

## Image Loading

The homepage contains 22 images.

Current issue:

Images are discovered with automatic/eager browser loading.

Opportunity:

Implement intentional loading strategy:

- Lazy loading
- Optimized formats
- Correct sizing

---

## Large Image Assets

Several images are large source assets being downscaled through delivery URLs.

Risk:

Avoidable transfer and decoding cost.

Opportunity:

Optimize:

- Dimensions
- Formats
- Compression

---

## Animated Assets

Animated GIF content is used.

Opportunity:

Replace with:

- WebM/video
- AVIF sequences
- CSS animations where appropriate

---

## Third-Party Overhead

Current overhead includes:

- Framer runtime
- Analytics
- Event tracking
- Smooth-scroll CSS
- Framer promotional embed

Opportunity:

Reduce unnecessary scripts during rebuild.

---

## Progressive Loading

Long homepage and visual-heavy case studies lack a visible progressive-loading strategy.

Opportunity:

Introduce:

- Staged loading
- Optimized images
- Component-level loading

---

# Nielsen's 10 Usability Heuristics

| Heuristic | Current Assessment |
|---|---|
| 1. Visibility of system status | Partly supported through hover/focus affordances, but project filters have no active/selected feedback and external-link behavior is unclear. |
| 2. Match between system and real world | Strong. Friendly, plain language and visual storytelling suit a design portfolio. |
| 3. User control and freedom | Partly supported. Users can navigate back to all work, but case studies lack a dependable previous/next system and no quick way to move within long pages. |
| 4. Consistency and standards | Partly violated. Repeated patterns exist, but default/visited link colors, duplicated content structures, and mixed navigation behavior reduce consistency. |
| 5. Error prevention | Weak. No form means few input errors, but ambiguous prototype and email links can lead to surprising context changes. |
| 6. Recognition rather than recall | Partly supported. Project cards show titles, descriptions, and tags; case studies should surface role, outcome, scope, and tools immediately. |
| 7. Flexibility and efficiency of use | Weak. There is no quick project filtering with accessible controls, featured-work path, resume link, or in-page navigation for lengthy cases. |
| 8. Aesthetic and minimalist design | Strong visual personality, but content repetition, long project narratives, and variable card density make scanning less efficient than it could be. |
| 9. Help users recognize, diagnose, and recover from errors | Mostly not applicable because there are no forms or app-like tasks. External destinations should still be explicitly labelled. |
| 10. Help and documentation | Not required as a portfolio, but case-study framing could better orient recruiters with concise summaries and outcomes. |

---

# Core Redesign Direction

Preserve the expressive, handmade/editorial personality.

Improve it by making the work easier to evaluate:

- Feature the strongest projects
- Make project metadata and results more scannable
- Turn filters into a real accessible control
- Tighten long-form case studies
- Make every interaction intentional
- Improve recruiter understanding of role, process, and impact

The goal is to move from a portfolio that showcases design ability to one that clearly demonstrates UX problem-solving and professional readiness.