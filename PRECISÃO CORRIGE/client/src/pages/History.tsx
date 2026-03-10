import { Button } from "@/components/ui/button";

export default function History() {
  return (
    <div className="min-h-screen bg-white">
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
            <a href="/historia" className="text-sm font-medium text-primary border-b-2 border-primary">Nossa História</a>
            <a href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Blog</a>
            <a href="/contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-lato font-semibold uppercase tracking-wide mb-3 text-center">Nossa Trajetória</p>
            <h1 className="font-merriweather text-4xl md:text-5xl font-bold text-foreground mb-4">
              COMO A PRECISÃO NASCEU
            </h1>
            <p className="text-lg text-secondary">
              Uma história de frustração transformada em propósito, e de inquietação que encontrou seu caminho
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Section 1: The Beginning */}
            <div className="mb-12">
              <h2 className="font-merriweather text-3xl font-bold text-foreground mb-6">
                O Começo: Frustração e Impotência
              </h2>
              <p className="text-secondary-foreground leading-relaxed mb-4">
                Ao longo da minha trajetória profissional, presenciei muitas decisões importantes sendo tomadas sem fundamento sólido, por pessoas pouco preparadas e movidas pelo impulso. Essas situações raramente eram assumidas como falhas e, sempre que aconteciam, eu sentia uma profunda frustração: a minha falta de autonomia me incomodava e a sensação de impotência aumentava ao ver os prejuízos causados por escolhas negligentes.
              </p>
            </div>

            {/* Section 2: 2012 */}
            <div className="mb-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
              <h2 className="font-merriweather text-3xl font-bold text-foreground mb-6">
                2012: A Primeira Semente
              </h2>
              <p className="text-secondary-foreground leading-relaxed mb-4">
                Em 2012, nasceu a primeira versão do que hoje chamamos de "Precisão". Naquela época, o foco era outro: uma iniciativa voltada a promover mais segurança às pessoas em situações delicadas e de risco, ajudando‑as a se preparar melhor e a agir com responsabilidade. Ainda não havia uma proposta direta de qualificar a tomada de decisão em ambientes organizacionais, mas já existia uma preocupação clara com proteção, prudência e responsabilidade.
              </p>
            </div>

            {/* Section 3: Evolution */}
            <div className="mb-12">
              <h2 className="font-merriweather text-3xl font-bold text-foreground mb-6">
                A Evolução: Amadurecimento e Novo Significado
              </h2>
              <p className="text-secondary-foreground leading-relaxed mb-4">
                Com o passar dos anos e, principalmente, com a Revolução da Tecnologia da Informação e Comunicação, essa ideia amadureceu e ganhou um novo significado. Percebi que a experiência acumulada poderia ser redirecionada para um desafio ainda mais amplo: apoiar decisões complexas por meio do estudo de cenários e da elaboração de relatórios estruturados, contribuindo para reduzir, mitigar ou mesmo evitar lacunas que eu via diariamente.
              </p>
            </div>

            {/* Section 4: Today */}
            <div className="mb-12 p-8 bg-accent/5 rounded-lg border border-accent/20">
              <h2 className="font-merriweather text-3xl font-bold text-foreground mb-6">
                2026: Precisão Hoje
              </h2>
              <p className="text-secondary-foreground leading-relaxed">
                Hoje, em 2026, a Precisão se apresenta como uma proposta clara: oferecer suporte qualificado à tomada de decisão, com base em análise criteriosa de informações e cenários. É a evolução natural de uma inquietação que começou em outro contexto e que, ao longo do tempo, encontrou um caminho mais completo e maduro.
              </p>
            </div>

            {/* Section 5: Our Way */}
            <div className="mb-12">
              <h2 className="font-merriweather text-3xl font-bold text-foreground mb-6">
                Nosso Jeito de Atuar
              </h2>
              <p className="text-secondary-foreground leading-relaxed mb-6">
                A Precisão não foi criada para ser "apenas mais uma empresa" em busca de resultados financeiros. Ela nasce da preocupação real com as consequências de cada escolha e com as pessoas impactadas por essas decisões. Nosso foco está em qualificar o processo decisório, e não em empurrar soluções prontas ou dados desconectados da realidade.
              </p>
              <p className="text-secondary-foreground leading-relaxed mb-8">
                Por isso, atuamos guiados por três princípios que orientam todo o nosso trabalho:
              </p>

              {/* Principles */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 border border-primary/20 rounded-lg bg-white hover:shadow-lg transition">
                  <h3 className="font-merriweather text-xl font-bold text-primary mb-3">Ética</h3>
                  <p className="text-secondary-foreground">
                    Conduzir cada projeto com honestidade, respeito e responsabilidade, colocando a integridade acima da conveniência.
                  </p>
                </div>
                <div className="p-6 border border-accent/20 rounded-lg bg-white hover:shadow-lg transition">
                  <h3 className="font-merriweather text-xl font-bold text-accent mb-3">Rigor</h3>
                  <p className="text-secondary-foreground">
                    Tratar dados, informações e cenários com profundidade e critério técnico, evitando análises superficiais e conclusões apressadas.
                  </p>
                </div>
                <div className="p-6 border border-primary/20 rounded-lg bg-white hover:shadow-lg transition">
                  <h3 className="font-merriweather text-xl font-bold text-primary mb-3">Transparência</h3>
                  <p className="text-secondary-foreground">
                    Deixar claro como chegamos às recomendações, quais são as limitações dos dados e quais possíveis impactos cada decisão pode gerar.
                  </p>
                </div>
              </div>

              <p className="text-secondary-foreground leading-relaxed italic">
                Esse é o nosso jeito de atuar: estar ao lado de pessoas e organizações que querem decidir melhor, com mais consciência, clareza e segurança – entendendo que, por trás de cada decisão, existem histórias, responsabilidades e vidas reais envolvidas.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20 text-center">
              <h3 className="text-2xl font-merriweather font-bold text-foreground mb-3">Pronto para Decidir Melhor?</h3>
              <p className="text-secondary-foreground mb-6">
                Se essa história ressoa com você e sua organização, vamos conversar sobre como podemos ajudar.
              </p>
              <a href="/contato">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Solicitar Análise
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-merriweather font-bold text-foreground mb-3">PRECISÃO</h4>
                <p className="text-sm text-secondary">
                  Análise técnica especializada em risco, informação e conformidade.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Fábio Sichineli
                </p>
                <p className="text-xs text-muted-foreground">
                  Analista Técnico em Risco, Informação e Conformidade
                </p>
              </div>
              <div>
                <h4 className="font-lato font-semibold text-foreground mb-3 text-sm">Serviços</h4>
                <ul className="space-y-2">
                  <li><a href="/servicos" className="text-sm text-secondary hover:text-primary transition">Análise de Risco</a></li>
                  <li><a href="/servicos" className="text-sm text-secondary hover:text-primary transition">Análise de Informação</a></li>
                  <li><a href="/servicos" className="text-sm text-secondary hover:text-primary transition">Análise de Conformidade</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-lato font-semibold text-foreground mb-3 text-sm">Empresa</h4>
                                 <li><a href="/historia" className="text-sm text-secondary hover:text-primary transition">Nossa História</a></li>
                  <li><a href="/faq" className="text-sm text-secondary hover:text-primary transition">FAQ</a></li>
                  <li><a href="/blog" className="text-sm text-secondary hover:text-primary transition">Blog</a></li> <li><a href="/blog" className="text-sm text-secondary hover:text-primary transition">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-lato font-semibold text-foreground mb-3 text-sm">Contato</h4>
                <p className="text-sm text-secondary mb-2">
                  Email: precisao.analitica@gmail.com
                </p>
                <p className="text-sm text-secondary mb-2">
                  Telefone: 47 99182-0229
                </p>
                <p className="text-sm text-secondary">
                  Disponível para análises técnicas sob demanda.
                </p>
              </div>
            </div>
            <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
              <p>© 2026 PRECISÃO Análises Estratégicas. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
