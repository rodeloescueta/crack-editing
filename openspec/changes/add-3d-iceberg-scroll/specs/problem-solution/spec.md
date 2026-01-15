# Problem/Solution Section - Delta Spec

## ADDED Requirements

### Requirement: 3D Iceberg Scroll Reveal
The Problem/Solution section SHALL display an interactive 3D iceberg visualization that reveals on scroll to illustrate the "surface vs depth" metaphor of viral video creation.

#### Scenario: Initial view shows iceberg tip
- **WHEN** user views the Problem/Solution section
- **THEN** only the tip of the iceberg is visible above a water plane
- **AND** the label "VIRAL VIDEO" is displayed above the water

#### Scenario: Scroll reveals underwater complexity
- **WHEN** user scrolls down through the section
- **THEN** the camera moves down to reveal the larger underwater portion
- **AND** labels for each hidden element fade in:
  - "ATTENTION SCIENCE"
  - "EMOTIONAL PACING"
  - "STORY STRUCTURE"
  - "SENSORY CUES"
  - "TASTE & DESIGN"

#### Scenario: Mobile fallback
- **WHEN** user views on a device without WebGL support or low performance
- **THEN** a static or simplified version of the iceberg visualization is shown
- **AND** the core message is still conveyed

#### Scenario: Accessibility
- **WHEN** a screen reader encounters the 3D visualization
- **THEN** descriptive text explains the iceberg metaphor
- **AND** the visualization has appropriate ARIA labels

### Requirement: Lazy Loading for 3D Scene
The 3D iceberg component SHALL be lazy loaded to optimize initial page load performance.

#### Scenario: Deferred loading
- **WHEN** the page initially loads
- **THEN** the 3D scene is not included in the initial JavaScript bundle
- **AND** a placeholder or loading state is shown until ready

#### Scenario: Scene loads on demand
- **WHEN** the Problem/Solution section enters the viewport
- **THEN** the 3D scene resources are fetched and initialized
- **AND** the iceberg appears with a smooth transition
