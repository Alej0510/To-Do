import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeType = "light" | "dark";

interface ThemeStore {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist<ThemeStore>(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    { name: "theme" },
  ),
);
