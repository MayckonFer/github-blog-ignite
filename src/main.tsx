import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import { GlobalStyles } from "./styles/global.ts";
import { defaultTheme } from "./styles/theme/default.ts";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
