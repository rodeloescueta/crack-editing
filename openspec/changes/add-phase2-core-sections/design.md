# Phase 2: Core Sections - Design

## Context
With the foundation established in Phase 1, we now build the core content sections that demonstrate the course's value proposition. These sections are conversion-critical and need to be visually compelling while maintaining code consistency.

**Stakeholders**: Development team, client (Limitless.inc)
**Constraints**: Must use Phase 1 patterns, maintain 60fps animations, responsive at all breakpoints

## Goals / Non-Goals

### Goals
- Create reusable card components for consistent styling
- Build 4 major content sections (Transformation, Problem/Solution, Modules, For Me)
- Implement carousel with navigation for transformations
- Ensure responsive grid layouts (3 → 2 → 1 columns)

### Non-Goals
- Full scroll animations (Phase 4)
- Video playback implementation (placeholder only)
- Backend data integration
- A/B testing variants

## Decisions

### Decision 1: Reusable Card Component Architecture
**What**: Create base card components that can be composed for different use cases
```
components/ui/
├── comparison-card.tsx    # Red X / Green check cards
├── module-card.tsx        # Course module cards
└── video-card.tsx         # Before/After video placeholder
```
**Why**:
- Reduces duplication across sections
- Ensures consistent styling and spacing
- Easier to maintain and update

**Alternatives considered**:
- Single generic card → Too inflexible for varied content
- Inline styling per section → More duplication, harder to maintain

### Decision 2: Carousel Implementation
**What**: Build custom carousel with Framer Motion for smooth transitions
```typescript
// State-based carousel with AnimatePresence
const [currentIndex, setCurrentIndex] = useState(0);
<AnimatePresence mode="wait">
  <motion.div key={currentIndex}>
    {transformations[currentIndex]}
  </motion.div>
</AnimatePresence>
```
**Why**:
- Full control over animations and transitions
- Integrates with existing Framer Motion setup
- No additional dependencies needed

**Alternatives considered**:
- Embla Carousel → Extra dependency, less control
- CSS scroll-snap → Limited animation options

### Decision 3: Grid Layout Strategy
**What**: Use CSS Grid with Tailwind for responsive module/card grids
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {modules.map(module => <ModuleCard key={module.id} {...module} />)}
</div>
```
**Why**:
- Native CSS, no JS calculations
- Clean responsive breakpoints
- Consistent gaps and alignment

### Decision 4: Icon System for Cards
**What**: Use Lucide React icons with custom styling for module/comparison cards
- Red X icon: `<X className="text-red-500" />`
- Green check: `<Check className="text-green-500" />`
- Module icons: Custom purple/orange colored icons

**Why**:
- Consistent with shadcn/ui ecosystem
- Tree-shakeable, only imports used icons
- Easy to customize colors

### Decision 5: Data Structure for Content
**What**: Define TypeScript interfaces for section content
```typescript
interface Transformation {
  id: string;
  creatorName: string;
  handle: string;
  before: { views: string; label: string; };
  after: { views: string; label: string; };
  growthStats: string;
}

interface Module {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
}
```
**Why**:
- Type safety for content
- Easy to update or fetch from CMS later
- Self-documenting code

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Carousel performance on mobile | Use `will-change`, limit visible items, test on real devices |
| Content overflow in cards | Use truncation, test with longest content |
| Grid layout shifts | Set explicit min-heights, use aspect-ratio where appropriate |
| Icon bundle size | Import only needed icons, verify tree-shaking works |

## Migration Plan
N/A - Building on Phase 1 foundation, no breaking changes

## Open Questions
- [ ] Should carousel auto-play? (Recommend: No, let user control)
- [ ] Exact transition timing for carousel? (Start with 0.3s, adjust after testing)
- [ ] Should module cards link anywhere? (Defer - currently static display)
