import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Button variant="default">Button</Button>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <div>
            <h1>Vite + React</h1>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <Button variant="default">Button</Button>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ThemeProvider>
  );
}

export default App;
