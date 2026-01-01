import Image from "next/image";
import {
  PanelsTopLeft,
  Server,
  Database,
  Terminal,
  type LucideIcon,
} from "lucide-react";

/* ================= DATA ================= */

type Tech =
  | {
      name: string;
      type: "image";
      src: string;
    }
  | {
      name: string;
      type: "text";
      short: string;
      bg: string;
      text: string;
    };

type TechCategory = {
  title: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  technologies: Tech[];
};

export const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    icon: PanelsTopLeft,
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    technologies: [
      {
        name: "React / Next.js",
        type: "image",
        src: "/logos/react.png",
      },
      {
        name: "TypeScript",
        type: "image",
        src: "/logos/typescript.png",
      },
      {
        name: "Tailwind CSS",
        type: "image",
        src: "/logos/tailwind.png",
      },
      {
        name: "JavaScript (ES6+)",
        type: "text",
        short: "JS",
        bg: "bg-yellow-400",
        text: "text-black",
      },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
    technologies: [
      {
        name: "Node.js",
        type: "image",
        src: "/logos/nodejs.png",
      },
      {
        name: "Express / NestJS",
        type: "text",
        short: "EX",
        bg: "bg-black dark:bg-white",
        text: "text-white dark:text-black",
      },
      {
        name: "GraphQL",
        type: "text",
        short: "G",
        bg: "bg-purple-600",
        text: "text-white",
      },
      {
        name: "Python (Basic)",
        type: "text",
        short: "py",
        bg: "bg-gray-500",
        text: "text-white",
      },
    ],
  },
  {
    title: "Database",
    icon: Database,
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    technologies: [
      {
        name: "PostgreSQL",
        type: "text",
        short: "PS",
        bg: "bg-blue-700",
        text: "text-white",
      },
      {
        name: "MongoDB",
        type: "text",
        short: "M",
        bg: "bg-green-600",
        text: "text-white",
      },
      {
        name: "Redis",
        type: "text",
        short: "R",
        bg: "bg-red-500",
        text: "text-white",
      },
      {
        name: "Firebase",
        type: "text",
        short: "F",
        bg: "bg-yellow-500",
        text: "text-white",
      },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Terminal,
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    technologies: [
      {
        name: "Docker",
        type: "image",
        src: "/logos/docker.png",
      },
      {
        name: "Git / GitHub",
        type: "text",
        short: "G",
        bg: "bg-black",
        text: "text-white",
      },
      {
        name: "AWS (EC2, S3)",
        type: "text",
        short: "A",
        bg: "bg-blue-500",
        text: "text-white",
      },
      {
        name: "Figma",
        type: "text",
        short: "F",
        bg: "bg-gray-700",
        text: "text-white",
      },
    ],
  },
];

/* ================= COMPONENT ================= */

export function TechStackSection() {
  return (
    <section className="container relative py-20">
      <div className="max-w-250 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Công nghệ & Kỹ năng
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Bộ công cụ tôi sử dụng để xây dựng các sản phẩm chất lượng cao, từ
            giao diện người dùng đến cơ sở hạ tầng.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="bg-card dark:bg-card-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-md transition-shadow"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4 border-b border-gray-100 dark:border-white/10 pb-3">
                  <div className={`p-2 rounded-lg ${category.iconBg}`}>
                    <Icon size={20} className={category.iconColor} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Tech list */}
                <ul className="space-y-3">
                  {category.technologies.map((tech) => (
                    <li key={tech.name} className="flex items-center gap-2">
                      {tech.type === "image" ? (
                        <Image
                          src={tech.src}
                          alt={tech.name}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      ) : (
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${tech.bg} ${tech.text}`}
                        >
                          {tech.short}
                        </div>
                      )}

                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
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
    </section>
  );
}
