import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { layoutsTheme } from "../../styles/Theme.styled";

type Links = {
  ariaLabel: string;
  href: string;
  iconSrc: string;
  width: string;
  height: string;
  viewBox: string;
};

type ListItemsProps = {
  Links: Links[];
  direction?: "row" | "column";
  width: number;
  height: number;
  color: string;
  gap: number;
  justify?: string;
};

export const ListItems = ({
  Links,
  direction = "row",
  width = 10,
  height = 10,
  color,
  gap,
  justify,
}: ListItemsProps) => {
  return (
    <StyledUl justify={justify} gap={gap} direction={direction}>
      {Links.map((link, index) => (
        <StyledLi width={width} height={height} color={color} key={index}>
          <StyledLink aria-label={link.ariaLabel} href={link.href}>
            <Icon
              iconSrc={link.iconSrc}
              width={link.width}
              height={link.height}
              viewBox={link.viewBox}
            />
          </StyledLink>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul<{
  direction: "row" | "column";
  gap: number;
  justify?: string;
}>`
  list-style: none;
  display: flex;
  justify-content: ${(props) => props.justify || "space-between"};
  gap: ${(props) => props.gap}px;
  flex-direction: ${(props) => props.direction || "row"};

  @media ${layoutsTheme.media.tablet} {
    flex-direction: row;
    gap: 10px;
  }
`;

const StyledLink = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  @media (hover: hover) {
    transition: 0.5s ease;
    &:hover {
      background-color: #ffb400;
      svg {
        fill: #2b2b2b;
      }
    }
  }

  @media (hover: none) {
    transition: 0.1s ease;
    &:active {
      background-color: #ffb400;
      svg {
        fill: #2b2b2b;
      }
    }
  }
`;

const StyledLi = styled.li<{ width: number; height: number; color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  cursor: pointer;
  transition: ease 0.5s;
  &:hover {
    transform: scale(1.15);
    box-shadow: 0px 1px 10px 0px #00000026;
  }
`;
