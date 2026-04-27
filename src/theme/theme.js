import { createTheme } from "@mui/material/styles";
import "../App.css";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#0f1724" },
            secondary: { main: "#0b63b8" },
            background: {
              default: "#f6f7f9",
              paper: "#ffffff",
              shadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            },
            text: {
              primary: "#0f1724",
              secondary: "#fff",
            },
            button: {
              primary: "#0b63b8",
            },
          }
        : {
            primary: { main: "#e6eef8" },

            background: {
              default: "#0b1220",
              paper: "#131b2d",
            },
            text: {
              primary: "#e6eef8",
              secondary: "#0f172a",
            },
            button: {
              primary: "#4ea1ff",
            },
          }),
    },

    typography: {
      fontFamily: "cairo",
      button: {
        textTransform: "none",
      },
    },
  });
