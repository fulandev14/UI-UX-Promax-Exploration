# Create a Production-Ready Design System for a Premium Beauty Salon

Use the **`design-system` skill** as the primary skill for this task.

Use **UI UX Pro Max** only as supporting design intelligence when necessary. Do not allow external recommendations to override the approved creative direction defined below.

The objective is to create a complete, coherent, scalable, and production-ready design system for a **premium high-end beauty salon website**.

This is **not a generic salon, spa, wellness, SaaS, or corporate website**.

The experience should feel like a carefully art-directed combination of:

**Luxury Beauty Editorial × Contemporary Fashion Magazine × Minimal Swiss Design × Cinematic Brand Experience × Nature-Inspired Hospitality**

The final design system must be distinctive enough to support an immersive, premium website while remaining practical and maintainable during frontend implementation.

---

# 1. Core Creative Direction

The following keywords are mandatory and must directly influence the design system:

1. **Asymmetric Layout**
2. **Cinematic Imagery**
3. **Art Direction**
4. **Immersive Interactive Storytelling**
5. **Editorial Grid / Magazine**
6. **Parallax Storytelling**
7. **Nature Distilled**
8. **Bold Typography Mobile**
9. **Minimal Swiss**
10. **Scroll-Triggered Storytelling**
11. **Horizontal Scroll Journey**

Do not treat these as decorative keywords.

Translate each keyword into explicit rules for:

* layout
* grid
* typography
* imagery
* spacing
* composition
* motion
* responsive behavior
* interaction
* section transitions
* component behavior

---

# 2. Brand Positioning

The salon should feel:

* Premium
* Expensive
* Sophisticated
* Comfortable
* Calm
* Intimate
* Contemporary
* Artistic
* Editorial
* Natural
* Confident
* Exclusive without being intimidating

The customer should perceive the salon as a carefully curated **beauty experience**, rather than simply a place that provides beauty treatments.

The visual experience should communicate:

> Beauty as craftsmanship, ritual, atmosphere, and personal experience.

The website should feel closer to a premium fashion editorial, boutique hotel, contemporary gallery, or luxury beauty campaign than a conventional salon website.

---

# 3. Design Philosophy

Establish the system around the following principles:

### Editorial, not template-driven

Every major section should feel deliberately composed.

Avoid repeating identical:

`container → heading → paragraph → cards`

patterns throughout the website.

Sections may use different compositions while sharing the same underlying design tokens.

### Asymmetric, but intentional

Use asymmetric compositions, offset columns, irregular image placement, typography positioning, and controlled negative space.

Asymmetry must improve hierarchy and visual tension.

It must never feel accidental or chaotic.

### Minimal Swiss foundation

Use Swiss design principles as the structural foundation:

* strong grid discipline
* typography-led hierarchy
* functional simplicity
* precise alignment
* rational spacing
* restrained decoration
* high readability

Then deliberately break the grid where the art direction requires visual tension.

Think:

**Structured foundation + controlled editorial disruption.**

### Luxury through restraint

Do not communicate luxury through excessive decoration.

Luxury must come from:

* proportion
* typography
* whitespace
* photography
* materials
* movement
* composition
* pacing
* craftsmanship
* attention to detail

---

# 4. Nature Distilled

Interpret **Nature Distilled** as a sophisticated abstraction of nature rather than literal botanical decoration.

The visual system may draw inspiration from:

* stone
* mineral
* sand
* clay
* linen
* wood
* skin
* water
* shadow
* natural light
* earth
* botanical forms

Translate these references into:

* restrained natural colors
* tactile surfaces
* subtle texture
* organic photography
* natural lighting
* material close-ups
* soft tonal transitions
* occasional organic shapes

Avoid:

* obvious leaf decorations
* generic spa imagery
* green-heavy wellness templates
* botanical clip art
* excessive organic blobs

Nature should be **distilled into atmosphere and materiality**.

---

# 5. Color System

Create a restrained luxury color system inspired by natural materials.

Explore a palette around:

* warm ivory
* bone
* soft cream
* stone
* sand
* taupe
* clay
* muted botanical tones
* espresso
* charcoal
* near-black

Use accent colors sparingly.

Define both primitive and semantic color tokens.

At minimum define:

* `background-primary`
* `background-secondary`
* `background-tertiary`
* `background-inverse`
* `surface-primary`
* `surface-elevated`
* `text-primary`
* `text-secondary`
* `text-muted`
* `text-inverse`
* `border-subtle`
* `border-strong`
* `accent-primary`
* `accent-secondary`
* `interactive-default`
* `interactive-hover`
* `interactive-active`
* `interactive-focus`

Document contrast and accessibility requirements.

Do not introduce arbitrary colors outside the token system.

---

# 6. Typography System

Typography must be one of the strongest elements of the brand.

Combine the discipline of **Minimal Swiss typography** with expressive beauty-editorial typography.

Explore a pairing between:

**Modern Grotesk / Neo-Grotesk**
+
**Sophisticated Editorial Serif**

The grotesk should provide:

* confidence
* precision
* modernity
* navigation clarity
* strong display typography

The serif may provide:

* elegance
* intimacy
* editorial contrast
* beauty/fashion character

Do not overuse the serif.

## Typography Scale

Define:

* Display XL
* Display L
* H1
* H2
* H3
* H4
* Lead
* Body Large
* Body
* Body Small
* Caption
* Eyebrow
* Navigation
* Button
* Editorial Number

For each specify:

* font family
* font size
* weight
* line height
* letter spacing
* text transformation
* intended usage
* desktop behavior
* tablet behavior
* mobile behavior

Prefer fluid typography using `clamp()` where appropriate.

---

# 7. Bold Typography Mobile

Mobile must not become a simplified generic version of desktop.

**Bold Typography Mobile** is a core creative principle.

Large editorial typography should remain visually impactful on smaller screens.

Create explicit rules for:

* oversized mobile headlines
* controlled line breaking
* viewport-aware typography
* short editorial headlines
* text/image relationships
* vertical rhythm
* mobile negative space

Avoid shrinking desktop typography until it loses personality.

Instead, **recompose typography specifically for mobile**.

Typography may intentionally occupy substantial viewport space when appropriate.

Readability and accessibility remain mandatory.

---

# 8. Editorial Grid / Magazine System

Create an editorial grid inspired by premium magazines and Swiss graphic design.

Desktop should support approximately:

**12-column editorial grid**

while tablet and mobile progressively simplify.

Define:

* page max width
* full-width container
* content container
* reading container
* grid columns
* column gaps
* page gutters
* section margins
* full-bleed behavior
* image breakout behavior
* offset columns

Support compositions such as:

```text
TEXT        IMAGE IMAGE IMAGE
TEXT        IMAGE IMAGE IMAGE
            IMAGE IMAGE IMAGE
```

and:

```text
             HEADING
             HEADING

IMAGE IMAGE      BODY
IMAGE IMAGE      BODY
```

and intentional full-bleed compositions.

Do not force every section into symmetrical 50/50 layouts.

---

# 9. Asymmetric Layout System

Define reusable rules for asymmetric composition.

Examples:

* offset headings
* uneven column proportions
* image/text imbalance
* intentionally empty columns
* overlapping editorial content
* controlled breakout imagery
* staggered visual blocks
* typography crossing grid boundaries

However, avoid arbitrary positioning.

All asymmetric compositions should still derive from the underlying grid.

The principle is:

> Break the grid intentionally, never accidentally.

---

# 10. Cinematic Imagery

Photography must be treated as a first-class design-system element.

Define an explicit photography system for:

### Beauty

* editorial portraits
* natural skin texture
* hair texture
* subtle expressions
* close-up beauty details

### Treatment

* hands performing treatments
* craftsmanship
* hair movement
* tools used elegantly
* authentic treatment moments

### Environment

* cinematic salon interiors
* architectural details
* mirrors
* reflections
* lighting
* materials
* furniture

### Atmosphere

* shadows
* sunlight
* fabric
* water
* stone
* movement
* blurred foreground elements
* abstract material details

Define:

* image aspect ratios
* cropping behavior
* object positioning
* full-bleed usage
* portrait framing
* image overlays
* image/text interaction
* responsive crops
* focal-point preservation

Avoid generic stock photography.

Images should feel like frames from a **luxury beauty campaign or cinematic brand film**.

---

# 11. Art Direction System

Every page should feel art-directed rather than assembled from components.

Define rules for creating visual rhythm across sections.

Alternate between:

* typography-dominant sections
* cinematic imagery
* intimate editorial content
* whitespace-heavy compositions
* immersive storytelling
* service information
* horizontal journeys
* quiet moments
* dramatic moments

Do not make every section visually loud.

Use contrast between:

**quiet → dramatic → quiet → immersive → informative → emotional**

to create pacing.

---

# 12. Immersive Interactive Storytelling

The website should communicate a story as users progress through it.

Interaction must support the narrative rather than exist as decoration.

Possible narrative:

```text
INTRODUCTION
     ↓
PHILOSOPHY
     ↓
CRAFT
     ↓
TREATMENTS
     ↓
ATMOSPHERE
     ↓
EXPERIENCE
     ↓
RESULT
     ↓
BOOKING
```

Define how:

* typography
* imagery
* whitespace
* motion
* section transitions
* sticky content
* scroll progress

can reinforce this journey.

---

# 13. Scroll-Triggered Storytelling

Create explicit principles for scroll-triggered interactions.

Potential patterns:

* typography reveals
* image mask reveals
* controlled image scaling
* sequential content reveals
* sticky editorial sections
* staggered text
* background transitions
* image transitions
* subtle opacity changes
* section progress indicators

Animations must be:

* intentional
* smooth
* cinematic
* restrained
* performant

Never animate everything simply because it can be animated.

---

# 14. Parallax Storytelling

Use parallax selectively to create depth.

Potential applications:

* foreground/background image separation
* subtle image drift
* typography/image depth
* atmospheric imagery
* material close-ups
* layered hero composition

Parallax movement should be subtle.

Avoid exaggerated movement that makes the website feel like a technology demo.

Performance and accessibility take priority.

Provide fallbacks for:

`prefers-reduced-motion`.

---

# 15. Horizontal Scroll Journey

Create a reusable horizontal storytelling pattern for selected experiences.

Potential use cases:

* signature treatments
* salon philosophy
* transformation journey
* craftsmanship process
* salon environment
* editorial gallery

Example:

```text
VERTICAL SCROLL

        ↓

┌──────────────────────────────────────────────┐
│                                              │
│  01        02        03        04        05  │
│                                              │
│  CONSULT    CRAFT     CARE      RESULT        │
│                                              │
└──────────────────────────────────────────────┘

        →

HORIZONTAL STORY JOURNEY

        ↓

RETURN TO VERTICAL SCROLL
```

Do not use horizontal scrolling everywhere.

It should be a **signature storytelling device**, not the default layout.

Mobile behavior must be explicitly defined.

Do not simply reproduce desktop horizontal scrolling if it creates poor mobile usability.

---

# 16. Spacing System

Create a systematic spacing scale.

Define:

* micro spacing
* component spacing
* content spacing
* section spacing
* editorial spacing
* dramatic whitespace

Luxury layouts should have generous whitespace but should not feel arbitrarily empty.

Whitespace is an active composition tool.

Define responsive spacing behavior rather than using fixed desktop values everywhere.

---

# 17. Component System

Define reusable foundations for:

* Navigation
* Mobile navigation
* Primary CTA
* Secondary CTA
* Text links
* Editorial section headings
* Service presentation
* Treatment presentation
* Editorial image blocks
* Horizontal story sections
* Image galleries
* Testimonials
* Quotes
* Booking CTA
* Forms
* Input fields
* Select fields
* Date/time selection
* Footer
* Editorial pagination
* Scroll indicators

Components should inherit tokens rather than contain arbitrary styling.

Follow:

* DRY
* KISS
* YAGNI
* separation of concerns

Avoid unnecessary component abstraction.

---

# 18. Shape, Border, Radius and Shadow

Avoid excessive rounded cards.

The design should primarily rely on:

* composition
* whitespace
* imagery
* typography
* subtle borders

rather than floating card containers.

Define restrained tokens for:

* border width
* border color
* radius
* shadow
* elevation

Use large border radius only when it has an explicit art-direction purpose.

---

# 19. Motion System

Create reusable motion tokens.

Define:

* duration-fast
* duration-default
* duration-slow
* duration-cinematic
* easing-standard
* easing-enter
* easing-exit
* easing-editorial

Document appropriate usage.

Differentiate:

**Micro Interaction**

from

**Narrative Motion**

from

**Cinematic Transition**

Motion must not compromise:

* performance
* usability
* accessibility
* Core Web Vitals

---

# 20. Responsive Design

Create explicit responsive behavior for:

### Desktop

Allow maximum editorial freedom:

* asymmetric compositions
* horizontal journeys
* cinematic imagery
* oversized typography
* controlled grid breaking

### Tablet

Preserve the composition while simplifying complex spatial relationships.

### Mobile

Recompose rather than merely stack.

Preserve:

* bold typography
* cinematic imagery
* strong whitespace
* editorial hierarchy
* storytelling
* premium character

Some desktop interactions may be transformed into mobile-native alternatives.

---

# 21. Accessibility

Premium visual design must not compromise usability.

Ensure:

* WCAG-conscious contrast
* keyboard navigation
* visible focus states
* semantic HTML recommendations
* reduced-motion support
* readable typography
* sufficient touch targets
* accessible forms
* meaningful image alt-text strategy

Decorative motion must never block content access.

---

# 22. Design Guardrails

## ALWAYS

Always prioritize:

* strong art direction
* typography-led hierarchy
* editorial composition
* deliberate asymmetry
* cinematic imagery
* disciplined grids
* generous whitespace
* restrained luxury
* purposeful motion
* natural materiality
* clear interaction hierarchy
* responsive recomposition

## NEVER

Avoid:

* generic SaaS layouts
* centered hero + three feature cards
* repetitive card grids
* Bootstrap-looking sections
* excessive rounded cards
* glassmorphism
* glowing elements
* generic blue/purple gradients
* excessive gradients
* excessive shadows
* excessive badges
* excessive pills
* generic stock photography
* icon-heavy feature sections
* repetitive 50/50 image-text sections
* identical spacing across every section
* arbitrary animation
* generic spa templates
* obvious botanical decoration
* cliché gold-on-black luxury
* decorative complexity without purpose

Do not equate premium with decoration.

---

# 23. Token Architecture

Use a maintainable token hierarchy:

```text
PRIMITIVE TOKENS
        ↓
SEMANTIC TOKENS
        ↓
COMPONENT TOKENS
        ↓
COMPONENTS
        ↓
PAGE COMPOSITIONS
```

Avoid hardcoded values when a reusable token is appropriate.

However, do not create tokens for values that are genuinely one-off and unlikely to be reused.

Keep the architecture pragmatic.

---

# 24. Required Deliverable

Create:

`DESIGN-SYSTEM.md`

This document must become the **single source of truth** for all future frontend implementation.

Use this structure:

1. Brand & Design Philosophy
2. Creative Direction
3. Design Principles
4. Visual DNA
5. Color System
6. Typography System
7. Bold Typography Mobile
8. Spacing System
9. Editorial Grid System
10. Asymmetric Layout Rules
11. Imagery & Photography System
12. Nature Distilled Principles
13. Component System
14. Interaction System
15. Motion System
16. Scroll-Triggered Storytelling
17. Parallax Storytelling
18. Horizontal Scroll Journey
19. Responsive Behavior
20. Accessibility
21. Design Tokens
22. Design Guardrails
23. Do / Don't Examples
24. Implementation Guidelines

For every system, provide **actual implementable values**, not only conceptual descriptions.

Where relevant provide:

* CSS custom properties
* typography values
* `clamp()` formulas
* spacing tokens
* grid measurements
* breakpoints
* aspect ratios
* motion durations
* easing values

---

# 25. Final Validation

Before considering the design system complete, verify that every mandatory creative keyword has been translated into an explicit design rule:

* Asymmetric Layout
* Cinematic Imagery
* Art Direction
* Immersive Interactive Storytelling
* Editorial Grid / Magazine
* Parallax Storytelling
* Nature Distilled
* Bold Typography Mobile
* Minimal Swiss
* Scroll-Triggered Storytelling
* Horizontal Scroll Journey

If any keyword exists only as a description and does not affect actual design rules, revise the design system.

Finally, evaluate the system against this question:

> **If all photography and brand names were removed, would the layout, typography, spacing, composition, and interaction still feel distinctive and recognizable as this brand?**

If the answer is no, strengthen the art direction.

Do not implement the complete website yet.

Complete and validate `DESIGN-SYSTEM.md` first.
