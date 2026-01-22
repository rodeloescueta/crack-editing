# YouTube-Style Progress Bar for Course Modules

## Overview
Replace the vertical scrollbar with a horizontal YouTube-style progress bar at the bottom of the modules container.

## Design
```
┌─────────────────────────────────────────────┐
│  Module content here...                     │
│                                             │
├─────────────────────────────────────────────┤
│ ▶ ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└─────────────────────────────────────────────┘
```

## Implementation

### Task 1: Hide native scrollbar
- Keep `overflow-y: auto` for functionality
- Use CSS to hide the scrollbar visually

### Task 2: Add progress bar container
- Position at bottom of the card
- Include play button (triangle) on left
- Progress track (gray) and progress fill (gradient)

### Task 3: Track scroll progress
- Use existing `scrollYProgress` from Framer Motion
- Map to progress bar width (0-100%)

### Task 4: Make it interactive
- Click on track to jump to position
- Play button can pulse/animate subtly

## Files to Modify
- `components/ui/sticky-scroll-reveal.tsx` - Add progress bar component
- `app/globals.css` - Hide scrollbar, style progress bar
