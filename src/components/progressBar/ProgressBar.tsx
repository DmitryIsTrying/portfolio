import React from "react";
import styled from "styled-components";
import { useTheme } from "../../hooks/useTheme";

type ProgressBarPropsType = {
  nameSkill: string;
  lvlSkill: number;
};

export const ProgressBar = (props: ProgressBarPropsType) => {
  const { isDark } = useTheme();
  return (
    <StyledWrapperSkill>
      <StyledWrapperText htmlFor={props.nameSkill}>
        <StyledNameSkill isDark={isDark}>{props.nameSkill}</StyledNameSkill>
        <StyledNameSkill isDark={isDark} as={"p"}>
          {props.lvlSkill + "%"}
        </StyledNameSkill>
      </StyledWrapperText>
      <FullSkillBar>
        <MySkillBar id={props.nameSkill} value={props.lvlSkill} max="100" />
      </FullSkillBar>
    </StyledWrapperSkill>
  );
};

const StyledWrapperSkill = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 9px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledWrapperText = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const StyledNameSkill = styled.h4<{ isDark: boolean }>`
  color: ${(props) =>
    props.isDark
      ? props.theme.theme.dark.smallText
      : props.theme.theme.light.smallText};
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

const FullSkillBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  border: 0.5px solid #ffb400;
  border-radius: 30px;
  padding: 1px;
`;

const MySkillBar = styled.progress`
  width: 100%;
  height: 2px;
  appearance: none;

  &::-webkit-progress-bar {
    background-color: transparent;
    border-radius: 30px;
  }

  &::-webkit-progress-value {
    background-color: #ffb400;
    border-radius: 30px;
  }

  &::-moz-progress-bar {
    background-color: #ffb400;
    border-radius: 30px;
  }
`;
