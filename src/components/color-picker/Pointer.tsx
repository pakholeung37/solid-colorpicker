import { Component } from "solid-js"

export const Pointer: Component<{ x: number; y: number }> = props => {
  return (
    <div
      className="absolute w-1.5 h-1.5 rounded pointer-events-none"
      style={`
        left: ${props.x}px;
        top: ${props.y}px;
        transform: translate(-3px, -3px);
        box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
        rgba(0, 0, 0, 0.3) 0px 0px 1px 1px inset,
        rgba(0, 0, 0, 0.4) 0px 0px 2px 3px;`}
    ></div>
  )
}
