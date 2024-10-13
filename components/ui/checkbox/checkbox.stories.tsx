import { Meta, StoryObj } from "@storybook/react/*";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "shadcn/checkbox",
  component: Checkbox,
  // tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Default: StoryType = {
  args: {
    checked: false,
    className: "rounded-md",
    disabled: false,
  },
};

export const Disabled: StoryType = {
  args: {
    disabled: true,
  },
};

export const Selected: StoryType = {
  args: {
    checked: true,
  },
};
