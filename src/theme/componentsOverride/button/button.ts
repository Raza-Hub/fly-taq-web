import { BORDER_RADIUS, FONT_FAMILY } from "@/constants";
import {
  ResponsiveFontSizes,
  responsiveButtonPadding,
} from "@/theme/themeUtils";
import { Theme } from "@mui/material";

export const Buttons = (theme: Theme) => ({
  MuiButton: {
    variants: [
      {
        props: { variant: "primary" },
        style: {
          border: "none",
          background: theme.palette.secondary.main,
          color: theme.palette.neutral.main,
          borderRadius: BORDER_RADIUS,
          fontFamily: FONT_FAMILY,
          fontWeight: "600",
          ...ResponsiveFontSizes({
            xs: 12,
            sm: 12,
            md: 13,
            lg: 14,
            xl: 14,
          }),
          ...responsiveButtonPadding({
            xs: "9px 19px",
            sm: "7px 15px",
            md: "8px 25px",
            lg: "10px 28px",
          }),
          "&:hover": {
            background: theme.palette.neutral.darker,
          },
        },
      },
      {
        props: { variant: "secondary" },
        style: {
          border: "none",
          background: theme.palette.neutral.light,
          color: theme.palette.neutral.main,
          borderRadius: "10px",
          fontFamily: FONT_FAMILY,
          fontWeight: "600",
          ...ResponsiveFontSizes({
            xs: 12,
            sm: 12,
            md: 13,
            lg: 14,
            xl: 14,
          }),
          ...responsiveButtonPadding({
            xs: "9px 19px",
            sm: "10px 20px",
            md: "10px 20px",
            lg: "13px 26px",
          }),
          "&:hover": {
            background: theme.palette.primary.main,
            color: theme.palette.neutral.lighter,
          },
        },
      },
      {
        props: { variant: "outline" },
        style: {
          border: `1.5px solid  ${theme.palette.neutral.main}`,
          background: "tranparent",
          color: theme.palette.neutral.main,
          borderRadius: BORDER_RADIUS,
          fontFamily: FONT_FAMILY,
          fontWeight: "600",
          ...ResponsiveFontSizes({
            xs: 12,
            sm: 12,
            md: 13,
            lg: 14,
            xl: 14,
          }),
          ...responsiveButtonPadding({
            xs: "9px 19px",
            sm: "7px 15px",
            md: "8px 25px",
            lg: "10px 28px",
          }),
          "&:hover": {
            background: theme.palette.primary.main,
            color: theme.palette.neutral.lighter,
          },
        },
      },
      {
        props: { variant: "gradient" },
        style: {
          background: "linear-gradient(180deg, #FDF058 6.03%, #FFCB05 92.62%)",
          color: theme.palette.neutral.main,
          borderRadius: "4px",
          cusror: "pointer",
          fontFamily: FONT_FAMILY,
          fontWeight: "600",
          ...ResponsiveFontSizes({
            xs: 12,
            sm: 12,
            md: 13,
            lg: 14,
            xl: 14,
          }),
          ...responsiveButtonPadding({
            xs: "9px 19px",
            sm: "10px 20px",
            md: "10px 20px",
            lg: "12px 25px",
          }),
          "&:hover": {
            background: theme.palette.neutral.dark,
          },
        },
      },
    ],
  },
});

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    outline: true;
    secondary: true;
    gradient: true;
  }
}
