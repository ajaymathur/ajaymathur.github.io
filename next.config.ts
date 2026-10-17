import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    // Plugins are referenced by package name: Turbopack (default since Next 16) requires serializable loader options.
    remarkPlugins: ['remark-frontmatter'],
  },
})

export default withMDX(nextConfig)
