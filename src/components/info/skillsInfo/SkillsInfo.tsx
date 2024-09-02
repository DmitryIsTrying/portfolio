import React from "react";
import { FlexWrapper } from "../../FlexWrapper";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { ProgressBar } from "../../progressBar/ProgressBar";
import { StyleBlogInfo } from "../../StyleBlogInfo";
import styled from "styled-components";
import { useTheme } from "../../../hooks/useTheme";

type Skill = {
  nameSkill: string;
  lvlSkill: number;
};

type SkillsInfoProps = {
  title: string;
  skills: Skill[];
};

export const SkillsInfo: React.FC<SkillsInfoProps> = ({ title, skills }) => {
  const { isDark } = useTheme();
  return (
    <StyleBlogInfo isDark={isDark}>
      <FlexWrapper direction="column" align="flex-start">
        <MargStyledPrimaryText isDark={isDark}>{title}</MargStyledPrimaryText>
        {skills.map((skill, index) => (
          <ProgressBar
            key={index}
            nameSkill={skill.nameSkill}
            lvlSkill={skill.lvlSkill}
          />
        ))}
      </FlexWrapper>
    </StyleBlogInfo>
  );
};

const MargStyledPrimaryText = styled(StyledPrimaryText)`
  margin: 0 0 15px 0;
`;
