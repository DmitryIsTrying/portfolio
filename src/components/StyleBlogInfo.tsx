import React from "react";
import styled from "styled-components";

export const StyleBlogInfo = styled.div<{ isDark: boolean }>`
  border-top: 1.5px solid
    ${(props) =>
      props.isDark
        ? props.theme.theme.dark.bgcColor
        : props.theme.theme.light.bgcColor};
  padding-top: 25px;
`;
