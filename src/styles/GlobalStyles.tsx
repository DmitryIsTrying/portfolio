import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 1.5s ease;
}

html {
 /* scrollbar-width: none; */
 scroll-behavior: smooth;
}

body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  }
`;
