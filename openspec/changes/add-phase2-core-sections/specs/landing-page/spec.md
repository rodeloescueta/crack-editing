# Landing Page Specification - Phase 2 Delta

## ADDED Requirements

### Requirement: Before/After Transformation Carousel
The landing page SHALL display a carousel showcasing creator transformations with before/after comparisons.

#### Scenario: Carousel renders with headline and content
- **WHEN** the transformation carousel section loads
- **THEN** the headline "can you go from THIS to THIS?" is displayed
- **AND** "THIS" text has orange gradient styling
- **AND** subtext explains these are real transformations
- **AND** at least one transformation card is visible

#### Scenario: Transformation card displays before/after comparison
- **WHEN** a transformation card is displayed
- **THEN** the creator name and handle are shown
- **AND** a "Before" video placeholder with red border is visible
- **AND** the before card shows "Generic edit" label and low view count
- **AND** an "After" video placeholder with purple border is visible
- **AND** the after card shows "Crack Edited™" label and high view count
- **AND** an arrow transition element connects before and after

#### Scenario: Carousel navigation works correctly
- **WHEN** multiple transformations exist
- **THEN** navigation controls (dots or arrows) are visible
- **AND** clicking navigation moves to the next/previous transformation
- **AND** transitions are smooth (not instant)

#### Scenario: Carousel is responsive
- **WHEN** the viewport is mobile size (375px)
- **THEN** the carousel is full-width
- **AND** before/after cards stack or scale appropriately
- **AND** navigation is touch-friendly (44px+ targets)
- **AND** no horizontal overflow occurs

### Requirement: Problem vs Solution Section
The landing page SHALL display a comparison section contrasting the problem with the solution offered.

#### Scenario: Problem/Solution section renders with headline
- **WHEN** the problem/solution section loads
- **THEN** the headline "most viral videos look simple. the real work happens underneath." is displayed
- **AND** "the real work happens underneath." has emphasized styling

#### Scenario: Problem card displays correctly
- **WHEN** the problem card is rendered
- **THEN** the card has "THE PROBLEM" header with red X icon
- **AND** the subheader reads "Why most videos fail"
- **AND** 5 pain points are listed with red indicators
- **AND** the card has appropriate border styling

#### Scenario: Solution card displays correctly
- **WHEN** the solution card is rendered
- **THEN** the card has "THE SOLUTION" header with green check icon
- **AND** the subheader reads "The crack editing difference"
- **AND** 5 benefits are listed with green indicators
- **AND** the card has appropriate border styling

#### Scenario: Problem/Solution cards are responsive
- **WHEN** the viewport is desktop size (1024px+)
- **THEN** the two cards are displayed side by side
- **WHEN** the viewport is tablet or mobile size
- **THEN** the cards stack vertically
- **AND** each card takes full width

### Requirement: Course Modules Section
The landing page SHALL display a grid of 6 course modules with their content summaries.

#### Scenario: Modules section renders with headline and grid
- **WHEN** the course modules section loads
- **THEN** the headline "what's inside crack editing™" is displayed
- **AND** "crack editing" has gradient styling
- **AND** subtext mentions "5-hour self-paced training program"
- **AND** 6 module cards are displayed in a grid

#### Scenario: Module card displays complete information
- **WHEN** a module card is rendered
- **THEN** the module number is displayed (e.g., "MODULE 1")
- **AND** the module title is displayed
- **AND** a brief description is shown
- **AND** bullet points list key topics
- **AND** an icon representing the module is visible

#### Scenario: Module grid is responsive
- **WHEN** the viewport is desktop size (1024px+)
- **THEN** modules display in a 3-column grid
- **WHEN** the viewport is tablet size (768px)
- **THEN** modules display in a 2-column grid
- **WHEN** the viewport is mobile size (375px)
- **THEN** modules display in a 1-column stack

#### Scenario: Modules section has CTA
- **WHEN** the modules section is fully rendered
- **THEN** a CTA button "enroll in crack editing™" is visible below the grid
- **AND** the button uses primary (orange) styling

### Requirement: Is This Course For Me Section
The landing page SHALL display a qualification section helping visitors determine if the course is right for them.

#### Scenario: For Me section renders with headline
- **WHEN** the for-me section loads
- **THEN** the headline "is this course for me?" is displayed
- **AND** "for me?" has gradient styling
- **AND** subtext helps users find the right fit

#### Scenario: Not For You card displays correctly
- **WHEN** the disqualifier card is rendered
- **THEN** the card has "It's NOT for you if..." header
- **AND** a red X icon is displayed
- **AND** 5 disqualifying statements are listed
- **AND** each statement has a red indicator

#### Scenario: For You card displays correctly
- **WHEN** the qualifier card is rendered
- **THEN** the card has "It's FOR you if..." header
- **AND** a green checkbox icon is displayed
- **AND** 5 qualifying statements are listed
- **AND** each statement has a green indicator

#### Scenario: For Me section has encouraging footer
- **WHEN** both cards are rendered
- **THEN** a footer message "this course was made for you." is displayed below

#### Scenario: For Me cards are responsive
- **WHEN** the viewport is desktop size (1024px+)
- **THEN** the two cards are displayed side by side
- **WHEN** the viewport is tablet or mobile size
- **THEN** the cards stack vertically
- **AND** the "NOT for you" card appears first

### Requirement: Reusable Comparison Card Component
The landing page SHALL provide a reusable card component for displaying comparison content with icons and lists.

#### Scenario: Comparison card renders with red variant
- **WHEN** a ComparisonCard is rendered with type="negative"
- **THEN** the card displays with red accent styling
- **AND** list items have red X indicators

#### Scenario: Comparison card renders with green variant
- **WHEN** a ComparisonCard is rendered with type="positive"
- **THEN** the card displays with green accent styling
- **AND** list items have green check indicators

### Requirement: Reusable Module Card Component
The landing page SHALL provide a reusable card component for displaying course module information.

#### Scenario: Module card renders all content areas
- **WHEN** a ModuleCard is rendered with complete props
- **THEN** the icon is displayed in the header area
- **AND** the module number badge is visible
- **AND** the title is prominent
- **AND** the description is readable
- **AND** bullet points are properly formatted

#### Scenario: Module card has hover interaction
- **WHEN** a user hovers over a module card on desktop
- **THEN** the card has a subtle visual feedback (scale, border glow, or shadow)
