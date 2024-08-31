import React, { useState } from "react";
import profileHeader from "../../../assets/images/Photo.webp";
import styled, { css } from "styled-components";
import { ItemsDesign } from "../../../components/itemsDesign/ItemsDesign";
import { TitleCheer } from "../../../components/titleCheer/TitleCheer";
import { layoutsTheme } from "../../../styles/Theme.styled";
import "animate.css";

type HeaderPropsType = {
  menuIsOpen: boolean;
  setMenuIsOpen: (isOpen: boolean) => void;
};

export const Header: React.FC<HeaderPropsType> = ({
  menuIsOpen,
  setMenuIsOpen,
}) => {
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
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
      <BurgerMenu
        className="animate__animated animate__fadeInLeft"
        isOpen={menuIsOpen}
        onClick={onBurgerBtnClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenu>
    </StyledHeader>
  );
};

const BurgerMenu = styled.button<{ isOpen: boolean }>`
  position: absolute;
  width: 30px;
  height: 30px;
  border: none;
  background-color: unset;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 0;
  cursor: pointer;
  top: 35px;
  left: 31px;
  z-index: 5;

  span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: #ffb400;
  }

  @media ${layoutsTheme.media.tablet} {
    display: flex;
    ${(props) =>
      props.isOpen &&
      css`
        display: none;
      `}
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
