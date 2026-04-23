# helloprint-brand

The single source of truth for HelloPrint brand, design system, and voice across every Claude surface. Install this plugin and every Helloprinter generating content — artifacts, docs, slides, apps, code, emails — gets consistent, on-brand output by default.

## What's inside

```
helloprint-brand/
├── plugin.json                         # Plugin manifest
├── LICENSE                             # Proprietary — HelloPrint internal use only
├── CODEOWNERS                          # Brand team + AI Lead routing
├── CONTRIBUTING.md                     # PR checklist, versioning workflow
├── CHANGELOG.md
├── README.md                           # You are here
├── .gitignore
├── .gitattributes
├── skills/
│   └── helloprint-brand/
│       ├── SKILL.md                    # Claude's operating instructions
│       └── references/
│           ├── tokens.json             # Canonical design tokens — machine-readable SSOT
│           ├── 01-brand.md             # Identity, values, 60/30/10, backgrounds (from Drive)
│           ├── 02-voice.md             # Tone by context, do's and don'ts (from Drive)
│           ├── 03-glossary.md          # Naming, capitalisation, print vocabulary (provisional)
│           ├── 04-components.md        # Buttons, cards, charts, tables, motion (provisional)
│           ├── 05-logos.md             # Logo files, placement, decision tree
│           ├── editorial/              # Earlier editorial rewrites — kept for reference only
│           └── examples/               # One artifact per type — email, landing, dashboard, slide
└── assets/
    ├── logos/
    │   ├── helloprint-wordmark-white.svg
    │   ├── helloprint-wordmark-black.svg
    │   ├── helloprint-monogram-green.svg
    │   ├── helloprint-monogram-white.svg
    │   └── helloprint-monogram-dark.svg
    └── fonts/
        └── OFL.txt                     # Inter loaded from Google Fonts (not bundled)
```

`tokens.json` is the single source of truth. Tokens use kebab-case under four top-level categories (`color`, `font`, `space`, `radius`) plus `brand`, `logo`, `voice` metadata. When prose in the markdown files disagrees with tokens, **tokens win** — open a PR to fix the prose.

## How it works

`helloprint-brand` is a Claude skill packaged as a Cowork plugin. When Claude is about to produce an artifact — a deck, a dashboard, an email, a report, a React component — the skill description triggers and Claude loads the relevant reference files before writing anything. The result: colour, type, voice, and logo stay consistent by default, without anyone having to remember to "apply the brand."

Other HelloPrint skills (presentation-creator, gp-optimization, helloprint-design, pricing-dashboard, product-performance, strategy-days-builder, etc.) declare a one-line dependency on this plugin:

> "Before doing anything else, load the `helloprint-brand` skill and follow its Hard rules."

This plugin owns the **canonical values**. Other skills own the **workflow**.

## Install

### For the HelloPrint Cowork marketplace

Once published, HelloPrinters can install in Cowork with:

```
/plugin add helloprint-brand
```

Administrators can mark it as a default plugin for the HelloPrint org so it's pre-installed for every user.

### For Claude Code

In any HelloPrint repo, add a `CLAUDE.md` at the root:

```markdown
This project is a HelloPrint codebase.

Before generating UI, docs, or user-facing strings, load the `helloprint-brand` plugin's SKILL.md and tokens.json. They are the canonical source for colour, typography, voice, and logo decisions.
```

### For Claude Design

Claude Design reads the git repo as its design system source. Point it at this plugin's `tokens.json` and `references/04-components.md` — they are written to be consumed as a design system specification.

### For Claude for PowerPoint / Excel

Add to the add-in's **Persistent Instructions** field:

> "Every output is a HelloPrint artifact. Load the `helloprint-brand` skill before generating. Use Inter, `#008539` as accent only, `#191919` for digital black, and the wordmark decision tree in `05-logos.md`."

## Local development

```bash
git clone https://github.com/helloprint/helloprint-brand
cd helloprint-brand
# Edit tokens.json, reference markdown, or SVG assets.
# Bump version in plugin.json + CHANGELOG.md.
# Open a PR. Brand team reviews.
```

### Validation checklist before merging

- [ ] `tokens.json` parses as valid JSON.
- [ ] Every colour in markdown references a `tokens.json` path (not a raw hex).
- [ ] Every logo path in markdown resolves to a file in `assets/logos/`.
- [ ] All SVGs open cleanly in a browser.
- [ ] `SKILL.md` front matter parses, version matches `plugin.json`.
- [ ] `CHANGELOG.md` has an entry for the new version.

## Versioning

Semver. Breaking changes (renaming a token, removing a colour) bump major. New tokens, new references bump minor. Typo fixes bump patch.

Current: `0.1.0` — initial canonical release.

## Ownership

- **Brand** — HelloPrint Brand team.
- **Plugin** — AI Lead (derk.disselhoff@helloprint.com).
- **Distribution** — HelloPrint enterprise admin team.

Issues and PRs welcome at `github.com/helloprint/helloprint-brand`. For urgent brand questions, message `#brand` in Slack.

## Licence

Proprietary — HelloPrint internal use only. Inter is distributed under the SIL Open Font License and loaded at runtime from Google Fonts; not bundled in this repo.
