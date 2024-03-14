import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button"

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Button variant="default">Button</Button>
      <h1>Vite + React</h1>
    </ThemeProvider>
  );
}

export default App;
