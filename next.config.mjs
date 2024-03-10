/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["instagram.com"],
  },
  pageExtensions: ["api.ts", "tsx"],
};

export default nextConfig;
