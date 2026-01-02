import { DynamicIcon } from "lucide-react/dynamic";
import { ComponentProps } from "react";
import { Icon } from "@iconify/react";

/* ================= DATA ================= */

type Tech = {
  name: string;
  icon: string;
};

type TechCategory = {
  title: string;
  icon: ComponentProps<typeof DynamicIcon>["name"];
  technologies: Tech[];
};

export const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    icon: "panels-top-left",
    technologies: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    technologies: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "NestJS", icon: "logos:nestjs" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "Python", icon: "logos:python" },
    ],
  },
  {
    title: "Database",
    icon: "database",
    technologies: [
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Redis", icon: "logos:redis" },
      { name: "Firebase", icon: "logos:firebase" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "terminal",
    technologies: [
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "GitHub", icon: "mdi:github" },
      { name: "AWS", icon: "logos:aws" },
      { name: "Figma", icon: "logos:figma" },
    ],
  },
];

/* ================= COMPONENT ================= */
export function TechStackSection() {
  return (
    <section className="py-20 bg-surface border-b border-stroke">
      <div className="flex flex-col container flex-1">
        <div className="relative">
          <div className="mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Công nghệ & Kỹ năng
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Bộ công cụ tôi sử dụng để xây dựng các sản phẩm chất lượng cao,
                từ giao diện người dùng đến cơ sở hạ tầng.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techCategories.map((category) => {
                return (
                  <div
                    key={category.title}
                    className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <DynamicIcon name={category.icon} />
                      </div>
                      <h3 className="font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    {/* Tech list */}
                    <ul className="space-y-3">
                      {category.technologies.map((tech) => (
                        <li key={tech.name} className="flex items-center gap-2">
                          <Icon icon={tech.icon} className="w-5 h-5" />

                          <span className="text-sm font-medium text-muted-foreground">
                            {tech.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
