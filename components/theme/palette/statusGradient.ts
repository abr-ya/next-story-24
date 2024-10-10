import { PaletteMode } from "@mui/material";
import { ComplimentaryGradientType } from "../types";

export const generateColorGradient = (color1: string, color2: string, color3?: string) => {
  if (color3) {
    return `linear-gradient(135deg, ${color1} 0%, ${color2} 51.56%, ${color3} 100%)`;
  }
  return `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
};

export const getComplimentaryGradient = (mode: PaletteMode): ComplimentaryGradientType => {
  const lightGradients = [
    ["#884EFC", "#F59AFD"],
    ["#6452F3", "#7CCBFD"],
    ["#EC1058", "#FEEA7D"],
    ["#01DBEE", "#46FFC3"],
    ["#74ECD1", "#A4E28F", "#ECDD59"],
    ["#FC58C6", "#FD9367"],
  ];
  const darkGradients = [
    ["#884EFC", "#F59AFD"],
    ["#6452F3", "#7CCBFD"],
    ["#EC1058", "#FEEA7D"],
    ["#01DBEE", "#46FFC3"],
    ["#74ECD1", "#A4E28F", "#ECDD59"],
    ["#FC58C6", "#FD9367"],
  ];
  const prepareGradient =
    mode === "light"
      ? lightGradients.map(([c1, c2, c3]) => generateColorGradient(c1, c2, c3))
      : darkGradients.map(([c1, c2, c3]) => generateColorGradient(c1, c2, c3));

  return prepareGradient as ComplimentaryGradientType;
};
