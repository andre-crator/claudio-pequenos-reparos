import { ArrowRight, Lightbulb, Wrench, Droplet } from "lucide-react";

// Lista de artigos do blog com informações de cada post
const blogPosts = [
  {
    icon: Droplet,
    title: "Como Trocar uma Resistência de Chuveiro",
    excerpt: "Aprenda o passo a passo para trocar a resistência do seu chuveiro de forma segura e economizar na manutenção.",
    category: "Hidráulica",
    readTime: "5 min"
  },
  {
    icon: Lightbulb,
    title: "Dicas para Economizar Energia em Casa",
    excerpt: "Pequenas mudanças que fazem grande diferença na sua conta de luz. Confira 7 dicas práticas e eficientes.",
    category: "Elétrica",
    readTime: "6 min"
  },
  {
    icon: Wrench,
    title: "Manutenção Preventiva: Por Que Não Esperar Quebrar",
    excerpt: "Entenda por que investir em manutenção preventiva economiza dinheiro e evita problemas maiores no futuro.",
    category: "Manutenção",
    readTime: "7 min"
  },
  {
    icon: Droplet,
    title: "Identificando Vazamentos Ocultos em Casa",
    excerpt: "Sinais que indicam vazamentos escondidos e como localizá-los antes que causem danos estruturais.",
    category: "Hidráulica",
    readTime: "5 min"
  },
  {
    icon: Lightbulb,
    title: "Segurança Elétrica: O Que Você Precisa Saber",
    excerpt: "Dicas essenciais para manter sua instalação elétrica segura e evitar acidentes domésticos.",
    category: "Elétrica",
    readTime: "8 min"
  },
  {
    icon: Wrench,
    title: "Quando Chamar um Profissional vs. Fazer Sozinho",
    excerpt: "Saiba quais reparos você pode fazer em casa e quando é melhor chamar um especialista.",
    category: "Geral",
    readTime: "6 min"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Dicas e Artigos
          </h2>
          <p className="text-gray-600 text-lg">
            Aprenda dicas práticas de manutenção residencial e saiba quando chamar um profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                  <post.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wide bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-xs text-gray-500 font-medium">
                  ⏱️ {post.readTime} de leitura
                </span>
              <a
                href={`/blog/${index + 1}`}
                className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Ler mais <ArrowRight className="w-4 h-4" />
              </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Quer mais dicas? Siga nossas redes sociais para conteúdo exclusivo!
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="px-6 py-3 rounded-full border-2 border-gray-300 hover:border-primary hover:text-primary font-bold transition-colors">
              Facebook
            </a>
            <a href="#" className="px-6 py-3 rounded-full border-2 border-gray-300 hover:border-primary hover:text-primary font-bold transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
