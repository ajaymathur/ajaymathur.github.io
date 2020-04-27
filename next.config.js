const withSass = require('@zeit/next-sass');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
  });

  const isProd = process.env.NODE_ENV === 'production'
  
  module.exports = withSass(withMDX({
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? '/' : '',
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
  }));