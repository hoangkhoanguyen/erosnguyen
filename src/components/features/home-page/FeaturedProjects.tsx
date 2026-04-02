import { webRoutes } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Website Thương mại điện tử",
    description:
      "Một nền tảng e-commerce đầy đủ tính năng với giao diện người dùng hiện đại, quản lý sản phẩm và tích hợp thanh toán.",
    image:
      "https://images.unsplash.com/photo-1661288378926-30c78e59560c?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Nền tảng Blog cá nhân",
    description:
      "Xây dựng một blog cá nhân tối giản và tốc độ cao, tập trung vào trải nghiệm đọc và viết nội dung.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    link: "#",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-10">
      <div className="flex items-center justify-between px-4 pb-6 pt-5">
        <h2 className="text-[22px] font-bold leading-tight tracking-tight">
          Dự án nổi bật
        </h2>
        <Link
          href={webRoutes.projects()}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1 transition-colors"
        >
          Xem tất cả
          <span className="text-lg">→</span>
        </Link>
      </div>

      <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary-600/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative w-full h-48 bg-secondary/30 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
              {/* <Link
                href={webRoutes.projectDetail({ slug: project.link })}
                className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
              >
                Xem chi tiết
                <span className="text-base">→</span>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
