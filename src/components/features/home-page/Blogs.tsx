import Link from "next/link";
import Image from "next/image";
import { mockBlogDetail } from "@/mock/blog";
import { ArrowRight, Clock } from "lucide-react";

export default function Blogs() {
  const [featured, ...others] = mockBlogDetail;

  return (
    <section className="py-20">
      <div className="container flex flex-col">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
              Blog
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              Latest{" "}
              <span className="bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent">
                articles
              </span>
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Thoughts on frontend, architecture, and building products that
              last.
            </p>
          </div>

          <Link
            href="/blogs"
            className="group hidden items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-sm font-bold text-foreground transition-all hover:border-primary hover:text-primary sm:inline-flex"
          >
            All articles
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Grid — featured card left, stacked list right */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Featured article */}
          <Link
            href={`/blogs/${featured.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 lg:col-span-7"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/80 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                  {featured.tags[0]}
                </span>
                <span className="flex items-center gap-1 text-xs text-white/60">
                  <Clock className="size-3" />
                  {featured.readingTime}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white transition-colors group-hover:text-primary-light sm:text-xl md:text-2xl">
                {featured.title}
              </h3>
              <p className="mt-1.5 text-sm text-white/60 line-clamp-2">
                {featured.excerpt}
              </p>

              <div className="mt-4 flex items-center gap-2.5">
                <Image
                  src={featured.author.avatar}
                  alt={featured.author.name}
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <span className="text-xs font-medium text-white/70">
                  {featured.author.name}
                </span>
                <span className="text-white/30">·</span>
                <time className="text-xs text-white/50">
                  {new Date(featured.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
            </div>
          </Link>

          {/* Other articles — stacked on the right */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {others.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="group flex gap-4 overflow-hidden rounded-2xl border border-stroke/60 bg-surface/40 p-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-surface/70"
              >
                <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-xl sm:w-28">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="120px"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center py-0.5">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                      {blog.tags[0]}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Clock className="size-2.5" />
                      {blog.readingTime}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-foreground line-clamp-2 transition-colors group-hover:text-primary sm:text-base">
                    {blog.title}
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile "View all" */}
        <Link
          href="/blogs"
          className="mt-8 inline-flex items-center gap-1.5 self-center text-sm font-bold text-muted-foreground transition-colors hover:text-primary sm:hidden"
        >
          All articles
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
