"use client";

import { Button } from "../ui";
import { Check, Palette } from "lucide-react";
import { useThemeStore, themes } from "@/store/themeStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function PaletteSwitcher() {
  const { currentTheme, setTheme } = useThemeStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" aria-label="Choose color theme">
          <Palette className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Color Palette
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup value={currentTheme} onValueChange={setTheme}>
          {Object.entries(themes).map(([key, theme]) => (
            <DropdownMenuRadioItem
              key={key}
              value={key}
              className="group cursor-pointer gap-3 py-2.5"
            >
              {/* Color preview circle */}
              <div
                className={cn(
                  "size-6 rounded-full border-2 border-border shadow-sm transition-transform group-hover:scale-110",
                  theme.optionClassName,
                )}
              />

              {/* Theme name */}
              <span className="flex-1 font-medium capitalize">{theme.name}</span>

              {/* Active indicator – only visible when selected */}
              {currentTheme === key && (
                <Check className="size-4 text-primary" strokeWidth={3} />
              )}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
