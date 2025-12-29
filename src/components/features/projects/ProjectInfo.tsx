import { Button } from "@/components/ui";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectDetail } from "@/mock/projects";
import { Code, ExternalLink } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import TechTag from "./TechTag";
import { ComponentProps, ReactNode } from "react";

interface Props {
  project: ProjectDetail;
}

export default function ProjectInfo({ project }: Props) {
  const renderInfoItem = (
    iconName: ComponentProps<typeof DynamicIcon>["name"],
    label: string,
    content: ReactNode,
  ) => (
    <div className="flex items-start gap-2">
      <div className="p-2 text-primary bg-primary/10 rounded-lg flex justify-center items-center shrink-0">
        <DynamicIcon name={iconName} size={18} />
      </div>
      <div className="">
        <p className="text-gray-500 uppercase text-sm">{label}</p>
        <div>{content}</div>
      </div>
    </div>
  );

  return (
    <Card
      key={project.slug}
      className="group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg relative gap-2"
    >
      <CardHeader className="pt-4 px-4">
        <CardTitle className="text-xl">Thông tin dự án</CardTitle>
      </CardHeader>
      <CardContent className="px-4 mb-2 flex flex-col gap-3">
        {renderInfoItem(
          "user",
          "Vai trò",
          <p className="text-base text-foreground font-medium">
            {project.projectInfo.status}
          </p>,
        )}
        {renderInfoItem(
          "calendar-days",
          "Thời gian",
          <p className="text-base text-foreground font-medium">
            {project.projectInfo.timeline}
          </p>,
        )}
        {renderInfoItem(
          "code",
          "Công nghệ sử dụng",
          <div className="flex gap-2 flex-wrap mt-2">
            {project.tags.map((tag) => (
              <TechTag key={tag}>{tag}</TechTag>
            ))}
          </div>,
        )}
      </CardContent>
      <CardAction className="w-full grid grid-cols-1 gap-4 px-4 mt-auto">
        <Button asChild>
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={16} />
            Live Demo
          </a>
        </Button>
        <Button variant={"secondary"} asChild>
          <a href={project.sourceUrl} target="_blank" rel="noreferrer">
            <Code size={16} />
            Mã nguồn
          </a>
        </Button>
      </CardAction>
    </Card>
  );
}
