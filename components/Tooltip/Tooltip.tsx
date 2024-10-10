import React from "react";
import {
  styled,
  Tooltip as MUITooltip,
  tooltipClasses,
  TooltipProps,
  Box,
  BoxProps as MuiBoxProps,
} from "@mui/material";

export type PcapTooltipProps = TooltipProps & { BoxProps?: MuiBoxProps };

const Tooltip = styled(({ className, children, BoxProps, ...props }: PcapTooltipProps) => (
  <MUITooltip arrow {...props} classes={{ popper: className }}>
    <Box display="inline-flex" {...BoxProps}>
      {children}
    </Box>
  </MUITooltip>
))(({ theme }) => ({
  [`&[data-popper-placement*="bottom-start"] .${tooltipClasses.arrow},
     &[data-popper-placement*="top-start"] .${tooltipClasses.arrow}`]: {
    left: "-30px!important",
  },
  [`&[data-popper-placement*="bottom-end"] .${tooltipClasses.arrow},
    &[data-popper-placement*="top-end"] .${tooltipClasses.arrow}`]: {
    left: "30px!important",
  },
  [`&[data-popper-placement*="right-start"] .${tooltipClasses.arrow},
    &[data-popper-placement*="left-start"] .${tooltipClasses.arrow}`]: {
    top: "-4px!important",
  },
  [`&[data-popper-placement*="right-end"] .${tooltipClasses.arrow},
    &[data-popper-placement*="left-end"] .${tooltipClasses.arrow}`]: {
    top: "4px!important",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    ...theme.typography.body2,
    backgroundColor: theme.pcapPalette.background.opacity,
    maxWidth: 368,
    color: theme.pcapPalette.text.contrastText,
    borderRadius: 8,
    padding: 8,
    whiteSpace: "pre-line",
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.pcapPalette.background.opacity,
    },
  },
}));

export default Tooltip;
