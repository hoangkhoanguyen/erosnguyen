import ProjectCard from "@/components/features/projects/ProjectCard";
import { webRoutes } from "@/constants/route";
import { mockProject2Details, mockProjectDetail } from "@/mock/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [mockProjectDetail, mockProject2Details];
  return (
    <div className="container relative py-16 overflow-hidden">
      <div className="max-w-250 mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Dự án nổi bậc
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Những sản phẩm tôi tâm đắc nhất
            </p>
          </div>
          <Link
            href={webRoutes.projects()}
            className="hidden sm:flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all"
          >
            Xem tất cả
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
