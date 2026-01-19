<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Goal**: Replicate the "Crack Editing" course landing page (originally built with Lovable) using Next.js + shadcn/ui + Framer Motion, with enhanced animations and interactivity to create a "next level" experience.

### Design Theme
- **Primary Background**: Dark blue/navy
- **Accent Colors**: Orange (CTAs, highlights) + Purple (secondary accents)
- **Key Goal**: Make the scroll experience "highly addictive" with smooth animations

### Animation Inspiration
- **Snowball Agency** (https://www.snowball.agency/) - Infinite marquee, animated stats counters, bold typography
- **Apple iPhone Air** (https://www.apple.com/iphone-air/) - Parallax scrolling, sticky nav, tab galleries
- **Key Effects**: Parallax, scroll-triggered reveals, text split animations, number counters

### Critical Requirements
- **Mobile Responsiveness**: App MUST be fully responsive (mobile-first approach)
- **Testing**: Use Playwright MCP to validate each section after implementation
- **Breakpoints**: Mobile (320-639px), Tablet (640-1023px), Desktop (1024px+)

### Page Sections (10 total)
1. Hero - Main headline + CTAs + trust badges
2. Before/After Carousel - Creator transformation comparisons
3. Problem vs Solution - Two-column comparison cards
4. Course Modules - 6 module cards grid
5. Is This For Me - Qualifier/disqualifier cards
6. What You Get - 6 feature cards
7. Meet The Creators - Limitless.inc bio + stats
8. Pricing - $297 pricing card
9. FAQ - 7-question accordion
10. Footer - Links + contact

### Reference
- Screenshots: `/temp/` directory
- Main task documentation: `.claude/tasks/MAIN_PROJECT.md`

---

# Plan & Review

### Before starting work

- Write a plan to .claude/tasks/TASK_NAME.md.
- The plan should be a detailed implementation plan and the reasoning behind them, as well as tasks broken down.
- Don't over plan it, always think MVP.
- Once you write the plan, firstly ask me to review it. Do not continue until I approve the plan.

### While implementing

- You should update the plan as you work.
- After you complete tasks in the plan, you should update and append detailed descriptions of the changes you made, so following tasks can be easily hand over to other engineers.


## Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Next.js 16** with App Router and React Server Components
- **React 19** with TypeScript (strict mode)
- **Tailwind CSS 4** with PostCSS
- **shadcn/ui** (radix-vega style) with Base UI and Radix primitives
- **Lucide React** for icons
- **Framer Motion** for scroll-based animations and interactions
- **Playwright MCP** for visual/functional testing across viewports

## Architecture

### Directory Structure

- `app/` - Next.js App Router pages and layouts
- `components/ui/` - shadcn UI components (button, card, input, select, combobox, alert-dialog, etc.)
- `components/` - Application-specific components
- `lib/utils.ts` - Utility functions including `cn()` for class merging

### Import Aliases

All imports use the `@/` prefix for absolute paths:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

### Component Patterns

- **Compound components**: Cards use CardHeader, CardContent, CardFooter subcomponents
- **Variants via CVA**: Components accept `variant` and `size` props defined with class-variance-authority
- **Data attributes**: Components use `data-slot`, `data-size`, `data-variant` for styling hooks
- **Client components**: Add `"use client"` directive for interactive components

### Theming

CSS variables in `globals.css` use oklch color format with light/dark mode support. Key semantic colors: `--primary`, `--secondary`, `--accent`, `--destructive`, `--muted`.

## Adding shadcn Components

```bash
npx shadcn@latest add [component-name]
```

Components are configured in `components.json` with RSC enabled and path aliases set.

---

## Memory

### Deployment Preferences
- **Do NOT automatically push to git or deploy to Vercel** - User wants to review changes first or batch features before shipping
- Always wait for explicit user instruction before running `git push` or `npx vercel --prod`
