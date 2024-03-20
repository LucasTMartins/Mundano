import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define uma interface para as props do componente
interface ToolbarProps {
  className?: string; // Define className como opcional e do tipo string
}

const Toolbar: React.FC<ToolbarProps> = ({ className }) => {
  return (
    <div className={cn("flex h-full p-[7px] relative", className)}>
      <Tabs
        defaultValue="cenarios"
        className={`w-full h-full shadow-md bg-base 
        rounded-sm border-[1px] border-surface1 standard-font overflow-auto`}
      >
        <div className="flex h-full">
          <TabsList className="flex flex-col justify-start h-full w-[4rem] border-[1px] border-surface1 rounded-l-[0px]">
            <TabsTrigger value="cenarios" className="text-md">
              C
            </TabsTrigger>
            <TabsTrigger value="entidades" className="text-md">
              E
            </TabsTrigger>
            <TabsTrigger value="objetos" className="text-md">
              O
            </TabsTrigger>
          </TabsList>

          <div className="flex-1">
            <TabsContent value="cenarios"></TabsContent>
            <TabsContent value="entidades"></TabsContent>
            <TabsContent value="objetos"></TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Toolbar;
