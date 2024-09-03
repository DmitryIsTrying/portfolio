import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { ListItems } from "../../components/listItems/ListItems";
import { layoutsTheme } from "../../styles/Theme.styled";
import { useTheme } from "../../hooks/useTheme";

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
  const { isDark, onChangerBtnClick } = useTheme();
  return (
    <StyledNav id="NavBar">
      <StyledBtnIcon onClick={onChangerBtnClick} aria-label="Change Site Theme">
        <Icon
          iconSrc={isDark ? "lightDarkNavSvg" : "darkLightNavSvg"}
          width="25"
          height="25"
          viewBox="0 0 25 25"
        />
      </StyledBtnIcon>
      <ListItems
        width={40}
        height={40}
        color={
          isDark
            ? layoutsTheme.theme.dark.bgcColor
            : layoutsTheme.theme.light.bgcColor
        }
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
  height: 100%;
  padding: 52px 34px 0;

  @media ${layoutsTheme.media.tablet} {
    top: unset;
    bottom: 0;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    padding: 20px 0 20px 0;
    justify-content: center;
  }
`;

const StyledBtnIcon = styled.button`
  display: flex;
  border-radius: 50%;
  border: none;
  margin-bottom: 212px;
  background-color: transparent;
  cursor: pointer;
  transition: ease 0.3s;
  &:focus-visible {
    outline: 2px solid #ff8800;
  }
  &:hover {
    transform: scale(1.2);
  }
  @media ${layoutsTheme.media.tablet} {
    margin-bottom: 0px;
    margin-right: 27px;
  }
`;
