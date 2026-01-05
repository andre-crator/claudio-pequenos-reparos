import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6 relative z-10">
                Quem somos
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 relative z-10">
                <p>
                  Há mais de <span className="font-bold text-gray-900">10 anos</span> cuidando de lares com dedicação e qualidade.
                </p>
                <p>
                  A <span className="font-bold text-primary">Cláudio Pequenos Reparos</span> oferece soluções em manutenção residencial, 
                  consertos e pequenos reparos, com foco em confiança e atenção aos detalhes.
                </p>
                <p>
                  Nosso compromisso é garantir o bem-estar e a segurança da sua casa, tratando cada serviço 
                  como se fosse em nosso próprio lar.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {[
                  "Profissionais verificados",
                  "Orçamento transparente",
                  "Pontualidade garantida",
                  "Limpeza pós-obra"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 border-8 border-white bg-gray-200">
               {/* Placeholder for About Image - could be a picture of Claudio or generic handyman */}
               <img 
                src="/images/hero-bg.jpg" 
                alt="Profissional trabalhando" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
              <p className="font-heading font-bold text-4xl text-primary mb-1">10+</p>
              <p className="text-gray-600 font-medium">Anos de experiência no mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
