# Task: Replace Background Videos with Client Videos

## Overview
Replace the 5 placeholder background videos in the hero section with 7 actual client videos. Videos need compression before uploading to Cloudinary.

## Current State
- **Location**: `/public/videos/hero/` (hero-bg-1.mp4 through hero-bg-5.mp4)
- **Current count**: 5 placeholder videos (~3.7MB each, ~19MB total)
- **Component**: `components/ui/background-video-card.tsx`

## Client Videos Available
Source: `/home/rodelo-escueta/Downloads/client-videos/for bg/`

| # | Filename | Size | Notes |
|---|----------|------|-------|
| 1 | Ashley Hatch 1.mp4 | 15.6MB | |
| 2 | Foodgod.mp4 | 39.5MB | Largest - needs most compression |
| 3 | Jamie Shapiro.mp4 | 21.1MB | |
| 4 | Kathy Prounis 2.mp4 | 3.5MB | Already small |
| 5 | Neil Patel.mp4 | 5.2MB | |
| 6 | Nikki Haskell.mp4 | 8.4MB | |
| 7 | Nontoxic Dad.mp4 | 21.2MB | |

**Total raw size: ~115MB** → Target: ~21-28MB (3-4MB each after compression)

---

## Implementation Plan

### Phase 1: Video Compression
**Target specs for background videos:**
- Resolution: 720p max (videos are displayed small with low opacity)
- Bitrate: ~1-2 Mbps
- Format: MP4 (H.264)
- Target size: 3-4MB per video

**FFmpeg compression command:**
```bash
ffmpeg -i "input.mp4" -vf "scale=-2:720" -c:v libx264 -preset slow -crf 28 -an -movflags +faststart "output.mp4"
```
- `-vf "scale=-2:720"` - Scale to 720p height
- `-crf 28` - Quality level (higher = smaller file, 23-28 is good for background)
- `-an` - Remove audio (not needed for muted background videos)
- `-movflags +faststart` - Optimize for web streaming

### Phase 2: Upload to Cloudinary
- [ ] Compress all 7 videos
- [ ] Notify user videos are ready
- [ ] User uploads to Cloudinary
- [ ] User provides Cloudinary URLs

### Phase 3: Update Component
**File**: `components/ui/background-video-card.tsx`

**Changes needed:**
1. Update `heroVideoCards` array with 7 entries (currently 5)
2. Replace local paths with Cloudinary URLs
3. Add 2 new video card configurations for positions 6 & 7

**Proposed video assignments:**
| Position | Client | Visibility |
|----------|--------|------------|
| 1 (top-left) | Neil Patel | All viewports |
| 2 (top-center-right) | Kathy Prounis | Tablet+ |
| 3 (top-right) | Ashley Hatch | Tablet+ |
| 4 (center-left) | Nikki Haskell | Desktop only |
| 5 (bottom-right) | Nontoxic Dad | All viewports |
| 6 (NEW - bottom-left) | Jamie Shapiro | Desktop only |
| 7 (NEW - center-right) | Foodgod | Desktop only |

### Phase 4: Testing
- [ ] Test on mobile (320px) - should show 2 videos
- [ ] Test on tablet (768px) - should show 4-5 videos
- [ ] Test on desktop (1024px+) - should show all 7 videos
- [ ] Verify videos load and autoplay correctly
- [ ] Check performance (no lag/stutter)

---

## Status
- [x] Task document created
- [x] Videos compressed (115MB → 24MB)
- [x] Videos uploaded to Cloudinary
- [x] URLs received from user
- [x] Component updated
- [x] Testing completed

---

## Cloudinary URLs

| Video | URL |
|-------|-----|
| neil-patel | https://res.cloudinary.com/dpeonf20f/video/upload/v1770011674/neil-patel_gkstvg.mp4 |
| kathy-prounis | https://res.cloudinary.com/dpeonf20f/video/upload/v1770011676/kathy-prounis_n25zwm.mp4 |
| ashley-hatch | https://res.cloudinary.com/dpeonf20f/video/upload/v1770011674/ashley-hatch_mttfiq.mp4 |
| nikki-haskell | https://res.cloudinary.com/dpeonf20f/video/upload/v1770011674/nikki-haskell_nzoukp.mp4 |
| nontoxic-dad | https://res.cloudinary.com/dpeonf20f/video/upload/v1770011675/nontoxic-dad_vmk0mi.mp4 |
| jamie-shapiro | https://res.cloudinary.com/dpeonf20f/video/upload/v1770011674/jamie-shapiro_fkoz7l.mp4 |
| foodgod | https://res.cloudinary.com/dpeonf20f/video/upload/v1770011674/foodgod_cp7fzg.mp4 |

## Implementation Complete

**File modified:** `components/ui/background-video-card.tsx`
- Updated 5 existing video cards with Cloudinary URLs
- Added 2 new video cards (positions 6 & 7) for Jamie Shapiro and Foodgod
- All 7 client videos now display in the hero background
