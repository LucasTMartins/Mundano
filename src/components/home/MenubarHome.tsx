import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

const MenubarHome = () => {
  return (
    <Menubar className="ml-[1rem]">
      {/* ARQUIVO */}
      <MenubarMenu>
        <MenubarTrigger className="hover:text-mauve">Arquivo</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Nova Aba <MenubarShortcut>Ctrl+T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Nova Janela <MenubarShortcut>Ctrl+N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Novo Projeto</MenubarItem>
          <MenubarItem>
            Abrir Projeto <MenubarShortcut>Ctrl+O</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Salvar Projeto <MenubarShortcut>Ctrl+S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Salvar Como... <MenubarShortcut>Ctrl+Shift+S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Exportar Projeto</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Fechar Aba <MenubarShortcut>Ctrl+W</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Fechar Janela <MenubarShortcut>Alt+F4</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {/* EDITAR */}
      <MenubarMenu>
        <MenubarTrigger className="hover:text-mauve">Editar</MenubarTrigger>
        <MenubarContent>
          <MenubarItem disabled>
            Desfazer <MenubarShortcut>Ctrl+Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Refazer <MenubarShortcut>Ctrl+Shift+Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cortar <MenubarShortcut>Ctrl+X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Copiar <MenubarShortcut>Ctrl+C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Colar <MenubarShortcut>Ctrl+V</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Excluir <MenubarShortcut>Del</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Selecionar Tudo <MenubarShortcut>Ctrl+A</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Procurar <MenubarShortcut>Ctrl+F</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Configurações</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {/* EXIBIR */}
      <MenubarMenu>
        <MenubarTrigger className="hover:text-mauve">Exibir</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Tela Cheia <MenubarShortcut>F11</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Zoom+ <MenubarShortcut>Ctrl+=</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Zoom- <MenubarShortcut>Ctrl+-</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Reiniciar Zoom <MenubarShortcut>Ctrl+0</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Ferramentas de RPG</MenubarItem>
          <MenubarItem>Linha do Tempo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {/* AJUDA */}
      <MenubarMenu>
        <MenubarTrigger className="hover:text-mauve">Ajuda</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Obter Ajuda</MenubarItem>
          <MenubarItem>Tutoriais</MenubarItem>
          <MenubarItem>Guia de Atalhos</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Repositório no Github</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Sobre</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenubarHome;
