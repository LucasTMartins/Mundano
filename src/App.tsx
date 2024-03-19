import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/home/Header";
import Toolbar  from "./components/home/Toolbar";
import Entities from "@/components/home/Entities";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Header></Header>
      {/* <Toolbar></Toolbar> */}
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={50}>Two</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="h-screen mt-[-2.5rem]" minSize={20} defaultSize={20}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel className="mt-[2.5rem]" minSize={35}>
              <Entities className="pt-[7px] h-full"></Entities>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel minSize={35}>
              <Entities className="pb-[7px] h-full"></Entities>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
      {/* <Entities></Entities> */}
    </ThemeProvider>
  );
}

export default App;
