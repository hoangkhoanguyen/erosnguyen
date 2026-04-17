"use client";

import { useState } from "react";
import { Code, Layers, Cpu, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const filters = [
  { key: "All", label: "All", icon: Layers },
  { key: "Next.js", label: "Next.js", icon: Code },
  { key: "React", label: "React", icon: Cpu },
  { key: "Node.js", label: "Node.js", icon: Database },
];

export default function PillFilter() {
  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-3 p-3 rounded-full w-fit">
      {filters.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.key;

        return (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition",
              isActive
                ? "bg-(--color-primary-light) text-white hover:bg-[--color-primary-dark]"
                : "bg-(--color-sidebar) text-[--color-muted-foreground] hover:bg-[--color-sidebar-accent]",
            )}
          >
            <Icon size={16} />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
