import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PA</span>
                </div>
                <div>
                  <h3 className="font-merriweather font-bold text-foreground">PRECISÃO</h3>
                  <p className="text-xs text-muted-foreground">Análises Estratégicas</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Análise estratégica e consultoria para projetos de trabalho autônomo digital.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-lora font-semibold text-foreground mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Análise
                  </a>
                </li>
                <li>
                  <a href="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-lora font-semibold text-foreground mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:contato@precisao.com.br" className="hover:text-primary transition-colors">
                    contato@precisao.com.br
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+554799182229" className="hover:text-primary transition-colors">
                    (47) 99182-0229
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Santa Catarina, Brasil</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} PRECISÃO Análises Estratégicas. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
