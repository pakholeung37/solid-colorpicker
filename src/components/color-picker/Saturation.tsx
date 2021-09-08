import { HSV } from "color-convert/conversions"
import {
  Component,
  createEffect,
  createRenderEffect,
  createSignal,
} from "solid-js"
import { Pointer } from "./Pointer"
import { calculatePosition } from "./utils"

const renderWindow = window

interface SaturationProps {
  onChange?: (hsv: HSV) => void
  hsv: HSV
}

export const Saturation: Component<SaturationProps> = props => {
  let container: HTMLDivElement
  let rectCache: DOMRect | undefined

  const [x, setX] = createSignal(0)
  const [y, setY] = createSignal(0)

  const setPosition = () => {
    if (rectCache) {
      const [, s, v] = props.hsv
      const width = rectCache.width
      const height = rectCache.height
      const x = (s / 100) * width
      const y = height - (v / 100) * height
      setX(x)
      setY(y)
    }
  }

  createEffect(() => {
    if (!rectCache) {
      rectCache = container?.getClientRects()[0]
    }
    setPosition()
  })

  const handleChange = (e: MouseEvent) => {
    if (rectCache) {
      const result = calculatePosition(e, rectCache)
      const { width: containerWidth, height: containerHeight } = rectCache
      const [h] = props.hsv
      const _s = (result.left / containerWidth) * 100
      const _v = (1 - result.top / containerHeight) * 100
      props.onChange && props.onChange([h, _s, _v])
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
      className="h-38 w-full relative overflow-hidden rounded-md border border-gray-500"
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <div
        className="w-full h-full absolute"
        style={`background: hsl(${props.hsv[0]}, 100%, 50%)`}
      ></div>
      <div
        className="w-full h-full absolute"
        style="background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));"
      ></div>
      <div
        className="w-full h-full absolute"
        style="background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));"
      ></div>
      <Pointer x={x()} y={y()} />
    </div>
  )
}
