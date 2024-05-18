import * as React from "react";
import { useState, ChangeEvent } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputAttributeProperty = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onChange, value, ...props }, ref) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      console.log(inputValue);      
    };

    return (
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        className={cn(
          `flex h-10 w-full rounded-[1rem] border border-surface2 bg-surface0 
          px-3 py-2 text-sm ring-mauve file:border-0 file:bg-transparent
          file:text-sm file:standard-font placeholder:text-text placeholder:opacity-50 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
          disabled:opacity-50 ${inputValue ? 'bg-transparent border-transparent' : ''}`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
InputAttributeProperty.displayName = "Input";

export { InputAttributeProperty };
