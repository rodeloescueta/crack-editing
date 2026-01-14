# Change: Phase 2 - Core Sections

## Why
With the foundation established in Phase 1, we now need to build the core content sections that demonstrate the value proposition of the crack editing course. These sections are critical for converting visitors by showing real transformations, addressing pain points, and showcasing the curriculum.

## What Changes
- Create Before/After Transformation Carousel with creator success stories
- Build Problem vs Solution comparison cards
- Implement Course Modules grid (6 modules, 3x2 layout)
- Add "Is This Course For Me" qualifier section
- Create reusable card components for consistency

## Impact
- Affected specs: `landing-page` (modify existing capability)
- Affected code:
  - `components/sections/transformation-carousel.tsx` - Before/After carousel
  - `components/sections/problem-solution.tsx` - Comparison cards
  - `components/sections/course-modules.tsx` - Module grid
  - `components/sections/for-me.tsx` - Qualifier section
  - `components/ui/comparison-card.tsx` - Reusable comparison card
  - `components/ui/module-card.tsx` - Reusable module card
  - `app/page.tsx` - Add new sections

## Success Criteria
- All 4 sections render correctly with proper content
- Carousel navigation works (prev/next or dots)
- Cards display with correct styling (red X, green check, purple icons)
- Grid layouts adapt responsively (3 cols → 2 cols → 1 col)
- Playwright MCP validates all sections at all breakpoints
- No horizontal scroll issues on any viewport
