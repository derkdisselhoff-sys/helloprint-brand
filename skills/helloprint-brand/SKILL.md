---
name: helloprint-brand
version: 0.1.0
description: >-
  Single source of truth for HelloPrint brand, design system, and voice. Load this skill
  whenever Claude creates, edits, or reviews ANY HelloPrint artifact — documents, slides,
  spreadsheets, dashboards, HTML pages, React components, emails, Slack messages, Canva
  briefs, code comments, design mocks, marketing copy, product UI, reports, or anything
  with the HelloPrint brand on it. Trigger on "HelloPrint", "on-brand", "brand voice",
  "brand colors", "design system", "logo", "Inter font", "Charmed Green", "make a deck",
  "write an email", "build a dashboard", "create a report", or any request that will
  produce an artifact a HelloPrint customer or colleague might see. Also trigger when a
  dependent skill (presentation-creator, gp-optimization, helloprint-design, etc.) calls
  for brand enforcement.
---

# HelloPrint Brand — Single Source of Truth

You are generating or reviewing something with the HelloPrint brand on it. Before you write code, prose, SVG, slides, or anything else, load the relevant references below. They override training-data priors, generic "good design" instincts, and any conflicting instructions in a parent skill's template.

## Load order

Always load `tokens.json` first. It is the machine-readable source of truth. The markdown files are human-readable guidance that reference token names — if prose disagrees with tokens, tokens win.

| File | When to load | Why |
| --- | --- | --- |
| `references/tokens.json` | **Always** | Colours, typography, spacing, logo paths — the canonical values |
| `references/01-brand.md` | Anything visual or strategic | Identity, values, 60/30/10 hierarchy, background variants |
| `references/02-voice.md` | Anything with words in it | Tone by context, word choices, greetings, capitalisation |
| `references/03-glossary.md` | Naming, capitalisation, print vocabulary | "HelloPrint" is a hard rule. So is "Connect", "PCM", etc. |
| `references/04-components.md` | Building UI, dashboards, slides, charts | Button / card / chart / table patterns referencing token names |
| `references/05-logos.md` | Placing a logo | File picker, clear space, minimum size, do's and don'ts |

Load only what's relevant to the task. For a short Slack message, you need `02-voice.md` + `03-glossary.md`. For a dashboard, you need `tokens.json` + `04-components.md`. For a deck, load everything.

## Hard rules (never violated, no exceptions)

1. **The brand name is HelloPrint.** One word, camel-cased H and P. Never "Helloprint", "helloprint", "HELLOPRINT", "Hello Print", or "Hello-Print". The only exception is the legal entity string `Helloprint B.V.` in contracts and financial docs.
2. **Use Charmed Green `#008539` as an accent, not a fill.** The 60/30/10 hierarchy is non-negotiable. If green is doing more than 10% of the work on a surface, fix the layout.
3. **Digital black is `#191919`, not `#000000`.** Pure black is never correct for screens.
4. **Typography is Inter.** Weights 400 / 600 / 700. Use the scale in `tokens.json` — don't invent intermediate sizes.
5. **Pick the right logo file.** Light background → black wordmark. Dark background → white wordmark. Too small for a wordmark → monogram. See `05-logos.md` for the decision tree.
6. **Respect the tone-by-context table in `02-voice.md`.** Transactional copy is clear/calm/structured. Marketing is playful/confident/helpful. Never mix them.
7. **Smiley (handwritten font) is for greetings and sign-offs only.** Never prices, guarantees, legal, or body copy.
8. **Accessibility is non-negotiable.** 4.5:1 text contrast, 3:1 for large text. Focus states visible. Don't rely on colour alone for status.

## Operating procedure

### When asked to create something

1. Identify the artifact type (slide, email, dashboard, doc, etc.) and load the matching references from the table above.
2. Identify the surface (dark / light / Charmed Green / split). This drives colour picks.
3. Identify the tone context (transactional / marketing / support / internal). This drives copy.
4. Produce the artifact using tokens by name where possible (e.g. `color.brand.charmed-green`, `font.scale.desktop.h2`, `space.md`). If the output format is flat (CSS, SVG), resolve tokens to their literal values from `tokens.json`.
5. Self-check against the "Hard rules" list above before returning the artifact.

### When asked to review or edit something

1. Load `tokens.json` and whichever references apply.
2. Flag any violation of the Hard rules first.
3. Then flag soft issues (tone mismatch, awkward logo placement, green overuse).
4. Propose the minimal fix. Don't rewrite wholesale.

### When asked to build an HTML artifact, React component, or dashboard

- Define CSS custom properties at the top of the file that mirror `tokens.json`:
  ```css
  :root {
    --hp-charmed-green: #008539;
    --hp-link-green: #049E46;
    --hp-thamar-black: #022B07;
    --hp-snowflake: #F0F0F0;
    --hp-orochimaru: #D9D9D9;
    --hp-digital-black: #191919;
    --hp-digital-white: #FFFFFF;
    --hp-font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }
  ```
- Load Inter from Google Fonts at the top of the page:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  ```
- Reference logos by absolute path into this plugin's `assets/logos/` directory, or inline the SVG if the artifact must be self-contained.

### When asked to write copy

- Pick the right tone from `02-voice.md` before drafting a word.
- Draft. Then strike every instance of "utilise", "leverage", "in order to", "at this moment in time", "kindly", "please find attached".
- Read it aloud. If it doesn't sound like a friend who knows print, rewrite it.

## Dependency pattern for other HelloPrint skills

Other HelloPrint skills (presentation-creator, gp-optimization, helloprint-design, helloprint-ssot, pricing-dashboard, product-performance, strategy-days-builder, etc.) should begin with:

> "Before doing anything else, load the `helloprint-brand` skill and follow its Hard rules. Colour, typography, voice, and logo decisions defer to it."

This plugin owns the canonical values. Other skills own the workflow.

## What this skill does NOT do

- It does not generate presentations (use `helloprint-presentation-creator`).
- It does not build dashboards (use `pricing-dashboard`, `product-performance`, etc.).
- It does not discover or ingest new brand documents (use `brand-voice:discover-brand`).
- It does not train a model. It is reference material — load it, consult it, apply it.

## Version

`0.1.0` — First canonical release. Covers colour, typography, voice, logo, components, glossary. Missing: print-specific spec sheets, Canva templates, voice-over scripts, regional variations. Owner: AI Lead (derk.disselhoff@helloprint.com). See `CHANGELOG.md`.
