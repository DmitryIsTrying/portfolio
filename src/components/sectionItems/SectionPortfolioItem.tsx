import React from "react";
import { SectionWrapperItem } from "../SectionWrapperItem";
import { StyledImage } from "../StyledImage";
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
        <SectionWrapperItem
          style={{ overflow: "hidden" }}
          width={width}
          height={height}
        >
          {e.select ? (
            <YellowGround justify="center" align="center">
              <StyledBtn
                aria-label="More examples"
                padding="0"
                color="transparent"
                WFit
              >
                <Icon
                  iconSrc="CrossSvg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                />
              </StyledBtn>
            </YellowGround>
          ) : null}
          <ImagePortfolio src={e.path} alt={e.alt} />
        </SectionWrapperItem>
      ))}
    </>
  );
};
const YellowGround = styled(FlexWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffb400f2;
  height: 100%;
`;

const ImagePortfolio = styled.img`
  display: block;
  height: 300px;
  width: 100%;
  object-fit: cover;
`;
