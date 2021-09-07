import { HSV } from "color-convert/conversions"
import { Component, createMemo, createSignal } from "solid-js"
import { Pointer } from "./Pointer"
import {
  calculatePosition,
  compileColor,
  hsvToHsl,
  transparentBgUrl,
} from "./utils"

const renderWindow = window
export interface AlphaPorps {
  hsv: HSV
  alpha: number
  onChange?: (hue: number) => void
}

export const Alpha: Component<AlphaPorps> = props => {
  let container: HTMLDivElement
  let rectCache: DOMRect | undefined

  const [x, setX] = createSignal(3)

  const handleChange = (e: MouseEvent) => {
    if (rectCache) {
      const result = calculatePosition(e, rectCache)
      const alpha = Math.round((result.left / rectCache.width) * 100)
      const width = rectCache.width
      setX((props.alpha / 100) * (width - 6) + 3)
      props.onChange && props.onChange(alpha)
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

  const hsl = createMemo(() => hsvToHsl(props.hsv))
  return (
    <div
      ref={container}
      className="rounded-full h-2.5 w-full border border-gray-500 relative"
      style={`background: url("${transparentBgUrl}") left center`}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <div
        className="w-full h-full rounded-full overflow-hidden"
        style={`background: linear-gradient(
              to right,
              ${compileColor.hsl([...hsl(), 0])},
              ${compileColor.hsl([...hsl(), 1])}
            )`}
      ></div>
      <Pointer x={x()} y={3.5} />
    </div>
  )
}
