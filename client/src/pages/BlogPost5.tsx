import { ArrowLeft, Clock, User, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function BlogPost5() {
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
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min de leitura</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Cláudio</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Segurança Elétrica: O Que Você Precisa Saber
            </h1>
            
            <p className="text-xl text-gray-600">
              Dicas essenciais para manter sua instalação elétrica segura e evitar acidentes domésticos.
            </p>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
            <img 
              src="/images/service-electrical.jpg" 
              alt="Instalação elétrica segura" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16 text-gray-700 space-y-6">
            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Por que segurança elétrica é importante?</h2>
              <p>
                Acidentes elétricos podem ser fatais. Choques elétricos, incêndios causados por fiação defeituosa e 
                explosões de equipamentos são riscos reais. A boa notícia é que a maioria dos acidentes pode ser prevenida 
                com conhecimento e cuidado. Vamos aprender como manter sua casa segura.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Sinais de perigo na instalação elétrica</h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Cheiro de queimado</h3>
                      <p>
                        Se você sente cheiro de queimado perto de tomadas ou da caixa de luz, desligue o disjuntor 
                        imediatamente e chame um eletricista.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Faíscas em tomadas</h3>
                      <p>
                        Faíscas ao plugar ou despluguar algo indicam problema na tomada. Não use essa tomada e 
                        chame um profissional.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Disjuntor disparando frequentemente</h3>
                      <p>
                        Se o disjuntor dispara constantemente, há sobrecarga ou curto-circuito. Não force o disjuntor 
                        a ficar ligado. Procure ajuda profissional.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Fios expostos ou danificados</h3>
                      <p>
                        Fios com isolamento danificado são extremamente perigosos. Não toque e chame um eletricista 
                        imediatamente.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Tomadas quentes</h3>
                      <p>
                        Se uma tomada está quente ao toque, há problema. Desligue o disjuntor daquele circuito e 
                        procure um profissional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Dicas de segurança elétrica</h2>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">1. Não sobrecarregue tomadas</h3>
                <p>
                  Usar múltiplos adaptadores em uma tomada pode causar incêndio. Use tomadas adicionais se necessário.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">2. Mantenha água longe de eletricidade</h3>
                <p>
                  Nunca use aparelhos elétricos com as mãos molhadas. Água e eletricidade não combinam.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">3. Use protetor de tomadas</h3>
                <p>
                  Se tem crianças, use protetores nas tomadas. Isso evita choques acidentais.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">4. Instale um disjuntor diferencial</h3>
                <p>
                  O DR (disjuntor diferencial) detecta vazamentos de corrente e desliga automaticamente, prevenindo 
                  choques. É obrigatório em banheiros e cozinhas.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">5. Não toque em fios caídos</h3>
                <p>
                  Se ver um fio caído na rua, não toque. Avise a concessionária de energia. Fios podem estar energizados.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">6. Faça manutenção regular</h3>
                <p>
                  Peça a um eletricista para verificar sua instalação a cada 2 anos. Problemas detectados cedo são 
                  mais fáceis de resolver.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">7. Use cabos de qualidade</h3>
                <p>
                  Cabos de extensão e adaptadores de baixa qualidade são perigosos. Compre de marcas confiáveis.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">8. Desligue antes de consertar</h3>
                <p>
                  Sempre desligue o disjuntor antes de trabalhar com eletricidade. Nunca trabalhe com energia ligada.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">O que fazer em caso de acidente elétrico</h2>
              
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Se alguém sofrer choque</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Não toque na pessoa enquanto estiver em contato com a fonte elétrica</li>
                  <li>Desligue o disjuntor ou desconecte o aparelho</li>
                  <li>Chame a ambulância (192)</li>
                  <li>Se a pessoa estiver inconsciente, faça reanimação cardiopulmonar</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Se houver incêndio elétrico</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Desligue o disjuntor imediatamente</li>
                  <li>Use extintor de pó (nunca água)</li>
                  <li>Chame os bombeiros (193)</li>
                  <li>Saia de casa se o fogo se alastrar</li>
                </ul>
              </div>
            </section>

            <section className="bg-primary/5 p-6 rounded-xl border border-primary/20 mt-8">
              <h2 className="font-heading font-bold text-2xl text-gray-900 mb-4">Deixe a segurança elétrica com profissionais</h2>
              <p>
                A Cláudio Pequenos Reparos oferece inspeção completa de segurança elétrica. Verificamos toda a instalação, 
                identificamos riscos e fazemos os reparos necessários. Sua segurança é nossa prioridade.
              </p>
              <a 
                href="https://wa.me/5524988361194?text=Ol%C3%A1%20Cl%C3%A1udio%2C%20gostaria%20de%20uma%20inspe%C3%A7%C3%A3o%20de%20seguran%C3%A7a%20el%C3%A9trica%20em%20minha%20casa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
              >
                Solicitar Inspeção
              </a>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">Gostou deste artigo?</h3>
            <p className="text-gray-600 mb-6">
              Compartilhe com seus amigos e continue acompanhando nosso blog para mais dicas de segurança.
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
