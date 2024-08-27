import React from "react";
import profileHeader from "../../../assets/images/Photo.webp";
import styled from "styled-components";
import { ItemsDesign } from "../../../components/itemsDesign/ItemsDesign";
import { TitleCheer } from "../../../components/titleCheer/TitleCheer";

export const Header = () => {
  return (
    <StyledHeader>
      <MediaWrapper>
        <TitleCheer />
        <ImageWrapper>
          <img src={profileHeader} alt="Rayan Adlardard Face" />
        </ImageWrapper>
      </MediaWrapper>
      <ItemsDesign />
    </StyledHeader>
  );
};

const ImageWrapper = styled.div`
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
