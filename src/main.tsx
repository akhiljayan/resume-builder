import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ResumePage from "@page/resumePage";
import Generator from "@page/generatorPage";
import "./index.css";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const GeneratorApp = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Generator />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeneratorApp />} />
        <Route path="/generate" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
