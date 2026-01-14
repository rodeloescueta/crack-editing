# Crack Editing Course Landing Page - Main Project Task

## Project Overview

Replicate the "crack editing" course landing page (originally built with Lovable) using **Next.js 16 + shadcn/ui + Framer Motion** with enhanced animations and interactivity to create a "next level" experience.

### Design Theme
- **Primary Background**: Dark blue/navy (#0a0a1a range)
- **Accent Colors**: Orange (CTAs, highlights) + Purple (secondary accents)
- **Goal**: Make the scroll experience "highly addictive" with smooth animations

---

## Page Sections Identified (from screenshots)

### 1. Hero Section
- Badge: "3+ billion views generated for our clients"
- Main headline: "make your social media videos **highly addictive**" (orange gradient on "social media videos")
- Subtext describing crack editing as psychology-driven editing system
- Two CTAs: "enroll in crack editing" (orange) + "see examples" (dark/outline)
- Trust indicators: 5-hour self-paced, 30-day guarantee, lifetime access

### 2. Before/After Transformation Carousel
- Headline: "can you go from **THIS** to **THIS**?" (orange gradient)
- Carousel of creator transformations (Nikki @bignikbh, Warren @nontoxicdad)
- Each card shows:
  - Before: "Generic edit" with red border, ~500 views
  - After: "Crack Edited" with purple border, 1.1M+ views
  - Arrow transition between them
  - Footer with growth stats
- CTA: "Start Your Transformation"

### 3. Problem vs Solution Section
- Headline: "most viral videos look simple. **the real work happens underneath.**"
- Two cards side by side:
  - **THE PROBLEM** (red X): "Why most videos fail" - 5 pain points
  - **THE SOLUTION** (green check): "The crack editing difference" - 5 benefits

### 4. Course Modules Section
- Headline: "what's inside **crack editing**"
- Subtext about 5-hour self-paced training
- 6 module cards (2 rows x 3 columns):
  - Module 1: Why People Stop Scrolling (Or Don't)
  - Module 2: Tiny Changes That Turn Videos Into Bangers
  - Module 3: How to Edit for Your Audience
  - Module 4: The 6-Element System
  - Module 5: Real Breakdowns of Viral Videos
  - Module 6: Live Editing: Raw to Finished
- Each card has: icon, module number, title, description, bullet points
- CTA: "enroll in crack editing"

### 5. Is This Course For Me Section
- Headline: "is this course **for me?**"
- Two cards:
  - **It's NOT for you if...** (red X items) - 5 disqualifiers
  - **It's FOR you if...** (green checkbox items) - 5 qualifiers
- Footer: "this course was made for you"

### 6. What You Get Section
- Headline: "**what you get**" (purple gradient)
- Subtext about the complete system
- 6 feature cards (2 rows x 3 columns) with purple icons:
  - Proven Hook Strategies
  - The Reasons People Keep Watching
  - The Full Framework
  - Real Edits, Step by Step
  - Practice Tools & Examples
  - Ongoing Updates

### 7. Meet The Creators Section
- Badge: "MEET THE CREATORS"
- Headline: "It's taken **25+ combined years** to master this craft."
- Left: Large circular logo "LIMITLESS.INC" with purple glow
- Right: Bios for AJ Kumar & Josh Bill
- Stats grid (4 cards):
  - 15+ Years Digital Marketing (AJ Kumar)
  - 3B+ Views Generated (For Clients)
  - 10+ Years Video Editing (Josh Bill)
  - 100+ Brand Deals Secured
- Brand logos row: Google, MailChimp, Adobe, HSN, Absolut Vodka, Intuit, Bravo, Core Power
- CTA: "Visit limitless.inc"

### 8. Pricing Section
- Headline: "turn a small investment into a skill **you can use for years**"
- Pricing card:
  - Badge: "ONE-TIME INVESTMENT"
  - Price: $297 (or 3 payments of $99)
  - 8 features with checkmarks
  - CTA: "enroll in crack editing"
- Value proposition footer

### 9. FAQ Section
- Accordion with 7 questions:
  - What exactly will I get when I enroll?
  - How is this different from other editing courses?
  - Do I need specific software to take this course?
  - How much time should I expect to spend on this?
  - Will this help with client work?
  - Will this make my videos go viral?
  - What if this isn't a good fit for me?
- CTA: "enroll in crack editing"

### 10. Footer
- Links: Privacy Policy, Fulfillment Policy, Careers
- Support email: hello@limitless.inc
- Copyright: The Limitless Company
- Address: 6600 Sunset Blvd, Los Angeles CA 90028

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, RSC)
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Animations**: Framer Motion (recommended for scroll-based animations)
- **Icons**: Lucide React
- **Testing**: Playwright MCP (for visual/functional testing)

### Why Framer Motion?
- Battle-tested with React/Next.js
- Excellent scroll-triggered animations via `useInView` and `whileInView`
- Smooth transitions and gestures
- Layout animations for carousels
- Good performance with `AnimatePresence`

---

## Animation Enhancement Ideas

### Scroll-Based Animations (Inspired by Snowball & Apple)
- Fade-in + slide-up for sections as they enter viewport
- Staggered animations for card grids (modules, features)
- **Parallax effects** on hero section and between sections
- Progress indicator for page scroll
- **Text split animations** - headlines animate word by word or line by line
- **Scroll-linked transforms** - elements move/scale based on scroll position

### Interactive Elements
- Before/After carousel with smooth transitions
- Number counter animations for stats (15+, 3B+, etc.) - **Snowball style**
- Hover effects on cards (scale, glow, border highlight)
- Button hover animations (arrow slide, color transition)
- Accordion smooth expand/collapse
- **Infinite scrolling marquee** for brand logos - **Snowball style**
- **Tab-based galleries** with smooth transitions - **Apple style**

### Visual Enhancements
- Gradient animations on headlines
- Subtle floating/pulse on icons
- Glow effects on purple elements
- Smooth background color transitions between sections
- **3D transforms** on hover for depth
- **Blur/focus transitions** between sections

---

## Implementation Phases

### Phase 1: Foundation & Layout ✅ COMPLETED
- [x] Set up global styles (dark theme, color variables)
- [x] Create base layout components
- [x] Implement Hero section (static first)

**Completion Notes:**
- Dark theme with navy background, orange/purple accents
- Typography utilities and gradient text classes added
- Framer Motion installed and configured
- Hero section fully responsive at all breakpoints
- Playwright MCP tested: Desktop (1440px), Tablet (768px), Mobile (375px)

### Phase 2: Core Sections ✅ COMPLETED
- [x] Before/After Transformation Carousel
- [x] Problem vs Solution cards
- [x] Course Modules grid
- [x] Is This For Me section

**Completion Notes:**
- Created 3 reusable UI components (comparison-card, module-card, video-card)
- Transformation carousel with smooth Framer Motion transitions
- Carousel navigation via arrows (desktop) and dots (all viewports)
- Responsive grids: 3 cols → 2 cols → 1 col
- Playwright MCP tested: Desktop (1440px), Tablet (768px), Mobile (375px)

### Phase 3: Supporting Sections ✅ COMPLETED
- [x] What You Get features grid
- [x] Meet The Creators section
- [x] Pricing card
- [x] FAQ accordion
- [x] Footer

**Completion Notes:**
- Created 2 reusable UI components (feature-card, stat-card)
- Installed shadcn Accordion for FAQ with built-in accessibility
- 6 feature cards with purple icons in responsive grid
- Creators section with logo, bios, 4 stats cards, 8 brand names
- Pricing card with $297 price and 8 features
- FAQ with 7 expandable questions
- Footer with links, email, copyright, address
- Playwright MCP tested: Desktop (1440px), Tablet (768px), Mobile (375px)

### Phase 4: Animations & Polish (MVP) ✅ COMPLETED
- [x] Install Aceternity UI components (background-ripple-effect, sparkles)
- [x] Add Background Ripple Effect to Hero section
- [x] Add Sparkles effect to Creators section (LIMITLESS.INC logo)
- [x] Test on desktop and mobile viewports

**Completion Notes:**
- Installed Aceternity UI via shadcn CLI
- Hero section: Interactive grid background that ripples on hover/click
- Creators section: Purple sparkle particles (#8B5CF6) around logo
- Added CSS keyframes for cell-ripple animation
- Playwright MCP tested: Desktop (1440px), Mobile (375px)

### Phase 4.1: Additional Animations ✅ COMPLETED
- [x] Animated number counters (15+, 3B+, 10+, 100+)
- [x] Brand logo marquee (infinite scroll)
- [x] Scroll progress indicator (gradient bar at top)
- [x] Enhanced card hover effects (glow, lift)

**Completion Notes:**
- Created `lib/hooks/use-count-up.ts` for animated counting
- Created `components/ui/animated-counter.tsx` component
- Created `components/ui/marquee.tsx` with pause-on-hover
- Created `components/ui/scroll-progress.tsx` with Framer Motion
- Added `cardHoverGlow` and `cardHoverLift` animation variants
- Updated StatCard, ModuleCard, FeatureCard with new animations
- Added marquee keyframes to globals.css

**Deferred to Phase 4.2:**
- Scroll-triggered section animations (fade-in, slide-up)

### Phase 5: Responsive & Testing ✅ COMPLETED
- [x] Mobile responsive design (mobile-first approach)
- [x] Tablet breakpoints
- [x] Performance audit (no console errors, no failed requests)
- [x] Playwright MCP testing for each section (desktop 1440px)
- [x] Playwright MCP testing for each section (tablet 768px)
- [x] Playwright MCP testing for each section (mobile 375px)

**Completion Notes:**
- Desktop (1440px): All 10 sections render correctly, animations work
- Tablet (768px): Layout adapts properly, FAQ accordion functional
- Mobile (375px): Single-column layouts, carousel navigation works
- Animated counters trigger on scroll (15+, 3B+, 10+, 100+)
- No horizontal scroll issues on any viewport
- No console errors or failed network requests
- Screenshots saved: `phase5-desktop-1440-fullpage.png`, `phase5-tablet-768-fullpage.png`, `phase5-mobile-375-fullpage.png`

---

## Mobile Responsiveness Requirements

**Priority: HIGH** - The app MUST be fully mobile responsive.

### Breakpoints
- **Mobile**: 320px - 639px (primary target)
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

### Mobile-Specific Considerations
- Hero section: Stack elements vertically, adjust font sizes
- Carousel: Full-width cards, touch-friendly navigation
- Module grid: 1 column on mobile, 2 on tablet, 3 on desktop
- Feature cards: Stack vertically on mobile
- Stats grid: 2x2 on mobile instead of 4 columns
- FAQ accordion: Full-width, larger touch targets
- CTAs: Full-width buttons on mobile
- Navigation: Hamburger menu if header nav is added

### Touch Interactions
- Swipe gestures for carousel
- Tap-friendly accordion
- Adequate spacing between interactive elements (min 44px touch targets)

---

## Testing Strategy (Playwright MCP)

Use Playwright MCP to visually and functionally test each section across viewports.

### Test Viewports
- **Mobile**: 375x667 (iPhone SE)
- **Tablet**: 768x1024 (iPad)
- **Desktop**: 1440x900 (Standard laptop)

### Testing Checklist Per Section
For each of the 10 sections, verify:
- [ ] Layout renders correctly at all breakpoints
- [ ] Text is readable (no overflow, truncation issues)
- [ ] Images/icons display properly
- [ ] Interactive elements work (buttons, accordion, carousel)
- [ ] Animations trigger correctly on scroll
- [ ] No horizontal scroll issues
- [ ] Touch targets are adequately sized on mobile

### Section-by-Section Test Plan
1. **Hero**: CTA buttons clickable, badge visible, headline readable
2. **Carousel**: Navigation works, cards transition smoothly
3. **Problem/Solution**: Cards stack properly on mobile
4. **Modules**: Grid adapts correctly
5. **Is This For Me**: Two-column to single-column transition
6. **What You Get**: Feature cards responsive
7. **Creators**: Stats and logos wrap correctly
8. **Pricing**: Card centered, features list readable
9. **FAQ**: Accordion expands/collapses, full-width on mobile
10. **Footer**: Links accessible, stacked on mobile

---

## Inspiration Websites

### 1. Snowball Agency (https://www.snowball.agency/)

**Key Effects to Incorporate:**
- **3D Animated Hero Element**: Large rotating/animated sphere with particle effects
- **Infinite Scrolling Marquee**: Brand logos and stats scrolling horizontally in a loop
- **Big Bold Typography**: Large headlines with italic emphasis on key words
- **Animated Stats Counters**: Numbers like "90B VIEWS", "110M SUBSCRIBERS" with count-up animations
- **Horizontal Scrolling Carousel**: Portfolio showcase with smooth card transitions
- **Dark Background with Gradient**: Deep dark with subtle purple/blue gradients
- **Scroll-Triggered Reveals**: Content fading/sliding in as user scrolls

**Screenshot saved**: `.playwright-mcp/temp/inspiration-snowball.png`

### 2. Apple iPhone Air (https://www.apple.com/iphone-air/)

**Key Effects to Incorporate:**
- **Parallax Product Imagery**: Product images that transform/animate based on scroll position
- **Sticky Navigation**: Nav bar that appears/changes on scroll
- **Tab-Based Galleries**: Interactive tabs with smooth content transitions
- **Text Parallax**: Headlines that fade in with different speeds than background
- **Clean Section Transitions**: Smooth color/background changes between sections
- **Full-Width Hero**: Immersive hero with product showcase
- **Horizontal Scroll Galleries**: Feature carousels with dot indicators

**Screenshots saved**:
- `.playwright-mcp/temp/inspiration-apple-iphone-air.png`
- `.playwright-mcp/temp/inspiration-apple-iphone-air-scroll.png`

---

## Parallax & Scroll Animation Strategy

### Parallax Effects to Implement

1. **Hero Section**
   - Background gradient moves slower than foreground content
   - Badge floats with subtle parallax offset
   - CTA buttons have slight delay in movement

2. **Section Transitions**
   - Overlapping sections with different scroll speeds
   - Background color gradients that shift as you scroll
   - Decorative elements (glows, shapes) moving at different rates

3. **Text Reveals**
   - Headlines split into lines that animate sequentially
   - Key words (orange/purple) animate separately with emphasis
   - Subtext fades in after headline completes

4. **Card Animations**
   - Staggered entrance (cards appear one by one)
   - Subtle vertical parallax on card backgrounds
   - Hover lifts card with shadow depth change

5. **Stats Section**
   - Numbers count up when scrolled into view
   - Background glow pulses subtly
   - Stats cards have slight rotation on scroll

### Framer Motion Implementation

```tsx
// Example scroll-linked animation
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

// Example parallax component
<motion.div style={{ y, opacity }}>
  {/* Content */}
</motion.div>
```

### Performance Considerations
- Use `will-change` sparingly for GPU acceleration
- Throttle scroll listeners
- Use `useInView` for triggering animations only when visible
- Prefer CSS transforms over layout-affecting properties
- Test on lower-end devices to ensure smooth 60fps

---

## Reference Screenshots

Located in: `/temp/` directory
- 11 screenshots covering all sections of the original Lovable site

**Inspiration Screenshots**: `.playwright-mcp/temp/`
- `inspiration-snowball.png` - Snowball Agency hero
- `inspiration-apple-iphone-air.png` - Apple iPhone Air hero
- `inspiration-apple-iphone-air-scroll.png` - Apple scroll effects

---

## Placeholder Assets

All placeholder images are in `public/images/` - replace with actual assets later.

### Directory Structure
```
public/images/
├── hero/
│   ├── video-editing-bg.jpg      # Hero background option
│   ├── social-media-content.jpg  # Social media imagery
│   ├── gradient-abstract.jpg     # Abstract gradient
│   ├── abstract-purple.jpg       # Purple abstract
│   ├── abstract-gradient.jpg     # Gradient background
│   └── gradient-mesh.jpg         # Mesh gradient (1200px)
├── creators/
│   ├── creator-male-1.jpg        # AJ Kumar placeholder
│   ├── creator-male-2.jpg        # Josh Bill placeholder
│   ├── creator-female-1.jpg      # Testimonial person
│   └── creator-female-2.jpg      # Testimonial person
├── testimonials/
│   ├── video-thumbnail-1.jpg     # Before/after video thumb
│   ├── video-thumbnail-2.jpg     # Before/after video thumb
│   ├── video-thumbnail-3.jpg     # Before/after video thumb
│   └── video-thumbnail-4.jpg     # Before/after video thumb
├── brands/
│   └── brand-[1-8].svg           # Brand logo placeholders
├── icons/
│   ├── module-[1-6].svg          # Module icons (purple/orange)
│   ├── feature-hook.svg          # Hook strategies icon
│   ├── feature-watch.svg         # Keep watching icon
│   ├── feature-framework.svg     # Framework icon
│   ├── feature-steps.svg         # Step by step icon
│   ├── feature-tools.svg         # Tools icon
│   └── feature-updates.svg       # Updates icon
└── limitless-logo.svg            # Limitless.inc logo placeholder
```

### Image Sources
- Photos from Unsplash (free to use)
- SVG icons custom created for project
- Replace with actual client assets before production

---

## Status

**Current Phase**: Phase 5 Complete - All core features implemented and tested
**Last Updated**: 2026-01-14

---

## Notes

- The original uses a blue-purple-orange color scheme that should be preserved
- Focus on making scroll experience "addictive" as per client preference
- shadcn/ui components to be used: Card, Button, Accordion, Badge
- Custom components needed: Carousel, Stats Counter, Module Card
- **CRITICAL**: Mobile responsiveness is a top priority - test on all viewports
- **CRITICAL**: Use Playwright MCP to validate each section after implementation
- Each phase completion should include Playwright testing before moving to next phase
