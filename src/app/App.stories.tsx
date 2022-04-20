import { Story, Meta } from "@storybook/react";
import * as React from "react";
import { App } from "./App";

export default {
  component: App,
  title: "App",
  argTypes: {},
} as Meta;

export const Base: Story = ({ ...props }) => <App {...props} />;
