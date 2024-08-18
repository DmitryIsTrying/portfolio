import React from "react";
import sprite from "../../assets/images/icons-sprite.svg";
import styled from "styled-components";

type IconPropsType = {
  iconSrc: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fillStart?: string;
};

type StyledSvgPropsType = {
  fillStart?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <StyledSvg
      width={props.width || "15"}
      height={props.height || "15"}
      viewBox={props.viewBox || "0 0 38 38"}
      fillStart={props.fillStart}
    >
      <use xlinkHref={`${sprite}#${props}`} x="0" y="0" />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg<StyledSvgPropsType>`
  fill: ${(props) => props.fillStart || "#767676"};
  @media (hover: hover) {
    transition: 0.5s ease;
  }
  @media (hover: none) {
    transition: 0.1s ease;
  }
`;
