import { HSV, RGB } from "color-convert/conversions"
import { Component, createSignal } from "solid-js"
import { Saturation } from "./Saturation"
import { Hue } from "./Hue"
import { Alpha } from "./Alpha"
import { CheckBoard } from "./CheckBoard"
import { InputField } from "./InputField"
import { isUndefined } from "lodash"
import { rgbToHsv } from "./utils"
export interface ColorPickerProps {
  onChange?: (hsv: HSV, alpha: number) => void
  // value给定时，该组件为可受控组件
  hsv: HSV
  alpha?: number
}

export const ColorPicker: Component<ColorPickerProps> = ({
  onChange,
  alpha: defaultAlpha = 100,
  hsv: defaultHSV,
}) => {
  const [hsv, setHSV] = createSignal(defaultHSV)
  const [alpha, setAlpha] = createSignal(defaultAlpha)

  const handleChange = (_hsv: HSV | undefined, _alpha: number | undefined) => {
    console.log(_hsv, _alpha)
    _hsv && setHSV(_hsv)
    _alpha && setAlpha(_alpha)
    onChange &&
      onChange(
        isUndefined(_hsv) ? hsv() : _hsv,
        isUndefined(_alpha) ? alpha() : _alpha,
      )
  }
  const handleSaturationChange = (hsv: HSV) => handleChange(hsv, undefined)
  const handleHueChange = (hue: number) => {
    const [, s, v] = hsv()
    handleChange([hue, s, v], undefined)
  }
  const handleAlphaChange = (alpha: number) => handleChange(undefined, alpha)
  const handleInputFieldChange = (rgb?: RGB, alpha?: number) =>
    handleChange(rgb ? rgbToHsv(rgb) : undefined, alpha)

  return (
    <div className="w-full space-y-2">
      <Saturation hsv={hsv()} onChange={handleSaturationChange} />
      <div className="flex h-6 w-full">
        <div className="flex flex-col justify-between h-6 w-full">
          <Hue h={hsv()[0]} onChange={handleHueChange} />
          <Alpha hsv={hsv()} alpha={alpha()} onChange={handleAlphaChange} />
        </div>
        <div className="h-full ml-2">
          <CheckBoard hsv={hsv()} alpha={alpha()} />
        </div>
      </div>
      <InputField
        hsv={hsv()}
        alpha={alpha()}
        onChange={handleInputFieldChange}
      />
    </div>
  )
}
