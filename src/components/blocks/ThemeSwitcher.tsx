import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="focus:border rounded-sm select-none items-center px-3 py-1.5 text-sm 
            text-text standard-font outline-none rounded-sm focus:border"
        >
          <MdOutlineWbSunny className="h-6 w-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Claro
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Escuro
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            Sistema
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSwitcher;
