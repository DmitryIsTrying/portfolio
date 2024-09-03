import React from "react";
import styled, { css } from "styled-components";
import { MainInfo } from "../../components/info/mainInfo/MainInfo";
import { SecondaryInfo } from "../../components/info/secondaryInfo/SecondaryInfo";
import { SkillsInfo } from "../../components/info/skillsInfo/SkillsInfo";
import { Extra } from "../../components/info/extra/Extra";
import { LoadBtn } from "../../components/info/loadBtn/LoadBtn";
import "animate.css";
import { useMenu } from "../../hooks/useMenu";
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

export default function MobileInfoBar() {
  const { menuIsOpen, toggleMenu } = useMenu();
  const { isDark } = useTheme();

  return (
    <EffectWrapper id="blurEffect" onClick={toggleMenu} isOpen={menuIsOpen}>
      <StyledAside
        isDark={isDark}
        className="animate__animated animate__backInLeft"
      >
        <BurgerMenu id="closeInfoBtn">
          <span></span>
          <span></span>
        </BurgerMenu>
        <MainInfo />
        <SecondaryInfo />
        <SkillsInfo title="Languages" skills={Languages} />
        <SkillsInfo title="Skills" skills={HardSkills} />
        <Extra />
        <LoadBtn />
      </StyledAside>
    </EffectWrapper>
  );
}

const BurgerMenu = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  border: none;
  background-color: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 35px;
  right: 30px;
  transition: transform 0.5s ease;
  span {
    position: absolute;
    display: block;
    width: 30px;
    height: 2px;
    background-color: #ffb400;
    &:nth-child(1) {
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.2);
    }
  }
  @media (hover: none) {
    &:active {
      transform: scale(1.2);
    }
  }
`;

const EffectWrapper = styled.div<{ isOpen: boolean }>`
  display: none;
  justify-content: flex-start;
  position: fixed;
  z-index: 998;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  background-color: rgba(200, 200, 200, 0.2);
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
    `}
  @media screen and (min-width: 993px) {
    display: none;
  }
`;

const StyledAside = styled.aside<{ isDark: boolean }>`
  padding: 50px 40px 25px;
  background-color: ${(props) =>
    props.isDark
      ? props.theme.theme.dark.primaryColor
      : props.theme.theme.light.primaryColor};
  position: fixed;
  overflow-y: auto;
  height: 100%;
  min-width: 375px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  z-index: 999;

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
