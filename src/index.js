import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ScopedCssBaseline,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

const themeConfig = createTheme({
  iconSize: 27,
  palette: { primary: { main: "#1085F1" } },
});

const theme = responsiveFontSizes(themeConfig);

root.render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ScopedCssBaseline>
  </React.StrictMode>
);
