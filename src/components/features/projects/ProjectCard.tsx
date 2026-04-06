import Image from "next/image";
import Link from "next/link";
import { ProjectDetail } from "@/mock/projects";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { webRoutes } from "@/constants/route";
import TechTag from "./TechTag";

interface ProjectCardProps {
  project: ProjectDetail;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      key={project.slug}
      className="group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative pb-4"
    >
      <Link
        key={project.slug}
        href={webRoutes.projectDetail({ slug: project.slug })}
        className="inset-0 z-10"
        aria-label={project.title}
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={project.images[0].url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>

        <CardHeader className="pt-4 px-4">
          <CardTitle className="text-xl line-clamp-1 group-hover:text-primary duration-300">
            {project.title}
          </CardTitle>

          <CardDescription className="line-clamp-2 block h-10">
            {project.description}
          </CardDescription>

          <div className="flex items-center gap-4 mt-4 w-full overflow-hidden">
            {project.tags.map((tag) => (
              <TechTag key={tag}>{tag}</TechTag>
            ))}
          </div>
        </CardHeader>
      </Link>
    </Card>
  );
}
