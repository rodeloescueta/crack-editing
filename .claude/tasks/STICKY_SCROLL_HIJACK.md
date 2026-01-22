# Sticky Scroll Hijack - Course Modules Section

## Status: REVERTED

The full-section sticky scroll (Option C) was attempted but encountered issues with CSS sticky positioning not working reliably in the nested component structure. After troubleshooting, we reverted to the original internal scrollbar approach.

## Final Implementation
- Internal container scroll with `overflow-y-auto`
- Custom scrollbar visible via `.scrollbar-modules` CSS class
- Container height: `h-[24rem]` (384px)
- Module transitions driven by internal scroll progress

---

## Original Plan (Archived)

### Overview
Implement Apple-style scroll hijacking for the "What's Inside Crack Editing" section where the entire section stays pinned while page scroll drives the internal module transitions.

## Current State
- `StickyScroll` component uses internal container scroll (`overflow-y-auto`)
- Custom scrollbar visible via `.scrollbar-modules` CSS class
- 6 modules with content cards that fade in/out based on scroll position

## Goal
- Section becomes sticky when user scrolls to it
- Page scroll controls module transitions (no internal scrollbar needed)
- Section unpins after all modules have been shown
- Smooth, immersive experience like Apple's product pages

## Implementation Plan

### Task 1: Update StickyScroll Component Architecture
**File:** `components/ui/sticky-scroll-reveal.tsx`

Changes:
1. Remove internal `overflow-y-auto` - content won't scroll internally
2. Switch from `container: ref` to `target: ref` in `useScroll` - use page scroll instead
3. Make the outer wrapper sticky with appropriate height for scroll distance
4. Calculate scroll progress based on section position in viewport

**Key changes:**
```tsx
// Before: Internal container scroll
const { scrollYProgress } = useScroll({
  container: ref,
  offset: ["start start", "end start"],
});

// After: Page scroll tracking the section
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"],
});
```

### Task 2: Create Sticky Container Wrapper
**File:** `components/ui/sticky-scroll-reveal.tsx`

Structure:
```
<div className="relative" style={{ height: `${(modules.length) * 100}vh` }}>
  <div className="sticky top-0 h-screen flex items-center">
    <!-- Module content here -->
  </div>
</div>
```

- Outer div: Creates scroll distance (height = modules × viewport height)
- Inner sticky div: Stays pinned while user scrolls through the outer container
- Module transitions driven by `scrollYProgress` of the outer container

### Task 3: Update Module Transition Logic
**File:** `components/ui/sticky-scroll-reveal.tsx`

- Map `scrollYProgress` (0 to 1) to active module index (0 to 5)
- Each module gets ~16.67% of the scroll distance
- Animate content opacity and position based on active state

### Task 4: Remove Internal Scrollbar
**File:** `components/ui/sticky-scroll-reveal.tsx`

- Remove `overflow-y-auto` class
- Remove `scrollbar-modules` class (no longer needed)
- Remove fixed height constraint (`h-[22rem]`)

### Task 5: Add Progress Indicator (Optional Enhancement)
Consider adding a visual progress indicator showing which module is active:
- Dots/pills on the side
- Progress bar
- Module number indicator

### Task 6: Mobile Responsiveness
- On mobile, may want to reduce scroll distance
- Ensure touch scrolling works smoothly
- Consider fallback to simpler scroll on very small screens

## Technical Details

### Scroll Math
```typescript
const cardLength = content.length; // 6 modules
const scrollPerCard = 1 / cardLength; // ~0.167 per module

// In useMotionValueEvent:
const activeIndex = Math.min(
  Math.floor(scrollYProgress * cardLength),
  cardLength - 1
);
```

### Height Calculation
- Each module transition needs scroll distance
- Total height = `${cardLength * 100}vh` gives 1 viewport per module
- Can adjust multiplier for faster/slower transitions

## Files to Modify
1. `components/ui/sticky-scroll-reveal.tsx` - Main component rewrite
2. `app/globals.css` - May remove `.scrollbar-modules` if no longer needed

## Testing Checklist
- [ ] Section pins when scrolling to it
- [ ] Module transitions smoothly as user scrolls
- [ ] Section unpins after last module
- [ ] Works on desktop (1024px+)
- [ ] Works on tablet (640-1023px)
- [ ] Works on mobile (320-639px)
- [ ] No janky scroll behavior
- [ ] Module card on right side updates correctly
