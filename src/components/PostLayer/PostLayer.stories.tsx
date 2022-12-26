import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { PostLayer } from "./PostLayer"

const meta: ComponentMeta<typeof PostLayer> = {
  title: 'Design System/PostLayer',
  component: PostLayer,
};
export default meta;

export const Default: ComponentStoryObj<typeof PostLayer> = {
  args: {
    title: "欢迎",
    statusBadge: "online",
    children: (
        <div>
          你好啊
        </div>
    )
  },
};
