import createTypography from "@mui/material/styles/createTypography";
import SBSansUiRegular from "./SBSansUI-Regular.woff";
import SBSansUiBold from "./SBSansUI-Bold.woff";
import SBSansUiCaps from "./SBSansUI-Caps.woff";
import SBSansUiLight from "./SBSansUI-Light.woff";
import SBSansUiSemibold from "./SBSansUI-Semibold.woff";

import { Fonts, PcapFontProperties, PcapPalette, PcapTypography } from "../types";

export const fonts: Fonts = {
  family: {
    regular: {
      fontFamily: "SBSansUI-Regular",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 400,
      src: `url(${SBSansUiRegular})`,
    },
    bold: {
      fontFamily: "SBSansUI-Bold",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 600,
      src: `url(${SBSansUiBold})`,
    },
    caps: {
      fontFamily: "SBSansUI-Caps",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 400,
      src: `url(${SBSansUiCaps})`,
    },
    light: {
      fontFamily: "SBSansUI-Light",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 300,
      src: `url(${SBSansUiLight})`,
    },
    semibold: {
      fontFamily: "SBSansUI-Semibold",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 500,
      src: `url(${SBSansUiSemibold})`,
    },
  },
  size: ["10px", "12px", "13px", "14px", "16px", "18px", "21px", "24px"],
  lineHeight: ["14px", "16px", "18px", "20px", "22px", "24px", "26px", "28px"],
};

export const getTypography = (palette: PcapPalette): PcapTypography => {
  // @ts-ignore
  const defaultTypography = createTypography(palette, {});

  const headlineStyle: PcapFontProperties = {
    fontFamily: "SBSansUI-Regular",
    fontWeight: "normal",
    fontSize: fonts.size[7],
    lineHeight: fonts.lineHeight[7],
    color: palette.text.primary,
  };

  const bodyStyle: PcapFontProperties = {
    fontFamily: "SBSansUI-Regular",
    fontWeight: "normal",
    fontSize: fonts.size[4],
    lineHeight: fonts.lineHeight[4],
    color: palette.text.primary,
  };

  return {
    ...defaultTypography,
    fontSize: parseInt(fonts.size[4], 10),
    fontFamily: "SBSansUI, Arial",
    h1: {
      ...headlineStyle,
    },
    h2: {
      ...headlineStyle,
      fontSize: fonts.size[6],
      lineHeight: fonts.lineHeight[6],
    },
    h3: {
      ...headlineStyle,
      fontSize: fonts.size[5],
      lineHeight: fonts.lineHeight[5],
    },
    h4: {
      ...headlineStyle,
      fontSize: fonts.size[4],
      lineHeight: fonts.lineHeight[4],
    },
    h5: {
      ...headlineStyle,
      fontSize: fonts.size[3],
      lineHeight: fonts.lineHeight[3],
    },
    h6: {
      ...headlineStyle,
      fontSize: fonts.size[2],
      lineHeight: fonts.lineHeight[2],
    },
    h1semibold: { ...headlineStyle, fontFamily: "SBSansUI-Semibold", fontWeight: fonts.family.bold.fontWeight },
    h2semibold: {
      ...headlineStyle,
      fontSize: fonts.size[6],
      lineHeight: fonts.lineHeight[6],
      fontFamily: "SBSansUI-Semibold",
      fontWeight: fonts.family.bold.fontWeight,
    },
    h3semibold: {
      ...headlineStyle,
      fontSize: fonts.size[5],
      lineHeight: fonts.lineHeight[5],
      fontFamily: "SBSansUI-Semibold",
      fontWeight: fonts.family.bold.fontWeight,
    },

    body1: {
      ...bodyStyle,
    },
    body2: {
      ...bodyStyle,
      fontSize: fonts.size[3],
      lineHeight: fonts.lineHeight[3],
    },
    body1semibold: {
      ...bodyStyle,
      fontSize: fonts.size[4],
      lineHeight: fonts.lineHeight[4],
      fontFamily: "SBSansUI-Semibold",
      fontWeight: fonts.family.bold.fontWeight,
    },
    body2semibold: {
      ...bodyStyle,
      fontSize: fonts.size[3],
      lineHeight: fonts.lineHeight[3],
      fontFamily: "SBSansUI-Semibold",
      fontWeight: fonts.family.bold.fontWeight,
    },
    subtitle1: {
      ...bodyStyle,
      fontSize: fonts.size[2],
      lineHeight: fonts.lineHeight[2],
    },
    subtitle2: {
      ...bodyStyle,
      fontSize: fonts.size[1],
      lineHeight: fonts.lineHeight[1],
    },
    subtitle3: {
      ...bodyStyle,
      fontSize: fonts.size[0],
      lineHeight: fonts.lineHeight[0],
    },
    subtitle1semibold: {
      ...bodyStyle,
      fontSize: fonts.size[2],
      lineHeight: fonts.lineHeight[2],
      fontFamily: "SBSansUI-Semibold",
      fontWeight: fonts.family.bold.fontWeight,
    },
    subtitle2semibold: {
      ...bodyStyle,
      fontSize: fonts.size[1],
      lineHeight: fonts.lineHeight[1],
      fontFamily: "SBSansUI-Semibold",
      fontWeight: fonts.family.bold.fontWeight,
    },
    subtitle3semibold: {
      ...bodyStyle,
      fontSize: fonts.size[0],
      lineHeight: fonts.lineHeight[0],
      fontFamily: "SBSansUI-Semibold",
      fontWeight: fonts.family.bold.fontWeight,
    },
    buttonL: {
      ...bodyStyle,
      fontSize: fonts.size[4],
      lineHeight: fonts.lineHeight[6],
      fontFamily: "SBSansUI-Semibold",
      fontWeight: fonts.family.bold.fontWeight,
    },
    buttonM: {
      ...bodyStyle,
      fontSize: fonts.size[3],
      lineHeight: fonts.lineHeight[5],
      fontFamily: "SBSansUI-Semibold",
    },
    buttonS: {
      ...bodyStyle,
      fontSize: fonts.size[2],
      lineHeight: fonts.lineHeight[3],
      fontFamily: "SBSansUI-Semibold",
    },
    tableCell: {
      ...bodyStyle,
      fontSize: fonts.size[3],
      lineHeight: fonts.lineHeight[2],
    },
    caption: {
      fontSize: fonts.size[1],
      lineHeight: fonts.lineHeight[1],
    },
    overline: {
      fontSize: fonts.lineHeight[0],
      lineHeight: fonts.lineHeight[0],
    },
    button: {
      fontWeight: 500,
      fontSize: fonts.size[4],
      lineHeight: fonts.lineHeight[1],
    },
  };
};
