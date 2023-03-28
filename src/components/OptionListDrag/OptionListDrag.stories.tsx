import { ComponentMeta } from "@storybook/react"
import React, { useState } from 'react';
import { OptionListDrag } from "./OptionListDrag"

export default {
  title: 'Design System/OptionListDrag',
  component: OptionListDrag,
  argTypes: {
    // color: {
    //   control: { type: 'color' },
    //   defaultValue: '#017053'
    // }
  }
} as ComponentMeta<typeof OptionListDrag>;

export function Default() {
  const [items, setItems] = useState([{
    id: "email",
    label: "Email address"
  }, {
    id: "phone",
    label: "Phone number"
  }, {
    id: "name",
    label: "Customer name"
  }, {
    id: "email_status",
    label: "Email status"
  }, {
    id: "sms_status",
    label: "SMS status"
  }, {
    id: "popup",
    label: "Popup"
  }])

  const [selected, setSelect] = useState<string[]>([])

  return <div>
    <OptionListDrag
        selected={ selected }
        items={ items }
        onItemChange={ (_, newItems) => setItems(newItems) }
        onChoiceChange={ selected => setSelect(selected) }
    />
  </div>
}
