# Design: 2D Iceberg Scroll Reveal

## Context
The Problem/Solution section uses the iceberg metaphor: "most viral videos look simple. the real work happens underneath." A 2D scroll-triggered iceberg reveal will create this effect without heavy 3D dependencies.

## Goals / Non-Goals

### Goals
- Create a scroll-triggered iceberg reveal effect
- Keep it lightweight (no new dependencies)
- Smooth animation using existing Framer Motion
- Works on all devices

### Non-Goals
- 3D rendering or WebGL
- Complex particle effects
- User interaction beyond scroll

## Decisions

### Decision 1: Pure CSS/SVG over 3D
**Choice**: Use CSS/SVG with Framer Motion instead of Three.js

**Why**:
- No new dependencies (Framer Motion already in project)
- Much smaller bundle size
- Better mobile performance
- Easier to maintain
- Simpler implementation

### Decision 2: Clip-path reveal animation
**Choice**: Animate `clip-path` to reveal underwater portion

**Why**:
- GPU-accelerated, smooth performance
- Simple to implement with Framer Motion's `useTransform`
- Natural "unveiling" effect

### Decision 3: Stylized SVG iceberg
**Choice**: Create a stylized low-poly SVG iceberg (not realistic)

**Why**:
- Matches reference design aesthetic
- Scales perfectly at any size
- Small file size
- Easy to style with CSS

## Visual Design

```
     "VIRAL VIDEO"
         ▲
        /|\        <- Light cyan/white tip (above water)
       / | \
══════════════════ <- Water line
      /     \
     /       \     <- Dark blue body (below water)
    /    ◆    \       with faceted faces
   /   ◆   ◆   \
  /  ◆       ◆  \
 /________________\
        ▼
  "TASTE & DESIGN"
```

Labels positioned around the underwater portion:
- Left side: ATTENTION SCIENCE, STORY STRUCTURE
- Right side: EMOTIONAL PACING, SENSORY CUES
- Bottom: TASTE & DESIGN

## Animation Flow

1. **Initial state**: Only iceberg tip visible above water line
2. **On scroll**: Container expands downward, revealing underwater
3. **Labels fade in**: Each label appears as its section is revealed
4. **Final state**: Full iceberg visible with all labels

## Component API

```tsx
<IcebergReveal
  className="my-8"
  scrollOffset={["start end", "end start"]}
/>
```

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Less impressive than 3D | Focus on smooth animation and good design |
| SVG complexity | Keep geometry simple, low-poly style |

## Open Questions
- [ ] Should water have subtle wave animation?
- [ ] Exact scroll distance for full reveal?
