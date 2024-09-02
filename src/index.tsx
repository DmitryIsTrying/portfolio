import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { layoutsTheme } from "./styles/Theme.styled";
import { MenuProvider } from "./hooks/useMenu";
import { ChangerThemeProvider } from "./hooks/useTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={layoutsTheme}>
    <MenuProvider>
      <ChangerThemeProvider>
        <App />
        <GlobalStyles />
      </ChangerThemeProvider>
    </MenuProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
