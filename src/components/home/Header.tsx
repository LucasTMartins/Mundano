import "./Header.css"

const Header = () => {
  return (
    <header
      className={`bg-base shadow-md rounded-b-sm h-[var(--header-height)] px-4 border-[1px] 
      border-surface1 flex items-center justify-between`}
    >
      <div className="flex items-center">
        <img src="src/assets/Logo.svg" alt="Logo" className="h-8 pr-2" />
        <a href="/" className="logo-font text-text hover:text-mauve transition">
          Mundano
        </a>
      </div>
      <nav>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="/" className="text-text hover:text-mauve transition">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-text hover:text-mauve transition">
              Sobre
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-text hover:text-mauve transition"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
