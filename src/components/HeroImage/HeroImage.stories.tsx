import { HeroImage } from ".";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    height: { control: "text" },
    overlay: { control: "boolean" },
  },
  args: {
    src: "https://picsum.photos/1200/600",
    alt: "Demo hero image",
    title: "Here is title",
    subtitle: "I am a hero banner",
    height: 320,
    overlay: true,
  },
};

export const Default = {
  args: {},
};

export const NoOverlay = {
  args: {
    overlay: false,
  },
};
