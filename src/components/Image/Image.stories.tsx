import { Image } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Image",
  component: Image,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    borderColor: { control: "color" },
  },
  args: {
    src: "https://picsum.photos/200/200",
    width: 200,
    height: 200,
    round: false,
    border: false,
    borderColor: "#BF4F74",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {},
};

export const Rounded = {
  args: {
    round: true,
  },
};

export const WithBorder = {
  args: {
    border: true,
    borderColor: "#1d4ed8",
  },
};

export const Responsive = {
  args: {
    width: "100%",
    height: "auto",
    border: true,
  },
};
