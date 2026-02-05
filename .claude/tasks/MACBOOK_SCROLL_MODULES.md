# "What's Inside Crack Editing™" - MacBook Scroll Section

## Summary
Replace the current StickyScroll-based course modules section with a **combined MacBook + StickyScroll experience**. The StickyScroll modules will display **inside the MacBook screen**, using the MacBook as a visual frame/window.

## Design Reference
- **Title**: "what's inside crack editing™" (gradient on "crack editing™")
- **Subtitle**: "A 5-hour self-paced training program that teaches you the complete system for creating addictive content."
- **Visual**: MacBook laptop with StickyScroll modules displayed inside the screen
- **CTA**: "enroll in crack editing™" button below

## Concept

```
┌─────────────────────────────────────┐
│         MacBook Frame               │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │   StickyScroll Modules        │  │  ← Modules scroll INSIDE
│  │   (6 modules within screen)   │  │     the MacBook screen
│  │                               │  │
│  └───────────────────────────────┘  │
│  ┌─────────────────────────────────┐│
│  │        Keyboard                 ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

---

## Implementation Plan

### Step 1: Install Aceternity MacBook Scroll Component ✅ DONE

```bash
npx shadcn@latest add @aceternity/macbook-scroll
```

Component installed at: `components/ui/macbook-scroll.tsx`

Dependencies installed: `@tabler/icons-react` (already available)

### Step 2: Modify MacBook Component to Accept Children

**File**: `components/ui/macbook-scroll.tsx`

The current component only accepts `src` (image) for screen content:

```tsx
<img
  src={src as string}
  className="absolute inset-0 h-full w-full rounded-lg object-cover"
/>
```

**Modification needed**: Add a `children` prop to render React components inside the screen area instead of (or in addition to) an image.

```tsx
export const MacbookScroll = ({
  src,
  children,  // NEW: Accept children for screen content
  showGradient,
  title,
  badge,
}: {
  src?: string;
  children?: React.ReactNode;  // NEW
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  // ... existing code
}
```

Update the `Lid` component to render children when provided:

```tsx
// In the Lid component, replace img with:
{children ? (
  <div className="absolute inset-0 h-full w-full rounded-lg overflow-hidden">
    {children}
  </div>
) : (
  <img
    src={src as string}
    alt="screen content"
    className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
  />
)}
```

### Step 3: Update Course Modules Section

**File**: `components/sections/course-modules.tsx`

Combine MacbookScroll with StickyScroll:

```tsx
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

export function CourseModulesSection() {
  return (
    <div className="w-full overflow-hidden section-light">
      <MacbookScroll
        title={
          <div className="text-center">
            <h2 className="...">
              what's inside <GradientText>crack editing™</GradientText>
            </h2>
            <p className="...">
              A 5-hour self-paced training program...
            </p>
          </div>
        }
        showGradient={false}
      >
        {/* StickyScroll inside MacBook screen */}
        <StickyScroll
          content={stickyContent}
          contentClassName="rounded-xl"
        />
      </MacbookScroll>

      {/* CTA Button below */}
      <div className="text-center py-12">
        <Button size="lg">
          enroll in crack editing™
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
```

### Step 4: Coordinate Scroll Behaviors

**Challenge**: Both MacBook and StickyScroll use scroll-based animations.

**Potential solutions**:
1. **Sequential scroll spaces**: MacBook animation completes first, then StickyScroll takes over
2. **Shared scroll progress**: Pass scroll progress from MacBook to StickyScroll
3. **Fixed MacBook frame**: After MacBook opens, it stays fixed while StickyScroll scrolls inside

Need to experiment to find the best UX.

### Step 5: Adjust StickyScroll for Constrained Area

The StickyScroll may need adjustments to work within the MacBook screen dimensions:
- Adjust heights/widths to fit screen area
- Modify sticky positioning to work within the container
- Scale content appropriately

### Step 6: Mobile Responsiveness

Consider mobile behavior:
- MacBook scaling: `scale-[0.35]` mobile, `scale-50` sm, `scale-100` md+
- May need alternative layout on mobile (skip MacBook, show modules directly?)

---

## Files to Modify

| File | Action | Description |
|------|--------|-------------|
| `components/ui/macbook-scroll.tsx` | MODIFY | Add `children` prop for screen content |
| `components/sections/course-modules.tsx` | MODIFY | Combine MacbookScroll + StickyScroll |
| `components/ui/sticky-scroll-reveal.tsx` | POSSIBLY MODIFY | Adjust for constrained container |

---

## Technical Challenges

1. **Scroll coordination**: Two scroll-based animations need to work together
2. **Container constraints**: StickyScroll needs to work inside MacBook screen bounds
3. **Animation timing**: When does MacBook animation end and StickyScroll begin?
4. **Mobile experience**: May need fallback for small screens

---

## Verification

1. Run `npm run dev`
2. Navigate to "What's Inside Crack Editing™" section
3. Verify MacBook displays and opens on scroll
4. Verify StickyScroll modules appear inside the MacBook screen
5. Test scrolling through all 6 modules within the MacBook frame
6. Test responsive behavior at different breakpoints
7. Click CTA button to verify it works

---

## Status: ✅ COMPLETED

- [x] Component installed (`npx shadcn@latest add @aceternity/macbook-scroll`)
- [x] Dependencies available (`@tabler/icons-react`)
- [x] Plan updated with combined approach
- [x] Modified `macbook-scroll.tsx` to accept `children` prop
- [x] Updated `course-modules.tsx` with MacbookScroll + StickyScroll
- [x] Tested scroll animation behavior
- [x] Verified visual appearance

## Implementation Summary

### Changes Made:

1. **`components/ui/macbook-scroll.tsx`**:
   - Added `children` prop to `MacbookScroll` component
   - Added `children` prop to `Lid` component
   - Modified Lid to render `children` inside the screen area when provided

2. **`components/sections/course-modules.tsx`**:
   - Replaced `StickyScroll` wrapper with `MacbookScroll`
   - Moved title/subtitle into MacbookScroll's `title` prop
   - StickyScroll now renders inside the MacBook screen

### Animation Behavior:
- Initial view: MacBook with closed lid, StickyScroll visible in screen area
- On scroll: MacBook "opens" (3D rotation animation), screen content scales up
- Continued scroll: MacBook animates away (translates up)
- Users can interact with the StickyScroll (scroll through 6 modules)
- CTA button appears below the MacBook section
