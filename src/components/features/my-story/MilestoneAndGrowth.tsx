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

const milestones: Milestone[] = [
  {
    icon: "code",
    year: "May – Sep 2022",
    title: "First Dev Role",
    description:
      "Joined a remote software agency as a fresher frontend developer. Implemented UI with Bootstrap and jQuery, then transitioned to React. Learned how to clarify tasks, work with modern tooling, and deliver with minimal bugs.",
    isColored: true,
  },
  {
    icon: "layers",
    year: "Oct 2022 – Present",
    title: "Full-Stack Ownership",
    description:
      "Took ownership of the frontend for a shared platform serving internal departments and clients. Expanded into backend (Node, ExpressJS), mobile (React Native), design (Figma), and CI/CD. For backend, I implement features or coordinate requirements with the backend developer. Drove Zalo Mini App from concept to launch, reaching 14K+ subscribers in 1 year.",
    isColored: true,
  },
  {
    icon: "users",
    year: "Ongoing",
    title: "Cross-Functional Coordination",
    description:
      "Took on BA and PM responsibilities alongside engineering: gathering requirements from leadership and departments, breaking down features, coordinating with design and backend teams, and catching business logic issues early. Established lightweight workflows to keep the team aligned in a fast-moving environment.",
    isColored: false,
  },
];

const MilestoneAndGrowth = () => {
  return (
    <section className="py-20 border-b border-stroke bg-transparent">
      <div className="container">
        <div className="flex flex-col items-center gap-2 mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Experience
          </span>
          <h2 className="text-foreground text-3xl md:text-4xl font-black text-center">
            Career Path
          </h2>
          <p className="text-center text-muted-foreground max-w-lg">
            How my role and responsibilities grew over the past 4 years.
          </p>
        </div>
        <div className="px-4">
          {milestones.map((milestone, index) => (
            <MilestoneItem
              key={milestone.year}
              data={milestone}
              isLast={index === milestones.length - 1}
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
