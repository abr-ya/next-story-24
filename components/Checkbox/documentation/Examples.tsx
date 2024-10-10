import React, { ChangeEvent, SVGProps, useState } from "react";
import { Box, styled, ThemeProvider } from "@mui/material";
import { FormControlLabel } from "../../FormControlLabel";
import Checkbox from "../Checkbox";
import Typography from "../../Typography/Typography";
import { Tooltip } from "../../Tooltip";
import createPcapTheme from "@/components/theme/createPcapTheme";
import { baseColors } from "@/components/theme";

const theme = createPcapTheme({ mode: "light", baseColor: baseColors.light[1] });

export const Example2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    console.log(e, checked);
    setIsChecked(!isChecked);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={onChange} />}
        color="default"
        label="Checkbox"
      />
    </ThemeProvider>
  );
};

export const Example3 = () => {
  // Иконка, когда Checkbox не выбран
  const CheckboxIcon = styled("span")(() => ({
    borderRadius: 4,
    width: 16,
    height: 16,
    border: `1px solid green`,
    backgroundColor: "white",
    ".Mui-focusVisible &": {
      outline: `1px auto blue`,
      outlineOffset: 1,
    },
    "input:hover:enabled ~ &": {
      borderColor: "green",
    },
    "input:active:enabled ~ &": {
      borderColor: "green",
    },
    "input:disabled ~ &": {
      borderColor: "green",
    },
  }));

  // Иконка, когда Checkbox выбран
  const CheckedIcon = styled(CheckboxIcon)(() => ({
    backgroundColor: "green",
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
      backgroundColor: "gray",
      borderColor: "black",
    },
    "input:hover:enabled ~ &": {
      backgroundColor: "green",
    },
    "input:focus:enabled ~ &": {
      backgroundColor: "green",
    },
  }));

  //Indeterminate иконка
  const IndeterminateIcon = styled(CheckedIcon)(() => ({
    "&:before": {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='4' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1.65373V2.34605C9.5 2.73548 9.19713 3.03835 8.8077 3.03835H1.19231C0.802885 3.03835 0.5 2.73548 0.5 2.34605V1.65373C0.5 1.2643 0.802885 0.961426 1.19231 0.961426H8.8077C9.19713 0.961426 9.5 1.2643 9.5 1.65373Z' fill='white'/%3E%3C/svg%3E%0A")`,
    },
  }));

  //   const onChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
  //     console.log("click", e, checked);
  //   };

  return (
    <ThemeProvider theme={theme}>
      <Checkbox checkedIcon={<CheckedIcon />} indeterminateIcon={<IndeterminateIcon />} icon={<CheckboxIcon />} />
      Кастомый чекбокс
    </ThemeProvider>
  );
};

export const Example1 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    console.log(e, checked);
    setIsChecked(!isChecked);
  };

  const SvgCircleQuestion = (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12 3C7.02891 3 3 7.02891 3 12C3 16.9711 7.02891 21 12 21C16.9711 21 21 16.9711 21 12C21 7.02891 16.9711 3 12 3ZM12 7.5C12.6212 7.5 13.125 8.00379 13.125 8.625C13.125 9.24621 12.6212 9.75 12 9.75C11.3788 9.75 10.875 9.24727 10.875 8.625C10.875 8.00273 11.3777 7.5 12 7.5ZM13.4062 16.5H10.5938C10.1297 16.5 9.75 16.1238 9.75 15.6562C9.75 15.1887 10.1279 14.8125 10.5938 14.8125H11.1562V12.5625H10.875C10.4092 12.5625 10.0312 12.1846 10.0312 11.7188C10.0312 11.2529 10.4109 10.875 10.875 10.875H12C12.4658 10.875 12.8438 11.2529 12.8438 11.7188V14.8125H13.4062C13.8721 14.8125 14.25 15.1904 14.25 15.6562C14.25 16.1221 13.8738 16.5 13.4062 16.5Z"
          fill="#9E9E9E"
        />
      </svg>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center">
        <Checkbox onChange={onChange} />
        <Typography>Checkbox с иконкой</Typography>
        <Tooltip
          title="Подсказка"
          placement="top"
          BoxProps={{ padding: "0 8px" }}
          PopperProps={{
            popperOptions: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -4],
                  },
                },
              ],
            },
          }}
        >
          <SvgCircleQuestion />
        </Tooltip>
      </Box>
    </ThemeProvider>
  );
};
