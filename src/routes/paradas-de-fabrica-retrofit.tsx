import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ADDRESS, ADDRESS_LINE, BRAND, INSTAGRAM_URL, MAPS_URRUCUI_URL, PHONE_DISPLAY, PHONE_E164, QUOTE_EMAIL, SITE_URL, whatsappLink } from "@/lib/services";
import logo from "@/assets/logo-atr.svg.asset.json";
import boilerImg from "@/assets/boiler.jpg.asset.json";
import weldingImg from "@/assets/hero-welding.jpg.asset.json";
import structureImg from "@/assets/structure.jpg.asset.json";

const title = "Paradas de Fábrica e Retrofit Industrial | ATR METAL";
const description = "Serviços de paradas programadas, manutenção emergencial e retrofit industrial. A ATR METAL oferece soluções em caldeiraria, soldagem, reparação e modernização industrial.";
const pageUrl = `${SITE_URL}/paradas-de-fabrica-retrofit`;
const quoteUrl = whatsappLink("Olá, gostaria de solicitar um orçamento para parada de fábrica ou retrofit industrial.");

const sections = [
  {
    name: "Paradas Programadas (Shutdown)",
    text: "A ATR METAL atua no planejamento e na execução de serviços durante paradas programadas de fábricas e unidades industriais. Essas intervenções são organizadas com antecedência e podem envolver equipes internas e fornecedores externos, permitindo coordenar manutenções, inspeções, reparos e melhorias, reduzir o tempo de inatividade e minimizar os impactos financeiros da operação.",
    img: boilerImg,
    alt: "Manutenção industrial planejada em equipamento de caldeiraria",
  },
  {
    name: "Paradas Não Programadas (Emergenciais)",
    text: "Atuação em demandas emergenciais decorrentes de falhas em máquinas, equipamentos ou imprevistos operacionais que interrompam o funcionamento industrial. A ATR METAL oferece suporte em serviços de caldeiraria, soldagem, reparação e manutenção mecânica, conforme a necessidade identificada, buscando restabelecer as condições operacionais e reduzir o tempo de máquina parada.",
    img: weldingImg,
    alt: "Soldagem e reparação emergencial de máquina industrial",
  },
  {
    name: "Retrofit Industrial",
    text: "A ATR METAL executa serviços de retrofit industrial, envolvendo reforma, modernização e adequação de máquinas, equipamentos e estruturas metálicas existentes. O objetivo é contribuir para melhorar a eficiência operacional, a confiabilidade e a vida útil dos ativos industriais, conforme as necessidades de cada projeto.",
    img: structureImg,
    alt: "Modernização e reforma de estrutura metálica industrial",
  },
];

export const Route = createFileRoute("/paradas-de-fabrica-retrofit")({
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
          { "@type": "Service", name: "Paradas de Fábrica e Retrofit Industrial", description, url: pageUrl,
            provider: { "@type": "LocalBusiness", name: BRAND, url: SITE_URL, telephone: PHONE_E164, email: QUOTE_EMAIL,
              address: { "@type": "PostalAddress", streetAddress: `${ADDRESS.street}, ${ADDRESS.district}`, addressLocality: ADDRESS.city, addressRegion: ADDRESS.state, postalCode: ADDRESS.cep, addressCountry: "BR" } },
            hasOfferCatalog: { "@type": "OfferCatalog", name: "Paradas de fábrica e retrofit", itemListElement: sections.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })) } },
          { "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Paradas de Fábrica e Retrofit", item: pageUrl },
          ] },
        ],
      }),
    }],
  }),
  component: ParadasPage,
});

function ParadasPage() {
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
          <img src={weldingImg.url} alt="Soldagem em estrutura metálica industrial" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
            <nav aria-label="Trilha" className="text-xs font-mono uppercase text-muted-foreground mb-8"><Link to="/" className="hover:text-foreground">Início</Link> / <span className="text-primary">Paradas de Fábrica e Retrofit</span></nav>
            <h1 className="text-display font-display uppercase max-w-4xl">Paradas de Fábrica e Retrofit Industrial</h1>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl">Planejamento, execução e suporte em paradas industriais e serviços de retrofit, com soluções em caldeiraria, soldagem, reparação e modernização.</p>
            <Button asChild variant="ember" size="lg" className="mt-8"><a href={quoteUrl} target="_blank" rel="noopener noreferrer">Solicitar orçamento <ArrowUpRight aria-hidden="true" /></a></Button>
          </div>
        </section>
        {sections.map((s, i) => (
          <section key={s.name} className={i % 2 === 1 ? "border-y border-border/40 bg-card/30" : ""}>
            <div className={`mx-auto max-w-7xl px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div>
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="font-display text-3xl md:text-4xl uppercase mt-2">{s.name}</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">{s.text}</p>
                <Button asChild variant="ember" className="mt-8"><a href={quoteUrl} target="_blank" rel="noopener noreferrer">Solicitar orçamento <ArrowUpRight aria-hidden="true" /></a></Button>
              </div>
              <img src={s.img.url} alt={s.alt} loading="lazy" className="w-full aspect-[4/3] object-cover border border-border/60" />
            </div>
          </section>
        ))}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl uppercase">Solicite um orçamento</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl">Entre em contato com a ATR METAL e apresente a necessidade da sua operação. Nossa equipe avaliará as informações para orientar a solução mais adequada.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="ember" size="lg"><a href={quoteUrl} target="_blank" rel="noopener noreferrer">Solicitar orçamento <ArrowUpRight aria-hidden="true" /></a></Button>
            <Button asChild variant="steel" size="lg"><a href={`mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent("Orçamento — Paradas de Fábrica e Retrofit")}`}><Mail aria-hidden="true" /> {QUOTE_EMAIL}</a></Button>
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
