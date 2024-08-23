import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { ListItems } from "../../components/listItems/ListItems";

const anchorLinks = [
  {
    ariaLabel: "Home section",
    href: "#homeSection",
    iconSrc: "homeNavSvg",
    width: "18",
    height: "15",
    viewBox: "0 0 18 15",
  },
  {
    ariaLabel: "Price section",
    href: "#priceSection",
    iconSrc: "serviceNavSvg",
    width: "16.5",
    height: "18",
    viewBox: "0 0 16.5 18",
  },
  {
    ariaLabel: "Education Section",
    href: "#educationSection",
    iconSrc: "cvNavSvg",
    width: "17",
    height: "18",
    viewBox: "0 0 17 18",
  },
  {
    ariaLabel: "Work History Section",
    href: "#workHistorySection",
    iconSrc: "portfolioNavSvg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
  },
  {
    ariaLabel: "Portfolio Section",
    href: "#portfolioSection",
    iconSrc: "iconDribbbleNavSvg",
    width: "14",
    height: "16",
    viewBox: "0 0 14 16",
  },
  {
    ariaLabel: "Submit message",
    href: "#messageSection",
    iconSrc: "messageNavSvg",
    width: "16",
    height: "15",
    viewBox: "0 0 16 15",
  },
];

export const NavBar = () => {
  return (
    <StyledNav>
      <StyledBtnIcon aria-label="Change Site Theme">
        <Icon
          iconSrc={"darkLightNavSvg"}
          width="25"
          height="25"
          viewBox="0 0 25 25"
        />
      </StyledBtnIcon>
      <ListItems
        width={40}
        height={40}
        color="#F0F0F6"
        Links={anchorLinks}
        direction="column"
        gap={43}
      />
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  background-color: #fafafa;
  position: fixed;
  top: 0;
  right: 0;
  padding: 52px 34px 568px 34px;
  height: 100%;
`;

const StyledBtnIcon = styled.button`
  display: flex;
  border-radius: 50%;
  border: none;
  margin-bottom: 212px;
  background-color: transparent;
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid #ff8800;
  }
`;
