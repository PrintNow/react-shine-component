import { ComponentMeta } from '@storybook/react';
import React from "react"
import { PostLayer, PostLayerProps } from "./PostLayer"

export default {
  title: 'Design System/PostLayer',
  component: PostLayer,
  argTypes: {
    title: {
      type: 'string',
      defaultValue: "Lexie from Shine"
    },
    inputPlaceholder: {
      type: 'string',
      defaultValue: "Live chat with us"
    },
    statusBadge: {
      defaultValue: "statusBadge",
      control: { type: 'select' },
    }
  }
} as ComponentMeta<typeof PostLayer>;

export function Default(props: PostLayerProps) {
  if (!props.onClick) {
    props.onClick = () => {
      console.log('点击了')
    }
  }

  return <PostLayer { ...props }>
    <h3>Welcome use Shine React component</h3>
  </PostLayer>
}
