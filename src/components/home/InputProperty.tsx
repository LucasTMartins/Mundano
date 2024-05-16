import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { InputAttributeProperty } from "./InputAttributeProperty";

interface InputPropertyProps {
  className?: string; // Define className como opcional e do tipo string
}

const InputProperty: React.FC<InputPropertyProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex py-[3.5px] px-[7px] relative standard-font",
        className
      )}
    >
      <InputAttributeProperty /> 
      <h1 className="text-2xl text-text px-1 select-none">:</h1>
      <Input />
    </div>
  );
};

export default InputProperty;
