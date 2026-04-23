# HelloPrint Logo Usage

The wordmark is our primary mark. The monogram is a short-form substitute for small spaces. That's it — two kinds of marks, five files.

## Why a wordmark, not a symbol

HelloPrint is a verbal brand. "HelloPrint" is a sentence — a greeting and a promise — that a symbol can't carry on its own. We lead with the wordmark in every context where the name can be read at that size. When it can't (16px favicon, 24px app icon, social avatar), we swap in the monogram.

## The five files

All files live in `assets/logos/` in this plugin.

| File | Use case | When to pick it |
| --- | --- | --- |
| `helloprint-wordmark-white.svg` | Wordmark on dark | Thamar Black panels, dark green headers, dark product imagery |
| `helloprint-wordmark-black.svg` | Wordmark on light | White / Snowflake pages, light product imagery, print docs |
| `helloprint-monogram-green.svg` | Default monogram | App icons, favicons, social avatars, small brand badges |
| `helloprint-monogram-white.svg` | Monogram on light | Light surfaces where you want a neutral mark instead of green |
| `helloprint-monogram-dark.svg`  | Monogram on dark | Dark surfaces where the green monogram would clash with other green |

**Missing:** wordmark on Charmed Green background. The brand team is producing this; for now, keep the wordmark off full-green OOH backgrounds — split-strip or dark green instead.

## Clear space

Keep a margin equal to the height of the capital **H** in the wordmark on all four sides. For the monogram, keep a margin equal to one-quarter of the circle diameter on all sides. No text, imagery, or UI chrome enters this zone.

## Minimum sizes

| Mark | Digital | Print |
| --- | --- | --- |
| Wordmark | 120px wide | 25mm wide |
| Monogram | 24px | 8mm |

Below these, swap to the monogram (for wordmark shrink) or skip the mark entirely (for monogram shrink — e.g. a 12px favicon falls back to a tab emoji or nothing).

## Placement

- **Top-left** is the default. Every template, every page.
- **Centre-top** acceptable for single-column emails and narrow mobile views.
- **Bottom-right** only for watermarks on exported assets (PDFs of decks, rendered PNGs).
- Do not place the logo on a patterned or busy background without a solid underlay. Either drop a tinted panel or switch to a plain background.

## Colour rules

- On white / Snowflake → **black wordmark** (`helloprint-wordmark-black.svg`).
- On Thamar Black / dark green / dark image → **white wordmark** (`helloprint-wordmark-white.svg`).
- Never place the black wordmark on green. It's illegible and off-brand.
- Never place the white wordmark on anything lighter than Charmed Green.
- Monogram background fills are baked in. Don't recolour them — pick the file that matches your context.

## What not to do

- Don't rotate the logo.
- Don't outline or add a drop shadow.
- Don't stretch or squish — preserve aspect ratio at all times.
- Don't recolour the wordmark to a brand accent (red, mango, teal). The wordmark is black or white.
- Don't place the logo inside a button or inside a tight panel frame. It needs breathing room.
- Don't pair the wordmark and monogram in the same surface — pick one.
- Don't animate the logo beyond a simple fade-in. No bouncing, rotating, or scrubbing.
- Don't typeset "HelloPrint" in Inter and call it a logo. Use the wordmark file.

## Favicon and app icon

- Favicon (16–32px): `helloprint-monogram-green.svg` exported as `.ico` + `.png` sizes.
- iOS / Android app icon: `helloprint-monogram-green.svg` on its circle background. Do not add a second outer ring.
- macOS dock icon: same, with the system's own rounded-square mask applied by the OS.
- Slack / Notion / Figma workspace icon: `helloprint-monogram-green.svg`.

## Co-branding

When pairing HelloPrint with a partner logo:

- HelloPrint on the left, partner on the right.
- Separate with a vertical rule: 1px, `color.brand.orochimaru` (`#D9D9D9`), full height of the taller mark.
- Match visual weight, not pixel height — a thick partner logo at 40px may need our wordmark at 44px to read equal.
- Never lock HelloPrint inside the same bounding box as a partner logo.

## Quick decision tree

```
Is the surface dark?
├── Yes → wordmark-white
└── No  → Is the surface Charmed Green?
         ├── Yes → DON'T place the wordmark (use split-strip background instead, or await green-background file)
         └── No  → wordmark-black

Is there room for the wordmark (≥120px / 25mm)?
├── Yes → Use wordmark per colour rule above
└── No  → Use monogram-green (default) or monogram-dark/white if green clashes
```
