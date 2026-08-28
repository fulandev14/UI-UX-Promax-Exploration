# Atelier Élan — Design System

**Status:** Approved foundation, brand-aligned revision · **Version:** 1.1 · **Scope:** Premium beauty atelier website  
**Source of truth:** This document governs visual design, interaction, responsive composition, and frontend handoff. `BRAND-GUIDELINES.md` governs brand strategy, voice, messaging, identity behavior, and cross-channel recognition. The approved visual benchmarks remain the evidence of accepted art direction. Page-level invention is allowed only when it uses these tokens and guardrails.

### Authority and conflict resolution

1. **Approved visual benchmarks** define the accepted visual expression and must not be redesigned.
2. **`BRAND-GUIDELINES.md`** is authoritative for brand meaning, promise, personality, voice, vocabulary, wordmark behavior, and recognition.
3. **`DESIGN-SYSTEM.md`** is authoritative for implementation: tokens, grid, typography roles, components, states, motion, responsive behavior, and accessibility.
4. If guidance appears to conflict, preserve the approved visual expression, apply the brand intent from `BRAND-GUIDELINES.md`, and resolve implementation through this system. Do not invent a fourth visual language.

## 1. Brand & Design Philosophy

Atelier Élan presents beauty as craftsmanship, ritual, atmosphere, and personal experience. It should feel closer to a fashion editorial, boutique hotel, contemporary gallery, and cinematic beauty campaign than a conventional salon.

**Brand essence:** Intimate Editorial Craft.  
**Brand promise:** Your full self, met with full attention.  
**Brand idea:** Beauty is not added. It is carefully revealed.  
**Lead campaign expression:** Beauty, made tangible.

These statements guide intent, not repeated page copy. The experience must communicate refinement rather than transformation, and discernment rather than excess.

The system combines a rational Swiss foundation with controlled editorial disruption:

- **Structured foundation:** exact grid, readable hierarchy, restrained decoration, consistent tokens.
- **Art-directed expression:** offset compositions, contrasting type voices, cinematic crops, changing narrative pace.
- **Luxury through restraint:** proportion, material, whitespace, photography, and timing—not gold, gloss, or ornament.
- **Exclusive but welcoming:** confident and intimate; never cold, intimidating, or clinically minimal.

## 2. Creative Direction

**Creative equation:** Luxury Beauty Editorial × Contemporary Fashion Magazine × Minimal Swiss × Cinematic Brand Experience × Nature-Inspired Hospitality.

| Mandatory direction | Operational rule |
|---|---|
| Asymmetric Layout | Every major page uses at least two offset compositions derived from the grid; never random absolute positioning. |
| Cinematic Imagery | Use authored focal points, campaign-grade crops, natural light, and image sequences that function as narrative frames. |
| Art Direction | Alternate quiet, dramatic, immersive, informative, and emotional sections; no repeated template rhythm. |
| Immersive Interactive Storytelling | Page order follows introduction → philosophy → craft → treatments → atmosphere → experience → result → booking. |
| Editorial Grid / Magazine | Use 12/8/4-column responsive grids, pull quotes, editorial numbering, and deliberate column breaks. |
| Parallax Storytelling | Use subtle depth on at most two layers per scene; total travel ≤8% of viewport height. |
| Nature Distilled | Express stone, linen, wood, skin, water, and shadow through color, texture, light, and imagery—not botanical decoration. |
| Bold Typography Mobile | Mobile display type remains dominant at 14–19vw with authored line breaks and 3–6 line headlines. |
| Minimal Swiss | Alignment, legibility, rational spacing, functional labels, and limited type families anchor every composition. |
| Scroll-Triggered Storytelling | Reveal narrative beats in reading order; all content remains complete without animation. |
| Horizontal Scroll Journey | One optional signature journey per page; it becomes a vertical sequence or snap gallery on small screens. |

### Narrative pillars translated into UI

| Brand pillar | System expression |
|---|---|
| Craft | Precise typography, visible process, hands/tools imagery, clear service information, and considered detail. |
| Individuality | Authored crops, non-repetitive asymmetry, personal language, and compositions that never feel mass-produced. |
| Ritual | Measured pacing, numbered chapters, calm interaction, and a booking journey that feels attentive rather than transactional. |
| Materiality | Stone, linen, wood, skin, water, grain, shadow, and warm neutral surfaces used with restraint. |
| Endurance | Durable hierarchy, legible information, restrained motion, and avoidance of trend-led effects. |

## 3. Design Principles

1. **Compose, do not fill.** Start with hierarchy and pacing, not a component inventory.
2. **Break the grid intentionally.** Every breakout must retain one visible alignment anchor.
3. **One dominant gesture per section.** Typography, image, or interaction may lead; the others support.
4. **Quiet enables drama.** Follow a dense or immersive scene with whitespace or concise information.
5. **Information stays usable.** Services, prices, booking, and navigation never become puzzles.
6. **Mobile is recomposed.** Preserve impact by changing order and crop, not merely stacking desktop columns.
7. **Tokens before exceptions.** Add a reusable token only after a value has a stable purpose.

## 4. Visual DNA

- **Primary impression:** tactile editorial restraint.
- **Composition:** 65% disciplined grid, 35% controlled disruption.
- **Type:** monumental grotesk + selective high-contrast serif + mono editorial metadata.
- **Palette:** warm paper, stone, walnut, charcoal; acidic chartreuse only as a precise signal.
- **Surface:** mostly flat; hairline rules and image edges replace cards and shadows.
- **Texture:** film grain or paper grain at 2–4% opacity; never reduce text contrast.
- **Image rhythm:** portrait → craft detail → material/space → result, with varied scale.
- **Signature devices:** vertical labels, oversized numerals, off-grid captions, hairline rules, and one rare torn/irregular editorial seam. Use no more than one dominant disruptive device per scene; the torn seam is a campaign-level punctuation, not a recurring section divider.

## 5. Color System

### Primitive color tokens

```css
:root {
  --color-ivory-50: #fbf8f1;
  --color-ivory-100: #f4efe5;
  --color-bone-200: #e7dfd1;
  --color-stone-300: #c9bdad;
  --color-taupe-500: #74685d;
  --color-clay-600: #765745;
  --color-walnut-700: #4b392d;
  --color-espresso-800: #2b241e;
  --color-charcoal-900: #181816;
  --color-ink-950: #0e0e0d;
  --color-moss-500: #69705a;
  --color-acid-400: #d7ed18;
  --color-acid-500: #c4da00;
  --color-error-600: #a83d32;
  --color-success-700: #426148;
  --color-warning-700: #795b20;
  --color-white: #ffffff;
}
```

### Semantic color tokens

```css
:root {
  --background-primary: var(--color-ivory-50);
  --background-secondary: var(--color-ivory-100);
  --background-tertiary: var(--color-bone-200);
  --background-inverse: var(--color-ink-950);
  --surface-primary: var(--color-ivory-50);
  --surface-elevated: var(--color-white);
  --text-primary: var(--color-charcoal-900);
  --text-secondary: var(--color-walnut-700);
  --text-muted: var(--color-taupe-500);
  --text-inverse: var(--color-ivory-50);
  --border-subtle: color-mix(in srgb, var(--color-taupe-500) 32%, transparent);
  --border-strong: var(--color-charcoal-900);
  --accent-primary: var(--color-acid-400);
  --accent-secondary: var(--color-moss-500);
  --interactive-default: var(--color-charcoal-900);
  --interactive-hover: var(--color-espresso-800);
  --interactive-active: var(--color-ink-950);
  --interactive-focus: var(--color-charcoal-900);
  --feedback-error: var(--color-error-600);
  --feedback-success: var(--color-success-700);
  --feedback-warning: var(--color-warning-700);
}
```

Chartreuse is limited to the primary booking action, the outer accent of a two-tone focus treatment, an active progress marker, or one editorial annotation per viewport. Never use it alone as a focus boundary on ivory or as a large background behind body copy. Normal text contrast must be ≥4.5:1; large text and meaningful non-text boundaries ≥3:1. Test composed overlays against the actual image.

`--surface-elevated` and `--shadow-elevated` are reserved for functional overlays such as dialogs, menus, and lightboxes. They must not turn editorial content into floating card surfaces.

## 6. Typography System

### Families

```css
:root {
  --font-grotesk: "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-editorial: "Bodoni Moda", "Times New Roman", serif;
  --font-mono: "IBM Plex Mono", "Courier New", monospace;
}
```

Inter supplies Swiss precision and UI clarity; Bodoni Moda is restricted to expressive phrases and quotations; IBM Plex Mono handles issue labels, prices, indices, and technical metadata. Self-host production fonts where licensing permits; use `font-display: swap` and preload only critical upright cuts.

| Role | Family | Fluid size | Weight | Line height | Tracking / case | Use |
|---|---|---:|---:|---:|---|---|
| Display XL | Grotesk | `clamp(4rem, 10.5vw, 10rem)` | 800 | .82 | `-.065em`, uppercase optional | Hero, max 5 words/line |
| Display L | Editorial | `clamp(3.5rem, 8vw, 8rem)` | 400 | .88 | `-.045em`, italic optional | One expressive phrase |
| H1 | Grotesk | `clamp(3rem, 6.5vw, 7rem)` | 750 | .9 | `-.05em` | Page title |
| H2 | Grotesk | `clamp(2.5rem, 4.5vw, 5rem)` | 700 | .94 | `-.04em` | Section statement |
| H3 | Editorial | `clamp(2rem, 3vw, 3.5rem)` | 400 | 1.02 | `-.025em` | Editorial subhead |
| H4 | Grotesk | `clamp(1.25rem, 1.6vw, 1.75rem)` | 600 | 1.15 | `-.02em` | Component heading |
| Lead | Editorial | `clamp(1.35rem, 2vw, 2rem)` | 400 | 1.35 | `-.015em` | Introductory prose |
| Body Large | Grotesk | `clamp(1.0625rem, 1.2vw, 1.25rem)` | 400 | 1.6 | `0` | Key narrative copy |
| Body | Grotesk | `1rem` | 400 | 1.6 | `0` | General copy |
| Body Small | Grotesk | `.875rem` | 400 | 1.55 | `.005em` | Supporting copy |
| Caption | Mono | `.75rem` | 400 | 1.45 | `.04em` | Image metadata |
| Eyebrow | Mono | `.6875rem` | 500 | 1.2 | `.14em`, uppercase | Chapter labels |
| Navigation | Grotesk | `.8125rem` | 600 | 1 | `.08em`, uppercase | Main navigation |
| Button | Grotesk | `.8125rem` | 600 | 1 | `.08em`, uppercase | CTA labels |
| Editorial Number | Editorial | `clamp(4rem, 8vw, 9rem)` | 400 | .8 | `-.055em` | Chapters and services |

Reading text is limited to 65–72 characters on desktop and 35–60 on mobile. Serif never carries form instructions, navigation, prices, or long body copy.

## 7. Bold Typography Mobile

- Display XL becomes `clamp(3.5rem, 18vw, 6.5rem)` with line-height `.82`; H1 becomes `clamp(3rem, 15vw, 5.5rem)`.
- Author line breaks per breakpoint; do not insert blanket nonbreaking spaces. Keep short headlines to 3–6 lines.
- A hero headline may occupy 55–80dvh, but the next meaningful content cue must remain visible or explicitly indicated.
- Pair type and imagery vertically: headline → crop → caption, or crop → overlapping headline with a contrast-safe solid backing.
- Use `text-wrap: balance` progressively; natural wrapping remains the fallback.
- Preserve 24–48px space around display type; never reduce body copy below 16px.

## 8. Spacing System

```css
:root {
  --space-1: .25rem; --space-2: .5rem; --space-3: .75rem;
  --space-4: 1rem; --space-5: 1.25rem; --space-6: 1.5rem;
  --space-8: 2rem; --space-10: 2.5rem; --space-12: 3rem;
  --space-16: 4rem; --space-20: 5rem; --space-24: 6rem;
  --space-32: 8rem; --space-40: 10rem; --space-48: 12rem;
  --space-component-inline: var(--space-6);
  --space-component-block: var(--space-4);
  --space-content: clamp(1.5rem, 3vw, 3rem);
  --space-section: clamp(5rem, 10vw, 10rem);
  --space-section-dramatic: clamp(8rem, 16vw, 16rem);
  --space-page-gutter: clamp(1.25rem, 3.25vw, 4rem);
}
```

Use 4px increments inside components, 8px rhythm between related elements, and fluid spacing between sections. Dramatic whitespace must separate narrative acts or isolate a single statement; it is not an arbitrary empty block.

## 9. Editorial Grid System

```css
:root {
  --page-max: 120rem;       /* 1920px */
  --content-max: 90rem;     /* 1440px */
  --reading-max: 43rem;     /* 688px */
  --grid-columns: 12;
  --grid-gap: clamp(1rem, 1.5vw, 1.75rem);
  --grid-gutter: var(--space-page-gutter);
}
```

| Viewport | Columns | Gap | Gutters |
|---|---:|---:|---:|
| ≥1440px | 12 | 24–28px | 48–64px |
| 1024–1439px | 12 | 20–24px | 32–48px |
| 768–1023px | 8 | 20px | 32px |
| 0–767px | 4 | 12–16px | 20–24px |

- Full-width container: width 100%, capped at `--page-max` only when required by ultra-wide composition.
- Content container: max `--content-max`, centered with grid gutters.
- Reading container: max `--reading-max`; may align to columns 2–7 or 6–11 instead of center.
- Full bleed: image reaches viewport edge; text still aligns to a grid line.
- Breakout: may extend 1–2 columns beyond its content region, never beyond safe viewport bounds.
- Offset compositions favor 4/8, 5/7, 7/5, or 3/6 plus 3 empty columns—not repetitive 6/6.

## 10. Asymmetric Layout Rules

1. Establish the grid first; identify the alignment anchor before breaking it.
2. Each scene gets one primary imbalance: scale, position, proportion, or whitespace—not all four.
3. Offset headings start 1–3 columns away from related body copy.
4. Images may cross one internal grid boundary; text may overlap imagery only on a verified solid/overlay contrast zone.
5. Maintain at least one intentionally empty column on desktop for editorial tension.
6. Overlaps must not obscure faces, hands, service information, controls, or focus indicators.
7. Mobile converts lateral tension into vertical offset, crop contrast, alternating alignment, or edge breakout.

## 11. Imagery & Photography System

| Category | Direction | Preferred ratios |
|---|---|---|
| Beauty | Natural skin/hair texture, subtle expression, close editorial framing | 4:5, 3:4, 2:3 |
| Treatment | Hands, tools, hair movement, authentic craft | 3:2, 4:3, 1:1 |
| Environment | Architecture, mirrors, reflections, warm directional light | 16:9, 3:2, 21:9 |
| Atmosphere | Stone, linen, water, shadow, blur, abstract detail | 1:1, 5:4, 9:16 |

- Store a focal point per asset as normalized `x/y`; map it to `object-position` at every breakpoint.
- Hero desktop uses 16:9–21:9 or a 7-column portrait; hero mobile uses an independently authored 4:5 or 3:4 crop.
- Never place essential text over uncontrolled high-frequency detail. Use an ink scrim of 32–56% only after contrast testing.
- Preserve face gaze direction and negative space for type. Never crop through eyes, fingertips, or a key tool action.
- Retouching preserves honest skin, hair texture, age, and material detail. Do not use plastic skin, exaggerated transformation, perfection tropes, or generic wellness stock imagery.
- The photographic voice is observational, intimate, tactile, art-directed, and emotionally controlled. Sequence human presence → craft → space/material → result so imagery tells a complete story rather than functioning as decoration.
- Use AVIF first, WebP fallback, explicit width/height or `aspect-ratio`, responsive `srcset`, and lazy-load below the fold.
- Alt text describes the meaningful action/atmosphere; decorative material crops use empty alt text.

## 12. Nature Distilled Principles

- Translate stone into mineral neutrals and matte texture; linen into soft grain and folds; wood into warmth and linear rhythm; water into reflection and measured motion.
- Texture overlay: monochrome grain, 2–4% opacity, `mix-blend-mode: multiply` only when readable.
- Prefer natural side light, deep but detailed shadow, and tactile close-ups.
- Organic shapes are rare image masks or seams with a minimum 16px curvature radius; they are not UI card shapes.
- Never use leaf icons, botanical clip art, green-heavy palettes, generic candles, stacked stones, or spa clichés.

## 13. Component System

### Component tokens

```css
:root {
  --border-hairline: 1px;
  --border-emphasis: 2px;
  --radius-none: 0;
  --radius-subtle: 2px;
  --radius-art: 24px;
  --shadow-none: none;
  --shadow-elevated: 0 16px 48px rgb(14 14 13 / .12);
  --focus-ring-width: 3px;
  --focus-ring-offset: 3px;
  --focus-ring-color: var(--interactive-focus);
  --focus-ring-accent: var(--accent-primary);

  --button-primary-bg: var(--accent-primary);
  --button-primary-fg: var(--color-ink-950);
  --button-primary-bg-hover: var(--color-acid-500);
  --button-secondary-bg: transparent;
  --button-secondary-fg: var(--text-primary);
  --button-secondary-border: var(--border-strong);
  --button-height: 3.25rem;
  --button-padding-inline: 1.5rem;
  --button-radius: var(--radius-none);

  --input-bg: transparent;
  --input-fg: var(--text-primary);
  --input-border: var(--border-subtle);
  --input-border-focus: var(--border-strong);
  --input-height: 3.5rem;
  --input-radius: var(--radius-none);

  --nav-height: 5rem;
  --nav-bg: color-mix(in srgb, var(--background-primary) 92%, transparent);
  --editorial-rule: var(--border-hairline) solid var(--border-subtle);
  --wordmark-min-width-digital: 7.5rem;
  --wordmark-tracking: .12em;
}
```

### Specifications

| Component | Anatomy and behavior |
|---|---|
| Interim wordmark | Exact text `ATELIER ÉLAN`, uppercase, with the accent preserved. Use measured tracking, no icon, script, shadow, outline, distortion, or decorative effect. Minimum digital width 120px; clear space equals at least one cap height. Use charcoal/ink on light surfaces or ivory on dark surfaces; place over imagery only in a quiet, contrast-safe zone. This remains provisional until a final logo is approved. |
| Navigation | Wordmark, 4–6 text links, booking CTA. Transparent over safe hero zones; becomes blurred ivory at scroll. Active page uses underline/rule, not a pill. |
| Mobile navigation | 56px top bar; full-screen inverse sheet; 48px minimum rows; close button always visible; focus trapped and restored. |
| Primary CTA | Acid fill, ink text, min 52px height desktop/48px mobile; one primary action per scene. |
| Secondary CTA | Transparent with 1px ink border; hover fills ink and reverses text. |
| Text link | Visible underline or arrow, 44×44px minimum effective target; underline offset 4px. |
| Editorial heading | Eyebrow + display heading + optional rule/number; may span/offset columns without wrapping body copy around it. |
| Service/Treatment | Number, title, duration, price, summary, image; structured as editorial row or chapter—not a rounded card grid. |
| Editorial image block | Image + caption + credit + optional chapter marker; fixed ratio and focal metadata required. |
| Horizontal story | Intro, progress, 3–5 panels, exit cue; keyboard buttons and vertical fallback required. |
| Gallery | Mixed-ratio authored grid; lightbox optional; no auto-rotation; preserve captions and keyboard order. |
| Testimonial/Quote | Serif quote, grotesk attribution, optional portrait; one statement per composition. |
| Booking CTA | High-contrast climax with concise promise, one primary action, secondary contact route. |
| Form fields | Persistent label, 56px control, helper/error below, native semantics, validation on blur. |
| Date/time selection | Grouped date then available time; selected state uses border + label/check, never color alone. |
| Footer | Inverse editorial grid: identity, address, hours, navigation, social, legal; no oversized link cloud. |
| Pagination/scroll indicator | Mono index and rule; controls are labeled; current position announced without moving focus. |

State priority is disabled → loading → active → focus → hover → default. Disabled controls remain legible and use native `disabled`; loading actions use `aria-busy`, prevent duplicate submission, and retain their label context.

## 14. Interaction System

- Hover reinforces an existing affordance; all primary behavior works by click/tap and keyboard.
- Buttons change color or reveal a directional line without moving surrounding layout.
- Image links may scale internally to 1.025; container bounds remain fixed.
- Focus uses a 3px charcoal ring with 3px offset and an optional outer chartreuse accent; the charcoal boundary provides ≥3:1 contrast on light surfaces. Never remove it.
- Route changes move focus to the main heading and restore scroll/state on backward navigation.
- Pointer targets are at least 44×44px; adjacent targets have at least 8px separation.
- Booking gives immediate loading, success, and recoverable error feedback near the affected field.

## 15. Motion System

```css
:root {
  --duration-fast: 140ms;
  --duration-default: 240ms;
  --duration-slow: 480ms;
  --duration-cinematic: 900ms;
  --easing-standard: cubic-bezier(.2, 0, 0, 1);
  --easing-enter: cubic-bezier(.16, 1, .3, 1);
  --easing-exit: cubic-bezier(.4, 0, 1, 1);
  --easing-editorial: cubic-bezier(.77, 0, .18, 1);
}
```

- **Micro interaction:** 140–240ms; color, opacity, underline, focus, press feedback.
- **Narrative motion:** 480–700ms; section copy, mask reveals, chapter transitions.
- **Cinematic transition:** 700–900ms; hero/image scene changes, used at most once per viewport.
- Animate `transform`, `opacity`, and masks; avoid width/height/top/left animation and layout shifts.
- Entrance decelerates; exits are approximately 65% of entrance duration. Motion is interruptible and never blocks input.
- Under `prefers-reduced-motion: reduce`, remove parallax, scroll scrub, autoplay, scale travel, and stagger; render final states immediately.

## 16. Scroll-Triggered Storytelling

1. DOM and reading order always match the narrative.
2. Trigger once when 15–25% of a section enters the viewport unless replay has meaning.
3. Text reveal: opacity 0→1 and translateY max 24px, 480ms, stagger 40–60ms.
4. Image mask reveal: 600–900ms; preserve image dimensions throughout.
5. Sticky chapter: maximum 160dvh desktop and 120dvh tablet; never trap normal scrolling.
6. Progress indicators expose the current chapter in visible text and accessible state.
7. Background transitions occur between semantic surfaces and maintain contrast throughout interpolation.

## 17. Parallax Storytelling

- Limit to one background and one foreground layer; speeds approximately `.92` and `1.04` relative to scroll.
- Maximum total drift: 48px desktop, 24px tablet, none mobile by default.
- Use for atmospheric materials, hero depth, or deliberate type/image separation—not service data or controls.
- Reserve overscan within the image frame so movement never exposes empty edges.
- Disable below 768px, on coarse pointers when performance is weak, and for reduced motion.

## 18. Horizontal Scroll Journey

- Use at most once per page for 3–5 chapters such as Consult → Design → Ritual → Refine → Result.
- Desktop track uses panels of 68–82vw with 24–48px gaps; vertical scroll maps to horizontal translation with a visible progress rule.
- Provide previous/next buttons, keyboard operation, direct chapter links, and a “Skip journey” route.
- Do not hijack trackpad horizontal gestures or hide browser scrolling.
- Tablet uses a native horizontal snap gallery with visible next-panel affordance.
- Mobile defaults to a vertical numbered sequence; a horizontal snap variant is allowed only when every card is fully operable and no key text is clipped.

## 19. Responsive Behavior

```css
:root {
  --breakpoint-sm: 30rem;   /* 480px */
  --breakpoint-md: 48rem;   /* 768px */
  --breakpoint-lg: 64rem;   /* 1024px */
  --breakpoint-xl: 90rem;   /* 1440px */
  --breakpoint-2xl: 120rem; /* 1920px */
}
```

- **Desktop:** full 12-column freedom, controlled overlaps, large crops, sticky scenes, one horizontal journey.
- **Tablet:** 8-column grid; reduce overlaps and parallax; keep offset proportions and typographic contrast.
- **Mobile:** 4-column recomposition; change sequence intentionally; use edge-to-edge crops, bold type, vertical chapter rhythm, and concise labels.
- At 375px no horizontal page overflow is allowed. Test 375, 768, 1024, 1440, and 1920px plus landscape.
- Use `min-height: 100dvh`; fixed navigation reserves content offset; no critical content sits behind sticky controls.
- Editorial hierarchy and content remain identical across breakpoints even when interaction changes.

## 20. Accessibility

- Meet WCAG 2.2 AA: text ≥4.5:1; large text and meaningful UI boundaries ≥3:1.
- Maintain semantic heading order, landmarks, skip link, visible focus, and logical DOM order despite visual offsets.
- Navigation, galleries, horizontal journeys, dialogs, date/time selection, and booking are fully keyboard operable.
- Image alt text explains meaningful action or atmosphere; decorative textures use `alt=""`.
- Forms use visible labels, `autocomplete`, specific inline errors, `aria-describedby`, and a focused error summary for multiple errors.
- Never communicate selected, error, success, or progress using color alone.
- Auto-moving content provides pause/stop; motion pauses offscreen and honors reduced motion.
- Text remains functional at 200% zoom; no essential copy is embedded in imagery.

## 21. Design Tokens

The token dependency is strictly **primitive → semantic → component → composition**. Components never consume primitive color values directly. One-off editorial placement may remain a local composition value when it has no reusable meaning.

Recommended file structure:

```text
tokens/
├── primitives.css
├── semantic.css
├── components.css
└── index.css
```

Naming convention: `--{category}-{item}-{variant}-{state}`; component tokens use `--{component}-{property}-{state}`. Document purpose beside every new semantic or component token. Theme changes override semantic tokens, not primitives or component anatomy.

## 22. Design Guardrails

**Always:** typography-led hierarchy, disciplined grid, deliberate asymmetry, cinematic crops, natural materiality, generous responsive whitespace, purposeful motion, clear booking path, accessible fallbacks, honest beauty language, calm assured voice, and visible individual attention.

**Never:** generic SaaS sections, centered hero plus three cards, repetitive card grids, glassmorphism, glows, blue/purple gradients, excessive pills/badges/shadows/radii, generic stock spa imagery, icon-heavy features, endless 50/50 layouts, obvious botanical decoration, gold-on-black clichés, arbitrary animation, corrective or perfection language, hype, urgency, scarcity, or generic luxury superlatives.

## 23. Do / Don't Examples

| Do | Don’t |
|---|---|
| Offset a heading by two columns while aligning its baseline to the image caption. | Place elements arbitrarily because asymmetry “looks editorial.” |
| Use one chartreuse booking CTA against warm ivory or ink. | Scatter neon accents across labels, borders, and decorative marks. |
| Recompose hero type and crop independently for mobile. | Scale the desktop hero down until it loses impact. |
| Sequence portrait, hands, material, and environment to tell a story. | Fill a uniform card grid with interchangeable stock images. |
| Use a subtle 24–48px parallax drift with a static fallback. | Create aggressive scroll-jacking or animation-dependent content. |
| Keep services as clear numbered rows with duration and price. | Hide practical information behind hover, gesture, or visual effects. |

## 24. Implementation Guidelines

1. Build and test primitive, semantic, then component tokens before page compositions.
2. Implement foundations in this order: color → typography → spacing → grid → imagery → components → motion.
3. Keep content/data separate from presentation; avoid component abstraction until a pattern repeats with the same responsibility.
4. Use semantic HTML first; enhance with animation after the static experience is complete.
5. Reserve image dimensions, self-host/subset fonts where possible, and lazy-load below-fold media to protect Core Web Vitals.
6. Validate every component in default, hover, focus, active, disabled, loading, error, and success states where applicable.
7. Review each page as a rhythm: quiet → dramatic → quiet → immersive → informative → emotional → booking.
8. Any deviation from this document must state the page-specific reason and must not introduce a competing visual language.

### Brand voice in interface copy

- Write in a calm, assured, intimate, sensory, intelligent, and concise voice.
- Expressive headlines may carry editorial emotion; navigation, prices, forms, policies, and booking instructions remain direct and unambiguous.
- Prefer language of craft, attention, ritual, texture, refinement, individuality, presence, and enduring care.
- Avoid language that implies fixing flaws, dramatic transformation, perfection, status performance, urgency, or scarcity.
- Calls to action should be respectful and specific: “Book your appointment,” “Begin your ritual,” or “Explore treatments.” Do not use pressure language.
- Do not repeat the brand promise, brand idea, or campaign line mechanically. Let layout, imagery, service clarity, and behavior substantiate them.

### Final creative-direction validation

| Keyword | Concrete system evidence | Status |
|---|---|---|
| Asymmetric Layout | 12/8/4 grid, imbalance rules, offset and breakout constraints | ✓ |
| Cinematic Imagery | Four photography categories, ratios, crops, focal points, overlays | ✓ |
| Art Direction | Rhythm model, signature devices, one dominant gesture | ✓ |
| Immersive Interactive Storytelling | Narrative sequence, motion, progress and fallback rules | ✓ |
| Editorial Grid / Magazine | Responsive columns, reading widths, offsets, pull-quote language | ✓ |
| Parallax Storytelling | Layer, speed, travel, breakpoint and reduced-motion limits | ✓ |
| Nature Distilled | Material palette, texture/light rules, explicit anti-clichés | ✓ |
| Bold Typography Mobile | Mobile fluid sizes, authored line breaks and viewport presence | ✓ |
| Minimal Swiss | Rational grid, limited type roles, precise labels and hierarchy | ✓ |
| Scroll-Triggered Storytelling | Trigger, distance, timing, sticky and progress specifications | ✓ |
| Horizontal Scroll Journey | Scope, dimensions, controls and mobile transformation | ✓ |

**Distinctiveness test:** Removing all photography and the Atelier Élan name still leaves a recognizable system: monumental grotesk/italic-serif tension, mono chapter labels, disciplined asymmetric grids, warm paper/ink contrast, surgical chartreuse emphasis, dramatic whitespace, editorial rules, and a quiet-to-cinematic narrative rhythm. **Pass.**

### Brand-recognition validation

A finished page should express at least **five of these seven signals** without relying on the name alone:

1. Monumental grotesk paired with selective high-contrast serif.
2. Disciplined asymmetric editorial grid.
3. Warm paper, ink, stone, and walnut material palette.
4. One surgical chartreuse focal signal.
5. Intimate cinematic imagery of person, craft, space, or material.
6. Mono metadata, numbering, hairline rules, or vertical editorial labels.
7. Calm, assured language centered on attention, craft, individuality, and ritual.

Passing the recognition test does not authorize adding more signals. Restraint, accessibility, and the one-dominant-gesture rule still apply.
