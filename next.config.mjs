/** @type {import('next').NextConfig} */

// Hub–Spoke proxy architecture:
// - The Spoke serves from its own root; the page lives at app/tesway-bike/page.tsx.
// - NO basePath (the route folder already provides the /tesway-bike segment).
// - assetPrefix points /_next/static/* at the Spoke so the Hub-served HTML loads CSS/JS from it.
const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "https://teswaybike1.vercel.app",
  reactStrictMode: true,
  images: {
    // Shopify CDN already serves sized WebP via ?width=; going through /_next/image would also
    // require the Hub to proxy /_next/image. Unoptimized is a deliberate choice here.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "teswaybike.com", pathname: "/cdn/shop/files/**" },
    ],
  },
  // Static bundles are requested from the Hub page (cross-origin). Allow it explicitly.
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
