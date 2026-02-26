import { Button } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: "text" },
    background: { control: "color" }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    children: "Button",
    size: "sm",
    rounded: "md",
    plain: false
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default = {
  args: {
    children: "Button",
  },
};

export const XSButton = {
  args: {
    size: "xs",
    children: "XS Button",
  },
};

export const Large = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const Plain = {
  args: {
    children: "Plain",
    plain: true
  },
};

export const DisabledButton = {
  args: {
    children: "Disabled",
    disabled: true
  },
};