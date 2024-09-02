import React from "react";
import styled from "styled-components";
import { MainInfo } from "../../components/info/mainInfo/MainInfo";
import { SecondaryInfo } from "../../components/info/secondaryInfo/SecondaryInfo";
import { SkillsInfo } from "../../components/info/skillsInfo/SkillsInfo";
import { Extra } from "../../components/info/extra/Extra";
import { LoadBtn } from "../../components/info/loadBtn/LoadBtn";
import { layoutsTheme } from "../../styles/Theme.styled";
import { useTheme } from "../../hooks/useTheme";

const Languages = [
  { nameSkill: "Bangla", lvlSkill: 100 },
  { nameSkill: "English", lvlSkill: 80 },
  { nameSkill: "Spanish", lvlSkill: 60 },
];

const HardSkills = [
  { nameSkill: "Html", lvlSkill: 90 },
  { nameSkill: "CSS", lvlSkill: 85 },
  { nameSkill: "Js", lvlSkill: 80 },
  { nameSkill: "PHP", lvlSkill: 75 },
  { nameSkill: "WordPress", lvlSkill: 85 },
];

export default function InfoBar() {
  const { isDark } = useTheme();
  return (
    <StyledAside isDark={isDark}>
      <MainInfo />
      <SecondaryInfo />
      <SkillsInfo title="Languages" skills={Languages} />
      <SkillsInfo title="Skills" skills={HardSkills} />
      <Extra />
      <LoadBtn />
    </StyledAside>
  );
}

const StyledAside = styled.aside<{ isDark: boolean }>`
  padding: 50px 40px 25px;
  background-color: ${(props) =>
    props.isDark
      ? props.theme.theme.dark.primaryColor
      : props.theme.theme.light.primaryColor};
  position: fixed;
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c0bfbf;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #888;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 6px;
  }
`;
