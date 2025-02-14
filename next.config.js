/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = '';

const nextConfig = {
  basePath: isProd ? repoName : '',
  assetPrefix: './',
  reactStrictMode: true,
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;