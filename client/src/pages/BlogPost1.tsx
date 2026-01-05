import { ArrowLeft, Clock, User } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function BlogPost1() {
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
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">Hidráulica</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min de leitura</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Cláudio</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Como Trocar uma Resistência de Chuveiro
            </h1>
            
            <p className="text-xl text-gray-600">
              Aprenda o passo a passo para trocar a resistência do seu chuveiro de forma segura e economizar na manutenção.
            </p>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
            <img 
              src="/images/service-plumbing.jpg" 
              alt="Chuveiro sendo reparado" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16 text-gray-700 space-y-6">
            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Por que a resistência queima?</h2>
              <p>
                A resistência do chuveiro é responsável por aquecer a água. Com o tempo, ela pode queimar por diversos motivos: 
                acúmulo de calcário, variações na pressão da água, ou simplesmente pelo desgaste natural. Quando a resistência 
                queima, o chuveiro para de aquecer a água, deixando você sem água quente.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Sinais que sua resistência está queimada</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Água do chuveiro não aquece mais</li>
                <li>Chuveiro faz barulho estranho (zumbido ou estalo)</li>
                <li>Disjuntor dispara frequentemente</li>
                <li>Cheiro de queimado perto do chuveiro</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Ferramentas necessárias</h2>
              <p>Antes de começar, certifique-se de que você tem:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chave inglesa ou chave de fenda</li>
                <li>Fita veda rosca (teflon)</li>
                <li>Resistência nova compatível com seu chuveiro</li>
                <li>Toalha ou pano</li>
                <li>Balde para água que pode vazar</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Passo a passo para trocar a resistência</h2>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                <h3 className="font-bold text-gray-900 mb-3">Passo 1: Desligue a energia</h3>
                <p>
                  Este é o passo mais importante! Desligue o disjuntor do chuveiro na caixa de luz. Aguarde alguns minutos 
                  para garantir que toda a energia foi desligada. Nunca trabalhe com eletricidade ligada.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Passo 2: Feche o registro de água</h3>
                <p>
                  Feche o registro de água do chuveiro ou da casa para evitar vazamentos. Se não tiver registro, coloque 
                  um balde embaixo para pegar a água que pode vazar.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Passo 3: Remova o chuveiro</h3>
                <p>
                  Use a chave inglesa para soltar a conexão do chuveiro. Gire no sentido anti-horário. Coloque uma toalha 
                  embaixo para pegar a água que pode vazar. Retire o chuveiro com cuidado.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Passo 4: Acesse a resistência</h3>
                <p>
                  Dependendo do modelo do seu chuveiro, você pode precisar remover a tampa frontal ou desparafusar a base. 
                  Procure pela resistência (geralmente é um cilindro metálico). Desconecte os fios que estão presos a ela.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Passo 5: Remova a resistência antiga</h3>
                <p>
                  Use a chave inglesa para soltar a resistência. Gire no sentido anti-horário. Cuidado, pois pode haver 
                  água dentro. Tenha o balde pronto. Retire a resistência com cuidado.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Passo 6: Instale a resistência nova</h3>
                <p>
                  Pegue a resistência nova e envolva a rosca com fita veda rosca (teflon). Isso evita vazamentos. 
                  Parafuse a resistência no lugar, girando no sentido horário. Aperte bem, mas sem exagerar.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Passo 7: Reconecte os fios</h3>
                <p>
                  Conecte os fios à resistência nova, seguindo o mesmo padrão da resistência antiga. Se não souber, 
                  tire uma foto da resistência antiga antes de remover.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Passo 8: Remonte o chuveiro</h3>
                <p>
                  Coloque a tampa frontal ou parafuse a base de volta. Reconecte o chuveiro à tubulação, girando no 
                  sentido horário. Aperte bem com a chave inglesa.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Passo 9: Teste</h3>
                <p>
                  Abra o registro de água e verifique se há vazamentos. Se tudo estiver bem, ligue o disjuntor e teste 
                  o chuveiro. A água deve aquecer normalmente.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Dicas importantes</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Segurança em primeiro lugar:</strong> Sempre desligue a energia antes de trabalhar</li>
                <li><strong>Use fita veda rosca:</strong> Isso evita vazamentos futuros</li>
                <li><strong>Tome nota das conexões:</strong> Tire fotos antes de desmontar para não se confundir</li>
                <li><strong>Compre a resistência correta:</strong> Leve o modelo do seu chuveiro à loja</li>
                <li><strong>Se não se sentir seguro, chame um profissional:</strong> Não é vergonha! Trabalhar com 
                eletricidade requer cuidado</li>
              </ul>
            </section>

            <section className="bg-primary/5 p-6 rounded-xl border border-primary/20 mt-8">
              <h2 className="font-heading font-bold text-2xl text-gray-900 mb-4">Precisa de ajuda?</h2>
              <p>
                Se você não se sentir confortável fazendo esse procedimento sozinho, ou se algo der errado, 
                a Cláudio Pequenos Reparos está aqui para ajudar! Temos experiência em trocar resistências 
                e garantimos um serviço rápido e seguro.
              </p>
              <a 
                href="https://wa.me/5524988361194?text=Ol%C3%A1%20Cl%C3%A1udio%2C%20preciso%20trocar%20a%20resist%C3%AAncia%20do%20meu%20chuveiro."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
              >
                Solicitar Serviço
              </a>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">Gostou deste artigo?</h3>
            <p className="text-gray-600 mb-6">
              Compartilhe com seus amigos e continue acompanhando nosso blog para mais dicas de manutenção residencial.
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
