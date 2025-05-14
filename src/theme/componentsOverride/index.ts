import { Theme } from "@mui/material/styles";
import { Buttons } from "./button/button";
import OutlinedInput from "./inputField/OutlinedInput";
import InputLabel from "./inputField/inputLabel";
import Select from "./inputField/select";

const OverridesComponents = (theme: Theme) => ({
  ...Buttons(theme),
  ...OutlinedInput(theme),
  ...InputLabel(theme),
  ...Select(theme),
});

export default OverridesComponents;
