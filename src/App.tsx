import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
// import { Button } from "@/components/ui/button";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
import Header from "@/components/home/Header";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Header></Header>
      <div className="flex justify-center w-screen pt-24">
        <img src="src/assets/Logo.svg" alt="Logo" className="h-96" />
      </div>
      <div className="flex justify-center w-screen">
        <a href="/" className="custom-font-class2 text-text hover:text-mauve transition">Mundano</a>
      </div>
    </ThemeProvider>
  );
}

export default App;
