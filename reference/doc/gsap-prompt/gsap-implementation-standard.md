# GSAP IMPLEMENTATION STANDARD

Use the installed official GSAP skills for motion implementation.

## Source of Truth

Before implementing animation for any requested section, always read:

1. `motion-direction-plan.md`
2. `MOTION-SYSTEM.md`
3. `BRAND-GUIDELINES.md`
4. `DESIGN-SYSTEM.md`
5. the approved visual benchmark for the requested section
6. the existing implementation of the requested section
7. previously approved GSAP implementations when relevant for technical consistency

### Section-level motion authority

`motion-direction-plan.md` is the authoritative source for deciding **what motion must be implemented for each section**.

For the section requested by the user:

1. Locate the corresponding section in `motion-direction-plan.md`.
2. Read its complete motion specification.
3. Implement the defined:

   * motion intent
   * animation hierarchy
   * animated elements
   * trigger
   * GSAP technique
   * required GSAP skills
   * timing/easing direction
   * desktop behavior
   * mobile behavior
   * reduced-motion behavior
   * performance requirements
4. Do not silently omit planned motion unless it is technically impossible or conflicts with accessibility/performance requirements.
5. Do not redesign or invent a completely different animation concept when a section-specific plan already exists.

`MOTION-SYSTEM.md` defines the global motion language and implementation constraints.

The Motion Direction Plan determines **what happens**.

The Motion System determines **how it should feel and behave consistently**.

---

# GSAP Skill Routing

Do not use every GSAP skill automatically.

The required skills must be determined primarily from the requested section's specification in `motion-direction-plan.md`.

Foundation skills:

* `gsap-core`
* `gsap-react`
* `gsap-performance`

Conditionally use:

### `gsap-timeline`

Use when the section plan requires:

* sequencing
* choreography
* coordinated multi-element entrances
* state transitions

### `gsap-scrolltrigger`

Use when the section plan requires:

* viewport entry
* scroll progress
* pinning
* scrub
* parallax
* horizontal scroll journeys

### `gsap-utils`

Use only when utilities such as:

* `toArray`
* `clamp`
* `mapRange`
* `snap`

meaningfully simplify the planned implementation.

### `gsap-plugins`

Use only when the Motion Direction Plan or a demonstrated implementation requirement justifies a GSAP plugin.

Do not introduce plugins merely to make the animation appear more sophisticated.

Do not use `gsap-frameworks`.

This project uses React + Next.js and must follow `gsap-react`.

---

# Implementation Requirement

When the user says:

> Implement GSAP animation for the [SECTION] section.

This means:

> Implement the complete approved GSAP motion specification for `[SECTION]` from `motion-direction-plan.md`.

It does NOT mean:

> Re-plan the section or decide whether the section needs animation.

Every section defined in the Motion Direction Plan is expected to receive its planned GSAP motion treatment.

Only the GSAP skills and techniques required by that particular section should be used.

---

# React / Next.js Requirements

For every animated React section:

* use `useGSAP()`
* use a scoped root ref
* scope selectors to the section
* clean up GSAP contexts correctly
* register required plugins outside React render cycles
* preserve Server Components wherever possible
* introduce the smallest necessary Client Component boundary
* do not convert the complete page into a Client Component
* use `gsap.matchMedia()` where responsive or reduced-motion behavior differs

If the existing section is a Server Component and GSAP requires client-side execution, introduce the smallest appropriate client motion boundary.

---

# Visual Preservation

The frontend visual design is already approved.

Do not change:

* layout
* typography
* colors
* imagery
* spacing
* content
* responsive composition

unless technically required for the animation implementation.

GSAP is the motion layer only.

The final static state must remain visually identical to the approved implementation.

---

# Motion Visibility

The implemented motion must be clearly perceptible while remaining consistent with the premium, restrained Atelier Elan motion language.

Do not produce animations so subtle that the planned motion becomes visually indistinguishable from the static implementation.

At the same time, do not exaggerate:

* translation
* scale
* parallax
* stagger
* duration

beyond the limits established by `MOTION-SYSTEM.md` and `motion-direction-plan.md`.

---

# Acceptance Criteria

Before considering a section complete, verify:

1. The section actually executes GSAP animation in the browser.
2. The implemented motion matches the corresponding section specification in `motion-direction-plan.md`.
3. Only relevant GSAP skills are used.
4. Animation is visibly perceptible.
5. Static final layout remains unchanged.
6. Desktop behavior matches the motion plan.
7. Mobile behavior matches the motion plan.
8. `prefers-reduced-motion` produces the correct static fallback.
9. No unnecessary layout properties are animated.
10. No global selectors leak into other sections.
11. Timelines and ScrollTriggers clean up correctly.
12. No horizontal overflow, layout shift, hydration issue, or scroll jank is introduced.

After implementation, briefly report:

* GSAP skills used
* planned animations implemented
* files modified
* responsive behavior
* reduced-motion behavior
* any planned motion intentionally omitted and the reason