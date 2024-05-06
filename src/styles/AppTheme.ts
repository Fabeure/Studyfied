import { createTheme } from "@mui/material";

export const AppTheme = createTheme({
  palette: {
    primary: {
      main: "#A693CD",
      dark: "#005874",
      light: "#1c819e",
    },
    secondary: {
      main: "#ffbe00",
      dark: "",
      light: "#e6e6d4",
    },
    info: {
      main: "#667788",
    },
    error: { main: "rgb(255, 152, 210)" },
    // warning: {PaletteColorOptions},
    // success: {PaletteColorOptions},
    // mode: PaletteMode,
    // tonalOffset: PaletteTonalOffset,
    // contrastThreshold: number,
    // common: Partial<CommonColors>,
    // grey: ColorPartial,
    // text: Partial<TypeText>,
    // divider: string,
    // action: Partial<TypeAction>,
    // background: Partial<TypeBackground>,
  },
});
