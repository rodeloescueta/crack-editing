# Change: Phase 1 - Foundation & Layout

## Why
The project needs a solid foundation before building out the 10 landing page sections. This phase establishes the dark theme, typography system, reusable layout components, and the Hero section as the entry point for the "highly addictive" scroll experience.

## What Changes
- Set up global styles with dark theme color variables (navy, orange, purple)
- Create base layout components (Container, Section, AnimatedSection)
- Install and configure Framer Motion for scroll animations
- Implement Hero section with static content (animations in Phase 4)
- Establish responsive breakpoints and mobile-first patterns
- Create reusable text components with gradient styling

## Impact
- Affected specs: `landing-page` (new capability)
- Affected code:
  - `app/globals.css` - Theme variables
  - `app/page.tsx` - Hero section
  - `app/layout.tsx` - Base layout
  - `components/sections/hero.tsx` - Hero component
  - `components/ui/` - New layout primitives
  - `lib/animations.ts` - Framer Motion utilities

## Success Criteria
- Dark theme displays correctly across all viewports
- Hero section renders with proper typography and CTAs
- Responsive layout works at 320px, 768px, and 1440px
- Playwright MCP validates Hero section at all breakpoints
- No horizontal scroll issues on any viewport
