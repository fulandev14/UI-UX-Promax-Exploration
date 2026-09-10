# Atelier Elan GSAP Motion Direction Plan

Status: audit and planning only. No source code is changed by this document.

This plan treats the approved visual implementation as final. GSAP is introduced only as a motion and interaction layer; it must not redesign the layout, typography, colors, imagery, copy, or responsive composition.

## 1. Current Frontend Audit

- The project uses Next.js App Router with React 19 and Next.js 16.3.2.
- `gsap` and `@gsap/react` are already installed in `package.json`; no dependency installation is required for the implementation phase.
- `app/sections/testimonial.tsx` is currently the only Client Component and owns `activeIndex` state for the testimonial slider.
- The remaining section files are currently Server Components and contain static editorial composition plus `next/image` assets.
- `app/sections/gallery.tsx` already contains a desktop native horizontal snap track with `data-gallery-track` and `data-gallery-panel` hooks. Mobile already falls back to a vertical numbered sequence.
- `app/sections/testimonial.tsx` already exposes slider hooks through `data-testimonial-section`, `data-testimonial-track`, `data-testimonial-panel`, `data-testimonial-prev`, and `data-testimonial-next`.
- `app/globals.css` already contains a `prefers-reduced-motion` baseline that disables smooth scrolling and shortens CSS transitions/animations.
- The approved visual rhythm is quiet editorial field -> dramatic inverse scene -> tactile process -> emotional proof -> booking climax -> restrained close.

## 2. Motion Principles

The motion character should be premium, elegant, restrained, cinematic, editorial, smooth, and sophisticated.

1. Establish one dominant motion gesture per section.
2. Animate `transform`, `opacity`/`autoAlpha`, and carefully bounded masks; do not animate layout properties such as `width`, `height`, `top`, `left`, `margin`, or `padding`.
3. Use motion to clarify sequence and attention, never to delay access to content.
4. Prefer one-time entrances for supporting sections. Replay only when the interaction has clear narrative meaning.
5. Keep all motion interruptible. Never lock the visitor into a scroll sequence.
6. Preserve the existing DOM and reading order. Visual offsets must never change semantic order.
7. Chartreuse remains a rare signal for progress, active state, or the primary booking action.

## 3. GSAP Skill Routing

These skills are the implementation foundation for every animated React section:

- `gsap-core`: tweens, `autoAlpha`, transforms, easing, `gsap.matchMedia()`, and reduced-motion conditions.
- `gsap-react`: `useGSAP`, scoped refs, `contextSafe`, and automatic cleanup through GSAP context.
- `gsap-performance`: compositor-friendly properties, stagger discipline, `will-change` only where needed, and avoiding layout thrash.

Conditional skills:

- `gsap-timeline`: Hero, Craftsmanship, Testimonial, Booking, and any section with multiple coordinated beats.
- `gsap-scrolltrigger`: About, Services, Craftsmanship, Experience, Gallery, Booking, and Footer when motion is tied to viewport entry or scroll progress.
- `gsap-utils`: Gallery for `toArray`, `clamp`, `mapRange`, and measured horizontal bounds; optional for responsive distance calculations elsewhere.
- `gsap-plugins`: no plugin is required for the first motion pass. `SplitText` is an optional later enhancement only if line-level typography animation cannot be achieved with the existing explicit spans. `ScrollToPlugin`, `ScrollSmoother`, `Observer`, `Draggable`, `Flip`, and `GSDevTools` should not be introduced without a demonstrated requirement.

Do not use `gsap-frameworks`; this is a React + Next.js project and should follow `gsap-react`.

## 4. Recommended Integration Architecture

1. Keep static content and approved layout in Server Components wherever possible.
2. Add the smallest possible client motion boundary for each section that needs GSAP. Do not convert the complete page to a Client Component.
3. Use a root ref per animated section and pass it as the `scope` to `useGSAP`. Do not use unscoped global selectors.
4. Register `useGSAP` and `ScrollTrigger` once at module/application scope before use. Do not register plugins during component re-renders.
5. Use `gsap.matchMedia()` for desktop, mobile, and `prefers-reduced-motion`. Desktop-only pinning and parallax must automatically revert when the breakpoint changes.
6. Keep the existing native IntersectionObserver/state approach, if retained for active navigation, separate from visual GSAP triggers. Do not create two competing sources of truth for carousel state.
7. For testimonial transitions, let React own which voice is active. GSAP should animate the transition after the state changes, not own the content data.
8. For dynamic content or image/font layout changes, call `ScrollTrigger.refresh()` only after the relevant layout is actually ready.

## 5. Motion Hierarchy

| Priority | Sections | Motion role |
| --- | --- | --- |
| 01 | Hero | Strongest arrival sequence and cinematic depth |
| 02 | Gallery, Testimonial | Narrative movement and proof of craft/experience |
| 03 | About, Craftsmanship, Experience | Restrained scroll reveals and material pacing |
| 04 | Services, Booking | Clarity-first reveals supporting decision making |
| 05 | Footer | Quiet closing acknowledgement |

## 6. Section Plans

### 6.1 Hero — `app/sections/hero.tsx`

1. **Motion intent:** Create a confident first impression: the atelier identity arrives before the image fully settles, then the primary action becomes available.
2. **Animation hierarchy:** navigation/wordmark -> issue label -> headline line groups -> supporting copy -> CTA -> hero image depth and craft inset.
3. **Animated elements:** the existing header, issue label, explicit headline spans, description, CTA row, hero image wrapper, and `.hero-craft-inset` if present.
4. **Trigger:** mount/initial render only. Do not make the visitor wait for a scroll-triggered hero.
5. **Recommended technique:** a single labelled `gsap.timeline()` with `gsap.from()`/`fromTo()` and scoped refs. Use small `y` offsets and `autoAlpha`; use an image mask or clipped wrapper only if the final state is identical to the approved composition.
6. **GSAP skills:** required `gsap-core`, `gsap-react`, `gsap-timeline`, `gsap-performance`; optional `gsap-plugins` only for a future `SplitText` line treatment.
7. **Duration/easing direction:** 0.45-0.7s for labels and copy, 0.8-0.9s for the main image, 40-60ms stagger. Use an enter/decelerating editorial ease such as `power3.out` or the approved editorial curve. No bounce or elastic easing.
8. **Desktop:** retain the asymmetric type/image composition. Let the image settle slightly after the type, with no more than 24px of foreground travel and 32-48px of image overscan drift.
9. **Mobile:** use a shorter sequence, no parallax, no hidden critical copy, and no animation that pushes the CTA below the first viewport unexpectedly. Keep the existing authored crop.
10. **Reduced motion:** render all elements at final opacity/position immediately; no mask travel, parallax, or stagger.
11. **Performance:** animate wrappers with transforms, never the image layout box. Avoid a large number of character tweens. Load the initial hero image as already configured and avoid refresh loops.
12. **Importance:** essential. The entrance establishes the brand pace, but it must degrade gracefully to a static hero.

### 6.2 About — `app/sections/about.tsx`

1. **Motion intent:** Make the philosophy feel observed and deliberate, moving from statement to evidence.
2. **Animation hierarchy:** section label/accent mark -> display heading -> serif quote -> supporting paragraph -> three principle rows -> image evidence.
3. **Animated elements:** heading groups, quote, principle rows, and image wrapper. The rule/dot can reveal with the associated row rather than animate independently.
4. **Trigger:** one `ScrollTrigger` at approximately 15-25% section entry, `once: true` or reversible only if the visual review shows value in replay.
5. **Recommended technique:** a scoped timeline on `ScrollTrigger`; use a 16-24px `y` reveal and `autoAlpha`. Use a subtle clip-path image reveal only after contrast and paint cost are tested.
6. **GSAP skills:** required `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance`; `gsap-utils` optional for responsive reveal distance.
7. **Duration/easing direction:** 0.5-0.7s, 50ms stagger for principle rows, calm `power2.out`/`power3.out`. Keep the image reveal below 0.9s.
8. **Desktop:** preserve the editorial split and stagger the evidence columns into view without shifting their final geometry.
9. **Mobile:** stack the statement and image in the existing order. Use fade plus small vertical movement only; no lateral slide that causes reading order to feel disconnected.
10. **Reduced motion:** remove stagger and mask travel; show all text, rules, and image immediately.
11. **Performance:** animate only opacity/transform and one image wrapper. Avoid animating each glyph of the large headline.
12. **Importance:** essential for narrative clarity, decorative in its timing.

### 6.3 Services — `app/sections/service.tsx`

1. **Motion intent:** Help visitors scan the service index and understand that each offer is precise and considered.
2. **Animation hierarchy:** section label -> title/rule -> service rows -> image/title treatment -> service link.
3. **Animated elements:** the five existing numbered rows, the right-side image wrapper, and the supporting heading. Prices and service descriptions must remain readable throughout.
4. **Trigger:** `ScrollTrigger` on section entry, once. No scroll-scrub for prices or service rows.
5. **Recommended technique:** scoped timeline with row stagger; use a subtle image mask or `y` reveal. Hover can use the existing bounded internal image scale, never a row layout shift.
6. **GSAP skills:** required `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-performance`; `gsap-timeline` recommended; `gsap-utils` optional.
7. **Duration/easing direction:** 0.45-0.6s per reveal, 45-60ms stagger, `power2.out`. Avoid dramatic exits and avoid animating the price independently from its row.
8. **Desktop:** reveal the left index before the right image finishes, reinforcing the approved split composition.
9. **Mobile:** keep all five services visible in the existing vertical list. Use a shorter stagger or a single group reveal if the list enters quickly.
10. **Reduced motion:** static list and image; no stagger.
11. **Performance:** use transforms on row content; do not animate row height, borders, or grid tracks.
12. **Importance:** essential for scan order, decorative in movement.

### 6.4 Craftsmanship — `app/sections/craftsmanship.tsx`

1. **Motion intent:** Turn Consult -> Section -> Shape -> Refine into a tactile progression without making the process feel like a carousel.
2. **Animation hierarchy:** chapter label -> large title -> image sequence -> numbered markers -> captions/rule.
3. **Animated elements:** the four existing figures, their markers, caption groups, and the bottom chartreuse rule.
4. **Trigger:** `ScrollTrigger` when the section enters. Use a timeline or carefully batched triggers; the section should not hijack vertical scrolling.
5. **Recommended technique:** timeline with labelled image reveals and a light 12-20px caption lift. A small internal image scale, capped around 1.025, can reinforce tactility.
6. **GSAP skills:** required `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance`; `gsap-utils` optional for stagger distribution.
7. **Duration/easing direction:** 0.55-0.8s image reveals, 50-70ms sequencing, `power2.out` or a restrained editorial ease. No rotation and no aggressive scale.
8. **Desktop:** preserve the mixed-ratio composition and allow each figure to enter according to its visual rhythm. Do not change its final width or column placement.
9. **Mobile:** animate the single-column sequence as independent figures or two small groups. Disable any lateral travel that could create horizontal overflow.
10. **Reduced motion:** show all figures and captions in final state immediately.
11. **Performance:** animate masks/wrappers and transforms; never animate the authored aspect-ratio boxes.
12. **Importance:** essential to communicate process, decorative in its sequencing.

### 6.5 Experience — `app/sections/experience.tsx`

1. **Motion intent:** Make the room feel held and atmospheric while keeping the explanatory copy anchored and easy to read.
2. **Animation hierarchy:** background atmosphere -> label/headline -> serif statement -> body copy -> quote -> four experience steps.
3. **Animated elements:** background image layer, text groups, quote block, and numbered steps.
4. **Trigger:** entry reveal through `ScrollTrigger`; optional restrained background parallax while the section is in view.
5. **Recommended technique:** one entry timeline plus a separate low-amplitude scroll-linked background tween. Keep parallax on the background only.
6. **GSAP skills:** required `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance`; `gsap-utils` optional for clamping drift.
7. **Duration/easing direction:** 0.55-0.75s entry, 40-60ms step stagger, `power2.out`; parallax uses `scrub: 0.8-1` and `ease: "none"`.
8. **Desktop:** maximum background drift 32-48px. Keep the quote and bottom steps in their approved positions; do not animate them with parallax.
9. **Mobile:** disable parallax below 768px and use a simple fade/lift sequence so the tall scene remains calm.
10. **Reduced motion:** disable parallax and stagger; render final state.
11. **Performance:** overscan the image before any drift; animate only the background transform. Avoid frequent layout reads in `onUpdate`.
12. **Importance:** atmosphere is decorative, text/steps are essential.

### 6.6 Gallery — `app/sections/gallery.tsx`

1. **Motion intent:** Deliver the approved pinned film-track journey: quiet title field, then a deliberate sequence of visual observations.
2. **Animation hierarchy:** intro panel -> pinned track -> frames 01-04 -> material study 05 -> next cue 06 -> chartreuse progress rule.
3. **Animated elements:** the existing `data-gallery-track`, its child track/list, `data-gallery-panel` frames, and the progress rule. Do not animate the section's final grid dimensions.
4. **Trigger:** desktop vertical scroll mapped to horizontal translation with `ScrollTrigger`; native horizontal snap remains the tablet/mobile fallback.
5. **Recommended technique:** pin the section or track wrapper, animate the inner track with `x`/`xPercent`, `scrub: 1`, and `ease: "none"`. Use `containerAnimation` for child panel enter effects. Do not attach `snap` to `containerAnimation` triggers.
6. **GSAP skills:** required `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-performance`, `gsap-utils`; `gsap-timeline` optional for panel micro-sequences; `gsap-plugins` not required.
7. **Duration/easing direction:** horizontal movement is scroll-controlled and linear. Panel opacity/scale accents are 0.35-0.55s when triggered, with `power2.out`; no auto-rotation.
8. **Desktop:** use one horizontal journey only, with a visible progress rule and next-panel cue. Pin for the shortest range that completes the five/six-frame story. Never animate the pinned trigger itself horizontally; animate its child track.
9. **Mobile/tablet:** keep native overflow and snap behavior. Mobile uses the existing vertical numbered sequence; do not hijack touch scroll or add forced pinning.
10. **Reduced motion:** disable pin/scrub/parallax and show the complete authored sequence with native scrolling.
11. **Performance:** calculate bounds once per refresh, use `gsap.utils.toArray` within a scoped ref, avoid per-frame DOM reads, and call `ScrollTrigger.refresh()` only after image/font layout is ready. Keep `will-change` limited to the moving track.
12. **Importance:** essential to the gallery concept; the motion itself is an enhancement and must have a complete native fallback.

### 6.7 Testimonial — `app/sections/testimonial.tsx`

1. **Motion intent:** Make the visitor feel that one client voice gives way to another, while the current quote remains the primary readable state.
2. **Animation hierarchy:** active portrait -> active heading/quote/attribution -> preview voice -> progress rule.
3. **Animated elements:** existing `data-testimonial-panel="active-image"`, `active-copy`, and `preview`; do not animate the semantic section height.
4. **Trigger:** React state change from the existing Prev/Next controls. A separate one-time section entrance may be added, but ScrollTrigger is not required for the slider transition.
5. **Recommended technique:** `useGSAP` with the active index as a dependency and `revertOnUpdate: true`; use a short transition timeline to crossfade/wipe the image and move copy by 12-20px. React remains the source of truth for content.
6. **GSAP skills:** required `gsap-core`, `gsap-react`, `gsap-timeline`, `gsap-performance`; `gsap-scrolltrigger` optional only for the initial viewport reveal; `gsap-utils` and `gsap-plugins` not required.
7. **Duration/easing direction:** 0.4-0.65s, `power2.inOut` or restrained editorial ease. The outgoing state should be slightly faster than the incoming state. No bounce, rotation, or aggressive zoom.
8. **Desktop:** maintain the dual-voice stage and let the next preview remain visually legible. Animate image/copy independently but finish in the same approved geometry.
9. **Mobile:** stack active image, copy, preview, and controls as currently authored. Use opacity plus a small vertical lift; never slide content offscreen or cause cumulative height jumps.
10. **Reduced motion:** update the active content instantly; preserve the progress and accessible state announcement.
11. **Performance:** scope all selectors to the testimonial root, clean up through `useGSAP`, and use `contextSafe` if controls create GSAP callbacks. Preload only the active/next image pair; keep `aria-live="polite"` behavior intact.
12. **Importance:** essential to trust and decision making; the transition is supportive, not decorative spectacle.

### 6.8 Booking — `app/sections/booking.tsx`

1. **Motion intent:** Make booking feel like a calm next chapter and the natural culmination of the page.
2. **Animation hierarchy:** portrait reveal -> chapter label -> `When You're Ready.` typography -> promise -> booking CTA -> Atelier Elan signature.
3. **Animated elements:** portrait wrapper, dark panel copy groups, background numeral, and CTA arrow. The CTA must remain available throughout.
4. **Trigger:** one `ScrollTrigger` entry timeline around 15-25% section visibility. Do not autoplay or repeatedly pulse the booking action.
5. **Recommended technique:** image mask/clip reveal plus a short copy timeline. CTA arrow may use a bounded hover translation already consistent with the system.
6. **GSAP skills:** required `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance`; `gsap-plugins` not required.
7. **Duration/easing direction:** 0.6-0.9s portrait reveal, 0.45-0.65s copy, 50ms stagger, `power3.out`. Keep the final CTA underline static and legible.
8. **Desktop:** preserve the 37.5vw portrait / dark-panel split and let the portrait settle before the CTA becomes the focal point.
9. **Mobile:** reveal portrait first, then copy in a compact sequence. No parallax and no animation that changes the dark panel's readable contrast.
10. **Reduced motion:** show portrait, copy, CTA, and signature immediately.
11. **Performance:** animate the portrait wrapper rather than image dimensions; keep background layers static; never animate the CTA's layout width.
12. **Importance:** essential because it supports conversion; timing is restrained and non-blocking.

### 6.9 Footer — `app/sections/footer.tsx`

1. **Motion intent:** Close the experience with a quiet sense of completion and reinforce the wordmark without creating another climax.
2. **Animation hierarchy:** top rule -> identity/address -> hours/contact -> explore/follow -> legal row -> oversized wordmark.
3. **Animated elements:** footer columns as grouped units, top rules, and the oversized wordmark. Links should not individually fly in.
4. **Trigger:** one-time `ScrollTrigger` entry when the footer becomes visible.
5. **Recommended technique:** low-amplitude grouped timeline with `autoAlpha` and 8-16px `y`; optional rule reveal through scaleX from the left using transform origin.
6. **GSAP skills:** required `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance`; `gsap-utils` and `gsap-plugins` not required.
7. **Duration/easing direction:** 0.4-0.65s, 45-60ms group stagger, `power2.out`. The wordmark can arrive last but should remain subtle.
8. **Desktop:** retain the dense inverse editorial grid and avoid animating each link independently.
9. **Mobile:** use one or two grouped reveals; do not make a long footer feel like a sequence of delays.
10. **Reduced motion:** render the complete footer immediately.
11. **Performance:** animate opacity/transform only; do not animate grid lines or footer height. Remove `will-change` after entrance if it is used.
12. **Importance:** decorative closure; all contact, legal, and booking links must be usable before or without motion.

## 7. Responsive and Accessibility Contract

| Context | Motion policy |
| --- | --- |
| Desktop >= 1024px | Full entrance choreography; Gallery may use the single pinned horizontal journey; Experience may use restrained background parallax. |
| Tablet 768-1023px | Reduce travel and stagger; prefer native horizontal snap for Gallery; no forced desktop pinning unless tested on touch hardware. |
| Mobile < 768px | Vertical reading order first; no parallax, no scroll hijacking, no offscreen text transitions, and no horizontal page overflow. |
| `prefers-reduced-motion: reduce` | Disable scrub, pinning, parallax, stagger, scale travel, and autoplay. Render the final state immediately. |
| Keyboard/focus | Controls remain in normal DOM order. Focus rings are never animated away. Slider controls retain labels and do not move focus after a state change. |
| Screen readers | React content/state remains present in the DOM. `aria-live="polite"` is preserved for testimonial changes. Progress is exposed as text, not color alone. |

## 8. Implementation Phases After Plan Approval

1. **Foundation:** add a small client motion boundary pattern, plugin registration, scoped refs, and `gsap.matchMedia()` conditions. Confirm no source layout changes.
2. **Hero:** implement and tune the arrival timeline first because it defines the motion language.
3. **Gallery:** implement the desktop pinned horizontal journey with native tablet/mobile fallback and validate input behavior on touch devices.
4. **Supporting sections:** add one-time reveals for About, Services, Craftsmanship, and Experience in page order so `ScrollTrigger.refresh()` ordering remains predictable.
5. **State-driven surfaces:** animate Testimonial transitions from React state while preserving content and accessibility.
6. **Conversion/closure:** add Booking and Footer reveals with the lowest motion intensity.
7. **QA:** test 375, 768, 1024, 1440, and 1920px, landscape, keyboard navigation, slow devices, image/font readiness, page refresh, backward navigation, and reduced-motion mode.

## 9. Final Recommendation Matrix

| Section | Primary skills | Secondary/optional skills | Motion model |
| --- | --- | --- | --- |
| Hero | `gsap-core`, `gsap-react`, `gsap-timeline`, `gsap-performance` | `gsap-plugins` only for optional SplitText | Mount timeline |
| About | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-performance` | `gsap-timeline`, `gsap-utils` | One-time scroll reveal |
| Services | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-performance` | `gsap-timeline`, `gsap-utils` | Staggered index reveal |
| Craftsmanship | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance` | `gsap-utils` | Sequenced craft reveal |
| Experience | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance` | `gsap-utils` | Reveal + limited desktop parallax |
| Gallery | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-performance`, `gsap-utils` | `gsap-timeline` | Desktop pinned horizontal journey |
| Testimonial | `gsap-core`, `gsap-react`, `gsap-timeline`, `gsap-performance` | `gsap-scrolltrigger` for entry only | React state-driven transition |
| Booking | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance` | None | Conversion reveal |
| Footer | `gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance` | None | Quiet one-time closure |

The recommended first implementation target is Hero, followed by Gallery, because those two establish the strongest motion language and the most technically sensitive interaction. All other sections should inherit their pacing and restraint from those references.
