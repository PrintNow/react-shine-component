import { ComponentMeta } from "@storybook/react"
import React from 'react';
import { Badge, BadgeProps } from './';

export default {
  title: 'Design System/Badge',
  component: Badge,
  argTypes: {
    color: {
      control: { type: 'color' },
      defaultValue: '#017053'
    }
  }
} as ComponentMeta<typeof Badge>;

export function Default(props: BadgeProps) {
  return <Badge { ...props }>Default</Badge>
}
