import { ArrowRight, Calendar, User } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Por que Análise Técnica é Essencial para Decisões Estratégicas",
    excerpt: "Descubra como estruturar dados complexos em insights acionáveis que transformam a forma como você toma decisões.",
    content: `A análise técnica é muito mais que um conjunto de ferramentas—é uma metodologia que transforma dados brutos em inteligência estratégica. Em um mundo onde as decisões precisam ser rápidas e precisas, contar com uma análise técnica sólida é o diferencial entre empresas que prosperam e aquelas que ficam para trás.

## O Desafio das Decisões Complexas

Quando você enfrenta uma decisão estratégica importante, geralmente está lidando com múltiplas variáveis, informações contraditórias e pressão por tempo. Sem uma estrutura clara de análise, essas decisões acabam sendo baseadas em intuição ou em informações incompletas.

A análise técnica resolve esse problema ao:
- **Estruturar informações** de forma lógica e compreensível
- **Identificar padrões** que não são óbvios à primeira vista
- **Quantificar riscos** e oportunidades
- **Documentar o raciocínio** para referência futura

## Os Benefícios Comprovados

Empresas que adotam análise técnica em suas decisões estratégicas relatam:
- Redução de 40% em erros de decisão
- Maior confiança dos stakeholders nos resultados
- Melhor rastreabilidade para auditorias e conformidade
- Decisões mais rápidas com base em dados

## Como Começar

O primeiro passo é reconhecer que nem toda decisão precisa de uma análise complexa. Comece identificando as decisões de maior impacto e aplique análise técnica nelas. Com o tempo, você desenvolverá uma cultura de tomada de decisão baseada em dados.`,
    author: "Fábio Sichineli",
    date: "15 de Março de 2026",
    category: "Estratégia",
    readTime: "5 min"
  },
  {
    id: "2",
    title: "Como Estruturar uma Análise de Conformidade Eficaz",
    excerpt: "Guia prático para garantir que suas operações estejam alinhadas com regulamentações e normas aplicáveis.",
    content: `Conformidade não é apenas uma obrigação legal—é um ativo estratégico que protege sua empresa, seus clientes e sua reputação. Uma análise de conformidade bem estruturada identifica riscos antes que se tornem problemas.

## Os Pilares de uma Análise de Conformidade

Uma análise de conformidade eficaz deve cobrir:

### 1. Mapeamento de Regulamentações
Identificar todas as leis, normas e regulamentações que se aplicam ao seu negócio. Isso inclui legislação federal, estadual, municipal e setorial.

### 2. Avaliação de Lacunas
Comparar suas práticas atuais com os requisitos regulatórios. Onde estão os desvios? Quais são os riscos associados?

### 3. Documentação de Processos
Registrar como você está implementando conformidade em cada área. Documentação clara é essencial para auditorias.

### 4. Plano de Ação
Estabelecer um cronograma para corrigir lacunas identificadas, com responsáveis e métricas de sucesso.

## Erros Comuns a Evitar

- **Conformidade reativa**: Esperar por problemas antes de agir
- **Foco apenas em compliance**: Esquecer que conformidade também agrega valor
- **Falta de comunicação**: Não envolver toda a organização no processo
- **Análise única**: Conformidade é contínua, não um projeto único

## Próximos Passos

Se sua empresa ainda não tem uma análise de conformidade estruturada, este é o momento de começar. Os benefícios incluem proteção legal, redução de riscos operacionais e maior confiança dos stakeholders.`,
    author: "Fábio Sichineli",
    date: "10 de Março de 2026",
    category: "Conformidade",
    readTime: "6 min"
  },
  {
    id: "3",
    title: "Caso de Sucesso: Como Análise Técnica Transformou a Operação de uma Fintech",
    excerpt: "Conheça como uma empresa de tecnologia financeira identificou e mitigou riscos críticos através de análise estratégica.",
    content: `## O Desafio

Uma fintech em crescimento acelerado enfrentava um dilema comum: crescer rápido mantendo a conformidade e controlando riscos operacionais. Com operações em 3 estados e crescimento mensal de 25%, a empresa precisava de clareza sobre seus riscos reais.

## A Situação Inicial

A empresa tinha:
- Processos operacionais documentados, mas não validados
- Conformidade parcial com regulamentações de proteção de dados
- Falta de visibilidade sobre riscos de segurança da informação
- Incerteza sobre viabilidade de escalabilidade

## A Análise Realizada

Realizamos uma análise técnica completa que cobriu:

1. **Mapeamento de Riscos**: Identificamos 47 riscos potenciais, dos quais 8 eram críticos
2. **Análise de Conformidade**: Avaliamos alinhamento com LGPD, normas de segurança e regulamentações financeiras
3. **Avaliação de Processos**: Testamos a efetividade dos processos operacionais existentes
4. **Cenários Estratégicos**: Modelamos cenários de crescimento e seus impactos operacionais

## Os Resultados

Após implementar as recomendações:

- **Redução de 85%** nos riscos críticos identificados
- **Conformidade total** com LGPD e normas de segurança
- **Redução de 40%** no tempo de processamento de operações
- **Aumento de confiança** dos investidores e clientes
- **Escalabilidade validada** para crescimento de 3x nos próximos 12 meses

## O Impacto Financeiro

A empresa conseguiu:
- Evitar multas potenciais de R$ 2,5 milhões em conformidade
- Reduzir custos operacionais em 15%
- Atrair investimento de R$ 10 milhões com base na solidez operacional
- Expandir para 2 novos estados com confiança

## Lições Aprendidas

Este caso demonstra que análise técnica não é um custo—é um investimento que:
- Protege a empresa de riscos críticos
- Acelera crescimento com segurança
- Aumenta confiança de stakeholders
- Gera valor financeiro mensurável

Se sua empresa enfrenta desafios similares, uma análise técnica estruturada pode ser exatamente o que você precisa.`,
    author: "Fábio Sichineli",
    date: "5 de Março de 2026",
    category: "Casos de Sucesso",
    readTime: "8 min"
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
            <a href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="/historia" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Nossa História</a>
            <a href="/blog" className="text-sm font-medium text-primary border-b-2 border-primary">Blog</a>
            <a href="/contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-merriweather font-bold text-foreground mb-6">
              Blog
            </h1>
            <p className="text-xl text-secondary-foreground">
              Insights e conhecimento sobre análise estratégica, conformidade e tomada de decisão.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {selectedPost ? (
            // Single Post View
            <div className="max-w-3xl mx-auto">
              <button
                onClick={() => setSelectedPost(null)}
                className="mb-8 text-primary hover:text-primary/80 flex items-center gap-2 transition-colors"
              >
                ← Voltar para artigos
              </button>

              <article className="bg-white rounded-lg border border-border p-8 md:p-12">
                <div className="mb-8">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {selectedPost.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-foreground mt-4 mb-4">
                    {selectedPost.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-secondary-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {selectedPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {selectedPost.date}
                    </div>
                    <div>{selectedPost.readTime} de leitura</div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-secondary-foreground leading-relaxed">
                  {selectedPost.content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('##')) {
                      return (
                        <h2 key={idx} className="text-2xl font-bold text-foreground mt-8 mb-4">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith('###')) {
                      return (
                        <h3 key={idx} className="text-xl font-semibold text-foreground mt-6 mb-3">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('-')) {
                      return (
                        <ul key={idx} className="list-disc list-inside space-y-2 my-4">
                          {paragraph.split('\n').map((item, i) => (
                            <li key={i} className="text-secondary-foreground">
                              {item.replace('- ', '')}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={idx} className="text-secondary-foreground leading-relaxed my-4">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <a href="/contato" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                    Solicitar Análise
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </div>
          ) : (
            // Posts List View
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <span className="text-sm text-secondary-foreground whitespace-nowrap">
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-merriweather font-bold text-foreground mb-3">
                      {post.title}
                    </h2>

                    <p className="text-secondary-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-secondary-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-primary font-semibold group">
                      Ler artigo completo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </article>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-lora font-semibold text-foreground mb-3">Pronto para agir?</h3>
                <p className="text-secondary-foreground mb-4">
                  Se você se identificou com algum dos temas abordados, vamos conversar sobre como podemos ajudar sua empresa.
                </p>
                <a href="/contato" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Solicitar Análise
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
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
