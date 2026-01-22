# Change: Add Background Video Cards to Hero Section

## Why

The hero section currently uses static gradient backgrounds with floating particles. Adding multiple video cards playing in the background will showcase the video editing capabilities immediately, create a more dynamic first impression, and visually reinforce the "video editing course" message—all while keeping the main CTA content readable.

## What Changes

- Add a new `BackgroundVideoCard` component for displaying video elements with configurable positioning, opacity, and size
- Modify the hero section to include 4-5 scattered/floating video cards in the background layer (z-0)
- Implement responsive behavior: show 1-2 videos on mobile, 3-4 on tablet, 4-5 on desktop
- Add performance optimizations including lazy loading and Intersection Observer for pause/play
- Create a public directory for hero video assets

## Impact

- **Affected specs**: hero
- **Affected code**:
  - `components/sections/hero.tsx` (modify to add video cards layer)
  - `components/ui/background-video-card.tsx` (new component)
  - `public/videos/hero/` (new directory for video assets)
- **Performance**: Additional ~19MB of video assets (5 videos @ 3.7MB each); mitigated by lazy loading
- **Browser support**: Autoplay with muted video is supported in all modern browsers

## Assets Ready

Video assets have been added to `public/videos/hero/`:
- `hero-bg-1.mp4` (3.7MB)
- `hero-bg-2.mp4` (3.7MB)
- `hero-bg-3.mp4` (3.7MB)
- `hero-bg-4.mp4` (3.7MB)
- `hero-bg-5.mp4` (3.7MB)

Note: Currently using 2 source videos duplicated. Will be replaced with actual client videos later.
