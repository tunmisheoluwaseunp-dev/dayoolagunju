# Portfolio motion, theme, and responsive upgrades

Implement the requested portfolio refinements while preserving all existing copy, section order, and brand colors.

## Build
- Add an accessible, persistent light/dark toggle with a pre-paint theme choice, keyboard shortcut, and first-visit discovery cue.
- Add the rotating hero phrase, moving outline-text band, one-time typing eyebrow, scroll-linked About heading, and restrained text-roll/shimmer effects.
- Complete the responsive pass for navigation, hero, touchable carousels, booking bar, calculator, and mobile sheets.
- Keep existing content and booking behavior; honor reduced motion and semantic design tokens.

## Technical details
- Keep the single-page TanStack route and shared portfolio components. Use the root shell for the pre-paint theme script and CSS variables for both palettes.
- Validate all listed viewport widths for horizontal overflow, then inspect both themes at 375px, 768px, and 1440px.
