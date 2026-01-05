import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 relative z-10 animate-in slide-in-from-left duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-primary text-xs font-bold uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Disponível para atendimento imediato
          </div>
          
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
            Cuidando da sua casa, <br />
            <span className="text-primary">do seu bem-estar!</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Soluções rápidas, confiáveis e com preço justo para o seu lar. 
            De pequenos reparos a manutenções preventivas, conte com o Cláudio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full font-bold text-base px-8 h-12 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" asChild>
              <a href="#contact">
                Fazer orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="rounded-full font-bold text-base px-8 h-12 border-2 hover:bg-gray-100" asChild>
              <a href="https://wa.me/5524988361194?text=Ol%C3%A1%20Cl%C3%A1udio%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4 text-green-600" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="pt-4 flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-400">
                  User
                </div>
              ))}
            </div>
            <p>Mais de <span className="text-gray-900 font-bold">500+</span> clientes satisfeitos</p>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative lg:h-[600px] w-full animate-in slide-in-from-right duration-1000 fade-in">
          <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform rotate-3 scale-95 z-0"></div>
          <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10">
            <img 
              src="/images/hero-bg.jpg" 
              alt="Sala de estar moderna e limpa representando o cuidado com o lar" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs animate-in zoom-in delay-500 duration-500">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Garantia de Qualidade</p>
                  <p className="text-xs text-gray-500 mt-1">Serviço limpo e organizado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
