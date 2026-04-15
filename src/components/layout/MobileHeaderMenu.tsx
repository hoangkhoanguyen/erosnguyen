"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PaletteSwitcher } from "@/components/layout/PaletteSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { QuickContact } from "@/components/shared/contact/QuickContact";
import { webRoutes } from "@/constants/route";
import { cn } from "@/lib/utils";

const navItems = [
  { href: webRoutes.home(), label: "Home" },
  { href: webRoutes.myStory(), label: "My Story" },
  { href: webRoutes.projects(), label: "Projects" },
  { href: webRoutes.blogs(), label: "Blogs" },
] as const;

export function MobileHeaderMenu() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Drawer direction="right" shouldScaleBackground={false}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" aria-hidden />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex h-full max-h-full flex-col gap-0 p-0">
        <DrawerHeader className="border-b border-border px-5 py-4 text-left">
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-linear-to-br from-primary to-primary-light flex items-center justify-center shadow-md shadow-primary/25">
              <span className="text-sm font-black text-white leading-none">
                E
              </span>
            </div>
            <DrawerTitle className="text-lg font-bold tracking-tight">
              Eros Nguyen
            </DrawerTitle>
          </div>
        </DrawerHeader>
        <nav
          className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <DrawerClose key={item.href} asChild>
              <Link
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition-all duration-200",
                  isActive(item.href)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground hover:bg-muted active:bg-muted/80",
                )}
              >
                {item.label}
              </Link>
            </DrawerClose>
          ))}
        </nav>
        <DrawerFooter className="border-t border-border bg-muted/30 px-5 py-5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <ThemeToggle />
            <PaletteSwitcher />
            <QuickContact />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
