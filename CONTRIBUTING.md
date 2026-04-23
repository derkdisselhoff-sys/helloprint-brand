# Contributing to `helloprint-brand`

This plugin is the canonical source for HelloPrint brand, design system, and voice. Changes ripple across every Claude surface and every downstream HelloPrint skill — treat edits with the same care you'd give a production library.

## Who owns what

- **Brand team** — `tokens.json`, `01-brand.md`, `02-voice.md`, `03-glossary.md`, `04-components.md`, `05-logos.md`, and all files under `assets/`.
- **AI Lead** — `plugin.json`, `SKILL.md`, `README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, and the dependency pattern used by other HelloPrint skills.

See [`CODEOWNERS`](./CODEOWNERS) for the enforced routing.

## Before you open a PR

1. Read the change against the principle: **tokens win.** If `tokens.json` and a markdown file disagree, edit the markdown — never leak a new colour, font, or size into prose without a corresponding token.
2. If you're adding a new token, give it a kebab-case key under one of the four canonical categories: `color`, `font`, `space`, `radius`. No new top-level keys without an RFC.
3. Bump the version in `plugin.json` and add a `CHANGELOG.md` entry under the new version. Follow [Keep a Changelog](https://keepachangelog.com/) and [SemVer](https://semver.org/):
   - `patch` — typo fixes, prose clarifications, asset re-exports.
   - `minor` — new tokens, new reference sections, new logo variants.
   - `major` — renaming a token, removing a colour, changing a hard rule.

## Checklist

Before merging, confirm:

- [ ] `tokens.json` parses as valid JSON (`python -c "import json; json.load(open('skills/helloprint-brand/references/tokens.json'))"`).
- [ ] Every colour hex mentioned in markdown also exists in `tokens.json`.
- [ ] Every logo path in markdown resolves to a file in `assets/logos/`.
- [ ] All SVGs open cleanly in a browser (no raster embeds, no absolute URLs to external hosts).
- [ ] `SKILL.md` front matter parses; `name` and `version` match `plugin.json`.
- [ ] `CHANGELOG.md` has an entry for the new version under the correct section (Added / Changed / Fixed / Removed).
- [ ] No instance of "Helloprint" (lowercase p) outside the legal entity string `Helloprint B.V.`.
- [ ] No PII, no internal-only credentials, no draft-stage brand decisions committed without the brand team's sign-off.

## Workflow

1. Branch from `main`. Name the branch after the change: `brand/charmed-green-hex-fix`, `voice/nl-market-variants`, `tokens/add-space-4xl`.
2. Open a PR. The auto-assigned reviewers come from `CODEOWNERS`.
3. At least one Brand reviewer must approve any change to `tokens.json`, references, or assets.
4. Release a new version by tagging the merge commit: `git tag v0.2.0 && git push --tags`.
5. The Cowork marketplace and Claude Code pull via tag.

## When in doubt

Ping `#brand` in Slack. The brand team is the tie-breaker.
