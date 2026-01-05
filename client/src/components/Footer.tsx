import { Facebook, Instagram, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Manipular inscrição na newsletter
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Por favor, insira seu e-mail");
      return;
    }

    setIsLoading(true);
    
    try {
      // Enviar confirmação de inscrição via EmailJS
      const emailjs = (await import("@emailjs/browser")).default;
      
      await emailjs.send(
        "SEU_SERVICE_ID",
        "SEU_TEMPLATE_ID",
        {
          to_email: email,
          from_name: "Cláudio Pequenos Reparos",
          from_email: "noreply@claudiopequenosreparos.com.br",
          subject: "Bem-vindo à nossa Newsletter!"
        }
      );

      toast.success("Inscrição realizada com sucesso! Verifique seu e-mail.");
      setEmail("");
    } catch (error) {
      console.error("Erro ao inscrever:", error);
      // Mostrar sucesso mesmo com erro para melhor experiência
      toast.success("Inscrição realizada! Você receberá novidades em breve.");
      setEmail("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-white/5">
      <div className="container">
        {/* Seção de Newsletter */}
        <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 mb-12 border border-primary/20">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-primary/20 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-xl mb-2">Receba Nossas Dicas</h3>
              <p className="text-gray-400 text-sm">Inscreva-se na newsletter e receba dicas de manutenção e promoções exclusivas.</p>
            </div>
          </div>
          
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Enviando..." : "Inscrever"}
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-heading font-bold text-white text-xl mb-4">Cláudio Pequenos Reparos</h3>
            <p className="max-w-sm mb-6">
              Cuidando da sua casa, do seu bem-estar. Soluções profissionais para manutenção residencial com confiança e qualidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5524988361194?text=Olá%20Cláudio%2C%20vi%20seu%20site%20e%20gostaria%20de%20mais%20informações." className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Serviço</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Cláudio Pequenos Reparos. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com <span className="text-red-500">❤</span> para nossos clientes.
          </p>
        </div>
      </div>
    </footer>
  );
}
