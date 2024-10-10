import { styled } from "@mui/material/styles";
import { CheckboxProps, Checkbox as CheckboxMUI, checkboxClasses } from "@mui/material";

export const CheckboxIcon = styled("span")(({ theme: { pcapPalette } }) => ({
  borderRadius: 4,
  width: 16,
  height: 16,
  border: `1px solid ${pcapPalette.grey[500]}`,
  backgroundColor: pcapPalette.background.paper,
  ".Mui-focusVisible &": {
    outline: `1px auto ${pcapPalette.text.primary}`,
    outlineOffset: 1,
  },
  "input:hover:enabled ~ &": {
    borderColor: pcapPalette.primary[600],
  },
  "input:active:enabled ~ &": {
    borderColor: pcapPalette.primary[700],
  },
  "input:disabled ~ &": {
    borderColor: pcapPalette.grey[400],
  },
}));

export const ErrorCheckboxIcon = styled(CheckboxIcon)(({ theme: { pcapPalette } }) => ({
  border: `1px solid ${pcapPalette.status.error.primary}`,
  backgroundColor: pcapPalette.background.paper,
  "input:hover:enabled ~ &": {
    borderColor: pcapPalette.status.error.primary,
  },
  "input:active:enabled ~ &": {
    borderColor: pcapPalette.status.error.primary,
  },
}));

export const CheckedIcon = styled(CheckboxIcon)(({ theme }) => ({
  backgroundColor: theme.pcapPalette.primary[500],
  "&:before": {
    display: "block",
    width: 14,
    height: 14,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.3418 2.1543L4.2793 7.2168C4.15625 7.32227 4.01563 7.375 3.875 7.375C3.73438 7.375 3.59375 7.32227 3.4707 7.2168L0.658203 4.4043C0.447266 4.17578 0.447266 3.82422 0.658203 3.5957L1.2207 3.0332C1.34375 2.92772 1.48438 2.875 1.625 2.875C1.76563 2.875 1.90625 2.92772 2.0293 3.0332L3.875 4.89647L7.9707 0.7832C8.09375 0.677725 8.23438 0.625 8.375 0.625C8.51563 0.625 8.65625 0.677725 8.7793 0.7832L9.3418 1.3457C9.55273 1.57423 9.55273 1.92578 9.3418 2.1543Z' fill='white'/%3E%3C/svg%3E%0A")`,
    content: '""',
  },
  "input:disabled ~ &": {
    backgroundColor: theme.pcapPalette.primary[200],
    borderColor: theme.pcapPalette.primary[200],
  },
  "input:hover:enabled ~ &": {
    backgroundColor: theme.pcapPalette.primary[600],
  },
  "input:focus:enabled ~ &": {
    backgroundColor: theme.pcapPalette.primary[700],
  },
}));

export const ErrorCheckedIcon = styled(CheckedIcon)(({ theme: { pcapPalette } }) => ({
  backgroundColor: pcapPalette.status.error.primary,
  border: `1px solid ${pcapPalette.status.error.primary}`,
  "input:hover:enabled ~ &": {
    backgroundColor: pcapPalette.status.error.primary,
    borderColor: pcapPalette.status.error.primary,
  },
  "input:focus:enabled ~ &": {
    backgroundColor: pcapPalette.status.error.primary,
    borderColor: pcapPalette.status.error.primary,
  },
  "input:active:enabled ~ &": {
    borderColor: pcapPalette.status.error.primary,
  },
}));

export const IndeterminateIcon = styled(CheckedIcon)(() => ({
  "&:before": {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='4' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1.65373V2.34605C9.5 2.73548 9.19713 3.03835 8.8077 3.03835H1.19231C0.802885 3.03835 0.5 2.73548 0.5 2.34605V1.65373C0.5 1.2643 0.802885 0.961426 1.19231 0.961426H8.8077C9.19713 0.961426 9.5 1.2643 9.5 1.65373Z' fill='white'/%3E%3C/svg%3E%0A")`,
  },
}));

export const ErrorInderminateIcon = styled(CheckedIcon)(({ theme: { pcapPalette } }) => ({
  backgroundColor: pcapPalette.status.error.primary,
  border: `1px solid ${pcapPalette.status.error.primary}`,
  "&:before": {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='4' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1.65373V2.34605C9.5 2.73548 9.19713 3.03835 8.8077 3.03835H1.19231C0.802885 3.03835 0.5 2.73548 0.5 2.34605V1.65373C0.5 1.2643 0.802885 0.961426 1.19231 0.961426H8.8077C9.19713 0.961426 9.5 1.2643 9.5 1.65373Z' fill='white'/%3E%3C/svg%3E%0A")`,
  },
}));

export type PcapCheckboxProps = Omit<CheckboxProps, "disableRipple" | "color"> & { error?: boolean };

const StyledCheckbox = styled(CheckboxMUI)(() => ({
  [`&.${checkboxClasses.root}`]: {
    [`&.${checkboxClasses.disabled}`]: {
      backgroundColor: "none",
    },
  },
}));

const Checkbox: React.FC<PcapCheckboxProps> = (props) => (
  <StyledCheckbox
    checkedIcon={props.error ? <ErrorCheckedIcon /> : <CheckedIcon />}
    icon={props.error ? <ErrorCheckboxIcon /> : <CheckboxIcon />}
    indeterminateIcon={props.error ? <ErrorInderminateIcon /> : <IndeterminateIcon />}
    {...props}
    disableRipple
  />
);

export default Checkbox;
