/** @type {import('next').NextConfig} */

const withVideos = require('next-videos')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  withVideos: withVideos,
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
}

module.exports = nextConfig
module.exports = withVideos({})