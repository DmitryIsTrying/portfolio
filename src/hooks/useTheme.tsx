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
    setIsDark((prev) => !prev);
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
