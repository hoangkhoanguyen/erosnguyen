import { Button } from "@/components/ui";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectDetail } from "@/mock/projects";
import { Code, ExternalLink, User, CalendarDays } from "lucide-react";
import TechTag from "./TechTag";

interface Props {
  project: ProjectDetail;
}

export default function ProjectInfo({ project }: Props) {
  return (
    <Card
      key={project.slug}
      className="group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg relative gap-2"
    >
      <CardHeader className="pt-4 px-4">
        <CardTitle className="text-xl">Thông tin dự án</CardTitle>
      </CardHeader>
      <CardContent className="px-4 mb-2">
        <div className="flex">
          <div className="mt-3 mr-3 text-primary bg-gray-400/20 rounded-lg w-[48px] h-[48px] flex justify-center items-center">
            <User size={24} />
          </div>
          <div className="">
            <p className="text-gray-500 mt-2">Vai trò</p>
            <p className="text-lg">{project.projectInfo.status}</p>
          </div>
        </div>
        <div className="flex">
          <div className="mt-3 mr-3 text-primary bg-gray-400/20 rounded-lg w-[48px] h-[48px] flex justify-center items-center">
            <CalendarDays size={24} />
          </div>
          <div className="">
            <p className="text-gray-500 mt-2">Thời gian</p>
            <p className="text-lg">{project.projectInfo.timeline}</p>
          </div>
        </div>
        <div className="flex">
          <div className="mt-3 mr-3 text-primary bg-gray-400/20 rounded-lg w-[48px] h-[48px] flex justify-center items-center">
            <Code size={24} />
          </div>
          <div className="">
            <p className="text-gray-500 my-2 mt-4">Công nghệ sử dụng</p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <TechTag key={tag}>{tag}</TechTag>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardAction className="w-full grid grid-cols-1 gap-4 px-4 mt-auto">
        <Button asChild>
          <a href={project.demoUrl}>
            <ExternalLink size={16} />
            Live Demo
          </a>
        </Button>
        <Button variant={"secondary"} asChild>
          <a href={project.sourceUrl}>
            <Code size={16} />
            Mã nguồn
          </a>
        </Button>
      </CardAction>
    </Card>
  );
}
