import React, {
  useState,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from "react";

type ThemeContextType = {
  isDark: boolean;
  onChangerBtnClick: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ChangerThemeProvider({ children }: { children: ReactNode }) {
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      return darkModeMediaQuery.matches;
    }
    return false;
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    const metaThemeColor = document.getElementById("theme-color-meta");
    const navBar = document.getElementById("NavBar");

    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", isDark ? "#1A1A1A" : "#F0F0F6");
    }
    if (navBar) {
      navBar.style.backgroundColor = isDark ? "#333333" : "#fafafa";
    }
  }, [isDark]);

  const onChangerBtnClick = () => {
    setIsDark((prevIsDark) => !prevIsDark);
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
