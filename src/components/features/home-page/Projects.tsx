import { webRoutes } from "@/constants/route";
import {
  mockProjectDetail,
  mockProject2Details,
  mockProject3Details,
} from "@/mock/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HomeProjectCard from "./HomeProjectCard";

export default function Projects() {
  const [hero, ...rest] = [
    mockProjectDetail,
    mockProject2Details,
    mockProject3Details,
  ];

  return (
    <section className="py-20">
      <div className="container flex flex-col">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
              Portfolio
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              Featured{" "}
              <span className="bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent">
                projects
              </span>
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              A selection of work I&apos;m most proud of — from concept to
              production.
            </p>
          </div>

          <Link
            href={webRoutes.projects()}
            className="group hidden items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-sm font-bold text-foreground transition-all hover:border-primary hover:text-primary sm:inline-flex"
          >
            View all
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Bento grid — hero left, 2 stacked right */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-2">
          <HomeProjectCard
            project={hero}
            featured
            className="lg:col-span-7 lg:row-span-2"
          />

          {rest.map((project) => (
            <HomeProjectCard
              key={project.slug}
              project={project}
              className="lg:col-span-5"
            />
          ))}
        </div>

        {/* Mobile-only "View all" */}
        <Link
          href={webRoutes.projects()}
          className="mt-8 inline-flex items-center gap-1.5 self-center text-sm font-bold text-muted-foreground transition-colors hover:text-primary sm:hidden"
        >
          View all projects
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
