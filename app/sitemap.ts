import type { MetadataRoute } from "next";
import { properties } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://galacticliving.com";
  const routes = ["", "/properties", "/gallery", "/house-rules", "/about", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...properties.map((property) => ({ url: `${baseUrl}/properties/${property.id}`, lastModified: new Date() }))
  ];
}
