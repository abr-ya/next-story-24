import { CSSProperties } from "@mui/styles";
import { PaletteOptions, Palette } from "@mui/material/styles";
import { Theme, DeprecatedThemeOptions } from "@mui/material";

import { Typography, TypographyOptions, Variant } from "@mui/material/styles/createTypography";
import {
  ComplimentaryColorOptions,
  TextColorType,
  CommonColorMap,
  LinkColor,
  PartialColor,
  PrimaryColor,
  GreyColor,
  ShadowColor,
  StatusColorMap,
} from "./palette/types";

export type Fonts = {
  family: {
    regular: { [K in keyof CSSProperties]: CSSProperties[K] };
    bold: { [K in keyof CSSProperties]: CSSProperties[K] };
    caps: { [K in keyof CSSProperties]: CSSProperties[K] };
    light: { [K in keyof CSSProperties]: CSSProperties[K] };
    semibold: { [K in keyof CSSProperties]: CSSProperties[K] };
  };
  size: string[];
  lineHeight: string[];
};

// palette
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

export type DefaultThemePaletteOptionsProps = Pick<PaletteOptions, RequiredProps> & { background: { opacity: string } };
export type DefaultThemePaletteProps = Pick<Palette, RequiredProps> & { background: { opacity: string } };

export type ComplimentaryGradientType = [string, string, string, string, string, string];

export interface PcapPaletteOptions
  extends Omit<
    DefaultThemePaletteOptionsProps,
    "primary" | "grey" | "complimentary" | "text" | "error" | "warning" | "info" | "success"
  > {
  primary?: PrimaryColor;
  grey?: PartialColor;
  complimentary?: ComplimentaryColorOptions;
  text?: TextColorType;
  gradient?: string[];
  error?: CommonColorMap;
  warning?: CommonColorMap;
  info?: CommonColorMap;
  success?: CommonColorMap;
  link?: LinkColor;
}
export interface PcapPalette
  extends Omit<
    DefaultThemePaletteProps,
    "primary" | "grey" | "complimentary" | "text" | "error" | "warning" | "info" | "success"
  > {
  primary: PrimaryColor;
  grey: GreyColor;
  complimentary: ComplimentaryColorOptions;
  complimentaryGradient: ComplimentaryGradientType;
  text: TextColorType;
  gradient: string[];
  /**
   * @deprecated
   * use status.error
   */
  error: CommonColorMap;
  /**
   * @deprecated
   * use status.warning
   */
  warning: CommonColorMap;
  /**
   * @deprecated
   * use status.info
   */
  info: CommonColorMap;
  /**
   * @deprecated
   * use status.success
   */
  success: CommonColorMap;
  link: LinkColor;
  shadow: ShadowColor;
  scrollbar: {};
  baseColor: 0 | 1 | 2;
  status: {
    error: StatusColorMap;
    warning: StatusColorMap;
    info: StatusColorMap;
    success: StatusColorMap;
  };
}

// Typography
type PcapTypoVariants =
  | "body1semibold"
  | "body2semibold"
  | "subtitle3"
  | "subtitle1semibold"
  | "subtitle2semibold"
  | "buttonM"
  | "buttonS"
  | "buttonL"
  | "tableCell"
  | "h1semibold"
  | "h2semibold"
  | "h3semibold"
  | "subtitle3semibold";

type PcapFontProperties = Pick<CSSProperties, "fontFamily" | "fontWeight" | "fontSize" | "lineHeight" | "color">;
type TypoProps = Record<PcapTypoVariants, PcapFontProperties>;
type TypoPropsOptional = Partial<Record<PcapTypoVariants, PcapFontProperties>>;

export interface PcapTypography extends Typography, TypoProps {}

export interface PcapTypographyOptions extends TypographyOptions, TypoPropsOptional {}

// theme
export interface PcapThemeOptions extends DeprecatedThemeOptions {
  pcapPalette?: PcapPaletteOptions;
  typography?: PcapTypographyOptions;
  /** @deprecated use theme.pcapPalette.Typography*/
  fonts?: any;
}
export interface PcapTheme extends Theme {
  pcapPalette: PcapPalette;

  typography: PcapTypography;
  /** @deprecated use theme.Typography*/
  fonts: any;
  scrollBar: any;
}
export type PcapTypographyVariants = PcapTypoVariants | Variant;

export type { PcapFontProperties };
