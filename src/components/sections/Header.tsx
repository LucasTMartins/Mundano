import ThemeSwitcher from "@/components/blocks/ThemeSwitcher";
import MenubarHome from "@/components/blocks/MenubarHome";

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
        <MenubarHome />
      </div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
