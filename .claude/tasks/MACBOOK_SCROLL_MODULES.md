# "What's Inside Crack Editing™" - MacBook Scroll Section

## Summary
Replace the StickyScroll-based course modules section with a **MacBook Scroll showcase**. Taking an incremental approach: Phase 1 gets the laptop frame working with a sample image, Phase 2 will swap in actual course module content.

## Phase 1: MacBook Frame with Sample Image ✅ COMPLETED

### What was done:

1. **`components/ui/macbook-scroll.tsx`** (CREATED)
   - Manually ported from Aceternity UI Svelte source (registry was down)
   - Full MacBook component with: lid 3D rotation animation, keyboard with all keys, trackpad, speaker grids
   - Scroll-driven animation via Framer Motion `useScroll` + `useTransform`
   - Props: `src` (screen image), `title`, `badge`, `showGradient`
   - Responsive scaling: `scale-[0.35]` mobile, `sm:scale-50`, `md:scale-100`

2. **`components/sections/macbook-showcase.tsx`** (CREATED)
   - Wraps `MacbookScroll` with `src="/images/hero/gradient-abstract.jpg"` as placeholder
   - Title: "what's inside crack editing™" (with `GradientText`)
   - `overflow-hidden` on section to prevent horizontal scroll
   - Light background (`section-light`) matching surrounding sections

3. **`components/sections/index.ts`** (MODIFIED)
   - Added `MacbookShowcaseSection` export

4. **`app/page.tsx`** (MODIFIED)
   - Replaced `CourseModulesSection` with `MacbookShowcaseSection`
   - `CourseModulesSection` left untouched for Phase 2

### Verification Results:
- ✅ Desktop (1280px): MacBook renders correctly, lid opens on scroll, sample image visible
- ✅ Tablet (640px): Properly scaled, centered, functional
- ✅ Mobile (320px): Scaled down via transform, no horizontal overflow
- ✅ No horizontal scrollbar on any viewport
- ✅ Sections above/below unaffected
- ✅ Build passes with no type errors

---

## Phase 2: StickyScroll Inside MacBook Screen ✅ COMPLETED

### What was done:

1. **`components/ui/macbook-scroll.tsx`** (MODIFIED)
   - Added `children` prop to `MacbookScroll` and `Lid` components
   - Lid renders `children` inside screen area when provided, falls back to `src` image
   - Children rendered in `absolute inset-0 overflow-hidden rounded-lg` container

2. **`components/sections/macbook-showcase.tsx`** (MODIFIED)
   - Moved module data (6 modules), `ModuleContentCard`, and `stickyContent` array directly into this file
   - Passes `StickyScroll` component as children to `MacbookScroll`
   - Removed CTA button (page has multiple "enroll" CTAs already)
   - Enabled `showGradient` for bottom fade effect

### Key Technical Insight:
- StickyScroll uses `useScroll({ container: ref })` (internal overflow scroll)
- MacBook uses `useScroll({ target: ref })` (page scroll)
- These two scroll contexts don't conflict - they operate independently

### Verification Results:
- ✅ Desktop (1280px): MacBook renders with live StickyScroll content, lid animation works, Module 1 visible with purple gradient card, play button, progress bar (1/6)
- ✅ Transition: Clean transition from MacBook section to "Is this course for me?" via curve divider
- ✅ MacBook section overflow: `overflow-hidden` working correctly (scrollWidth === offsetWidth)
- ✅ Mobile (375px): Content scales down, readable, no overflow from MacBook section
- ✅ Desktop: No horizontal overflow (1280 === 1280)
- ✅ Build passes with no type errors
- ⚠️ Pre-existing mobile overflow from Hero (583px), Creators (430px), Pricing (378px) sections - not caused by our changes
