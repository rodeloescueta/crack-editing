# Phase 1: Foundation & Layout - Design

## Context
This is the first implementation phase for the Crack Editing landing page. We need to establish patterns that will scale across all 10 sections while maintaining performance and code consistency.

**Stakeholders**: Development team, client (Limitless.inc)
**Constraints**: Must support mobile-first, 60fps animations, dark theme

## Goals / Non-Goals

### Goals
- Establish reusable layout components
- Set up dark theme with correct color palette
- Create Hero section as reference implementation
- Configure Framer Motion for future animations
- Ensure responsive design works at all breakpoints

### Non-Goals
- Full animations (Phase 4)
- Other sections beyond Hero (Phase 2-3)
- Backend integration
- Production deployment

## Decisions

### Decision 1: Color System with CSS Variables
**What**: Use CSS custom properties for theming in `globals.css`
**Why**:
- Consistent with shadcn/ui patterns
- Easy to adjust colors globally
- Supports potential future light mode

```css
--background: oklch(0.13 0.02 260);      /* Dark navy */
--foreground: oklch(0.98 0 0);            /* White text */
--primary: oklch(0.7 0.18 45);            /* Orange */
--accent: oklch(0.6 0.2 290);             /* Purple */
```

**Alternatives considered**:
- Tailwind config colors only → Less flexible for gradients
- CSS-in-JS → More overhead, not needed

### Decision 2: Component Structure
**What**: Separate layout primitives from section components
```
components/
├── layout/          # Reusable layout primitives
│   ├── container.tsx
│   └── section.tsx
├── sections/        # Page sections (Hero, FAQ, etc.)
│   └── hero.tsx
└── ui/              # shadcn + custom UI components
    └── gradient-text.tsx
```
**Why**: Clear separation of concerns, easier testing, reusable across sections

### Decision 3: Animation Architecture
**What**: Centralize Framer Motion presets in `lib/animations.ts`
```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};
```
**Why**:
- Consistent animations across sections
- Easy to tune globally
- Reduces duplication

### Decision 4: Responsive Strategy
**What**: Mobile-first with Tailwind breakpoints
- Base styles = mobile (320px+)
- `sm:` = 640px+
- `md:` = 768px+ (tablet)
- `lg:` = 1024px+ (desktop)
- `xl:` = 1280px+

**Why**: Aligns with Tailwind defaults, mobile-first ensures core experience works everywhere

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Animation performance on mobile | Use `will-change` sparingly, test on real devices |
| Color contrast issues | Test with accessibility tools after implementation |
| Layout shifts during load | Use explicit dimensions, avoid layout-affecting animations |

## Migration Plan
N/A - Greenfield implementation

## Open Questions
- [ ] Should we add a scroll progress indicator? (Defer to Phase 4)
- [ ] Exact font sizes for headings? (Use design screenshots as reference)
