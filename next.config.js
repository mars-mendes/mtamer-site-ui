/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = '/mtamer-site-ui';

const nextConfig = {
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : './',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;