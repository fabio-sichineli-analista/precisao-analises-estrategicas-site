import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";

/**
 * ELEGÂNCIA ANALÍTICA - Página de Contato
 * Design: Azul-índigo + Ouro-queimado
 * Foco: Facilitar contato profissional e solicitação de análises
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    cuidados: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    setIsSubmitting(true);
    
    // Simular envio
    setTimeout(() => {
      toast.success("Mensagem recebida! Entraremos em contato em breve.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        cuidados: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src="/images/logo.png" alt="PRECISÃO Logo" className="h-16 w-auto" />
            <div className="hidden sm:block">
              <p className="font-merriweather font-bold text-primary text-2xl leading-tight">PRECISÃO</p>
              <p className="text-xs font-lato font-semibold text-accent uppercase tracking-wide">Análises Estratégicas</p>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition">Início</Link>
            <Link href="/servicos" className="text-sm font-medium text-foreground hover:text-accent transition">Serviços</Link>
            <Link href="/sobre" className="text-sm font-medium text-foreground hover:text-accent transition">Sobre</Link>
            <Link href="/historia" className="text-sm font-medium text-foreground hover:text-accent transition">Nossa História</Link>
            <Link href="/faq" className="text-sm font-medium text-foreground hover:text-accent transition">FAQ</Link>
            <Link href="/blog" className="text-sm font-medium text-foreground hover:text-accent transition">Blog</Link>
            <Link href="/contato" className="text-sm font-medium text-accent border-b-2 border-accent">Contato</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-white border-b border-border">
        <div className="container text-center space-y-4">
          <p className="text-accent font-lato font-semibold text-sm uppercase tracking-wide">Entre em Contato</p>
          <h1 className="font-merriweather text-4xl md:text-5xl font-bold text-primary">
            Solicite uma Análise
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Descreva seu desafio e entraremos em contato para discutir como podemos ajudar.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-merriweather text-primary">Formulário de Contato</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-lato font-semibold text-primary">
                          Nome *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          className="border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-lato font-semibold text-primary">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="border-border"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-lato font-semibold text-primary">
                          Telefone
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(11) 99999-9999"
                          className="border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-lato font-semibold text-primary">
                          Empresa/Organização
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nome da empresa"
                          className="border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-lato font-semibold text-primary">
                        Assunto *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Ex: Análise de Risco Informacional"
                        className="border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-lato font-semibold text-primary">
                        Mensagem *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Descreva seu desafio e o que você espera da análise..."
                        className="border-border min-h-32"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-lato font-semibold text-primary">
                        Cuidados Extras a Serem Observados
                      </label>
                      <Textarea
                        name="cuidados"
                        value={formData.cuidados}
                        onChange={handleChange}
                        placeholder="Existem pontos específicos ou cuidados que devemos considerar na análise?"
                        className="border-border min-h-24"
                      />
                      <p className="text-xs text-muted-foreground">Opcional: Compartilhe qualquer informação adicional que possa ser relevante.</p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Responderemos em até 2 dias úteis.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-merriweather text-primary text-lg">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-lato font-semibold text-primary mb-1">Email</h4>
                      <p className="text-sm text-secondary">precisao.analitica@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-lato font-semibold text-primary mb-1">Telefone</h4>
                      <p className="text-sm text-secondary">Disponível por agendamento</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-lato font-semibold text-primary mb-1">Localização</h4>
                      <p className="text-sm text-secondary">Trabalho 100% digital</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-primary/5">
                <CardHeader>
                  <CardTitle className="font-merriweather text-primary text-lg">Tempo de Resposta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-secondary">
                  <p>Respondemos solicitações em até <strong>2 dias úteis</strong>.</p>
                  <p>Para assuntos urgentes, mencione na mensagem.</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-merriweather text-primary text-lg">Próximos Passos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-secondary">
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Você envia a solicitação</li>
                    <li><strong>2.</strong> Respondemos com perguntas de escopo</li>
                    <li><strong>3.</strong> Definimos proposta e prazo</li>
                    <li><strong>4.</strong> Iniciamos a análise</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent font-lato font-semibold text-sm uppercase tracking-wide mb-2">Dúvidas Frequentes</p>
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary mb-4">
              Perguntas Comuns
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-merriweather text-primary text-base">
                  Qual é o prazo para uma análise?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-secondary">
                Depende do escopo. Análises simples: 1-2 semanas. Análises complexas: 2-4 semanas. Discutiremos o prazo específico após entender seu desafio.
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-merriweather text-primary text-base">
                  Como é definido o valor?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-secondary">
                Por escopo do projeto. Discutiremos o desafio, definiremos o escopo exato e apresentaremos uma proposta clara antes de começar.
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-merriweather text-primary text-base">
                  Posso solicitar revisões?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-secondary">
                Sim. O escopo inclui esclarecimentos técnicos adicionais. Mudanças no escopo original são tratadas como demanda adicional.
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-merriweather text-primary text-base">
                  Qual é o formato da entrega?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-secondary">
                Relatório em PDF com estrutura profissional: contexto, análise técnica, riscos identificados e cenários possíveis.
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-merriweather text-primary text-base">
                  Isso é consultoria ou auditoria?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-secondary">
                Nenhum dos dois. É análise técnica para apoio à decisão. Não substituímos auditoria formal ou parecer jurídico vinculante.
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-merriweather text-primary text-base">
                  Confidencialidade é garantida?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-secondary">
                Sim. Todas as informações compartilhadas são tratadas com total confidencialidade e sigilo profissional.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-12 mt-auto">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-merriweather font-bold text-primary mb-4">PRECISÃO</h3>
              <p className="text-sm text-secondary">Análise técnica especializada em risco, informação e conformidade.</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-secondary font-semibold mb-2">Fábio Sichineli</p>
                <p className="text-xs text-secondary">Analista Técnico em Risco, Informação e Conformidade</p>
              </div>
            </div>
            <div>
              <h4 className="font-lato font-semibold text-primary mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/servicos" className="text-secondary hover:text-accent transition">Análise de Risco</Link></li>
                <li><Link href="/servicos" className="text-secondary hover:text-accent transition">Análise de Informação</Link></li>
                <li><Link href="/servicos" className="text-secondary hover:text-accent transition">Análise de Conformidade</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-lato font-semibold text-primary mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/sobre" className="text-secondary hover:text-accent transition">Sobre</Link></li>
                <li><Link href="/faq" className="text-secondary hover:text-accent transition">FAQ</Link></li>
                <li><Link href="/blog" className="text-secondary hover:text-accent transition">Blog</Link></li>
                <li><Link href="/contato" className="text-secondary hover:text-accent transition">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-lato font-semibold text-primary mb-4">Contato</h4>
              <p className="text-sm text-secondary mb-2">Email: precisao.analitica@gmail.com</p>
              <p className="text-sm text-secondary mb-4">Telefone: 47 99182-0229</p>
              <p className="text-sm text-secondary">Disponível para análises técnicas sob demanda.</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-secondary">
            <p>&copy; 2026 PRECISÃO Análises Estratégicas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
