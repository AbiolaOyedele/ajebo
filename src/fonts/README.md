# Fonts

This project loads two brand faces through `next/font/local` from this folder:

| File | Used for |
| --- | --- |
| `OrganicSlowing.ttf` | Display — headings, buttons, nav, tile labels |
| `Lufga-Regular.otf` | Body text (400) |
| `Lufga-Medium.otf` | Body text (500) |
| `Lufga-SemiBold.otf` | Body text (600) |
| `Lufga-Bold.otf` | Body text (700) |

The font binaries are **not committed** — they are commercial licences and this
repository is public. Copy them into this folder before running `npm run build`.
If the licence permits redistribution, delete the `src/fonts/*.otf` and
`src/fonts/*.ttf` lines from `.gitignore` and commit them.
