// mui imports
import { FONT_FAMILY } from "@/constants";
import type { Theme, TypographyVariantsOptions } from "@mui/material";
import { Headings } from "./variants/headings";
import { Others } from "./variants/other";
import { ResponsiveFontSizes } from "../themeUtils";

// local custom imports

const Typography = (theme: Theme): TypographyVariantsOptions => {
  return {
    allVariants: {
      fontFamily: FONT_FAMILY,
    },
    fontWeightMedium: 600,
    ...Headings(ResponsiveFontSizes),
    ...Others(ResponsiveFontSizes),
  };
};

export default Typography;

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1Reg: React.CSSProperties;
    h2Reg: React.CSSProperties;
    h3Reg: React.CSSProperties;
    h4Reg: React.CSSProperties;
    h5Reg: React.CSSProperties;
    bodyBigReg: React.CSSProperties;
    body1Reg: React.CSSProperties;
    subtitle2Reg: React.CSSProperties;
    buttonReg: React.CSSProperties;
    body2Reg: React.CSSProperties;
    captionReg: React.CSSProperties;
    overlineReg: React.CSSProperties;

    h1Semi: React.CSSProperties;
    h2Semi: React.CSSProperties;
    h3Semi: React.CSSProperties;
    h4Semi: React.CSSProperties;
    h5Semi: React.CSSProperties;
    bodyBigSemi: React.CSSProperties;
    body1Semi: React.CSSProperties;
    subtitle2Semi: React.CSSProperties;
    buttonSemi: React.CSSProperties;
    body2Semi: React.CSSProperties;
    captionSemi: React.CSSProperties;
    overlineSemi: React.CSSProperties;

    h1Bold: React.CSSProperties;
    h2Bold: React.CSSProperties;
    h3Bold: React.CSSProperties;
    h4Bold: React.CSSProperties;
    h5Bold: React.CSSProperties;
    bodyBigBold: React.CSSProperties;
    body1Bold: React.CSSProperties;
    subtitle2Bold: React.CSSProperties;
    buttonBold: React.CSSProperties;
    body2Bold: React.CSSProperties;
    captionBold: React.CSSProperties;
    overlineBold: React.CSSProperties;

    h4Normal: React.CSSProperties;
    subtitle2Normal: React.CSSProperties;
    h5Semi2: React.CSSProperties;
    smallText: React.CSSProperties;
    h2Bold2: React.CSSProperties;
    overlineBold2: React.CSSProperties;
    body1Bold2: React.CSSProperties;
    overlineBold3: React.CSSProperties;
    h4Reg2: React.CSSProperties;
    h2Bold3: React.CSSProperties;
    body1Bold3: React.CSSProperties;
    smallText2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1Reg?: React.CSSProperties;
    h2Reg?: React.CSSProperties;
    h3Reg?: React.CSSProperties;
    h4Reg?: React.CSSProperties;
    h5Reg?: React.CSSProperties;
    bodyBigReg?: React.CSSProperties;
    body1Reg?: React.CSSProperties;
    subtitle2Reg?: React.CSSProperties;
    buttonReg?: React.CSSProperties;
    body2Reg?: React.CSSProperties;
    captionReg?: React.CSSProperties;
    overlineReg?: React.CSSProperties;

    h1Semi?: React.CSSProperties;
    h2Semi?: React.CSSProperties;
    h3Semi?: React.CSSProperties;
    h4Semi?: React.CSSProperties;
    h5Semi?: React.CSSProperties;
    bodyBigSemi?: React.CSSProperties;
    body1Semi?: React.CSSProperties;
    subtitle2Semi?: React.CSSProperties;
    buttonSemi?: React.CSSProperties;
    body2Semi?: React.CSSProperties;
    captionSemi?: React.CSSProperties;
    overlineSemi?: React.CSSProperties;

    h1Bold?: React.CSSProperties;
    h2Bold?: React.CSSProperties;
    h3Bold?: React.CSSProperties;
    h4Bold?: React.CSSProperties;
    h5Bold?: React.CSSProperties;
    bodyBigBold?: React.CSSProperties;
    body1Bold?: React.CSSProperties;
    subtitle2Bold?: React.CSSProperties;
    buttonBold?: React.CSSProperties;
    body2Bold?: React.CSSProperties;
    captionBold?: React.CSSProperties;
    overlineBold?: React.CSSProperties;

    h4Normal?: React.CSSProperties;
    subtitle2Normal?: React.CSSProperties;
    h5Semi2?: React.CSSProperties;
    smallText: React.CSSProperties;
    h2Bold2: React.CSSProperties;
    overlineBold2: React.CSSProperties;
    body1Bold2: React.CSSProperties;
    overlineBold3: React.CSSProperties;
    h4Reg2: React.CSSProperties;
    h2Bold3: React.CSSProperties;
    body1Bold3: React.CSSProperties;
    smallText2: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1Reg?: true;
    h2Reg?: true;
    h3Reg?: true;
    h4Reg?: true;
    h5Reg?: true;
    bodyBigReg?: true;
    body1Reg?: true;
    subtitle2Reg?: true;
    buttonReg?: true;
    body2Reg?: true;
    captionReg?: true;
    overlineReg?: true;

    h1Semi?: true;
    h2Semi?: true;
    h3Semi?: true;
    h4Semi?: true;
    h5Semi?: true;
    bodyBigSemi?: true;
    body1Semi?: true;
    subtitle2Semi?: true;
    buttonSemi?: true;
    body2Semi?: true;
    captionSemi?: true;
    overlineSemi?: true;

    h1Bold?: true;
    h2Bold?: true;
    h3Bold?: true;
    h4Bold?: true;
    h5Bold?: true;
    bodyBigBold?: true;
    body1Bold?: true;
    subtitle2Bold?: true;
    buttonBold?: true;
    body2Bold?: true;
    captionBold?: true;
    overlineBold?: true;

    h4Normal?: true;
    subtitle2Normal?: true;
    h5Semi2?: true;
    smallText?: true;
    h2Bold2?: true;
    overlineBold2?: true;
    body1Bold2?: true;
    overlineBold3?: true;
    h4Reg2?: true;
    h2Bold3?: true;
    body1Bold3?: true;
    smallText2?: true;
  }
}
