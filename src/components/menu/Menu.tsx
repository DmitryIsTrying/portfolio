import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <button aria-label="Change Site Theme">
            <Icon
              iconSrc={"darkLightNavSvg"}
              width="25"
              height="25"
              viewBox="0 0 25 25"
            />
          </button>
        </li>
        <li>
          <a aria-label="Home section" href="#homeSection">
            <Icon
              iconSrc={"homeNavSvg"}
              width="18"
              height="15"
              viewBox="0 0 18 15"
            />
          </a>
        </li>
        <li>
          <a aria-label="Price section" href="#priceSection">
            <Icon
              iconSrc={"serviceNavSvg"}
              width="16.5"
              height="18"
              viewBox="0 0 16.5 18"
            />
          </a>
        </li>
        <li>
          <a aria-label="Education Section" href="#educationSection">
            <Icon
              iconSrc={"cvNavSvg"}
              width="17"
              height="18"
              viewBox="0 0 17 18"
            />
          </a>
        </li>
        <li>
          <a aria-label="Work History Section" href="#workHistorySection">
            <Icon
              iconSrc={"portfolioNavSvg"}
              width="16"
              height="16"
              viewBox="0 0 16 16"
            />
          </a>
        </li>
        <li>
          <a aria-label="Portfolio Section" href="#portfolioSection">
            <Icon
              iconSrc={"iconDribbbleNavSvg"}
              width="14"
              height="16"
              viewBox="0 0 14 16"
            />
          </a>
        </li>
        <li>
          <a aria-label="Submit message" href="#messageSection">
            <Icon
              iconSrc={"messageNavSvg"}
              width="16"
              height="15"
              viewBox="0 0 16 15"
            />
          </a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 43px;
  }
`;
