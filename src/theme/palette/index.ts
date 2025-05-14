import * as React from "react";
import { PaletteOptions } from "@mui/material/styles";

const palette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#F15B25",
    dark: "#cccccc",
  },
  secondary: {
    main: "#FEDC00",
  },
  info: {
    main: "#F2F2F2",
    light: "#414143",
    dark: "#21201F",
    contrastText: "#414143",
  },
  neutral: {
    lighter: "#FFFFFF",
    light: "#F8F8F8",
    main: "#21201F",
    dark: "#21201F",
    darker: "#8C8C8C",
  },
};

export default palette;

declare module "@mui/material/styles" {
  interface CustomColorTypes {
    lighter?: React.CSSProperties["color"];
    light?: React.CSSProperties["color"];
    main?: React.CSSProperties["color"];
    dark?: React.CSSProperties["color"];
    darker?: React.CSSProperties["color"];
  }
  interface Palette {
    neutral: CustomColorTypes;
  }
  interface PaletteOptions {
    neutral?: CustomColorTypes;
  }
}
