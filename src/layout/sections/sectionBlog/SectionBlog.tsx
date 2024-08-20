import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledTitleText } from "../../../components/TitleText.styled";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import { GridWrapper } from "../../../components/GridWrapper";
import { StyledImage } from "../../../components/StyledImage";
import Port1 from "../../../assets/images/Port1-blog.webp";
import Port2 from "../../../assets/images/Port2-blog.webp";
import Port3 from "../../../assets/images/Port3-blog.webp";
import { StyledPrimaryText } from "../../../components/PrimaryText.styled";
import { Icon } from "../../../components/icon/Icon";

export const SectionBlog = () => {
  return (
    <FlexWrapper
      as={"section"}
      color="#F0F0F6"
      direction="column"
      align="center"
    >
      <StyledTitleText style={{ marginBottom: "25px" }}>Blog</StyledTitleText>
      <FlexWrapper color="#F0F0F6" justify="center">
        <StyledSecondaryText
          style={{ marginBottom: "50px" }}
          Mwidth
          TAlign="center"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </StyledSecondaryText>
      </FlexWrapper>
      <GridWrapper columns="3, 310px" rows="1, 474px">
        <FlexWrapper
          direction="column"
          justify="flex-end"
          style={{ position: "relative" }}
        >
          <StyledImage path={Port1} alt="Port1" />
          <FlexWrapper
            fitHeight
            direction="column"
            padding="25px 17px 18px 25px"
          >
            <StyledPrimaryText style={{ marginBottom: "8px" }}>
              How to make web tempates
            </StyledPrimaryText>
            <StyledSecondaryText style={{ marginBottom: "9px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna
            </StyledSecondaryText>
            <FlexWrapper gap="8px" fitHeight align="baseline">
              <StyledPrimaryText color="#FFB400">Learn more</StyledPrimaryText>
              <Icon
                iconSrc="ServiceArrowRightSvg"
                width="6"
                height="8"
                viewBox="0 0 6 8"
              />
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper
          direction="column"
          justify="flex-end"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <StyledImage path={Port2} alt="Port2" />
          <FlexWrapper
            fitHeight
            direction="column"
            padding="25px 17px 18px 25px"
          >
            <StyledPrimaryText style={{ marginBottom: "8px" }}>
              make Business card
            </StyledPrimaryText>
            <StyledSecondaryText style={{ marginBottom: "9px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna
            </StyledSecondaryText>
            <FlexWrapper gap="8px" fitHeight align="baseline">
              <StyledPrimaryText color="#FFB400">Learn more</StyledPrimaryText>
              <Icon
                iconSrc="ServiceArrowRightSvg"
                width="6"
                height="8"
                viewBox="0 0 6 8"
              />
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper
          direction="column"
          justify="flex-end"
          style={{ position: "relative" }}
        >
          <StyledImage path={Port3} alt="Port3" />
          <FlexWrapper
            fitHeight
            direction="column"
            padding="25px 17px 18px 25px"
          >
            <StyledPrimaryText style={{ marginBottom: "8px" }}>
              How to make Flyer Design
            </StyledPrimaryText>
            <StyledSecondaryText style={{ marginBottom: "9px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna
            </StyledSecondaryText>
            <FlexWrapper gap="8px" fitHeight align="baseline">
              <StyledPrimaryText color="#FFB400">Learn more</StyledPrimaryText>
              <Icon
                iconSrc="ServiceArrowRightSvg"
                width="6"
                height="8"
                viewBox="0 0 6 8"
              />
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </GridWrapper>
    </FlexWrapper>
  );
};
