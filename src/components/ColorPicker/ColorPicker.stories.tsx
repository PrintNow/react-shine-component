import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ColorPicker } from './ColorPicker';

const meta: ComponentMeta<typeof ColorPicker> = {
  title: 'Design System/ColorPicker',
  component: ColorPicker,
};
export default meta;

export const Primary: ComponentStoryObj<typeof ColorPicker> = {
  args: {
    disabled: false,
  },
};
