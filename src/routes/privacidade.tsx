import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { openCookiePreferences } from "@/components/CookieConsent";
import { QUOTE_EMAIL, SITE_URL } from "@/lib/services";

const title = "Política de Privacidade e Cookies | ATR METAL";
const description = "Como a ATR METAL trata dados pessoais e cookies no site, conforme a LGPD.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacidade` }],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 space-y-6 text-muted-foreground leading-relaxed">
        <Link to="/" className="font-mono text-xs uppercase text-primary">← Página inicial</Link>
        <h1 className="font-display text-4xl uppercase text-foreground">Política de Privacidade e Cookies</h1>
        <p>Esta política explica como o site da ATR METAL trata informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).</p>
        <h2 className="font-display text-2xl uppercase text-foreground">Dados de orçamento</h2>
        <p>Os formulários do site não armazenam dados em servidores. Ao solicitar um orçamento, a mensagem é aberta no seu WhatsApp ou no seu aplicativo de e-mail, e você decide se a envia. Os dados enviados são usados apenas para responder à sua solicitação.</p>
        <h2 className="font-display text-2xl uppercase text-foreground">Cookies</h2>
        <p>O site usa somente armazenamento essencial no seu navegador para lembrar sua escolha sobre cookies. Atualmente não usamos cookies de estatísticas ou de marketing; caso venham a ser usados, só serão ativados com seu consentimento.</p>
        <p>O mapa da página inicial é fornecido pelo Google Maps, que pode aplicar suas próprias políticas ao ser exibido.</p>
        <Button variant="steel" onClick={openCookiePreferences}>Alterar preferências de cookies</Button>
        <h2 className="font-display text-2xl uppercase text-foreground">Seus direitos</h2>
        <p>Você pode pedir acesso, correção ou exclusão dos seus dados pelo e-mail <a href={`mailto:${QUOTE_EMAIL}`} className="text-primary">{QUOTE_EMAIL}</a>.</p>
      </div>
    </main>
  );
}
