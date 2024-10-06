import { Meta, StoryObj } from "@storybook/react/*";
import { Button } from "./button";

import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "shadcn/button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Default: StoryType = {
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    onClick: action("Default Button Click!"),
    children: "Default Button",
    className: "shadow-xl",
  },
};

export const Destructive: StoryType = {
  args: {
    variant: "destructive",
    size: "sm",
    disabled: false,
    onClick: action("Destructive Button Click!"),
    children: "Destructive Button",
    className: "shadow-xl",
  },
};
