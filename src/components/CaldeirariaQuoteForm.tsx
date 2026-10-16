import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QUOTE_EMAIL, whatsappLink } from "@/lib/services";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  empresa: z.string().trim().max(120).optional(),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(30).regex(/^[0-9()+\-\s]+$/, "Use apenas números"),
  email: z.string().trim().email("E-mail inválido").max(255),
  cidade: z.string().trim().max(100).optional(),
  descricao: z.string().trim().min(10, "Descreva o projeto (mín. 10 caracteres)").max(2000),
});
type Data = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Data, string>>;

function buildMessage(d: Data, files: string[]) {
  return [
    "Olá, gostaria de solicitar um orçamento de caldeiraria industrial.",
    "",
    `Nome: ${d.nome}`,
    d.empresa ? `Empresa: ${d.empresa}` : "",
    `Telefone: ${d.telefone}`,
    `E-mail: ${d.email}`,
    d.cidade ? `Cidade/UF: ${d.cidade}` : "",
    "",
    "Descrição do projeto:",
    d.descricao,
    "",
    files.length ? `Desenhos técnicos (vou anexar): ${files.join(", ")}` : "Desenhos técnicos: não possuo no momento",
  ].filter((l, i, a) => l !== "" || a[i - 1] !== "").join("\n");
}

const field = "w-full border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

export function CaldeirariaQuoteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [files, setFiles] = useState<string[]>([]);
  const [sent, setSent] = useState<null | "email" | "whatsapp">(null);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const via = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value === "email" ? "email" : "whatsapp";
    const raw = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const i of parsed.error.issues) errs[i.path[0] as keyof Data] ??= i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = buildMessage(parsed.data, files);
    const url = via === "email"
      ? `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent("Orçamento de caldeiraria industrial")}&body=${encodeURIComponent(msg)}`
      : whatsappLink(msg);
    if (via === "email") window.location.href = url; else window.open(url, "_blank", "noopener,noreferrer");
    setSent(via);
  }

  const err = (k: keyof Data) => errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>;

  return (
    <form onSubmit={submit} noValidate className="mt-10 grid gap-5 md:grid-cols-2 border border-border/60 bg-card/30 p-6 md:p-8">
      <label className="text-sm">Nome *<input name="nome" autoComplete="name" className={`${field} mt-1`} maxLength={100} />{err("nome")}</label>
      <label className="text-sm">Empresa<input name="empresa" autoComplete="organization" className={`${field} mt-1`} maxLength={120} /></label>
      <label className="text-sm">Telefone / WhatsApp *<input name="telefone" type="tel" autoComplete="tel" className={`${field} mt-1`} maxLength={30} />{err("telefone")}</label>
      <label className="text-sm">E-mail *<input name="email" type="email" autoComplete="email" className={`${field} mt-1`} maxLength={255} />{err("email")}</label>
      <label className="text-sm md:col-span-2">Cidade / UF<input name="cidade" className={`${field} mt-1`} maxLength={100} /></label>
      <label className="text-sm md:col-span-2">Descrição do projeto *<textarea name="descricao" rows={5} maxLength={2000} placeholder="Equipamento ou estrutura, dimensões, material, quantidade, prazo desejado..." className={`${field} mt-1`} />{err("descricao")}</label>
      <label className="text-sm md:col-span-2">Desenhos técnicos (PDF, DWG, imagens)
        <input type="file" multiple accept=".pdf,.dwg,.dxf,.step,.stp,image/*" onChange={(e) => setFiles(Array.from(e.target.files ?? []).map((f) => f.name))} className={`${field} mt-1 file:mr-3 file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-secondary-foreground`} />
        <span className="mt-2 block text-xs text-muted-foreground">Os arquivos não são enviados pelo site: depois de clicar em enviar, anexe-os manualmente na conversa do WhatsApp ou no e-mail que será aberto.</span>
      </label>
      <div className="md:col-span-2 flex flex-col sm:flex-row gap-4">
        <Button type="submit" value="whatsapp" variant="ember" size="lg">Enviar pelo WhatsApp</Button>
        <Button type="submit" value="email" variant="steel" size="lg"><Mail aria-hidden="true" /> Enviar por e-mail</Button>
      </div>
      {sent && <p role="status" className="md:col-span-2 text-sm text-primary">Mensagem preparada no {sent === "email" ? "seu aplicativo de e-mail" : "WhatsApp"}. Confira, anexe os desenhos{files.length ? ` (${files.join(", ")})` : ""} e conclua o envio por lá.</p>}
    </form>
  );
}
