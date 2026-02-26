import { Card } from ".";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
    borderColor: { control: "color" },
    children: { control: "text" }
  },
  args: {
    title: "Card Title",
    children: "Card description",
    width: 320,
    padding: 16,
    background: "#ffffff",
    borderColor: "#e5e7eb",
  },
};

export const Default = {
  args: {},
};

export const NoTitle = {
  args: {
    title: "",
    children: "Card without title.",
  },
};
