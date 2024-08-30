import React from "react";
import profileHeader from "../../../assets/images/Photo.webp";
import styled from "styled-components";
import { ItemsDesign } from "../../../components/itemsDesign/ItemsDesign";
import { TitleCheer } from "../../../components/titleCheer/TitleCheer";
import { layoutsTheme } from "../../../styles/Theme.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <MediaWrapper>
        <TitleCheer />
        <Image
          loading="lazy"
          src={profileHeader}
          alt="Rayan Adlardard Face"
          width={"325"}
          height={"427"}
        />
      </MediaWrapper>
      <ItemsDesign />
      <BurgerMenu>
        <span></span>
      </BurgerMenu>
    </StyledHeader>
  );
};

const BurgerMenu = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  border: none;
  background-color: unset;
  display: none;

  top: 35px;
  left: 31px;
  span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: #ffb400;
    &::before {
      content: "";
      display: block;
      transform: translateY(-10px);
      width: 30px;
      height: 2px;
      background-color: #ffb400;
    }
    &::after {
      content: "";
      display: block;
      transform: translateY(10px);
      width: 30px;
      height: 2px;
      background-color: #ffb400;
    }
  }

  @media ${layoutsTheme.media.tablet} {
    display: inline-block;
  }
`;

const Image = styled.img`
  max-width: 325px;
  max-height: 460px;
`;

const MediaWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 1;
`;

const StyledHeader = styled.header.attrs(() => ({
  id: "homeSection",
}))`
  position: relative;
  padding: 0 60px;
  background-color: #ffffff;
`;
