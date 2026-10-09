export const SITE_URL = "https://atrmetal.com.br";
export const BRAND = "ATR METAL";
export const PHONE_DISPLAY = "(64) 99225-3474";
export const PHONE_E164 = "+5564992253474";
export const WHATSAPP = "5564992253474";
export const INSTAGRAM_URL = "https://www.instagram.com/atr_metal/";
export const MAPS_URRUCUI_URL = "https://maps.app.goo.gl/K55wYYj9Jv1SUGfK6";
export const URUCUI_LABEL = "Portal dos Cerrados, Uruçuí - PI";
export const PIRES_ADDRESS =
  "Av. Priscila Maria de Lima Oliveira, Qd. 13A, Lt.22 — Jardim Goiás II, Pires do Rio - GO, 75200-000";

export type ImageKey = "calandra" | "cnc" | "structure" | "agro" | "boiler" | "conveyor" | "hero";

export interface Service {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  applications: string[];
  solves: string;
  image: ImageKey;
  related: string[];
}

export const services: Service[] = [
  {
    slug: "calandragem-de-chapas",
    name: "Calandragem de chapas e perfis",
    title: "Calandragem de Chapas e Perfis Metálicos | ATR METAL",
    description: "Serviços de calandragem de chapas metálicas e perfis para cilindros, tubos, cones e estruturas curvas. Solicite orçamento à ATR METAL.",
    h1: "Calandragem de chapas metálicas e perfis",
    intro: "A calandragem dá curvatura controlada a chapas e perfis metálicos, transformando material plano em cilindros, anéis, virolas e peças curvas usadas em equipamentos e estruturas.",
    applications: ["Corpos de silos, tanques e moegas", "Virolas para dutos e tubulações", "Anéis e flanges curvos", "Estruturas arqueadas e coberturas"],
    solves: "Evita emendas desnecessárias e garante raio uniforme, facilitando a montagem e a soldagem das peças na sequência da fabricação.",
    image: "calandra",
    related: ["dobra-de-chapas", "soldagem-industrial", "corte-cnc-plasma"],
  },
  {
    slug: "dobra-de-chapas",
    name: "Dobra de chapas metálicas",
    title: "Dobra de Chapas Metálicas Sob Medida | ATR METAL",
    description: "Dobra de chapas metálicas sob medida para perfis, calhas, suportes e componentes de máquinas. Atendimento industrial e agrícola.",
    h1: "Dobra de chapas metálicas sob medida",
    intro: "A dobra conforma chapas em ângulos precisos para produzir perfis, cantoneiras, calhas, caixas e suportes conforme o desenho do cliente.",
    applications: ["Perfis U, L e Z especiais", "Calhas e chapas de proteção", "Carenagens e tampas de máquinas", "Suportes e componentes estruturais"],
    solves: "Substitui peças compradas prontas que não se encaixam no projeto e reduz soldas, deixando a peça mais resistente e com melhor acabamento.",
    image: "structure",
    related: ["calandragem-de-chapas", "corte-cnc-plasma", "manutencao-industrial"],
  },
  {
    slug: "corte-cnc-plasma",
    name: "Corte CNC plasma",
    title: "Corte CNC Plasma de Chapas Metálicas | ATR METAL",
    description: "Corte CNC plasma de chapas de aço com repetibilidade para peças, flanges, placas e componentes. Envie seu desenho e peça orçamento.",
    h1: "Corte CNC plasma de chapas metálicas",
    intro: "O corte CNC plasma segue o desenho digital da peça, produzindo contornos complexos com repetibilidade — ideal para lotes de peças iguais ou formas personalizadas.",
    applications: ["Flanges, bases e chapas de ligação", "Peças de reposição para máquinas", "Placas e letreiros personalizados", "Gabaritos e componentes em série"],
    solves: "Reduz retrabalho de corte manual, padroniza as peças e acelera a fabricação a partir de arquivos de desenho.",
    image: "cnc",
    related: ["oxicorte", "dobra-de-chapas", "soldagem-industrial"],
  },
  {
    slug: "oxicorte",
    name: "Oxicorte de metais",
    title: "Oxicorte de Chapas e Metais | ATR METAL",
    description: "Oxicorte de chapas e peças de aço carbono para fabricação, desmontagem e recuperação de componentes. Fale com a ATR METAL.",
    h1: "Oxicorte de chapas e metais",
    intro: "O oxicorte utiliza chama de gás combustível e oxigênio para cortar aço carbono, sendo indicado para chapas mais grossas e serviços de campo.",
    applications: ["Corte de chapas grossas de aço carbono", "Desmontagem de estruturas e equipamentos", "Preparação de peças para solda", "Recortes em manutenção"],
    solves: "Permite cortar materiais espessos e realizar serviços onde equipamentos de corte fixos não chegam.",
    image: "hero",
    related: ["corte-cnc-plasma", "soldagem-industrial", "manutencao-industrial"],
  },
  {
    slug: "torno-e-usinagem",
    name: "Torno e usinagem de peças",
    title: "Torno e Usinagem de Peças Sob Medida | ATR METAL",
    description: "Serviços de torno e usinagem para fabricação e recuperação de peças sob medida: eixos, buchas, polias e componentes de máquinas.",
    h1: "Torno e usinagem de peças sob medida",
    intro: "Fabricamos e recuperamos peças usinadas a partir de amostra ou desenho, atendendo reposição de componentes de máquinas industriais e agrícolas.",
    applications: ["Eixos, pinos e buchas", "Polias e engrenagens simples", "Adaptações e peças fora de linha", "Recuperação de componentes desgastados"],
    solves: "Reduz o tempo de máquina parada quando a peça original é cara, demorada para chegar ou não é mais fabricada.",
    image: "conveyor",
    related: ["manutencao-industrial", "manutencao-agroindustrial", "soldagem-industrial"],
  },
  {
    slug: "soldagem-industrial",
    name: "Soldagem em geral",
    title: "Soldagem Industrial e Solda em Geral | ATR METAL",
    description: "Soldagem industrial e solda em geral para fabricação, montagem e reparo de estruturas, equipamentos e peças metálicas.",
    h1: "Soldagem industrial e solda em geral",
    intro: "A soldagem une componentes metálicos na fabricação de estruturas e equipamentos e também recupera peças trincadas ou quebradas.",
    applications: ["Montagem de estruturas metálicas", "Fabricação de equipamentos", "Reparo de trincas e quebras", "Reforço de peças e suportes"],
    solves: "Recupera equipamentos sem necessidade de substituição completa e viabiliza a fabricação de peças sob medida.",
    image: "hero",
    related: ["solda-em-chassi-de-caminhao", "calandragem-de-chapas", "manutencao-industrial"],
  },
  {
    slug: "locacao-de-munck",
    name: "Locação de caminhão munck",
    title: "Locação de Caminhão Munck | ATR METAL",
    description: "Locação de caminhão munck para içamento, carga, descarga e movimentação de estruturas e equipamentos. Consulte disponibilidade.",
    h1: "Locação de caminhão munck",
    intro: "O caminhão munck combina transporte e guindaste articulado para içar, carregar e posicionar cargas pesadas em obras, fazendas e indústrias.",
    applications: ["Carga e descarga de equipamentos", "Montagem de estruturas metálicas", "Movimentação de peças pesadas", "Transporte de materiais com içamento"],
    solves: "Dispensa a contratação separada de transporte e guindaste, agilizando montagens e movimentações no local.",
    image: "structure",
    related: ["manutencao-industrial", "manutencao-agroindustrial", "soldagem-industrial"],
  },
  {
    slug: "carretinhas-agricolas",
    name: "Fabricação de carretinhas agrícolas",
    title: "Fabricação de Carretinhas Agrícolas | ATR METAL",
    description: "Fabricação de carretinhas agrícolas sob medida para transporte de insumos, ferramentas e cargas leves na propriedade rural.",
    h1: "Fabricação de carretinhas agrícolas",
    intro: "Fabricamos carretinhas agrícolas conforme a necessidade da propriedade, para transporte de insumos, ferramentas, tanques e pequenas cargas.",
    applications: ["Transporte de insumos e sementes", "Apoio a tanques e reservatórios", "Movimentação de ferramentas", "Serviços gerais na fazenda"],
    solves: "Oferece um implemento adequado à rotina da fazenda, em vez de adaptar modelos prontos que não atendem ao uso real.",
    image: "agro",
    related: ["reboques-agricolas", "manutencao-agroindustrial", "soldagem-industrial"],
  },
  {
    slug: "reboques-agricolas",
    name: "Fabricação de reboques agrícolas",
    title: "Fabricação de Reboques Agrícolas | ATR METAL",
    description: "Fabricação de reboques agrícolas sob medida para transporte de cargas na lavoura e na propriedade rural. Peça seu orçamento.",
    h1: "Fabricação de reboques agrícolas",
    intro: "Reboques agrícolas fabricados sob encomenda para transporte de cargas maiores entre lavoura, armazém e sede da propriedade.",
    applications: ["Transporte de grãos e insumos", "Movimentação de fardos e materiais", "Apoio à colheita e ao plantio", "Logística interna da fazenda"],
    solves: "Adequa dimensões e configuração ao trator e à carga utilizados, aumentando a produtividade no campo.",
    image: "agro",
    related: ["carretinhas-agricolas", "reforma-de-carrocerias-de-caminhao", "manutencao-agroindustrial"],
  },
  {
    slug: "reforma-de-carrocerias-de-caminhao",
    name: "Reforma de carrocerias de caminhão",
    title: "Reforma e Recuperação de Carrocerias de Caminhão | ATR METAL",
    description: "Reforma e recuperação de carrocerias de caminhão: substituição de chapas, reforço estrutural e reparos com solda.",
    h1: "Reforma e recuperação de carrocerias de caminhão",
    intro: "Recuperamos carrocerias metálicas danificadas pelo uso, substituindo partes corroídas e reforçando a estrutura para voltar ao trabalho.",
    applications: ["Troca de chapas e assoalhos", "Reforço de longarinas e travessas", "Reparo de laterais e tampas", "Recuperação após desgaste ou avaria"],
    solves: "Prolonga a vida útil da carroceria com custo menor que a troca completa.",
    image: "structure",
    related: ["solda-em-chassi-de-caminhao", "soldagem-industrial", "reboques-agricolas"],
  },
  {
    slug: "solda-em-chassi-de-caminhao",
    name: "Solda em chassi de caminhão",
    title: "Solda em Chassi de Caminhão | ATR METAL",
    description: "Serviços de solda em chassi de caminhão para reparo de trincas, reforços e adaptações estruturais. Fale com a ATR METAL.",
    h1: "Solda em chassi de caminhão",
    intro: "Executamos reparos com solda em chassis de caminhão, tratando trincas, quebras e reforços em pontos sujeitos a esforço.",
    applications: ["Reparo de trincas em longarinas", "Reforços estruturais", "Adaptações e suportes", "Recuperação após avarias"],
    solves: "Devolve a integridade estrutural do chassi e evita que pequenas trincas evoluam para quebras maiores.",
    image: "hero",
    related: ["reforma-de-carrocerias-de-caminhao", "soldagem-industrial", "locacao-de-munck"],
  },
  {
    slug: "manutencao-industrial",
    name: "Manutenção industrial",
    title: "Manutenção Industrial em Estruturas e Equipamentos | ATR METAL",
    description: "Manutenção industrial corretiva e preventiva em estruturas metálicas, transportadores e equipamentos. Solicite atendimento.",
    h1: "Manutenção industrial",
    intro: "Realizamos manutenção em estruturas e equipamentos metálicos industriais, combinando solda, usinagem, corte e montagem.",
    applications: ["Transportadores e elevadores", "Estruturas e plataformas", "Caldeiras e equipamentos térmicos", "Fabricação de peças de reposição"],
    solves: "Reduz paradas não programadas e recupera equipamentos com agilidade.",
    image: "boiler",
    related: ["manutencao-agroindustrial", "torno-e-usinagem", "soldagem-industrial"],
  },
  {
    slug: "manutencao-agroindustrial",
    name: "Manutenção agroindustrial",
    title: "Manutenção Agroindustrial | ATR METAL",
    description: "Manutenção agroindustrial em armazéns, sementeiras, cooperativas e unidades de beneficiamento. Atendimento da ATR METAL.",
    h1: "Manutenção agroindustrial",
    intro: "Atendemos armazéns, sementeiras, cooperativas e unidades de beneficiamento com manutenção em equipamentos e estruturas metálicas.",
    applications: ["Moegas, silos e secadores", "Transportadores de grãos", "Estruturas de armazéns", "Peças para máquinas agrícolas"],
    solves: "Mantém a unidade operando nos períodos de safra, quando cada hora parada representa perda.",
    image: "conveyor",
    related: ["manutencao-industrial", "carretinhas-agricolas", "torno-e-usinagem"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const whatsappLink = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
export const QUOTE_EMAIL = "contato@atrmetal.com.br";
