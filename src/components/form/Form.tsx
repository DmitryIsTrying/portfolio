import React, { ElementRef, useRef } from "react";
import { FlexWrapper } from "../FlexWrapper";
import { StyledPrimaryText } from "../PrimaryText.styled";
import styled from "styled-components";
import { StyledBtn } from "../StyledBtn.styled";
import { StyledTitleText } from "../TitleText.styled";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { useTheme } from "../../hooks/useTheme";
import { layoutsTheme } from "../../styles/Theme.styled";

export const Form = () => {
  const { isDark } = useTheme();
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_05pcc4v", "template_70tabml", form.current, {
        publicKey: "HdIXjTURo0gj4bgtE",
      })
      .then(
        () => {
          console.log(true);
        },
        (error) => {
          console.log(false);
        }
      );
    e.target.reset();
  };
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <MediaWrapper ref={ref} fitWidth direction="column">
      <StyledTitleText isDark={isDark} style={{ marginBottom: "50px" }}>
        Leave us your info
      </StyledTitleText>
      {inView ? (
        <StyledForm
          isDark={isDark}
          className="animate__animated animate__fadeInUp"
          style={{ animationDelay: "500ms" }}
          ref={form}
          onSubmit={sendEmail}
        >
          <label htmlFor="name">
            <StyledPrimaryText
              isDark={isDark}
              as={"p"}
              style={{ marginBottom: "8px" }}
              color={
                isDark
                  ? layoutsTheme.theme.dark.titleText
                  : layoutsTheme.theme.light.titleText
              }
            >
              Your Full Name (Required)
            </StyledPrimaryText>
          </label>
          <StyledInput
            isDark={isDark}
            style={{ marginBottom: "25px" }}
            id="name"
            type="text"
            name="user_name"
            required
            autoComplete="name"
          />
          <label htmlFor="email">
            <StyledPrimaryText
              isDark={isDark}
              as={"p"}
              style={{ marginBottom: "8px" }}
              color={
                isDark
                  ? layoutsTheme.theme.dark.smallText
                  : layoutsTheme.theme.light.smallText
              }
            >
              Your Email (Required)
            </StyledPrimaryText>
          </label>
          <StyledInput
            isDark={isDark}
            style={{ marginBottom: "25px" }}
            id="email"
            type="email"
            name="user_email"
            required
            autoComplete="email"
          />
          <label htmlFor="subj">
            <StyledPrimaryText
              isDark={isDark}
              as={"p"}
              style={{ marginBottom: "8px" }}
              color={
                isDark
                  ? layoutsTheme.theme.dark.smallText
                  : layoutsTheme.theme.light.smallText
              }
            >
              Subject
            </StyledPrimaryText>
          </label>
          <StyledInput
            isDark={isDark}
            style={{ marginBottom: "25px" }}
            id="subj"
            type="text"
            name="subject"
            required
          />
          <label htmlFor="msg">
            <StyledPrimaryText
              isDark={isDark}
              as={"p"}
              style={{ marginBottom: "8px" }}
              color={
                isDark
                  ? layoutsTheme.theme.dark.smallText
                  : layoutsTheme.theme.light.smallText
              }
            >
              Your Message
            </StyledPrimaryText>
            <StyledInput
              isDark={isDark}
              style={{
                resize: "none",
                height: "210px",
                marginBottom: "25px",
              }}
              as={"textarea"}
              name="message"
              id="msg"
              required
            />
          </label>
          <StyledBtn isDark={isDark} type="submit" WFit padding="9px 25px">
            <StyledPrimaryText
              isDark={isDark}
              as={"p"}
              size="14px"
              Lheight="16.94px"
              weight="600"
            >
              SEND MESSAGE
            </StyledPrimaryText>
          </StyledBtn>
        </StyledForm>
      ) : null}
    </MediaWrapper>
  );
};

const MediaWrapper = styled(FlexWrapper)`
  flex: 1 1;
  min-width: 345px;
`;

const StyledForm = styled.form<{ isDark: boolean }>`
  background-color: ${(props) =>
    props.isDark
      ? props.theme.theme.dark.primaryColor
      : props.theme.theme.light.primaryColor};
  padding: 25px;
`;

export const StyledInput = styled.input<{ isDark: boolean }>`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 22.25px;
  color: ${(props) =>
    props.isDark
      ? props.theme.theme.dark.titleText
      : props.theme.theme.light.titleText};
  width: 100%;
  height: 50px;
  border: none;
  padding: 10px;
  background-color: ${(props) =>
    props.isDark
      ? props.theme.theme.dark.bgcColor
      : props.theme.theme.light.bgcColor};
  &:focus {
    outline: 2px solid #767676;
  }
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
