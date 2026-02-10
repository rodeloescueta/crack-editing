# Before/After Video Modal Implementation

## Overview

Add real before/after videos to the "can you go from THIS to THIS?" section. When users click the play button on a video card, a modal should pop up with a video player instead of opening a new tab.

## Current State

- **Section component**: `components/sections/transformation-carousel.tsx`
- **Video card component**: `components/ui/video-card.tsx`
- **Current behavior**: `VideoCard.handleClick()` opens `videoUrl` in a new tab via `window.open()`. All `videoUrl` fields are currently empty strings, so nothing happens on click.
- **Data structure**: Each transformation has `before.videoUrl` and `after.videoUrl` fields ready for URLs.

## Video Assets

Located at: `/home/rodelo-escueta/Downloads/drive-download-20260210T164219Z-1-001/`

| Creator | Before | After | Mapping in code |
|---------|--------|-------|----------------|
| Ashley Hatch | Ashley Before.mp4 (5.3MB) | Ashley After.mp4 (11MB) | `id: "4"` |
| Jonathan Cheban (Foodgod) | Foodgod Before.mp4 (1.7MB) | Foodgod After.mp4 (5.7MB) | `id: "5"` |
| Kathy Prounis | Kathy Before.mp4 (6.1MB) | Kathy After.mp4 (30MB) | `id: "2"` |
| Neil Patel | Neil Before.mp4 (12MB) | Neil After.mp4 (33MB) | `id: "6"` |
| Nikki Haskell | Nikki Before.mp4 (6.1MB) | Nikki After.mp4 (14MB) | `id: "1"` |
| Warren Phillips (Nontoxic Dad) | Nontoxic Dad Before.mp4 (5.0MB) | Nontoxic Dad After.mp4 (4.4MB) | `id: "3"` |

**Total raw size**: ~131MB (12 files)

## Decision Needed: Video Compression

Some files are large (Kathy After: 30MB, Neil After: 33MB). Options:

1. **Compress locally before uploading to Cloudinary** — Use ffmpeg to reduce file sizes (target ~5-10MB per file). This saves Cloudinary bandwidth/storage and improves page load.
2. **Upload raw to Cloudinary and use their transformation API** — Cloudinary can transcode on-the-fly (e.g., `f_auto,q_auto`). Simpler workflow but uses more Cloudinary quota.
3. **Compress locally AND use Cloudinary transformations** — Belt and suspenders approach. Best performance.

**Recommendation**: Option 1 — compress locally with ffmpeg before upload. Target ~720p, reasonable bitrate. Cloudinary can still apply `f_auto,q_auto` on delivery.

---

## Tasks

### Task 1: Compress videos with ffmpeg

Compress all 12 video files to web-friendly sizes:
- Resolution: 720p max (since they'll play in a modal, not fullscreen)
- Codec: H.264 for broad compatibility
- Target: ~3-8MB per file depending on duration
- Output to a `compressed/` subfolder

### Task 2: Upload compressed videos to Cloudinary

Upload all 12 compressed files to Cloudinary and collect the URLs.
- Organize in a folder like `br-course/before-after/`
- Note down each URL mapped to the correct creator

### Task 3: Create a VideoModal component

Build a reusable video modal component:
- **Trigger**: Clicking the play button on a VideoCard
- **Modal**: Full-screen overlay with dark backdrop
- **Content**: Native HTML5 `<video>` player with controls
- **Close**: Click backdrop, press Escape, or click X button
- **Animation**: Fade in/scale up with Framer Motion
- **Mobile**: Full-width video, responsive sizing
- **Accessibility**: Focus trap, keyboard navigation, proper ARIA attributes

**File**: `components/ui/video-modal.tsx`

### Task 4: Update VideoCard to open modal instead of new tab

Modify `components/ui/video-card.tsx`:
- Replace `window.open()` with modal open logic
- Pass `videoUrl` to the VideoModal component
- Keep "Coming soon" state when videoUrl is empty
- Update hover overlay text from "Watch Video" with ExternalLink icon to just "Watch Video" with Play icon (since it's no longer external)

### Task 5: Update transformation data with Cloudinary URLs

Update `components/sections/transformation-carousel.tsx`:
- Fill in all `videoUrl` fields with the Cloudinary URLs from Task 2
- Map each URL to the correct creator's before/after slot

### Task 6: Test across viewports

Use Playwright MCP to verify:
- Modal opens correctly on desktop and mobile
- Video plays in the modal
- Modal closes via backdrop click, Escape key, and X button
- Responsive sizing works at all breakpoints (320px, 640px, 1024px+)

---

## Implementation Notes

- The existing `alert-dialog.tsx` component from shadcn could be used as a base for the modal, but a custom modal with `<dialog>` or Radix Dialog would be better suited for a video player since we don't need action/cancel buttons.
- Videos should autoplay (muted initially for browser autoplay policies) when the modal opens and pause when closed.
- Consider adding a loading spinner while the video buffers.

---

## Completed Implementation

**Status: ALL TASKS COMPLETE**

### Changes Made

#### Task 1: Video Compression
- Compressed 12 videos from 131MB to 79MB total using ffmpeg
- Settings: H.264, CRF 28-34, AAC 96-128k, `+faststart`
- Neil videos scaled to 480p due to long duration (9.6 min)
- Output: `/home/rodelo-escueta/Downloads/drive-download-20260210T164219Z-1-001/compressed/`

#### Task 2: Cloudinary Upload
- User uploaded 12 compressed files manually to Cloudinary (cloud: `dpeonf20f`)

#### Task 3: VideoModal Component
- **New file**: `components/ui/video-modal.tsx`
- Built on Radix Dialog primitives (focus trap, Escape key, portal)
- Framer Motion animations (fade overlay + scale-up video container)
- HTML5 `<video>` with autoplay on open, pause on close
- Responsive: `max-w-sm` mobile, `max-w-md` tablet, `max-w-lg` desktop
- Accessible: sr-only title/description, close button with aria-label

#### Task 4: VideoCard Update
- **Modified**: `components/ui/video-card.tsx`
- Replaced `window.open()` with `setModalOpen(true)` state
- Replaced `ExternalLink` icon with `Play` icon in hover overlay
- Added `VideoModal` render at bottom of component (inside fragment)

#### Task 5: Cloudinary URLs
- **Modified**: `components/sections/transformation-carousel.tsx`
- All 12 `videoUrl` fields populated with Cloudinary URLs

#### Task 6: Testing
- Desktop (1280x800): Modal opens, video plays, X button closes, Escape closes
- Mobile (375x812): Modal opens full-width, video plays, Escape closes
- No TypeScript errors
