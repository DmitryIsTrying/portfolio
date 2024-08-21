import React from "react";
import { FlexWrapper } from "../../FlexWrapper";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { ProgressBar } from "../../progressBar/ProgressBar";
import { StyleBlogInfo } from "../../StyleBlogInfo";

type Skill = {
  nameSkill: string;
  lvlSkill: number;
};

type SkillsInfoProps = {
  title: string;
  skills: Skill[];
};

export const SkillsInfo: React.FC<SkillsInfoProps> = ({ title, skills }) => {
  return (
    <StyleBlogInfo>
      <FlexWrapper direction="column" align="flex-start">
        <FlexWrapper margin="0 0 15px 0">
          <StyledPrimaryText>{title}</StyledPrimaryText>
        </FlexWrapper>
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
