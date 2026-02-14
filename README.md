# Senior Security Website

Static Astro v5 website for **Senior Security** at `https://seniorsec.org`.

- Framework: Astro v5
- Styling: Tailwind CSS + small custom design system
- Hosting: GitHub Pages (custom domain root)
- Content model: Astro content collections (`scams` and `guides`)

## Local development

```bash
npm install
npm run dev
```

Build and preview production output:

```bash
npm run build
npm run preview
```

Type/content checks:

```bash
npm run check
```

## Deployment (GitHub Pages)

This repo includes `.github/workflows/deploy.yml` using:

- `actions/checkout@v4`
- `withastro/action@v5`
- `actions/deploy-pages@v4`

### GitHub settings

1. In GitHub, open **Settings -> Pages**.
2. Set **Source** to **GitHub Actions**.
3. Ensure the default branch is `main` (or update workflow trigger).
4. Push changes to `main` to trigger deployment.

## Custom domain (`seniorsec.org`)

- `public/CNAME` is set to `seniorsec.org`.
- `astro.config.mjs` sets `site: "https://seniorsec.org"`.
- No `base` path is configured (required for root custom domain deploys).

### DNS (high-level)

- Point the domain apex (`seniorsec.org`) to GitHub Pages via your registrar DNS settings.
- Add/keep `www` record if you want both `www` and apex coverage.
- After DNS propagation, enable HTTPS in GitHub Pages settings.

## Content workflow

### Add or update scam pages

1. Create/edit markdown files in `src/content/scams/`.
2. Include required frontmatter:
   - `title`, `summary`, `category`, `riskLevelLabel`, `excerpt`, `seoTitle`, `seoDescription`, `order`
3. Keep section headings in this order:
   - `How it works`
   - `Red flags`
   - `What to do`
   - `What never to do`
   - `If money was sent: steps`
   - `How to report`

### Add or update learn guides

1. Create/edit markdown files in `src/content/guides/`.
2. Required frontmatter:
   - `title`, `summary`, `type` (`guide|checklist|script`), `printable`, `seoTitle`, `seoDescription`, `order`

## Placeholder TODO map

Replace these before launch:

- Footer contact email: `TODO@seniorsec.org`
- Footer Instagram handle: `@TODO_HANDLE`
- Workshops request URL placeholder in `src/pages/workshops.astro`
- Donation URL placeholder in `src/pages/donate.astro`
- Local support contacts placeholder in `src/pages/get-help.astro`

## CONTRIBUTING (content + sourcing rules)

### Content style rules

- Write for seniors first: calm, clear, short paragraphs.
- Avoid fear-based language and blame.
- Use practical next steps and plain terms.
- Keep headings descriptive and scannable.

### Metric sourcing rules

- Do **not** add new numeric claims without a credible primary source.
- Add every numeric claim to `src/pages/sources.astro` with context and link.
- Prefer government or original institutional reports over secondary summaries.

## Favicon note

`public/favicon.svg` is a lightweight brand-aligned fallback.

TODO: Generate full production favicon set from the official logo (ICO + Apple touch icon + multiple PNG sizes).
