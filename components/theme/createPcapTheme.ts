import { PaletteMode, switchClasses, iconButtonClasses } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { PcapTheme } from "./types";
import { BaseColor } from "./palette/types";
import { getPalette } from "./palette";
import { getTypography, fonts } from "./fonts";
import { scrollBar } from "./scrollBar";

type CreatePcapThemeOptions = { mode: PaletteMode; baseColor: BaseColor };

const { track, disabled } = switchClasses;

export default (palette: CreatePcapThemeOptions): PcapTheme => {
  const { mode, baseColor } = palette;
  const pcapPalette = getPalette(mode, baseColor);
  const pcapTypo = getTypography(pcapPalette);
  const baseMuiTheme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.pcapPalette.background.paper,
          }),
        },
      },
      // MuiSkeleton: {
      //   styleOverrides: {
      //     root: { height: 33 }
      //   }
      // },
      MuiPopover: {
        styleOverrides: {
          paper: ({ theme }) => ({
            ...theme.pcapPalette.scrollbar,
          }),
        },
      },
      MuiMenu: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 4,
            boxShadow: theme.pcapPalette.shadow.main,
          }),
        },
      },
      MuiMenuItem: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            opacity: 1 + "!important",
            color: ownerState.disabled ? `${theme.pcapPalette.text.disabled}` : theme.pcapPalette.text.primary,
            "& svg": {
              fill: ownerState.disabled ? `${theme.pcapPalette.text.disabled}` : theme.pcapPalette.text.primary,
            },
          }),
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: ({ theme }) => ({
            "& svg": {
              fill: theme.pcapPalette.grey[500],
            },
          }),
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          disabled: ({ theme }) => ({
            color: theme.pcapPalette.text.disabled,
          }),
          root: ({ theme, ownerState }) => ({
            ...theme.typography.body2,
            color: ownerState.disabled
              ? `${theme.pcapPalette.text.disabled}!important`
              : theme.pcapPalette.primary[500],
            height: 36,
            fontSize: 14,
            padding: "6px 16px",

            "&:hover": {
              backgroundColor: theme.pcapPalette.primary[100],
            },
            "&:active": {
              backgroundColor: theme.pcapPalette.primary[200],
            },
          }),
        },
      },
      MuiIconButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            padding: 2,
            margin: 0,
            [`&.${iconButtonClasses.sizeSmall}`]: {
              width: 20,
              height: 20,
            },
            "&:hover": {
              backgroundColor: theme.pcapPalette.primary[100],
              "& svg": {
                fill: `${theme.pcapPalette.primary[600]}`,
              },
            },
            "&:active": {
              backgroundColor: theme.pcapPalette.primary[200],
              "& svg": {
                fill: `${theme.pcapPalette.primary[700]}`,
              },
            },
            "& svg": {
              fill: `${theme.pcapPalette.grey[500]}`,
              width: 18,
              height: 18,
              transform: "unset",
            },
          }),
        },
      },
      MuiSwitch: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            width: 56,
            height: 36,
            margin: "0 12px",
            padding: 6,
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            MozBackfaceVisibility: "hidden",
            [`&:hover + .${track}`]: {
              backgroundColor: theme.pcapPalette.grey[400],
            },
            [`&:active + .${track}`]: {
              backgroundColor: theme.pcapPalette.grey[500],
            },
            [`&.${disabled} + .${track}`]: {
              backgroundColor: theme.pcapPalette.grey[200],
              opacity: "1",
            },
            [`&.${disabled}`]: {
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
            },
            "&:hover": {
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)",
            },
          }),
          checked: ({ theme }) => ({
            [`& + .${track}`]: {
              backgroundColor: theme.pcapPalette.primary[500],
              opacity: 1,
            },
            [`&:hover + .${track}`]: {
              backgroundColor: theme.pcapPalette.primary[600],
            },
            [`&:active + .${track}`]: {
              backgroundColor: theme.pcapPalette.primary[700],
            },
            [`&.${disabled} + .${track}`]: {
              backgroundColor: theme.pcapPalette.primary[200],
            },
          }),
          track: ({ theme }) => ({
            width: 44,
            height: 24,
            borderRadius: 18,
            backgroundColor: theme.pcapPalette.grey[300],
            opacity: 1,
          }),
          thumb: ({ theme }) => ({
            width: 20,
            height: 20,
            boxShadow: "none",
            backgroundColor: theme.pcapPalette.background.paper,
          }),
        },
      },

      MuiCssBaseline: {
        styleOverrides: `
            @font-face {
              font-family: 'SBSansUI-Regular';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: ${fonts.family.regular.src};
            } 
            
            @font-face {
              font-family: 'SBSansUI-Bold';
              font-style: normal;
              font-display: swap;
              font-weight: 600;
              src: ${fonts.family.bold.src};
            }
            
            @font-face {
              font-family: 'SBSansUI-Caps';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: ${fonts.family.caps.src};
            }
            
            @font-face {
              font-family: 'SBSansUI-Light;
              font-style: normal;
              font-display: swap;
              font-weight: 300;
              src: ${fonts.family.light.src};
            }
            
            @font-face {
              font-family: 'SBSansUI-Semibold';
              font-style: normal;
              font-display: swap;
              font-weight: 500;
              src: ${fonts.family.semibold.src};
            }
            
            body {
              background-color: ${pcapPalette.background.default};
            }`,
      },
    },
  });

  return {
    ...baseMuiTheme,
    pcapPalette,
    typography: pcapTypo,
    fonts,
    scrollBar,
  };
};
