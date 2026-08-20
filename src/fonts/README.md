# Fonts

Two brand faces, loaded through `next/font/local` in `src/app/layout.tsx`.

| File | Weight | Used for |
| --- | --- | --- |
| `OrganicSlowing.ttf` | 400 | Display: headings, buttons, nav, tile labels |
| `Lufga-Regular.otf` | 400 | Body text |
| `Lufga-Medium.otf` | 500 | Body text |
| `Lufga-SemiBold.otf` | 600 | Body text |
| `Lufga-Bold.otf` | 700 | Body text |

Organic Slowing has a single weight, so anything set in the display face reaches
the WCAG large-text threshold by size rather than by weight. Lufga has real
weights available, so body text can get there either way.

> **Licensing.** These are commercial faces committed to a public repository at
> the project owner's direction. Confirm the licences permit redistribution and
> web embedding before the site goes live.
