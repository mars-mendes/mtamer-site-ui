/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? repoName : '',
  assetPrefix: './',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
