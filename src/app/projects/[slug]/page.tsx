import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import AppBreadcrumb from "@/components/layout/AppBreadcrumb";

import { mockProjectDetail } from "@/mock/projects";
import ProjectInfo from "@/components/features/projects/ProjectInfo";
import GallerySlider from "@/components/features/projects/GallerySlider";
import TableOfContent from "@/components/features/projects/TableOfContent";

import { GalleryThumbnails, FileText } from "lucide-react";
import { extractToc } from "@/lib/utils";

export default async function ProjectDetail() {
  const project = mockProjectDetail;
  return (
    <div className="container mx-auto mt-20 p-5">
      {/* Breadcrumb */}
      <div className="py-2">
        <AppBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: project.title },
          ]}
        />
      </div>

      {/* Post Title */}
      <h1 className="py-2 text-5xl font-bold hover:text-primary duration-300">
        {project.title}
      </h1>
      <p className="text-lg pb-10 text-muted-foreground">
        {project.description}
      </p>

      <hr className="py-6" />

      <div className="grid grid-cols-10 gap-6">
        <div className="col-span-10 lg:col-span-3 rounded-xl lg:order-2">
          <ProjectInfo project={project} />
          <TableOfContent ToCs={extractToc(project.content)} />
        </div>

        <div className="col-span-10 lg:col-span-7 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 hover:text-primary duration-300 pb-5 flex items-center gap-2">
            <GalleryThumbnails size={32} className="text-primary" />
            Image gallery
          </h2>
          <div className="mb-10">
            <GallerySlider images={project.images} />
          </div>
          <h2 className="text-3xl font-bold hover:text-primary duration-300 flex items-center gap-2 pt-15">
            <FileText size={24} className="text-primary" />
            Project details
          </h2>
          <div className="post-content">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {project.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
