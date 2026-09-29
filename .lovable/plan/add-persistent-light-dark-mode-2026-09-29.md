# Add persistent light/dark mode

## Scope
- Add one circular Moon/Sun button in the top header, immediately before “Hire Me”.
- Toggle the root page theme in one click and remember the chosen mode across refreshes.
- Keep the current light appearance unchanged.

## Visual treatment
- Add an OLED charcoal dark palette using the existing design tokens: near-black background, white headings, soft-gray body copy, subdued grid lines, and electric-orange accents.
- Give the floating expertise badges a translucent orange-on-charcoal treatment in dark mode.
- Preserve the existing header, mobile menu, hero badge positions, spacing, and all page content.

## Technical details
- Use a small client-side theme control that reads and writes `localStorage`, updates the `dark` class on `<html>`, and avoids a server-rendering mismatch.
- Define dark theme values in the global semantic token layer so all existing sections inherit the mode consistently.
- Update Experience’s scoped color helpers so its required orange/charcoal styling remains legible in both modes.
- Verify the switch, refresh persistence, desktop/mobile layout, overflow, console output, and the latest build status.
