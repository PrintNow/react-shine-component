import { ComponentMeta } from "@storybook/react"
import React from 'react';
import Badge from './Badge';

export default {
  title: 'Design System/Badge',
  component: Badge,
  argTypes: {
    color: {
      control: { type: 'color', default: '#eee' }
    }
  }
} as ComponentMeta<typeof Badge>;

export function Default() {
  return <Badge color="#eee">Default</Badge>
}
