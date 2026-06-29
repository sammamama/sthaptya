import type { MetadataRoute } from "next";
import projects from "@/public/projects/projects.json";
import blogs from "@/public/blogs/blogs.json";

const BASE = "https://sushilsharmaassociates.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/projects`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blogs`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/book`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/projects/${p.categorySlug}/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${BASE}/blogs/${b.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
