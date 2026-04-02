import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ThemeColor = {
  name: string;
  optionClassName: string;
};

export const themes: Record<string, ThemeColor> = {
  default: {
    name: "orange",
    optionClassName: "bg-gradient-to-br from-orange-600 to-orange-400",
  },
  green: {
    name: "green",
    optionClassName: "bg-gradient-to-br from-green-600 to-green-400",
  },
  blue: {
    name: "ocean",
    optionClassName: "bg-gradient-to-br from-blue-600 to-blue-400",
  },
};

const applyTheme = (themeName: string) => {
   if (typeof window === "undefined") return;

  const root = document.documentElement;

  if (themeName === "default") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", themeName);
  }
};

type ThemeStore = {
  currentTheme: string;
  setTheme: (theme: string) => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      currentTheme: "default",
      setTheme: (themeName: string) => {
        if (!themes[themeName]) return;
        applyTheme(themeName);
        set({ currentTheme: themeName });
      },
    }),
    {
      name: "theme-color",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        let next = state.currentTheme;
        if (next === "orange") next = "blue";
        if (!themes[next]) next = "default";
        if (next !== state.currentTheme) state.currentTheme = next;
        applyTheme(next);
      },
    },
  ),
);
