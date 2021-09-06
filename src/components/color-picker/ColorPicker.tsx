import { HSV } from "color-convert/conversions"
import { Component } from "solid-js"
import { Saturation } from "./Saturation"
import { Hue } from "./Hue"
import { Alpha } from "./Alpha"
import { CheckBoard } from "./CheckBoard"
import { InputField } from "./InputField"
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
  const [h, s, v] = hsv

  return (
    <div className="w-full space-y-1">
      <Saturation hsv={hsv} />
      <div className="flex h-6 w-full">
        <div className="flex flex-col justify-between h-6 w-full my-1">
          <Hue h={h} />
          <Alpha hsv={hsv} alpha={alpha} />
        </div>
        <div className="h-full ml-2 my-1">
          <CheckBoard hsv={hsv} alpha={alpha} />
        </div>
      </div>
      <InputField />
    </div>
  )
}
