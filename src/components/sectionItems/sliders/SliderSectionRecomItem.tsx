import React from "react";
import { SectionWrapperItem } from "../../SectionWrapperItem";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { StyledSecondaryText } from "../../SecondaryText.styled";
import styled from "styled-components";
import { Stars } from "../../stars/Stars";
import { FlexWrapper } from "../../FlexWrapper";
import "animate.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../../styles/Slider.css";

const responsive = {
  0: { items: 1 },
  750: { items: 2 },
  993: { items: 1 },
  1192: { items: 2 },
};

type RecData = {
  title: string;
  comment: string;
  pathPhoto: string;
  altPhoto: string;
  name: string;
  job: string;
};

type SectionRecomItemPropsType = {
  recData: RecData[];
  width: number;
  height: number;
};

export const SliderSectionRecomItem: React.FC<SectionRecomItemPropsType> = ({
  recData,
  width,
  height,
}) => {
  let countDelay = 200;
  return (
    <AliceCarousel
      autoHeight
      mouseTracking
      responsive={responsive}
      controlsStrategy="alternate"
      infinite
      autoPlay
      autoPlayInterval={4000}
      disableButtonsControls
    >
      {recData.map((icon, i) => {
        const delay = `${countDelay * i}ms`;
        return (
          <SlidesSectionWrapperItem
            padding="25px"
            width={width}
            height={height}
            style={{ justifyContent: "space-between", animationDelay: delay }}
            className="animate__animated animate__fadeInUp"
            key={i}
          >
            <Stars starsCount={5} />
            <StyledPrimaryText
              TAlign="left"
              style={{ width: "100%", margin: "17px 0 18px 0" }}
              as={"p"}
            >
              {icon.title}
            </StyledPrimaryText>
            <StyledSecondaryText TAlign="left">
              {icon.comment}
            </StyledSecondaryText>
            <FlexWrapper
              align="center"
              style={{ marginTop: "30px" }}
              gap="13px"
            >
              <StyledAvatar
                loading="lazy"
                src={icon.pathPhoto}
                alt={icon.altPhoto}
              />
              <FlexWrapper direction="column" justify="center">
                <StyledPrimaryText style={{ marginBottom: "5px" }} as={"p"}>
                  {icon.name}
                </StyledPrimaryText>
                <StyledSecondaryText>{icon.job}</StyledSecondaryText>
              </FlexWrapper>
            </FlexWrapper>
          </SlidesSectionWrapperItem>
        );
      })}
    </AliceCarousel>
  );
};

const SlidesSectionWrapperItem = styled(SectionWrapperItem)`
  width: 310px;
  margin: 0 auto;
`;

const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;
