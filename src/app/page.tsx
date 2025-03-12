"use client"

import { Card } from "@/components/ui/card"
import { Check, Globe, Shield, Star, MessageCircle, Code } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

// Lista de domínios disponíveis
const domains = [
  {
    name: "loja.dev",
    price: "Consultar",
    description: "Domínio premium para e-commerce de tecnologia",
    benefits: [
      "Perfeito para lojas virtuais de tecnologia",
      "Nome curto, direto e fácil de lembrar",
      "Extensão .dev ideal para soluções de e-commerce",
      "Valorização crescente no mercado digital",
    ],
  },
  {
    name: "escola.dev",
    price: "Consultar",
    description: "Domínio premium para instituições educacionais",
    benefits: [
      "Ideal para escolas e cursos online",
      "Nome memorável e relevante para educação",
      "Extensão .dev valorizada para tecnologia educacional",
      "Excelente para projetos educacionais tecnológicos",
    ],
  },

  {
    name: "faculdade.dev",
    price: "Consultar",
    description: "Domínio premium para ensino superior",
    benefits: [
      "Excelente para faculdades e universidades",
      "Nome específico para instituições de ensino superior",
      "Extensão .dev perfeita para cursos de tecnologia",
      "Diferencial para instituições inovadoras",
    ],
  },
  {
    name: "jovem.dev",
    price: "Consultar",
    description: "Domínio premium para iniciativas educacionais e comunidades jovens de tecnologia",
    benefits: [
      "Perfeito para projetos voltados à formação de jovens desenvolvedores",
      "Nome moderno e fácil de lembrar",
      "Extensão .dev valorizada para tecnologia e inovação",
      "Ideal para comunidades, cursos e programas educacionais"
    ]
  }
]

export default function DomainSalesPage() {
  // Substitua com o número de WhatsApp real (com código do país)
  const whatsappNumber = "11945176035"

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <header className="container mx-auto py-6 px-4 md:py-8 border-b border-border/40">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              LojaDev
            </span>
          </div>
          <WhatsAppButton number={whatsappNumber} text="Fale Conosco" variant="outline" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              Domínios Premium .dev
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Adquira um domínio premium .dev para o seu projeto ou negócio. Domínios exclusivos com grande potencial de
              valorização.
            </p>
          </div>

          {/* Lista de domínios */}
          <div className="grid gap-8 mb-16">
            {domains.map((domain, index) => (
              <Card
                key={index}
                className="overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 p-6">
                    <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center">
                      <span className="text-green-400">{domain.name}</span>
                    </h2>
                    <p className="text-muted-foreground mb-4">{domain.description}</p>

                    <h3 className="text-sm font-medium text-foreground/80 mb-2">BENEFÍCIOS:</h3>
                    <ul className="space-y-2 mb-6">
                      {domain.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm p-6 flex flex-col justify-between border-l border-border/50">
                    <div>
                      <div className="text-center mb-4">
                        <div className="text-sm text-muted-foreground mb-1">PREÇO</div>
                        <div className="text-xl font-bold text-primary flex items-center justify-center gap-1">
                          <span>{domain.price}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary p-0 h-auto"
                            onClick={() => {
                              const encodedMessage = encodeURIComponent(
                                `Olá! Estou interessado no domínio ${domain.name}. Qual o valor?`,
                              )
                              window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
                            }}
                          >
                            <MessageCircle className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>

                      <div className="bg-background/50 rounded-lg border border-border/50 p-3 mb-4">
                        <div className="text-xs text-muted-foreground mb-1">EXTENSÃO</div>
                        <div className="font-medium text-foreground/90">.dev (Google Registry)</div>
                      </div>
                    </div>

                    <WhatsAppButton
                      number={whatsappNumber}
                      text="Tenho interesse"
                      message={`Olá! Estou interessado no domínio ${domain.name}. Poderia me informar o valor e condições?`}
                      className="w-full"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 p-8 text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Por que escolher domínios .dev?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left mt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4 border border-primary/20">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2 text-foreground">Segurança HTTPS</h3>
                <p className="text-sm text-muted-foreground">
                  Todos os domínios .dev são seguros por padrão, exigindo HTTPS.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4 border border-primary/20">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2 text-foreground">Prestígio e Relevância</h3>
                <p className="text-sm text-muted-foreground">
                  Extensão gerenciada pelo Google, com alta credibilidade no mercado.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4 border border-primary/20">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2 text-foreground">Valorização Crescente</h3>
                <p className="text-sm text-muted-foreground">
                  Domínios .dev têm apresentado valorização constante desde seu lançamento.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/20 backdrop-blur-sm border border-border/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Perguntas frequentes</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">Como funciona o processo de compra?</h4>
                <p className="text-muted-foreground text-sm">
                  Após o contato inicial, discutiremos os detalhes da transferência e formas de pagamento. Após o
                  pagamento, iniciaremos o processo de transferência do domínio.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Quanto tempo leva para transferir o domínio?</h4>
                <p className="text-muted-foreground text-sm">
                  O processo de transferência geralmente leva de 3 a 5 dias úteis, dependendo do registrador.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Os preços são negociáveis?</h4>
                <p className="text-muted-foreground text-sm">
                  Estamos abertos a propostas sérias. Entre em contato para discutirmos.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Quais domínios estão disponíveis para compra?</h4>
                <p className="text-muted-foreground text-sm">
                  Atualmente temos disponíveis os domínios escola.dev, loja.dev e faculdade.dev, mas podemos verificar a
                  disponibilidade de outros domínios de seu interesse.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Como consultar os preços?</h4>
                <p className="text-muted-foreground text-sm">
                  Os preços dos domínios são personalizados. Entre em contato via WhatsApp para receber uma cotação
                  específica para o domínio de seu interesse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-background/80 backdrop-blur-sm border-t border-border/40 text-foreground py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© {new Date().getFullYear()} LojaDev. Todos os direitos reservados.</p>
          <p className="text-sm text-muted-foreground">
            Estes domínios estão disponíveis para venda. Entre em contato para mais informações.
          </p>
        </div>
      </footer>
    </div>
  )
}

