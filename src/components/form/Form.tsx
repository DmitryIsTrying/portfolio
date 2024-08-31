import React, { ElementRef, useRef } from "react";
import { FlexWrapper } from "../FlexWrapper";
import { StyledPrimaryText } from "../PrimaryText.styled";
import styled from "styled-components";
import { StyledBtn } from "../StyledBtn.styled";
import { StyledTitleText } from "../TitleText.styled";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

export const Form = () => {
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
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
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
      <StyledTitleText style={{ marginBottom: "50px" }}>
        Leave us your info
      </StyledTitleText>
      {inView && (
        <StyledForm
          className="animate__animated animate__fadeInUp"
          style={{ animationDelay: "500ms" }}
          ref={form}
          onSubmit={sendEmail}
        >
          <label htmlFor="name">
            <StyledPrimaryText
              as={"p"}
              style={{ marginBottom: "8px" }}
              color="#767676"
            >
              Your Full Name (Required)
            </StyledPrimaryText>
          </label>
          <StyledInput
            style={{ marginBottom: "25px" }}
            id="name"
            type="text"
            name="user_name"
            required
            autoComplete="name"
          />
          <label htmlFor="email">
            <StyledPrimaryText
              as={"p"}
              style={{ marginBottom: "8px" }}
              color="#767676"
            >
              Your Email (Required)
            </StyledPrimaryText>
          </label>
          <StyledInput
            style={{ marginBottom: "25px" }}
            id="email"
            type="email"
            name="user_email"
            required
            autoComplete="email"
          />
          <label htmlFor="subj">
            <StyledPrimaryText
              as={"p"}
              style={{ marginBottom: "8px" }}
              color="#767676"
            >
              Subject
            </StyledPrimaryText>
          </label>
          <StyledInput
            style={{ marginBottom: "25px" }}
            id="subj"
            type="text"
            name="subject"
            required
          />
          <label htmlFor="msg">
            <StyledPrimaryText
              as={"p"}
              style={{ marginBottom: "8px" }}
              color="#767676"
            >
              Your Message
            </StyledPrimaryText>
            <StyledInput
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
          <StyledBtn type="submit" WFit padding="9px 25px">
            <StyledPrimaryText
              as={"p"}
              size="14px"
              Lheight="16.94px"
              weight="600"
            >
              SEND MESSAGE
            </StyledPrimaryText>
          </StyledBtn>
        </StyledForm>
      )}
    </MediaWrapper>
  );
};

const MediaWrapper = styled(FlexWrapper)`
  flex: 1 1;
  min-width: 345px;
`;

const StyledForm = styled.form`
  background-color: #ffffff;
  padding: 25px;
`;

const StyledInput = styled.input`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 22.25px;
  color: #2b2b2b;
  width: 100%;
  height: 50px;
  border: none;
  padding: 10px;
  background-color: #f0f0f6;
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
