import "@/components/pages/HomePage.css";
import { ThemeProvider } from "@/components/theme-provider";
import Main from "@/components/sections/Main";
import Header from "@/components/sections/Header";
import Properties from "@/components/sections/Properties";
import Entities from "@/components/sections/Entities";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function HomePage() {
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

export default HomePage;