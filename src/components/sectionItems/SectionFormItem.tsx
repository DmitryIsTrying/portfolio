import React from "react";
import { SectionWrapperItem } from "../SectionWrapperItem";
import { FlexWrapper } from "../FlexWrapper";
import { Icon } from "../icon/Icon";
import { StyledPrimaryText } from "../PrimaryText.styled";
import { StyledSecondaryText } from "../SecondaryText.styled";
import styled from "styled-components";

type ContactsData = {
  first: string;
  dataFirst: string;
  second: string;
  dataSecond: string;
  third: string;
  dataThird: string;
};

type SectionFormItemPropsType = {
  items: ContactsData[];
  width: number;
  height: number;
};

export const SectionFormItem: React.FC<SectionFormItemPropsType> = ({
  items,
  width,
  height,
}) => {
  return (
    <>
      {items.map((e, i) => (
        <StyledSectionWrapperItem width={width} height={height} key={i}>
          <StyledFlexWrapper
            style={{ borderRadius: "50%", marginBottom: "30px" }}
            color="#FFB400"
            align="center"
            justify="center"
          >
            <Icon
              width="16"
              height="16"
              viewBox="0 0 16 16"
              iconSrc="FormMapSvg"
            />
          </StyledFlexWrapper>
          <FlexWrapper style={{ marginBottom: "14px" }} justify="space-between">
            <StyledPrimaryText color="#767676" as={"p"}>
              {e.first}
            </StyledPrimaryText>
            <StyledSecondaryText color="#767676">
              {e.dataFirst}
            </StyledSecondaryText>
          </FlexWrapper>
          <FlexWrapper style={{ marginBottom: "14px" }} justify="space-between">
            <StyledPrimaryText color="#767676" as={"p"}>
              {e.second}
            </StyledPrimaryText>
            <StyledSecondaryText color="#767676">
              {e.dataSecond}
            </StyledSecondaryText>
          </FlexWrapper>
          <FlexWrapper justify="space-between">
            <StyledPrimaryText color="#767676" as={"p"}>
              {e.third}
            </StyledPrimaryText>
            <StyledSecondaryText color="#767676">
              {e.dataThird}
            </StyledSecondaryText>
          </FlexWrapper>
        </StyledSectionWrapperItem>
      ))}
    </>
  );
};

const StyledSectionWrapperItem = styled(SectionWrapperItem)`
  padding: 25px 25px 15px 25px;
  justify-content: center;
  width: 100%;
  max-width: 370px;
  @media screen and (min-width: 1439px) {
    width: 370px;
  }
`;

const StyledFlexWrapper = styled(FlexWrapper)`
  background-color: #ffb400;
  border-radius: 50%;
  margin-bottom: 30px;
  width: fit-content;
  padding: 12.5px;
`;
