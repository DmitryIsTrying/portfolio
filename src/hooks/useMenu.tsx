import React, { createContext, useContext, useState, ReactNode } from "react";

type MenuContextType = {
  menuIsOpen: boolean;
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent<HTMLElement>) => {
    if (
      e.target instanceof HTMLElement &&
      (e.target.closest("#burgerMenu") ||
        e.target.id === "blurEffect" ||
        e.target.closest("#closeInfoBtn"))
    ) {
      setMenuIsOpen((prev) => !prev);
    }
  };

  return (
    <MenuContext.Provider value={{ menuIsOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
