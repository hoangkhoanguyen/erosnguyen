"use client";

import { Code, Database, Cloud, Type } from "lucide-react";

interface Tool {
  id: string;
  icon: typeof Code;
  label: string;
}

const tools: Tool[] = [
  { id: "html", icon: Code, label: "HTML5" },
  { id: "css", icon: Code, label: "CSS3" },
  { id: "javascript", icon: Code, label: "JavaScript" },
  { id: "react", icon: Code, label: "React" },
  { id: "nodejs", icon: Code, label: "Node.js" },
  { id: "sql", icon: Database, label: "SQL" },
  { id: "aws", icon: Cloud, label: "AWS" },
];

export function TechToolkitSection() {
  return (
    <section className="py-16 border-b border-stroke bg-transparent">
      <div className="container text-center">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">
          My Technical Toolkit
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={tool.id}
                className="flex flex-col items-center gap-2 hover:text-accent transition-colors cursor-pointer"
              >
                <IconComponent className="w-8 h-8" />
                <span className="text-xs text-foreground font-bold">
                  {tool.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
