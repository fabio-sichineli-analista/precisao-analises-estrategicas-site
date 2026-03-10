import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, BookOpen, Target } from "lucide-react";
import { Link } from "wouter";

/**
 * ELEGÂNCIA ANALÍTICA - Página Sobre
 * Design: Azul-índigo + Ouro-queimado
 * Foco: Apresentar expertise, formação e diferencial competitivo
 */

export default function About() {
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
            <Link href="/sobre" className="text-sm font-medium text-accent border-b-2 border-accent">Sobre</Link>
            <Link href="/contato" className="text-sm font-medium text-foreground hover:text-accent transition">Contato</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-white border-b border-border">
        <div className="container text-center space-y-4">
          <p className="text-accent font-lato font-semibold text-sm uppercase tracking-wide">Sobre Nós</p>
          <h1 className="font-merriweather text-4xl md:text-5xl font-bold text-primary">
            Expertise Rara em Análise Técnica
          </h1>
          <p className="text-lg text-secondary text-justify max-w-2xl mx-auto">
            Especialista em risco, informação e conformidade com formação acadêmica avançada e experiência prática.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container space-y-16">
          {/* Expertise */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-accent font-lato font-semibold text-sm uppercase tracking-wide">Formação e Experiência</p>
                <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary">
                  Mestrado em Direito da Sociedade da Informação
                </h2>
                <p className="text-lg text-secondary text-justify font-lato leading-relaxed">
                  Formação acadêmica avançada combinada com experiência prática em segurança, investigação, direito e educação.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-lato font-semibold text-primary mb-1">Mestrado Especializado</h3>
                    <p className="text-sm text-secondary text-justify">Direito da Sociedade da Informação com foco em tecnologia, privacidade e conformidade.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <BookOpen className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-lato font-semibold text-primary mb-1">Experiência Multidisciplinar</h3>
                    <p className="text-sm text-secondary text-justify">Segurança, investigação, direito, educação e aplicação prática de IA.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Target className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-lato font-semibold text-primary mb-1">Foco em Análise Técnica</h3>
                    <p className="text-sm text-secondary text-justify">Especialização em estruturação de análises defensáveis e orientadas para decisão.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 md:h-full">
              <img 
                src="/images/decision-support.jpg" 
                alt="Análise estratégica" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Diferencial */}
          <div className="bg-white border border-border rounded-lg p-8 md:p-12">
            <h2 className="font-merriweather text-3xl font-bold text-primary mb-8 text-center">
              Diferencial Competitivo
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-merriweather text-primary">Expertise Rara</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-secondary">
                  <p>Combinação rara de conhecimento em:</p>
                  <ul className="space-y-2">
                    <li>• Segurança da informação e investigação</li>
                    <li>• Direito e conformidade normativa</li>
                    <li>• Tecnologia e aplicação de IA</li>
                    <li>• Educação e estruturação de conhecimento</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-merriweather text-primary">Análise Estruturada</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-secondary">
                  <p>Metodologia rigorosa que garante:</p>
                  <ul className="space-y-2">
                    <li>• Separação clara entre fatos e inferências</li>
                    <li>• Documentação defensável</li>
                    <li>• Cenários bem definidos</li>
                    <li>• Linguagem técnica e precisa</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-merriweather text-primary">IA como Ferramenta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-secondary">
                  <p>Uso inteligente de IA para:</p>
                  <ul className="space-y-2">
                    <li>• Análise e síntese de documentos</li>
                    <li>• Comparação normativa</li>
                    <li>• Simulação de cenários</li>
                    <li>• Estruturação de relatórios</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-merriweather text-primary">Modelo Digital</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-secondary">
                  <p>Operação 100% digital oferece:</p>
                  <ul className="space-y-2">
                    <li>• Escalabilidade com poucas horas semanais</li>
                    <li>• Sem dependência geográfica</li>
                    <li>• Entrega rápida e eficiente</li>
                    <li>• Custos otimizados</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Público-alvo */}
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-accent font-lato font-semibold text-sm uppercase tracking-wide mb-2">Para Quem</p>
              <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary mb-4">
                Público-Alvo
              </h2>
              <p className="text-lg text-secondary text-justify max-w-2xl mx-auto">
                Organizações que precisam de análise técnica especializada para decisões complexas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-merriweather text-primary">Escritórios de Advocacia</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-secondary text-justify">
                  Parecer técnico informativo, análise de risco jurídico e conformidade com regulamentações.
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-merriweather text-primary">Empresas Médias</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-secondary text-justify">
                  Análise de conformidade, risco informacional e decisões estratégicas com múltiplos impactos.
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-merriweather text-primary">Instituições Educacionais</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-secondary text-justify">
                  Análise de processos, conformidade normativa e estruturação de conhecimento técnico.
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Modelo de Trabalho */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <h2 className="font-merriweather text-3xl font-bold mb-6">
              Modelo de Trabalho
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-lato font-semibold text-lg mb-4">Como Operamos</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Trabalho autônomo digital (MEI)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>6-8 horas semanais disponíveis</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Sem vendas diretas ou marketing agressivo</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Captação por network e indicações</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-lato font-semibold text-lg mb-4">Princípios</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Análise técnica, não consultoria executiva</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Apoio à decisão, não decisão</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Transparência sobre limitações</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Qualidade acima de volume</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white border-t border-border">
        <div className="container text-center space-y-6">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-primary">
            Pronto para Conversar?
          </h2>
          <p className="text-lg text-secondary text-justify max-w-2xl mx-auto">
            Entre em contato para discutir seu desafio e como podemos ajudar com análise técnica estruturada.
          </p>
          <Link href="/contato">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Solicitar Contato <ArrowRight className="w-4 h-4" />
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
