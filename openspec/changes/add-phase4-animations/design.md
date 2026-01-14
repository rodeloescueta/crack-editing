# Phase 4: Animations & Polish (MVP) - Design

## Context
The landing page structure is complete. We're adding premium animation effects using **Aceternity UI** - a React component library with 70+ animated components built for Next.js and Tailwind CSS.

**Stakeholders**: Development team, client (Limitless.inc)
**Constraints**: Must maintain 60fps, support reduced motion preferences, not break existing responsive layouts

## Goals / Non-Goals

### Goals
- Add interactive background ripple effect to Hero section
- Add sparkle particles around Creators section logo
- Use Aceternity UI for consistent, battle-tested animations
- Support accessibility (prefers-reduced-motion)

### Non-Goals (Deferred to Phase 4.1)
- Scroll-triggered section animations
- Number counter animations
- Brand logo marquee
- Card hover effects
- Scroll progress indicator

## Decisions

### Decision 1: Use Aceternity UI Library
**What**: Install Aceternity UI components via shadcn CLI
```bash
npx shadcn@latest add @aceternity/background-ripple-effect
npx shadcn@latest add @aceternity/sparkles
```
**Why**:
- Built for Next.js 15 + Tailwind CSS v4
- shadcn CLI compatible (integrates with our existing setup)
- High-quality, production-ready animations
- 70+ components available for future enhancements
- Well-documented with code examples

**Alternatives considered**:
- Custom Framer Motion animations → More work, less polished
- GSAP → Larger bundle, more complex setup
- Pure CSS animations → Limited interactivity

### Decision 2: Background Ripple Effect on Hero
**What**: Add interactive grid background that ripples on hover
```tsx
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"

export function HeroSection() {
  return (
    <section className="relative min-h-screen">
      <BackgroundRippleEffect />
      <div className="relative z-10">
        {/* Hero content */}
      </div>
    </section>
  )
}
```
**Why**:
- Interactive element creates engagement
- Works well on hero sections per Aceternity docs
- Doesn't distract from main content
- Subtle animation on mouse hover

**CSS Required** (globals.css):
```css
@theme inline {
  --animate-cell-ripple: cell-ripple var(--duration, 200ms) ease-out none
  var(--delay, 0ms);

  @keyframes cell-ripple {
    0% { opacity: 0.4; }
    50% { opacity: 0.8; }
    100% { opacity: 0.4; }
  }
}
```

### Decision 3: Sparkles on Creators Logo
**What**: Add particle sparkles around the LIMITLESS.INC logo
```tsx
import { SparklesCore } from "@/components/ui/sparkles"

<div className="relative">
  <SparklesCore
    background="transparent"
    minSize={0.6}
    maxSize={1.4}
    particleDensity={100}
    particleColor="#8B5CF6" // Purple to match theme
  />
  {/* Logo circle */}
</div>
```
**Why**:
- Draws attention to the brand
- Purple color matches our accent theme
- Subtle continuous animation
- Creates "premium" feel

### Decision 4: Reduced Motion Support
**What**: Disable animations when user prefers reduced motion
```tsx
const prefersReducedMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Skip animation components if reduced motion preferred
{!prefersReducedMotion && <BackgroundRippleEffect />}
```
**Why**:
- Accessibility requirement
- Some users experience motion sickness
- Easy to implement with media query check

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Bundle size increase | Aceternity components are tree-shakeable |
| Animation jank on mobile | Test on real devices, simplify if needed |
| Breaking reduced-motion | Implement check early, test with preference enabled |
| Layout shift from effects | Position as absolute/fixed backgrounds |

## Performance Guidelines

1. **Position animations as backgrounds:**
   - Use `position: absolute` with `z-index: 0`
   - Content above with `z-index: 10`

2. **GPU acceleration:**
   - Aceternity components use transform/opacity
   - Animations run on compositor thread

3. **Mobile considerations:**
   - Test on mobile viewport
   - Consider reducing particle count on mobile

## Open Questions
- [x] Which Aceternity components to use? → Background Ripple + Sparkles
- [ ] Should sparkles be disabled on mobile for battery? (Test first)
- [ ] Exact sparkle density and size values (tune during implementation)
