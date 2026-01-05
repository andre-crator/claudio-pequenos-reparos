import { Calendar, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                Agende sua Consulta
              </h2>
              <p className="text-gray-600 text-lg">
                Escolha o melhor horário para você e marque uma avaliação gratuita. 
                É rápido, fácil e sem compromisso.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Disponibilidade</h3>
                  <p className="text-gray-600 text-sm">
                    Seg-Sex: 8h às 18h | Sábado: Sob agendamento
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Tempo da Consulta</h3>
                  <p className="text-gray-600 text-sm">
                    30 minutos para avaliação completa do seu problema
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Próximos Passos</h3>
                  <p className="text-gray-600 text-sm">
                    Você receberá um orçamento detalhado em até 24h
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="rounded-full font-bold text-base px-8 h-12 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full"
              asChild
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Agendar Agora
              </a>
            </Button>

            <p className="text-sm text-gray-500 text-center">
              Você será redirecionado para nosso calendário online.
            </p>
          </div>

          {/* Right: Calendar Preview */}
          <div className="bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-2xl p-8 border border-gray-200 min-h-[400px] flex items-center justify-center">
            <div className="text-center space-y-4">
              <Calendar className="w-16 h-16 text-primary mx-auto opacity-50" />
              <h3 className="font-heading font-bold text-2xl text-gray-900">
                Calendário Online
              </h3>
              <p className="text-gray-600 max-w-xs">
                Clique no botão acima para acessar nosso calendário e escolher o horário que melhor se adequa à sua agenda.
              </p>
              <div className="pt-4 space-y-2 text-sm text-gray-500">
                <p>✓ Confirmação instantânea</p>
                <p>✓ Lembretes automáticos</p>
                <p>✓ Fácil reagendamento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
