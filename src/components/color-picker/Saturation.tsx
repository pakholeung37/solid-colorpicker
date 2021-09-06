import { HSV } from "color-convert/conversions"
import { Component } from "solid-js"
import { Pointer } from "./Pointer"

const renderWindow = window

interface SaturationProps {
  onChange?: (hsv: HSV) => void
  hsv: HSV
}

export const Saturation: Component<SaturationProps> = ({ hsv }) => {
  const [h = 35] = hsv
  return (
    <div className="h-40 w-full relative overflow-hidden rounded-md border border-gray-500">
      <div
        className="w-full h-full absolute"
        style={`background: hsl(${h}, 100%, 50%)`}
      ></div>
      <div
        className="w-full h-full absolute"
        style="background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));"
      ></div>
      <div
        className="w-full h-full absolute"
        style="background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));"
      ></div>
      <Pointer x={30} y={30} />
    </div>
  )
}
