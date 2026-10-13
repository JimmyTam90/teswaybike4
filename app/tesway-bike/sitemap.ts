import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/privacy", "/terms", "/affiliate-disclosure", "/contact"];
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date("2026-10-11"),
    changeFrequency: p === "" ? "weekly" : "yearly",
    priority: p === "" ? 1 : 0.3,
  }));
}
