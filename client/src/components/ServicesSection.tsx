import { Wrench, PaintRoller, Key, Lightbulb, Hammer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Instalações Elétricas e Hidráulicas",
    description: "Reparos em tomadas, chuveiros, torneiras e vazamentos com segurança total.",
    image: "/images/service-plumbing.jpg"
  },
  {
    icon: PaintRoller,
    title: "Pinturas e Retoques",
    description: "Renovação de ambientes com pintura limpa, acabamento fino e sem sujeira.",
    image: "/images/service-painting.jpg"
  },
  {
    icon: Key,
    title: "Fechaduras e Portas",
    description: "Troca de fechaduras, ajustes em portas emperradas e manutenção de janelas.",
    image: null // Fallback to icon only if no image
  },
  {
    icon: Lightbulb,
    title: "Manutenção Preventiva",
    description: "Pequenas reformas e ajustes para evitar problemas maiores no futuro.",
    image: "/images/service-electrical.jpg"
  },
  {
    icon: Hammer,
    title: "Montagem de Móveis",
    description: "Montagem e desmontagem de móveis com cuidado para não danificar as peças.",
    image: "/images/service-furniture.jpg"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Nossos principais serviços
          </h2>
          <p className="text-gray-600 text-lg">
            Resolvemos os problemas da sua casa com agilidade e técnica. 
            Confira o que podemos fazer por você hoje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <service.icon className="w-16 h-16 text-gray-300" />
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-md">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Call to Action Card */}
          <div className="bg-primary rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white shadow-lg transform hover:scale-[1.02] transition-transform">
            <div className="bg-white/20 p-4 rounded-full mb-6">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-4">
              Precisa de outro reparo?
            </h3>
            <p className="text-white/90 mb-8 leading-relaxed">
              Entre em contato e descreva o que você precisa. Encontramos a solução ideal para o seu problema.
            </p>
            <Button variant="secondary" className="rounded-full font-bold w-full" asChild>
              <a href="#contact">Fale Conosco</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
