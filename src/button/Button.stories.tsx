import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react";
import * as React from "react";
import { Button, ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    label: {
      control: "text",
      table: { category: "Story" },
      defaultValue: "Button label",
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonStoryBase>;

interface ButtonStoryBase {
  prefixIcon: boolean;
  label: string;
  suffixIcon: boolean;
}

type ButtonStoryProps = ButtonProps & ButtonStoryBase;

export const Base: Story<ButtonStoryProps> = ({ label, ...props }) => (
  <Button onClick={action("onClick")} {...props}>
    {label && <span>{label}</span>}
  </Button>
);
