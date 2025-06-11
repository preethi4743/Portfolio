import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CustomThemeProvider } from "./context/ThemeProvider";

// Smooth scrolling polyfill for Safari
if (!("scrollBehavior" in document.documentElement.style)) {
  import("smoothscroll-polyfill").then(({ polyfill }) => polyfill());
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);
