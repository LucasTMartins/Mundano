import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Entities = () => {
  return (
    <div className="flex justify-end">
      <Tabs defaultValue="cenarios" className="w-[400px] bg-base">
        <TabsList>
          <TabsTrigger value="cenarios" className="text-font">Cenários</TabsTrigger>
          <TabsTrigger value="entidades">Entidades</TabsTrigger>
          <TabsTrigger value="objetos">Objetos</TabsTrigger>
        </TabsList>
        <TabsContent value="cenarios">Aqui ficarão os cenários</TabsContent>
        <TabsContent value="entidades">Aqui ficarão os entidades</TabsContent>
        <TabsContent value="objetos">Aqui ficarão os objetos</TabsContent>
      </Tabs>
    </div>
  );
};

export default Entities;
