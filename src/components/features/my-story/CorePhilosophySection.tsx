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
    icon: "hand-coins",
    title: "Clean Code",
    description:
      "I believe code is written for humans first. If the logic isn't clear to a junior developer, it's not done. Maintainability > Cleverness.",
  },
  {
    icon: "bug",
    title: "Problem Solver",
    description:
      'I don\'t just take tickets. I ask "Why?". Understanding the business problem often reveals that the best code is no code at all.',
  },
  {
    icon: "gauge",
    title: "Performance",
    description:
      "Performance is a feature. I optimize critical paths, minimize bundle sizes, and ensure accessible, fast experiences for every user.",
  },
];

export function CorePhilosophySection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2 mb-4">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            My Approach
          </span>
          <h2 className="text-foreground text-3xl font-bold text-center">
            Core Philosophy
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
