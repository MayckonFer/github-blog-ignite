import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router.tsx";

import { GlobalStyles } from "./styles/global.ts";
import { defaultTheme } from "./styles/theme/default.ts";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
