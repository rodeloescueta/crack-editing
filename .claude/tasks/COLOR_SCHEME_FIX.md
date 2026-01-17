# Task: Fix Color Scheme (Background & Text Colors)

**Created**: 2026-01-17
**Status**: Completed
**Priority**: High

## Objective

Update the app's color scheme to use a **lighter blue** background instead of the current very dark navy. The client wants a more inviting, lighter feel while maintaining the professional look.

## Reference

- Target Screenshot: `/home/rodelo-escueta/Pictures/Screenshots/Screenshot from 2026-01-17 20-57-44.png`
- Current App Screenshot: `.playwright-mcp/current-app-bg.png`

## Color Comparison

| Element | Current | Target |
|---------|---------|--------|
| Main BG | Very dark navy `oklch(0.12 0.03 265)` ~#0d1520 | Lighter slate blue ~`oklch(0.22 0.04 250)` ~#1a3a5a |
| Card BG | `oklch(0.16 0.03 265)` | Slightly lighter than new BG |
| Text | White/light gray (good) | Keep white for contrast |

## Current State Analysis

Current dark mode values in `globals.css`:
```css
--background: oklch(0.12 0.03 265);  /* Too dark */
--card: oklch(0.16 0.03 265);
--section-dark: oklch(0.10 0.025 265);
--section-light: oklch(0.92 0.02 260);  /* Wrong - too light for dark mode */
```

## Implementation Plan

### Phase 1: Update Core Background Colors
- [ ] Update `--background` to lighter blue (~`oklch(0.22 0.04 250)` or similar)
- [ ] Update `--card` to be slightly lighter/different from new background
- [ ] Update `--popover` to match card style
- [ ] Fix `--section-dark` for alternating sections (slightly darker than main)
- [ ] Fix `--section-light` for alternating sections (slightly lighter than main, NOT white)

### Phase 2: Ensure Text Readability
- [ ] Verify `--foreground` has sufficient contrast on lighter background
- [ ] Check `--muted-foreground` readability
- [ ] Test orange/accent colors still pop against lighter blue

### Phase 3: Component & Section Audit
- [ ] Hero section - check grid overlay visibility
- [ ] Cards - ensure they stand out from background
- [ ] Section dividers - adjust if needed
- [ ] Borders - may need adjustment for lighter theme

### Phase 4: Testing
- [ ] Visual check all 10 sections
- [ ] Contrast ratio verification (WCAG AA)
- [ ] Mobile viewport check

## Files to Modify

1. `app/globals.css` - Main CSS variables (primary file)
2. Component files only if they have hardcoded colors

## Target Color Palette (Estimated)

```css
/* Lighter blue theme */
--background: oklch(0.22 0.04 250);     /* Main bg - lighter slate blue */
--card: oklch(0.26 0.04 250);            /* Cards - slightly lighter */
--section-dark: oklch(0.18 0.04 250);    /* Darker sections */
--section-light: oklch(0.28 0.035 250);  /* Lighter sections */
```

Note: These values are estimates - will need fine-tuning based on visual testing.

## Key Considerations

1. **Contrast**: Lighter background means we need to ensure white text still readable
2. **Grid overlay**: The decorative grid pattern may need opacity adjustment
3. **Orange CTAs**: Should still stand out prominently
4. **Cards**: Need visual separation from background

---

## Progress Log

### 2026-01-17 - Implementation Complete

**Changes Made:**

1. **globals.css** - Updated all dark mode CSS variables:
   - `--background`: `oklch(0.12 0.03 265)` → `oklch(0.28 0.05 250)` (lighter slate blue)
   - `--card`: `oklch(0.16 0.03 265)` → `oklch(0.32 0.045 250)`
   - `--section-dark`: `oklch(0.10 0.025 265)` → `oklch(0.24 0.045 250)`
   - `--section-light`: `oklch(0.92 0.02 260)` → `oklch(0.34 0.04 250)` (was incorrectly very light)
   - Updated muted, secondary, sidebar, border colors proportionally

2. **hero.tsx** - Updated hardcoded gradient:
   - Changed from `oklch(0.12_0.04_250)` range to `oklch(0.28_0.05_250)` range

3. **transformation-carousel.tsx** - Replaced hardcoded colors with CSS variables:
   - `text-[oklch(0.25_0.02_260)]` → `text-foreground`
   - `text-[oklch(0.45_0.02_260)]` → `text-muted-foreground`
   - `bg-[oklch(0.18_0.03_265)]` → `bg-card`

4. **pricing.tsx** - Replaced hardcoded colors with CSS variables:
   - Same pattern as above for text colors

5. **sparkles.tsx** - Changed fallback background from `#0d47a1` to `transparent`

**Visual Testing:**
- Hero section ✓
- Transformation carousel ✓
- Iceberg/Problem-Solution section ✓
- Course modules section ✓
- Pricing section ✓
- FAQ and Footer sections ✓

All sections display correctly with the lighter blue background, text is readable, and CTAs remain prominent.
