# Change: Phase 4 - Animations & Polish (MVP)

## Why
With all 10 sections now complete, the landing page needs visual polish to create an engaging experience. Phase 4 introduces premium animation effects using **Aceternity UI** components - starting with two key effects before adding more animations later.

## What Changes
- **Hero Section**: Add Background Ripple Effect (interactive grid that ripples on hover/click)
- **Creators Section**: Add Sparkles Effect around the LIMITLESS.INC logo

### Deferred to Phase 4.1
- Scroll-triggered animations for all sections
- Animated number counters for stats
- Infinite scrolling marquee for brand logos
- Enhanced hover effects on cards and buttons
- Scroll progress indicator

## Impact
- Affected specs: `landing-page` (enhance existing capability)
- Affected code:
  - `components/ui/background-ripple-effect.tsx` - Aceternity UI component (via CLI)
  - `components/ui/sparkles.tsx` - Aceternity UI component (via CLI)
  - `components/sections/hero.tsx` - Add ripple effect background
  - `components/sections/creators.tsx` - Add sparkles around logo
  - `app/globals.css` - Add Aceternity animation keyframes

## Success Criteria
- Hero section has interactive ripple effect on background
- Ripple animates on mouse hover over grid cells
- Creators section logo has sparkle particle effect
- Sparkles animate continuously with subtle movement
- Effects run smoothly at 60fps
- Effects respect prefers-reduced-motion preference
- Playwright MCP validates layout is not broken
