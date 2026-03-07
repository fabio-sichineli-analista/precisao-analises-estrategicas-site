import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    category: "Serviços",
    question: "Qual é a diferença entre análise de risco, informação e conformidade?",
    answer: "Análise de Risco identifica e avalia ameaças potenciais aos seus negócios. Análise de Informação estrutura dados complexos em insights acionáveis. Análise de Conformidade garante que suas operações estejam alinhadas com regulamentações e normas aplicáveis. Cada uma aborda um aspecto diferente da gestão estratégica."
  },
  {
    id: "2",
    category: "Processo",
    question: "Como funciona o processo de análise?",
    answer: "Nosso processo segue 5 etapas: (1) Coleta de Informações - entendemos seu contexto; (2) Análise Técnica - aplicamos metodologias comprovadas; (3) Identificação de Cenários - mapeamos possibilidades; (4) Elaboração de Relatório - documentamos achados; (5) Apresentação e Esclarecimentos - explicamos recomendações. Todo o processo é transparente e colaborativo."
  },
  {
    id: "3",
    category: "Processo",
    question: "Quanto tempo leva uma análise?",
    answer: "O prazo varia conforme a complexidade. Análises simples levam 5-10 dias úteis. Análises moderadas, 2-3 semanas. Análises complexas podem levar até 4-6 semanas. Fornecemos um cronograma detalhado na proposta inicial para que você saiba exatamente quando esperar os resultados."
  },
  {
    id: "4",
    category: "Investimento",
    question: "Qual é o valor de uma análise?",
    answer: "Nossos valores são competitivos e baseados na complexidade do projeto. Oferecemos diferentes pacotes: Análise Básica (para pequenas demandas), Análise Padrão (mais comum) e Análise Premium (projetos complexos). Solicitamos um briefing inicial para fornecer uma proposta personalizada e sem compromisso."
  },
  {
    id: "5",
    category: "Aplicações",
    question: "Posso usar a análise em processos judiciais ou regulatórios?",
    answer: "Sim. Nossos relatórios são estruturados para serem utilizados em contextos formais, incluindo processos judiciais, auditorias regulatórias e conformidade com órgãos fiscalizadores. Aplicamos rigor técnico e documentação completa para garantir validade e credibilidade dos achados."
  },
  {
    id: "6",
    category: "Público",
    question: "Que tipo de empresa pode se beneficiar de nossas análises?",
    answer: "Empresas de todos os tamanhos podem se beneficiar: startups que precisam validar decisões estratégicas, PMEs que enfrentam riscos operacionais, e grandes corporações que necessitam de análises especializadas. Também trabalhamos com órgãos públicos e instituições financeiras."
  },
  {
    id: "7",
    category: "Entrega",
    question: "Como é entregue o relatório?",
    answer: "Entregamos um relatório executivo em formato digital (PDF) com: resumo executivo, análise detalhada, cenários identificados, recomendações e apêndices técnicos. Você também recebe uma apresentação verbal onde esclarecemos dúvidas e discutimos próximos passos."
  }
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", ...Array.from(new Set(faqItems.map(item => item.category)))];
  const filteredItems = selectedCategory === "Todos" 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
            <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Início</a>
            <a href="/servicos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="/sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="/faq" className="text-sm font-medium text-primary border-b-2 border-primary">FAQ</a>
            <a href="/historia" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Nossa História</a>
            <a href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Blog</a>
            <a href="/contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-merriweather font-bold text-foreground mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-secondary-foreground">
              Respostas para as dúvidas mais comuns sobre nossos serviços de análise estratégica.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Category Filter */}
            <div className="mb-12">
              <h2 className="text-lg font-lora font-semibold text-foreground mb-4">Filtrar por Categoria</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="border border-border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-lora font-semibold text-foreground">
                          {item.question}
                        </h3>
                      </div>
                      <div className={`flex-shrink-0 transition-transform ${expandedId === item.id ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {expandedId === item.id && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-secondary-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-lora font-semibold text-foreground mb-3">Não encontrou sua resposta?</h3>
              <p className="text-secondary-foreground mb-4">
                Entre em contato conosco para esclarecer suas dúvidas específicas.
              </p>
              <a href="/contato">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Enviar Mensagem
                </Button>
              </a>
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
