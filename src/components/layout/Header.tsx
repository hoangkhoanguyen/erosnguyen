"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { PaletteSwitcher } from "@/components/layout/PaletteSwitcher";
import { webRoutes } from "@/constants/route";
import { QuickContact } from "../shared/contact/QuickContact";
import { MobileHeaderMenu } from "./MobileHeaderMenu";
// import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link
            href={webRoutes.home()}
            className="flex items-center gap-3 text-primary"
          >
            {/* <div className="size-6 text-primary-600">
              <BatteryFull />
            </div> */}
            {/* <Image src="/logo.jpg" alt="Eros Nguyen" width={32} height={32} /> */}
            <h2 className="text-lg font-bold leading-tight tracking-tight">
              Eros Nguyen
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-8">
            <nav className="flex items-center gap-9">
              <Link
                href={webRoutes.home()}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href={webRoutes.myStory()}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                My Story
              </Link>
              <Link
                href={webRoutes.projects()}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href={webRoutes.blogs()}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Blogs
              </Link>
            </nav>

            <div className="flex gap-2">
              {/* <LanguageSwitcher /> */}
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
