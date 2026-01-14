# Phase 4: Animations & Polish (MVP) - Tasks

## 1. Install Aceternity UI Components
- [x] 1.1 Install background-ripple-effect: `npx shadcn@latest add @aceternity/background-ripple-effect`
- [x] 1.2 Install sparkles: `npx shadcn@latest add @aceternity/sparkles`
- [x] 1.3 Add required CSS keyframes to `app/globals.css`

## 2. Hero Section - Background Ripple Effect
- [x] 2.1 Read current `components/sections/hero.tsx` implementation
- [x] 2.2 Import BackgroundRippleEffect component
- [x] 2.3 Add ripple effect as background layer behind hero content
- [x] 2.4 Position content above ripple with proper z-index
- [x] 2.5 Ensure ripple effect is visible but not distracting
- [x] 2.6 Test hover interaction triggers ripple animation

## 3. Creators Section - Sparkles Effect
- [x] 3.1 Read current `components/sections/creators.tsx` implementation
- [x] 3.2 Import SparklesCore component
- [x] 3.3 Wrap LIMITLESS.INC logo with sparkles container
- [x] 3.4 Configure sparkle density, color (purple to match theme), and speed
- [x] 3.5 Position sparkles behind/around the logo circle
- [x] 3.6 Ensure sparkles don't interfere with text readability

## 4. Accessibility & Performance
- [x] 4.1 Add prefers-reduced-motion check (handled by Aceternity components)
- [x] 4.2 Disable/simplify animations when reduced motion is preferred
- [x] 4.3 Verify 60fps performance in browser DevTools
- [x] 4.4 Test on mobile viewport

## 5. Testing
- [x] 5.1 Playwright MCP: Test Hero section at desktop viewport
- [x] 5.2 Playwright MCP: Test Hero section at mobile viewport
- [x] 5.3 Playwright MCP: Test Creators section at desktop viewport
- [x] 5.4 Playwright MCP: Test Creators section at mobile viewport
- [x] 5.5 Verify no layout shifts from animation components

## 6. Documentation
- [x] 6.1 Update tasks.md with completion notes
- [ ] 6.2 Update MAIN_PROJECT.md with Phase 4 status

---

## Completion Notes

### Components Installed
- `components/ui/background-ripple-effect.tsx` - Interactive grid that ripples on click/hover
- `components/ui/sparkles.tsx` - Particle sparkle animation using tsparticles

### CSS Added (globals.css)
```css
@theme inline {
  --animate-cell-ripple: cell-ripple var(--duration, 200ms) ease-out none var(--delay, 0ms);

  @keyframes cell-ripple {
    0% { opacity: 0.4; }
    50% { opacity: 0.8; }
    100% { opacity: 0.4; }
  }
}
```

### Hero Section Changes
- Added `BackgroundRippleEffect` component with `rows={11} cols={30} cellSize={48}`
- Positioned as absolute background with z-index layering
- Gradient overlay adjusted to let ripple effect show through

### Creators Section Changes
- Added `SparklesCore` component inside LIMITLESS.INC logo circle
- Configured: `particleColor="#8B5CF6"` (purple), `particleDensity={80}`, `minSize={0.4}`, `maxSize={1.2}`
- Logo text positioned above sparkles with z-index

### Screenshots
- `.playwright-mcp/phase4-hero-ripple-effect.png` - Desktop hero
- `.playwright-mcp/phase4-creators-sparkles-full.png` - Desktop creators
- `.playwright-mcp/phase4-hero-mobile.png` - Mobile hero
- `.playwright-mcp/phase4-creators-mobile-3.png` - Mobile creators

---

## Deferred Tasks (Phase 4.1)
These tasks are deferred for a future iteration:

- Scroll-triggered section animations (fade-in, slide-up)
- Animated number counters for stats
- Brand logo marquee
- Enhanced card hover effects
- Scroll progress indicator
- Button hover animations
- Hero parallax effect
