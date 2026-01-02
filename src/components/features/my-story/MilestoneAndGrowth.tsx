import { cn } from "@/lib/utils";
import { DynamicIcon } from "lucide-react/dynamic";
import { ComponentProps } from "react";

interface Milestone {
  icon: ComponentProps<typeof DynamicIcon>["name"];
  year: string;
  title: string;
  description: string;
  isColored: boolean;
}

const mockMilestones: Milestone[] = [
  {
    icon: "terminal-square",
    year: "2015 - The Beginning",
    title: "Hello World",
    description:
      "Wrote my first line of HTML. Built a portfolio for a friend's photography business. It was ugly, non-responsive, and riddled with inline CSS—but it was mine.",
    isColored: true,
  },
  {
    icon: "school",
    year: "2018 - Education",
    title: "Formalizing the Craft",
    description:
      "Graduated with a degree in Information Technology. While university taught me algorithms and data structures, the late nights at hackathons taught me how to actually ship products.",
    isColored: false,
  },
  {
    icon: "group",
    year: "2020 - Leadership",
    title: "The First Big Challenge",
    description:
      "Promoted to Team Lead. Tasked with migrating a monolithic PHP application to a microservices architecture. Learned that code is easy, but people and processes are the real challenge.",
    isColored: false,
  },
  {
    icon: "rocket",
    year: "Present - Innovation",
    title: "Architecting the Future",
    description:
      "Currently specializing in the React/Next.js ecosystem and Serverless edge computing. Contributing to open source and helping startups scale from 0 to 1.",
    isColored: true,
  },
];

const MilestoneAndGrowth = () => {
  return (
    <section className="py-20 bg-surface border-b border-stroke">
      <div className="container">
        <h2 className="text-foreground text-3xl md:text-4xl font-black text-center mb-4">
          Milestones &amp; Growth
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A timeline of pivotal moments that shaped my career and technical
          philosophy.
        </p>
        <div className="px-4">
          {mockMilestones.map((milestone, index) => (
            <MilestoneItem
              key={milestone.year}
              data={milestone}
              isLast={index === mockMilestones.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestoneAndGrowth;

function MilestoneItem({
  data: { icon, year, title, description, isColored },
  isLast,
}: {
  data: Milestone;
  isLast?: boolean;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "size-12 rounded-full dark:bg-surface-dark border-2 flex items-center justify-center z-10 ",
            isColored
              ? "border-primary bg-primary text-white shadow-lg shadow-primary/20"
              : "border-gray-400 dark:border-gray-600 bg-transparent text-muted-foreground",
          )}
        >
          <DynamicIcon name={icon} size={24} />
        </div>
        <div
          className={cn(
            "w-0.5 bg-muted-foreground h-full grow",
            isLast && "hidden",
          )}
        ></div>
      </div>
      <div className="md:pl-6 pb-10">
        <span
          className={cn(
            "font-bold text-sm tracking-wide uppercase mb-1",
            isColored ? "text-primary" : "text-muted-foreground",
          )}
        >
          {year}
        </span>
        <h3 className="text-foreground text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
