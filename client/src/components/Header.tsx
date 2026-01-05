import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

// Adicionar IDs às seções para navegação
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#about" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "#blog" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200 py-3"
          : "bg-white border-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-2 rounded-lg group-hover:scale-105 transition-transform">
            <Wrench className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl leading-none text-gray-900">
              Cláudio
            </span>
            <span className="font-heading font-medium text-xs text-gray-500 tracking-wider uppercase">
              Pequenos Reparos
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="rounded-full font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            asChild
          >
            <a href="#contact">Solicitar Orçamento</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-in slide-in-from-top-5">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-primary py-2 border-b border-gray-100 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full rounded-full font-bold mt-2" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Solicitar Orçamento
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
