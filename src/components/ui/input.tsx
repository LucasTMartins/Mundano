import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full rounded-[1rem] border border-surface2 bg-surface0 
          px-3 py-2 text-sm ring-mauve file:border-0 file:bg-transparent 
          file:text-sm file:standard-font placeholder:text-text placeholder:opacity-50 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
          disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
