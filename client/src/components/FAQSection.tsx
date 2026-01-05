import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Qual é o horário de atendimento?",
    answer: "Atendemos de segunda a sexta, das 8h às 18h. Aos sábados, fazemos atendimentos mediante agendamento prévio. Domingos e feriados apenas em emergências."
  },
  {
    question: "Vocês cobram taxa de deslocamento?",
    answer: "Sim, cobramos uma taxa de deslocamento que varia conforme a distância. O valor é informado no orçamento inicial. Dentro de um raio de 5km, a taxa é reduzida."
  },
  {
    question: "Como funciona o orçamento?",
    answer: "O orçamento é gratuito e sem compromisso. Você descreve o problema, marcamos uma data para avaliar, e então apresentamos o valor do serviço. Você decide se quer prosseguir."
  },
  {
    question: "Vocês aceitam cartão de crédito?",
    answer: "Sim! Aceitamos dinheiro, transferência bancária, PIX e cartão de crédito (à vista ou parcelado em até 3x)."
  },
  {
    question: "Qual é o tempo médio para realizar um reparo?",
    answer: "Depende do tipo de serviço. Pequenos reparos levam entre 1 a 2 horas. Reformas maiores podem levar um ou mais dias. Informamos o tempo estimado no orçamento."
  },
  {
    question: "Vocês oferecem garantia nos serviços?",
    answer: "Sim! Todos os serviços possuem garantia de 30 dias. Se algo não ficar bem, retornamos para corrigir sem custo adicional."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-lg">
            Respostas rápidas para as dúvidas mais comuns. Não encontrou sua pergunta? 
            <a href="#contact" className="text-primary font-bold hover:underline"> Entre em contato conosco</a>.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <h3 className="font-heading font-bold text-lg text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 animate-in slide-in-from-top-2 fade-in duration-300">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-600 mb-6">
            Fale conosco pelo WhatsApp ou preencha o formulário de contato. Responderemos em breve!
          </p>
          <a
            href="https://wa.me/5524988361194?text=Ol%C3%A1%20Cl%C3%A1udio%2C%20tenho%20uma%20d%C3%BAvida%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
          >
            Fale Conosco Agora
          </a>
        </div>
      </div>
    </section>
  );
}
