import React, { useState, createContext, ReactNode, useContext } from "react";

type ThemeContextType = {
  isDark: boolean;
  onChangerBtnClick: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ChangerThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const onChangerBtnClick = () => {
    setIsDark((prevIsDark) => {
      const newIsDark = !prevIsDark;

      const metaThemeColor = document.getElementById("theme-color-meta");
      const navBar = document.getElementById("NavBar");
      if (metaThemeColor) {
        metaThemeColor.setAttribute(
          "content",
          newIsDark ? "#333333" : "#ffffff"
        );
      }
      if (navBar) {
        navBar.style.backgroundColor = newIsDark ? "#333333" : "#fafafa"; // Задайте желаемые цвета
      }

      return newIsDark;
    });
  };

  const value = { isDark, onChangerBtnClick };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
