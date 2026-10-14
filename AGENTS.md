<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep the target TanStack starter runtime and dependencies; migrate only inspected presentation code to avoid importing external runtime configuration.
- Preserve the source site's two public URLs and in-page navigation during recreation so existing navigation behavior remains intact.
- Store imported photos and logos as asset pointers; use their URLs rather than committing binary media.
- Keep quote requests as WhatsApp and email handoffs, with reference images attached manually in WhatsApp; the source has no database or automatic email delivery.
- Keep plate pricing in a browser-safe calculation module with regression tests so original estimates remain consistent.
- Service pages are data-driven from src/lib/services.ts via /servicos/$slug; keep public/sitemap.xml in sync when services change.
- Agricultural implements use the dedicated catalog route /implementos-agricolas; /servicos/implementos-agricolas and its legacy slugs redirect there so old links keep working.
- /placas-personalizadas is temporarily retired: its route only issues a 301 to "/", and it stays out of navigation and the sitemap; plate assets and src/lib/plate-pricing.ts are kept so the page can be restored.
