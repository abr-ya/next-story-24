/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import { decomposeColor, hslToRgb, rgbToHex } from "@mui/material";

// import { BaseColor } from './palette/types';

/* eslint-disable no-param-reassign */

// copy-paste from https://css-tricks.com/converting-color-spaces-in-javascript/
export const RGBToHSL = (r: number, g: number, b: number) => {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  // Calculate hue
  // No difference
  if (delta === 0) h = 0;
  // Red is max
  else if (cmax === r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax === g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
};

export const colorToHSL = (color: string) => {
  const colorData = decomposeColor(color);
  const { values } = colorData;
  let h;
  let s;
  let l;
  let a;

  if (colorData.type === "hsl" || colorData.type === "hsla") {
    [h, s, l] = values;

    if (colorData.type === "hsla") [, , , a] = values;
  } else {
    const hsl = RGBToHSL(colorData.values[0], colorData.values[1], colorData.values[2]);
    h = hsl.h;
    s = hsl.s;
    l = hsl.l;
    if (colorData.type === "rgba") [, , , a] = values;
  }

  return {
    h: Math.round(h),
    s: Math.round(s),
    l: Math.round(l),
    a: a === undefined ? a : Math.round(a),
  };
};

export const lighten = (color: string) => {
  const { h, s, a } = colorToHSL(color);
  let { l } = colorToHSL(color);

  l += 25;

  if (l > 100) l = 100;

  const alpha = a ? `, ${a}` : `)`;

  return hslToHex(`hsl(${h}, ${s}, ${l}%${alpha}`);
};

export const darken = (color: string) => {
  const { h, s, a } = colorToHSL(color);
  let { l } = colorToHSL(color);

  l -= 30;

  if (l > 100) l = 0;

  const alpha = a ? `, ${a}` : `)`;

  return hslToHex(`hsl(${h}, ${s}, ${l}%${alpha}`);
};

export const toHsl = (h?: number, s?: number, l?: number): string => `hsl(${h}, ${s}, ${l}%)`;

// export const toHslGradient = (first: BaseColor, second: BaseColor, formula: number[]) => {

//   return `linear-gradient()`
// }

export const hslToHex = (hsl: string) => rgbToHex(hslToRgb(hsl));
export const getSelector = (className: string, element: keyof HTMLElementTagNameMap = "div") =>
  `& ${element}[class^='${className}'], ${element}[class*=' ${className}']`;

export const hexTransparency = (percentage: number) => {
  if (percentage < 0) return;
  if (percentage < 1) percentage *= 100;
  return Math.round(percentage * 2.55).toString(16);
};
