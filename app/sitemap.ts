import type { MetadataRoute } from "next";
import { meta } from "@/content/meta";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = meta.siteUrl;
  const now = new Date();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/stadtrat`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/kontakt`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
