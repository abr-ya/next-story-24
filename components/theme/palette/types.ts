export type BaseColor = {
  h: number;
  s: number;
  l: number;
};
export type HslArrByShades = {
  [key: string]: number[];
};

export type ThemesFormulasByShades = {
  light: HslArrByShades;
  dark: HslArrByShades;
};

export type StatusColor = {
  [key: string]: string;
};

export type CommonColorMap = {
  main: string;
  secondary: string;
};

export type StatusColorMap = {
  primary: string;
  secondary: string;
};

export type TextColorType = {
  primary: string;
  secondary: string;
  disabled: string;
  contrastText: string;
};

export type ComplimentaryColorOptions = CommonColorMap[];

export type StatusMap = {
  [key: string]: CommonColorMap;
};

export type StatusMapNew = {
  [key: string]: StatusColorMap;
};

export type LinkColor = {
  enabled: string;
  hover: string;
  visited: string;
};

export type ShadowColor = { main: string };

export type PrimaryColor = {
  100: string;
  200: string;
  500: string;
  600: string;
  700: string;
} & { gradient: string; secondGradientColor: string };

export type GreyColor = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
};

export type PartialColor = {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
};

// export type ColorPartial = Partial<Color>
