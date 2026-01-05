import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Serviço rápido, limpo e de confiança. O Cláudio resolveu um problema elétrico que outros não conseguiram. Recomendo!",
    author: "Maria A.",
    role: "Cliente Residencial",
    rating: 5
  },
  {
    text: "Chamou, chegou, resolveu! Excelente atendimento. Preço justo e muita educação. Virei cliente fiel.",
    author: "João P.",
    role: "Proprietário de Loja",
    rating: 5
  },
  {
    text: "Adorei o cuidado com a limpeza após o serviço. A montagem dos móveis ficou perfeita. Profissional nota 10.",
    author: "Ana S.",
    role: "Cliente Residencial",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-0 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-200" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-8 leading-relaxed">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{item.author}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
