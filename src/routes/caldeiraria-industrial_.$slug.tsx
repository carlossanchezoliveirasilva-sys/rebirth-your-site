import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BRAND, PHONE_DISPLAY, QUOTE_EMAIL, SITE_URL, whatsappLink } from "@/lib/services";
import { caldeirariaItems, caldeirariaMaterials, caldeirariaQuoteMessage } from "@/lib/caldeiraria";
import logo from "@/assets/logo-atr.svg.asset.json";

export const Route = createFileRoute("/caldeiraria-industrial_/$slug")({
  loader: ({ params }) => {
    const item = caldeirariaItems.find((i) => i.slug === params.slug);
    if (!item) throw notFound();
    return { slug: item.slug };
  },
  head: ({ loaderData }) => {
    const item = caldeirariaItems.find((i) => i.slug === loaderData?.slug);
    if (!item) return { meta: [{ title: "Equipamento não encontrado | ATR METAL" }, { name: "robots", content: "noindex" }] };
    const title = `${item.name} | Caldeiraria Industrial ATR METAL`;
    const url = `${SITE_URL}/caldeiraria-industrial/${item.slug}`;
    return {
      meta: [
        { title }, { name: "description", content: item.description },
        { property: "og:title", content: title }, { property: "og:description", content: item.description },
        { property: "og:type", content: "website" }, { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Service", name: item.name, description: item.description, url, provider: { "@type": "LocalBusiness", name: BRAND, url: SITE_URL, email: QUOTE_EMAIL } },
          { "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Caldeiraria Industrial", item: `${SITE_URL}/caldeiraria-industrial` },
            { "@type": "ListItem", position: 3, name: item.name, item: url },
          ] },
        ],
      }) }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background text-foreground p-6 text-center">
      <div><h1 className="font-display text-4xl uppercase">Equipamento não encontrado</h1><Link to="/caldeiraria-industrial" className="mt-6 inline-block text-primary hover:underline">Voltar para Caldeiraria Industrial</Link></div>
    </div>
  ),
  component: DetailPage,
});

function DetailPage() {
  const { slug } = Route.useLoaderData();
  const item = caldeirariaItems.find((i) => i.slug === slug)!;
  const waUrl = whatsappLink(caldeirariaQuoteMessage(item.name));
  const others = caldeirariaItems.filter((i) => i.slug !== slug);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 min-h-16 flex items-center justify-between gap-4">
          <Link to="/" aria-label={`${BRAND} — página inicial`} className="shrink-0"><img src={logo.url} alt={BRAND} className="h-7 sm:h-8 w-auto" /></Link>
          <nav aria-label="Navegação principal" className="flex items-center gap-4 sm:gap-5 text-xs font-mono uppercase">
            <Link to="/caldeiraria-industrial" className="text-muted-foreground hover:text-foreground">Caldeiraria</Link>
            <Link to="/" hash="contato" className="text-muted-foreground hover:text-foreground">Contato</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <nav aria-label="Trilha" className="text-xs font-mono uppercase text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Início</Link> / <Link to="/caldeiraria-industrial" className="hover:text-foreground">Caldeiraria Industrial</Link> / <span className="text-primary">{item.name}</span>
        </nav>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="aspect-[4/3] bg-card border border-border/60 overflow-hidden grid place-items-center">
            {item.image ? <img src={item.image.url} alt={item.image.alt} className="h-full w-full object-contain" /> : <p className="font-mono text-xs uppercase text-muted-foreground p-6 text-center">Foto em breve</p>}
          </div>
          <div>
            <h1 className="font-display text-4xl md:text-5xl uppercase">{item.name}</h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">{item.description}</p>
            <h2 className="font-display text-2xl uppercase mt-10">Materiais e acabamentos</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {caldeirariaMaterials.map((m) => <li key={m} className="border-l-2 border-primary pl-4">{m}</li>)}
            </ul>
            <h2 className="font-display text-2xl uppercase mt-10">Fabricação sob medida</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Fabricamos a partir de desenhos técnicos e especificações fornecidos pelo cliente, ou desenvolvemos a solução conforme a aplicação e as condições de uso informadas.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="ember" size="lg"><a href={waUrl} target="_blank" rel="noopener noreferrer">Solicitar orçamento <ArrowUpRight aria-hidden="true" /></a></Button>
              <Button asChild variant="steel" size="lg"><a href={waUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> WhatsApp {PHONE_DISPLAY}</a></Button>
            </div>
            <a href={`mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(`Orçamento — ${item.name}`)}`} className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><Mail className="h-4 w-4" aria-hidden="true" /> {QUOTE_EMAIL}</a>
          </div>
        </div>
        <section className="mt-16 border-t border-border/60 pt-10">
          <h2 className="font-display text-2xl uppercase">Outros equipamentos</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((o) => <li key={o.slug}><Link to="/caldeiraria-industrial/$slug" params={{ slug: o.slug }} className="inline-block border border-border/60 px-3 py-2 text-sm hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">{o.name}</Link></li>)}
          </ul>
          <Link to="/caldeiraria-industrial" className="mt-8 inline-flex items-center gap-2 text-primary hover:underline"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Voltar para Caldeiraria Industrial</Link>
        </section>
      </main>
      <footer className="border-t border-border/60 px-6 py-6 text-center font-mono text-xs uppercase text-muted-foreground">© {new Date().getFullYear()} {BRAND} · <Link to="/" className="hover:text-foreground">Página inicial</Link></footer>
      <WhatsAppButton />
    </div>
  );
}
