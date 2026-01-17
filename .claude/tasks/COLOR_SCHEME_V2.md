# Task: Color Scheme V2 - Snowball-Inspired Light Blue Theme

**Created**: 2026-01-17
**Status**: Completed
**Priority**: High
**Completed**: 2026-01-17

## Objective

Redesign the color scheme inspired by [Snowball Agency](https://www.snowball.agency/) but using **light blue** as the accent color instead of purple.

## Design Inspiration from Snowball

### Key Design Elements Observed:

1. **Background Strategy**: Alternates between very dark (near-black) and very light sections
2. **Dark Sections**: `~#0d0d0d` / `~#121212` - almost pure black with subtle warmth
3. **Light Sections**: `~#f4f0f8` - very light lavender/gray (we'll use light blue tint)
4. **Accent Color**: Purple used for highlights, CTAs, and emphasized text
5. **Section Transitions**: Curved/wave dividers between sections
6. **Typography**: White text on dark, dark text on light, accent for emphasis
7. **Stats**: Bold accent-colored numbers with muted descriptive text

## Proposed Color Palette (Light Blue Version)

### Core Colors

| Role | Snowball (Purple) | Our Version (Light Blue) | OKLCH Value |
|------|-------------------|--------------------------|-------------|
| **Dark BG** | ~#0d0d0d | #0a0f14 (blue-black) | `oklch(0.08 0.02 240)` |
| **Light BG** | ~#f4f0f8 (lavender) | #f0f7fc (ice blue) | `oklch(0.97 0.015 220)` |
| **Accent** | Purple #8b5cf6 | Sky Blue #38bdf8 | `oklch(0.75 0.15 220)` |
| **Text on Dark** | White | White | `oklch(0.98 0.01 240)` |
| **Text on Light** | Dark gray | Dark blue-gray | `oklch(0.20 0.02 240)` |
| **Muted Text** | Gray | Blue-gray | `oklch(0.55 0.02 240)` |

### Keeping Existing
- **Primary CTA**: Orange `oklch(0.75 0.18 55)` - keep for CTAs
- **Purple accent**: Keep for secondary highlights if needed

## Implementation Plan

### Phase 1: Update CSS Variables in globals.css

**Dark mode base colors:**
```css
--background: oklch(0.08 0.02 240);        /* Near-black with blue tint */
--foreground: oklch(0.98 0.01 240);        /* White text */

--card: oklch(0.12 0.025 240);             /* Slightly lighter for cards */
--card-foreground: oklch(0.98 0.01 240);

--muted: oklch(0.15 0.02 240);
--muted-foreground: oklch(0.65 0.02 240);  /* Readable gray */

/* Light blue accent (replacing purple for secondary accent) */
--accent: oklch(0.75 0.15 220);            /* Sky blue */
--accent-foreground: oklch(0.15 0.02 240);

/* Section backgrounds */
--section-dark: oklch(0.06 0.015 240);     /* Darker than main bg */
--section-light: oklch(0.97 0.015 220);    /* Ice blue - LIGHT section */
```

### Phase 2: Update Hero Section Gradient

Change from current blue gradient to a near-black with subtle blue glow:
```tsx
// hero.tsx gradient
bg-gradient-to-b from-[oklch(0.08_0.02_240)] via-[oklch(0.10_0.025_240)] to-[oklch(0.12_0.03_240)]
```

### Phase 3: Create Light Section Styling

For sections that should have light backgrounds (like pricing oval):
- Background: Ice blue `oklch(0.97 0.015 220)`
- Text: Dark blue-gray `oklch(0.20 0.02 240)`
- Accent text: Sky blue `oklch(0.75 0.15 220)`

Update `pricing.tsx` to use proper light mode styling within the section.

### Phase 4: Update Section Dividers

Ensure wave/curve dividers transition smoothly between dark and light sections.

### Phase 5: Review Components

Files to check and potentially update:
- `components/sections/hero.tsx` - gradient background
- `components/sections/transformation-carousel.tsx` - section-light usage
- `components/sections/pricing.tsx` - light section styling
- `components/sections/iceberg.tsx` - check background
- `components/sections/problem-solution.tsx` - cards styling
- `components/ui/gradient-text.tsx` - may need light blue variant

## Visual Preview

**Before (Current)**:
- Medium slate blue background throughout
- Inconsistent section contrast

**After (Snowball-Inspired)**:
- Near-black sections with white text
- Ice blue light sections with dark text
- Sky blue accent for highlights
- Orange CTAs pop more against darker background
- High contrast, professional, modern look

## Files to Modify

1. `app/globals.css` - Core CSS variables
2. `components/sections/hero.tsx` - Hero gradient
3. `components/sections/pricing.tsx` - Light section text colors
4. `components/sections/transformation-carousel.tsx` - Section styling
5. Potentially: `components/ui/gradient-text.tsx` - Add blue variant

## Key Considerations

1. **Contrast**: Near-black bg means white text will be very readable
2. **Light sections need special handling**: Text must switch to dark
3. **Orange CTAs**: Will pop even more against dark background
4. **Grid overlay**: May need to adjust opacity for new darker background
5. **Section dividers**: Waves need to transition between dark ↔ light smoothly

## Success Criteria

- [x] Near-black background for main sections (like Snowball)
- [x] Ice blue light sections for contrast (like Snowball's lavender)
- [x] Sky blue accent color for highlights
- [x] Orange CTAs remain prominent
- [x] Smooth section transitions
- [x] All text readable with proper contrast

---

## Implementation Notes

### Files Modified:

1. **`app/globals.css`** - Updated all dark mode CSS variables with Snowball-inspired colors:
   - Near-black background: `oklch(0.08 0.02 240)`
   - Ice-blue light sections: `oklch(0.97 0.015 220)`
   - Sky blue accent: `oklch(0.75 0.15 220)`
   - Added `--light-section-text` and `--light-section-muted` variables

2. **`components/sections/hero.tsx`** - Updated gradient to near-black:
   ```tsx
   bg-gradient-to-b from-[oklch(0.08_0.02_240)] via-[oklch(0.10_0.025_240)] to-[oklch(0.12_0.03_240)]
   ```

3. **`components/sections/pricing.tsx`** - Fixed text colors for ice-blue oval:
   - Heading: `text-[oklch(0.20_0.02_240)]`
   - Body text: `text-[oklch(0.45_0.02_240)]`

4. **`components/sections/transformation-carousel.tsx`** - Fixed text colors for light section:
   - Heading: `text-[oklch(0.20_0.02_240)]`
   - Body text: `text-[oklch(0.45_0.02_240)]`

5. **`components/sections/course-modules.tsx`** - Fixed text colors for light section:
   - Heading: `text-[oklch(0.20_0.02_240)]`
   - Body text: `text-[oklch(0.45_0.02_240)]`

### Visual Testing Results:

- Hero section: Near-black with ripple effect, orange CTA pops nicely
- Transformation carousel: Ice-blue background with dark readable text
- Section dividers: Smooth curve transitions between dark↔light
- Problem/Solution: Dark section with iceberg visualization
- Course modules: Ice-blue with StickyScroll dark container inside
- Pricing: Ice-blue oval with dark card, readable text
- FAQ/Footer: Dark sections maintain consistency

### Screenshots saved to `.playwright-mcp/`:
- `v2-hero-section.png`
- `v2-transformation-section.png`
- `v2-problem-solution.png`
- `v2-course-modules.png`
- `v2-pricing-oval.png`
