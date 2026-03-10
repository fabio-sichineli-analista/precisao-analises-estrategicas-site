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
    category: "Sobre o Projeto",
    question: "O que é a análise do projeto PRECISÃO Análises Estratégicas?",
    answer: "É uma avaliação estratégica completa de um projeto de trabalho autônomo digital que utiliza inteligência artificial como ferramenta de apoio. A análise aborda estrutura, viabilidade, pontos fortes, fracos e recomendações de melhorias."
  },
  {
    id: "2",
    category: "Sobre o Projeto",
    question: "Qual é a nota geral do projeto?",
    answer: "O projeto recebeu uma nota geral de 7,3/10. Isso significa que possui uma estrutura sólida e profissional, mas ainda precisa validar a viabilidade no mercado através de projetos-piloto."
  },
  {
    id: "3",
    category: "Sobre o Projeto",
    question: "O projeto está pronto para começar a operar?",
    answer: "Sim, a estrutura operacional está completa e pronta. No entanto, recomenda-se validar os processos na prática através de 3-5 projetos-piloto antes de escalar totalmente."
  },
  {
    id: "4",
    category: "Pontos Fortes",
    question: "Quais são os principais pontos fortes do projeto?",
    answer: "Os principais pontos fortes são: metodologia estruturada, completude operacional com todas as ferramentas necessárias, posicionamento estratégico claro, e aspectos práticos bem definidos como precificação e gestão de tempo."
  },
  {
    id: "5",
    category: "Pontos Fortes",
    question: "O projeto tem diferenciação no mercado?",
    answer: "Sim, o projeto se diferencia por: posicionamento como 'análise estratégica' (não consultoria), uso inteligente de IA como ferramenta de apoio, expertise rara em segurança/direito/perícia, e modelo 100% digital."
  },
  {
    id: "6",
    category: "Desafios",
    question: "Quais são os principais pontos de atenção?",
    answer: "Os principais desafios são: complexidade operacional (muitas ferramentas), falta de validação de mercado, ausência de estratégia de captação de clientes, e limitações de escalabilidade pelo modelo baseado em tempo pessoal."
  },
  {
    id: "7",
    category: "Desafios",
    question: "Como resolver a complexidade operacional?",
    answer: "Recomenda-se criar um fluxograma visual simplificado de 1 página que mostre quando usar cada ferramenta, consolidar checklists redundantes, e estabelecer uma rotina clara de trabalho."
  },
  {
    id: "8",
    category: "Próximos Passos",
    question: "Qual é o próximo passo mais importante?",
    answer: "O próximo passo mais importante é realizar 3-5 projetos-piloto para validar os processos na prática, testar a precificação, ajustar tempos e coletar feedback real do mercado."
  },
  {
    id: "9",
    category: "Próximos Passos",
    question: "Quanto tempo deve levar para validar o projeto?",
    answer: "Recomenda-se um período de 30-90 dias para as fases de validação, refinamento de posicionamento e estabelecimento de rotina operacional, dependendo da disponibilidade e demanda."
  },
  {
    id: "10",
    category: "Próximos Passos",
    question: "Como aumentar a escalabilidade do projeto?",
    answer: "Para aumentar a escalabilidade, considere: criar templates e relatórios padronizados para situações recorrentes, desenvolver produtos complementares (webinars, cursos), estabelecer parcerias estratégicas, e eventualmente contratar apoio administrativo."
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
            <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Análise</a>
            <a href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contato</a>
            <a href="/faq" className="text-sm font-medium text-primary">FAQ</a>
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
              Respostas para as dúvidas mais comuns sobre a análise e o projeto.
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
              <a href="/contact">
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
