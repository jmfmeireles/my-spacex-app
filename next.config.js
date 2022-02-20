/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  images: {
    domains: [
      'live.staticflickr.com',
      'github.githubassets.com',
      'images2.imgbox.com',
      'i.imgur.com',
    ],
  },
};

module.exports = nextConfig;
