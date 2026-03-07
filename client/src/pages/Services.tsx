import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

/**
 * ELEGÂNCIA ANALÍTICA - Página de Serviços
 * Design: Azul-índigo + Ouro-queimado
 * Foco: Apresentar os 8 serviços organizados em 4 categorias
 */

export default function Services() {
  const services = [
    {
      category: "CATEGORIA 1 — ANÁLISES TÉCNICAS (NÚCLEO)",
      description: "Análises profundas que formam o núcleo do trabalho",
      items: [
        {
          number: "1",
          title: "Análise Técnica de Conformidade de Processos",
          description: "Avaliação de riscos informacionais, normativos e operacionais de um processo existente.",
          deliverable: "Relatório técnico com análise, riscos e cenários possíveis",
          when: "Antes de decisões de continuidade ou mudança; quando há sensibilidade institucional"
        },
        {
          number: "2",
          title: "Análise de Risco Informacional",
          description: "Mapeamento de riscos relacionados ao uso, fluxo e tratamento de informações sensíveis.",
          deliverable: "Relatório focado em exposição informacional, fragilidades de controle e impactos potenciais",
          when: "Uso de dados sensíveis; contextos digitais ou tecnológicos"
        },
        {
          number: "3",
          title: "Análise Técnica de Uso de Tecnologia / IA",
          description: "Avaliação técnica de riscos, limites e implicações do uso de tecnologias ou IA em determinado contexto.",
          deliverable: "Relatório técnico de apoio à decisão",
          when: "Adoção de IA; revisão de práticas tecnológicas; preocupação com conformidade e risco"
        }
      ]
    },
    {
      category: "CATEGORIA 2 — APOIO À DECISÃO (SEM EXECUÇÃO)",
      description: "Análises estruturadas para decisões complexas",
      items: [
        {
          number: "4",
          title: "Relatório de Apoio à Decisão Institucional",
          description: "Análise estruturada de um problema complexo, com identificação de riscos e cenários.",
          deliverable: "Relatório técnico transversal (não jurídico, não operacional)",
          when: "Decisões sensíveis; situações com múltiplos impactos"
        },
        {
          number: "5",
          title: "Análise Comparativa de Cenários",
          description: "Comparação técnica entre caminhos possíveis (manter, ajustar, mudar).",
          deliverable: "Relatório com leitura estratégica de implicações",
          when: "Dúvidas entre alternativas; necessidade de clareza antes de decidir"
        }
      ]
    },
    {
      category: "CATEGORIA 3 — ANÁLISES PONTUAIS (MENOR ESCOPO)",
      description: "Análises rápidas para questões específicas",
      items: [
        {
          number: "6",
          title: "Nota Técnica",
          description: "Análise curta e objetiva sobre um ponto específico.",
          deliverable: "Documento breve (2–4 páginas)",
          when: "Dúvidas pontuais; necessidade de registro técnico rápido"
        },
        {
          number: "7",
          title: "Parecer Técnico Informativo (não vinculante)",
          description: "Posicionamento técnico baseado em análise informacional e normativa, sem caráter jurídico.",
          deliverable: "Documento formal, linguagem institucional",
          when: "Necessidade de posicionamento técnico; uso interno ou informativo"
        }
      ]
    },
    {
      category: "CATEGORIA 4 — APOIO CONTINUADO (OPCIONAL)",
      description: "Disponibilidade para demandas recorrentes",
      items: [
        {
          number: "8",
          title: "Apoio Técnico sob Demanda",
          description: "Disponibilidade para análises técnicas recorrentes, sem vínculo decisório.",
          deliverable: "Notas técnicas ou relatórios conforme demanda",
          when: "Instituições com demandas recorrentes; sem necessidade de contratação fixa"
        }
      ]
    }
  ];

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
            <Link href="/servicos" className="text-sm font-medium text-accent border-b-2 border-accent">Serviços</Link>
            <Link href="/sobre" className="text-sm font-medium text-foreground hover:text-accent transition">Sobre</Link>
            <Link href="/contato" className="text-sm font-medium text-foreground hover:text-accent transition">Contato</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-white border-b border-border">
        <div className="container text-center space-y-4">
          <p className="text-accent font-lato font-semibold text-sm uppercase tracking-wide">Portfólio Completo</p>
          <h1 className="font-merriweather text-4xl md:text-5xl font-bold text-primary">
            Oito Tipos de Análise
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Cada serviço tem escopo, entrega e objetivo específicos. Escolha o que melhor se adequa ao seu desafio.
          </p>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16 md:py-24">
        <div className="container space-y-16">
          {services.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h2 className="font-merriweather text-2xl md:text-3xl font-bold text-primary mb-2">
                  {category.category}
                </h2>
                <p className="text-secondary">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIdx) => (
                  <Card key={itemIdx} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                            <span className="text-accent font-merriweather font-bold text-lg">{item.number}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="font-merriweather text-primary text-lg">{item.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-foreground">{item.description}</p>
                      
                      <div className="space-y-3 pt-4 border-t border-border">
                        <div>
                          <h4 className="font-lato font-semibold text-primary text-sm mb-1">Entrega típica:</h4>
                          <p className="text-sm text-secondary">{item.deliverable}</p>
                        </div>
                        <div>
                          <h4 className="font-lato font-semibold text-primary text-sm mb-1">Quando oferecer:</h4>
                          <p className="text-sm text-secondary">{item.when}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 md:py-24 bg-white border-t border-border">
        <div className="container">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h2 className="font-merriweather text-2xl font-bold text-primary mb-4">
              ⚠️ O Que Não Fazemos
            </h2>
            <p className="text-foreground mb-4">
              Todos os serviços têm caráter técnico e informativo. Não substituem:
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Consultoria executiva ou implementação</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Auditoria formal ou parecer jurídico vinculante</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Recomendações operacionais diretas</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Decisão institucional (essa é responsabilidade sua)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent font-lato font-semibold text-sm uppercase tracking-wide mb-2">Modelo de Contrato</p>
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary mb-4">
              Formas de Contratação
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Flexibilidade para diferentes tipos de demanda e volume.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-merriweather text-primary">Por Relatório</CardTitle>
                <CardDescription>Análise única e completa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground">Ideal para análises pontuais ou projetos específicos.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Escopo definido</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Entrega única</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Sem recorrência</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-merriweather text-primary">Por Projeto</CardTitle>
                <CardDescription>Análises múltiplas com escopo fechado</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground">Para projetos com múltiplas análises ou demandas complexas.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Escopo amplo</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Múltiplas entregas</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Prazo definido</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-merriweather text-primary">Sob Demanda</CardTitle>
                <CardDescription>Disponibilidade recorrente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground">Para instituições com análises frequentes e variadas.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Flexibilidade total</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Demandas variadas</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Sem contrato fixo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold">
            Qual Análise Você Precisa?
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Entre em contato para discutir seu desafio e encontrar a solução ideal.
          </p>
          <Link href="/contato">
            <Button className="bg-accent hover:bg-accent/90 text-primary gap-2">
              Solicitar Análise <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-12 mt-auto">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-merriweather font-bold text-primary mb-4">PRECISÃO</h3>
              <p className="text-sm text-secondary">Análise técnica especializada em risco, informação e conformidade.</p>
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
                <li><Link href="/contato" className="text-secondary hover:text-accent transition">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-lato font-semibold text-primary mb-4">Contato</h4>
              <p className="text-sm text-secondary mb-2">Email: precisao.analitica@gmail.com</p>
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
