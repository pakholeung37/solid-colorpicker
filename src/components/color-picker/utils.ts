import { HSV, RGB, HEX, HSL } from "color-convert/conversions"
import { rgb, hsv, hex, hsl } from "color-convert"
import { get, to } from "color-string"

export function hsvToRgb(color: HSV): RGB {
  return hsv.rgb(color)
}

export function rgbToHsv(color: RGB): HSV {
  return rgb.hsv.raw(color)
}

export function rgbToHex(color: RGB): string {
  return rgb.hex(color)
}

export function hexToRgb(color: HEX): RGB {
  return hex.rgb(color)
}

export function hsvToHsl(color: HSV): HSL {
  return hsv.hsl(color)
}

export function hslToHsv(color: HSL): HSV {
  return hsl.hsv(color)
}

export function isHex(color: string) {
  return /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(color)
}

export const transparentBgUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg=="

export * from "color-convert/conversions"

export const parseColor = get
export const compileColor = to

export const calculatePosition = (e: MouseEvent, container: DOMRect) => {
  const { width: containerWidth, height: containerHeight } = container
  const x = e.pageX
  const y = e.pageY
  let left = x - (container.left + window.pageXOffset)
  let top = y - (container.top + window.pageYOffset)

  if (left < 0) {
    left = 0
  } else if (left > containerWidth) {
    left = containerWidth
  }

  if (top < 0) {
    top = 0
  } else if (top > containerHeight) {
    top = containerHeight
  }

  return { left, top }
}
