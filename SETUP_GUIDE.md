# Guia de Configuração - Cláudio Pequenos Reparos

Este documento contém as instruções para configurar as integrações do website.

## 1. Integração com EmailJS

O formulário de contato está configurado para enviar e-mails automaticamente via EmailJS.

### Passo 1: Criar conta no EmailJS
1. Acesse [emailjs.com](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu e-mail

### Passo 2: Configurar um Serviço de E-mail
1. No painel do EmailJS, vá para "Email Services"
2. Clique em "Add Service"
3. Escolha seu provedor de e-mail (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. Copie o **Service ID** (exemplo: `service_abc123`)

### Passo 3: Criar um Template de E-mail
1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com os seguintes campos:
   - **To Email**: `contato@claudiopequenosreparos.com.br`
   - **Subject**: `Nova Solicitação de Orçamento de {{from_name}}`
   - **Content**: Use as variáveis `{{from_name}}`, `{{phone}}`, `{{service}}`, `{{message}}`
4. Copie o **Template ID** (exemplo: `template_abc123`)

### Passo 4: Obter sua Chave Pública
1. Vá para "Account"
2. Copie sua **Public Key** (exemplo: `abc123xyz`)

### Passo 5: Atualizar o Código
No arquivo `client/src/components/ContactSection.tsx`, substitua:
- `YOUR_PUBLIC_KEY` pela sua chave pública do EmailJS
- `YOUR_SERVICE_ID` pelo seu Service ID
- `YOUR_TEMPLATE_ID` pelo seu Template ID

Exemplo:
```javascript
emailjs.init("abc123xyz"); // Sua chave pública

await emailjs.send(
  "service_abc123", // Seu Service ID
  "template_abc123", // Seu Template ID
  {
    to_email: "contato@claudiopequenosreparos.com.br",
    from_name: formData.name,
    from_email: "noreply@claudiopequenosreparos.com.br",
    phone: formData.phone,
    service: formData.service,
    message: formData.message
  }
);
```

## 2. Integração com Calendly

O botão "Agendar Agora" redireciona para seu calendário Calendly.

### Passo 1: Criar conta no Calendly
1. Acesse [calendly.com](https://calendly.com/)
2. Clique em "Sign Up" e crie uma conta
3. Escolha o plano (Free é suficiente para começar)

### Passo 2: Configurar seu Calendário
1. No painel do Calendly, vá para "Calendar Settings"
2. Configure seus horários disponíveis
3. Defina a duração padrão da consulta (30 minutos)
4. Copie seu **Calendly Link** (exemplo: `https://calendly.com/seu-usuario`)

### Passo 3: Atualizar o Código
No arquivo `client/src/components/BookingSection.tsx`, substitua:
- `https://calendly.com` pelo seu link do Calendly

Exemplo:
```javascript
<a href="https://calendly.com/seu-usuario" target="_blank" rel="noopener noreferrer">
  Agendar Agora
</a>
```

## 3. Galeria de Antes e Depois

A galeria está configurada para usar imagens locais. Para adicionar suas próprias fotos:

1. Adicione suas imagens em `client/public/images/`
2. Edite o arquivo `client/src/components/GallerySection.tsx`
3. Atualize o array `galleryItems` com seus projetos:

```javascript
const galleryItems = [
  {
    before: "/images/seu-projeto-antes.jpg",
    after: "/images/seu-projeto-depois.jpg",
    title: "Título do Projeto",
    description: "Descrição do trabalho realizado"
  },
  // ... mais projetos
];
```

## 4. Testando as Integrações

### Testar EmailJS
1. Preencha o formulário de contato
2. Clique em "Enviar Solicitação"
3. Você deve receber um e-mail no endereço configurado

### Testar Calendly
1. Clique no botão "Agendar Agora"
2. Você deve ser redirecionado para seu calendário Calendly

### Testar Galeria
1. Navegue até a seção "Nossos Trabalhos"
2. Teste o slider arrastando o mouse
3. Use os botões de navegação para mudar entre projetos

## 5. Próximas Melhorias

- Adicionar notificação por WhatsApp quando um formulário é enviado
- Integrar com Google Analytics para rastrear conversões
- Adicionar certificados de segurança SSL
- Implementar sistema de avaliações de clientes

## Suporte

Para dúvidas sobre as integrações:
- EmailJS: https://www.emailjs.com/docs/
- Calendly: https://help.calendly.com/
- React: https://react.dev/

---

**Última atualização**: Janeiro 2025
