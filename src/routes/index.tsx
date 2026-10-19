import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImgAsset from "@/assets/hero-welding.jpg.asset.json";
const heroImg = heroImgAsset.url;
import cncImgAsset from "@/assets/cnc-plasma.jpg.asset.json";
const cncImg = cncImgAsset.url;
import structureImgAsset from "@/assets/structure.jpg.asset.json";
const structureImg = structureImgAsset.url;
import agroImgAsset from "@/assets/agro.jpg.asset.json";
const agroImg = agroImgAsset.url;
import roloFacaAsset from "@/assets/impl-rolo-faca.jpg.asset.json";
const roloFacaImg = roloFacaAsset.url;
import conveyorImgAsset from "@/assets/conveyor.jpg.asset.json";
const conveyorImg = conveyorImgAsset.url;
import calandraImgAsset from "@/assets/calandra.jpg.asset.json";
const calandraImg = calandraImgAsset.url;
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Sparks } from "@/components/Sparks";
import { Counter } from "@/components/Counter";
import logoAtrAsset from "@/assets/logo-atr.svg.asset.json";
const logoAtr = logoAtrAsset.url;
import { services as seoServices, servicesByCategory, INSTAGRAM_URL, MAPS_URRUCUI_URL, MAPS_EMBED_SRC, GEO_LAT, GEO_LNG, ADDRESS, ADDRESS_LINE, SITE_URL } from "@/lib/services";

const homeTitle = "ATR METAL | Metalurgia e Serviços Industriais em Uruçuí - PI";
const homeDesc = "Metalurgia em Uruçuí - PI: corte CNC plasma, oxicorte, dobra e calandragem, tornearia, galpões metálicos, implementos agrícolas, Redler, elevadores de canecas e manutenção de secadores. Centro-Oeste e MATOPIBA.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: homeTitle },
      { name: "description", content: homeDesc },
      { property: "og:title", content: homeTitle },
      { property: "og:description", content: homeDesc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      ...(heroImg.startsWith("https://") ? [{ property: "og:image", content: heroImg }, { name: "twitter:image", content: heroImg }] : []),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "ATR METAL",
        alternateName: ["ATR METAL Indústria Metalúrgica"],
        url: SITE_URL,
        logo: logoAtr.startsWith("https://") ? logoAtr : undefined,
        image: heroImg,
        telephone: "+55 64 99225-3474",
        sameAs: [INSTAGRAM_URL],
        address: {
          "@type": "PostalAddress",
          streetAddress: `${ADDRESS.street}, ${ADDRESS.district}`,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: "64860-000",
          addressCountry: "BR",
        },
        geo: { "@type": "GeoCoordinates", latitude: GEO_LAT, longitude: GEO_LNG },
        areaServed: ["Região Centro-Oeste", "MATOPIBA"],
        hasMap: MAPS_URRUCUI_URL,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços",
          itemListElement: [...seoServices.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, url: `${SITE_URL}/servicos/${s.slug}` } })), { "@type": "Offer", itemOffered: { "@type": "Service", name: "Caldeiraria Industrial", url: `${SITE_URL}/caldeiraria-industrial` } }],
        },
      }),
    }],
  }),
  component: Home,
});

const services = [
  { t: "Corte e conformação", d: "Corte CNC plasma até 2\" (conforme condições técnicas), oxicorte até 200 mm, dobra até 1/4\" x 3.000 mm e calandragem.", i: "M4 4h16v16H4zM9 9l6 6M15 9l-6 6", slug: "corte-cnc-plasma" },
  { t: "Usinagem e fabricação", d: "Tornearia, peças usinadas, roscas helicoidais e componentes industriais sob medida.", i: "M3 12c4-8 14-8 18 0M3 12c4 8 14 8 18 0", slug: "torno-e-usinagem" },
  { t: "Galpões e estruturas", d: "Fabricação de galpões e estruturas metálicas, telhamento e soldagem de estruturas.", i: "M2 22V8l10-6 10 6v14M2 22h20M9 22V12h6v10", slug: "galpoes-e-estruturas-metalicas" },
  { t: "Implementos agrícolas", d: "Implementos e soluções metálicas sob medida para o setor agropecuário.", i: "M3 17h13l-2-8h-9zM6 21a2 2 0 100-4 2 2 0 000 4zM18 21a2 2 0 100-4 2 2 0 000 4z", slug: "implementos-agricolas" },
  { t: "Elevadores de canecas", d: "Fabricação de elevadores de canecas, cabeças de elevadores e componentes relacionados.", i: "M12 2v20M7 6h10M7 12h10M7 18h10", slug: "elevadores-de-canecas" },
  { t: "Redler e roscas", d: "Sistemas Redler e roscas helicoidais para transporte de materiais a granel.", i: "M4 6h16M4 12h16M4 18h16M8 4v16M16 4v16", slug: "redler" },
  { t: "Manutenção de secadores", d: "Manutenção de secadores, secadores rotativos e elevadores de canecas.", i: "M14 6l-1 1 4 4 1-1a3 3 0 00-4-4zM4 20l8-8M4 20h4l8-8", slug: "manutencao-de-secadores" },
  { t: "Projetos sob medida", d: "Peças, estruturas e equipamentos conforme desenho, amostra ou especificação do cliente.", i: "M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4M3 17l9 4 9-4", slug: "projetos-sob-medida" },
  { t: "Munck e serviços complementares", d: "Locação de caminhão munck, reforma de carrocerias e soldagem em chassis de caminhão.", i: "M13 2L3 14h7l-1 8 11-14h-7l1-6z", slug: "locacao-de-munck" },
];

const industries = [
  { t: "Agroindustrial", img: agroImg },
  { t: "Sementeiras", img: agroImg },
  { t: "Cooperativas", img: structureImg },
  { t: "Implementos Agrícolas", img: roloFacaImg },
  { t: "Fábricas & Usinas", img: conveyorImg },
  { t: "Armazéns de Grãos", img: agroImg },
];

const projects = [
  { t: "Silos & Transporte", c: "Agroindustrial", img: agroImg, w: "lg:col-span-2 lg:row-span-2" },
  { t: "Implementos Agrícolas", c: "Agro", img: roloFacaImg, w: "" },
  { t: "Estrutura 40m", c: "Indústria Pesada", img: structureImg, w: "" },
  { t: "Linha de Conveyors", c: "Logística", img: conveyorImg, w: "lg:col-span-2" },
  { t: "Calandra 3/4\"", c: "Caldeiraria", img: calandraImg, w: "" },
];

const reviews = [
  { q: "O resultado final superou expectativas.", n: "Cliente Verificado", r: "Google" },
  { q: "Ótimo serviço de design, corte e dobra de metais.", n: "Cliente Verificado", r: "Google" },
  { q: "Difícil de encontrar na região esse nível de qualidade.", n: "Cliente Verificado", r: "Google" },
  { q: "O preço foi o melhor da região e o atendimento, impecável.", n: "Cliente Verificado", r: "Google" },
];

const differentials = [
  { t: "Sob medida", d: "Soluções conforme desenho, amostra ou especificação do cliente." },
  { t: "Comunicação clara", d: "Avaliação técnica de cada demanda antes do orçamento." },
  { t: "Processos completos", d: "Corte, dobra, calandragem, usinagem e soldagem." },
  { t: "Estrutura", d: "Parque industrial completo de corte, dobra e solda." },
  { t: "Capacidade", d: "Plasma até 2\", oxicorte até 200 mm e dobra até 1/4\" x 3.000 mm." },
  { t: "Região", d: "Atendimento no Centro-Oeste e no MATOPIBA, conforme a logística." },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("reveal");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled || menuOpen ? "glass-strong py-3" : "py-4 md:py-6"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 gap-4">
          <a href="#top" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 group shrink-0" aria-label="ATR METAL Indústria Metalúrgica">
            <img src={logoAtr} alt="ATR METAL Indústria Metalúrgica" className="h-7 sm:h-8 md:h-10 w-auto" />
          </a>
          <nav className="hidden xl:flex items-center gap-4 text-xs font-medium">
            {[
              ["Sobre", "#sobre"],
              ["Serviços", "#servicos"],
              ["Setores", "#setores"],
              ["Projetos", "#projetos"],
              ["Contato", "#contato"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="text-muted-foreground hover:text-foreground transition-colors relative group">
                {l}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <Link to="/implementos-agricolas" className="text-muted-foreground hover:text-foreground transition-colors relative group">
              Implementos Agrícolas
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link to="/caldeiraria-industrial" className="text-muted-foreground hover:text-foreground transition-colors relative group">
              Caldeiraria Industrial
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link to="/paradas-de-fabrica-retrofit" className="text-muted-foreground hover:text-foreground transition-colors relative group">
              Paradas e Retrofit
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          </nav>
          <Button asChild variant="ember" className="hidden xl:inline-flex px-5 py-2.5 text-xs font-bold uppercase"><a href="#contato">
            Orçamento
            <span aria-hidden>→</span>
          </a></Button>
          <Button variant="bare"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="xl:hidden grid h-10 w-10 place-items-center border border-border/80 text-foreground"
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-px w-full bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 bottom-0 h-px w-full bg-current transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className={`xl:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
          <nav className="mx-auto max-w-7xl px-4 pt-4 pb-6 flex flex-col gap-1 border-t border-border/40 mt-3">
            {[
              ["Sobre", "#sobre"],
              ["Serviços", "#servicos"],
              ["Setores", "#setores"],
              ["Projetos", "#projetos"],
              ["Contato", "#contato"],
            ].map(([l, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-3 font-display text-lg uppercase tracking-wide text-foreground border-b border-border/40"
              >
                {l}
                <span aria-hidden className="text-primary">→</span>
              </a>
            ))}
            <Link
              to="/implementos-agricolas"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-3 font-display text-lg uppercase tracking-wide text-foreground border-b border-border/40"
            >
              Implementos Agrícolas
              <span aria-hidden className="text-primary">→</span>
            </Link>
            <Link to="/caldeiraria-industrial" onClick={() => setMenuOpen(false)} className="flex items-center justify-between py-3 font-display text-lg uppercase tracking-wide text-foreground border-b border-border/40">
              Caldeiraria Industrial
              <span aria-hidden className="text-primary">→</span>
            </Link>
            <Link to="/paradas-de-fabrica-retrofit" onClick={() => setMenuOpen(false)} className="flex items-center justify-between py-3 font-display text-lg uppercase tracking-wide text-foreground border-b border-border/40">
              Paradas de Fábrica e Retrofit
              <span aria-hidden className="text-primary">→</span>
            </Link>
            <Button asChild variant="bare"><a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="btn-ember mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 font-bold uppercase tracking-widest text-xs"
            >
              Solicitar Orçamento <span aria-hidden>→</span>
            </a></Button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative home-hero flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Solda industrial com faíscas em viga de aço"
            className="h-full w-full object-cover ken-burns"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute inset-0 bg-noise opacity-60 mix-blend-overlay" />
        </div>
        <Sparks count={30} />

        {/* Side label */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground rotate-180 vertical-label" >
            URUÇUÍ · PIAUÍ · BR
          </div>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
          {["IG", "WA", "EM"].map((s) => (
            <span key={s} className="font-mono text-[10px] tracking-widest text-muted-foreground border border-border px-2 py-1">{s}</span>
          ))}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Power to Produce</span>
          </div>
          <h1 className="text-hero font-display uppercase">
            Engenharia<br />
            em <span className="text-ember-glow">aço.</span><br />
            <span className="text-muted-foreground/70">Potência em produção.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground">
            Fabricação, montagem e manutenção industrial de alta performance para o agronegócio, cooperativas e indústrias pesadas do Centro-Oeste e da região MATOPIBA.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="bare"><a href="#contato" className="btn-ember inline-flex items-center gap-2 px-7 py-4 font-bold uppercase tracking-widest text-sm">
              Solicitar Orçamento
              <span aria-hidden>→</span>
            </a></Button>
            <Button asChild variant="bare"><a
              href="https://wa.me/5564992253474"
              target="_blank" rel="noopener"
              className="btn-outline-steel inline-flex items-center gap-2 px-7 py-4 font-bold uppercase tracking-widest text-sm"
            >
              Falar no WhatsApp
            </a></Button>
          </div>

          {/* Stat bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 border border-border/40">
            {[
              { v: 12, s: "+", l: "Anos de mercado" },
              { v: 850, s: "+", l: "Projetos entregues" },
              { v: 100, s: "%", l: "Sob medida" },
              { v: 24, s: "/7", l: "Manutenção" },
            ].map((s) => (
              <div key={s.l} className="bg-background/80 backdrop-blur px-5 py-6">
                <div className="font-display text-4xl md:text-5xl text-foreground">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-primary to-transparent animate-glow" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/40 bg-card/40 overflow-hidden py-6">
        {/* Duration scaled to the longer word list so pixels/second is ~25% faster than the original 40s loop */}
        <div className="flex w-max animate-marquee whitespace-nowrap font-display text-4xl md:text-6xl text-muted-foreground/40 gap-12" style={{ animationDuration: "62s" }}>
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} aria-hidden={idx === 1} className="flex gap-12 items-center shrink-0">
              {["CORTE CNC PLASMA", "★", "OXICORTE CNC", "★", "DOBRADEIRA 1/4\" × 3000 MM", "★", "GUILHOTINA", "★", "CORTE E DOBRA", "★", "CALANDRA", "★", "FABRICAÇÃO DE EQUIPAMENTOS", "★", "MONTAGEM", "★", "CALDEIRARIA", "★", "ESTRUTURAS", "★", "MUNCK", "★", "AGROINDÚSTRIA", "★"].map((w, i) => (
                <span key={i} className={w === "★" ? "text-primary" : ""}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5" data-reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">01 · Sobre</span>
              <span className="h-px w-16 bg-border" />
            </div>
            <h2 className="text-display font-display uppercase">
              Forjados para<br />
              <span className="text-ember-glow">performance.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-10 space-y-6 text-lg text-muted-foreground" data-reveal>
            <p>
              A <span className="text-foreground font-semibold">ATR METAL</span> é uma empresa especializada em soluções de metalurgia, fabricação de componentes metálicos, usinagem, soldagem e manutenção industrial e agroindustrial. Com sede em Uruçuí, Piauí, atendemos clientes dos setores industrial, agrícola e agroindustrial, desenvolvendo soluções sob medida para cada projeto.
            </p>
            <p>
              Nosso portfólio abrange corte CNC plasma, oxicorte, dobra e calandragem de chapas, tornearia e usinagem, fabricação de estruturas metálicas e galpões, telhamento, soldagem, implementos agrícolas e projetos personalizados. Também fabricamos roscas helicoidais, sistemas Redler, cabeças e elevadores de canecas, e fazemos manutenção em secadores, elevadores de canecas e secadores rotativos.
            </p>
            <p>
              Complementamos nossa atuação com manutenção industrial e agroindustrial, locação de caminhão munck, reforma de carrocerias e soldagem em chassis, conforme avaliação técnica. Realizamos serviços em toda a região Centro-Oeste e no MATOPIBA, conforme o tipo de serviço, a logística e a viabilidade de cada projeto.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              {["Fabricação sob medida", "Indústria e agroindústria", "Corte, dobra e usinagem", "Centro-Oeste e MATOPIBA"].map((f) => (
                <div key={f} className="flex items-center gap-3 border-l-2 border-primary pl-4 py-2">
                  <span className="text-foreground font-semibold">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="relative py-24 md:py-32 bg-card/30 border-y border-border/40">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16" data-reveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">02 · Serviços</span>
                <span className="h-px w-16 bg-border" />
              </div>
              <h2 className="text-display font-display uppercase">
                O que <span className="text-ember-glow">fabricamos.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Soluções de metalurgia, fabricação sob medida e manutenção para os setores industrial, agrícola e agroindustrial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, idx) => (
              <article
                key={s.t}
                data-reveal
                onMouseMove={(e) => {
                  const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  (e.currentTarget as HTMLElement).style.setProperty("--mx", `${e.clientX - r.left}px`);
                  (e.currentTarget as HTMLElement).style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className="industrial-card group p-7 relative"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="h-12 w-12 grid place-items-center border border-primary/40 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.i} />
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">/{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display text-2xl uppercase mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <Link to="/servicos/$slug" params={{ slug: s.slug }} className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  Saiba mais
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-16">
            <h3 className="font-display text-2xl uppercase mb-8">Catálogo completo de serviços</h3>
            <Link to="/caldeiraria-industrial" className="mb-10 flex items-center justify-between gap-6 border-l-2 border-primary pl-6 py-3 hover:text-primary transition-colors">
              <span><span className="block font-display text-2xl uppercase">Caldeiraria Industrial</span><span className="block mt-2 text-sm text-muted-foreground">Fabricação de equipamentos e estruturas industriais sob medida.</span></span>
              <span aria-hidden>→</span>
            </Link>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {servicesByCategory().map(({ category, items }) => (
                <div key={category}>
                  <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {items.map((s) => (
                      <li key={s.slug}>
                        <Link to="/servicos/$slug" params={{ slug: s.slug }} className="flex items-center justify-between gap-3 border border-border/60 px-4 py-3 hover:border-primary hover:text-primary transition-colors">
                          <span>{s.name}{s.capacity && <span className="block text-xs text-muted-foreground mt-1">{s.capacity}</span>}</span><span aria-hidden>→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-16 border border-primary/40 p-8 md:flex md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl uppercase">Tem um projeto específico?</h3>
                <p className="mt-2 text-muted-foreground max-w-2xl">Solicite um orçamento e apresente sua necessidade à nossa equipe. Envie desenhos, medidas ou amostras para avaliarmos a viabilidade de fabricação.</p>
              </div>
              <Button asChild variant="ember" className="mt-6 md:mt-0 shrink-0"><a href="#contato">Solicitar orçamento</a></Button>
            </div>
          </div>
        </div>
      </section>

      {/* SETORES */}
      <section id="setores" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16" data-reveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">03 · Setores</span>
                <span className="h-px w-16 bg-border" />
              </div>
              <h2 className="text-display font-display uppercase">
                Indústrias que <span className="text-ember-glow">atendemos.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((i) => (
              <div key={i.t} data-reveal className="group relative aspect-[4/5] overflow-hidden border border-border/60">
                <img src={i.img} alt={i.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" width={1280} height={960} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">Setor</div>
                  <div className="font-display text-2xl md:text-3xl uppercase">{i.t}</div>
                </div>
                <div className="absolute top-4 right-4 h-8 w-8 border border-border/80 grid place-items-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-24 md:py-32 bg-card/30 border-y border-border/40 relative">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16" data-reveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">04 · Projetos</span>
                <span className="h-px w-16 bg-border" />
              </div>
              <h2 className="text-display font-display uppercase">
                Obras em <span className="text-ember-glow">aço.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Uma seleção de projetos entregues — da chapa bruta à planta industrial completa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 auto-rows-[260px]">
            {projects.map((p, idx) => (
              <div key={p.t} data-reveal className={`group relative overflow-hidden border border-border/60 ${p.w}`} style={{ animationDelay: `${idx * 80}ms` }}>
                <img src={p.img} alt={p.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" width={1280} height={960} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/0 group-hover:ring-primary/60 transition-all" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">{p.c}</div>
                  <div className="font-display text-2xl md:text-3xl uppercase">{p.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section className="py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5" data-reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">05 · Diferenciais</span>
                <span className="h-px w-16 bg-border" />
              </div>
              <h2 className="text-display font-display uppercase">
                Padrão <span className="text-ember-glow">industrial.</span><br />
                Outro nível.
              </h2>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {differentials.map((d, idx) => (
                <div key={d.t} data-reveal className="industrial-card p-6" style={{ animationDelay: `${idx * 70}ms` }}>
                  <div className="font-display text-3xl text-primary mb-2">/{String(idx + 1).padStart(2, "0")}</div>
                  <div className="font-display text-xl uppercase mb-2">{d.t}</div>
                  <p className="text-sm text-muted-foreground">{d.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Yellow caution band */}
          <div className="relative mt-12 overflow-hidden border border-border/60" data-reveal>
            <div className="diag-stripes h-3" />
            <div className="bg-card p-8 md:p-12 grid md:grid-cols-[1fr_auto] items-center gap-8">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">Pronto para produzir</div>
                <h3 className="text-display font-display uppercase">Tem um projeto? <span className="text-ember-glow">Fale conosco.</span></h3>
              </div>
              <Button asChild variant="bare"><a href="#contato" className="btn-ember inline-flex items-center justify-center gap-2 px-8 py-5 font-bold uppercase tracking-widest text-sm whitespace-nowrap">
                Solicitar Orçamento →
              </a></Button>
            </div>
            <div className="diag-stripes h-3" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-card/30 border-y border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16" data-reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-16 bg-border" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">06 · Avaliações Google</span>
              <span className="h-px w-16 bg-border" />
            </div>
            <h2 className="text-display font-display uppercase">A voz de quem <span className="text-ember-glow">contrata.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, idx) => (
              <figure key={idx} data-reveal className="industrial-card p-7" style={{ animationDelay: `${idx * 80}ms` }}>
                <div className="flex gap-1 mb-5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed mb-6">"{r.q}"</blockquote>
                <figcaption className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground border-t border-border/60 pt-4">
                  <span>{r.n}</span>
                  <span className="text-primary">{r.r}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 md:py-32 relative overflow-hidden">
        <Sparks count={14} />
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div data-reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">07 · Contato</span>
              <span className="h-px w-16 bg-border" />
            </div>
            <h2 className="text-display font-display uppercase">
              Vamos <span className="text-ember-glow">construir.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Conte seu desafio. Nossa equipe responde com um diagnóstico técnico e orçamento sob medida.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { l: "WhatsApp / Telefone", v: "(64) 99225-3474", h: "https://wa.me/5564992253474" },
                { l: "Endereço", v: ADDRESS_LINE },
                { l: "Ponto de referência", v: ADDRESS.reference },
                { l: "Área de atendimento", v: "Centro-Oeste e MATOPIBA, conforme o serviço e a logística" },
                { l: "Instagram", v: "@atr_metal", h: INSTAGRAM_URL },
              ].map((c) => (
                <div key={c.l} className="border-l-2 border-primary pl-5">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{c.l}</div>
                  {c.h ? (
                    <a href={c.h} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors text-lg">{c.v}</a>
                  ) : (
                    <div className="text-foreground text-lg">{c.v}</div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 aspect-[16/9] overflow-hidden border border-border/60 relative">
              <iframe
                title="Localização ATR METAL em Uruçuí - PI"
                src={MAPS_EMBED_SRC}
                className="absolute inset-0 h-full w-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="ember">
                <a href={MAPS_URRUCUI_URL} target="_blank" rel="noopener noreferrer">Como chegar</a>
              </Button>
            </div>
          </div>

          <form
            data-reveal
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);
              const nome = String(fd.get("nome") || "").trim();
              const empresa = String(fd.get("empresa") || "").trim();
              const email = String(fd.get("email") || "").trim();
              const fone = String(fd.get("fone") || "").trim();
              const msg = String(fd.get("msg") || "").trim();

              const linhas = [
                "*Nova solicitação de orçamento — ATR METAL*",
                "",
                `*Nome:* ${nome}`,
                `*Empresa:* ${empresa}`,
                `*E-mail:* ${email}`,
                `*Telefone/WhatsApp:* ${fone}`,
                "",
                "*Descrição do projeto:*",
                msg,
              ];
              const texto = linhas.join("\n");
              const corpoEmail = linhas.join("\n").replace(/\*/g, "");
              const assunto = `Orçamento ATR METAL — ${nome}${empresa ? " / " + empresa : ""}`;

              const wa = `https://wa.me/5564992253474?text=${encodeURIComponent(texto)}`;
              const mail = `mailto:contato@atrmetal.com.br?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;

              // Abrir WhatsApp em nova aba
              window.open(wa, "_blank", "noopener,noreferrer");
              // Disparar cliente de e-mail sem navegar a página atual
              const a = document.createElement("a");
              a.href = mail;
              a.rel = "noopener";
              a.target = "_self";
              a.style.display = "none";
              document.body.appendChild(a);
              a.click();
              setTimeout(() => a.remove(), 0);

              form.reset();
            }}
            className="industrial-card p-8 md:p-10 space-y-5"
          >
            <div className="font-display text-2xl uppercase mb-2">Solicitar orçamento</div>
            {[
              { l: "Nome", n: "nome", t: "text" },
              { l: "Empresa", n: "empresa", t: "text" },
              { l: "E-mail", n: "email", t: "email" },
              { l: "Telefone / WhatsApp", n: "fone", t: "tel" },
            ].map((f) => (
              <label key={f.n} className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{f.l}</span>
                <input
                  required
                  name={f.n}
                  type={f.t}
                  maxLength={200}
                  className="mt-2 w-full bg-input/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary  transition-all"
                />
              </label>
            ))}
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Descreva seu projeto</span>
              <textarea
                required
                name="msg"
                rows={4}
                maxLength={2000}
                className="mt-2 w-full bg-input/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary  transition-all resize-none"
              />
            </label>
            <Button variant="bare" type="submit" className="btn-ember w-full py-4 font-bold uppercase tracking-widest text-sm">
              Enviar orçamento →
            </Button>
            <p className="text-xs text-muted-foreground">Ao enviar, sua solicitação será encaminhada para o nosso WhatsApp e e-mail.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border/60 bg-card/40">
        <div className="diag-stripes h-2" />
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoAtr} alt="ATR METAL Indústria Metalúrgica" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground max-w-md">
              Metalurgia, fabricação sob medida e manutenção industrial e agroindustrial. Sede em Uruçuí - PI, atendendo o Centro-Oeste e o MATOPIBA.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">Navegar</div>
            <ul className="space-y-2 text-sm">
              {[["Sobre","#sobre"],["Serviços","#servicos"],["Setores","#setores"],["Projetos","#projetos"],["Contato","#contato"]].map(([l,h]) => (
                <li key={h}><a href={h} className="text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">Contato</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{ADDRESS.street}</li>
              <li>{ADDRESS.district} · {ADDRESS.city} - {ADDRESS.state} · CEP {ADDRESS.cep}</li>
              <li><a href={MAPS_URRUCUI_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Como chegar</a></li>
              <li><a href="https://wa.me/5564992253474" className="hover:text-foreground">(64) 99225-3474</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram @atr_metal</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-10">
          <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">Serviços</div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {seoServices.map((s) => (
              <li key={s.slug}><Link to="/servicos/$slug" params={{ slug: s.slug }} className="text-muted-foreground hover:text-foreground">{s.name}</Link></li>
            ))}
            <li><Link to="/caldeiraria-industrial" className="text-muted-foreground hover:text-foreground">Caldeiraria Industrial</Link></li>
            <li><Link to="/paradas-de-fabrica-retrofit" className="text-muted-foreground hover:text-foreground">Paradas de Fábrica e Retrofit</Link></li>
          </ul>
        </div>
        <div className="border-t border-border/60 py-6 px-6 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} ATR METAL · Uruçuí - PI
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
