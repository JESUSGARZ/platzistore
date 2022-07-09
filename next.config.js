/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'wixmp.com', 'romapy'],
  },
};

module.exports = nextConfig;
