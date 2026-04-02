"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";

/**
 * Component to initialize theme colors on mount
 * This ensures theme is applied after hydration
 */
export function ThemeInitializer() {
  const currentTheme = useThemeStore((state) => state.currentTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (currentTheme === "default") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", currentTheme);
    }
  }, [currentTheme]);

  return null;
}
