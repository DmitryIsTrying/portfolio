import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledTitleText } from "../../../components/TitleText.styled";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import { GridWrapper } from "../../../components/GridWrapper";
import { StyledPrimaryText } from "../../../components/PrimaryText.styled";
import { Advantages } from "../../../components/advantages/Advantages";
import { StyledPricePartBtn } from "../../../components/StyledPricePartBtn";

export const SectionPrice = () => {
  return (
    <FlexWrapper color="#F0F0F6" direction="column" align="center">
      <StyledTitleText style={{ marginBottom: "25px" }}>
        Price plans
      </StyledTitleText>
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
      <GridWrapper columns="3, 310px" rows="1, 609px">
        <FlexWrapper direction="column" align="center" justify="flex-end">
          <StyledPrimaryText
            weight="600"
            size="24px"
            style={{ marginBottom: "19px" }}
            Lheight="29.66px"
          >
            Silver
          </StyledPrimaryText>
          <FlexWrapper
            style={{ marginBottom: "8px" }}
            fitHeight
            align="baseline"
            justify="center"
          >
            <StyledTitleText as={"p"}>$0.00</StyledTitleText>
            <StyledSecondaryText color="#2B2B2B">/hour</StyledSecondaryText>
          </FlexWrapper>
          <FlexWrapper
            style={{ marginBottom: "21px" }}
            fitHeight
            padding="0 33px"
            direction="column"
          >
            <StyledSecondaryText
              style={{ marginBottom: "21px" }}
              TAlign="center"
            >
              For most businesses that want to optimize web queries
            </StyledSecondaryText>
            <FlexWrapper direction="column" gap="16px">
              <Advantages>UI Design</Advantages>
              <Advantages>web development</Advantages>
              <Advantages isDisabled>logo design</Advantages>
              <Advantages isDisabled>seo optimization</Advantages>
              <Advantages isDisabled>wordPress integration</Advantages>
              <Advantages isDisabled>5 Websites</Advantages>
              <Advantages isDisabled>unlimited user</Advantages>
              <Advantages isDisabled>20 gB bandwith</Advantages>
            </FlexWrapper>
          </FlexWrapper>
          <StyledPricePartBtn style={{ marginBottom: "25px" }}>
            <StyledSecondaryText
              color="#2B2B2B"
              size="14px"
              lHeight="16.94px"
              fWeight="600"
            >
              ORDER NOW
            </StyledSecondaryText>
          </StyledPricePartBtn>
        </FlexWrapper>
        <FlexWrapper
          direction="column"
          align="center"
          justify="flex-end"
        ></FlexWrapper>
        <FlexWrapper
          direction="column"
          align="center"
          justify="flex-end"
        ></FlexWrapper>
      </GridWrapper>
    </FlexWrapper>
  );
};
