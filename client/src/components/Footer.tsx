import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-white/5">
      <div className="container">
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
              <a href="https://wa.me/5524988361194" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
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
