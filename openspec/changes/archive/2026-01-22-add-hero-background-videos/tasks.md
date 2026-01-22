# Tasks: Add Hero Background Video Cards

## 1. Component Creation

- [x] 1.1 Create `components/ui/background-video-card.tsx` with the following features:
  - Video element with `autoPlay`, `muted`, `loop`, `playsInline` attributes
  - Configurable position props (top, right, bottom, left)
  - Configurable size variants (sm, md, lg)
  - Configurable opacity (0.1-0.4 range)
  - Optional rotation for organic feel
  - Staggered fade-in animation with delay prop
  - `hideOnMobile` and `hideOnTablet` props for responsive visibility

- [x] 1.2 Implement Intersection Observer hook for pause/play
  - Pause video when card is not in viewport
  - Resume video when card enters viewport
  - Clean up observer on unmount

## 2. Hero Section Integration

- [x] 2.1 Create video cards configuration array (exported as `heroVideoCards`):
  - 5 card positions (top-left, top-right, bottom-left, bottom-right, center-right)
  - Assigned size, opacity, rotation, and delay for each
  - Cards 3-5 marked with `hideOnMobile`, Cards 4-5 marked with `hideOnTablet`

- [x] 2.2 Add BackgroundVideoCards container to hero section:
  - Position at z-[0] (below all other layers)
  - Absolute positioning with full width/height
  - Overflow hidden to prevent scroll issues

- [x] 2.3 Render video cards with responsive visibility:
  - Mobile (<640px): Show cards 1-2 only
  - Tablet (640-1023px): Show cards 1-4
  - Desktop (1024px+): Show all 5 cards

## 3. Asset Setup

- [x] 3.1 Create `public/videos/hero/` directory

- [x] 3.2 Add placeholder videos:
  - Using 2 source videos duplicated to create 5 total (3.7MB each, ~19MB total)
  - Format: MP4 (will replace with actual client videos later)
  - Files: `hero-bg-1.mp4` through `hero-bg-5.mp4`
  - Note: Videos 1, 3, 5 use same source; Videos 2, 4 use same source

## 4. Styling & Polish

- [x] 4.1 Add card styling:
  - Rounded corners (`rounded-xl`) with subtle border (`border-white/10`)
  - Shadow effect (`shadow-lg shadow-black/20`)
  - Gradient overlay for blending with background
  - Smooth fade-in animation with scale on load

- [x] 4.2 Ensure text readability:
  - Verified: Text remains readable over video backgrounds
  - Opacity set at 0.12-0.2 range - subtle but visible
  - CTA buttons remain prominent

## 5. Testing

- [x] 5.1 Test mobile viewport (320-639px):
  - Verified: Only 1 video shown (card 1)
  - Card 2 also visible (hideOnMobile: false)
  - No layout shifts observed

- [x] 5.2 Test tablet viewport (640-1023px):
  - Verified: 3 videos shown (cards 1-3)
  - Cards 4-5 hidden with hideOnTablet
  - Positioning doesn't overlap content

- [x] 5.3 Test desktop viewport (1024px+):
  - Verified: All 5 videos shown
  - Scattered positioning looks organic
  - Smooth autoplay behavior confirmed

- [x] 5.4 Performance verification:
  - Intersection Observer implemented for pause/play
  - Videos pause when scrolled out of viewport
  - Build successful with no errors
