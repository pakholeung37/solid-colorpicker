import { Component } from "solid-js"
import { Pointer } from "./Pointer"

export interface HuePorps {
  h: number
  onChange?: (hue: number) => void
}

export const Hue: Component<HuePorps> = ({ h = 50 }) => {
  return (
    <div
      className="rounded-full h-2.5 w-full border border-gray-500 relative overflow-hidden"
      style="background: linear-gradient(to right,
    #f00 0%, #ff0 17%,
    #0f0 33%,
    #0ff 50%,
    #00f 67%,
    #f0f 83%,
    #f00 100%);"
    >
      <Pointer x={5} y={3.5} />
    </div>
  )
}
