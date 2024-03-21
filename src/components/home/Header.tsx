import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header
      className={`bg-base shadow-md rounded-b-sm h-[2.5rem] px-4 border-[1px] 
      border-surface1 flex items-center justify-between`}
    >
      <div className="flex items-center h-full">
        <img src="src/assets/Logo.svg" alt="Logo" className="h-8 pr-2" />
        <a
          href="/"
          className="logo-font text-text hover:text-mauve transition select-none cursor-default"
        >
          Mundano
        </a>
        <Menubar className="ml-[1rem]">
          <MenubarMenu>
            <MenubarTrigger className="hover:text-mauve">
              Arquivos
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>Ctrl+T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>Ctrl+N</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hover:text-mauve">Editar</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
