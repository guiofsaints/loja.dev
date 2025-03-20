import type { ReactNode } from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { Analytics } from '@vercel/analytics/next';
import Script from "next/script"
import { headers } from "next/headers"
import { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
})

// Interfaces para tipar nossos dados
interface DomainContent {
  title: string;
  description: string;
  mainKeyword: string;
}

interface DomainMap {
  [key: string]: DomainContent;
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const hostname = headersList.get('host') || 'faculdade.dev';

  // Personalizar metadados conforme o domínio
  const domainSpecificContent: DomainMap = {
    'faculdade.dev': {
      title: "faculdade.dev | Domínio Premium para Instituições de Ensino Superior",
      description: "Adquira o domínio premium faculdade.dev para sua instituição de ensino superior. Destaque-se no mundo digital com um endereço exclusivo e profissional.",
      mainKeyword: "faculdade.dev",
    },
    'escola.dev': {
      title: "escola.dev | Domínio Premium para Instituições de Ensino",
      description: "Adquira o domínio premium escola.dev para sua instituição de ensino. Ideal para escolas que desejam um endereço web exclusivo e profissional.",
      mainKeyword: "escola.dev",
    },
    'loja.dev': {
      title: "loja.dev | Domínio Premium para E-commerce de Tecnologia",
      description: "Adquira o domínio premium loja.dev para seu e-commerce de tecnologia. Ideal para lojas online que desejam um endereço web exclusivo e profissional.",
      mainKeyword: "loja.dev",
    },
    'jovem.dev': {
      title: "jovem.dev | Domínio Premium para Jovens Desenvolvedores",
      description: "Adquira o domínio premium jovem.dev para projetos voltados a jovens desenvolvedores. Ideal para plataformas de ensino e comunidades de programação.",
      mainKeyword: "jovem.dev",
    },
  };

  // Extrair o domínio base (sem www ou subdomínios)
  const baseDomain = hostname.split(':')[0].replace('www.', '');
  const content = domainSpecificContent[baseDomain] || domainSpecificContent['faculdade.dev'];

  return {
    title: content.title,
    description: content.description,
    keywords: `${content.mainKeyword}, domínios .dev, domínios premium, comprar domínio .dev, venda de domínios, domínios para desenvolvimento`,
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://${baseDomain}`,
      siteName: "Domínios Premium .dev",
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
    },
    alternates: {
      canonical: `https://${baseDomain}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const headersList = await headers();
  const hostname = headersList.get('host') || 'faculdade.dev';
  const baseDomain = hostname.split(':')[0].replace('www.', '');

  // Lista de todos os domínios disponíveis
  const allDomains: string[] = ['faculdade.dev', 'escola.dev', 'loja.dev', 'jovem.dev'];

  // Dados estruturados (JSON-LD) para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Domínio ${baseDomain}`,
    "description": `Domínio premium ${baseDomain} à venda para seu projeto ou negócio de tecnologia.`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "Entre em contato",
      "priceCurrency": "BRL",
      "url": `https://${baseDomain}`,
      "seller": {
        "@type": "Organization",
        "name": "Domínios Premium .dev"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1"
    }
  };

  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />

        {/* Adicionar links para domínios alternativos */}
        {allDomains.map(domain => (
          domain !== baseDomain && (
            <link
              key={domain}
              rel="alternate"
              hrefLang="pt-BR"
              href={`https://${domain}`}
            />
          )
        ))}
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}