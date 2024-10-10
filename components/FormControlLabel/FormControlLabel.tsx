import { FormControlLabel as FormControlLabelMUI, FormControlLabelProps, formControlLabelClasses } from "@mui/material";

import { styled } from "@mui/material/styles";

const { error: errorClass, label } = formControlLabelClasses;

const FormControlLabel = styled(FormControlLabelMUI)<FormControlLabelProps & { error?: boolean }>(
  ({ theme, error }) => ({
    ...theme.typography.body2,

    ":focus-visible": {
      outline: `${theme.pcapPalette.primary[700]} auto 1px`,
    },
    [`& .${formControlLabelClasses.label}`]: {
      ...theme.typography.body2,
    },
    [`& .${errorClass}`]: {
      color: theme.pcapPalette.error.main,
    },
    [`&.${label}`]: {
      ...(error && {
        color: theme.pcapPalette.error.main,
      }),
    },
    [`& .${label}.Mui-disabled`]: {
      color: theme.pcapPalette.text.disabled,
    },
  }),
);

export default FormControlLabel;
