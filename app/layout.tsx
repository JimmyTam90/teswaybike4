import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import type { ReactNode } from "react";
import Tracking from "@/components/Tracking";
import { SITE } from "@/lib/site";
import { hero } from "@/lib/products";

const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
  icons: { icon: "/tesway-bike/favicon.svg" },
  openGraph: {
    type: "website", url: SITE.url, siteName: SITE.name, title: SITE.title, description: SITE.description,
    images: [{ url: hero.image, alt: hero.imageAlt }],
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description, images: [hero.image] },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0F172A" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <head>
        <link rel="dns-prefetch" href={SITE.merchantOrigin} />
        <link rel="preconnect" href={SITE.merchantOrigin} crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Tracking />
      </body>
    </html>
  );
}
