# Scatter mobile expertise badges

## Scope
- Change only the expertise badges in the hero section on screens below `lg`.
- Keep the desktop badge array, percentage positions, and animation unchanged.

## Implementation
- Remove the mobile wrapped badge row above the name.
- Add a mobile-only absolute overlay spanning the full hero section height.
- Give every badge an intentional, distinct percentage-based position distributed from the top through the bottom of the hero.
- Keep each pill compact with `w-max`, `whitespace-nowrap`, small type, and tight padding.
- Place badges behind primary content and disable pointer events so they remain atmospheric without blocking links or text.
- Tune opacity and positioning to avoid obscuring important content on common phone widths.

## Verification
- Check phone and desktop layouts in the live preview.
- Confirm all six badges appear, no horizontal overflow occurs, key text and controls remain usable, and desktop placement is unchanged.
- Confirm the latest build completes without errors.
