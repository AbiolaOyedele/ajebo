import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Nigerian food delivery`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f4f0",
    theme_color: "#0d0906",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
