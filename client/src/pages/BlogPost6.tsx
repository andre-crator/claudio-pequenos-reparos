import { ArrowLeft, Clock, User, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function BlogPost6() {
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
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">Geral</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min de leitura</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Cláudio</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Quando Chamar um Profissional vs. Fazer Sozinho
            </h1>
            
            <p className="text-xl text-gray-600">
              Saiba quais reparos você pode fazer em casa e quando é melhor chamar um especialista.
            </p>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
            <img 
              src="/images/service-furniture.jpg" 
              alt="Profissional realizando reparo" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16 text-gray-700 space-y-6">
            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Por que essa decisão é importante?</h2>
              <p>
                Saber quando fazer um reparo sozinho e quando chamar um profissional pode economizar dinheiro, 
                tempo e até evitar acidentes. Alguns reparos são simples e seguros, enquanto outros requerem 
                treinamento e ferramentas especializadas. Vamos aprender a diferença.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Reparos que você pode fazer sozinho</h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Trocar lâmpadas</h3>
                      <p>
                        Simples e seguro. Desligue a energia antes de trocar. Use lâmpadas do mesmo tipo e potência.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Limpar ralos</h3>
                      <p>
                        Use uma desentupidora ou desentupidor manual. Se não funcionar, chame um profissional.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Trocar filtros de ar-condicionado</h3>
                      <p>
                        Fácil e importante para manutenção. Consulte o manual do seu aparelho para o tipo correto.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Apertar parafusos soltos</h3>
                      <p>
                        Móveis ou prateleiras com parafusos soltos podem ser apertados facilmente com uma chave.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Pintar paredes</h3>
                      <p>
                        Com paciência e as ferramentas certas, você consegue pintar suas paredes. Prepare bem a superfície.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Trocar torneira simples</h3>
                      <p>
                        Se a torneira é apenas cosmética (não há vazamento), você pode trocar. Feche o registro antes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Montar móveis simples</h3>
                      <p>
                        Móveis de fácil montagem (prateleiras, cabideiro) podem ser instalados seguindo as instruções.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Quando chamar um profissional</h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Problemas elétricos</h3>
                      <p>
                        Qualquer coisa envolvendo eletricidade (fiação, tomadas, disjuntores) requer profissional. 
                        Risco de choque e incêndio.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Vazamentos de água</h3>
                      <p>
                        Vazamentos podem danificar estrutura da casa. Chame um encanador para localizar e reparar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Problemas estruturais</h3>
                      <p>
                        Rachaduras em paredes, piso ou teto podem indicar problemas estruturais. Chame um engenheiro.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Ar-condicionado ou refrigeração</h3>
                      <p>
                        Recarregar gás, consertar compressor ou problemas internos requerem profissional certificado.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Trabalhos em altura</h3>
                      <p>
                        Reparos em telhado, fachada ou lugares altos são perigosos. Contrate profissional com equipamento.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Reparos que você não tem certeza</h3>
                      <p>
                        Se não tem certeza de como fazer, não tente. Um erro pode custar muito mais para consertar depois.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Reparos que envolvem garantia</h3>
                      <p>
                        Se o equipamento está na garantia, deixe o fabricante consertar. Tentar consertar pode anular.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Como escolher um profissional</h2>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Dicas para encontrar um bom profissional</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Peça indicações de amigos e família</li>
                  <li>Verifique avaliações online</li>
                  <li>Peça referências de trabalhos anteriores</li>
                  <li>Solicite orçamento antes de começar</li>
                  <li>Verifique se tem registro profissional (para eletricistas e encanadores)</li>
                  <li>Prefira profissionais que oferecem garantia no trabalho</li>
                </ul>
              </div>
            </section>

            <section className="bg-primary/5 p-6 rounded-xl border border-primary/20 mt-8">
              <h2 className="font-heading font-bold text-2xl text-gray-900 mb-4">Precisa de um profissional?</h2>
              <p>
                A Cláudio Pequenos Reparos está aqui para ajudar com qualquer reparo que você não se sinta confortável 
                fazendo sozinho. Temos experiência em todas as áreas: elétrica, hidráulica, pintura, montagem e muito mais. 
                Solicite um orçamento sem compromisso!
              </p>
              <a 
                href="https://wa.me/5524988361194?text=Ol%C3%A1%20Cl%C3%A1udio%2C%20preciso%20de%20ajuda%20com%20um%20reparo%20em%20casa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
              >
                Solicitar Orçamento
              </a>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">Gostou deste artigo?</h3>
            <p className="text-gray-600 mb-6">
              Compartilhe com seus amigos e continue acompanhando nosso blog para mais dicas práticas.
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
