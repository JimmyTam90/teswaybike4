/** @type {import('next').NextConfig} */
// No basePath on purpose: the sales page lives at app/tesway-bike/page.tsx so Vercel hub
// rewrites never produce /tesway-bike/tesway-bike.
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "https://teswaybike1.vercel.app",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "teswaybike.com" },
      { protocol: "https", hostname: "cdn.shopify.com" },
    ],
  },
  async redirects() {
    return [{ source: "/", destination: "/tesway-bike", permanent: false }];
  },
};
export default nextConfig;
