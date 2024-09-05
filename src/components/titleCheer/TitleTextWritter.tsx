import React from "react";
import styled from "styled-components";
import { StyledSecondaryText } from "../SecondaryText.styled";
import { useTheme } from "../../hooks/useTheme";
import Typewriter from "typewriter-effect";

export const TitleTextWritter = () => {
  const { isDark } = useTheme();
  return (
    <StyledTitle as={"h2"} isDark={isDark} size="16px">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
        feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
        lectus.
      </p>
      <Typewriter
        options={{
          delay: 50,
          deleteSpeed: 30,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "Привет, я фронтенд разработчик!<br>Моя специализация:<br><strong>Создание красивых веб-интерфейсов</strong>"
            )
            .pauseFor(2000)
            .deleteChars(33)
            .typeString("<strong>Оптимизация готовых приложений</strong>")
            .pauseFor(2000)
            .deleteChars(49)
            .pauseFor(500)
            .typeString("<strong>Давайте работать вместе ;)</strong>")
            .start();
        }}
      />
    </StyledTitle>
  );
};

const StyledTitle = styled(StyledSecondaryText)`
  max-width: 424px;
  margin: 18px 0 25px 0;
  p {
    display: none;
  }
`;
