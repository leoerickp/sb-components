import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

const meta = {
  //title: "UI/Labels/MyLabel",
  title: "UI/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  argTypes: {
    //color: { control: "select", options: ["primary", "secondary", "tertiary"] },
    color: { control: "select" },
    size: { control: "select" },
    fontColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;
//const Template:ComponentSt = (args) => <MyLabel {...args} />;

//Stories
export const Basic: Story = {
  args: {
    label: "No label",
    size: "normal",
  },
};

export const AllCaps: Story = {
  args: {
    label: "No label",
    size: "h1",
    allCaps: true,
  },
};
export const Secondary: Story = {
  args: {
    label: "No label",
    size: "h2",
    color: "secondary",
  },
};
export const Tertiary: Story = {
  args: {
    label: "No label",
    size: "h3",
    color: "tertiary",
  },
};

export const CustomFontColor: Story = {
  args: {
    label: "No label",
    size: "h1",
    fontColor: "#87ff70",
  },
};
