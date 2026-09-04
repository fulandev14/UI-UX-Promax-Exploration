# Master Frontend Implementation Rules Using UI-Styling

Use the **`ui-styling` skill** as the primary implementation skill for translating approved visual design into frontend code.

This project already has:

* `BRAND-GUIDELINES.md`
* `DESIGN-SYSTEM.md`
* approved visual benchmarks for individual sections
* an existing frontend codebase that may already contain previously implemented sections

This phase is an **implementation phase**, not a design exploration phase.

The visual direction has already been approved.

Your responsibility is to translate the approved brand, design system, and section visual benchmarks into frontend code with maximum fidelity, consistency, maintainability, and minimum unnecessary divergence.

---

# 1. Technical Stack

Use the existing project stack:

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**

This stack is authoritative.

Do not migrate away from it.

Do not introduce another frontend framework.

Do not replace Tailwind CSS.

Do not introduce a new UI framework unless it already exists in the project or is explicitly required.

---

# 2. Project Instructions and Next.js Documentation

Before making implementation decisions:

1. Read `AGENTS.md`.
2. Follow all project-specific instructions defined there.
3. Inspect `package.json`.
4. Determine the installed Next.js version.
5. Read the relevant local Next.js documentation from:

```text
node_modules/next/dist/docs/
```

when required by `AGENTS.md` or when a framework-specific implementation decision must be verified.

Use the locally installed documentation rather than relying on assumptions about Next.js behavior.

Do not use patterns incompatible with the actual installed Next.js version.

---

# 3. Core Reference Layers

Every implementation must be based on four reference layers.

## Layer 1 — BRAND-GUIDELINES.md

Defines:

* brand identity
* personality
* emotional character
* tone
* visual identity principles
* photography philosophy
* brand guardrails

Use it to determine:

> Does the implementation still feel like the approved brand?

---

## Layer 2 — DESIGN-SYSTEM.md

Defines:

* design tokens
* typography
* colors
* spacing
* grid
* layout principles
* breakpoints
* radius
* borders
* imagery rules
* motion principles
* interactions
* reusable visual patterns

Use it to determine:

> How should the approved visual direction be expressed systematically?

---

## Layer 3 — APPROVED SECTION VISUAL BENCHMARK

Defines the exact visual target for the section currently being implemented.

It controls:

* composition
* proportions
* hierarchy
* element placement
* image crop
* image scale
* whitespace
* visual density
* CTA placement
* relationship between typography and imagery

Use it to determine:

> What should this specific section look like?

---

## Layer 4 — EXISTING IMPLEMENTATION

Previously implemented sections and existing frontend primitives define:

* technical patterns
* reusable components
* layout primitives
* already implemented tokens
* naming conventions
* code structure
* responsive utilities

Use them only when compatible with the three approved references above.

Existing code must not override the approved visual target merely because it already exists.

---

# 4. Reference Responsibility Principle

Use this principle consistently:

> `BRAND-GUIDELINES.md` defines WHY the experience should feel the way it does.

> `DESIGN-SYSTEM.md` defines HOW the visual language should be reproduced systematically.

> The approved section benchmark defines WHAT the current section should look like.

> Existing implementation defines WHAT can be reused technically without compromising the approved design.

Do not merge these responsibilities.

---

# 5. Strict Conflict Resolution

When references appear to conflict, resolve them according to their responsibility.

Do not silently override one reference.

## Brand Conflict

If an implementation choice violates `BRAND-GUIDELINES.md`, preserve the approved composition while keeping the brand identity intact.

Do not introduce visual treatments that contradict brand guardrails.

## Design-System Conflict

If the benchmark implies something already defined systematically by `DESIGN-SYSTEM.md`, use the design-system rule rather than inventing arbitrary values.

The benchmark defines the relationship.

The design system defines the implementation rule.

## Benchmark vs Existing Component

If an existing component cannot reproduce the approved benchmark faithfully, do not force reuse.

Either:

* use another compatible primitive
* create a justified reusable variant
* create a minimal section-specific implementation

## Existing Implementation vs Current Benchmark

If a previously implemented pattern conflicts with the current approved benchmark, the current approved benchmark controls section composition.

Reuse only compatible underlying primitives.

## Missing Design-System Rule

If a benchmark contains a behavior not explicitly defined in `DESIGN-SYSTEM.md`:

1. determine whether it is already implied by an existing token
2. determine whether it is reusable
3. extend the system only if genuinely reusable
4. otherwise use the smallest necessary section-specific rule

Do not create tokens for every local visual decision.

---

# 6. No Silent Visual Overrides

Never replace approved decisions for convenience.

Do not arbitrarily change:

* typography
* color
* image treatment
* composition
* spacing logic
* grid behavior
* asymmetry
* CTA hierarchy
* brand tone

If a conflict cannot be resolved cleanly, report it explicitly.

---

# 7. Inspect the Existing Project First

Before implementation, inspect:

* `AGENTS.md`
* `package.json`
* Next.js version
* routing architecture
* local Next.js documentation
* project folder structure
* Tailwind configuration
* global styles
* CSS variables
* design tokens
* typography setup
* reusable React components
* image assets
* navigation patterns
* breakpoint conventions
* installed dependencies
* animation libraries
* utility classes
* naming conventions

Do not impose assumptions before understanding the project.

---

# 8. Respect Existing Next.js Architecture

Determine whether the project uses:

* App Router
* Pages Router

Do not migrate between them.

If App Router is used, preserve:

* `app/`
* layouts
* server/client boundaries
* metadata conventions
* route structure

If Pages Router is used, preserve:

* `pages/`
* layout conventions
* routing patterns

Do not introduce a second routing paradigm.

---

# 9. React Rules

Prefer Server Components when appropriate.

Use Client Components only when actual interaction requires them, such as:

* event handlers
* client-side state
* browser APIs
* interactive menus
* client-only animation

Do not add `"use client"` unnecessarily.

Keep client boundaries as small as practical.

---

# 10. TypeScript Rules

Use TypeScript for all new implementation code.

Requirements:

* avoid `any` unless unavoidable and documented
* type component props properly
* use inference where obvious
* avoid unnecessary generic abstractions
* do not suppress errors merely to finish implementation

Avoid:

```text
@ts-ignore
@ts-nocheck
```

unless genuinely required and explicitly documented.

The implementation must pass the project's TypeScript checks.

---

# 11. Tailwind CSS Rules

Use the project's existing Tailwind conventions.

Inspect:

* Tailwind version
* theme configuration
* CSS variables
* existing design-system mapping
* breakpoints
* utility conventions
* custom utilities

Prefer:

```text
existing design tokens
        ↓
existing Tailwind utilities
        ↓
existing reusable project utilities
        ↓
minimal arbitrary values only when necessary
```

Avoid excessive one-off arbitrary classes if the design system already defines the same value.

Do not duplicate the design system inside unrelated Tailwind-only values.

---

# 12. Design Token Strategy

`DESIGN-SYSTEM.md` remains authoritative.

Prefer:

```text
DESIGN-SYSTEM token
        ↓
CSS variable
        ↓
Tailwind theme / utility
        ↓
component
```

Do not create parallel token systems.

When adding a new token, verify that it is:

* genuinely missing
* reusable
* consistent with the design system

---

# 13. Typography Rules

Use approved typography from `DESIGN-SYSTEM.md`.

Do not invent:

* font families
* font sizes
* font weights
* line-heights
* tracking
* local typography systems

unless the approved benchmark genuinely requires an undefined reusable rule.

Preserve:

* typography hierarchy
* intentional line breaks
* text/image relationships
* editorial rhythm
* whitespace around type

---

# 14. Color Rules

Use only approved colors and semantic roles.

Do not introduce arbitrary:

* hex values
* gradients
* shadows
* overlays
* opacity treatments

unless required by an approved benchmark and not already represented in the system.

---

# 15. Grid and Spacing Rules

Use the grid and spacing system from `DESIGN-SYSTEM.md`.

Preserve:

* container behavior
* column relationships
* gutters
* section rhythm
* negative space
* intentional offsets
* image breakouts
* asymmetry

Do not reproduce visual benchmarks through scattered magic numbers.

Remember:

> Break the grid intentionally, never accidentally.

---

# 16. Image Rules

Use the photography and imagery direction established by:

* `BRAND-GUIDELINES.md`
* `DESIGN-SYSTEM.md`
* approved benchmark

Preserve:

* crop
* focal point
* scale
* aspect ratio
* object positioning
* softness
* tone
* relationship with typography

Framework image optimization must not change the intended composition.

---

# 17. Asset Fidelity & Fallback 

When implementing a section, use the exact assets referenced by the approved visual benchmark whenever those assets are available in the project.

Before substituting any image or media asset:

Search the existing project assets.
Check whether the exact asset used by the approved benchmark already exists.
Check whether an equivalent approved asset is referenced by BRAND-GUIDELINES.md, DESIGN-SYSTEM.md, or the current section benchmark.
Reuse the exact matching asset whenever possible.

Do not replace an approved benchmark asset with a visually similar but different asset merely for convenience.

The approved benchmark defines not only the layout, but also the intended photographic subject, framing, atmosphere, color balance, and visual weight of the image.

If the Asset Cannot Be Found

If the exact asset referenced by the approved benchmark cannot be found in the existing project:

use the exact same visual asset shown in the approved visual benchmark that is being targeted for frontend implementation, whenever that asset can be recovered or reused from the available project/reference materials.

Do not automatically replace it with:

a stock image
a generic placeholder
another salon image
an image with a different model
an image with different lighting
an image with different color grading
an image with a different crop or visual weight

The fallback priority is:

Exact project asset
        ↓
Exact asset referenced by the approved benchmark
        ↓
Exact approved source/reference asset available in project materials
        ↓
Only if none of the above is available:
report the missing asset before using any substitute

Do not silently substitute imagery.

Asset Match Requirements

When using or recovering an asset from the approved benchmark, preserve:

subject identity
pose
treatment/activity
hairstyle
facial orientation
lighting
color grading
softness
crop
focal point
framing
aspect ratio
visual density
relationship with nearby typography

The goal is to preserve the same visual target, not merely a similar category of image.

Benchmark Asset Priority

If the benchmark uses a specific visual asset and the existing project contains a different asset that would materially change the composition, the benchmark asset has priority for visual fidelity.

Existing assets should only be preferred when they match the approved target sufficiently closely.

Do not let convenience or file availability redefine the approved art direction.

Missing Asset Handling

If the exact asset is genuinely unavailable and cannot be recovered from the available references:

do not silently invent a replacement
report which asset is missing
describe where it is used
explain how its absence affects benchmark fidelity
continue only with the smallest temporary fallback necessary if implementation cannot proceed otherwise

Any temporary fallback must be explicitly marked as:

TEMPORARY ASSET — NOT VISUALLY APPROVED

The section must not receive Benchmark Fidelity: PASS while a visually significant temporary asset remains.

Asset Acceptance Criteria

For visually significant benchmark assets:

exact or approved-equivalent asset used: required
unintended placeholder assets: 0
silent image substitutions: 0
broken image references: 0
materially incorrect crops: 0
materially incorrect focal points: 0

If a required visual asset differs materially from the approved benchmark, classify:

Benchmark Fidelity: MINOR DIFFERENCES or FAIL

depending on its visual impact.

--


# 18. Responsive Rules

Do not merely shrink desktop layouts.

Responsive implementation must preserve:

* hierarchy
* brand identity
* typography character
* image emphasis
* spacing rhythm
* storytelling
* intentional composition

Recompose when necessary.

Mobile must feel like the same art direction, not a generic stacked fallback.

---

# 19. Component Reuse Rules

Reuse existing components only when they can reproduce the approved visual target faithfully.

Use this decision:

```text
Can existing primitive reproduce the target?
        ↓
YES → reuse

NO
        ↓
Can a clean reusable variant solve it?
        ↓
YES → extend carefully

NO
        ↓
Create a minimal section-specific implementation
```

Do not force reuse at the expense of visual fidelity.

Do not create duplicate primitives when compatible ones already exist.

---

# 20. DRY / KISS / YAGNI

Follow:

* DRY
* KISS
* YAGNI

Do not over-generalize visual components.

Do not create abstractions for future sections that do not yet need them.

A shared primitive should exist because it is genuinely reusable.

---

# 21. Dependency Rules

Before adding any dependency:

1. inspect existing dependencies
2. check whether the capability already exists
3. determine whether React, Next.js, CSS, or Tailwind can solve the requirement
4. add a dependency only when clearly justified

Do not add heavy libraries for small effects.

Reuse existing animation libraries when appropriate.

---

# 22. Implementation Philosophy

The design phase is already complete.

Do not:

* redesign sections
* explore alternative compositions
* introduce new typography
* introduce new colors
* alter approved art direction
* reinterpret approved visual targets without necessity

Your role is:

> **translation, not invention.**

---

# 23. Visual Continuity Between Sections

When implementing any new section:

Use all previously approved and implemented sections as continuity references.

They are not templates to copy.

Study them to preserve:

* typography behavior
* color behavior
* imagery treatment
* spacing rhythm
* grid logic
* visual density
* art direction
* responsive conventions

Do not mechanically repeat their layouts.

The current section must remain distinct while still belonging to the same visual system.

---

# 24. Change Safety

Do not modify previously approved sections unless a shared-system issue genuinely requires it.

If a shared primitive must change:

* minimize the scope
* verify visual regressions
* preserve approved output
* report the change explicitly

Do not refactor unrelated application code as part of a section implementation.

---

# 25. Global Validation Requirements

Every implemented section must be validated for:

* brand consistency
* design-system compliance
* approved benchmark fidelity
* existing implementation compatibility
* responsive behavior
* TypeScript correctness
* runtime stability
* accessibility
* scope control

Do not consider visual similarity alone sufficient.

---

# 26. Global Acceptance Requirements

Every section must reach at least:

* `0 unresolved brand conflicts`
* `0 undocumented design-system overrides`
* `0 critical responsive defects`
* `0 runtime errors introduced by the section`
* `0 accidental horizontal overflow`
* `0 out-of-scope section implementations`
* `0 unnecessary framework or styling-system migrations`

Any meaningful deviation from the approved benchmark must be reported.

---

# 27. Standard Target Viewports

Validate at minimum:

* **1440px desktop**
* **1280px laptop**
* **768px tablet**
* **390px mobile**

At every target width verify:

* no broken layout
* no clipped content
* no unintended overlap
* no image distortion
* no unreadable typography
* no accidental horizontal scrollbar
* accessible primary interactions

---

# 28. Standard Implementation Workflow

For every requested section, follow:

```text
READ USER REQUEST
        ↓
IDENTIFY CURRENT SECTION
        ↓
READ BRAND-GUIDELINES.md
        ↓
READ DESIGN-SYSTEM.md
        ↓
READ CURRENT APPROVED BENCHMARK
        ↓
INSPECT PREVIOUS IMPLEMENTATION
        ↓
RESOLVE REFERENCE RESPONSIBILITIES
        ↓
IMPLEMENT CURRENT SECTION
        ↓
RUN PROJECT
        ↓
TYPE + RUNTIME CHECK
        ↓
VISUAL COMPARISON
        ↓
RESPONSIVE CHECK
        ↓
REFERENCE-CONFLICT AUDIT
        ↓
FIX DISCREPANCIES
        ↓
READY FOR REVIEW
        ↓
STOP
```

Never automatically continue to another section.

Wait for explicit user approval or instruction.

---

# 29. Final Principle

The final implementation must achieve:

> **Maximum fidelity to the approved visual benchmark, maximum consistency with the design system, maximum alignment with the brand identity, maximum compatibility with the existing Next.js + React + TypeScript + Tailwind CSS architecture, and minimum unnecessary divergence from the existing frontend.**
