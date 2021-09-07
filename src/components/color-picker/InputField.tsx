import { hsv } from "color-convert"
import { RGB } from "color-convert/conversions"
import { Component } from "solid-js"
import { Input } from "./Input"
import { NumberInput } from "./NumberInput"
import { hsvToRgb, rgbToHex } from "./utils"

export interface InputFieldProps {
  hsv: RGB
  alpha: number
  onChange?: (rgb?: RGB, alpha?: number) => void
}

export const InputField: Component<InputFieldProps> = ({ hsv, alpha }) => {
  const rgb = hsvToRgb(hsv)
  const hex = rgbToHex(rgb)
  const [r, g, b] = rgb
  return (
    <div className="flex w-full space-x-1">
      <div className="flex flex-col w-16 flex-shrink-0 justify-center items-center">
        <Input className="pl-3" prefix="#" value={hex} />
        <Title>Hex</Title>
      </div>
      <div className="flex flex-col justify-center items-center">
        <NumberInput value={r} />
        <Title>R</Title>
      </div>
      <div className="flex flex-col justify-center items-center">
        <NumberInput value={g} />
        <Title>G</Title>
      </div>
      <div className="flex flex-col justify-center items-center">
        <NumberInput value={b} />
        <Title>B</Title>
      </div>
      <div className="flex flex-col justify-center items-center">
        <NumberInput value={alpha} />
        <Title>Alpha</Title>
      </div>
    </div>
  )
}

const Title: Component = ({ children }) => {
  return <p className="text-xs mt-1 select-none">{children}</p>
}
