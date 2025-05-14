import { BORDER_RADIUS, FONT_FAMILY } from "@/constants";
import { Theme } from "@mui/material";

const OutlinedInput = (theme: Theme) => ({
  MuiOutlinedInput: {
    styleOverrides: {
      // Name of the slot
      root: {
        // Some CSS

        "label + &": {
          marginTop: theme.spacing(4.5),
        },
        fontFamily: FONT_FAMILY,
        border: "none",
        borderRadius: BORDER_RADIUS,
        position: "relative",
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.neutral.light
            : "#2b2b2b",
        width: "100%",
        color: theme.palette.neutral.main,
        padding: "0 10px",
        ".Mui-focused	": {
          color: "black",
        },
      },
      notchedOutline: {
        border: "none",
      },
      focus: {
        color: "black",
      },
      input: {
        padding: "0 10px",
        minHeight: "44px",
        fontSize: "1.1rem",
        fontFamily: FONT_FAMILY,
        fontWeight: 400,
      },
    },
  },
});

export default OutlinedInput;
