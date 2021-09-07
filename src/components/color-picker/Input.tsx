import { Component, JSX } from "solid-js"

export type InputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  prefix?: string
}

export const Input: Component<InputProps> = props => {
  return (
    <div className="relative">
      {props.prefix && (
        <p className="absolute top-1.5 left-1 select-none text-xs text-cyan-700">
          {props.prefix}
        </p>
      )}
      <input
        className={
          "w-full outline-transparent relative appearance-none transition-all duration-200 border text-xs py-1 px-1 rounded-md bg-transparent leading-tight " +
          props.className
        }
        {...props}
      />
    </div>
  )
}
