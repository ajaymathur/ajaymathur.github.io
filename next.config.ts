import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'

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
    remarkPlugins: [remarkFrontmatter],
  },
})

export default withMDX(nextConfig)
