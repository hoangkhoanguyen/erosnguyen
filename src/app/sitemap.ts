import type { MetadataRoute } from "next";

import { webRoutes } from "@/constants/route";
import { mockBlogDetail } from "@/mock/blog";
import { mockProject2Details, mockProjectDetail } from "@/mock/projects";
import { getSiteUrl } from "@/lib/site-config";

const projectPages = [mockProjectDetail, mockProject2Details];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticPaths = [
    webRoutes.home(),
    webRoutes.myStory(),
    webRoutes.blogs(),
    webRoutes.projects(),
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === webRoutes.home() ? "weekly" : "weekly",
    priority: path === webRoutes.home() ? 1 : 0.85,
  }));

  const blogEntries: MetadataRoute.Sitemap = mockBlogDetail.map((post) => ({
    url: `${base}${webRoutes.blogDetail({ slug: post.slug })}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const projectEntries: MetadataRoute.Sitemap = projectPages.map((p) => ({
    url: `${base}${webRoutes.projectDetail({ slug: p.slug })}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries, ...projectEntries];
}
