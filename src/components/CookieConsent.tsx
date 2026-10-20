import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const CONSENT_KEY = "atr-cookie-consent";
export type Consent = { essential: true; analytics: boolean; marketing: boolean; date: string };

export function openCookiePreferences() {
  window.dispatchEvent(new Event("atr-open-cookies"));
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_KEY);
      if (saved) {
        const c = JSON.parse(saved) as Consent;
        setAnalytics(c.analytics); setMarketing(c.marketing);
      } else setOpen(true);
    } catch { setOpen(true); }
    const show = () => { setCustom(true); setOpen(true); };
    window.addEventListener("atr-open-cookies", show);
    return () => window.removeEventListener("atr-open-cookies", show);
  }, []);

  function save(a: boolean, m: boolean) {
    const c: Consent = { essential: true, analytics: a, marketing: m, date: new Date().toISOString() };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
    setAnalytics(a); setMarketing(m); setOpen(false); setCustom(false);
  }

  if (!open) return null;
  return (
    <div role="dialog" aria-label="Preferências de cookies" className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl border border-border bg-card p-5 shadow-2xl sm:inset-x-6">
      <p className="font-display text-xl uppercase">Cookies e privacidade</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Usamos apenas recursos essenciais para o site funcionar. Cookies não essenciais (estatísticas ou marketing) só serão ativados com sua permissão.{" "}
        <Link to="/privacidade" className="text-primary underline">Política de privacidade</Link>
      </p>
      {custom && (
        <div className="mt-4 space-y-3 text-sm">
          <label className="flex items-center gap-3"><input type="checkbox" checked disabled /> Essenciais (sempre ativos)</label>
          <label className="flex items-center gap-3"><input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} /> Estatísticas</label>
          <label className="flex items-center gap-3"><input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} /> Marketing</label>
        </div>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="ember" size="sm" onClick={() => save(true, true)}>Aceitar todos</Button>
        <Button variant="steel" size="sm" onClick={() => save(false, false)}>Rejeitar não essenciais</Button>
        {custom
          ? <Button variant="outline" size="sm" onClick={() => save(analytics, marketing)}>Salvar preferências</Button>
          : <Button variant="outline" size="sm" onClick={() => setCustom(true)}>Configurar</Button>}
      </div>
    </div>
  );
}
