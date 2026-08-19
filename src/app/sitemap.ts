import type { MetadataRoute } from "next";
import { LEGAL_PAGES } from "@/data/legal";
import { DISHES } from "@/data/menu";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    ...DISHES.map((dish) => ({
      url: `${SITE.url}/menu/${dish.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...LEGAL_PAGES.map((page) => ({
      url: `${SITE.url}/legal/${page.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
