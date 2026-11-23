# Reviewing a Quantic pull request

## Code style

- Avoid comments that restate what the code already says. Comment only non-obvious _why_.
- Prefer descriptive names over abbreviations.
- Keep markup minimal — no wrapper elements that earn their keep.
- Prefer pure functions with explicit inputs and outputs; push side effects to the edges.

## Design system

Reach for the installed Quantic components and design tokens before writing a custom
component or one-off CSS. A hand-built layout or a bespoke style is worth a second look:
check whether an existing component already covers the case before approving new code
that looks like it reinvents one.

## Review checklist

- Comments explain why, not what.
- Names are descriptive, not abbreviated.
- No superfluous wrapper markup.
- Functions are pure where practical; side effects sit at the edges.
- New custom UI or CSS isn't quietly duplicating an existing Quantic component.

## Testing a Quantic project

### What to unit test

- Pure data transformations: input to output, no side effects.
- Business logic: validation, mapping, calculation.
- Integration points: API clients, token handling, query key factories.

### What not to unit test

- Component rendering, mounting, or framework lifecycle (effects, re-renders) — that's
  what end-to-end tests are for.
- Complex user interaction sequences that require mocking a browser environment.
- Implementation details of third-party libraries.
- Simple pass-through wrappers with no logic.

### End-to-end tests

Cover real user flows in a real browser. Keep them targeted: the critical path and
scenarios a unit test genuinely can't reach, not exhaustive coverage of every screen and
state. They are slow and expensive to run and maintain, so each one should earn its place
rather than chase full coverage.
