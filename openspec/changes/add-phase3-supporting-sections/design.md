# Phase 3: Supporting Sections - Design

## Context
Building on Phases 1 and 2, we now add the supporting sections that establish credibility and drive conversions. These sections require new component patterns for stats, features, and accordions.

**Stakeholders**: Development team, client (Limitless.inc)
**Constraints**: Must maintain existing patterns, ensure accessibility for accordion, responsive at all breakpoints

## Goals / Non-Goals

### Goals
- Create "What You Get" features grid with purple-themed icons
- Build credibility with creators section and stats
- Present clear pricing with feature list
- Provide comprehensive FAQ with smooth accordion
- Complete site with proper footer

### Non-Goals
- Animated number counters (Phase 4)
- Infinite scrolling brand marquee (Phase 4)
- Payment processing integration
- Contact form functionality

## Decisions

### Decision 1: Feature Card Component
**What**: Create a simple centered feature card for "What You Get"
```typescript
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
```
**Why**:
- Simpler than module cards (no bullets, no number)
- Centered layout matches design
- Reusable for future feature displays

### Decision 2: Stat Card Component
**What**: Create stat card with large number, label, and attribution
```typescript
interface StatCardProps {
  value: string;     // "15+", "3B+", etc.
  label: string;     // "Years Digital Marketing"
  attribution?: string; // "AJ Kumar"
}
```
**Why**:
- Separates concerns from styling
- Enables future animation of numbers
- Consistent styling across stats grid

### Decision 3: Accordion Implementation
**What**: Use shadcn/ui Accordion component with custom styling
```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
```
**Why**:
- Built-in accessibility (ARIA, keyboard navigation)
- Smooth animations included
- Consistent with existing shadcn components

**Alternatives considered**:
- Custom accordion → More work, accessibility concerns
- Radix directly → shadcn already wraps this nicely

### Decision 4: Brand Logos Display
**What**: Static flexbox row with grayscale logos (no animation in Phase 3)
```tsx
<div className="flex flex-wrap justify-center gap-8">
  {brands.map(brand => <span key={brand}>{brand}</span>)}
</div>
```
**Why**:
- Simpler implementation for Phase 3
- Marquee animation deferred to Phase 4
- Text-based for now, can swap to images later

### Decision 5: Pricing Card Highlight
**What**: Single centered card with gradient border effect
```css
.pricing-card {
  background: linear-gradient(to bottom, card/80, card);
  border: 1px solid border/50;
}
```
**Why**:
- Single pricing tier = single card (no comparison needed)
- Gradient border adds visual interest
- Centered layout draws attention

### Decision 6: Footer Structure
**What**: Simple single-section footer with links, contact, and copyright
```tsx
<footer className="border-t border-border/30 py-12">
  <Container>
    <nav>{/* Links */}</nav>
    <div>{/* Contact */}</div>
    <div>{/* Copyright */}</div>
  </Container>
</footer>
```
**Why**:
- Minimal footer matches design
- No complex multi-column layout needed
- Accessible link structure

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Accordion accessibility | Use shadcn's built-in ARIA support |
| Stats text overflow | Test with longest values, add truncation if needed |
| Brand logos alignment | Use flexbox with proper gap and wrap |
| Pricing card prominence | Ensure sufficient contrast and spacing |

## Migration Plan
N/A - Building on existing foundation

## Open Questions
- [ ] Should brand logos be images or text? (Start with text, replace later)
- [ ] Should FAQ answers have rich formatting? (Start with plain text)
- [ ] Number counter animations? (Defer to Phase 4)
