import Image from "next/image";
import Link from "next/link";
import { ProjectDetail } from "@/mock/projects";
import { webRoutes } from "@/constants/route";
import { cn } from "@/lib/utils";

interface HomeProjectCardProps {
  project: ProjectDetail;
  /** When true the card renders taller with larger typography */
  featured?: boolean;
  className?: string;
}

export default function HomeProjectCard({
  project,
  featured = false,
  className,
}: HomeProjectCardProps) {
  return (
    <Link
      href={webRoutes.projectDetail({ slug: project.slug })}
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-white/10",
        className,
      )}
    >
      {/* Cover image */}
      <Image
        src={project.images[0].url}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes={featured ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 45vw, 100vw"}
      />

      {/* Gradient scrim */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/5 transition-opacity duration-300 group-hover:from-black/85" />

      {/* Content pinned to bottom */}
      <div
        className={cn(
          "relative flex h-full flex-col justify-end p-5 sm:p-6",
          featured ? "min-h-[340px] md:min-h-[420px]" : "min-h-[260px] md:min-h-[300px]",
        )}
      >
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white/80 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className={cn(
            "font-bold text-white transition-colors duration-300 group-hover:text-primary-light",
            featured ? "text-xl sm:text-2xl" : "text-lg",
          )}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "mt-1.5 text-white/60 line-clamp-2",
            featured ? "text-sm sm:text-base" : "text-sm",
          )}
        >
          {project.description}
        </p>

        {/* Hover arrow indicator */}
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white/50 transition-colors group-hover:text-primary-light">
          View project
          <svg
            className="size-3.5 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
