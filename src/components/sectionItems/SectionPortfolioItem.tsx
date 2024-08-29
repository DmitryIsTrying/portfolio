import React from "react";
import { SectionWrapperItem } from "../SectionWrapperItem";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { StyledBtn } from "../StyledBtn.styled";
import { Icon } from "../icon/Icon";

type PhotosArrayPropsType = {
  path: string;
  alt: string;
  select?: boolean;
};

type SectionPortfolioItemPropsType = {
  photos: PhotosArrayPropsType[];
  width: number;
  height: number;
};

export const SectionPortfolioItem: React.FC<SectionPortfolioItemPropsType> = ({
  photos,
  width,
  height,
}) => {
  return (
    <>
      {photos.map((e, i) => (
        <ImageSectionWrapperItem
          style={{ overflow: "hidden" }}
          width={width}
          height={height}
          key={i}
          path={e.path}
        >
          <StyledBtn
            aria-label="More examples"
            padding="0"
            color="transparent"
            WFit
            as={"a"}
            href={"https://www.google.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YellowGround justify="center" align="center">
              <Icon
                iconSrc="CrossSvg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              />
            </YellowGround>
          </StyledBtn>
        </ImageSectionWrapperItem>
      ))}
    </>
  );
};

const YellowGround = styled(FlexWrapper)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffb400f2;
  height: 100%;
  width: 100%;
  transition: ease 0.5s;
`;

const ImageSectionWrapperItem = styled(SectionWrapperItem)<{ path: string }>`
  position: relative;
  background: url(${(props) => props.path}) no-repeat center center / cover;
  aspect-ratio: 310 / 300;
  @media (hover: hover) {
    &:hover ${YellowGround} {
      opacity: 1;
    }
  }
  @media (hover: none) {
    &:active ${YellowGround} {
      opacity: 1;
    }
  }
`;
