import * as React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";

import Checkbox, { PcapCheckboxProps } from "./Checkbox";
import { ThemeProvider } from "@mui/material";
import createPcapTheme from "../theme/createPcapTheme";
import { FormControlLabel } from "../FormControlLabel";
import { baseColors } from "../theme";

type Story = StoryObj<typeof Checkbox>;

const theme = createPcapTheme({ mode: "dark", baseColor: baseColors.dark[1] });

export const PlaybookCheckbox: Story = {
  name: "Playbook / Checkbox",
  render: ({ checked, disabled, error, indeterminate }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClick = (e: any) => {
      console.log(e);
    };

    return (
      <ThemeProvider theme={theme}>
        <Checkbox
          indeterminate={indeterminate}
          checked={checked}
          disabled={disabled}
          onChange={handleClick}
          error={error}
        />
      </ThemeProvider>
    );
  },
  args: {
    checked: true,
    error: false,
    disabled: false,
    indeterminate: false,
    onChange: () => {
      console.log("checked!");
    },
  },
  argTypes: {
    checked: { description: "Выбран" },
    disabled: { description: "Disabled" },
    indeterminate: { description: "indeterminate" },
    onChange: { description: "Фуцнкия изменения" },
    error: { description: "Ошибка" },
  },
};

const TemplateDefault: StoryFn<PcapCheckboxProps> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel control={<Checkbox {...args} />} color="default" label="Checkbox" disabled={args.disabled} />
    </ThemeProvider>
  );
};

export default {
  title: "MUI/Checkbox",
  component: Checkbox,
} as Meta;

export const CheckboxDefault = TemplateDefault.bind({});
CheckboxDefault.args = {
  checked: false,
  disabled: false,
  indeterminate: false,
};
CheckboxDefault.storyName = "Checbkox / Default";

export const CheckboxDisabled = TemplateDefault.bind({});
CheckboxDisabled.args = {
  disabled: true,
};
CheckboxDisabled.storyName = "Checkbox / Disabled";

export const CheckboxSelected = TemplateDefault.bind({});
CheckboxSelected.args = {
  checked: true,
};
CheckboxSelected.storyName = "Checkbox / Checked";

export const CheckboxInterminate = TemplateDefault.bind({});
CheckboxInterminate.args = {
  checked: true,
  indeterminate: true,
};
CheckboxInterminate.storyName = "Checkbox / Indeterminate";

export const CheckboxSelectedDisabled = TemplateDefault.bind({});
CheckboxSelectedDisabled.args = {
  checked: true,
  disabled: true,
};
CheckboxSelectedDisabled.storyName = "Checkbox / Checked & Disabled";

export const CheckboxError = TemplateDefault.bind({});
CheckboxError.args = {
  checked: false,
  disabled: false,
  indeterminate: false,
  error: true,
};
CheckboxError.storyName = "Checkbox / Error";

export const CheckboxErrorChecked = TemplateDefault.bind({});
CheckboxErrorChecked.args = {
  checked: true,
  disabled: false,
  indeterminate: false,
  error: true,
};
CheckboxErrorChecked.storyName = "Checkbox / Checked & Error";
