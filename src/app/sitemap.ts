import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hidalgonoe.com";
  
  const routes = ["", "/proyectos", "/servicios", "/sobre-mi", "/contacto"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly" as const,
    priority: route === "" ? 1.0 : route === "/contacto" ? 0.6 : 0.8,
  }));
}
