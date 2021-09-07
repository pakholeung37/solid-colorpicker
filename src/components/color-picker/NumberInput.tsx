import { Component } from "solid-js"
import { Input, InputProps } from "./Input"

export type NumberInputProps = InputProps
export const NumberInput: Component<NumberInputProps> = props => {
  return <Input {...props} />
}
