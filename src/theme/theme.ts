import { createTheme, Theme } from "@mui/material/styles";
import palette from "./palette";
import Typography from "./typography";
import "./theme";
import OverridesComponents from "./componentsOverride";

let theme: Theme = createTheme({
  palette,
});

theme = createTheme(theme, {
  typography: Typography(theme),
  components: OverridesComponents(theme),
});

export default theme;
