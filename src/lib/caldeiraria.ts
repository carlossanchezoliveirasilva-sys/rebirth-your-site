import ventilador from "@/assets/cald-ventilador.jpg.asset.json";
import chamine from "@/assets/cald-chamine.png.asset.json";
import multiciclone from "@/assets/cald-multiciclone.png.asset.json";
import redler from "@/assets/cald-redler.png.asset.json";
import rosca from "@/assets/cald-rosca.png.asset.json";
import pipeRack from "@/assets/cald-pipe-rack.jpg.asset.json";
import plataforma from "@/assets/cald-plataforma.jpg.asset.json";
import escada from "@/assets/cald-escada.png.asset.json";
import guardaCorpo from "@/assets/cald-guarda-corpo.jpg.asset.json";

export type CaldeirariaItem = {
  slug: string;
  name: string;
  description: string;
  image?: { url: string; alt: string };
};

export const caldeirariaItems: CaldeirariaItem[] = [
  { slug: "ventiladores-e-exaustores-industriais", name: "Ventiladores e Exaustores Industriais", description: "Fabricação de equipamentos e estruturas para movimentação e exaustão de ar em aplicações industriais, conforme projeto e condições de operação.", image: { url: ventilador.url, alt: "Ventiladores e exaustores industriais" } },
  { slug: "chamines-industriais", name: "Chaminés Industriais", description: "Fabricação de chaminés e estruturas metálicas conforme dimensões, aplicação e requisitos definidos em projeto.", image: { url: chamine.url, alt: "Chaminé industrial autoportante" } },
  { slug: "multiciclones", name: "Multiciclones", description: "Fabricação de conjuntos para separação de partículas em correntes gasosas, conforme projeto e características do processo industrial.", image: { url: multiciclone.url, alt: "Multiciclone industrial sobre estrutura metálica" } },
  { slug: "ciclones-industriais", name: "Ciclones Industriais", description: "Fabricação de ciclones industriais conforme aplicação, dimensões e especificações do projeto." },
  { slug: "redler-via-seco", name: "Redler Via Seco", description: "Fabricação e manutenção de equipamentos para transporte de materiais a granel, de acordo com as necessidades da instalação industrial.", image: { url: redler.url, alt: "Redler com corrente de arraste" } },
  { slug: "roscas-extratoras", name: "Roscas Extratoras", description: "Fabricação de roscas extratoras e componentes para movimentação e extração de materiais, conforme dimensões e aplicação.", image: { url: rosca.url, alt: "Roscas extratoras helicoidais" } },
  { slug: "pipe-racks", name: "Pipe Racks — Estruturas de Suporte", description: "Fabricação de estruturas metálicas para sustentação e organização de linhas e instalações industriais, conforme projeto fornecido pelo cliente ou desenvolvido sob medida.", image: { url: pipeRack.url, alt: "Pipe rack — estrutura metálica de suporte" } },
  { slug: "plataformas-industriais", name: "Plataformas Industriais", description: "Fabricação de plataformas metálicas para acesso e operação industrial, dimensionadas conforme projeto e condições de utilização.", image: { url: plataforma.url, alt: "Plataforma industrial em estrutura metálica" } },
  { slug: "escadas-marinheiro", name: "Escadas Marinheiro", description: "Fabricação de escadas marinheiro em aço carbono, com acabamento e pintura definidos conforme especificação do cliente. A pintura eletrostática poderá ser oferecida quando compatível com o projeto e com o processo de acabamento disponível.", image: { url: escada.url, alt: "Escada marinheiro com gaiola de proteção" } },
  { slug: "guarda-corpos-e-corrimaos", name: "Guarda-corpos e Corrimãos", description: "Fabricação de guarda-corpos e corrimãos metálicos para proteção e circulação em áreas industriais, conforme projeto, dimensões e requisitos de segurança aplicáveis.", image: { url: guardaCorpo.url, alt: "Guarda-corpo e corrimão metálico em escada" } },
];

export const caldeirariaMaterials = [
  "Aço carbono",
  "Fabricação conforme desenho técnico ou projeto do cliente",
  "Desenvolvimento de projetos sob medida",
  "Acabamento e pintura conforme especificação",
  "Fabricação de peças e estruturas personalizadas",
];

export const caldeirariaQuoteMessage = (name: string) =>
  `Olá! Gostaria de solicitar um orçamento para ${name} com a ATR METAL.`;
