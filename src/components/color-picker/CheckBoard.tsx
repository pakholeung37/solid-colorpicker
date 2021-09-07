import { HSV } from "color-convert/conversions"
import { Component } from "solid-js"
import { compileColor, hsvToHsl, transparentBgUrl } from "./utils"

export interface CheckBoardProps {
  hsv: HSV
  alpha: number
}

export const CheckBoard: Component<CheckBoardProps> = props => {
  return (
    <div
      className="w-6 h-6 rounded-full overflow-hidden"
      style={`background: url("${transparentBgUrl}");
        box-shadow: 0 0 0px 1px rgba(0,0,0, 0.4);
      `}
    >
      <div
        className="h-full w-full"
        style={`background: ${compileColor.hsl([
          ...hsvToHsl(props.hsv),
          props.alpha / 100,
        ])}`}
      ></div>
    </div>
  )
}
