import { cn } from "@/lib/utils";

// Define uma interface para as props do componente
interface ToolbarProps {
  className?: string; // Define className como opcional e do tipo string
}

const Toolbar : React.FC<ToolbarProps> = ({ className }) => {
  return (
    <div className={cn("flex py-[7px] pl-[7px] relative w-full h-full shadow-md pt-[5px] bg-base rounded-sm border-[1px] border-surface1", className)}>
      
    </div>
  );
};

export default Toolbar;
