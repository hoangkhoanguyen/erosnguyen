import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Cloud,
  Gauge,
  Layers,
  Network,
  Rocket,
  UserRound,
} from "lucide-react";

import { webRoutes } from "@/constants/route";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 pt-24 md:py-32 md:pt-28 px-4 sm:px-10 md:px-20 lg:px-40">
      <div
        className="pointer-events-none absolute top-1/4 right-0 -z-10 h-[500px] w-[500px] animate-pulse rounded-full bg-primary/5 blur-[120px]"
        aria-hidden
      />
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="z-10 flex flex-col gap-6">
          <div className="animate-fade-in-up">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              Full-Stack Developer
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] text-foreground md:text-5xl lg:text-7xl">
              Biến ý tưởng thành{" "}
              <span className="bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent">
                hiện thực số.
              </span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Chào bạn, tôi là Anh Nguyễn. Tôi không chỉ viết code, tôi xây dựng
              các giải pháp giúp doanh nghiệp và người dùng kết nối hiệu quả hơn
              trong thế giới kỹ thuật số.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={webRoutes.projects()}
                className="inline-flex h-14 items-center gap-2 rounded-md bg-linear-to-r from-primary to-primary-dark px-8 font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/50"
              >
                <span>Xem hồ sơ năng lực</span>
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </Link>
              <Link
                href={webRoutes.myStory()}
                className="inline-flex h-14 items-center justify-center rounded-md border border-stroke bg-card px-8 font-bold text-foreground transition-all duration-300 hover:bg-muted/60 dark:hover:bg-white/10"
              >
                Về tôi
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[500px] animate-fade-in-up items-center justify-center delay-200 lg:justify-end">
          <div className="relative h-[450px] w-full max-w-[500px]">
            <div className="absolute left-0 top-0 z-20 w-52 animate-float rounded-2xl p-5 shadow-2xl glass-card">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-lg bg-green-500/20 p-2 text-green-500">
                  <Gauge className="size-[18px]" aria-hidden />
                </div>
                <span className="text-xs font-bold uppercase tracking-tighter text-muted-foreground">
                  Performance
                </span>
              </div>
              <h4 className="mb-2 text-sm font-bold text-foreground">
                High-Performance
              </h4>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[94%] rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              </div>
              <p className="mt-2 text-[10px] font-medium text-muted-foreground">
                94/100 Lighthouse Score
              </p>
            </div>

            <div className="absolute right-4 top-20 z-10 w-56 animate-float-delayed rounded-2xl p-5 shadow-2xl glass-card">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
                  <Network className="size-[18px]" aria-hidden />
                </div>
                <span className="text-xs font-bold uppercase tracking-tighter text-muted-foreground">
                  Architecture
                </span>
              </div>
              <h4 className="mb-3 text-sm font-bold text-foreground">
                Scalable Systems
              </h4>
              <div className="flex gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Cloud className="size-4" aria-hidden />
                </div>
                <div className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Layers className="size-4" aria-hidden />
                </div>
                <div className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Braces className="size-4" aria-hidden />
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 left-8 z-30 w-60 animate-float-delayed rounded-2xl p-5 shadow-2xl glass-card">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-purple-500/20 p-2 text-purple-500">
                  <UserRound className="size-[18px]" aria-hidden />
                </div>
                <span className="text-xs font-bold uppercase tracking-tighter text-muted-foreground">
                  UX / UI
                </span>
              </div>
              <h4 className="mb-3 text-sm font-bold text-foreground">
                User-Centric Design
              </h4>
              <div className="-space-x-2 flex items-center">
                <div className="size-7 rounded-full border-2 border-surface bg-gray-300 dark:border-card" />
                <div className="size-7 rounded-full border-2 border-surface bg-blue-400 dark:border-card" />
                <div className="size-7 rounded-full border-2 border-surface bg-primary dark:border-card" />
                <span className="pl-4 text-[10px] font-medium text-muted-foreground">
                  +12k Users Engaged
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 z-20 w-64 animate-float rounded-2xl p-5 shadow-2xl glass-card">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-orange-500/20 p-2 text-orange-500">
                  <Rocket className="size-[18px]" aria-hidden />
                </div>
                <span className="text-xs font-bold uppercase tracking-tighter text-muted-foreground">
                  Full Cycle
                </span>
              </div>
              <h4 className="mb-3 text-sm font-bold text-foreground">
                Full-Stack Delivery
              </h4>
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="mb-1 size-2 rounded-full bg-primary" />
                  <span className="text-[8px] uppercase text-muted-foreground">
                    Idea
                  </span>
                </div>
                <div className="mx-1 h-px flex-1 bg-linear-to-r from-primary to-green-500" />
                <div className="flex flex-col items-center">
                  <div className="mb-1 size-2 rounded-full bg-green-500" />
                  <span className="text-[8px] uppercase text-muted-foreground">
                    Live
                  </span>
                </div>
              </div>
              <p className="mt-3 text-[11px] font-semibold text-primary">
                End-to-End Solutions
              </p>
            </div>

            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[60px]"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
