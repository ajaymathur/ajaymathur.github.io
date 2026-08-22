# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal website/blog for Ajay Narain Mathur (ajaymathur.github.io), built with Next.js 9 (pages router) and statically exported to GitHub Pages. Content mixes `.tsx` pages with `.mdx` (Markdown + JSX) for blog posts and notes.

## Commands

```bash
yarn dev        # local dev server (next)
yarn build      # next build && next export -> static site in out/
yarn export     # next export only
yarn start      # next start (serves a `next build`, not the static export)
yarn predeploy  # next build && next export && touch out/.nojekyll
yarn deploy     # gh-pages -t true -b master -d out  (publishes out/ to the master branch)
yarn prettier   # prettier **/*.{tsx,scss,mdx} --write
```

There is no test suite and no lint script configured — don't invent one unless asked. TypeScript is present (`tsconfig.json`) but `strict` is off; type errors won't fail the build in a meaningful way, and `next build` is the closest thing to a correctness check.

Deploy is a manual, real action (`yarn deploy` force-pushes the built `out/` directory to the `master` branch via `gh-pages`) — never run it without the user asking.

## Architecture

- **Routing**: Next.js pages-router. Every folder under `pages/` is a route; `pages/<section>/index.tsx` is the section's landing/list page, and individual entries live in their own subfolder as `index.mdx` or `index.tsx` (e.g. `pages/blogs/creating_repl/index.mdx`, `pages/notes/javascript/pipe-operator.mdx`).
- **Adding new content is a two-file, manual-wiring change**: creating a new blog post/note/project means (1) adding the new `pages/<section>/<slug>/index.mdx` (or `.tsx`) file, and (2) manually adding a corresponding `<ListItem link=... heading=... shortDescription=... />` entry to that section's `pages/<section>/index.tsx`. Nothing auto-discovers content from the filesystem.
- **Shared layout components** (`components/`):
  - `Page` — wraps a route in `Meta` + `Nav` + a `#page` div. Used by section list pages.
  - `Main` — the `<main>` wrapper for content inside `Page`.
  - `Nav` — renders `DesktopNav` or `MobileNav` based on a media query (`@material-ui/core`'s `useMediaQuery`); nav links are hardcoded here, not derived from routes.
  - `Meta` — `next/head` boilerplate (title, viewport, charset).
  - `ListItem` — the card/row used on section index pages to link to an individual post/project.
  - `MarkdownComponents` — an `MDXProvider` wrapper (styling for `pre`/`code`/`inlineCode`) intended to wrap MDX content, though most `.mdx` files currently define their own local layout export instead of importing this.
- **MDX pages**: each `.mdx` file default-exports its own layout wrapper (typically `<Page><Main>{children}</Main></Page>`) before the Markdown content, per Next.js MDX conventions (`@next/mdx`).
- **Styling**: SCSS modules colocated per component/page as `styles.scss`, compiled via `@zeit/next-sass`.
- **`.old/`**: a dead previous incarnation of the site (Angular 2 + an even older React version). Not part of the live site — ignore unless explicitly asked to look at history.
- **`_config.yml`**: a leftover Jekyll config from before the GitHub Pages site was Next.js-based. Not consumed by the current build.
