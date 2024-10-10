import React from "react";

import { Paper as MuiPaper, PaperProps, styled } from "@mui/material";

type PaperRef = ((instance: any | null) => void) | React.RefObject<any> | null | undefined;

const Paper = styled(
  React.forwardRef((props: PaperProps, ref: PaperRef) => <MuiPaper {...props} elevation={0} ref={ref} />),
)(() => ({
  backgroundColor: "gainsboro",
  border: `1px solid grey`,
}));

export default Paper;
