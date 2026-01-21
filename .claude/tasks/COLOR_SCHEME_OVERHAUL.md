# Task: Color Scheme Overhaul

**Status**: Planning
**Created**: 2026-01-21

---

## Overview

Transform the current orange/navy color scheme to a monochromatic blue theme with dual-theme support via URL query parameter.

---

## Client Requirements

### 1. Primary Color Change
- **Remove**: All orange colors
- **Replace with**: Blue to light-blue monochromatic palette
- **Hero section**: Change from light to **dark theme** (match iceberg bg: `#0a1628`)
- **Keep as-is**: Iceberg section (problem-solution)

### 2. Button Styling
- Add **glass morphism effect** to all CTA buttons:
  - Semi-transparent background
  - Backdrop blur
  - Subtle inner glow/shine

### 3. Dual Theme Support
- **Default**: Light-blue/cyan primary (`--primary: sky-500`)
- **Alternative**: Fuchsia/magenta primary (`--primary: fuchsia-500`)
- **Activation**: URL query param `?theme=purple`
- **No persistence**: Theme only active while query param present

---

## Technical Design

### Color Palette

**Blue Theme (Default)**
```css
--primary: oklch(0.65 0.15 220);        /* ~#0ea5e9 sky-500 */
--primary-light: oklch(0.75 0.12 220);  /* ~#38bdf8 sky-400 */
--primary-dark: oklch(0.55 0.18 220);   /* ~#0284c7 sky-600 */
--primary-glow: rgba(14, 165, 233, 0.4);
```

**Fuchsia Theme (Alternative)**
```css
--primary: oklch(0.65 0.25 320);        /* ~#d946ef fuchsia-500 */
--primary-light: oklch(0.75 0.22 320);  /* ~#e879f9 fuchsia-400 */
--primary-dark: oklch(0.55 0.28 320);   /* ~#c026d3 fuchsia-600 */
--primary-glow: rgba(217, 70, 239, 0.4);
```

### Theme Provider Architecture

```
app/
├── layout.tsx          # Wrap children with ThemeProvider
└── providers/
    └── theme-provider.tsx  # Read URL param, apply theme class

lib/
└── theme.ts            # Theme constants and utilities
```

### Glass Morphism Button

```css
.btn-glass {
  background: rgba(14, 165, 233, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(14, 165, 233, 0.3);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 20px var(--primary-glow);
}
```

---

## Files to Modify

### Core Files (High Priority)
| File | Changes |
|------|---------|
| `app/globals.css` | Update CSS variables, add theme classes |
| `app/layout.tsx` | Add ThemeProvider wrapper |
| `components/ui/button.tsx` | Add glass morphism variant |

### Section Files
| File | Changes |
|------|---------|
| `components/sections/hero.tsx` | Dark background, blue glows/particles |
| `components/sections/pricing.tsx` | Blue badge, shadow, gradient |
| `components/sections/faq.tsx` | Blue lamp effect |
| `components/sections/course-modules.tsx` | Update module 2 & 5 gradients |
| `components/sections/transformation-carousel.tsx` | Blue ring/shadows |
| `components/sections/footer.tsx` | Blue primary colors |
| `components/sections/creators.tsx` | Blue stat card styling |
| `components/sections/for-me.tsx` | Blue text highlights |

### UI Components
| File | Changes |
|------|---------|
| `components/ui/gradient-text.tsx` | Update orange variant to blue |
| `components/ui/stat-card.tsx` | Blue border/text |
| `components/ui/badge.tsx` | Blue default variant |
| `components/ui/accordion.tsx` | Blue icon color |
| `components/ui/hero-highlight.tsx` | Blue gradient |
| `components/ui/sticky-scroll-reveal.tsx` | Blue gradient |

### New Files to Create
| File | Purpose |
|------|---------|
| `app/providers/theme-provider.tsx` | Theme context and URL param reading |
| `lib/theme.ts` | Theme constants |

### Files to Keep As-Is (DO NOT MODIFY)
- `components/ui/iceberg-reveal-c.tsx`
- `components/sections/problem-solution.tsx` (iceberg section wrapper)

---

## Implementation Tasks

### Phase 1: Foundation
- [ ] Create theme provider (`app/providers/theme-provider.tsx`)
- [ ] Create theme utilities (`lib/theme.ts`)
- [ ] Update `globals.css` with new CSS variables and theme classes
- [ ] Update `layout.tsx` to wrap with ThemeProvider

### Phase 2: Button Glass Effect
- [ ] Update `button.tsx` with glass morphism styling
- [ ] Test button appearance on both light and dark backgrounds

### Phase 3: Hero Section Dark Theme
- [ ] Change hero background gradient to dark (`#0a1628`)
- [ ] Update hero text colors for dark background
- [ ] Update badge glow animation (orange → blue)
- [ ] Update floating particles (orange → blue)
- [ ] Update eye emoji glow (orange → blue)
- [ ] Update gradient text colors

### Phase 4: Section Color Migration
- [ ] Update pricing section (badge, shadow, button gradient)
- [ ] Update FAQ section (lamp effect)
- [ ] Update course modules (module 2 & 5 gradients)
- [ ] Update transformation carousel (ring, shadows)
- [ ] Update creators section (stat cards)
- [ ] Update footer (primary colors)
- [ ] Update for-me section (text highlights)

### Phase 5: UI Component Updates
- [ ] Update gradient-text.tsx (orange variant → blue)
- [ ] Update stat-card.tsx (primary border/text)
- [ ] Update badge.tsx (default variant)
- [ ] Update accordion.tsx (icon color)
- [ ] Update hero-highlight.tsx (gradient)
- [ ] Update sticky-scroll-reveal.tsx (gradient)

### Phase 6: Testing
- [ ] Test default blue theme on all sections
- [ ] Test purple theme with `?theme=purple` param
- [ ] Test mobile responsiveness (320px, 640px, 1024px)
- [ ] Test button glass effect on various backgrounds
- [ ] Verify iceberg section unchanged

---

## Color Reference - Before/After

| Element | Before (Orange) | After (Blue) |
|---------|----------------|--------------|
| Primary | `oklch(0.65 0.18 55)` | `oklch(0.65 0.15 220)` |
| Hex primary | `#f97316` | `#0ea5e9` |
| Shadow rgba | `rgba(249,115,22,...)` | `rgba(14,165,233,...)` |
| Glow | `rgba(234,88,12,...)` | `rgba(14,165,233,...)` |
| Gradient stops | `#F97316, #EAB308` | `#0ea5e9, #38bdf8` |

---

## Acceptance Criteria

1. ✅ No orange colors visible anywhere on the site
2. ✅ Hero section has dark background matching iceberg section
3. ✅ All CTA buttons have glass morphism effect
4. ✅ Default theme uses blue/cyan primary color
5. ✅ Adding `?theme=purple` changes primary to fuchsia
6. ✅ Iceberg section unchanged
7. ✅ Site remains fully responsive on mobile
8. ✅ No accessibility issues (contrast ratios maintained)

---

## Notes

- The theme class will be applied to a wrapper div, not the html/body to avoid SSR hydration issues
- Use Suspense boundary around ThemeProvider for proper streaming
- All inline orange hex codes must be converted to CSS variables for theme support
