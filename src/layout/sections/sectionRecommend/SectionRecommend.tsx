import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import { StyledTitleText } from "../../../components/TitleText.styled";
import { GridWrapper } from "../../../components/GridWrapper";
import { Stars } from "../../../components/stars/Stars";
import { StyledPrimaryText } from "../../../components/PrimaryText.styled";
import RecPhotoLeft from "../../../assets/images/Rec-person-left.webp";
import RecPhotoMiddle from "../../../assets/images/Rec-person-middle.webp";
import RecPhotoRight from "../../../assets/images/Rec-person-right.webp";
import styled from "styled-components";

export const SectionRecommend = () => {
  return (
    <FlexWrapper
      as={"section"}
      fitHeight
      color="#F0F0F6"
      direction="column"
      align="center"
    >
      <StyledTitleText style={{ marginBottom: "25px" }}>
        Recommendations
      </StyledTitleText>
      <FlexWrapper fitHeight color="#F0F0F6" justify="center">
        <StyledSecondaryText
          style={{ marginBottom: "50px" }}
          Mwidth
          TAlign="center"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </StyledSecondaryText>
      </FlexWrapper>
      <GridWrapper columns="3, 310px" rows="1, 323px">
        <FlexWrapper
          padding="25px"
          direction="column"
          align="flex-start"
          justify="flex-start"
        >
          <Stars starsCount={5} />
          <StyledPrimaryText style={{ marginBottom: "18px" }} as={"p"}>
            Great Quality!
          </StyledPrimaryText>
          <StyledSecondaryText style={{ marginBottom: "30px" }} TAlign="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi. Morbi donec amet....
          </StyledSecondaryText>
          <FlexWrapper gap="13px">
            <StyledAvatar src={RecPhotoLeft} alt="James Gouse" />
            <FlexWrapper direction="column" justify="center">
              <StyledPrimaryText as={"p"}>James Gouse</StyledPrimaryText>
              <StyledSecondaryText>Graphic Designer</StyledSecondaryText>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper
          padding="25px"
          direction="column"
          align="flex-start"
          justify="flex-start"
        >
          <Stars starsCount={5} />
          <StyledPrimaryText style={{ marginBottom: "18px" }} as={"p"}>
            Amazing work!
          </StyledPrimaryText>
          <StyledSecondaryText style={{ marginBottom: "30px" }} TAlign="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi. Morbi donec amet....
          </StyledSecondaryText>
          <FlexWrapper gap="13px">
            <StyledAvatar src={RecPhotoMiddle} alt="Tiana Philips" />
            <FlexWrapper direction="column" justify="center">
              <StyledPrimaryText as={"p"}>Tiana Philips</StyledPrimaryText>
              <StyledSecondaryText>Photographer</StyledSecondaryText>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper
          padding="25px"
          direction="column"
          align="flex-start"
          justify="flex-start"
        >
          <Stars starsCount={5} />
          <StyledPrimaryText style={{ marginBottom: "18px" }} as={"p"}>
            Great Quality!
          </StyledPrimaryText>
          <StyledSecondaryText style={{ marginBottom: "30px" }} TAlign="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi. Morbi donec amet....
          </StyledSecondaryText>
          <FlexWrapper gap="13px">
            <StyledAvatar src={RecPhotoRight} alt="Talan Westervelt" />
            <FlexWrapper direction="column" justify="center">
              <StyledPrimaryText as={"p"}>Talan Westervelt</StyledPrimaryText>
              <StyledSecondaryText>Business man</StyledSecondaryText>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </GridWrapper>
      <FlexWrapper
        color="#F0F0F6"
        gap="10px"
        justify="center"
        style={{ marginTop: "50px" }}
      >
        <OrangeCircle />
        <OrangeCircle />
        <OrangeCircle />
      </FlexWrapper>
    </FlexWrapper>
  );
};

const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;

const OrangeCircle = styled.span`
  width: 10px;
  height: 10px;
  background-color: #ffb400;
  border-radius: 50%;
`;
