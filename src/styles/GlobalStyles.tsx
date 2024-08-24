import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
 scrollbar-width: none;
 scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: #F0F0F6;
}
`;
