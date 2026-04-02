"use client";

import Link from "next/link";
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
  return (
    <Drawer direction="right" shouldScaleBackground={false}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Mở menu điều hướng"
        >
          <Menu className="size-5" aria-hidden />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex h-full max-h-full flex-col gap-0 p-0">
        <DrawerHeader className="border-b border-border px-4 py-2 text-left">
          <DrawerTitle className="text-lg">Eros Nguyen</DrawerTitle>
        </DrawerHeader>
        <nav
          className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-2 py-3"
          aria-label="Menu chính"
        >
          {navItems.map((item) => (
            <DrawerClose key={item.href} asChild>
              <Link
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium text-foreground",
                  "transition-colors hover:bg-muted active:bg-muted/80",
                )}
              >
                {item.label}
              </Link>
            </DrawerClose>
          ))}
        </nav>
        <DrawerFooter className="border-t border-border bg-background/95 px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ThemeToggle />
            <PaletteSwitcher />
            <QuickContact />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
