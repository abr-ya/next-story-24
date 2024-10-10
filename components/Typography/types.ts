import { TypographyProps as MuiTypographyProps } from "@mui/material/Typography/Typography";
import { PcapTheme } from "../../../theme";
import { PcapTypographyVariants } from "../../../theme/types";

export type RequiredProps =
  | "mode"
  | "primary"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "grey"
  | "text"
  | "background";

type CommonColorMap = keyof { primary: string; secondary: string };

type PcapColors =
  | `text.${keyof PcapTheme["pcapPalette"]["text"]}`
  | `link.${keyof PcapTheme["pcapPalette"]["link"]}`
  | `${"error" | "success" | "info" | "warning"}.${CommonColorMap}`;

export type PcapTypographyProps = MuiTypographyProps & {
  variant?: PcapTypographyVariants;
  color?: PcapColors;
};

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body1: true;
    body2: true;
    body1semibold: true;
    body2semibold: true;
    h1: true;
    h2: true;
    h3: true;
    h1semibold: true;
    h2semibold: true;
    h3semibold: true;
    subtitle1: true;
    subtitle2: true;
    subtitle3: true;
    subtitle1semibold: true;
    subtitle2semibold: true;
    subtitle3semibold: true;
    buttonM: true;
    buttonS: true;
    tableCell: true;
  }
}
