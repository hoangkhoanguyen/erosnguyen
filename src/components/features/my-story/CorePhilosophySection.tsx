"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import { ComponentProps } from "react";

interface PhilosophyCardProps {
  icon: ComponentProps<typeof DynamicIcon>["name"];
  title: string;
  description: string;
}

const mockPhilosophies: PhilosophyCardProps[] = [
  {
    icon: "message-circle",
    title: "Clarify Before Code",
    description:
      "I don't start coding until I understand the 'why' and map out edge cases. Ambiguity early costs more than time spent asking questions. In practice, I document expected scenarios and share them with stakeholders before implementation—it catches gaps and aligns expectations.",
  },
  {
    icon: "activity",
    title: "Transparent Progress",
    description:
      "Silence slows teams down. I share daily updates—what shipped, what's next, and where I'm stuck—even on long tasks. It gives the team visibility, surfaces blockers early, and builds trust that the work is moving forward.",
  },
  {
    icon: "users",
    title: "Bridge Technical & Non-Technical",
    description:
      "I translate between engineers and stakeholders. My tutoring background taught me to explain complexity simply; my dev work taught me to push back constructively when requirements don't align with feasibility. I ask 'why' before saying 'yes,' and I frame technical constraints in terms of business impact.",
  },
];

export function CorePhilosophySection() {
  return (
    <section className="py-20 border-b border-stroke bg-transparent">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2 mb-4">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Work Style
          </span>
          <h2 className="text-foreground text-3xl font-bold text-center">
            How I Work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockPhilosophies.map((philosophy) => (
            <PhilosophyCard key={philosophy.title} data={philosophy} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophyCard({
  data: { icon, title, description },
}: {
  data: PhilosophyCardProps;
}) {
  return (
    <div className="bg-background p-8 rounded-xl border border-stroke flex flex-col gap-4 hover:border-primary/50 transition-colors group">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <DynamicIcon name={icon} />
      </div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
