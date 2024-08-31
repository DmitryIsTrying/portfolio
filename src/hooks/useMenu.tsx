import React from "react";
import { useState } from "react";

export function useMenu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return { menuIsOpen, onBurgerBtnClick };
}
