import { StatusColorMap, StatusMapNew } from "./types";
import { PaletteMode } from "@mui/material";

export const getStatusColorsNew = (mode: PaletteMode, status: string): StatusColorMap => {
  const statusColorsDictionary = {
    light: {
      warning: {
        primary: "#DA8A1B",
        secondary: "#FEF5D7",
      },
      success: {
        primary: "#2D8855",
        secondary: "#E0F5EB",
      },
      error: {
        primary: "#DD4340",
        secondary: "#FFE1E2",
      },
      info: {
        primary: "#3D72A3",
        secondary: "#E0EBF5",
      },
    } as StatusMapNew,
    dark: {
      warning: {
        primary: "#EB9834",
        secondary: "#995E17",
      },
      success: {
        primary: "#13C181",
        secondary: "#106B3B",
      },
      error: {
        primary: "#F46352",
        secondary: "#853129",
      },
      info: {
        primary: "#6A9CD9",
        secondary: "#213D63",
      },
    } as StatusMapNew,
  };

  return statusColorsDictionary[mode][status];
};
