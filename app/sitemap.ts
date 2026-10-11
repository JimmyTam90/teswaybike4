import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/privacy", "/terms", "/affiliate-disclosure", "/contact"].map((p) => ({ url: `${SITE.url}${p}`, lastModified: now }));
}
