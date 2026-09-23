import type { MetadataRoute } from "next";
import { projects, services } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://embellish-design-website.vercel.app";
  const routes = ["", "/about", "/services", "/projects", "/careers", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...services.map((service) => ({ url: `${base}/services/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}

