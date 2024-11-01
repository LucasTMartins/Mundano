import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface InputPropertyProps {
  className?: string; // Define className como opcional e do tipo string
}

const InputProperty: React.FC<InputPropertyProps> = (
  { className }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className={cn(
        "flex py-[3.5px] px-[7px] relative standard-font",
        className
      )}
    >
      <Input 
      value={inputValue}
      onChange={handleChange}
      className={cn(`${inputValue ? "bg-transparent border-transparent" : ""}`)} />
      <h1 className="text-2xl text-text px-1 select-none">:</h1>
      <Input />
    </div>
  );
};

// Define uma interface para as props do componente
interface PropertiesProps {
  className?: string; // Define className como opcional e do tipo string
}

const Properties: React.FC<PropertiesProps> = ({ className }) => {
  const [inputs, setInputs] = useState<JSX.Element[]>([]);

  const adicionarInputCustomizado = () => {
    const novoInput = <InputProperty />;
    setInputs([...inputs, novoInput]);
  };

  return (
    <div
      className={cn(
        "flex py-[3.5px] pr-[7px] relative standard-font",
        className
      )}
    >
      <ScrollArea className="rounded-sm border-[1px] border-surface1 bg-base w-full h-full shadow-md">
        <div className="flex items-center justify-between px-5">
          <h2 className="text-lg text-text py-3 select-none">Propriedades</h2>
          <Button
            variant={"ghost"}
            size={"mini_icon"}
            className="text-3xl select-none"
            onClick={adicionarInputCustomizado}
          >
            +
          </Button>
        </div>
        <div id="itens_properties">{inputs}</div>
      </ScrollArea>
    </div>
  );
};

export default Properties;
