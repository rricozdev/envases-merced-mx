/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
