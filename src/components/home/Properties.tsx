import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

// Define uma interface para as props do componente
interface PropertiesProps {
  className?: string; // Define className como opcional e do tipo string
}

const Toolbar : React.FC<PropertiesProps> = ({ className }) => {
  return (
    <div className={cn("flex py-[3.5px] pr-[7px] justify-center relative standard-font", className)}>
      <ScrollArea className="rounded-sm border-[1px] border-surface1 bg-base w-full h-full shadow-md overflow-auto">
        <h2 className="text-lg text-text py-3">Propriedades</h2>
        <div id="itens_properties"></div>
        <Button variant={"outline"} size={"icon"} className="text-3xl">+</Button>
      </ScrollArea>
    </div>
  );
};

export default Toolbar;