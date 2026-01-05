import { ArrowLeft, Clock, User, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function BlogPost3() {
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
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">Manutenção</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min de leitura</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Cláudio</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Manutenção Preventiva: Por Que Não Esperar Quebrar
            </h1>
            
            <p className="text-xl text-gray-600">
              Entenda por que investir em manutenção preventiva economiza dinheiro e evita problemas maiores no futuro.
            </p>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
            <img 
              src="/images/hero-bg.jpg" 
              alt="Manutenção preventiva em andamento" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16 text-gray-700 space-y-6">
            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">O que é manutenção preventiva?</h2>
              <p>
                Manutenção preventiva é o conjunto de ações realizadas regularmente para evitar que problemas ocorram. 
                É como ir ao dentista para limpeza e prevenção, em vez de esperar a dor de dente para procurar ajuda. 
                Na sua casa, isso significa verificar regularmente sistemas e equipamentos para identificar problemas 
                antes que se tornem graves.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Por que a manutenção preventiva é importante?</h2>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-2">Economiza dinheiro</h3>
                <p>
                  Um pequeno reparo custa muito menos que uma grande reforma. Por exemplo, limpar a tubulação custa 
                  algumas centenas de reais, mas um vazamento não detectado pode danificar paredes e piso, custando milhares.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-2">Aumenta a vida útil dos equipamentos</h3>
                <p>
                  Equipamentos bem mantidos duram muito mais. Um ar-condicionado com filtro limpo dura anos a mais 
                  do que um negligenciado.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-2">Evita emergências</h3>
                <p>
                  Ninguém quer ficar sem água quente no meio do inverno ou sem luz durante uma festa. A manutenção 
                  preventiva evita essas situações desagradáveis.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-2">Melhora a segurança</h3>
                <p>
                  Problemas elétricos ou estruturais podem ser perigosos. A manutenção preventiva identifica riscos 
                  antes que causem acidentes.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-2">Mantém a garantia dos equipamentos</h3>
                <p>
                  Muitos equipamentos têm garantia apenas se forem mantidos regularmente. Negligenciar a manutenção 
                  pode anular a garantia.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Checklist de manutenção preventiva</h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Mensalmente</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                    <li>Verifique se há vazamentos sob pias e chuveiros</li>
                    <li>Limpe os filtros do ar-condicionado</li>
                    <li>Teste os disjuntores</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Trimestralmente</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                    <li>Limpe os ralos e canos</li>
                    <li>Verifique a pressão da água</li>
                    <li>Inspecione as paredes em busca de umidade</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Semestralmente</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                    <li>Verifique a instalação elétrica</li>
                    <li>Limpe a caixa de água</li>
                    <li>Inspecione o telhado</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Anualmente</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                    <li>Faça uma inspeção completa com um profissional</li>
                    <li>Limpe as tubulações</li>
                    <li>Verifique o sistema de aquecimento</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Exemplos de economia com manutenção preventiva</h2>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-gray-900 mb-2">Exemplo 1: Vazamento de água</h3>
                  <p className="text-sm text-gray-700">
                    <strong>Sem manutenção:</strong> Um pequeno vazamento não detectado causa mofo nas paredes. 
                    Custo para reparar: R$ 3.000+<br/>
                    <strong>Com manutenção:</strong> Detectado cedo, custo para reparar: R$ 200
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-gray-900 mb-2">Exemplo 2: Ar-condicionado</h3>
                  <p className="text-sm text-gray-700">
                    <strong>Sem manutenção:</strong> Filtro sujo faz o equipamento trabalhar mais, aumentando 
                    conta de luz em 20% e reduzindo vida útil. Custo: R$ 5.000 para trocar.<br/>
                    <strong>Com manutenção:</strong> Limpeza regular custa R$ 100 e o equipamento dura 10 anos a mais.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-gray-900 mb-2">Exemplo 3: Chuveiro</h3>
                  <p className="text-sm text-gray-700">
                    <strong>Sem manutenção:</strong> Resistência queima sem aviso. Custo para trocar: R$ 400<br/>
                    <strong>Com manutenção:</strong> Limpeza preventiva evita queima. Custo: R$ 0
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-primary/5 p-6 rounded-xl border border-primary/20 mt-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-heading font-bold text-2xl text-gray-900 mb-4">Deixe a manutenção preventiva com a gente</h2>
                  <p>
                    A Cláudio Pequenos Reparos oferece pacotes de manutenção preventiva para sua casa. 
                    Fazemos inspeções regulares, limpezas e pequenos reparos para evitar problemas maiores. 
                    Converse conosco sobre um plano personalizado para sua casa.
                  </p>
                  <a 
                    href="https://wa.me/5524988361194?text=Ol%C3%A1%20Cl%C3%A1udio%2C%20gostaria%20de%20um%20plano%20de%20manuten%C3%A7%C3%A3o%20preventiva%20para%20minha%20casa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">Gostou deste artigo?</h3>
            <p className="text-gray-600 mb-6">
              Compartilhe com seus amigos e continue acompanhando nosso blog para mais dicas de manutenção.
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
