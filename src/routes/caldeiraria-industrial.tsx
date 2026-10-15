import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ADDRESS, ADDRESS_LINE, BRAND, INSTAGRAM_URL, MAPS_URRUCUI_URL, PHONE_DISPLAY, PHONE_E164, QUOTE_EMAIL, SITE_URL, whatsappLink } from "@/lib/services";
import logo from "@/assets/logo-atr.svg.asset.json";
import welding from "@/assets/hero-welding.jpg.asset.json";

const title = "Caldeiraria Industrial | ATR METAL";
const description = "Fabricação de equipamentos e estruturas industriais sob medida. Projetos fornecidos pelo cliente ou desenvolvidos pela ATR METAL.";
const pageUrl = `${SITE_URL}/caldeiraria-industrial`;
const equipment = [
  "Ventiladores e exaustores industriais", "Chaminés industriais", "Multiciclones", "Ciclones",
  "Redlers para transporte a seco", "Roscas extratoras",
  "Pipe racks (estruturas metálicas para suporte de tubulações)", "Plataformas industriais",
  "Escadas tipo marinheiro", "Guarda-corpos", "Corrimãos",
];
const quoteUrl = whatsappLink("Olá, gostaria de solicitar um orçamento de caldeiraria industrial. Tenho um projeto, desenho técnico ou necessidade industrial para apresentar.");

export const Route = createFileRoute("/caldeiraria-industrial")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Service", name: "Caldeiraria Industrial", description, url: pageUrl,
            provider: { "@type": "LocalBusiness", name: BRAND, url: SITE_URL, telephone: PHONE_E164, email: QUOTE_EMAIL,
              address: { "@type": "PostalAddress", streetAddress: `${ADDRESS.street}, ${ADDRESS.district}`, addressLocality: ADDRESS.city, addressRegion: ADDRESS.state, postalCode: ADDRESS.cep, addressCountry: "BR" } },
            hasOfferCatalog: { "@type": "OfferCatalog", name: "Soluções em caldeiraria industrial", itemListElement: equipment.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) } },
          { "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Caldeiraria Industrial", item: pageUrl },
          ] },
        ],
      }),
    }],
  }),
  component: CaldeirariaPage,
});

function CaldeirariaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 min-h-16 flex items-center justify-between gap-4">
          <Link to="/" aria-label={`${BRAND} — página inicial`} className="shrink-0"><img src={logo.url} alt={BRAND} className="h-7 sm:h-8 w-auto" /></Link>
          <nav aria-label="Navegação principal" className="flex items-center gap-4 sm:gap-5 text-xs font-mono uppercase">
            <Link to="/" hash="servicos" className="text-muted-foreground hover:text-foreground">Serviços</Link>
            <Link to="/" hash="contato" className="text-muted-foreground hover:text-foreground">Contato</Link>
          </nav>
        </div>
      </header>
      <main>
        <section className="relative overflow-hidden border-b border-border/40">
          <img src={welding.url} alt="Soldagem de estrutura metálica" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
            <nav aria-label="Trilha" className="text-xs font-mono uppercase text-muted-foreground mb-8"><Link to="/" className="hover:text-foreground">Início</Link> / <span className="text-primary">Caldeiraria Industrial</span></nav>
            <h1 className="text-display font-display uppercase max-w-4xl">Caldeiraria Industrial</h1>
            <p className="mt-6 font-display text-2xl md:text-3xl uppercase max-w-3xl">Fabricação de equipamentos e estruturas industriais sob medida</p>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl">A ATR METAL oferece soluções em caldeiraria industrial, desenvolvendo e fabricando equipamentos, estruturas e componentes metálicos para atender às necessidades de cada operação industrial e agroindustrial.</p>
            <Button asChild variant="ember" size="lg" className="mt-8"><a href={quoteUrl} target="_blank" rel="noopener noreferrer">Solicitar orçamento <ArrowUpRight aria-hidden="true" /></a></Button>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-muted-foreground leading-relaxed max-w-4xl">Trabalhamos tanto a partir de projetos e especificações fornecidos pelo cliente quanto no desenvolvimento de soluções próprias, elaboradas pela equipe da ATR METAL conforme a necessidade de cada aplicação. Fabricamos equipamentos personalizados, buscando aliar funcionalidade, resistência, qualidade construtiva e eficiência operacional.</p>
          <h2 className="font-display text-3xl md:text-4xl uppercase mt-12 mb-8">Nossas soluções em caldeiraria industrial</h2>
          <ul className="grid md:grid-cols-2 gap-x-12">
            {equipment.map((name, index) => <li key={name} className="flex gap-5 items-start border-t border-border/60 py-5"><span className="font-mono text-xs text-primary pt-1 shrink-0">{String(index + 1).padStart(2, "0")}</span><h3 className="font-display text-xl sm:text-2xl uppercase">{name}</h3></li>)}
          </ul>
        </section>
        <section className="border-y border-border/40 bg-card/30">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <h2 className="font-display text-3xl md:text-4xl uppercase max-w-3xl">Projetos personalizados, do desenvolvimento à fabricação</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-4xl">Na ATR METAL, cada projeto é tratado de acordo com a necessidade da aplicação. O cliente pode fornecer desenhos técnicos, projetos executivos e especificações para fabricação, ou contar com a ATR METAL para desenvolver uma solução personalizada a partir dos requisitos apresentados.</p>
            <div className="grid md:grid-cols-2 gap-10 mt-10">
              <div className="border-l-2 border-primary pl-6"><h3 className="font-display text-2xl uppercase">Fabricação conforme seu projeto</h3><p className="mt-3 text-muted-foreground">A partir de desenhos técnicos, projetos e especificações fornecidos pelo cliente.</p></div>
              <div className="border-l-2 border-primary pl-6"><h3 className="font-display text-2xl uppercase">Soluções desenvolvidas pela ATR METAL</h3><p className="mt-3 text-muted-foreground">Desenvolvimento de soluções personalizadas conforme os requisitos e a aplicação do cliente.</p></div>
            </div>
            <p className="mt-10 text-muted-foreground leading-relaxed max-w-4xl">Nosso objetivo é transformar necessidades industriais em equipamentos e estruturas metálicas funcionais, dimensionados conforme as especificações e as condições de uso definidas para cada projeto.</p>
            <p className="mt-8 font-display text-2xl uppercase max-w-4xl text-primary">Você apresenta a necessidade. A ATR METAL pode fabricar conforme seu projeto ou desenvolver uma solução sob medida para sua operação.</p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl uppercase">Solicite um orçamento</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl">Entre em contato com a ATR METAL e apresente seu projeto, desenho técnico ou necessidade industrial. Nossa equipe avaliará as informações para orientar a solução de fabricação mais adequada.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:items-center">
            <Button asChild variant="ember" size="lg"><a href={quoteUrl} target="_blank" rel="noopener noreferrer">Orçamento pelo WhatsApp <ArrowUpRight aria-hidden="true" /></a></Button>
            <Button asChild variant="steel" size="lg"><a href={`mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent("Orçamento de caldeiraria industrial")}`}><Mail aria-hidden="true" /> Orçamento por e-mail</a></Button>
          </div>
          <div className="mt-12 border-t border-border/60 pt-8 text-sm text-muted-foreground space-y-3">
            <p>{ADDRESS_LINE}</p><p>Referência: {ADDRESS.reference}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <a href={MAPS_URRUCUI_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Como chegar</a>
              <a href={quoteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">{PHONE_DISPLAY}</a>
              <a href={`mailto:${QUOTE_EMAIL}`} className="hover:text-foreground">{QUOTE_EMAIL}</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram @atr_metal</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/60 px-6 py-6 text-center font-mono text-xs uppercase text-muted-foreground">© {new Date().getFullYear()} {BRAND} · <Link to="/" className="hover:text-foreground">Página inicial</Link></footer>
      <WhatsAppButton />
    </div>
  );
}