import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Main from "@/components/home/Main";
import Header from "@/components/home/Header";
import Properties from "@/components/home/Properties";
import Entities from "@/components/home/Entities";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Header />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={54}>
          <Main />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel
          className="h-screen mt-[-2.5rem]"
          minSize={20}
          defaultSize={20}
        >
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel className="mt-[2.5rem]" minSize={35}>
              <Properties className="pt-[7px] h-full" />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel minSize={35}>
              <Entities className="pb-[7px] h-full" />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ThemeProvider>
  );
}

export default App;
