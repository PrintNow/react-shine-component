import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ShineButton } from './ShineButton';

const meta: ComponentMeta<typeof ShineButton> = {
  title: 'Design System/ShineButton',
  component: ShineButton,
};
export default meta;

export const Primary: ComponentStoryObj<typeof ShineButton> = {
  args: {
    disabled: false,
    children: 'Hello',
  },
};
