import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog/1" component={BlogPost1} />
      <Route path="/blog/2" component={BlogPost2} />
      <Route path="/blog/3" component={BlogPost3} />
      <Route path="/blog/4" component={BlogPost4} />
      <Route path="/blog/5" component={BlogPost5} />
      <Route path="/blog/6" component={BlogPost6} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTA: Sobre o Tema
// - Primeiro escolha um tema padrão de acordo com seu estilo de design (fundo escuro ou claro), depois altere a paleta de cores em index.css
//   para manter cores de primeiro plano/fundo consistentes em todos os componentes
// - Se deseja tornar o tema alternável, passe `switchable` para ThemeProvider e use o hook `useTheme`

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
