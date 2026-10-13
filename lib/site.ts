// Public site configuration. Public URL, Spoke origin and asset origin are separate values.
// SITE_URL is the Hub's public URL (canonical). NEXT_PUBLIC_ASSET_PREFIX lives in next.config.mjs.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://primegearlab.com/tesway-bike"
).replace(/\/$/, "");

export const SITE_ORIGIN = new URL(SITE_URL).origin;

export const BUSINESS_NAME = "PrimeGearLab";
export const CONTACT_EMAIL = "daniaengracia26377@gmail.com";
export const MERCHANT_NAME = "Tesway US";
export const MERCHANT_ORIGIN = "https://teswaybike.com";

/** Internal public paths (Hub path structure; no basePath on the Spoke). */
export const PATHS = {
  home: "/tesway-bike",
  privacy: "/tesway-bike/privacy",
  terms: "/tesway-bike/terms",
  disclosure: "/tesway-bike/affiliate-disclosure",
  contact: "/tesway-bike/contact",
} as const;

export const DISCLOSURE_TEXT =
  "As an affiliate publisher, we may earn a commission from qualifying purchases made through links on this page, at no additional cost to you.";

export const tracking = {
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  adsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  adsCtaLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CTA_LABEL || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};
