import React from "react";
import { SectionWrapperItem } from "../SectionWrapperItem";
import { StyledPrimaryText } from "../PrimaryText.styled";
import { StyledSecondaryText } from "../SecondaryText.styled";
import { Icon } from "../icon/Icon";
import styled from "styled-components";

type IconData = {
  path: string;
  width: string;
  height: string;
  vBox: string;
  title: string;
  description: string;
};

type SectionItemPropsType = {
  iconData: IconData[];
  width: number;
  height: number;
};

export const SectionServiceItem: React.FC<SectionItemPropsType> = ({
  iconData,
  width,
  height,
}) => {
  return (
    <>
      {iconData.map((icon, i) => (
        <SectionWrapperItem
          padding="25px 32px 35px 32px"
          width={width}
          height={height}
          key={i}
        >
          <Icon
            iconSrc={icon.path}
            width={icon.width}
            height={icon.height}
            viewBox={icon.vBox}
          />
          <PaddingText TAlign="center">{icon.title}</PaddingText>
          <StyledSecondaryText TAlign="center">
            {icon.description}
          </StyledSecondaryText>
        </SectionWrapperItem>
      ))}
    </>
  );
};

const PaddingText = styled(StyledPrimaryText)`
  margin: 26px 0 15px;
`;
