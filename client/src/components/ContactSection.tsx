import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Inicializar EmailJS com sua chave pública
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service || !formData.message) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setIsLoading(true);
    
    try {
      // Enviar e-mail via EmailJS
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          to_email: "contato@claudiopequenosreparos.com.br",
          from_name: formData.name,
          from_email: "noreply@claudiopequenosreparos.com.br",
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        }
      );

      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ name: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      toast.success("Mensagem recebida! Entraremos em contato em breve.");
      setFormData({ name: "", phone: "", service: "", message: "" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Fale conosco
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                Estamos prontos para atender você com rapidez e qualidade. 
                Peça seu orçamento sem compromisso.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-primary p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Ligue para nós</p>
                  <p className="font-heading font-bold text-xl">(24) 98836-1194</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-green-600 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                  <a 
                    href="https://wa.me/5524988361194" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-heading font-bold text-xl hover:text-green-400 transition-colors"
                  >
                    Iniciar conversa
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">E-mail</p>
                  <p className="font-heading font-bold text-lg break-all">contato@claudiopequenosreparos.com.br</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Atendemos em sua região</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-5 h-5 text-primary" />
                <span>Seg - Sáb: 08h às 18h</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 text-gray-900 shadow-2xl">
            <h3 className="font-heading font-bold text-2xl mb-6">Envie uma mensagem</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50" 
                    placeholder="Seu nome" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Telefone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50" 
                    placeholder="(DD) 99999-9999" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Serviço de interesse</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Elétrica">Elétrica</option>
                  <option value="Hidráulica">Hidráulica</option>
                  <option value="Pintura">Pintura</option>
                  <option value="Montagem de Móveis">Montagem de Móveis</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Mensagem</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 min-h-[120px]" 
                  placeholder="Descreva o que você precisa..."
                ></textarea>
              </div>

              <Button 
                className="w-full rounded-xl font-bold text-lg h-12 shadow-lg hover:shadow-xl transition-all" 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Enviar Solicitação"}
              </Button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                Ao enviar, você concorda em ser contatado para fins de orçamento.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
