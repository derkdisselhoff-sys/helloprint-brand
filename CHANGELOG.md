# Changelog

All notable changes to `helloprint-brand` are documented here. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versioning follows [SemVer](https://semver.org/).

## [0.1.0] — 2026-04-23

Initial canonical release. Everything in this version is new.

### Added

- `plugin.json` manifest (plan-canonical flat shape) declaring the plugin for Cowork, Claude Code, Claude Design, Claude for PowerPoint, and Claude for Excel.
- `skills/helloprint-brand/SKILL.md` — operating instructions, load order, hard rules, dependency pattern.
- `skills/helloprint-brand/references/tokens.json` — canonical design tokens in kebab-case under four top-level categories (`color`, `font`, `space`, `radius`) plus `brand`, `logo`, `voice` metadata:
  - Primary palette under `color.brand.*` (Orochimaru, Snowflake, Charmed Green, Link Green, Thamar Black).
  - Accent palette under `color.accent.*` (Heroic Red, Honey Teriyaki, Ripe Mango, Hampton Beach, Seaside).
  - Neutrals (Digital Black `#191919`, Digital White `#FFFFFF`).
  - 60 / 30 / 10 colour hierarchy rule.
  - Four approved background variants under `color.background.*`.
  - Typography scale under `font.scale.{desktop,mobile}.*` (Inter, H1–label).
  - Logo file registry with use cases.
  - Voice words and tone-by-context map.
  - 4px-base `space.*` scale.
  - `radius.*` tokens.
- `references/01-brand.md` — verbatim paste of the Brand DNA source from Drive, with colour hex values cross-referenced to `tokens.json`.
- `references/02-voice.md` — verbatim paste of the Tone of Voice source from Drive.
- `references/03-glossary.md` — brand and company terms, product / platform names, role nouns, print vocabulary, time / units, inclusive language. **Provisional**; pending brand-team sign-off.
- `references/04-components.md` — buttons, links, cards, headings, body, tables, charts, forms, slide decks, emails, spacing, motion, accessibility rules. **Provisional**; extrapolated from canonical sources, pending brand-team sign-off.
- `references/05-logos.md` — five-file registry, clear space, minimum sizes, placement rules, colour rules, don'ts, favicon / app icon, co-branding, decision tree.
- `references/editorial/` — holds earlier editorial re-writes of 01-brand and 02-voice as reference drafts (not canonical).
- `references/examples/` — one artifact per type:
  - `email-transactional.html` — on-brand transactional email.
  - `landing-hero.html` — marketing hero with split-white-strip background.
  - `dashboard.jsx` — React + Recharts dashboard using CSS custom properties from tokens.
  - `slide-section-divider.svg` — full Charmed Green section divider slide.
- `assets/logos/helloprint-wordmark-white.svg` — wordmark for dark surfaces.
- `assets/logos/helloprint-wordmark-black.svg` — wordmark for light surfaces.
- `assets/logos/helloprint-monogram-green.svg` — default monogram (Charmed Green circle, white H).
- `assets/logos/helloprint-monogram-white.svg` — monogram on light (white circle, dark H).
- `assets/logos/helloprint-monogram-dark.svg` — monogram on dark (dark circle, light H).
- `assets/fonts/OFL.txt` — SIL Open Font License attribution for Inter (loaded at runtime from Google Fonts, not bundled).
- `LICENSE` — proprietary HelloPrint internal-use license.
- `.gitignore`, `.gitattributes` — repo hygiene.
- `CODEOWNERS` — brand team owns canon, AI Lead owns plugin mechanics.
- `CONTRIBUTING.md` — PR checklist, versioning, workflow.
- `README.md` — install, integration, ownership.

### Known gaps (deferred to 0.2.0 or later)

- Wordmark on Charmed Green background — awaiting delivery from brand team.
- Inter font binaries bundled in `assets/fonts/` — currently loaded at runtime from Google Fonts; bundling is optional for fully-offline use cases.
- Regional voice variants (NL, ES, IT, DE, FR) — `02-voice.md` is English-first; translations / idiom maps are planned.
- Print-specific spec sheets (paper weights, lamination, bleed) — out of scope for a design-system plugin.
- Canva template references and voice-over scripts — may land in 0.2 or a sibling plugin.
- Dependency-injection patches for the 14 existing HelloPrint skills — generated separately; not shipped inside this plugin.
