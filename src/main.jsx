import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes/defaultTheme.js";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index.js";
import { Description } from "./pages/Description/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Description/:number" element={<Description />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
