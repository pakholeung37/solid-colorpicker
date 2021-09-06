import { HSV, RGB } from "color-convert/conversions"
import { Component } from "solid-js"

export interface ColorPickerProps {
  onChange?: (hsv: HSV, alpha: number) => void
  // value给定时，该组件为可受控组件
  hsv: HSV
  alpha?: number
}

export const ColorPicker: Component<ColorPickerProps> = ({
  onChange,
  alpha = 100,
  hsv,
}) => {
  return <div></div>
}
