import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  BRAND, INSTAGRAM_URL, MAPS_URRUCUI_URL, PHONE_DISPLAY, PHONE_E164, ADDRESS, ADDRESS_LINE, SERVICE_AREA, SITE_URL,
  getService, legacySlugs, services, whatsappLink, type ImageKey,
} from "@/lib/services";
import calandra from "@/assets/calandra.jpg.asset.json";
import cnc from "@/assets/cnc-plasma.jpg.asset.json";
import structure from "@/assets/structure.jpg.asset.json";
import agro from "@/assets/agro.jpg.asset.json";
import boiler from "@/assets/boiler.jpg.asset.json";
import conveyor from "@/assets/conveyor.jpg.asset.json";
import hero from "@/assets/hero-welding.jpg.asset.json";
import logoAsset from "@/assets/logo-atr.svg.asset.json";

const images: Record<ImageKey, string> = {
  calandra: calandra.url, cnc: cnc.url, structure: structure.url, agro: agro.url,
  boiler: boiler.url, conveyor: conveyor.url, hero: hero.url,
};

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const moved = legacySlugs[params.slug];
    if (moved) throw redirect({ to: "/servicos/$slug", params: { slug: moved }, statusCode: 301 });
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: `Serviço não encontrado | ${BRAND}` }, { name: "robots", content: "noindex" }] };
    const path = `/servicos/${params.slug}`;
    const img = images[s.image];
    return {
      meta: [
        { title: s.title },
        { name: "description", content: s.description },
        { property: "og:title", content: s.title },
        { property: "og:description", content: s.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: path },
        { name: "twitter:card", content: "summary_large_image" },
        ...(img.startsWith("https://") ? [{ property: "og:image", content: img }, { name: "twitter:image", content: img }] : []),
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.name,
            description: s.description,
            url: `${SITE_URL}${path}`,
            provider: { "@type": "LocalBusiness", name: BRAND, url: SITE_URL, telephone: PHONE_E164 },
            category: s.category,
            areaServed: ["Centro-Oeste", "MATOPIBA"],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: s.name, item: `${SITE_URL}${path}` },
            ],
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const related = s.related.map(getService).filter(Boolean) as typeof services;
  const wa = whatsappLink(`Olá, gostaria de solicitar um orçamento de ${s.name.toLowerCase()}.`);

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
          <img src={images[s.image]} alt={`Ilustração do serviço de ${s.name.toLowerCase()}`} className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <nav aria-label="Trilha" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground">Início</Link> / <span className="text-primary">{s.name}</span>
            </nav>
            <h1 className="text-display font-display uppercase max-w-4xl">{s.h1}</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{s.intro}</p>
            {s.capacity && (
              <p className="mt-6 inline-block border-l-2 border-primary pl-4 font-mono text-sm uppercase tracking-widest">
                Capacidade: <span className="text-primary">{s.capacity}</span>
              </p>
            )}
            <div className="mt-10">
              <Button asChild variant="ember" size="lg">
                <a href={wa} target="_blank" rel="noopener noreferrer">Solicitar orçamento pelo WhatsApp</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl uppercase mb-6">Aplicações</h2>
            <ul className="space-y-3">
              {s.applications.map((a) => (
                <li key={a} className="border-l-2 border-primary pl-4 text-muted-foreground">{a}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl uppercase mb-6">O que esse serviço resolve</h2>
            <p className="text-muted-foreground leading-relaxed">{s.solves}</p>
            <h3 className="font-display text-xl uppercase mt-10 mb-3">Atendimento</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>{ADDRESS_LINE}</li>
              <li>Referência: {ADDRESS.reference}</li>
              <li><a href={MAPS_URRUCUI_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Como chegar</a></li>
              <li>Área de atendimento: {SERVICE_AREA}, conforme o tipo de serviço e a logística.</li>
              <li>WhatsApp: <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">{PHONE_DISPLAY}</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram @atr_metal</a></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-border/40 bg-card/30">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="font-display text-3xl uppercase mb-8">Serviços relacionados</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} to="/servicos/$slug" params={{ slug: r.slug }} className="border border-border/60 p-6 hover:border-primary transition-colors">
                  <span className="font-display text-xl uppercase">{r.name}</span>
                  <span className="block mt-3 text-xs font-mono uppercase tracking-widest text-primary">Ver serviço →</span>
                </Link>
              ))}
            </div>
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
