import { PaletteMode } from "@mui/material";
import createPcapTheme from "./createPcapTheme";

import { BaseColor } from "./palette/types";
import { PcapTheme } from "./types";

export const baseColors = {
  light: [
    { h: 245, s: 69, l: 65 },
    { h: 212, s: 50, l: 45 },
    { h: 186, s: 79, l: 31 },
  ] as BaseColor[],
  dark: [
    { h: 256, s: 65, l: 72 },
    { h: 212, s: 90, l: 65 },
    { h: 167, s: 47, l: 52 },
  ] as BaseColor[],
};

type AppThemes = Record<PaletteMode, PcapTheme[]>;

const paletteModes: PaletteMode[] = ["light", "dark"];

export default paletteModes.reduce((acc, mode) => {
  const palettesIncArr = [0, 1, 2];
  return {
    ...acc,
    [mode]: palettesIncArr.map((num) => createPcapTheme({ mode, baseColor: baseColors[mode][num] })),
  };
}, {} as AppThemes) as AppThemes;

export type { PcapTheme, PcapThemeOptions } from "./types";
