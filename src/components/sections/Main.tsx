import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiGraph } from "react-icons/pi";
import { PiNotepad } from "react-icons/pi";
import { MdQuestionMark } from "react-icons/md";

// Define uma interface para as props do componente
interface ToolbarProps {
  className?: string; // Define className como opcional e do tipo string
}

const Toolbar: React.FC<ToolbarProps> = ({ className }) => {
  return (
    <div className={cn("flex h-full p-[7px] relative", className)}>
      <Tabs
        defaultValue="grafos"
        className={`w-full h-full shadow-md bg-base 
        rounded-sm border-[1px] border-surface1 standard-font overflow-auto`}
      >
        <div className="flex h-full">
          <TabsList className="flex flex-col justify-start h-full w-[4rem] border-[1px] border-surface1 rounded-l-[0px]">
            <TabsTrigger value="grafos" className="text-md">
              <PiGraph className="w-6 h-6" />
            </TabsTrigger>
            <TabsTrigger value="notas" className="text-md">
              <PiNotepad className="w-6 h-6" />
            </TabsTrigger>
            <TabsTrigger value="outros" className="text-md">
            <MdQuestionMark className="w-6 h-6" />
            </TabsTrigger>
          </TabsList>

          <div className="flex-1">
            <TabsContent value="grafos" className="h-full mt-0 pt-2">
              <h1 className="text-xl">Grafos aqui</h1>
            </TabsContent>
            <TabsContent value="notas" className="h-full mt-0 pt-2">
              <h1 className="text-xl">Notas aqui</h1>
            </TabsContent>
            <TabsContent value="outros" className="h-full mt-0 pt-2">
              <h1 className="text-xl">Outros aqui</h1>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Toolbar;
