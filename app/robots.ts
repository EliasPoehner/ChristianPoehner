import type { MetadataRoute } from "next";
import { meta } from "@/content/meta";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/privat/", "/api/"],
      },
    ],
    sitemap: `${meta.siteUrl}/sitemap.xml`,
  };
}
