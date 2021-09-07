import { HSV } from "color-convert/conversions"
import { Component } from "solid-js"
import { Pointer } from "./Pointer"
import { compileColor, hsvToHsl, transparentBgUrl } from "./utils"

export interface AlphaPorps {
  hsv: HSV
  alpha: number
  onChange?: (hue: number) => void
}

export const Alpha: Component<AlphaPorps> = ({ hsv }) => {
  const hsl = hsvToHsl(hsv)
  return (
    <div
      className="rounded-full h-2.5 w-full border border-gray-500 relative"
      style={`background: url("${transparentBgUrl}") left center`}
    >
      <div
        className="w-full h-full rounded-full overflow-hidden"
        style={`background: linear-gradient(
              to right,
              ${compileColor.hsl([...hsl, 0])},
              ${compileColor.hsl([...hsl, 1])}
            )`}
      ></div>
      <Pointer x={5} y={3.5} />
    </div>
  )
}
