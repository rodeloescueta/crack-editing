# Tasks: 2D Iceberg Scroll Reveal

## 1. Create Iceberg SVG/Component
- [ ] 1.1 Create `components/ui/iceberg-reveal.tsx`
- [ ] 1.2 Design iceberg shape (SVG or CSS)
  - Tip above water (white/light cyan)
  - Large body below water (darker blue with faceted look)
  - Water line divider

## 2. Scroll Animation
- [ ] 2.1 Use Framer Motion's `useScroll` and `useTransform` for scroll tracking
- [ ] 2.2 Animate container/clip-path to reveal underwater portion
- [ ] 2.3 Add smooth easing for natural feel

## 3. Labels
- [ ] 3.1 Add "VIRAL VIDEO" label above water (always visible)
- [ ] 3.2 Add underwater labels that fade in on scroll:
  - "ATTENTION SCIENCE"
  - "EMOTIONAL PACING"
  - "STORY STRUCTURE"
  - "SENSORY CUES"
  - "TASTE & DESIGN"
- [ ] 3.3 Position labels around iceberg

## 4. Integration
- [ ] 4.1 Add IcebergReveal to `problem-solution.tsx`
- [ ] 4.2 Style to fit section design

## 5. Testing
- [ ] 5.1 Test scroll reveal on desktop
- [ ] 5.2 Test on mobile viewport
- [ ] 5.3 Verify performance (no jank)

---

## Implementation Notes

### Using Framer Motion scroll
```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
})

const clipPath = useTransform(
  scrollYProgress,
  [0, 0.5],
  ["inset(60% 0 0 0)", "inset(0% 0 0 0)"]
)
```

### Iceberg Design Options
1. **Pure CSS**: Clip-path polygons for faceted look
2. **SVG**: Exported illustration with gradient fills
3. **Image**: Static PNG/WebP with CSS reveal

### Component Structure
```
components/ui/
└── iceberg-reveal.tsx  # Self-contained iceberg with scroll animation
```
