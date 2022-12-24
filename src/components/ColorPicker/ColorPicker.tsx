import { ColorPicker as ShopifyColorPicker, HSBAColor, hsbToHex, Label, Popover, rgbToHsb, Stack, TextField, TextStyle } from "@shopify/polaris"
import { ColorPickerProps } from "@shopify/polaris/build/ts/latest/src/components/ColorPicker/ColorPicker"
import { uniqueId } from "lodash-es"
import React, { useCallback, useEffect, useState } from "react"

import styles from "./ColorStyle.module.scss"

export interface IProps {
  color: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  id?: string;
  onChange(color: string, id?: string): void;
  onClickActivator?(id?: string): void;
}


export function ColorPicker({ color, placeholder, label, id, onChange, onClickActivator, disabled }: IProps) {
  const [active, setActive] = useState<boolean>(false)

  const [hexColor, setHexColor] = useState<string>("")

  const [pickerColor, setPickerColor] = useState<ColorPickerProps['color']>({
    brightness: 1,
    hue: 120,
    saturation: 1,
  })

  /** 监听 color 值从外部修改 */
  useEffect(() => {
    const _color = color.toLocaleUpperCase().replace("#", "")

    if (_color === hexColor) {
      return
    }

    const { red, green, blue } = hexToRgb(`#${_color}`)

    if (isNaN(red) || isNaN(green) || isNaN(blue)) {
      return
    }

    setPickerColor(rgbToHsb({ blue, green, red }))
    setHexColor(_color)
  }, [color])

  const togglePopoverActive = useCallback(
      () => {
        if (!disabled) {
          setActive((popoverActive) => !popoverActive)
        }
      },
      [disabled],
  )

  const handleColorPickerChange = (HSBA: HSBAColor) => {
    setPickerColor(HSBA)
    const hex = hsbToHex(HSBA)

    const prefHex = hex.toLocaleUpperCase().replace("#", "")

    setHexColor(prefHex)

    onChange(prefHex, id)
  }


  const handleColorInputChange = (value: string) => {

    const prefValue = value.toLocaleUpperCase().replace("#", "")

    const { red, green, blue } = hexToRgb(prefValue)

    setHexColor(prefValue)

    if (isNaN(red) || isNaN(green) || isNaN(blue)) {
      return
    }

    setPickerColor(rgbToHsb({ blue, green, red }))


    onChange(prefValue, id)
  }





  const wrap = (
      <div
          className={styles.Activator}
          onClick={() => {
            togglePopoverActive()
            onClickActivator && onClickActivator(id)
          }}
          style={{
            backgroundColor: `#${hexColor}`,
            borderRadius: "var(--p-border-radius-1)",
            cursor: "pointer",
            display: "flex",
            position: "relative",
          }}
      />
  )

  const activator = label ? (
      <>
        <div style={{ marginBottom: "0.25rem" }}>
          <Label id={uniqueId("color-label-")}>
            {label}
          </Label>
        </div>
        {wrap}
      </>
  ) : wrap

  return (
      <Stack alignment="center"
             spacing="tight"
             wrap={false}
      >
        <Popover
            activator={activator}
            active={active}
            onClose={togglePopoverActive}
            preferInputActivator={false}
            preferredAlignment="left"
        >
          <div className={styles.ColorPickerPadding}>
            <ShopifyColorPicker
                allowAlpha={false}
                color={pickerColor}
                onChange={handleColorPickerChange}
            />
            <div className="mt-2">
              <Stack
                  spacing="tight"
                  wrap={false}
                  distribution="fill"
              >
                <div
                    className={styles.Activator}
                    style={{
                      backgroundColor: `#${hexColor}`,
                      borderRadius: "var(--p-border-radius-1)",
                      cursor: "pointer",
                      display: "flex",
                      height: "100%",
                      marginRight: "8px",
                      position: "relative"
                    }}
                />
                <TextField
                    prefix="#"
                    disabled={disabled}
                    autoComplete="off"
                    label={null}
                    value={hexColor}
                    onChange={handleColorInputChange}
                    placeholder={placeholder}
                />
              </Stack>
            </div>
          </div>
        </Popover>
        <Stack.Item fill>
          <TextStyle>{placeholder}</TextStyle>
        </Stack.Item>
      </Stack>

  )
}

/** 从 Polaris 源码中拷贝的，该函数没有被他们 export 出来，只好把源码弄过来了 */
function hexToRgb(color: string) {
  if (color.length === 4) {
    const repeatHex = (hex1: number, hex2: number) =>
        color.slice(hex1, hex2).repeat(2)
    const red = parseInt(repeatHex(1, 2), 16)
    const green = parseInt(repeatHex(2, 3), 16)
    const blue = parseInt(repeatHex(3, 4), 16)

    return { blue, green, red }
  }

  const red = parseInt(color.slice(1, 3), 16)
  const green = parseInt(color.slice(3, 5), 16)
  const blue = parseInt(color.slice(5, 7), 16)

  return { blue, green, red }
}
