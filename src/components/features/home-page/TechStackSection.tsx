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
  description?: string;
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
      { name: "Vue.js (in progress)", icon: "logos:vue" },
    ],
    description:
      "Confident building modern React/Next.js UIs: strong JS/TS fundamentals, clean component patterns, practical performance optimization (manual profiling). Comfortable with Next.js rendering & caching patterns and integrating common libraries.",
  },
  {
    title: "Backend",
    icon: "server",
    technologies: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "ExpressJS", icon: "skill-icons:expressjs-light" },
      { name: "NestJS (in progress)", icon: "logos:nestjs" },
    ],
    description:
      "Can deliver a complete backend app: authentication, role-based authorization (RBAC), CRUD APIs, and reporting endpoints. Growing: performance tuning, advanced infra patterns, and deeper NestJS usage.",
  },
  {
    title: "Database & ORM",
    icon: "database",
    technologies: [
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Drizzle ORM", icon: "material-icon-theme:drizzle" },
      { name: "Sequelize", icon: "material-icon-theme:sequelize" },
      { name: "Knex.js", icon: "logos:knex" },
    ],
    description:
      "Strong in application queries & data modeling; currently learning DB internals (functions, triggers,...).",
  },
  {
    title: "Tools & DevOps",
    icon: "terminal",
    technologies: [
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "GitHub", icon: "mdi:github" },
      { name: "AWS", icon: "logos:aws" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Kubernetes", icon: "devicon:kubernetes" },
    ],
    description:
      "Comfortable bootstrapping, running, and debugging day-to-day workflows (containers, CI, cloud basics). Not my focus yet: deep performance tuning, hardening, or large-scale cluster ops.",
  },
];

/* ================= COMPONENT ================= */
export function TechStackSection() {
  return (
    <section className="py-20">
      <div className="flex flex-col container flex-1">
        <div className="relative">
          <div className="mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Tech stack &amp; skills
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Languages, frameworks, and tools I use across the stack—UI,
                backend services, data, and the workflow that ships changes to
                production.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techCategories.map((category) => (
                <div
                  key={category.title}
                  className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 border-b border-border pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <DynamicIcon name={category.icon} />
                      </div>
                      <h3 className="font-bold text-foreground leading-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>

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

                  {category.description ? (
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {category.description}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
