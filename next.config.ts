import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  output: 'export',
  // Export each route as <route>/index.html so GitHub Pages serves both /support and /support/
  // (without this, any URL with a trailing slash 404s).
  trailingSlash: true,
  basePath: process.env.PAGES_BASE_PATH,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    // Turbopack (the default bundler since Next 16) needs serializable loader options,
    // so plugins are referenced by package name.
    remarkPlugins: ['remark-frontmatter'],
  },
})

export default withMDX(nextConfig)
