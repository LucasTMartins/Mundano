import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Define uma interface para as props do componente
interface EntitiesProps {
  className?: string; // Define className como opcional e do tipo string
}

const Entities : React.FC<EntitiesProps> = ({ className }) => {
  return (
    <div className={cn("flex py-[3.5px] pr-[7px] relative", className)}>
      <Tabs
        defaultValue="cenarios"
        className={`w-full h-full shadow-md pt-3 bg-base 
        rounded-sm border-[1px] border-surface1 standard-font overflow-auto`}
      >
        <TabsList>
          <TabsTrigger value="cenarios" className="text-md">
            Cenários
          </TabsTrigger>
          <TabsTrigger value="entidades" className="text-md">
            Entidades
          </TabsTrigger>
          <TabsTrigger value="objetos" className="text-md">
            Objetos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="cenarios">
          Aqui ficarão os cenários
        </TabsContent>
        <TabsContent value="entidades">
          Aqui ficarão as entidades
        </TabsContent>
        <TabsContent value="objetos">
          Aqui ficarão os objetos
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Entities;
