import { calculatePlate } from "@/lib/plate-pricing";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Sparks } from "@/components/Sparks";
import logoAtrAsset from "@/assets/logo-atr.svg.asset.json";
const logoAtr = logoAtrAsset.url;
import heroImgAsset from "@/assets/placas-hero.jpg.asset.json";
const heroImg = heroImgAsset.url;
import imgFazendaAsset from "@/assets/placa-fazenda.jpg.asset.json";
const imgFazenda = imgFazendaAsset.url;
import imgEmpresaAsset from "@/assets/placa-empresa.jpg.asset.json";
const imgEmpresa = imgEmpresaAsset.url;
import imgDecorativaAsset from "@/assets/placa-decorativa.jpg.asset.json";
const imgDecorativa = imgDecorativaAsset.url;
import imgNumerosAsset from "@/assets/placa-numeros.jpg.asset.json";
const imgNumeros = imgNumerosAsset.url;
import imgArteAsset from "@/assets/placa-arte.jpg.asset.json";
const imgArte = imgArteAsset.url;

export const Route = createFileRoute("/placas-personalizadas")({
  head: () => ({
    meta: [
      { title: "Placas Personalizadas em Aço Corten | ATR METAL" },
      {
        name: "description",
        content:
          "Fabricamos placas personalizadas em aço corten, aço carbono e inox para fazendas, empresas, residências e decoração. Solicite seu orçamento.",
      },
      {
        name: "keywords",
        content:
          "placa em aço corten, placa para fazenda, letreiro em metal, logo em aço corten, placa personalizada, corte plasma artístico, decoração em aço corten, painel decorativo metálico, número residencial em metal, ATR METAL",
      },
      { property: "og:title", content: "Placas Personalizadas em Aço Corten | ATR METAL" },
      {
        property: "og:description",
        content:
          "Peças exclusivas em aço corten, carbono e inox — fabricação própria com corte CNC e plasma. Envio para todo o Brasil.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(heroImg.startsWith("https://") ? [{ property: "og:image", content: heroImg }, { name: "twitter:image", content: heroImg }] : []),
      { property: "og:url", content: "/placas-personalizadas" },
    ],
    links: [{ rel: "canonical", href: "/placas-personalizadas" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Placas Personalizadas em Aço Corten",
          brand: { "@type": "Brand", name: "ATR METAL" },
          description:
            "Placas e peças decorativas personalizadas em aço corten, carbono e inox, com corte CNC e plasma de alta precisão.",
          areaServed: "BR",
        }),
      },
    ],
  }),
  component: PlacasPage,
});

const gallery = [
  { t: "Placas para Fazendas", img: imgFazenda, w: "lg:col-span-2 lg:row-span-2" },
  { t: "Logos Corporativos", img: imgEmpresa, w: "" },
  { t: "Painéis Decorativos", img: imgDecorativa, w: "" },
  { t: "Números Residenciais", img: imgNumeros, w: "lg:col-span-2" },
  { t: "Peças Artísticas em Metal", img: imgArte, w: "" },
];

const categorias = [
  { t: "Placas para Fazendas", d: "Identificação elegante para propriedades rurais." },
  { t: "Placas Empresariais", d: "Fortaleça a identidade visual da sua empresa." },
  { t: "Logos em Metal", d: "Produção de logotipos personalizados em aço." },
  { t: "Decoração em Aço Corten", d: "Peças decorativas com acabamento sofisticado." },
  { t: "Números e Letras", d: "Identificação residencial e comercial sob medida." },
  { t: "Projetos Exclusivos", d: "Desenvolvemos qualquer modelo sob medida." },
];

const diferenciais = [
  { t: "Corte de Alta Precisão", d: "Tecnologia CNC e Plasma para excelente acabamento." },
  { t: "Personalização Total", d: "Produção conforme arte ou ideia do cliente." },
  { t: "Materiais Premium", d: "Aço Corten, Carbono e Inox de primeira linha." },
  { t: "Durabilidade", d: "Produtos resistentes para áreas internas e externas." },
  { t: "Fabricação Própria", d: "Produzido inteiramente pela ATR METAL." },
  { t: "Entrega para Todo Brasil", d: "Envio seguro e rastreável." },
];

const passos = [
  { n: "01", t: "Envie sua Ideia", d: "Logo, nome, desenho ou referência." },
  { n: "02", t: "Receba a Arte", d: "Nossa equipe desenvolve o layout." },
  { n: "03", t: "Aprovação", d: "Você aprova antes da fabricação." },
  { n: "04", t: "Produção", d: "Corte e acabamento profissional." },
  { n: "05", t: "Entrega", d: "Enviamos para qualquer região do Brasil." },
];

const WA_MSG =
  "Olá, gostaria de solicitar um orçamento para uma placa personalizada em aço corten produzida pela ATR METAL.";
const WA_LINK = `https://wa.me/5564992253474?text=${encodeURIComponent(WA_MSG)}`;

const COUNTDOWN_SECONDS = 5 * 60;

function formatCurrency(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatNumber(n: number, digits = 2) {
  return n.toLocaleString("pt-BR", { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

function Countdown() {
  const [secs, setSecs] = useState(COUNTDOWN_SECONDS);
  useEffect(() => {
    const id = setInterval(() => {
      setSecs((s) => (s <= 1 ? COUNTDOWN_SECONDS : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");
  return (
    <div className="industrial-card p-5 md:p-6 text-center border-primary/40">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
        ⏰ Oferta Especial encerra em
      </div>
      <div className="font-display text-5xl md:text-6xl text-ember-glow tabular-nums">
        {mm}:{ss}
      </div>
    </div>
  );
}

function CalcSection() {
  const [largura, setLargura] = useState("");
  const [altura, setAltura] = useState("");
  const [espessura, setEspessura] = useState("");
  const [erro, setErro] = useState("");
  const [resultado, setResultado] = useState<
    { area: number; precoOriginal: number; precoPromocional: number; desconto: number } | null
  >(null);

  function calcular() {
    setErro("");
    setResultado(null);

    const l = parseFloat(largura.replace(",", "."));
    const a = parseFloat(altura.replace(",", "."));

    if (!largura.trim() || isNaN(l) || l <= 0) {
      setErro("Informe uma largura válida em centímetros.");
      return;
    }
    if (!altura.trim() || isNaN(a) || a <= 0) {
      setErro("Informe uma altura válida em centímetros.");
      return;
    }
    if (!espessura) {
      setErro("Selecione uma espessura.");
      return;
    }

    const quote = calculatePlate(l, a, espessura);
    if (!quote) { setErro("Selecione uma espessura válida."); return; }
    setResultado(quote);
  }

  const waMsg = resultado
    ? `Olá! Acabei de realizar um cálculo na calculadora da ATR METAL.\n\nDimensões:\n• Largura: ${largura} cm\n• Altura: ${altura} cm\n• Espessura: ${espessura} mm\n\nValor normal: ${formatCurrency(resultado.precoOriginal)}\n\nValor promocional com 10% de desconto: ${formatCurrency(resultado.precoPromocional)}\n\nGostaria de solicitar meu orçamento.`
    : "";
  const waCalcLink = resultado
    ? `https://wa.me/5564992253474?text=${encodeURIComponent(waMsg)}`
    : WA_LINK;

  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start" data-reveal>
      <div className="industrial-card p-8 md:p-10 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Largura (cm)
            </span>
            <input
              type="number"
              min="1"
              step="0.1"
              value={largura}
              onChange={(e) => setLargura(e.target.value)}
              placeholder="Ex: 100"
              className="mt-2 w-full bg-input/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary  transition-all"
            />
          </label>
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Altura (cm)
            </span>
            <input
              type="number"
              min="1"
              step="0.1"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Ex: 50"
              className="mt-2 w-full bg-input/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary  transition-all"
            />
          </label>
        </div>

        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Espessura
          </span>
          <select
            value={espessura}
            onChange={(e) => setEspessura(e.target.value)}
            className="mt-2 w-full bg-input/60 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary  transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled>Selecione a espessura</option>
            <option value="1.2">1,2 mm</option>
            <option value="1.5">1,5 mm</option>
            <option value="2.0">2,0 mm</option>
            <option value="3.0">3,0 mm</option>
            <option value="4.76">4,76 mm</option>
          </select>
        </label>

        {erro && (
          <div className="text-sm text-destructive border border-destructive/30 bg-destructive/10 px-4 py-3">
            {erro}
          </div>
        )}

        <Button variant="bare"
          type="button"
          onClick={calcular}
          className="btn-ember w-full py-4 font-bold uppercase tracking-widest text-sm"
        >
          Calcular Valor
        </Button>
      </div>

      <div className="space-y-6">
        {resultado ? (
          <>
            <Countdown />
            <div className="industrial-card p-8 md:p-10 text-center space-y-6 border-primary/30">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/40 text-primary font-mono text-[11px] uppercase tracking-[0.2em]">
                🔥 Promoção Especial -10%
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Área da peça
                </div>
                <div className="font-display text-3xl md:text-4xl text-foreground">
                  {formatNumber(resultado.area)} m²
                </div>
              </div>

              <div className="h-px bg-border/40" />

              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Preço normal
                </div>
                <div className="font-display text-2xl md:text-3xl text-muted-foreground line-through">
                  {formatCurrency(resultado.precoOriginal)}
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">
                  Preço promocional
                </div>
                <div className="font-display text-5xl md:text-6xl text-ember-glow">
                  {formatCurrency(resultado.precoPromocional)}
                </div>
              </div>

              <div className="inline-block px-4 py-2 bg-accent/15 border border-accent/40 text-accent font-mono text-xs uppercase tracking-widest">
                Você economiza {formatCurrency(resultado.desconto)}
              </div>

              <Button asChild variant="bare"><a
                href={waCalcLink}
                target="_blank"
                rel="noopener"
                className="btn-ember inline-flex items-center justify-center gap-2 w-full py-4 font-bold uppercase tracking-widest text-sm"
              >
                Garantir Meu Desconto Agora <span aria-hidden>→</span>
              </a></Button>

              <p className="text-[10px] text-muted-foreground leading-relaxed pt-2">
                Promoção sujeita à confirmação comercial e disponibilidade de produção.
              </p>
            </div>
          </>
        ) : (
          <div className="industrial-card p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[260px]">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Resultado
            </div>
            <p className="text-muted-foreground max-w-xs">
              Preencha as dimensões e a espessura para visualizar o valor estimado da sua peça com 10% de desconto promocional.
            </p>
          </div>
        )}

        <div className="border border-border/40 bg-card/40 px-6 py-5 text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground block mb-1">Aviso Comercial</strong>
          Valor estimado para fabricação da peça em corte padrão. Frete, pintura, acabamento, dobras,
          instalação, arte personalizada ou serviços adicionais poderão alterar o valor final.
        </div>
      </div>

    </div>
  );
}

function PlacasPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const previous = document.activeElement;
    const close = document.querySelector<HTMLButtonElement>('[aria-label="Fechar"]');
    close?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "Tab") { event.preventDefault(); close?.focus(); }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled || menuOpen ? "glass-strong py-3" : "py-4 md:py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="ATR METAL">
            <img src={logoAtr} alt="ATR METAL Indústria Metalúrgica" className="h-7 sm:h-8 md:h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Início
            </Link>
            <a href="#galeria" className="text-muted-foreground hover:text-foreground transition-colors">
              Galeria
            </a>
            <a href="#categorias" className="text-muted-foreground hover:text-foreground transition-colors">
              Categorias
            </a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <a href="#orcamento" className="text-muted-foreground hover:text-foreground transition-colors">
              Orçamento
            </a>
          </nav>
          <Button asChild variant="ember" className="hidden md:inline-flex px-5 py-2.5 text-xs font-bold uppercase"><a
            href="#orcamento"
          >
            Orçamento <span aria-hidden>→</span>
          </a></Button>
          <Button variant="bare"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center border border-border/80 text-foreground"
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-px w-full bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 bottom-0 h-px w-full bg-current transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </Button>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto max-w-7xl px-4 pt-4 pb-6 flex flex-col gap-1 border-t border-border/40 mt-3">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-3 font-display text-lg uppercase tracking-wide text-foreground border-b border-border/40"
            >
              Início <span aria-hidden className="text-primary">→</span>
            </Link>
            {[
              ["Galeria", "#galeria"],
              ["Categorias", "#categorias"],
              ["Como Funciona", "#como-funciona"],
              ["Orçamento", "#orcamento"],
            ].map(([l, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-3 font-display text-lg uppercase tracking-wide text-foreground border-b border-border/40"
              >
                {l} <span aria-hidden className="text-primary">→</span>
              </a>
            ))}
            <Button asChild variant="bare"><a
              href="#orcamento"
              onClick={() => setMenuOpen(false)}
              className="btn-ember mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 font-bold uppercase tracking-widest text-xs"
            >
              Solicitar Orçamento <span aria-hidden>→</span>
            </a></Button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative plates-hero flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Placa em aço corten sendo cortada por máquina CNC plasma com faíscas"
            className="h-full w-full object-cover ken-burns"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay" />
        </div>
        <Sparks count={26} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Linha Premium · Aço Corten
            </span>
          </div>
          <h1 className="text-hero font-display uppercase max-w-5xl">
            Placas Personalizadas em <span className="text-ember-glow">Aço Corten</span> e Metal
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground">
            Transforme sua marca, propriedade ou ambiente com peças exclusivas produzidas em metal de
            alta qualidade. Corte CNC e plasma, acabamento profissional e fabricação própria.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="bare"><a
              href="#orcamento"
              className="btn-ember inline-flex items-center gap-2 px-7 py-4 font-bold uppercase tracking-widest text-sm"
            >
              Solicitar Orçamento <span aria-hidden>→</span>
            </a></Button>
            <Button asChild variant="bare"><a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="btn-outline-steel inline-flex items-center gap-2 px-7 py-4 font-bold uppercase tracking-widest text-sm"
            >
              Falar no WhatsApp
            </a></Button>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border/40 bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4 text-xs md:text-sm">
          {[
            "Fabricação Própria",
            "Corte CNC de Precisão",
            "Aço Corten, Carbono e Inox",
            "Projetos Exclusivos Sob Medida",
            "Entrega para Todo o Brasil",
          ].map((t) => (
            <div key={t} className="flex items-center gap-3">
              <span className="text-primary font-bold">✓</span>
              <span className="font-mono uppercase tracking-widest text-muted-foreground">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14" data-reveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">01 · Galeria</span>
                <span className="h-px w-16 bg-border" />
              </div>
              <h2 className="text-display font-display uppercase">
                Nossos <span className="text-ember-glow">trabalhos.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Placas para fazendas, letreiros empresariais, logos corporativos, números residenciais,
              painéis e peças artísticas em metal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 auto-rows-[260px]">
            {gallery.map((g) => (
              <Button variant="bare"
                key={g.t}
                type="button"
                onClick={() => setLightbox(g.img)}
                data-reveal
                className={`group relative overflow-hidden border border-border/60 ${g.w}`}
              >
                <img
                  src={g.img}
                  alt={g.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">
                    Ampliar
                  </div>
                  <div className="font-display text-xl md:text-2xl uppercase">{g.t}</div>
                </div>
                <span className="absolute top-4 right-4 grid h-9 w-9 place-items-center border border-border/80 bg-background/60 backdrop-blur text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  +
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="categorias" className="relative py-24 md:py-32 bg-card/30 border-y border-border/40">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-14" data-reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">02 · Categorias</span>
              <span className="h-px w-16 bg-border" />
            </div>
            <h2 className="text-display font-display uppercase">
              O que <span className="text-ember-glow">fabricamos.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categorias.map((c, i) => (
              <article
                key={c.t}
                data-reveal
                onMouseMove={(e) => {
                  const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  (e.currentTarget as HTMLElement).style.setProperty("--mx", `${e.clientX - r.left}px`);
                  (e.currentTarget as HTMLElement).style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className="industrial-card p-7"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="font-mono text-xs text-primary mb-4">/{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-2xl uppercase mb-3">{c.t}</h3>
                <p className="text-muted-foreground">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14" data-reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">03 · Diferenciais</span>
              <span className="h-px w-16 bg-border" />
            </div>
            <h2 className="text-display font-display uppercase">
              Por que a <span className="text-ember-glow">ATR METAL.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 border border-border/40">
            {diferenciais.map((d) => (
              <div key={d.t} data-reveal className="bg-background/80 p-7">
                <h3 className="font-display text-xl uppercase mb-2 text-foreground">{d.t}</h3>
                <p className="text-muted-foreground text-sm">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="relative py-24 md:py-32 bg-card/30 border-y border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14" data-reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">04 · Processo</span>
              <span className="h-px w-16 bg-border" />
            </div>
            <h2 className="text-display font-display uppercase">
              Como <span className="text-ember-glow">funciona.</span>
            </h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {passos.map((p) => (
              <li key={p.n} data-reveal className="industrial-card p-7 relative">
                <div className="font-display text-5xl text-ember-glow mb-4">{p.n}</div>
                <h3 className="font-display text-xl uppercase mb-2">{p.t}</h3>
                <p className="text-muted-foreground text-sm">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CALCULADORA */}
      <section id="calculadora" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="mb-14" data-reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">04 · Calculadora</span>
              <span className="h-px w-16 bg-border" />
            </div>
            <h2 className="text-display font-display uppercase">
              Calcule o valor <span className="text-ember-glow">estimado.</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Informe as dimensões e espessura para obter uma estimativa instantânea do custo da sua placa personalizada.
            </p>
          </div>

          <CalcSection />
        </div>
      </section>

      {/* ORÇAMENTO */}
      <section id="orcamento" className="py-24 md:py-32 relative overflow-hidden">
        <Sparks count={12} />
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div data-reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">05 · Orçamento</span>
              <span className="h-px w-16 bg-border" />
            </div>
            <h2 className="text-display font-display uppercase">
              Solicite seu projeto <span className="text-ember-glow">personalizado.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Envie uma foto, desenho ou apenas sua ideia. Nossa equipe transformará seu projeto em
              uma peça exclusiva em metal.
            </p>
            <div className="mt-10 space-y-5">
              <div className="border-l-2 border-primary pl-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  WhatsApp
                </div>
                <a href={WA_LINK} target="_blank" rel="noopener" className="text-foreground hover:text-primary text-lg">
                  (64) 99225-3474
                </a>
              </div>
              <div className="border-l-2 border-primary pl-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  E-mail
                </div>
                <a href="mailto:contato@atrmetal.com.br" className="text-foreground hover:text-primary text-lg">
                  contato@atrmetal.com.br
                </a>
              </div>
            </div>
          </div>

          <form
            data-reveal
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);
              const nome = String(fd.get("nome") || "").trim();
              const cidade = String(fd.get("cidade") || "").trim();
              const fone = String(fd.get("fone") || "").trim();
              const email = String(fd.get("email") || "").trim();
              const msg = String(fd.get("msg") || "").trim();
              const file = fd.get("imagem") as File | null;
              const fileInfo = file && file.name ? `${file.name} (${Math.round(file.size / 1024)} KB)` : "—";

              const linhas = [
                "*Nova solicitação — Placa Personalizada (ATR METAL)*",
                "",
                `*Nome:* ${nome}`,
                `*Cidade:* ${cidade}`,
                `*Telefone/WhatsApp:* ${fone}`,
                `*E-mail:* ${email}`,
                "",
                "*Descrição do projeto:*",
                msg,
                "",
                `*Imagem anexada:* ${fileInfo}`,
                "_(Envie a imagem em seguida pelo WhatsApp para concluir o orçamento.)_",
              ];
              const texto = linhas.join("\n");
              const corpoEmail = linhas.join("\n").replace(/\*/g, "").replace(/_/g, "");
              const assunto = `Orçamento Placa Personalizada — ${nome}${cidade ? " / " + cidade : ""}`;

              const wa = `https://wa.me/5564992253474?text=${encodeURIComponent(texto)}`;
              const mail = `mailto:contato@atrmetal.com.br?subject=${encodeURIComponent(
                assunto,
              )}&body=${encodeURIComponent(corpoEmail)}`;

              window.open(wa, "_blank", "noopener,noreferrer");
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
            <div className="font-display text-2xl uppercase mb-2">Orçamento — Placa Personalizada</div>
            {[
              { l: "Nome", n: "nome", t: "text", req: true },
              { l: "Cidade", n: "cidade", t: "text", req: true },
              { l: "Telefone / WhatsApp", n: "fone", t: "tel", req: true },
              { l: "E-mail", n: "email", t: "email", req: true },
            ].map((f) => (
              <label key={f.n} className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{f.l}</span>
                <input
                  required={f.req}
                  name={f.n}
                  type={f.t}
                  maxLength={200}
                  className="mt-2 w-full bg-input/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary  transition-all"
                />
              </label>
            ))}
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Descrição do projeto
              </span>
              <textarea
                required
                name="msg"
                rows={4}
                maxLength={2000}
                placeholder="Material (corten, carbono, inox), dimensões, texto/logo, prazo..."
                className="mt-2 w-full bg-input/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary  transition-all resize-none"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Imagem / Referência (opcional)
              </span>
              <input
                name="imagem"
                type="file"
                accept="image/*"
                className="mt-2 w-full bg-input/60 border border-border px-4 py-3 text-foreground file:mr-4 file:py-1 file:px-3 file:border-0 file:bg-primary/20 file:text-primary file:font-mono file:text-xs file:uppercase file:tracking-widest"
              />
            </label>
            <Button variant="bare" type="submit" className="btn-ember w-full py-4 font-bold uppercase tracking-widest text-sm">
              Solicitar Orçamento →
            </Button>
            <p className="text-xs text-muted-foreground">
              Ao enviar, sua solicitação será encaminhada para o nosso WhatsApp e e-mail. Anexe a
              imagem diretamente no WhatsApp para agilizar.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border/60 bg-card/40">
        <div className="diag-stripes h-2" />
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoAtr} alt="ATR METAL" className="h-10 w-auto" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-center">
            © {new Date().getFullYear()} ATR METAL · Placas Personalizadas em Aço Corten
          </div>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Voltar ao site
          </Link>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Trabalho ATR METAL ampliado"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md grid place-items-center p-4 animate-in fade-in"
        >
          <Button variant="bare"
            type="button"
            aria-label="Fechar"
            className="absolute top-6 right-6 grid h-11 w-11 place-items-center border border-border bg-background/80 text-foreground hover:text-primary"
            onClick={() => setLightbox(null)}
          >
            ✕
          </Button>
          <img
            src={lightbox}
            alt="Trabalho ATR METAL ampliado"
            className="max-h-[88vh] max-w-[92vw] object-contain border border-border"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <WhatsAppButton />
    </div>
  );
}
