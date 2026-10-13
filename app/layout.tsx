import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Tracking from "@/components/Tracking";
import { MERCHANT_ORIGIN } from "@/lib/products";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Merchant origin is the verified destination of every product CTA. */}
        <link rel="dns-prefetch" href={MERCHANT_ORIGIN} />
        <link rel="preconnect" href={MERCHANT_ORIGIN} crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-bg text-ink antialiased">
        {children}
        <Tracking />
      </body>
    </html>
  );
}
