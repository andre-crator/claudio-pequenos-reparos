import { ArrowLeft, Clock, User, Zap } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function BlogPost2() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-32 pb-16">
        <article className="container max-w-3xl">
          {/* Back Button */}
          <Link href="/#blog">
            <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mb-8">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Blog
            </a>
          </Link>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">Elétrica</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min de leitura</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Cláudio</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Dicas para Economizar Energia em Casa
            </h1>
            
            <p className="text-xl text-gray-600">
              Pequenas mudanças que fazem grande diferença na sua conta de luz. Confira 7 dicas práticas e eficientes.
            </p>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
            <img 
              src="/images/service-electrical.jpg" 
              alt="Lâmpada LED economizando energia" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16 text-gray-700 space-y-6">
            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Por que sua conta de luz é tão alta?</h2>
              <p>
                A conta de luz é um dos maiores gastos mensais de uma casa. Muitas vezes, não percebemos o quanto estamos 
                desperdiçando energia com hábitos simples. A boa notícia é que pequenas mudanças podem reduzir significativamente 
                sua conta, economizando dinheiro e ajudando o meio ambiente.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">7 Dicas para Economizar Energia</h2>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">1. Troque para lâmpadas LED</h3>
                    <p>
                      As lâmpadas LED consomem até 80% menos energia que as incandescentes e duram muito mais tempo. 
                      Embora sejam mais caras no início, o investimento se paga em poucos meses. Comece trocando as 
                      lâmpadas dos ambientes que mais usa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">2. Desligue aparelhos em standby</h3>
                    <p>
                      Aparelhos em modo standby (aquela luz vermelha acesa) consomem energia mesmo desligados. 
                      Desconecte carregadores, televisões e outros aparelhos que não estão em uso. Use filtros com 
                      interruptor para desligar vários aparelhos de uma vez.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">3. Use o chuveiro com moderação</h3>
                    <p>
                      O chuveiro é um dos maiores consumidores de energia em casa. Reduzir o tempo de banho em apenas 
                      5 minutos pode economizar até 10% da sua conta. Considere também usar água morna em vez de quente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">4. Otimize o uso do ar-condicionado</h3>
                    <p>
                      Se tem ar-condicionado, mantenha a temperatura entre 23-25°C. Cada grau a menos aumenta o consumo 
                      em até 10%. Feche as portas dos ambientes climatizados, limpe os filtros regularmente e use o modo 
                      econômico quando disponível.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">5. Use a geladeira corretamente</h3>
                    <p>
                      Não coloque alimentos quentes na geladeira, pois ela terá que trabalhar mais para esfriar. 
                      Mantenha a temperatura entre 2-8°C. Limpe as serpentinas atrás da geladeira regularmente e 
                      evite abrir a porta desnecessariamente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">6. Aproveite a luz natural</h3>
                    <p>
                      Abra as cortinas durante o dia para aproveitar a luz solar. Isso reduz a necessidade de usar 
                      lâmpadas. Pinte as paredes com cores claras para refletir melhor a luz natural.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">7. Verifique a instalação elétrica</h3>
                    <p>
                      Fios soltos, conexões ruins ou equipamentos antigos podem causar vazamento de energia. 
                      Chame um eletricista para verificar sua instalação. Às vezes, um pequeno reparo pode 
                      economizar muito na conta.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Quanto você pode economizar?</h2>
              <p>
                Aplicando essas dicas, você pode reduzir sua conta de luz em até 30%. Se sua conta é de R$ 200, 
                isso significa economizar R$ 60 por mês, ou R$ 720 por ano! Imagine quanto você pode economizar 
                em 5 ou 10 anos.
              </p>
            </section>

            <section className="bg-primary/5 p-6 rounded-xl border border-primary/20 mt-8">
              <h2 className="font-heading font-bold text-2xl text-gray-900 mb-4">Precisa de uma revisão elétrica?</h2>
              <p>
                Se sua conta continua alta mesmo aplicando essas dicas, pode haver um problema na sua instalação elétrica. 
                A Cláudio Pequenos Reparos oferece serviço de verificação completa para identificar vazamentos de energia 
                e problemas que aumentam sua conta.
              </p>
              <a 
                href="https://wa.me/5524988361194?text=Ol%C3%A1%20Cl%C3%A1udio%2C%20minha%20conta%20de%20luz%20%C3%A9%20muito%20alta.%20Pode%20verificar%20minha%20instala%C3%A7%C3%A3o%20el%C3%A9trica%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
              >
                Solicitar Revisão
              </a>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">Gostou deste artigo?</h3>
            <p className="text-gray-600 mb-6">
              Compartilhe com seus amigos e continue acompanhando nosso blog para mais dicas de economia e manutenção.
            </p>
            <Link href="/#blog">
              <a className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors">
                Voltar para o Blog
              </a>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
