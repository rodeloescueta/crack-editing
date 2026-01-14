# Landing Page Specification - Phase 3 Delta

## ADDED Requirements

### Requirement: What You Get Section
The landing page SHALL display a features section highlighting what's included in the course.

#### Scenario: What You Get section renders with headline and grid
- **WHEN** the what-you-get section loads
- **THEN** the headline "what you get" is displayed with purple gradient
- **AND** subtext describes the complete step-by-step system
- **AND** 6 feature cards are displayed in a grid

#### Scenario: Feature cards display correctly
- **WHEN** feature cards are rendered
- **THEN** each card has a purple icon
- **AND** each card has a title
- **AND** each card has a description
- **AND** cards are centered within their container

#### Scenario: Feature grid is responsive
- **WHEN** the viewport is desktop size (1024px+)
- **THEN** features display in a 3-column grid
- **WHEN** the viewport is tablet size (768px)
- **THEN** features display in a 2-column grid
- **WHEN** the viewport is mobile size (375px)
- **THEN** features display in a 1-column stack

### Requirement: Meet The Creators Section
The landing page SHALL display a section introducing the course creators with their credentials.

#### Scenario: Creators section renders with headline and content
- **WHEN** the creators section loads
- **THEN** a badge "MEET THE CREATORS" is displayed
- **AND** the headline "It's taken 25+ combined years to master this craft." is displayed
- **AND** "25+ combined years" has orange gradient styling

#### Scenario: Creator information displays correctly
- **WHEN** the creators section is rendered
- **THEN** a Limitless.INC logo or placeholder is visible
- **AND** bio information for AJ Kumar is displayed
- **AND** bio information for Josh Bill is displayed

#### Scenario: Stats grid displays correctly
- **WHEN** the stats grid is rendered
- **THEN** 4 stat cards are displayed in a 2x2 grid
- **AND** each card shows a large number (15+, 3B+, 10+, 100+)
- **AND** each card shows a label describing the stat
- **AND** relevant cards show attribution (AJ Kumar, Josh Bill, For Clients)

#### Scenario: Brand logos display correctly
- **WHEN** the brand logos section is rendered
- **THEN** brand names/logos are displayed in a row
- **AND** brands include Google, MailChimp, Adobe, HSN, Absolut Vodka, Intuit, Bravo, Core Power

#### Scenario: Creators section is responsive
- **WHEN** the viewport is mobile size
- **THEN** the logo and bio content stack vertically
- **AND** stats grid adapts to available width
- **AND** brand logos wrap or scroll appropriately

### Requirement: Pricing Section
The landing page SHALL display a pricing section with the course investment details.

#### Scenario: Pricing section renders with headline
- **WHEN** the pricing section loads
- **THEN** the headline "turn a small investment into a skill you can use for years" is displayed
- **AND** "you can use for years" has orange gradient styling
- **AND** subtext about value proposition is displayed

#### Scenario: Pricing card displays correctly
- **WHEN** the pricing card is rendered
- **THEN** a "ONE-TIME INVESTMENT" badge is visible
- **AND** the price "$297" is prominently displayed
- **AND** payment option "or 3 payments of $99" is shown
- **AND** 8 features with checkmarks are listed
- **AND** a CTA button "enroll in crack editing™" is visible

#### Scenario: Pricing card features list correctly
- **WHEN** the pricing card features are rendered
- **THEN** features include: 5-hour self-paced training, Real video breakdowns, Practice tools & examples, Ongoing updates, 6 comprehensive modules, Full editing framework, Lifetime access, 30-day money-back guarantee

#### Scenario: Pricing section has value footer
- **WHEN** the pricing section is fully rendered
- **THEN** a footer message about ROI is displayed below the card

#### Scenario: Pricing section is responsive
- **WHEN** the viewport is mobile size
- **THEN** the pricing card takes full width with padding
- **AND** the features list may stack to single column
- **AND** the CTA button is appropriately sized

### Requirement: FAQ Section
The landing page SHALL display a FAQ section with expandable question/answer pairs.

#### Scenario: FAQ section renders with accordion
- **WHEN** the FAQ section loads
- **THEN** 7 FAQ items are displayed as collapsed accordion items
- **AND** each item shows a question with expand/collapse indicator

#### Scenario: FAQ questions are correct
- **WHEN** the FAQ accordion is rendered
- **THEN** questions include:
  - What exactly will I get when I enroll?
  - How is this different from other editing courses?
  - Do I need specific software to take this course?
  - How much time should I expect to spend on this?
  - Will this help with client work?
  - Will this make my videos go viral?
  - What if this isn't a good fit for me?

#### Scenario: FAQ accordion expands and collapses
- **WHEN** a user clicks on a FAQ item
- **THEN** the item expands to show the answer
- **AND** the expand animation is smooth
- **WHEN** the user clicks again or clicks another item
- **THEN** the item collapses smoothly

#### Scenario: FAQ section has CTA
- **WHEN** the FAQ section is fully rendered
- **THEN** a CTA button "enroll in crack editing™" is visible below the accordion

### Requirement: Footer Section
The landing page SHALL display a footer with navigation links and company information.

#### Scenario: Footer renders with navigation links
- **WHEN** the footer loads
- **THEN** links for Privacy Policy, Fulfillment Policy, and Careers are displayed
- **AND** links are clickable (or display as text placeholders)

#### Scenario: Footer displays contact information
- **WHEN** the footer is rendered
- **THEN** support email "hello@limitless.inc" is displayed
- **AND** the email is formatted as a clickable link

#### Scenario: Footer displays company information
- **WHEN** the footer is rendered
- **THEN** copyright text "©2026 The Limitless Company" is displayed
- **AND** address "6600 Sunset Blvd, Los Angeles CA 90028" is displayed

#### Scenario: Footer is responsive
- **WHEN** the viewport is mobile size
- **THEN** footer content stacks appropriately
- **AND** all text remains readable
- **AND** links have adequate touch target size

### Requirement: Reusable Feature Card Component
The landing page SHALL provide a reusable card component for displaying feature items.

#### Scenario: Feature card renders with all elements
- **WHEN** a FeatureCard is rendered with icon, title, and description
- **THEN** the icon is displayed with purple styling
- **AND** the title is displayed prominently
- **AND** the description is displayed below the title

### Requirement: Reusable Stat Card Component
The landing page SHALL provide a reusable card component for displaying statistics.

#### Scenario: Stat card renders with all elements
- **WHEN** a StatCard is rendered with value, label, and attribution
- **THEN** the value is displayed in large, colored text
- **AND** the label is displayed below the value
- **AND** the attribution is displayed if provided

#### Scenario: Stat card handles large numbers
- **WHEN** a StatCard displays values like "3B+"
- **THEN** the text does not overflow the card
- **AND** the formatting is consistent across all stat cards
