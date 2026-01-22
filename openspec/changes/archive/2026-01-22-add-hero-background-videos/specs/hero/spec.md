# Hero Section Spec Delta

## ADDED Requirements

### Requirement: Background Video Cards

The hero section SHALL display multiple video cards playing in the background layer to showcase video editing capabilities and create a dynamic visual experience.

#### Scenario: Video cards render in background layer
- **WHEN** the hero section loads
- **THEN** video cards SHALL be positioned at z-index 0 (below gradient overlays and content)
- **AND** videos SHALL autoplay with muted audio and loop continuously

#### Scenario: Videos have configurable positioning
- **WHEN** video cards are rendered
- **THEN** each card SHALL support absolute positioning via top, right, bottom, left props
- **AND** cards SHALL be scattered across the hero section in an asymmetric, organic pattern

#### Scenario: Videos have configurable appearance
- **WHEN** video cards are rendered
- **THEN** each card SHALL support size variants (sm, md, lg)
- **AND** each card SHALL support opacity values between 0.1 and 0.4
- **AND** each card MAY have a slight rotation for organic feel

### Requirement: Responsive Video Display

The hero section SHALL display a varying number of video cards based on viewport size to optimize performance and visual balance.

#### Scenario: Mobile viewport shows fewer videos
- **WHEN** viewport width is less than 640px
- **THEN** only 1-2 video cards SHALL be visible
- **AND** visible cards SHALL have reduced opacity and smaller size

#### Scenario: Tablet viewport shows moderate videos
- **WHEN** viewport width is between 640px and 1023px
- **THEN** 3-4 video cards SHALL be visible
- **AND** cards SHALL have medium size

#### Scenario: Desktop viewport shows full video set
- **WHEN** viewport width is 1024px or greater
- **THEN** all 4-5 video cards SHALL be visible
- **AND** cards SHALL display at their configured sizes

### Requirement: Video Performance Optimization

The hero section SHALL implement performance optimizations to minimize impact on page load and runtime performance.

#### Scenario: Videos lazy load
- **WHEN** the page loads
- **THEN** videos SHALL only begin loading when the hero section is in or near the viewport

#### Scenario: Videos pause when not visible
- **WHEN** the hero section scrolls out of viewport
- **THEN** all video playback SHALL pause
- **AND** playback SHALL resume when the hero section re-enters viewport

#### Scenario: Videos use optimized formats
- **WHEN** videos are loaded
- **THEN** the system SHALL prefer WebM format where supported
- **AND** SHALL fall back to MP4 for browsers without WebM support
- **AND** video files SHALL target 500KB-1MB per 5-second clip
