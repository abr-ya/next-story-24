import React from "react";
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PcapTypographyVariants } from "../../../theme/types";
import { PcapTypographyProps } from "./types";

const Typography = styled((props: PcapTypographyProps) => {
  const { variant = "body2", children, ...rest } = props;
  return (
    <MuiTypography {...rest} variant={variant}>
      {children}
    </MuiTypography>
  );
})<
  MuiTypographyProps & {
    variant?: PcapTypographyVariants;
  }
>((props) => {
  const { theme, variant = "body2", color } = props;
  const typographyStyle = theme.typography[variant];
  const { text, link } = theme.pcapPalette;
  const { warning, success, info, error } = theme.pcapPalette.status;
  const colors = {
    success,
    warning,
    error,
    info,
    link,
    text,
  };

  const colorKeys = color ? color.split(".") : null;
  const currentColor =
    colorKeys && colorKeys.length >= 2
      ? colors[colorKeys[0] as keyof PcapTypographyProps["color"]]?.[colorKeys[1]]
      : null;
  const resultedColor = currentColor ? currentColor : color;
  return {
    ...typographyStyle,
    ...(resultedColor && {
      color: resultedColor,
    }),
  };
});

export * from "./types";
export default Typography;
