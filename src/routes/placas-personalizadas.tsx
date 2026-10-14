import { createFileRoute, redirect } from "@tanstack/react-router";

// Página de placas temporariamente desativada: redireciona (301) para a página inicial.
export const Route = createFileRoute("/placas-personalizadas")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
