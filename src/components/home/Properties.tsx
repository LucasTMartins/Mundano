import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import InputProperty from "./InputProperty";

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

  // Função para capturar todas as linhas de entrada
  // const capturarLinhasDeEntrada = () => {
  //   const linhasDeEntrada: JSX.Element[] = [];
  //   // Iterar sobre cada elemento na lista inputs
  //   inputs.forEach((input, index) => {
  //     // Adicionar a linha de entrada atual à lista de linhas de entrada
  //     linhasDeEntrada.push(
  //       <div key={index} className="linha-de-entrada">
  //         {input}
  //       </div>
  //     );
  //   });
  //   return linhasDeEntrada;
  // };

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
        {/* <div id="itens_properties">{capturarLinhasDeEntrada()}</div> */}
      </ScrollArea>
    </div>
  );
};

export default Properties;
