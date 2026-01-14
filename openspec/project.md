# Project Context

## Purpose
Replicate the "Crack Editing" course landing page (originally built with Lovable) using Next.js + shadcn/ui + Framer Motion, with enhanced animations and interactivity to create a "next level" scroll experience.

## Tech Stack
- **Next.js 16** with App Router and React Server Components
- **React 19** with TypeScript (strict mode)
- **Tailwind CSS 4** with PostCSS
- **shadcn/ui** (radix-vega style) with Base UI and Radix primitives
- **Framer Motion** for scroll-based animations and interactions
- **Lucide React** for icons
- **Playwright MCP** for visual/functional testing across viewports

## Project Conventions

### Code Style
- Use TypeScript strict mode
- Prefer functional components with hooks
- Use `"use client"` directive for interactive components
- Import aliases use `@/` prefix for absolute paths
- Components use compound pattern (e.g., Card, CardHeader, CardContent)

### Architecture Patterns
- App Router with RSC (React Server Components)
- Client components only when needed for interactivity
- shadcn/ui components in `components/ui/`
- Application components in `components/`
- Utilities in `lib/utils.ts`

### Testing Strategy
- Use Playwright MCP for visual/functional testing
- Test at 3 viewports: Mobile (375x667), Tablet (768x1024), Desktop (1440x900)
- Validate each section after implementation

### Git Workflow
- Feature branches for each phase
- Descriptive commit messages with co-author attribution
- PR-based workflow with review

## Domain Context
- **Target**: Video editing course landing page
- **Audience**: Content creators wanting to improve video editing skills
- **Brand**: "Crack Editing" by Limitless.inc
- **Theme**: Dark blue/navy background, orange CTAs, purple accents
- **Key Goal**: Make scroll experience "highly addictive"

## Important Constraints
- Mobile-first responsive design (320px - 1440px+)
- Performance: 60fps animations, no jank
- Accessibility: Minimum 44px touch targets on mobile
- SEO: Server-rendered where possible

## External Dependencies
- Unsplash for placeholder images (replace before production)
- No external APIs in Phase 1

## Animation Inspiration
- **Snowball Agency** - Infinite marquee, animated stats counters
- **Apple iPhone Air** - Parallax scrolling, sticky nav, tab galleries
