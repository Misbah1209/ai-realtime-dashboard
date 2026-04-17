import { create } from "zustand";

type ThemeState = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (t: "light" | "dark") => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),

  setTheme: (t) => set({ theme: t }),
}));
