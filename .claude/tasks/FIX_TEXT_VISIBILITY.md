# Fix Text Visibility Issues

## Issues

### 1. "crack editing™" text not visible (course-modules.tsx:156)
- **Problem**: `GradientText variant="purple"` uses `text-gradient-purple` class which references `--gradient-purple-from` and `--gradient-purple-to` CSS variables
- **Root cause**: These variables are NOT defined in `globals.css` - only orange and blue gradients exist
- **Fix**: Add purple gradient CSS variables to `:root` and `.dark` in `globals.css`

### 2. "for me?" text not visible (for-me.tsx:52)
- **Problem**: Same purple gradient issue
- **Fix**: Same as above - defining the purple variables will fix both

### 3. Module section frame adjustment
- **Problem**: The sticky scroll section needs visual containment
- **Fix**: Already has frame styling in `sticky-scroll-reveal.tsx` - may need minor tweaks

---

## Implementation

### Task 1: Add purple gradient CSS variables
**File**: `app/globals.css`

Add to `:root`:
```css
--gradient-purple-from: oklch(0.70 0.20 290);
--gradient-purple-to: oklch(0.55 0.25 270);
```

Add to `.dark`:
```css
--gradient-purple-from: oklch(0.75 0.22 290);
--gradient-purple-to: oklch(0.60 0.27 270);
```

### Task 2: Verify fixes
- Check "what's inside crack editing™" section
- Check "is this course for me?" section

---

## Status

- [x] Identified root cause
- [x] Fix purple gradient variables in globals.css
- [x] Verify both text elements are visible

## Completed

**Changes made to `app/globals.css`:**

Added purple gradient CSS variables to `:root` (lines 152-154):
```css
/* Custom: Purple gradient stops */
--gradient-purple-from: oklch(0.55 0.25 290);
--gradient-purple-to: oklch(0.45 0.28 270);
```

Added purple gradient CSS variables to `.dark` (lines 227-229):
```css
/* Custom: Purple gradient stops */
--gradient-purple-from: oklch(0.65 0.25 290);
--gradient-purple-to: oklch(0.55 0.28 270);
```

Both "crack editing™" and "for me?" texts are now visible with proper purple gradient styling.

---

## Additional Changes: Module Section Frame

**Changes made to `components/ui/sticky-scroll-reveal.tsx`:**

1. Added outer wrapper with contained frame:
   - `max-w-4xl` for constrained width
   - `rounded-2xl border border-border/50 bg-white/80 shadow-lg backdrop-blur-sm`

2. Reduced scroll area height:
   - From `h-[30rem]` to `h-[22rem]`

3. Smaller module card:
   - `h-48 w-64` on mobile, `h-56 w-72` on desktop (was `h-60 w-80`)
   - Added `shadow-md` for depth

4. Adjusted spacing:
   - Padding reduced from `p-10` to `p-6 lg:p-8`
   - Module item spacing reduced from `my-20` to `my-14`

Result: The frame now stands out against the ice-blue section background, and the scrollbar is more visible.
