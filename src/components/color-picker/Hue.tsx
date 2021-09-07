import { Component, createSignal } from "solid-js"
import { Pointer } from "./Pointer"
import { calculatePosition } from "./utils"

const renderWindow = window
export interface HuePorps {
  h: number
  onChange?: (hue: number) => void
}

export const Hue: Component<HuePorps> = props => {
  let container: HTMLDivElement
  let rectCache: DOMRect | undefined

  const [x, setX] = createSignal(3)

  const handleChange = (e: MouseEvent) => {
    if (rectCache) {
      const result = calculatePosition(e, rectCache)
      const hue = Math.round((result.left / rectCache.width) * 360)
      const width = rectCache.width
      setX((props.h / 360) * (width - 9) + 3)
      props.onChange && props.onChange(hue)
    }
  }

  const handleClick = (e: MouseEvent) => {
    handleChange(e)
  }

  const handleMouseUp = () => {
    renderWindow.removeEventListener("mousemove", handleChange)
    renderWindow.removeEventListener("mouseup", handleMouseUp)
  }

  const handleMouseDown = () => {
    rectCache = container?.getClientRects()[0]
    renderWindow.addEventListener("mousemove", handleChange)
    renderWindow.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <div
      ref={container}
      className="rounded-full h-2.5 w-full border border-gray-500 relative"
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <div
        className="w-full h-full rounded-full overflow-hidden"
        style="background: linear-gradient(to right,
          #f00 0%, #ff0 17%,
          #0f0 33%,
          #0ff 50%,
          #00f 67%,
          #f0f 83%,
          #f00 100%);"
      ></div>
      <Pointer x={x()} y={3.5} />
    </div>
  )
}
