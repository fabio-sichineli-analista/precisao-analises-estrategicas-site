import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, BookOpen, Zap } from "lucide-react";

export default function Resources() {
  const resources = [
    {
      title: "Análise Completa em PDF",
      description: "Relatório detalhado com avaliação estratégica, pontos fortes, fracos e recomendações de melhorias.",
      icon: FileText,
      link: "/analise-projeto.pdf",
      type: "PDF",
      size: "2.4 MB"
    },
    {
      title: "Guia de Implementação",
      description: "Passo a passo para implementar as sugestões de melhorias do projeto nos próximos 30-90 dias.",
      icon: BookOpen,
      link: "#",
      type: "Guia",
      size: "Em breve",
      disabled: true
    },
    {
      title: "Checklist de Validação",
      description: "Lista de verificação para validar o projeto através de projetos-piloto e feedback de mercado.",
      icon: Zap,
      link: "#",
      type: "Checklist",
      size: "Em breve",
      disabled: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src="/images/logo.png" alt="PRECISÃO Logo" className="h-16 w-auto" />
            <div className="hidden sm:block">
              <p className="font-merriweather font-bold text-primary text-2xl leading-tight">PRECISÃO</p>
              <p className="text-xs font-lato font-semibold text-accent uppercase tracking-wide">Análises Estratégicas</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Análise</a>
            <a href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-merriweather font-bold text-foreground mb-6">
              Recursos e Downloads
            </h1>
            <p className="text-xl text-secondary-foreground">
              Acesse documentos, guias e ferramentas para apoiar a evolução do seu projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lora font-semibold text-foreground mb-12">Materiais Disponíveis</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, idx) => {
                const Icon = resource.icon;
                return (
                  <Card 
                    key={idx}
                    className={`p-6 border border-border hover:shadow-lg transition-all ${
                      resource.disabled ? "opacity-60" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-lora font-semibold text-foreground mb-1">{resource.title}</h3>
                        <p className="text-xs text-muted-foreground">{resource.type} • {resource.size}</p>
                      </div>
                    </div>
                    
                    <p className="text-secondary-foreground mb-4 text-sm">
                      {resource.description}
                    </p>
                    
                    {resource.disabled ? (
                      <div className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium cursor-not-allowed">
                        Em Breve
                      </div>
                    ) : (
                      <a href={resource.link} download className="inline-block">
                        <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                          <Download className="w-4 h-4" />
                          Baixar
                        </Button>
                      </a>
                    )}
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-lora font-semibold text-foreground mb-3">Próximos Materiais</h3>
              <p className="text-secondary-foreground mb-4">
                Estamos preparando guias adicionais e ferramentas para apoiar a implementação das recomendações. 
              </p>
              <p className="text-secondary-foreground">
                Deixe seu email para ser notificado quando novos recursos forem disponibilizados.
              </p>
              <div className="mt-4 flex gap-2">
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Notificar-me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
            <p>PRECISÃO Análises Estratégicas © 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
