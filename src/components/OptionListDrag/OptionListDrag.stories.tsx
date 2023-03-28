import {ComponentMeta} from "@storybook/react"
import React, {useState} from 'react';
import {OptionListDrag} from "./OptionListDrag"

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
  const [choices, setChoices] = useState([{
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
        title="COLUMNS"
        choices={ choices }
        selected={ selected }
        onChoicesChange={ setChoices }
        onSelectedChange={selected => setSelect(selected) }
    />
  </div>
}
