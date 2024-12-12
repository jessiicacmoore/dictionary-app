import { createContext, useState, useEffect, ReactNode } from "react";
import { Theme, Font } from "@features/theme/types";

type ThemeState = {
  theme: Theme;
  font: Font;
  toggleTheme: () => void;
  setFont: (font: Font) => void;
};

export const ThemeContext = createContext<ThemeState | undefined>(undefined);

const THEME_KEY = "theme";
const FONT_KEY = "font";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem(THEME_KEY) as Theme) || "light";
  });

  const [font, setFont] = useState<Font>(() => {
    return (localStorage.getItem(FONT_KEY) as Font) || "sans";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(
      "light",
      "dark",
      "font-sans",
      "font-serif",
      "font-monospace",
    );
    root.classList.add(theme, `font-${font}`);
    localStorage.setItem(THEME_KEY, theme);
    localStorage.setItem(FONT_KEY, font);
  }, [theme, font]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const updateFont = (newFont: Font) => {
    setFont(newFont);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, font, toggleTheme, setFont: updateFont }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
