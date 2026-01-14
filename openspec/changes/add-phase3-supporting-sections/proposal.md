# Change: Phase 3 - Supporting Sections

## Why
With the core value proposition sections complete in Phase 2, we now need to build the supporting sections that establish credibility, present pricing, and answer common questions. These sections are essential for converting visitors who are already interested into paying customers.

## What Changes
- Create "What You Get" features grid (6 cards with purple icons)
- Build "Meet The Creators" section with bios, stats, and brand logos
- Implement Pricing section with pricing card and features
- Add FAQ accordion with 7 questions
- Create Footer with links and contact info
- Add reusable components for stats cards and feature cards

## Impact
- Affected specs: `landing-page` (modify existing capability)
- Affected code:
  - `components/sections/what-you-get.tsx` - Features grid
  - `components/sections/creators.tsx` - Meet the creators
  - `components/sections/pricing.tsx` - Pricing card
  - `components/sections/faq.tsx` - FAQ accordion
  - `components/sections/footer.tsx` - Site footer
  - `components/ui/feature-card.tsx` - Reusable feature card
  - `components/ui/stat-card.tsx` - Reusable stat card
  - `components/ui/accordion.tsx` - shadcn accordion (if not installed)
  - `app/page.tsx` - Add new sections

## Success Criteria
- All 5 sections render correctly with proper content
- FAQ accordion expands/collapses smoothly
- Stats display with proper formatting (15+, 3B+, etc.)
- Brand logos display in scrolling row or static grid
- Pricing card is centered and responsive
- Footer links are accessible and properly spaced
- Playwright MCP validates all sections at all breakpoints
- No horizontal scroll issues on any viewport
