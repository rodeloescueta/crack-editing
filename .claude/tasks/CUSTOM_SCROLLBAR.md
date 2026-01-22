# Custom Framer Motion Scrollbar

**Created:** 2026-01-22
**Updated:** 2026-01-22
**Status:** Completed
**Priority:** Medium

---

## Overview

Implement a custom scrollbar component using Framer Motion to replace the native browser scrollbar. This will provide a premium, on-brand scroll experience with smooth animations, glow effects, and interactive features.

---

## Goals

1. **Visual Enhancement** - Replace plain grey scrollbar with themed, animated version
2. **Smooth UX** - Spring physics for buttery smooth scroll tracking
3. **Interactivity** - Draggable thumb and clickable track
4. **Brand Consistency** - Match the ice-blue/cyan theme with glow effects
5. **Accessibility** - Maintain keyboard navigation and reduced motion support

---

## Design Specifications

### Visual Style
- **Track**: Transparent or subtle ice-blue tint
- **Thumb**: Gradient from `--primary` to `--accent` with glow
- **Width**: 8px default, 12px on hover
- **Position**: Fixed right side, full viewport height
- **Border Radius**: Fully rounded (pill shape)

### Behavior
- **Auto-hide**: Fade out after 2s of inactivity
- **Show on**: Scroll, hover near right edge, or drag
- **Spring Physics**: stiffness: 300, damping: 40
- **Glow Effect**: Subtle cyan glow, intensifies on hover/drag

### States
1. **Idle/Hidden**: Opacity 0, not interactable
2. **Visible**: Opacity 0.7, shows on scroll
3. **Hover**: Opacity 1, thumb expands, glow appears
4. **Dragging**: Opacity 1, stronger glow, cursor changes

---

## Technical Approach

### Component Structure
```
components/ui/custom-scrollbar.tsx
├── Track (fixed right side)
├── Thumb (motion.div with drag)
└── Glow overlay (optional)
```

### Key Framer Motion Features
- `useScroll()` - Track scroll position
- `useSpring()` - Smooth spring physics
- `useTransform()` - Map scroll to thumb position
- `useDragControls()` - Handle thumb dragging
- `AnimatePresence` - Fade in/out transitions

### Hide Native Scrollbar
```css
html {
  scrollbar-width: none; /* Firefox */
}
html::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
```

---

## Tasks

### Task 1: Create CustomScrollbar Component
- [ ] Create `components/ui/custom-scrollbar.tsx`
- [ ] Implement basic scroll tracking with `useScroll`
- [ ] Calculate thumb size based on viewport/document ratio
- [ ] Position thumb using `useTransform`
- [ ] Add spring physics with `useSpring`

### Task 2: Add Interactivity
- [ ] Implement drag-to-scroll functionality
- [ ] Add track click to jump to position
- [ ] Handle edge cases (very long pages, dynamic content)

### Task 3: Add Visual Effects
- [ ] Add gradient thumb styling
- [ ] Implement glow effect on hover/drag
- [ ] Add thumb expansion on hover
- [ ] Add auto-hide with fade animation

### Task 4: Integrate and Polish
- [ ] Hide native scrollbar in globals.css
- [ ] Add component to layout.tsx
- [ ] Add reduced motion support
- [ ] Test on mobile (may need to disable or adjust)
- [ ] Test across different page lengths

---

## Files to Modify

| File | Changes |
|------|---------|
| `components/ui/custom-scrollbar.tsx` | **Create** - New component |
| `app/globals.css` | Hide native scrollbar |
| `app/layout.tsx` | Add CustomScrollbar to layout |

---

## Considerations

### Performance
- Use `will-change: transform` for GPU acceleration
- Throttle resize listeners
- Use `useMotionValue` for non-rendered values

### Accessibility
- Respect `prefers-reduced-motion`
- Maintain scroll functionality via keyboard
- Consider showing native scrollbar for screen readers

### Mobile
- May disable custom scrollbar on mobile (touch scroll is different)
- Or show simplified version without drag

---

## Implementation Notes

### Component Features Implemented
- **Spring Physics**: Using `useSpring` with stiffness: 300, damping: 40 for smooth tracking
- **Thumb Sizing**: Dynamic calculation based on viewport/document ratio (min 40px, max 50%)
- **Drag-to-Scroll**: Implemented with Framer Motion's `drag` prop and custom handler
- **Track Click**: Click anywhere on track to jump to that scroll position
- **Visual States**:
  - Idle: 40% opacity, thin (8px), subtle glow
  - Active (scrolling/hover): 100% opacity, wider (12px), stronger glow, grip lines visible
- **Auto-deactivation**: Returns to subtle state after 1.5s of inactivity
- **Mobile**: Disabled on screens < 768px (uses native scrollbar)
- **Accessibility**: Respects `prefers-reduced-motion`

### Files Modified
- `components/ui/custom-scrollbar.tsx` - New component (262 lines)
- `app/globals.css` - Hide native scrollbar on desktop, keep on mobile
- `app/layout.tsx` - Added CustomScrollbar to layout

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2026-01-22 | Initial plan created | Claude |
| 2026-01-22 | Implementation complete: Custom Framer Motion scrollbar with spring physics, drag support, glow effects, and auto-hide behavior | Claude |
