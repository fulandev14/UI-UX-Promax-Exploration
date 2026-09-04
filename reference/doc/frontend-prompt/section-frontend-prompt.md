Use the **`ui-styling` skill** to implement **only the section requested by the user in this turn**.

Follow all rules established in the **Master UI-Styling Implementation Prompt**.

Do not assume a specific section name.

Determine the current section from the user's request.

Before implementation, identify and read:

* `BRAND-GUIDELINES.md`
* `DESIGN-SYSTEM.md`
* the approved visual benchmark corresponding to the requested section
* all previously implemented sections relevant to visual and technical continuity
* `AGENTS.md`
* relevant local Next.js documentation under `node_modules/next/dist/docs/` when required

Use the existing project stack:

* Next.js
* React
* TypeScript
* Tailwind CSS

Reference responsibility:

* `BRAND-GUIDELINES.md` defines brand identity and emotional character.
* `DESIGN-SYSTEM.md` defines reusable visual rules and tokens.
* the approved benchmark for the requested section defines the exact visual target.
* previously implemented sections define reusable technical patterns and continuity references.

Use all previously approved section visual benchmarks and already implemented sections as continuity references.

They are **not templates to copy**.

Study them to preserve:

* typography behavior
* color behavior
* imagery treatment
* spacing rhythm
* grid logic
* visual density
* interaction language
* overall art direction

while creating an implementation appropriate to the section currently requested.

Do not reuse the exact layout of another section unless the approved benchmark explicitly requires it.

---

## Implementation Rules

Implement only the section requested in this turn.

Do not implement the next section.

Do not redesign the approved benchmark.

Do not introduce:

* new art direction
* new typography
* new color system
* conflicting spacing rules
* conflicting imagery treatment
* arbitrary visual patterns

Reuse existing primitives when they genuinely apply.

Do not force reuse when the approved benchmark requires a distinct composition.

Do not create duplicate components or tokens when compatible reusable ones already exist.

If an existing primitive conflicts with the approved benchmark or `DESIGN-SYSTEM.md`, do not distort the visual target merely to reuse that primitive.

Extend or replace it minimally when justified.

---

## Preserve Existing Sections

Do not modify previously approved or implemented sections unless a shared-system issue genuinely requires it.

If a shared primitive must change:

1. minimize the scope
2. verify previously implemented sections for regressions
3. preserve their approved appearance
4. report the change

Do not refactor unrelated code.

---

## Conflict Resolution

If references conflict:

1. `BRAND-GUIDELINES.md` controls brand identity.
2. `DESIGN-SYSTEM.md` controls systematic visual rules.
3. the current approved benchmark controls section-specific composition and visual target.
4. existing implementation controls reusable technical patterns only when compatible.

Resolve conflicts according to responsibility, not implementation convenience.

Do not silently override approved decisions.

---

## Visual Fidelity

Reproduce the approved benchmark as accurately as practical.

Prioritize:

1. composition
2. grid
3. proportions
4. typography hierarchy
5. image crop and focal point
6. spacing and negative space
7. color behavior
8. visual density
9. CTA or interaction hierarchy
10. responsive behavior

Do not treat a visibly different composition as acceptable merely because the code is technically correct.

---

## Technical Consistency

Preserve the existing:

* Next.js architecture
* routing strategy
* React Server/Client Component boundaries
* TypeScript conventions
* Tailwind strategy
* token architecture
* project naming conventions
* component structure

Do not introduce unnecessary dependencies.

Do not switch frameworks or CSS systems.

---

## Responsive Validation

Validate the requested section at minimum at:

* 1440px
* 1280px
* 768px
* 390px

Verify:

* no accidental horizontal overflow
* no broken layout
* no clipped content
* no image distortion
* no unintended overlap
* no unreadable typography
* no broken CTA or navigation behavior

Responsive adaptation must preserve the approved art direction.

---

## Implementation Validation

After implementation:

1. run the project
2. check build/runtime errors
3. check TypeScript errors
4. open the implemented section
5. compare it against its approved benchmark
6. compare it against adjacent already implemented sections
7. fix meaningful visual discrepancies
8. verify responsive behavior
9. perform a reference-conflict audit
10. verify no previously approved section regressed

Do not stop after the first visually acceptable result.

Perform at least one deliberate comparison pass.

---

## Acceptance Requirements

The section is ready for review only when:

* unresolved brand conflicts: `0`
* undocumented design-system overrides: `0`
* critical responsive defects: `0`
* new runtime errors: `0`
* accidental horizontal overflow: `0`
* out-of-scope section implementations: `0`

Any remaining meaningful visual difference from the approved benchmark must be reported.

---

## Final Report

At completion report:

```text
Requested Section: <section name>

Brand Guidelines Compliance: PASS / FAIL
Design System Compliance: PASS / FAIL
Benchmark Fidelity: PASS / MINOR DIFFERENCES / FAIL

Desktop 1440: PASS / FAIL
Laptop 1280: PASS / FAIL
Tablet 768: PASS / FAIL
Mobile 390: PASS / FAIL

TypeScript: PASS / FAIL
Runtime Errors: 0 / <count>
Horizontal Overflow: 0 / <count>
Unresolved Reference Conflicts: 0 / <count>
Out-of-Scope Changes: 0 / <count>

Overall Status:
READY FOR REVIEW / NOT READY
```

Also briefly report:

* files created
* files modified
* reused primitives
* new reusable primitives
* design-system changes, if any
* conflicts found
* how they were resolved
* remaining benchmark differences

---

## Stop Condition

After the requested section is ready for review:

**STOP.**

Do not automatically proceed to another section.

Wait for explicit user approval or another implementation request.
