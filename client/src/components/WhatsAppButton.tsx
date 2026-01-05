import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  // Mensagem codificada: "Olá Cláudio, vi seu site e gostaria de um orçamento."
  const message = encodeURIComponent("Olá Cláudio, vi seu site e gostaria de um orçamento.");
  const phoneNumber = "5524988361194";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group animate-in slide-in-from-bottom-10 fade-in duration-700 delay-1000"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco agora!
      </span>
      
      {/* Ping animation effect */}
      <span className="absolute -inset-1 rounded-full bg-green-500 opacity-30 animate-ping pointer-events-none"></span>
    </a>
  );
}
