# UI/UX Improvements Task Document

**Created:** 2026-01-16
**Updated:** 2026-01-16
**Status:** Planning
**Priority:** High

---

## Overview

Comprehensive UI/UX improvements identified from a senior designer review of the Crack Editing™ landing page at https://br-course.vercel.app/

---

## Task Categories

### Priority Legend
- **P0** - Critical (blocks conversion)
- **P1** - High (significant UX improvement)
- **P2** - Medium (polish & refinement)
- **P3** - Low (nice-to-have)

---

## 1. Global / Site-Wide Improvements

### 1.1 Add Loading States / Skeleton Screens
- **Priority:** P2
- **Status:** [ ] Not Started
- **Description:** Prevent animation pop-in by adding skeleton loading states
- **Requirements:**
  - [ ] Skeleton for video cards
  - [ ] Skeleton for stats counters
  - [ ] Smooth fade-in transitions

---

## 2. Hero Section Improvements

### 2.1 Enhance Background Visual Interest
- **Priority:** P2
- **Status:** [ ] Not Started
- **Description:** Make the grid background more dynamic
- **Options:**
  - [ ] Add subtle particle effect
  - [ ] Add gradient color shifts on scroll
  - [ ] Add floating elements
- **Files to modify:**
  - `components/sections/hero.tsx`
  - `components/ui/background-effects.tsx` (create)

### 2.2 Improve CTA Button Hierarchy
- **Priority:** P2
- **Status:** [ ] Not Started
- **Description:** Make primary/secondary buttons more distinct
- **Requirements:**
  - [ ] Add hover micro-interactions (scale, glow)
  - [ ] Secondary button should be more muted
  - [ ] Add subtle pulse to primary CTA
- **Files to modify:**
  - `components/sections/hero.tsx`
  - `components/ui/button.tsx`

---

## 3. Transformation Carousel Improvements

### 3.1 Add Video Thumbnail Placeholders
- **Priority:** P1
- **Status:** [ ] Not Started
- **Description:** Replace colored boxes with image placeholders for video thumbnails
- **Requirements:**
  - [ ] Use placeholder images from `public/images/`
  - [ ] Add proper aspect ratio containers
  - [ ] Add loading state for images
- **Files to modify:**
  - `components/sections/transformation-carousel.tsx`
  - `components/ui/video-card.tsx`

### 3.2 Improve Navigation Dots
- **Priority:** P2
- **Status:** [ ] Not Started
- **Description:** Make carousel navigation more visible and accessible
- **Requirements:**
  - [ ] Increase dot size (especially mobile)
  - [ ] Add active state animation
  - [ ] Consider adding swipe hint for mobile
- **Files to modify:**
  - `components/sections/transformation-carousel.tsx`

---

## 4. Iceberg Visualization Improvements

### 4.1 Improve Text Readability
- **Priority:** P1
- **Status:** [ ] Not Started
- **Description:** Fix contrast issues with cyan text on dark blue
- **Requirements:**
  - [ ] Increase text brightness
  - [ ] Add text shadow or backdrop
  - [ ] Increase mobile text size
- **Files to modify:**
  - `components/ui/iceberg-reveal-c.tsx`

### 4.2 Add Scroll Indicator
- **Priority:** P2
- **Status:** [ ] Not Started
- **Description:** Help users understand they should scroll to reveal
- **Requirements:**
  - [ ] Add "Scroll to explore" text or icon
  - [ ] Animate indicator
  - [ ] Hide after user starts scrolling
- **Files to modify:**
  - `components/ui/iceberg-reveal-c.tsx`

### 4.3 Add Label Reveal Animation
- **Priority:** P3
- **Status:** [ ] Not Started
- **Description:** Add pulsing/glowing effect on labels as they reveal
- **Requirements:**
  - [ ] Glow effect when label first appears
  - [ ] Subtle pulse animation
- **Files to modify:**
  - `components/ui/iceberg-reveal-c.tsx`

---

## 5. Problem vs Solution Section Improvements

### 5.1 Add Card Depth & Hover States
- **Priority:** P2
- **Status:** [ ] Not Started
- **Description:** Make cards feel more interactive
- **Requirements:**
  - [ ] Add subtle shadow/glow to cards
  - [ ] Add hover effect on list items
  - [ ] Make Solution card more prominent (subtle green glow)
- **Files to modify:**
  - `components/sections/problem-solution.tsx`

### 5.2 Add Animated Checkmarks
- **Priority:** P3
- **Status:** [ ] Not Started
- **Description:** Animate checkmarks when scrolling into view
- **Requirements:**
  - [ ] Staggered check animation
  - [ ] Subtle bounce effect
- **Files to modify:**
  - `components/sections/problem-solution.tsx`

---

## 6. Course Modules Section Improvements

### 6.1 Add Module Icons
- **Priority:** P2
- **Status:** [ ] Not Started
- **Description:** Add unique icons for each module
- **Requirements:**
  - [ ] Module 1: Eye icon (scroll-stopping)
  - [ ] Module 2: Sparkle icon (tiny changes)
  - [ ] Module 3: Users icon (audience)
  - [ ] Module 4: Grid icon (6-element system)
  - [ ] Module 5: Play icon (breakdowns)
  - [ ] Module 6: Video icon (live editing)
- **Files to modify:**
  - `components/sections/course-modules.tsx`

### 6.2 Add Module Progress Indicator
- **Priority:** P2
- **Status:** [ ] Not Started
- **Description:** Show users which module they're viewing (1/6, 2/6...)
- **Requirements:**
  - [ ] Progress bar or dots
  - [ ] Current module highlight
  - [ ] Smooth transitions
- **Files to modify:**
  - `components/sections/course-modules.tsx`

---

## 7. "Is This For Me?" Section Improvements

### 7.1 Differentiate from Problem/Solution
- **Priority:** P2
- **Status:** [ ] Not Started
- **Description:** Make this section visually distinct
- **Options:**
  - [ ] Different card style
  - [ ] Different layout (checklist style)
  - [ ] Add interactive checkboxes
- **Files to modify:**
  - `components/sections/is-this-for-me.tsx` (create or find existing)

---

## 8. Pricing Section Improvements

### 8.1 Highlight Payment Plan Option
- **Priority:** P2
- **Status:** [ ] Not Started
- **Description:** Make the 3-payment option more visible
- **Options:**
  - [ ] Add toggle switch (One-time / 3 Payments)
  - [ ] Larger text treatment
  - [ ] Visual separator
- **Files to modify:**
  - `components/sections/pricing.tsx`

### 8.2 Add CTA Button Animation
- **Priority:** P3
- **Status:** [ ] Not Started
- **Description:** Make the enroll button more attention-grabbing
- **Requirements:**
  - [ ] Subtle pulse or glow
  - [ ] Hover scale effect
- **Files to modify:**
  - `components/sections/pricing.tsx`

---

## 9. FAQ Section Improvements

### 9.1 Add Section Header
- **Priority:** P1
- **Status:** [ ] Not Started
- **Description:** Add "Frequently Asked Questions" header
- **Requirements:**
  - [ ] Consistent styling with other section headers
  - [ ] Optional subtext
- **Files to modify:**
  - `components/sections/faq.tsx`

### 9.2 Improve Accordion Design
- **Priority:** P2
- **Status:** [ ] Not Started
- **Description:** Make accordions more visible and accessible
- **Requirements:**
  - [ ] Larger accordion arrows
  - [ ] Add dividers between items
  - [ ] Expand first FAQ by default
  - [ ] Smoother expand/collapse animation
- **Files to modify:**
  - `components/sections/faq.tsx`

---

## 10. Footer Improvements

### 10.1 Add Social Media Links
- **Priority:** P2
- **Status:** [ ] Not Started
- **Description:** Add social media icons
- **Requirements:**
  - [ ] Instagram, Twitter/X, YouTube, TikTok
  - [ ] Consistent icon styling
  - [ ] Hover effects
- **Files to modify:**
  - `components/sections/footer.tsx`

### 10.2 Add Newsletter Signup
- **Priority:** P3
- **Status:** [ ] Not Started
- **Description:** Add email capture form
- **Requirements:**
  - [ ] Email input field
  - [ ] Submit button
  - [ ] Success/error states
- **Files to modify:**
  - `components/sections/footer.tsx`

### 10.3 Add Logo
- **Priority:** P3
- **Status:** [ ] Not Started
- **Description:** Add small logo to footer
- **Files to modify:**
  - `components/sections/footer.tsx`

---

## 11. Accessibility Improvements

### 11.1 Fix Color Contrast Issues
- **Priority:** P1
- **Status:** [ ] Not Started
- **Description:** Ensure all text meets WCAG AA standards
- **Areas to check:**
  - [ ] Cyan text on dark blue (iceberg)
  - [ ] Muted text throughout
  - [ ] Links and interactive elements
- **Files to modify:**
  - `app/globals.css`

### 11.2 Add Focus States
- **Priority:** P1
- **Status:** [ ] Not Started
- **Description:** Ensure keyboard navigation is visible
- **Requirements:**
  - [ ] Focus rings on all interactive elements
  - [ ] Skip-to-content link
- **Files to modify:**
  - `app/globals.css`
  - Various component files

### 11.3 Add ARIA Attributes
- **Priority:** P2
- **Status:** [ ] Not Started
- **Description:** Improve screen reader support
- **Requirements:**
  - [ ] Accordion ARIA attributes
  - [ ] Carousel ARIA attributes
  - [ ] Button labels
- **Files to modify:**
  - `components/sections/faq.tsx`
  - `components/sections/transformation-carousel.tsx`

---

## Implementation Order (Recommended)

### Phase 1: Critical (P1) ✅ COMPLETED
1. [x] Add FAQ section header
2. [x] Add video thumbnail placeholders to carousel
3. [x] Fix iceberg text readability
4. [x] Fix color contrast issues
5. [x] Add focus states

### Phase 2: Polish (P2) ✅ COMPLETED
1. [ ] Add loading states / skeleton screens (skipped - lower priority)
2. [x] Improve CTA button hierarchy (hover scale, glow, pulse animation)
3. [x] Improve navigation dots (larger, active glow, swipe hint)
4. [x] Add scroll indicator to iceberg ("Scroll to explore" with animated chevron)
5. [x] Add card hover states (problem/solution glow, item hover backgrounds)
6. [x] Add module icons and progress indicator (icons already present)
7. [x] Differentiate "Is This For Me?" section (unified checklist card layout)
8. [x] Highlight payment plan option (pill badge with "3 × $99")
9. [x] Improve accordion design (larger rounded arrows, visible dividers)
10. [x] Add social media links to footer (Instagram, Twitter, YouTube, TikTok)
11. [x] Add ARIA attributes (carousel roles, FAQ aria-label)

### Phase 3: Nice-to-Have (P3) ✅ COMPLETED
1. [x] Enhance background visual interest (floating orbs & particles in hero)
2. [x] Add label reveal animation (iceberg labels glow & scale on reveal)
3. [x] Add animated checkmarks (spring animation with staggered reveal)
4. [x] Add CTA button animation (already implemented via cta-pulse in Phase 2)
5. [x] Add newsletter signup (email form with loading & success states)
6. [x] Add footer logo (text-based logo with gradient icon)

---

## Notes

- All changes should maintain mobile responsiveness
- Test animations on low-end devices for performance
- Maintain the current dark theme aesthetic
- Consider A/B testing major changes

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2026-01-16 | Initial document created | Claude |
| 2026-01-16 | Revised: Removed sticky nav, back-to-top, view count animation (already exists), interactive checkboxes, What You Get section, Meet The Creators section. Updated 3.1 to use image placeholders. | Claude |
| 2026-01-16 | **Phase 1 Complete**: Added FAQ header, video thumbnails to carousel, improved iceberg text readability, fixed color contrast (muted-foreground 0.65→0.72), added focus-visible states for accessibility. | Claude |
| 2026-01-16 | **Phase 2 Complete**: CTA button hover/pulse effects, improved carousel navigation dots with glow, added iceberg scroll indicator, enhanced comparison card hover states, differentiated "Is This For Me" with unified checklist card, highlighted payment plan option, improved accordion with larger arrows, added social media links to footer, added ARIA attributes for accessibility. | Claude |
| 2026-01-16 | **Phase 3 Complete**: Added floating particles/orbs to hero background, added label reveal glow animation to iceberg, added spring-animated staggered checkmarks to comparison cards, added newsletter signup form with loading states to footer, added text-based logo to footer. All UI/UX improvements complete! | Claude |
