import { RGB } from "color-convert/conversions"
import { Component, createMemo } from "solid-js"
import { Input } from "./Input"
import { NumberInput } from "./NumberInput"
import { hsvToRgb, rgbToHex } from "./utils"

export interface InputFieldProps {
  hsv: RGB
  alpha: number
  onChange?: (rgb?: RGB, alpha?: number) => void
}

export const InputField: Component<InputFieldProps> = props => {
  const rgb = createMemo(() => hsvToRgb(props.hsv))
  const hex = createMemo(() => rgbToHex(props.hsv))

  return (
    <div className="flex w-full space-x-1">
      <div className="flex flex-col w-16 flex-shrink-0 justify-center items-center">
        <Input className="pl-3" prefix="#" value={hex()} />
        <Title>Hex</Title>
      </div>
      <div className="flex flex-col justify-center items-center">
        <NumberInput value={rgb()[0]} />
        <Title>R</Title>
      </div>
      <div className="flex flex-col justify-center items-center">
        <NumberInput value={rgb()[1]} />
        <Title>G</Title>
      </div>
      <div className="flex flex-col justify-center items-center">
        <NumberInput value={rgb()[2]} />
        <Title>B</Title>
      </div>
      <div className="flex flex-col justify-center items-center">
        <NumberInput value={props.alpha} />
        <Title>Alpha</Title>
      </div>
    </div>
  )
}

const Title: Component = ({ children }) => {
  return <p className="text-xs mt-1 select-none">{children}</p>
}
