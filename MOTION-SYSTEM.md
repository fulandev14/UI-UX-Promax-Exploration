# Atelier Elan Motion System

**Status:** Implementation reference  
**Version:** 1.0  
**Applies to:** Atelier Elan web experience, including the sections in `app/sections/`  
**Complements:** `BRAND-GUIDELINES.md`, `DESIGN-SYSTEM.md`, approved visual benchmarks in `reference/approved/`, and `reference/doc/gsap-prompt/motion-direction-plan.md`

This document defines how motion should behave across the Atelier Elan experience. It does not replace the brand, visual, content, component, or accessibility rules in the documents above. When a rule conflicts, the approved visual benchmark and `DESIGN-SYSTEM.md` remain authoritative for the final composition.

## 1. Motion Philosophy

Atelier Elan motion is **quietly intentional**. It should feel like attention being directed, a material settling into place, or a considered consultation unfolding. Motion is part of the editorial pacing, not an extra layer of spectacle.

The experience should feel:

- premium, calm, and assured;
- tactile without simulating physical effects excessively;
- cinematic without becoming theatrical;
- editorial without sacrificing clarity;
- responsive to the visitor rather than demanding attention.

Motion must reveal hierarchy, continuity, and evidence. It must never manufacture urgency, hide information, create beauty anxiety, or make a visitor wait for a usable control.

### Core principles

1. **Meaning before movement.** Every animation must clarify entry, sequence, focus, feedback, or transition.
2. **One dominant gesture per section.** Supporting motion stays subordinate to the section's main idea.
3. **Arrival before atmosphere.** Critical text, imagery, navigation, and booking actions become available immediately and then may settle into place.
4. **Material over effect.** Prefer opacity, transform, crop, mask, and measured depth over novelty filters or decorative physics.
5. **Editorial restraint.** A visitor should notice the composition and story before noticing the animation system.
6. **Static completeness.** All essential content and actions remain understandable without motion.
7. **Respectful pacing.** Motion is interruptible, reversible where useful, and never traps normal scrolling.

## 2. Motion Hierarchy

Motion intensity follows the page narrative established by the approved benchmarks:

| Priority | Sections | Motion role | Intensity |
|---|---|---|---|
| 1 | Hero | Establish arrival, authorship, and the first visual statement | Highest, still restrained |
| 2 | Gallery | Carry the visual journey through the approved film-track composition | High, scroll-led |
| 3 | About, Craftsmanship, Experience | Reveal philosophy, process, and atmosphere in reading order | Medium |
| 4 | Services, Testimonial | Support scanning, trust, and state change | Low to medium |
| 5 | Booking | Mark a calm transition from consideration to action | Medium, conversion-focused |
| 6 | Footer | Close the page without competing with the booking moment | Low |

### Element priority within a section

1. Section label or chapter marker.
2. Primary display heading or dominant image.
3. Supporting statement, quote, or service information.
4. Secondary evidence such as rows, captions, metadata, and rules.
5. Decorative atmosphere, background numerals, and progress accents.

Essential content enters first or alongside its supporting visual. Decorative content may lag slightly, but never by enough to imply that the page is waiting for it.

## 3. Duration System

The canonical CSS tokens remain defined in `DESIGN-SYSTEM.md`:

```css
:root {
  --duration-fast: 140ms;
  --duration-default: 240ms;
  --duration-slow: 480ms;
  --duration-cinematic: 900ms;
}
```

Use the smallest duration that preserves the intended reading rhythm.

| Motion class | Range | Use |
|---|---:|---|
| Micro | 140-240ms | Hover, focus, press, underline, opacity, small arrow movement |
| Interface | 240-360ms | Menu state, active control, compact content swap |
| Reveal | 480-700ms | Section copy, service rows, chapter groups, moderate image masks |
| Material | 600-900ms | Portrait arrival, image crop reveal, cinematic scene settling |
| Scroll-led | Visitor-controlled | Gallery translation, restrained background drift, progress |

Rules:

- Entrance motion decelerates into its final state.
- Exit motion is generally about 65% of the matching entrance duration.
- Do not use long delays to create artificial anticipation.
- A single viewport should contain no more than one cinematic transition.
- Duration must shorten on mobile when several elements would otherwise create a long reading delay.
- Scroll-controlled motion uses scroll distance as its timing source; it should not be paired with a second arbitrary duration.

## 4. Easing System

The canonical curves remain defined in `DESIGN-SYSTEM.md`:

```css
:root {
  --easing-standard: cubic-bezier(.2, 0, 0, 1);
  --easing-enter: cubic-bezier(.16, 1, .3, 1);
  --easing-exit: cubic-bezier(.4, 0, 1, 1);
  --easing-editorial: cubic-bezier(.77, 0, .18, 1);
}
```

| Easing | Character | Use |
|---|---|---|
| Standard | Controlled and neutral | UI feedback and small state changes |
| Enter | Soft deceleration | Text, image, and section entrances |
| Exit | Decisive and shorter | Outgoing testimonial or transient UI state |
| Editorial | Deliberate and composed | Hero, booking, and selected image transitions |
| Linear | Constant | Scroll-linked translation and progress mapping |

Use `ease: "none"` for scrubbed positional mapping. Do not use bounce, elastic, back, or novelty easing in the core experience.

## 5. Stagger System

Stagger communicates sequence, not decoration.

| Group | Stagger | Guidance |
|---|---:|---|
| Small label group | 20-40ms | Keep nearly simultaneous |
| Editorial copy group | 40-60ms | Label, heading, statement, supporting copy |
| Service or process rows | 45-70ms | Preserve reading order |
| Image sequence | 50-80ms | Use only when the images are a narrative sequence |
| Mobile group | 0-40ms | Collapse large desktop cascades |

Rules:

- Stagger parent groups or rows, not every character by default.
- The first item should establish the reading anchor; later items should not arrive before it is legible.
- Avoid stacking delays across nested groups. A section should feel like one composed phrase, not a queue of independent effects.
- Under reduced motion, remove stagger and render the complete state.
- If content is long or appears late in the viewport, replace a long stagger with one group reveal.

## 6. Entrance Animation Principles

Entrances are used to establish hierarchy when a section first becomes relevant.

### Default recipe

1. Preserve the final layout dimensions in the DOM.
2. Start essential content at `autoAlpha: 0` and a small offset only when the content is below the initial viewport or the reveal is non-critical.
3. Use a maximum vertical travel of 24px for text.
4. Reveal in semantic reading order.
5. Settle the image or mask after the primary text has established the section.
6. Keep the final state identical to the approved benchmark.

### Entrance rules

- Prefer `opacity` and `transform` over layout properties.
- Use `clip-path` or a mask only when the crop is stable and the final image remains fully inspectable.
- Never hide the primary navigation, booking CTA, service price, form guidance, or legal content behind a required animation.
- Use one-time entry reveals by default. Replay only when replay adds narrative value.
- Keep section triggers around 15-25% viewport entry unless the section has a clear reason to use another boundary.
- Entering content must not shift already readable content unexpectedly.

## 7. Scroll Animation Principles

Scroll motion extends the visual narrative while normal document scrolling remains the primary input.

### Scroll-triggered reveals

- Use `ScrollTrigger` for one-time section entrances and carefully bounded progress-linked moments.
- Trigger after the section has entered enough to establish context, normally 15-25% visibility.
- Prefer `once: true` for editorial reveals unless reversible behavior is meaningful.
- Keep copy readable while it is moving; do not scrub essential text through an unreadable intermediate state.
- Do not use scroll progress to control prices, booking instructions, or other practical information.

### Horizontal journey

The Gallery is the one approved horizontal journey on the page.

- On desktop, vertical scroll may map to the inner gallery track while the section is pinned for the shortest useful range.
- Animate the child track with `x` or `xPercent`, not the pinned trigger itself.
- Keep the translation linear with `ease: "none"`.
- Expose progress through visible text and a rule; color alone is not sufficient.
- Preserve the existing native horizontal snap or vertical sequence fallback on smaller viewports.
- Provide keyboard-accessible previous/next or direct chapter controls where the interaction requires them.
- Do not hijack trackpad horizontal gestures or trap the visitor inside the journey.

### Scroll boundaries

- A section's scroll animation must have a clear start and end.
- Avoid overlapping pinned sections.
- Keep a sticky chapter within the limits defined by the design system: maximum 160dvh desktop and 120dvh tablet.
- Stop or pause offscreen motion when it is not contributing to the visible story.

## 8. Parallax Principles

Parallax is atmospheric depth, not a default behavior.

- Use at most one background and one foreground layer in a scene.
- Reserve image overscan before moving a background; empty edges must never appear.
- Maximum total drift: 48px desktop, 24px tablet, none on mobile by default.
- Keep foreground copy and controls anchored while the background drifts.
- Use parallax only for the Hero or Experience atmosphere when it supports material depth.
- Never apply parallax to service data, prices, forms, testimonials, focus states, or booking controls.
- Use a scrubbed, linear mapping with a gentle smoothing value rather than a dramatic speed difference.
- Disable below 768px, on coarse pointers when performance is weak, and for reduced motion.

## 9. Image Animation Principles

Images carry proof and emotion in this brand. Animation must protect the photograph before it adds atmosphere.

### Preferred image behaviors

- Stable crop with a wrapper reveal.
- Subtle `y` or `x` settling within an overscanned frame.
- Low-amplitude internal scale, generally capped around `1.025` for tactile emphasis.
- Image mask reveal in the 600-900ms material range.
- Crossfade or wipe for a state-driven testimonial change when the active image changes.

### Image rules

- Animate the wrapper or transformable layer, not width, height, grid tracks, or intrinsic layout.
- Preserve eyes, hands, tools, hair texture, and gaze direction in the authored crop.
- Do not use aggressive zoom, rotation, blur, artificial grain, or filter changes as a substitute for art direction.
- Do not animate images in a way that hides the subject during a critical decision or quote.
- Avoid simultaneous movement of too many photographic frames; sequence them by narrative importance.
- Image loading and font/layout readiness must be considered before calculating scroll bounds.

## 10. Typography Animation Principles

Typography is a primary brand material. Its motion should feel typeset, not kinetic.

- Animate text groups, lines, or explicit semantic spans before considering character-level animation.
- Keep the reading order identical to the DOM order.
- Use opacity plus a small vertical lift for display headings, labels, quotes, and body copy.
- Preserve the approved grotesk/serif/mono contrast; motion must not change typographic role.
- Never animate font size, font weight, letter spacing, line height, or layout width as an entrance effect.
- Avoid splitting long body copy into many animated units.
- Use `SplitText` only if a line-level treatment is genuinely required and can be reverted safely; it is not a default dependency.
- Do not animate text so quickly that it becomes unreadable or so slowly that it delays comprehension.
- Headlines may arrive with the image as a composed editorial moment, but practical labels and instructions remain immediate and stable.

## 11. Interaction Animation Principles

Interaction feedback should be fast, legible, and reversible.

### Controls

- Hover, focus, and press feedback use the micro or interface duration range.
- Prefer underline, opacity, color, rule, or a small arrow translation.
- Keep focus rings visible and never animate focus away from the control.
- Buttons remain in their DOM position; do not animate layout width, height, or surrounding tracks.
- Every unfamiliar icon retains a tooltip or accessible name.

### Testimonial slider

- React owns the active testimonial index and semantic content.
- GSAP owns only the visual transition after state changes.
- Animate active portrait, quote group, and preview with a short crossfade, wipe, or 12-20px lift.
- Keep the next voice visible enough to communicate that more experiences are available.
- Preserve `aria-live="polite"`, button labels, progress text, and keyboard operation.
- Do not autoplay testimonials unless a future requirement explicitly adds pause/stop controls.

### Hover and pointer behavior

- Hover motion is enhancement only; touch and keyboard users receive an equivalent usable state.
- Do not require hover to reveal service details, prices, testimonials, or booking destinations.
- Avoid pointer-following effects and cursor displacement in the core experience.

## 12. Responsive Behavior

Motion follows the authored responsive composition; it must not force desktop choreography into a smaller layout.

| Viewport | Behavior |
|---|---|
| Desktop, >= 1024px | Full entrance choreography. Gallery may use the single pinned horizontal journey. Experience may use restrained background parallax. |
| Tablet, 768-1023px | Shorter travel and stagger. Prefer native Gallery snap. Avoid forced desktop pinning on touch hardware unless tested. |
| Mobile, < 768px | Vertical reading order first. No parallax, scroll hijacking, offscreen text transitions, or horizontal page overflow. |
| Landscape mobile | Re-check crop, heading height, controls, and scroll range; do not assume portrait thresholds are sufficient. |
| Coarse pointer | Favor native scrolling and simple entry reveals. Reduce expensive hover and scrub behavior when device capability is limited. |

Responsive rules:

- Keep the final composition and authored image crop intact at each breakpoint.
- Reduce travel before reducing legibility.
- Collapse a desktop stagger into grouped entrances when the mobile section is short.
- Never use animation to compensate for a layout that does not fit.
- Breakpoint changes must revert and rebuild media-specific ScrollTriggers cleanly.

## 13. `prefers-reduced-motion` Behavior

Reduced motion is a complete presentation mode, not merely a shorter animation.

When `prefers-reduced-motion: reduce` is active:

- render opacity, position, crop, and scale at their final values immediately;
- disable parallax, scroll scrub, pinning, autoplay, and decorative scale travel;
- remove stagger and long entrance delays;
- preserve native horizontal snap or vertical scrolling for content journeys;
- keep all controls, progress text, focus states, and state announcements available;
- do not replace motion with flashing, rapid fades, or repeated pulses;
- avoid calling unnecessary refresh loops for disabled triggers.

The static state must remain visually intentional and match the approved composition. Existing CSS reduced-motion behavior in `app/globals.css` should be treated as a baseline, while GSAP media queries must explicitly opt out of scroll-linked and entrance choreography.

## 14. GSAP Implementation Rules

### Required skills and responsibilities

| Skill | Responsibility |
|---|---|
| `gsap-core` | Tweens, timelines, transforms, `autoAlpha`, easing, `gsap.matchMedia()` |
| `gsap-react` | `useGSAP`, scoped refs, lifecycle cleanup, `contextSafe` callbacks |
| `gsap-performance` | Compositor-friendly properties, bounded stagger, will-change discipline, layout safety |
| `gsap-timeline` | Labels, defaults, sequencing, and section choreography |
| `gsap-scrolltrigger` | Viewport entry, scrub, pinning, and the Gallery journey |
| `gsap-utils` | Clamping, mapping, snapping, scoped collections, and safe responsive calculations |
| `gsap-plugins` | Only when a demonstrated requirement exists; no default plugin expansion |

### Rules

1. Use `useGSAP` for React animation and keep animated sections client-only only where required.
2. Create one root ref per animated section and pass it as the `scope` to `useGSAP`.
3. Keep selectors scoped to that root. Do not use unscoped global selectors such as `document.querySelectorAll` for section internals.
4. Register GSAP plugins once at module or application scope, never during renders.
5. Use timelines with labels and defaults for multi-element choreography instead of unrelated delayed tweens.
6. Use `gsap.matchMedia()` for desktop, tablet, mobile, and reduced-motion conditions. Allow media-specific triggers to revert when conditions change.
7. Use `revertOnUpdate: true` when a state or dependency-driven animation needs to rebuild safely.
8. Use `contextSafe` for GSAP calls initiated by event handlers or asynchronous callbacks.
9. For ScrollTrigger, register once, scope triggers, and refresh only after image/font layout is ready or a real layout change occurs.
10. For the Gallery, animate the inner track, use `ease: "none"` for scrubbed translation, and do not combine `containerAnimation` with pin or snap on child triggers.
11. Keep React as the source of truth for testimonial content and active state. GSAP must not own semantic data.
12. Use `gsap.utils` for clamping and mapping instead of repeated manual calculations inside per-frame callbacks.
13. Any temporary inline styles or transforms must be reversible through GSAP context cleanup.

## 15. React / Next.js Implementation Rules

- Preserve the current server/client boundary wherever possible. Do not turn `app/page.tsx` or every section into a Client Component just to animate one section.
- A section with GSAP hooks must be client-rendered, and its browser-only setup must run after mount.
- Keep content arrays, semantic markup, and accessible states independent from animation setup.
- Use stable React keys for repeated services, craft steps, gallery panels, and testimonials.
- Do not store visual tween progress in React state; it causes unnecessary renders and creates competing sources of truth.
- Store user-facing state in React: active testimonial, selected service, expanded content, or navigation state.
- Keep event handlers keyboard-operable and use `contextSafe` when they invoke GSAP.
- Clean up timelines, ScrollTriggers, listeners, and media queries on unmount.
- Do not use hydration-unstable values such as viewport width during the initial render. Let GSAP media matching run after mount.
- Preserve semantic heading order, landmark structure, alt text, button names, live regions, and normal focus flow.
- Animation must not be the only way a component communicates selected, active, complete, loading, or error state.

## 16. Performance Rules

Performance is part of the luxury experience: the page should feel quiet because it is well controlled, not because it is doing hidden work.

- Prefer `transform` and `opacity`; avoid animating `width`, `height`, `top`, `left`, margins, padding, grid tracks, or layout-dependent properties.
- Use `will-change` only on the small set of elements about to move, and remove it after the motion when practical.
- Avoid layout reads inside `onUpdate`, pointer handlers, and repeated callbacks.
- Measure bounds once per refresh and reuse them for mapping.
- Batch related elements and keep stagger counts proportional to visible content.
- Avoid per-character timelines for large headlines and paragraphs.
- Keep image overscan intentional and avoid forcing unnecessarily large assets into motion-heavy layers.
- Pause or disable offscreen motion and never run an infinite loop for static atmosphere.
- Avoid refresh loops caused by image loading, font swaps, or state updates.
- Test the Gallery on trackpads, touch devices, keyboard navigation, and slower hardware.
- Verify no horizontal document overflow is created by transformed content at mobile breakpoints.
- Validate 375, 768, 1024, 1440, and 1920px widths, plus landscape and reduced-motion modes.

## 17. Prohibited Animation Patterns

The following patterns are outside the Atelier Elan motion language unless a future approved direction explicitly changes the system:

- Bounce, elastic, rubber-band, or playful spring effects.
- Continuous floating, pulsing, rotating, or breathing decoration.
- Aggressive zooms, spinning images, 3D flips, or dramatic card rotations.
- Scroll-jacking that overrides normal wheel, trackpad, touch, or keyboard behavior.
- Multiple pinned sections competing on one page.
- Parallax on body copy, prices, forms, controls, testimonials, or focus states.
- Autoplay testimonials, carousels, or video-like sequences without pause/stop controls.
- Hiding essential copy, booking actions, service prices, or legal information until animation completes.
- Character-by-character animation across long text blocks.
- Layout animation that causes cumulative layout shift or changes the approved composition.
- Hover-only information or interactions that fail on touch and keyboard input.
- Flashing, rapid contrast changes, or motion that can create discomfort.
- Color-only progress or active-state communication.
- Unbounded `will-change`, global selectors, orphaned ScrollTriggers, or timelines that survive unmount.
- Introducing `ScrollToPlugin`, `ScrollSmoother`, `Observer`, `Draggable`, `Flip`, `SplitText`, or development tools without a documented requirement and accessibility/performance review.

## 18. Section Motion Contract

The detailed implementation direction lives in `reference/doc/gsap-prompt/motion-direction-plan.md`. This matrix is the compact contract for implementation:

| Section | Primary motion | Required GSAP skills | Fallback |
|---|---|---|---|
| Hero | Mount timeline for text and image arrival | `gsap-core`, `gsap-react`, `gsap-timeline`, `gsap-performance` | Static hero at final state |
| About | One-time statement-to-evidence reveal | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-performance` | Complete stacked/static content |
| Services | Numbered row reveal with restrained image entry | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-performance` | Fully visible service index |
| Craftsmanship | Sequenced process/image reveal | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance` | Complete image sequence |
| Experience | Entry reveal with optional desktop background drift | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-performance` | Static atmosphere and copy |
| Gallery | Desktop pinned horizontal film-track journey | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-utils`, `gsap-performance` | Native snap or vertical sequence |
| Testimonial | State-driven active voice transition | `gsap-core`, `gsap-react`, `gsap-timeline`, `gsap-performance` | Instant state update |
| Booking | Portrait-to-copy conversion reveal | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance` | Static CTA and complete copy |
| Footer | Quiet grouped closure | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance` | Complete footer immediately visible |

## 19. Review Checklist

Before approving any motion implementation, confirm:

- The static layout still matches the approved benchmark.
- The animation has one clear purpose and one dominant gesture.
- Critical copy and actions are available without waiting.
- Reading order and focus order remain unchanged.
- No layout property is being animated unnecessarily.
- Desktop, tablet, mobile, landscape, coarse pointer, and reduced motion were tested.
- Gallery fallback works without forced pinning.
- Testimonial content remains owned by React and announces state accessibly.
- ScrollTriggers and timelines clean up on unmount and breakpoint changes.
- Motion stops or becomes irrelevant when the section leaves the viewport.
- The result feels like attentive craft: deliberate, tactile, and calm.

