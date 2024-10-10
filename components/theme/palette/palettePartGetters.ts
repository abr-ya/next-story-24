// import { Color } from '@material-ui/core/styles/createPalette';
import { lighten, darken, toHsl, hslToHex, hexTransparency } from "../utils";
import {
  BaseColor,
  StatusMap,
  ComplimentaryColorOptions,
  ThemesFormulasByShades,
  TextColorType,
  CommonColorMap,
  LinkColor,
  PrimaryColor,
  GreyColor,
  ShadowColor,
} from "./types";
import { PaletteMode } from "@mui/material";

/**
 * основные цвета
 */
export const getPrimaryColorsByBaseColor = (mode: PaletteMode, baseColor: BaseColor): PrimaryColor => {
  const { h, s, l } = baseColor;

  const hslByThemeShade: ThemesFormulasByShades = {
    light: {
      100: [h, s, 94],
      200: [h, s, 90],
      500: [h, s, l],
      600: [h, s, l - 5],
      700: [h, s, l - 10],
    },
    dark: {
      100: [h, s, 15],
      200: [h, s, 10],
      500: [h, s, l],
      600: [h, s + 5, l + 5],
      700: [h, s + 10, l + 10],
    },
  };

  const gradientMap = {
    light: {
      deg: "135deg",
      first: [h, s, l],
      second: [h - 15, s - 7, l + 7],
    },
    dark: {
      deg: "96.11deg",
      first: [h, s, l],
      second: [h + 15, s + 7, l - 7],
    },
  };

  const currentGradient = gradientMap[mode];
  const firstGradientColor = hslToHex(toHsl(...currentGradient.first));
  const secondGradientColor = hslToHex(toHsl(...currentGradient.second));
  const gradient = `linear-gradient(${currentGradient.deg}, ${firstGradientColor} 0%,  ${secondGradientColor} 100%)`;

  const shades = Object.keys(hslByThemeShade.light);
  const hslByType = hslByThemeShade[mode];

  const mappedShades = shades.reduce(
    (acc, shade) => ({ ...acc, [shade]: hslToHex(toHsl(...hslByType[shade])) }),
    {} as PrimaryColor,
  );

  return {
    ...mappedShades,
    gradient,
    secondGradientColor,
  };
};

/**
 * комплиментарные цвета
 */
export const getComplimentaryColors = (mode: PaletteMode): ComplimentaryColorOptions => {
  const complimentariesBase = {
    light: [
      "#78C8DA",
      "#72B9FE",
      "#67CEBB",
      "#6DB6A1",
      "#90C96F",
      "#C1DF53",
      "#FFDD66",
      "#FEB44C",
      "#FE866C",
      "#F1657F",
      "#EA759A",
      "#BF88E7",
      "#BC76C5",
      "#8385C8",
      "#97A1C4",
      "#A7A9AB",
    ],
    dark: [
      "#33A3CC",
      "#408CD8",
      "#39BDA5",
      "#46B479",
      "#77BC4F",
      "#9FBF2E",
      "#D5B120",
      "#DB811A",
      "#C9502E",
      "#CF3C65",
      "#BE4182",
      "#895CBF",
      "#93439D",
      "#5C62B8",
      "#5F6EAB",
      "#7E878F",
    ],
  };

  return complimentariesBase[mode].map((color) => ({
    main: color,
    secondary: mode === "light" ? lighten(color) : darken(color),
  }));
};

/**
 * статусные цвета
 */
export const getStatusColors = (mode: PaletteMode, status: string): CommonColorMap => {
  const statusColorsDictionary = {
    light: {
      warning: {
        main: "#FBBC06",
        secondary: "#FEF5D7",
      },
      success: {
        main: "#10B759",
        secondary: "#E0F5EB",
      },
      error: {
        main: "#DD4340",
        secondary: "#FFE1E2",
      },
      info: {
        main: "#4787C2",
        secondary: "#E0EBF5",
      },
    } as StatusMap,
    dark: {
      warning: {
        main: "#EB9834",
        secondary: "#995E17",
      },
      success: {
        main: "#13C181",
        secondary: "#106B3B",
      },
      error: {
        main: "#F46352",
        secondary: "#853129",
      },
      info: {
        main: "#6A9CD9",
        secondary: "#213D63",
      },
    } as StatusMap,
  };

  return statusColorsDictionary[mode][status];
};

/**
 * градиентные цвета
 */

export const getGradient = (mode: PaletteMode): string[] => {
  const gradientDictionary = {
    light: ["#6CC17C", "#90C77A", "#B5D680", "#DAE182", "#FEEB84", "#FDCB7E", "#FBAA78", "#FA8A71", "#F8696B"],
    dark: ["#2E803D", "#588E31", "#829C25", "#ACAA19", "#D4B50B", "#CF9717", "#C87521", "#C1542B", "#BA3235"],
  } as { [key: string]: string[] };

  return gradientDictionary[mode];
};

/**
 * оттенки серого
 */
export const getGreyShades = (mode: PaletteMode): GreyColor => {
  const greyShadesDictionary = {
    light: {
      500: "#9E9E9E",
      400: "#C0C0C0",
      300: "#E0E0E0",
      200: "#E9EAEC",
      100: "#F6F8FA",
      50: "#FBFBFB",
    } as GreyColor,
    dark: {
      500: "#A3A3A3",
      400: "#5C5C5C",
      300: "#464848",
      200: "#3B3D3E",
      100: "#303233",
      50: "#2D2F2F",
    } as GreyColor,
  };

  return greyShadesDictionary[mode];
};

/**
 * текстовые цвета
 */
export const getTextColors = (mode: PaletteMode): TextColorType => {
  const textColorsDictionary = {
    light: {
      primary: "#1F1F22",
      secondary: "#666666",
      contrastText: "#FDFDFD",
      disabled: "#A3A3A3",
    },
    dark: {
      primary: "#FDFDFD",
      secondary: "#C7C7C7",
      contrastText: "#1F1F22",
      disabled: "#666666",
    },
  };

  return textColorsDictionary[mode];
};

/**
 * фоновые цвета
 */
export const getBackgroundColors = (mode: PaletteMode, baseColorIndex: 0 | 1 | 2) => {
  const backgroundDefault = {
    0: "#FBFAFF",
    1: "#F2F5F7",
    2: "#F2F7F7",
  };

  const backgroundColorsDictionary = {
    light: {
      paper: "#FFF",
      default: backgroundDefault[baseColorIndex],
      opacity: `#000000${hexTransparency(75)}`,
    },
    dark: {
      paper: "#282828",
      default: "#202020",
      opacity: `#FFFFFF${hexTransparency(85)}`,
    },
  };

  return backgroundColorsDictionary[mode];
};

/**
 * цвета ссылок
 */
export const getLinkColors = (mode: PaletteMode): LinkColor => {
  const linkColorsDictionary = {
    light: {
      enabled: "#1663C2",
      hover: "#0B4184",
      visited: "#6968A1",
    },
    dark: {
      enabled: "#32D8EB",
      hover: "#87F1F5",
      visited: "#A7A7D1",
    },
  };

  return linkColorsDictionary[mode];
};

/**
 * цвета теней
 */

export const getShadowColors = (mode: PaletteMode): ShadowColor => {
  const shadowColorsDictionary = {
    light: {
      main: "0px 2px 7px rgba(0, 0, 0, 0.2)",
    },
    dark: {
      main: "0px 2px 7px rgba(0, 0, 0, 0.2)",
    },
  };
  return shadowColorsDictionary[mode];
};

export const getScrollbarStyle = (mode: PaletteMode) => {
  const scrollbarStyle = {
    light: {
      "&@supports (-moz-appearance:none)": {
        "*": {
          scrollbarWidth: "thin",
        },
      },
      "&::-webkit-scrollbar": {
        width: 12,
        height: 12,
      },

      "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-track:active": {
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-track:hover": {
        backgroundColor: "#F6F8FA",
      },

      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#C0C0C0",
        border: "4px solid transparent",
        borderRadius: 8,
        backgroundClip: "content-box",
        "&:active": {
          backgroundColor: "#9E9E9E",
        },
      },
    },
    dark: {
      "&@supports (-moz-appearance:none)": {
        "*": {
          scrollbarWidth: "thin",
        },
      },

      "&::-webkit-scrollbar": {
        width: 12,
        height: 12,
      },

      "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },

      "&::-webkit-scrollbar-track:hover": {
        backgroundColor: "#303233",
      },
      "&::-webkit-scrollbar-track:active": {
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#5C5C5C",
        border: "4px solid transparent",
        borderRadius: 8,
        backgroundClip: "content-box",
        "&:active": {
          backgroundColor: "#A3A3A3",
        },
      },
    },
  };
  return scrollbarStyle[mode];
};

export const getBaseColor = (mode: PaletteMode, baseColor: BaseColor): 0 | 1 | 2 => {
  const { h, s, l } = baseColor;

  const lightColors = [
    { baseColor: 0, h: 239, s: 40, l: 56 },
    { baseColor: 1, h: 212, s: 50, l: 45 },
    { baseColor: 2, h: 186, s: 79, l: 31 },
  ];

  const darkColors = [
    { baseColor: 0, h: 256, s: 65, l: 72 },
    { baseColor: 1, h: 212, s: 90, l: 65 },
    { baseColor: 2, h: 167, s: 47, l: 52 },
  ];

  const findColor = (arr: typeof lightColors) => arr.find((color) => color.h === h && color.s === s && color.l === l);
  const currentColor = mode === "light" ? findColor(lightColors) : findColor(darkColors);

  return (currentColor?.baseColor as 0 | 1 | 2) || 0;
};
