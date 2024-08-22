import React from "react";
import { SectionWrapperItem } from "../SectionWrapperItem";
import { StyledPrimaryText } from "../PrimaryText.styled";
import { StyledSecondaryText } from "../SecondaryText.styled";
import styled from "styled-components";
import { Stars } from "../stars/Stars";
import { FlexWrapper } from "../FlexWrapper";

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

export const SectionRecomItem: React.FC<SectionRecomItemPropsType> = ({
  recData,
  width,
  height,
}) => {
  return (
    <>
      {recData.map((icon, i) => (
        <SectionWrapperItem
          padding="25px"
          width={width}
          height={height}
          key={i}
          style={{ justifyContent: "space-between" }}
        >
          <Stars starsCount={5} />
          <StyledPrimaryText TAlign="left" style={{ width: "100%" }} as={"p"}>
            {icon.title}
          </StyledPrimaryText>
          <StyledSecondaryText TAlign="left">
            {icon.comment}
          </StyledSecondaryText>
          <FlexWrapper gap="13px">
            <StyledAvatar src={icon.pathPhoto} alt={icon.altPhoto} />
            <FlexWrapper direction="column" justify="center">
              <StyledPrimaryText style={{ marginBottom: "5px" }} as={"p"}>
                {icon.name}
              </StyledPrimaryText>
              <StyledSecondaryText>{icon.job}</StyledSecondaryText>
            </FlexWrapper>
          </FlexWrapper>
        </SectionWrapperItem>
      ))}
    </>
  );
};

const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;
