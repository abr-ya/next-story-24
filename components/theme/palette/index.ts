import { PcapPalette } from "../types";
import { getStatusColorsNew } from "./statusColors";
import { getComplimentaryGradient } from "./statusGradient";

import {
  getComplimentaryColors,
  getPrimaryColorsByBaseColor,
  getStatusColors,
  getGreyShades,
  getTextColors,
  getBackgroundColors,
  getGradient,
  getLinkColors,
  getShadowColors,
  getScrollbarStyle,
  getBaseColor,
} from "./palettePartGetters";
import { BaseColor } from "./types";
import { PaletteMode } from "@mui/material";

export const getPalette = (mode: PaletteMode, paletteBaseColor: BaseColor): PcapPalette => {
  const statusColors = {
    warning: getStatusColorsNew(mode, "warning"),
    error: getStatusColorsNew(mode, "error"),
    info: getStatusColorsNew(mode, "info"),
    success: getStatusColorsNew(mode, "success"),
  };

  const baseColorIndex = getBaseColor(mode, paletteBaseColor);

  return {
    mode,
    baseColor: baseColorIndex,
    primary: getPrimaryColorsByBaseColor(mode, paletteBaseColor),
    background: getBackgroundColors(mode, baseColorIndex),
    text: getTextColors(mode),
    grey: getGreyShades(mode),
    gradient: getGradient(mode),
    complimentary: [...getComplimentaryColors(mode)],
    warning: getStatusColors(mode, "warning"),
    error: getStatusColors(mode, "error"),
    info: getStatusColors(mode, "info"),
    success: getStatusColors(mode, "success"),
    link: getLinkColors(mode),
    shadow: getShadowColors(mode),
    scrollbar: getScrollbarStyle(mode),
    status: statusColors,
    complimentaryGradient: getComplimentaryGradient(mode),
  };
};
