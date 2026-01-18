# Task: Add Connector Lines to Iceberg Labels

## Goal
Add visual connector lines from each label to specific parts of the iceberg, similar to the reference design from edu.limitless.inc/crack-editing.

## Current State
- Labels are positioned around the iceberg but float without visual connection
- Labels animate in with staggered opacity on scroll

## Reference Design Analysis
The reference shows:
- Lines from each label pointing to different sections of the iceberg
- Lines appear to be thin, possibly with small dots/circles at endpoints
- Creates a "diagram" feel that helps users understand what each label refers to

## Implementation Plan

### 1. Add SVG Lines Layer (Desktop Only)
- Create an absolute-positioned SVG that overlays the iceberg area
- SVG will contain paths/lines from each label position to iceberg sections
- Lines will use cyan color to match the label styling

### 2. Line Endpoints
- **ATTENTION SCIENCE** (left, top-42%) → Upper-left underwater section
- **STORY STRUCTURE** (left, top-58%) → Lower-left underwater section
- **EMOTIONAL PACING** (right, top-47%) → Upper-right underwater section
- **SENSORY CUES** (right, top-63%) → Lower-right underwater section
- **TASTE & DESIGN** (center, top-78%) → Bottom point of iceberg

### 3. Animation
- Lines should fade in along with their corresponding labels
- Use the same opacity transforms (label1Opacity through label5Opacity)
- Optional: animate the line drawing effect using stroke-dasharray/dashoffset

### 4. Styling
- Line color: cyan-400 or similar to match labels
- Line width: 1-2px
- Add small circles at the iceberg connection points
- Slightly transparent to not overpower the iceberg

## Technical Notes
- Lines will be positioned using viewBox coordinates that match the container
- Will use Framer Motion for opacity animation to sync with labels
- Desktop only (mobile has different label layout)

## Files to Modify
- `components/ui/iceberg-reveal-c.tsx`

---

## Implementation Log

### Completed - 2026-01-18

**Changes made to `components/ui/iceberg-reveal-c.tsx`:**

#### 1. Added delayed line opacities (separate from labels)
New scroll-based opacity transforms that trigger later than labels:
- `line1Opacity`: [0.45, 0.55] → appears after 45% scroll
- `line2Opacity`: [0.48, 0.58]
- `line3Opacity`: [0.51, 0.61]
- `line4Opacity`: [0.54, 0.64]
- `line5Opacity`: [0.57, 0.67]

This ensures lines only appear when the underwater iceberg section is fully visible.

#### 2. CSS-based connector lines (replaced SVG approach)
Used CSS divs with gradients instead of SVG (more reliable for responsive layouts):
- Lines positioned with `left/right/top` percentages
- Gradient backgrounds for fade effect
- Transform rotation for angled lines
- Glowing cyan dots (`box-shadow`) at connection points

#### 3. Mobile layout improvements
Repositioned mobile labels around the iceberg instead of all at bottom:
- **Top row (38%)**: ATTENTION SCIENCE (left), EMOTIONAL PACING (right)
- **Middle row (54%)**: STORY STRUCTURE (left), SENSORY CUES (right)
- **Bottom (70%)**: TASTE & DESIGN (centered)

This spreads labels vertically to represent different parts of the iceberg.

#### 4. Styling summary
- Line color: Cyan (`rgba(34,211,238,0.8)`) with gradient fade
- Glowing dots: `box-shadow: 0 0 8px rgba(34,211,238,0.8)`
- Desktop only lines (mobile has labels positioned around iceberg)

#### 5. Refinements (multiple iterations)
Adjusted line opacities to appear with labels (not too delayed):
- `line1Opacity`: [0.25, 0.4]
- `line2Opacity`: [0.30, 0.45]
- `line3Opacity`: [0.35, 0.5]
- `line4Opacity`: [0.40, 0.55]
- `line5Opacity`: [0.45, 0.6]

Final line positions (dots inside iceberg):
- **Line 1** (ATTENTION SCIENCE): left 33%, top 40%, width 14%, rotation -8deg
- **Line 2** (EMOTIONAL PACING): right 33%, top 44%, width 14%, rotation 8deg
- **Line 3** (STORY STRUCTURE): left 32%, top 56%, width 16%, rotation -5deg
- **Line 4** (SENSORY CUES): right 32%, top 60%, width 16%, rotation 5deg
- **Line 5** (TASTE & DESIGN): center, top 66%, height 8% (vertical line)

---

## Status: ✅ COMPLETE

All connector lines are now properly positioned with glowing cyan dots inside the iceberg body, creating a diagram-style visualization that connects each label to its corresponding section of the iceberg.
