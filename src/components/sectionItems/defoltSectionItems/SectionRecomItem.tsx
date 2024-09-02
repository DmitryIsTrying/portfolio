import React from "react";
import { SectionWrapperItem } from "../../SectionWrapperItem";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { StyledSecondaryText } from "../../SecondaryText.styled";
import styled from "styled-components";
import { Stars } from "../../stars/Stars";
import { FlexWrapper } from "../../FlexWrapper";
import "animate.css";
import { useTheme } from "../../../hooks/useTheme";

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
  const { isDark } = useTheme();
  let countDelay = 200;
  return (
    <>
      {recData.map((icon, i) => {
        const delay = `${countDelay * i}ms`;
        return (
          <SectionWrapperItem
            isDark={isDark}
            padding="25px"
            width={width}
            height={height}
            style={{ justifyContent: "space-between", animationDelay: delay }}
            className="animate__animated animate__fadeInUp"
            key={i}
          >
            <Stars starsCount={5} />
            <StyledPrimaryText
              isDark={isDark}
              TAlign="left"
              style={{ width: "100%", margin: "17px 0 18px 0" }}
              as={"p"}
            >
              {icon.title}
            </StyledPrimaryText>
            <StyledSecondaryText isDark={isDark} TAlign="left">
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
                <StyledPrimaryText
                  isDark={isDark}
                  style={{ marginBottom: "5px" }}
                  as={"p"}
                >
                  {icon.name}
                </StyledPrimaryText>
                <StyledSecondaryText isDark={isDark}>
                  {icon.job}
                </StyledSecondaryText>
              </FlexWrapper>
            </FlexWrapper>
          </SectionWrapperItem>
        );
      })}
    </>
  );
};

const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;
