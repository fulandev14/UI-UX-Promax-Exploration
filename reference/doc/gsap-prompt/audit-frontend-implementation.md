Use the installed GSAP skills to analyze the existing frontend implementation
and design a motion system for this website.

IMPORTANT:
Do not modify any source code yet.

Before proposing animations, read and understand:

- BRAND-GUIDELINES.md
- DESIGN-SYSTEM.md
- all approved visual benchmarks
- the existing frontend implementation
- AGENTS.md
- relevant local Next.js documentation when required

The current visual implementation is already approved.

Do NOT redesign:
- layout
- spacing
- typography
- colors
- imagery
- content
- component structure unless technically required for GSAP integration

GSAP is being introduced only as the motion and interaction layer.

GSAP skill routing:

Always read and apply:
- gsap-core
- gsap-react
- gsap-performance

Then determine whether the following skills are required based on the
actual animation requirement:

- gsap-timeline
- gsap-scrolltrigger
- gsap-plugins
- gsap-utils

Do not use gsap-frameworks because this project uses React + Next.js.

Analyze the website section-by-section.

For each section define:

1. motion intent
2. animation hierarchy
3. animated elements
4. animation trigger
5. recommended GSAP technique
6. GSAP skills required
7. duration and easing direction
8. desktop behavior
9. mobile behavior
10. prefers-reduced-motion fallback
11. performance considerations
12. whether the animation is essential or decorative

The intended motion character is:

- premium
- elegant
- restrained
- cinematic
- editorial
- smooth
- sophisticated

Avoid:

- excessive animation
- animation on every element
- gimmicky effects
- excessive bouncing
- unnecessary rotation
- excessive parallax
- aggressive zoom
- excessive pinning
- animation that makes content harder to consume

Establish clear motion hierarchy.

Hero should receive the strongest motion treatment.
Supporting sections should progressively use more restrained animation.

Output a complete Motion Direction Plan first.

Do not implement anything until the motion strategy has been established.