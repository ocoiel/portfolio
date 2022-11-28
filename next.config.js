/** @type {import('next').NextConfig} */
module.exports = {
  // reactStrictMode: true,
  assetPrefix: './',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        // port: '',
      },
      {
        protocol: 'https',
        hostname: 'uploads.codesandbox.io',
      }
    ]
  },
}
