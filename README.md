# Rebirth Your Site

gostaria de recriar esse site

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://rebirth-your-site.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/14d7e8e3-b3d7-4623-93f1-f3a5ca71a507).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Imagens incluídas no download

As 34 imagens originais (fotos reais, imagens já criadas por IA e logotipo) estão incorporadas em `public/images/`. As páginas usam caminhos locais `/images/...`, centralizados em `src/lib/images.ts`, sem depender do serviço de imagens da Lovable. Os antigos arquivos `.asset.json` ficam apenas como registro da origem e não são usados pelas páginas.

Inclua o diretório `public/images/` ao baixar ou copiar o código. O Vite copia os arquivos públicos para a saída de publicação; mantenha a pasta `images/` na raiz pública do domínio. Os caminhos atuais pressupõem publicação na raiz, não em uma subpasta.

Esta organização torna **as imagens** portáveis, mas não converte a aplicação TanStack Start em uma aplicação estática de Vite puro. A publicação completa na HostGator exige uma configuração compatível com a aplicação ou uma exportação estática separada; essa conversão não foi realizada nesta alteração.
