import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { ThemeProvider } from "@mui/material";
import { AppTheme } from "./styles/AppTheme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={AppTheme}>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
