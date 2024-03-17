import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/home/Header";
import Entities from "@/components/home/Entities";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Header></Header>
      {/* <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>One</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Two</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel>One</ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <Entities></Entities>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup> */}
      <Entities></Entities>
    </ThemeProvider>
  );
}

export default App;
