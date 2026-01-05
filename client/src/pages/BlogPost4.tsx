import { ArrowLeft, Clock, User, Droplet } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function BlogPost4() {
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
              Identificando Vazamentos Ocultos em Casa
            </h1>
            
            <p className="text-xl text-gray-600">
              Sinais que indicam vazamentos escondidos e como localizá-los antes que causem danos estruturais.
            </p>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
            <img 
              src="/images/service-plumbing.jpg" 
              alt="Detectando vazamento de água" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16 text-gray-700 space-y-6">
            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Por que os vazamentos ocultos são perigosos?</h2>
              <p>
                Vazamentos ocultos são aqueles que ocorrem dentro das paredes, sob o piso ou em tubulações enterradas. 
                Como não são vistos imediatamente, podem causar danos estruturais graves, mofo, apodrecimento de madeira 
                e até problemas de saúde. Além disso, aumentam muito sua conta de água. Detectar vazamentos cedo é essencial.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Sinais de vazamento oculto</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <Droplet className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Mancha de umidade nas paredes</h3>
                      <p>
                        Manchas escuras ou amareladas nas paredes indicam infiltração de água. Elas geralmente aparecem 
                        em um padrão irregular e podem se expandir com o tempo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <Droplet className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Pintura descascando</h3>
                      <p>
                        Quando a pintura começa a descascar sem motivo aparente, geralmente há umidade por trás. 
                        Isso é um sinal claro de vazamento.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <Droplet className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Mofo ou bolor</h3>
                      <p>
                        Mofo preto ou verde em paredes, especialmente em cantos, indica umidade excessiva. 
                        Além de feio, o mofo é prejudicial à saúde.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <Droplet className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Piso ou rodapé inchado</h3>
                      <p>
                        Madeira inchada ou piso deformado indica que há água acumulada. Isso é um sinal de vazamento 
                        sob o piso.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <Droplet className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Conta de água alta</h3>
                      <p>
                        Se sua conta de água aumentou sem motivo aparente, pode haver um vazamento. 
                        Compare com meses anteriores.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <Droplet className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Cheiro de mofo ou umidade</h3>
                      <p>
                        Um cheiro desagradável de mofo ou umidade, especialmente em cômodos específicos, 
                        indica vazamento.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <Droplet className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Medidor de água girando sem uso</h3>
                      <p>
                        Desligue toda a água da casa (feche o registro geral) e verifique se o medidor continua girando. 
                        Se sim, há vazamento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">Como localizar um vazamento oculto</h2>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Passo 1: Teste do medidor</h3>
                <p>
                  Feche o registro geral de água. Anote o número do medidor. Aguarde 2 horas sem usar água. 
                  Se o número mudou, há vazamento entre o medidor e a casa.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Passo 2: Teste de pressão</h3>
                <p>
                  Abra uma torneira e observe a pressão. Se a pressão cair rapidamente quando você fecha a torneira, 
                  há vazamento nas tubulações.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Passo 3: Inspeção visual</h3>
                <p>
                  Procure por manchas de umidade nas paredes, piso e teto. Siga as manchas para tentar localizar 
                  a origem do vazamento. Geralmente, a água escorre para baixo.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Passo 4: Teste de corante</h3>
                <p>
                  Coloque corante de alimento perto de um ralo suspeito. Se o corante for sugado, há vazamento 
                  naquele local.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-4">O que fazer se encontrar um vazamento</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Feche o registro geral de água imediatamente</li>
                <li>Tire fotos do vazamento e das manchas de umidade</li>
                <li>Não tente consertar sozinho se envolver tubulações dentro das paredes</li>
                <li>Chame um encanador profissional para avaliar</li>
                <li>Abra janelas para ventilar e evitar mofo</li>
              </ul>
            </section>

            <section className="bg-primary/5 p-6 rounded-xl border border-primary/20 mt-8">
              <h2 className="font-heading font-bold text-2xl text-gray-900 mb-4">Suspeita de vazamento? Chame a gente!</h2>
              <p>
                A Cláudio Pequenos Reparos tem equipamento especializado para detectar vazamentos ocultos. 
                Usamos câmeras térmicas e outros equipamentos para localizar vazamentos sem danificar sua casa. 
                Quanto mais cedo detectar, menor o dano e o custo.
              </p>
              <a 
                href="https://wa.me/5524988361194?text=Ol%C3%A1%20Cl%C3%A1udio%2C%20suspeito%20que%20tenho%20um%20vazamento%20oculto.%20Pode%20ajudar%3F"
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
