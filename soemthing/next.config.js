const withSass = require('@zeit/next-sass');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
  })
  module.exports = withSass(withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
  }));