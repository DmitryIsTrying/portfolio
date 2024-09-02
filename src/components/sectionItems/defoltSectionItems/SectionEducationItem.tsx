import React from "react";
import { SectionWrapperItem } from "../../SectionWrapperItem";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { StyledSecondaryText } from "../../SecondaryText.styled";
import { FlexWrapper } from "../../FlexWrapper";
import styled from "styled-components";
import "animate.css";
import { layoutsTheme } from "../../../styles/Theme.styled";
import { useTheme } from "../../../hooks/useTheme";

type educationData = {
  nameUniversity: string;
  whois: string;
  date: string;
  nameCertificate: string;
  descriptionCertificate: string;
};

type SectionItemPropsType = {
  educationData: educationData[];
  width: number;
  height: number;
};

export const SectionEducationItem: React.FC<SectionItemPropsType> = ({
  educationData,
  width,
  height,
}) => {
  const { isDark } = useTheme();
  return (
    <StyledSectionWrapperItem
      isDark={isDark}
      padding="43px 29px 42px 37px"
      width={width}
      height={height}
      className="animate__animated animate__fadeInUp"
    >
      {educationData.map((icon, index) => (
        <StyledBorderLine
          key={index}
          borderBottom={
            index === educationData.length - 1 ? "none" : "1.5px solid #FAFAFA"
          }
          justify="space-between"
        >
          <StyledFlexWrapperLeftPart
            fitWidth
            align="flex-start"
            direction="column"
          >
            <StyledTitle isDark={isDark} as={"h3"}>
              {icon.nameUniversity}
            </StyledTitle>
            <FlexWrapper gap="21px" align="flex-start">
              <StyledSecondary
                isDark={isDark}
                color={
                  isDark
                    ? layoutsTheme.theme.dark.titleText
                    : layoutsTheme.theme.light.titleText
                }
              >
                {icon.whois}
              </StyledSecondary>
              <StyledSecondaryOrange
                isDark={isDark}
                size="10px"
                lHeight="10.09px"
                color={
                  isDark
                    ? layoutsTheme.theme.dark.primaryColor
                    : layoutsTheme.theme.light.primaryColor
                }
              >
                {icon.date}
              </StyledSecondaryOrange>
            </FlexWrapper>
          </StyledFlexWrapperLeftPart>
          <StyledFlexWrapperRightPart direction="column">
            <StyledPrimary isDark={isDark} as={"h3"}>
              {icon.nameCertificate}
            </StyledPrimary>
            <StyledSecondary isDark={isDark}>
              {icon.descriptionCertificate}
            </StyledSecondary>
          </StyledFlexWrapperRightPart>
        </StyledBorderLine>
      ))}
    </StyledSectionWrapperItem>
  );
};

const StyledBorderLine = styled(FlexWrapper)<{ borderBottom: string }>`
  flex-wrap: wrap;
  border-bottom: ${(props) => props.borderBottom};
`;

const StyledFlexWrapperLeftPart = styled(FlexWrapper)`
  min-width: 250px;
  width: fit-content;
  flex: 0 0 auto;
`;

const StyledFlexWrapperRightPart = styled(FlexWrapper)`
  flex: 1 1 0;
  min-width: 200px;
`;

const StyledSectionWrapperItem = styled(SectionWrapperItem)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  height: fit-content;
  gap: 28px;
  min-width: unset;
`;

const StyledSecondary = styled(StyledSecondaryText)`
  width: fit-content;
  margin-bottom: 11px;
`;

const StyledPrimary = styled(StyledPrimaryText)`
  margin-bottom: 28px;
  width: fit-content;
`;

const StyledSecondaryOrange = styled(StyledSecondaryText)`
  width: fit-content;
  background-color: #ffb400;
  padding: 7px 4px;
  margin-bottom: 28px;
`;

const StyledTitle = styled(StyledPrimaryText)`
  width: fit-content;
  margin-bottom: 28px;
`;
