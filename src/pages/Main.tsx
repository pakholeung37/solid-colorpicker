import { Component } from "solid-js"
import { ColorPicker } from "../components/color-picker/ColorPicker"

export const Main: Component = () => {
  return (
    <div className="w-52">
      <ColorPicker hsv={[20, 100, 100]} alpha={0} />
    </div>
  )
}
