# HelloPrint Components & Layout

> ⚠️ **PROVISIONAL — pending brand-team sign-off.** This file extrapolates component patterns from the canonical Brand DNA + Visual Identity sources. Button shapes, radius choices, motion durations, form styling, table zebra-striping, and chart palettes beyond the documented brand rules are interpretations — reasonable defaults, but not yet blessed. Treat this file as a starting point for production UI; when in doubt, defer to `tokens.json` and `01-brand.md`.

Patterns for assembling on-brand artifacts — HTML dashboards, React components, slides, emails, reports. Values reference [`tokens.json`](./tokens.json); use the token name, not the literal, wherever possible.

## Buttons

**Primary** — the single most important action on a surface. Only one per screen region.

- Background: `color.brand.charmed-green` (`#008539`)
- Text: `color.neutral.digital-white` (`#FFFFFF`)
- Hover: `color.brand.link-green` (`#049E46`)
- Radius: `radius.sm` (`4px`)
- Padding: `space.sm` vertical / `space.md` horizontal
- Weight: `font.weight.semi-bold` (600)
- Never outlined; never ghost for a primary.

**Secondary** — alternative action.

- Background: transparent
- Border: 1px `color.brand.charmed-green`
- Text: `color.brand.charmed-green`
- Hover: background `color.brand.charmed-green`, text white.

**Tertiary / link** — inline, low-weight action.

- Text: `color.brand.link-green`
- Underline on hover only.
- No background, no border.

**Destructive** — reserved for irreversible actions (delete, cancel order).

- Background: `color.accent.heroic-red` (`#D64545`)
- Text: white
- Always paired with a confirmation step.

## Links

- Inline links: `color.brand.link-green`, underline on hover.
- Visited: no colour change (don't use purple).
- Never all-caps; never bold a link to emphasise "linkiness."

## Cards

- Background: `color.brand.snowflake` (`#F0F0F0`) on white pages, `color.neutral.digital-white` on Snowflake pages.
- Border: none by default. If separation is needed, use 1px `color.brand.orochimaru` (`#D9D9D9`) instead of a shadow.
- Radius: `radius.md` (`8px`).
- Padding: `space.lg` (`24px`) default; `space.md` for dense layouts.

## Headings

Use the scale from `tokens.json` (`font.scale.desktop.*` / `font.scale.mobile.*`). Don't invent intermediate sizes.

- Never skip levels (H1 → H3) just because the visual weight feels right — fix the design instead.
- Never use ALL CAPS for H1 or H2. Labels only.
- Never apply Charmed Green to body headings. Green is for accents and the logo, not for section titles.

## Body copy

- Default to `font.scale.desktop.body` (Inter Regular 14/22).
- Line length: 60–75 characters per line for long reads. If you're over 90, narrow the container.
- Paragraph spacing: one `space.md` gap (`16px`) — don't indent.

## Tables

- Zebra striping with `color.brand.snowflake` on even rows, white on odd (or vice versa if the page is Snowflake).
- Header row: `font.scale.desktop.h4` weight, `color.neutral.digital-black` text, bottom border 1px `color.brand.orochimaru`.
- Right-align numeric columns, left-align text, centre only for short status chips.

## Charts

When building dashboards (Chart.js, Recharts, Plotly, pure SVG):

- Primary series → `color.brand.charmed-green`.
- Secondary series → `color.neutral.digital-black`.
- Tertiary → `color.accent.seaside` (`#67A5B1`).
- Destructive / warning series → `color.accent.heroic-red`.
- Positive highlight → `color.accent.ripe-mango`.
- Don't use rainbow scales. If a series exceeds 5, switch to a sequential ramp built from `charmed-green` → `thamar-black`.
- Gridlines: 1px `color.brand.orochimaru` at 60% opacity. No vertical gridlines unless it's a time axis.
- Axis labels: `font.scale.desktop.body-small`, `color.neutral.digital-black` at 70% opacity.
- Tooltip background: `color.brand.thamar-black`, text white.

## Forms and inputs

- Input border: 1px `color.brand.orochimaru`.
- Focus: border `color.brand.charmed-green`, outline 2px `charmed-green` at 25% opacity.
- Error: border `color.accent.heroic-red`, helper text `heroic-red`.
- Placeholder: `color.neutral.digital-black` at 45% opacity.
- Labels above, not inside. Required marker: small green dot, never a red asterisk.

## Slide decks (PowerPoint, Google Slides, Keynote)

- Use the HelloPrint Presentation Creator skill (`helloprint-presentation-creator`) for on-brand decks. It copies from the approved template.
- Title slide: Thamar Black background, wordmark (white) top-left, title in Inter Bold white, 48pt.
- Section dividers: full Charmed Green or split-strip background.
- Content slides: white or Snowflake background, H2 in Inter Bold 28pt, body in Inter Regular 16/24.
- One chart per slide. If you have two, you have two slides.

## Emails (transactional and marketing)

- Max width 600px.
- Header: wordmark left, Charmed Green divider below.
- Body: Inter Regular 16/24 — larger than in-product because email clients render at a distance.
- Single primary CTA per email. If you need two, write two emails.
- Footer: Helloprint B.V. legal line, unsubscribe link, social icons monochrome (Digital Black).

## Spacing

Stick to the 4px base in `tokens.json` (`space.base = "4px"`). Don't use `13px`, `21px`, `25px`. If the design calls for it, round to the nearest token.

## Motion

- Ease: `cubic-bezier(0.4, 0, 0.2, 1)` for UI transitions.
- Duration: `150ms` for micro (hover, focus), `300ms` for component-level, `500ms` for page-level.
- Respect `prefers-reduced-motion`. Always.

## Accessibility (non-negotiable)

- Text contrast: 4.5:1 minimum for body, 3:1 for large text (18pt+ or 14pt bold).
- Charmed Green on white passes; Charmed Green on Snowflake is borderline — verify with a contrast checker per use.
- Focus states must be visible. Never remove the outline without replacing it.
- Don't rely on colour alone for status. Pair with an icon or text label.
- Touch targets: 44×44px minimum.
