import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";
import { Link } from "wouter";

/**
 * ELEGÂNCIA ANALÍTICA - Página Home
 * Design: Azul-índigo + Ouro-queimado
 * Tipografia: Merriweather (títulos) + Lato (corpo)
 * Foco: Apresentar serviços de análise técnica com autoridade e sofisticação
 */

export default function Home() {
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
            <Link href="/contato" className="text-sm font-medium text-foreground hover:text-accent transition">Contato</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-accent font-lato font-semibold text-sm uppercase tracking-wide">Análise Técnica Especializada</p>
                <h2 className="font-merriweather text-4xl md:text-5xl font-bold text-primary leading-tight">
                  Apoio à Decisão (Estruturado)
                </h2>
                <p className="text-lg text-secondary text-justify font-lato leading-relaxed">
                  Análise técnica de risco, informação e conformidade para decisões complexas. Relatórios estruturados, defensáveis e orientados para ação.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/servicos">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto">
                    Conheça os Serviços <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto">
                    Solicitar Análise
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <img 
                src="/images/hero-analysis.jpg" 
                alt="Análise de dados e risco" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 md:py-24 bg-white border-t border-b border-border">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent font-lato font-semibold text-sm uppercase tracking-wide mb-2">Especialização</p>
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary mb-4">
              Três Pilares de Análise
            </h2>
            <p className="text-lg text-secondary text-justify max-w-2xl mx-auto">
              Cada tipo de análise tem objetivo específico e entrega estruturada para apoiar decisões complexas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Análise de Risco */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-merriweather text-primary">Análise de Risco</CardTitle>
                <CardDescription className="text-secondary">Mapeamento e avaliação</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground">
                  Mapeamento de riscos informacionais, jurídicos e operacionais relacionados a processos, tecnologias ou decisões.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Exposição informacional</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Fragilidades de controle</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Impactos potenciais</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Análise de Informação */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-merriweather text-primary">Análise de Informação</CardTitle>
                <CardDescription className="text-secondary">Fluxo e tratamento de dados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground">
                  Avaliação de uso, fluxo e tratamento de informações sensíveis em contextos digitais ou tecnológicos.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Fluxo de dados</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Controles informacionais</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Implicações técnicas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Análise de Conformidade */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-merriweather text-primary">Análise de Conformidade</CardTitle>
                <CardDescription className="text-secondary">Normas e regulamentações</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground">
                  Avaliação de conformidade com normas, processos e regulamentações aplicáveis ao contexto.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Conformidade normativa</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Processos e procedimentos</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Riscos regulatórios</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full order-2 md:order-1">
              <img 
                src="/images/services-section.jpg" 
                alt="Três pilares de análise" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="space-y-3">
                <p className="text-accent font-lato font-semibold text-sm uppercase tracking-wide">Metodologia</p>
                <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary">
                  Análise Estruturada e Defensável
                </h2>
                <p className="text-lg text-secondary text-justify font-lato leading-relaxed">
                  Cada análise segue metodologia rigorosa, com separação clara entre fatos, inferências e cenários possíveis.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10">
                      <span className="text-accent font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-lato font-semibold text-primary mb-1">Escopo Claro</h3>
                    <p className="text-sm text-secondary text-justify">Definição precisa do objeto, limitações e tipo de decisão a apoiar.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10">
                      <span className="text-accent font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-lato font-semibold text-primary mb-1">Análise Técnica</h3>
                    <p className="text-sm text-secondary text-justify">Estruturação de dados, identificação de riscos e cenários possíveis.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10">
                      <span className="text-accent font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-lato font-semibold text-primary mb-1">Relatório Defensável</h3>
                    <p className="text-sm text-secondary text-justify">Documento formal que apoia decisão sem assumir responsabilidade executiva.</p>
                  </div>
                </div>
              </div>

              <Link href="/servicos">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Ver Todos os Serviços <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold">
            Pronto para Estruturar sua Decisão?
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Entre em contato para discutir seu desafio técnico e como podemos apoiar com análise estruturada.
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
              <p className="text-sm text-secondary text-justify">Análise técnica especializada em risco, informação e conformidade.</p>
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
              <p className="text-sm text-secondary text-justify mb-2">Email: precisao.analitica@gmail.com</p>
              <p className="text-sm text-secondary text-justify">Disponível para análises técnicas sob demanda.</p>
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
