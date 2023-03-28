import {ComponentMeta} from "@storybook/react"
import React, {useCallback, useState} from 'react';
import {OptionListDrag} from "./OptionListDrag"
import {Button, Popover} from "@shopify/polaris";
import {Columns3Minor} from "@shopify/polaris-icons";

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
      choices={choices}
      selected={selected}
      onChoicesChange={setChoices}
      onSelectedChange={selected => setSelect(selected)}
    />
  </div>
}

export function PopoverOptionListDrag() {
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
  const [popoverActive, setPopoverActive] = useState(true);
  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    // @ts-ignore
    <Button onClick={togglePopoverActive} icon={Columns3Minor}>
      Columns
    </Button>
  );

  return (
    <div>
      <div>
        <div>已选中：<code>{JSON.stringify(selected, null, 2)}</code></div>
        <div>顺序：
          <pre>{JSON.stringify(choices, null, 2)}</pre>
        </div>
      </div>

      <div style={{height: '250px', marginTop: '32px'}}>
        <Popover
          active={popoverActive}
          activator={activator}
          autofocusTarget="first-node"
          onClose={togglePopoverActive}
        >
          <OptionListDrag
            title="COLUMNS"
            choices={choices}
            selected={selected}
            onChoicesChange={setChoices}
            onSelectedChange={selected => setSelect(selected)}
          />
        </Popover>
      </div>
    </div>
  )
}
