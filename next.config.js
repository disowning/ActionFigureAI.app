/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.it', 'via.placeholder.com', 'placehold.co'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 