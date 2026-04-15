"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { PaletteSwitcher } from "@/components/layout/PaletteSwitcher";
import { webRoutes } from "@/constants/route";
import { QuickContact } from "../shared/contact/QuickContact";
import { MobileHeaderMenu } from "./MobileHeaderMenu";
import { cn } from "@/lib/utils";

const navItems = [
  { href: webRoutes.home(), label: "Home" },
  { href: webRoutes.myStory(), label: "My Story" },
  { href: webRoutes.projects(), label: "Projects" },
  { href: webRoutes.blogs(), label: "Blogs" },
] as const;

export function Header() {
  const pathname = usePathname();

  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(
    null,
  );

  const isActive = useCallback(
    (href: string) =>
      href === "/" ? pathname === "/" : pathname.startsWith(href),
    [pathname],
  );

  const measurePill = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    const activeIndex = navItems.findIndex((item) => isActive(item.href));
    const el = itemRefs.current[activeIndex];
    if (!el) {
      setPill(null);
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setPill({
      left: elRect.left - navRect.left,
      width: elRect.width,
    });
  }, [isActive]);

  useEffect(() => {
    const rafId = requestAnimationFrame(measurePill);
    window.addEventListener("resize", measurePill, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", measurePill);
    };
  }, [measurePill]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto w-full",
          "transition-[max-width,margin,border-radius,background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-in-out",
          "mt-3 container px-4 rounded-2xl border border-border/50 bg-background/70 shadow-lg shadow-black/4 dark:shadow-black/20 backdrop-blur-xl",
        )}
      >
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link
            href={webRoutes.home()}
            className="group flex items-center gap-2.5 shrink-0"
          >
            <div className="relative size-8 rounded-lg bg-linear-to-br from-primary to-primary-light flex items-center justify-center shadow-md shadow-primary/25 transition-transform duration-300 group-hover:scale-110">
              <span className="text-sm font-black text-white leading-none">
                E
              </span>
            </div>
            <span className="text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              Eros Nguyen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-2">
            <nav
              ref={navRef}
              className="relative flex items-center rounded-xl p-1 mr-3"
            >
              {/* Sliding pill indicator */}
              {pill && (
                <div
                  className="absolute top-1 bottom-1 transition-[left,width] duration-300 ease-in-out"
                  style={{ left: pill.left, width: pill.width }}
                >
                  <div className="rounded-lg bg-primary shadow-sm shadow-primary/25 h-full w-full -rotate-2" />
                </div>
              )}

              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className={cn(
                    "relative z-10 px-4 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200",
                    isActive(item.href)
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1.5">
              <ThemeToggle />
              <PaletteSwitcher />
              <QuickContact />
            </div>
          </div>

          <MobileHeaderMenu />
        </div>
      </div>
    </header>
  );
}
