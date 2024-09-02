import React, { useEffect, useState } from "react";
import { SectionWrapperItem } from "../../SectionWrapperItem";
import styled from "styled-components";
import { FlexWrapper } from "../../FlexWrapper";
import { StyledBtn } from "../../StyledBtn.styled";
import { Icon } from "../../icon/Icon";

export type PhotosArrayPropsType = {
  path: string;
  type: "All categories" | "UI Design" | "Web Templates" | "Logo" | "Branding";
};

type SectionPortfolioItemPropsType = {
  photos: PhotosArrayPropsType[];
  width: number;
  height: number;
  currentFilterStatus: any;
};

export const SectionPortfolioItem: React.FC<SectionPortfolioItemPropsType> = ({
  photos,
  width,
  height,
  currentFilterStatus,
}) => {
  let filteredWorks = photos;
  if (currentFilterStatus !== "All categories") {
    filteredWorks = photos.filter(
      (photos) => photos.type === currentFilterStatus
    );
  }
  const [animationIndex, setAnimationIndex] = useState(0);
  useEffect(() => {
    setAnimationIndex((prev) => prev + 1);
  }, [photos, currentFilterStatus]);

  let countDelay = 200;
  return (
    <>
      {filteredWorks.map((e, i) => {
        const delay = `${countDelay * i}ms`;
        return (
          <ImageSectionWrapperItem
            style={{ overflow: "hidden", animationDelay: delay }}
            width={width}
            height={height}
            key={`${i}-${animationIndex}`}
            path={e.path}
            className={`animate__animated ${
              animationIndex > 1 ? "animate__fadeIn" : "animate__fadeInUp"
            }`}
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
        );
      })}
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
  width: 100%;
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
