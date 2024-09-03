import React from "react";
import { SectionWrapperItem } from "../../SectionWrapperItem";
import { FlexWrapper } from "../../FlexWrapper";
import { Icon } from "../../icon/Icon";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { StyledSecondaryText } from "../../SecondaryText.styled";
import styled from "styled-components";
import { useTheme } from "../../../hooks/useTheme";
import { layoutsTheme } from "../../../styles/Theme.styled";

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
  let countDelay = 200;
  const { isDark } = useTheme();
  return (
    <>
      {items.map((e, i) => {
        const delay = `${countDelay * i}ms`;
        return (
          <StyledSectionWrapperItem
            isDark={isDark}
            style={{ animationDelay: delay }}
            className="animate__animated animate__fadeInUp"
            width={width}
            height={height}
            key={i}
          >
            <StyledFlexWrapper
              style={{
                borderRadius: "50%",
                marginBottom: "30px",
              }}
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
            <FlexWrapper
              style={{ marginBottom: "14px" }}
              justify="space-between"
            >
              <StyledPrimaryText
                isDark={isDark}
                color={
                  isDark
                    ? layoutsTheme.theme.dark.smallText
                    : layoutsTheme.theme.light.smallText
                }
                as={"p"}
              >
                {e.first}
              </StyledPrimaryText>
              <StyledSecondaryText
                isDark={isDark}
                as={"h3"}
                color={
                  isDark
                    ? layoutsTheme.theme.dark.smallText
                    : layoutsTheme.theme.light.smallText
                }
              >
                {e.dataFirst}
              </StyledSecondaryText>
            </FlexWrapper>
            <FlexWrapper
              style={{ marginBottom: "14px" }}
              justify="space-between"
            >
              <StyledPrimaryText
                isDark={isDark}
                color={
                  isDark
                    ? layoutsTheme.theme.dark.smallText
                    : layoutsTheme.theme.light.smallText
                }
                as={"p"}
              >
                {e.second}
              </StyledPrimaryText>
              <StyledSecondaryText
                isDark={isDark}
                as={"h3"}
                color={
                  isDark
                    ? layoutsTheme.theme.dark.smallText
                    : layoutsTheme.theme.light.smallText
                }
              >
                {e.dataSecond}
              </StyledSecondaryText>
            </FlexWrapper>
            <FlexWrapper justify="space-between">
              <StyledPrimaryText
                isDark={isDark}
                color={
                  isDark
                    ? layoutsTheme.theme.dark.smallText
                    : layoutsTheme.theme.light.smallText
                }
                as={"p"}
              >
                {e.third}
              </StyledPrimaryText>
              <StyledSecondaryText
                isDark={isDark}
                as={"h3"}
                color={
                  isDark
                    ? layoutsTheme.theme.dark.smallText
                    : layoutsTheme.theme.light.smallText
                }
              >
                {e.dataThird}
              </StyledSecondaryText>
            </FlexWrapper>
          </StyledSectionWrapperItem>
        );
      })}
    </>
  );
};

const StyledSectionWrapperItem = styled(SectionWrapperItem)`
  padding: 25px 25px 15px 25px;
  justify-content: flex-start;
  width: 100%;
  max-width: unset;
`;

const StyledFlexWrapper = styled(FlexWrapper)`
  background-color: #ffb400;
  border-radius: 50%;
  margin-bottom: 30px;
  width: fit-content;
  padding: 12.5px;
`;
