import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: color 1.5s ease, background-color 1.5s ease, fill 1.5s ease;
}

html {
 scroll-behavior: smooth;
}

body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    min-width: 375px;
  }

 @media (prefers-reduced-motion: reduce){
  *{
    animation: none !important;
    transition: none !important;
  }
 } 
`;
