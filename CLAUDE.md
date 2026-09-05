# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal website/blog for Ajay Narain Mathur (ajaymathur.github.io), built with Next.js (App Router) and statically exported to GitHub Pages via a GitHub Actions workflow. Blog posts are `.mdx` files with YAML frontmatter, rendered through a dynamic `[slug]` route. The site also hosts support and privacy-policy pages for mobile apps under `/support` (URLs pasted into App Store Connect and Play Console).

## Commands

```bash
pnpm dev      # local dev server (next dev)
pnpm build    # next build -> static site in out/ (output: 'export' in next.config.ts)
```

Package manager is pnpm (`pnpm-lock.yaml`, `pnpm-workspace.yaml`) — don't use yarn/npm to install. There is no test suite and no lint script configured — don't invent one unless asked.

Deploy is automatic: `.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. There is no separate manual deploy command/branch — pushing to `main` is a real, live deploy.

## Architecture

- **Routing**: Next.js App Router (`app/`). `app/page.tsx` renders the post list on the homepage; `app/blog/[slug]/page.tsx` is a dynamic route that renders a single post.
- **Adding a new blog post is a single-file change**: drop a new `blogs/<slug>.mdx` file with frontmatter (`title`, `date`, `excerpt`, `tags`). Nothing else needs wiring — `lib/posts.ts` (`getAllPosts`/`getPostBySlug`) reads the `blogs/` directory directly via `fs.readdirSync`, and `generateStaticParams` in `app/blog/[slug]/page.tsx` uses `getAllPosts()` to statically generate a page per post. The list page and post page both pick up new files automatically.
- **App support pages** (`/support`, `/support/<app>`, `/support/<app>/privacy`): same pattern as blog posts, keyed by folder. **Adding an app is a folder add**: create `apps/<slug>/index.mdx` (frontmatter `name`, `tagline`, `platforms[{name, requirement, url?}]`, `contact`; body = FAQ/support text) and optionally `apps/<slug>/privacy.mdx` (frontmatter `title`, `updated`; body = policy). `lib/apps.ts` (`getAllApps`/`getApp`/`getAppPrivacy`/`hasPrivacyPolicy`) reads `apps/` directly; `app/support/page.tsx` lists apps, `app/support/[app]/page.tsx` and `app/support/[app]/privacy/page.tsx` render one app. Privacy page is only generated when `privacy.mdx` exists. Store URLs published for these pages are external contracts (they are in App Store Connect / Play Console) — don't rename slugs of shipped apps.
- **Frontmatter parsing**: `gray-matter` extracts frontmatter in `lib/posts.ts` and `lib/apps.ts`; `remark-frontmatter` (configured in `next.config.ts`) keeps MDX from choking on the frontmatter block when the file is rendered as a component.
- **Components** (`components/`):
  - `Header` / `Footer` — site chrome, rendered once in `app/layout.tsx`. Footer carries the only nav link to `/support`.
  - `PostList` — renders the list of posts (title, date, excerpt, tags) on the homepage.
  - `Prose` — wrapper that styles rendered MDX bodies (headings, code, lists, blockquotes). Used by blog posts and all support pages; put prose styling here, not in per-route modules.
  - `ThemeToggle` — light/dark theme switch; the active theme is read from `localStorage`/`prefers-color-scheme` via an inline script in `app/layout.tsx` (`data-theme` attribute) to avoid a flash of unstyled theme.
- **Rendering an MDX body**: `app/blog/[slug]/page.tsx` dynamically imports `@/blogs/${slug}.mdx` for the compiled MDX component and separately reads frontmatter via `getPostBySlug` for metadata (title/date/tags shown in the page header) — the two are not the same read. Support pages do the same with `@/apps/${app}/index.mdx` and `@/apps/${app}/privacy.mdx`.
- **Styling**: CSS Modules (`*.module.scss`) colocated per component/route, plus global styles in `styles/globals.scss` and `styles/_variables.scss`. Compiled via `sass`.
- **Static export**: `next.config.ts` sets `output: 'export'` and `basePath` from the `PAGES_BASE_PATH` env var (set by the deploy workflow) since this is a GitHub Pages project site, not served from the domain root.
