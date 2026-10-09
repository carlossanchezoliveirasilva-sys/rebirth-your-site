import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BRAND, ADDRESS_LINE, INSTAGRAM_URL, MAPS_URRUCUI_URL, QUOTE_EMAIL, SITE_URL, whatsappLink } from "@/lib/services";
import logoAsset from "@/assets/logo-atr.svg.asset.json";
import roloFaca from "@/assets/impl-rolo-faca.jpg.asset.json";
import pipa from "@/assets/impl-tanque-pipa.jpg.asset.json";
import diesel from "@/assets/impl-tanque-diesel.jpg.asset.json";
import graneleira from "@/assets/impl-graneleira.jpg.asset.json";
import basculante from "@/assets/impl-basculante.jpg.asset.json";
import destorrador from "@/assets/impl-destorrador.jpg.asset.json";
import prancha from "@/assets/impl-prancha.jpg.asset.json";
import siloCocho from "@/assets/impl-silo-cocho.jpg.asset.json";
import agro from "@/assets/agro.jpg.asset.json";

const title = "Implementos Agrícolas Sob Medida em Uruçuí - PI | ATR METAL";
const desc = "Fabricação de rolo-faca, tanque-reboque pipa e diesel, graneleira, basculante, destorrador, prancha de transporte, silo-cocho e implementos personalizados. ATR METAL.";

const products = [
  { n: "Rolo-faca", d: "Rolo com lâminas para acamar e picar palhada e restos de cultura, preparando a área para o plantio.", img: roloFaca.url },
  { n: "Tanque-reboque pipa", d: "Reboque com tanque para transporte e distribuição de água na propriedade, em obras e na pecuária.", img: pipa.url },
  { n: "Tanque-reboque para diesel", d: "Reboque-tanque para abastecimento de máquinas no campo, com bomba e mangueira conforme a necessidade.", img: diesel.url },
  { n: "Graneleira", d: "Carreta graneleira para transporte e transbordo de grãos durante a colheita.", img: graneleira.url },
  { n: "Implemento basculante", d: "Carreta com caçamba basculante hidráulica para transporte e descarga de materiais.", img: basculante.url },
  { n: "Destorrador", d: "Implemento para quebrar torrões e nivelar o solo após o preparo, melhorando a condição de plantio.", img: destorrador.url },
  { n: "Prancha de transporte", d: "Prancha reforçada para transporte de máquinas, implementos e cargas pesadas.", img: prancha.url },
  { n: "Silo-cocho", d: "Silo com cocho para armazenamento e oferta de ração ou suplemento ao rebanho.", img: siloCocho.url },
  { n: "Implementos personalizados", d: "Outros implementos agrícolas desenvolvidos sob medida, conforme a aplicação e a rotina da sua propriedade.", img: agro.url },
];

export const Route = createFileRoute("/implementos-agricolas")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/implementos-agricolas" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(roloFaca.url.startsWith("https://") ? [{ property: "og:image", content: roloFaca.url }, { name: "twitter:image", content: roloFaca.url }] : []),
    ],
    links: [{ rel: "canonical", href: "/implementos-agricolas" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        name: "Implementos agrícolas ATR METAL",
        url: `${SITE_URL}/implementos-agricolas`,
        itemListElement: products.map((p) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: p.n, description: p.d } })),
      }),
    }],
  }),
  component: ImplementosPage,
});

function ImplementosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/90">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" aria-label={`${BRAND} — página inicial`}>
            <img src={logoAsset.url} alt={BRAND} className="h-8 w-auto" />
          </Link>
          <nav className="flex items-center gap-5 text-xs font-mono uppercase tracking-widest">
            <Link to="/" hash="servicos" className="text-muted-foreground hover:text-foreground">Serviços</Link>
            <Link to="/" hash="contato" className="text-muted-foreground hover:text-foreground">Contato</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border/40">
          <img src={roloFaca.url} alt="Rolo-faca fabricado pela ATR METAL" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <nav aria-label="Trilha" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground">Início</Link> / <span className="text-primary">Implementos Agrícolas</span>
            </nav>
            <h1 className="text-display font-display uppercase max-w-4xl">Fabricação de implementos agrícolas</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              A ATR METAL fabrica implementos agrícolas robustos e sob medida para o produtor do Centro-Oeste e do MATOPIBA. Escolha um modelo abaixo e solicite seu orçamento.
            </p>
            <div className="mt-10">
              <Button asChild variant="ember" size="lg">
                <a href={whatsappLink("Olá, gostaria de solicitar um orçamento de implementos agrícolas.")} target="_blank" rel="noopener noreferrer">Solicitar orçamento pelo WhatsApp</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-10">Catálogo de implementos</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.n} className="flex flex-col border border-border/60 bg-card/30 hover:border-primary transition-colors">
                <img src={p.img} alt={p.n} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl uppercase">{p.n}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.d}</p>
                  <Button asChild variant="ember" className="mt-6">
                    <a href={whatsappLink(`Olá, gostaria de solicitar um orçamento de ${p.n.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer">Solicitar orçamento</a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border/40 bg-card/30">
          <div className="mx-auto max-w-7xl px-6 py-16 text-sm text-muted-foreground space-y-2">
            <p>{ADDRESS_LINE}</p>
            <p>
              <a href={MAPS_URRUCUI_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Como chegar</a>
              {" · "}
              <a href={`mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent("Orçamento de implementos agrícolas")}`} className="hover:text-foreground">{QUOTE_EMAIL}</a>
              {" · "}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram @atr_metal</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-6 px-6 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} {BRAND} · <Link to="/" className="hover:text-foreground">Página inicial</Link>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
