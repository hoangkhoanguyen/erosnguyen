"use client";

import Link from "next/link";
import { Button } from "../ui";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { PaletteSwitcher } from "@/components/layout/PaletteSwitcher";
import { webRoutes } from "@/constants/route";
import { BatteryFull } from "lucide-react";
import { QuickContact } from "../shared/contact/QuickContact";

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
            <div className="size-6 text-primary-600">
              <BatteryFull />
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">
              Eros Nguyen
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-8">
            <nav className="flex items-center gap-9">
              <Link
                href={webRoutes.myStory()}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Câu chuyện
              </Link>
              <Link
                href={webRoutes.projects()}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Dự án
              </Link>
              <Link
                href={webRoutes.blogs()}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </nav>

            <div className="flex gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
              <PaletteSwitcher />
              <QuickContact />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="secondary" size="icon" className="md:hidden">
            <span className="text-2xl">☰</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
