const composePlugins = require('next-compose-plugins');
const mdxRemote = require('next-mdx-remote');

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
      // If you use `MDXProvider`, uncomment the following line.
      // providerImportSource: "@mdx-js/react",
    },
  })
  module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  })