import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeType = "light" | "dark";

interface ThemeStore {
  theme: ThemeType;
  toggleTheme: () => void;
  initTheme: () => void;
}

const applyTheme = (theme: ThemeType) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
};

export const useThemeStore = create<ThemeStore>()(
  persist<ThemeStore>(
    (set, get) => ({
      theme: "light",
      toggleTheme: () => {
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          applyTheme(newTheme);
          return { theme: newTheme };
        });
      },
      initTheme: () => {
        applyTheme(get().theme);
      },
    }),
    { name: "theme" }
  )
);

