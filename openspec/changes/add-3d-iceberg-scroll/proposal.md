# Change: Add 2D Iceberg Scroll Reveal Effect

## Why
The "Problem vs Solution" section uses the metaphor "most viral videos look simple. the real work happens underneath." This is a perfect opportunity for an **iceberg visualization** - showing only the tip initially, then revealing the massive underwater complexity on scroll.

## What Changes (Simplified 2D Approach)
- Create a **2D SVG/CSS iceberg** illustration with scroll-triggered reveal
- Use **Framer Motion** for scroll animations (already in project)
- No new heavy dependencies (no Three.js)
- Iceberg reveals on scroll showing hidden elements:
  - Above water: "VIRAL VIDEO" (what people see)
  - Below water: Attention Science, Emotional Pacing, Story Structure, Sensory Cues, Taste & Design

## Approach Options

### Option A: CSS Clip-path + Scroll Animation
- Use a static iceberg image/SVG
- Animate `clip-path` or container height based on scroll
- Labels fade in as sections reveal
- **Simplest, best performance**

### Option B: SVG with Parallax Layers
- Layered SVG elements (water, iceberg top, iceberg bottom, labels)
- Different scroll speeds for parallax depth effect
- More visual interest than Option A

### Option C: Mask/Reveal Animation
- Iceberg always visible but underwater portion masked
- Scroll removes the mask to reveal underwater
- Water line stays fixed as visual anchor

## Impact
- **No new dependencies** - uses existing Framer Motion
- **Affected components**: `components/sections/problem-solution.tsx`
- **New components**: `components/ui/iceberg-reveal.tsx`
- **Lightweight**: Just CSS/SVG, no WebGL overhead
- **Mobile-friendly**: Works on all devices

## Success Criteria
- Iceberg tip visible on initial section view
- Smooth scroll-triggered reveal of underwater portion
- Labels appear as sections reveal
- Fast load, no heavy bundle impact
- Works on all devices
