import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import { StyledTitleText } from "../../../components/TitleText.styled";
import { StyledPrimaryText } from "../../../components/PrimaryText.styled";
import { StyledHr } from "../../../components/StyledHr";

export const SectionWHistory = () => {
  return (
    <FlexWrapper color="#F0F0F6" direction="column" align="center">
      <StyledTitleText style={{ marginBottom: "25px" }}>
        Work History
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
      <FlexWrapper direction="column" padding="43px 29px 42px 37px">
        <FlexWrapper justify="space-between">
          <FlexWrapper fitWidth direction="column">
            <StyledPrimaryText style={{ marginBottom: "28px" }} as={"p"}>
              Lead Web Designer
            </StyledPrimaryText>
            <FlexWrapper gap="21px" align="flex-start">
              <StyledSecondaryText color="#2B2B2B">Student</StyledSecondaryText>
              <FlexWrapper fitHeight padding="4px 7px" color="#FFB400">
                <StyledSecondaryText
                  size="10px"
                  lHeight="10.09px"
                  color="#FFFFFF"
                >
                  Jan 1016 - Dec 2021
                </StyledSecondaryText>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper fitWidth direction="column">
            <StyledPrimaryText style={{ marginBottom: "26px" }} as={"p"}>
              Certificate of web training
            </StyledPrimaryText>
            <StyledSecondaryText MWE>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </StyledSecondaryText>
          </FlexWrapper>
        </FlexWrapper>
        <StyledHr color="#FAFAFA" margin="11px 0 28px" />
        <FlexWrapper justify="space-between">
          <FlexWrapper fitWidth direction="column">
            <StyledPrimaryText style={{ marginBottom: "28px" }} as={"p"}>
              Junior Web Designer
            </StyledPrimaryText>
            <FlexWrapper gap="21px" align="flex-start">
              <StyledSecondaryText color="#2B2B2B">Student</StyledSecondaryText>
              <FlexWrapper fitHeight padding="4px 7px" color="#FFB400">
                <StyledSecondaryText
                  size="10px"
                  lHeight="10.09px"
                  color="#FFFFFF"
                >
                  Jan 1016 - Dec 2021
                </StyledSecondaryText>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper fitWidth direction="column">
            <StyledPrimaryText style={{ marginBottom: "26px" }} as={"p"}>
              Certificate of web training
            </StyledPrimaryText>
            <StyledSecondaryText MWE>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </StyledSecondaryText>
          </FlexWrapper>
        </FlexWrapper>
        <StyledHr color="#FAFAFA" margin="30px 0 28px" />
        <FlexWrapper justify="space-between">
          <FlexWrapper fitWidth direction="column">
            <StyledPrimaryText style={{ marginBottom: "28px" }} as={"p"}>
              Senior Web Designer
            </StyledPrimaryText>
            <FlexWrapper gap="21px" align="flex-start">
              <StyledSecondaryText color="#2B2B2B">Student</StyledSecondaryText>
              <FlexWrapper fitHeight padding="4px 7px" color="#FFB400">
                <StyledSecondaryText
                  size="10px"
                  lHeight="10.09px"
                  color="#FFFFFF"
                >
                  Jan 1016 - Dec 2021
                </StyledSecondaryText>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper fitWidth direction="column">
            <StyledPrimaryText style={{ marginBottom: "26px" }} as={"p"}>
              Certificate of web training
            </StyledPrimaryText>
            <StyledSecondaryText MWE>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </StyledSecondaryText>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};
