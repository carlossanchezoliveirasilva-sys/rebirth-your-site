export const SITE_URL = "https://atrmetal.com.br";
export const BRAND = "ATR METAL";
export const PHONE_DISPLAY = "(64) 99225-3474";
export const PHONE_E164 = "+5564992253474";
export const WHATSAPP = "5564992253474";
export const INSTAGRAM_URL = "https://www.instagram.com/atr_metal/";
// Localização oficial da ATR METAL no Google Maps (ficha "A T R METAL INDÚSTRIA METALÚRGICA", Uruçuí - PI)
export const MAPS_URRUCUI_URL = "https://www.google.com/maps/place/ATR+METAL+IND%C3%9ASTRIA+METAL%C3%9ARGICA/@-7.2824859,-44.5073468,153m/data=!3m1!1e3!4m6!3m5!1s0x7804fa013ba36b3:0xa81b095707ec2e45!8m2!3d-7.2824859!4d-44.5073468!16s%2Fg%2F11zy82qjc7";
export const GEO_LAT = -7.2824859;
export const GEO_LNG = -44.5073468;
export const MAPS_EMBED_SRC = "https://www.google.com/maps?q=-7.2824859,-44.5073468&z=17&output=embed";
export const QUOTE_EMAIL = "contato@atrmetal.com.br";

export const ADDRESS = {
  street: "Av. Delano Martins Coelho — Setor 06 — Quadra 144 — Lote 3704",
  district: "Loteamento Novo Uruçuí II",
  city: "Uruçuí",
  state: "PI",
  cep: "64.860-000",
  reference: "Ao lado do antigo Posto Paizão — Portal dos Cerrados",
};
export const ADDRESS_LINE = `${ADDRESS.street}, ${ADDRESS.district}, ${ADDRESS.city} - ${ADDRESS.state}, CEP ${ADDRESS.cep}`;
export const URUCUI_LABEL = `${ADDRESS.city} - ${ADDRESS.state}`;
export const SERVICE_AREA = "Centro-Oeste e região MATOPIBA";

export type ImageKey = "calandra" | "cnc" | "structure" | "agro" | "boiler" | "conveyor" | "hero";

export const categories = [
  "Corte e conformação de metais",
  "Usinagem e fabricação",
  "Soldagem e estruturas metálicas",
  "Setor agrícola e agroindustrial",
  "Manutenção e serviços complementares",
] as const;
export type Category = (typeof categories)[number];

export interface Service {
  slug: string;
  name: string;
  category: Category;
  capacity?: string;
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
  // Corte e conformação
  {
    slug: "corte-cnc-plasma",
    name: "Corte CNC plasma",
    category: "Corte e conformação de metais",
    capacity: "Até 2 polegadas, conforme o material e as condições técnicas de corte",
    title: "Corte CNC Plasma até 2\" em Uruçuí - PI | ATR METAL",
    description: "Corte CNC plasma de chapas metálicas com capacidade informada de até 2 polegadas. Peças industriais e projetos sob medida. ATR METAL, Uruçuí - PI.",
    h1: "Corte CNC plasma de chapas metálicas",
    intro: "Realizamos corte CNC plasma de chapas metálicas, com capacidade informada de até 2 polegadas, conforme o material, as condições de corte e os requisitos técnicos do projeto. Oferecemos soluções para fabricação de peças industriais, componentes metálicos, estruturas e projetos personalizados.",
    applications: ["Peças industriais e componentes metálicos", "Flanges, bases e chapas de ligação", "Peças para estruturas", "Projetos personalizados a partir de desenho"],
    solves: "Padroniza as peças a partir do desenho digital e reduz o retrabalho do corte manual.",
    image: "cnc",
    related: ["oxicorte", "dobra-de-chapas", "projetos-sob-medida"],
  },
  {
    slug: "oxicorte",
    name: "Oxicorte",
    category: "Corte e conformação de metais",
    capacity: "Até 200 mm (20 cm) de espessura, conforme o material e as condições de execução",
    title: "Oxicorte de Chapas Metálicas até 200 mm | ATR METAL",
    description: "Oxicorte de chapas metálicas de grandes espessuras, com capacidade de até 200 mm. Componentes industriais e peças robustas. ATR METAL, Uruçuí - PI.",
    h1: "Oxicorte de chapas metálicas",
    intro: "Executamos serviços de oxicorte para materiais metálicos de grandes espessuras, com capacidade de até 200 mm, conforme as características do material e as condições técnicas de execução. Uma solução para componentes industriais, peças robustas, estruturas metálicas e aplicações que exigem cortes de maior espessura.",
    applications: ["Chapas de grande espessura", "Componentes industriais robustos", "Peças para estruturas metálicas", "Preparação de peças para solda"],
    solves: "Permite cortar materiais espessos que exigem um processo diferente do corte plasma.",
    image: "hero",
    related: ["corte-cnc-plasma", "soldagem-industrial", "manutencao-industrial"],
  },
  {
    slug: "dobra-de-chapas",
    name: "Dobra de chapas",
    category: "Corte e conformação de metais",
    capacity: "Até 1/4\" de espessura x 3.000 mm de comprimento",
    title: "Dobra de Chapas até 1/4\" x 3.000 mm | ATR METAL",
    description: "Dobra de chapas metálicas com capacidade de até 1/4\" de espessura e 3.000 mm de comprimento. Componentes e projetos sob medida. ATR METAL.",
    h1: "Dobra de chapas metálicas até 1/4\" x 3.000 mm",
    intro: "A ATR METAL oferece serviços de dobra de chapas metálicas com capacidade de até 1/4” de espessura e 3.000 mm de comprimento, proporcionando soluções para fabricação de componentes, estruturas metálicas, peças industriais e projetos personalizados sob medida.",
    applications: ["Perfis e cantoneiras especiais", "Calhas e chapas de proteção", "Carenagens e tampas de máquinas", "Suportes e componentes estruturais"],
    solves: "Produz peças no formato do projeto e reduz soldas, com melhor acabamento.",
    image: "structure",
    related: ["calandragem-de-chapas", "corte-cnc-plasma", "galpoes-e-estruturas-metalicas"],
  },
  {
    slug: "calandragem-de-chapas",
    name: "Calandragem de chapas e perfis",
    category: "Corte e conformação de metais",
    title: "Calandragem de Chapas e Perfis Metálicos | ATR METAL",
    description: "Calandragem de chapas metálicas e perfis para cilindros, virolas e estruturas curvas. Solicite orçamento à ATR METAL em Uruçuí - PI.",
    h1: "Calandragem de chapas metálicas e perfis",
    intro: "A calandragem dá curvatura controlada a chapas e perfis metálicos, transformando material plano em cilindros, anéis, virolas e peças curvas usadas em equipamentos e estruturas.",
    applications: ["Corpos de silos, tanques e moegas", "Virolas para dutos", "Anéis e peças curvas", "Estruturas arqueadas"],
    solves: "Garante raio uniforme e facilita a montagem e a soldagem das peças.",
    image: "calandra",
    related: ["dobra-de-chapas", "soldagem-industrial", "corte-cnc-plasma"],
  },
  // Usinagem e fabricação
  {
    slug: "torno-e-usinagem",
    name: "Tornearia e usinagem de peças",
    category: "Usinagem e fabricação",
    title: "Tornearia e Usinagem de Peças Sob Medida | ATR METAL",
    description: "Tornearia e usinagem para fabricação, recuperação e adaptação de componentes metálicos sob medida, conforme desenho ou amostra. ATR METAL, Uruçuí - PI.",
    h1: "Tornearia e usinagem de peças sob medida",
    intro: "A ATR METAL realiza serviços de tornearia e usinagem para fabricação, recuperação e adaptação de componentes metálicos, conforme a aplicação e as especificações técnicas de cada cliente. Atendemos demandas de peças usinadas sob medida para máquinas, equipamentos industriais, sistemas de transporte de materiais e aplicações agrícolas e agroindustriais. Trabalhamos com projetos personalizados, mediante avaliação das dimensões, dos materiais e dos requisitos de fabricação.",
    applications: ["Serviços de torno", "Fabricação de peças usinadas", "Componentes metálicos sob medida", "Recuperação de componentes, conforme viabilidade técnica", "Peças conforme desenho ou amostra do cliente"],
    solves: "Ajuda a repor componentes difíceis de encontrar ou fora de linha.",
    image: "conveyor",
    related: ["roscas-helicoidais", "projetos-sob-medida", "manutencao-agroindustrial"],
  },
  {
    slug: "roscas-helicoidais",
    name: "Fabricação de roscas helicoidais",
    category: "Usinagem e fabricação",
    title: "Fabricação de Roscas Helicoidais Sob Medida | ATR METAL",
    description: "Fabricação de roscas helicoidais para aplicações industriais, agrícolas e agroindustriais, conforme especificações do cliente. Envie medidas ou desenho.",
    h1: "Fabricação de roscas helicoidais",
    intro: "Fabricamos roscas helicoidais para aplicações industriais, agrícolas e agroindustriais, conforme as necessidades do projeto e as especificações do cliente. Desenvolvemos componentes sob medida para sistemas de transporte e movimentação de materiais, mediante avaliação técnica da aplicação.",
    applications: ["Transporte de grãos e materiais a granel", "Reposição de roscas em equipamentos", "Componentes sob medida", "Envio de desenhos, medidas ou referências técnicas para orçamento"],
    solves: "Fornece a rosca conforme a aplicação, a partir das informações enviadas pelo cliente.",
    image: "conveyor",
    related: ["redler", "elevadores-de-canecas", "torno-e-usinagem"],
  },
  {
    slug: "projetos-sob-medida",
    name: "Projetos personalizados sob medida",
    category: "Usinagem e fabricação",
    title: "Fabricação de Peças e Equipamentos Sob Medida | ATR METAL",
    description: "Fabricação de peças, componentes, estruturas e equipamentos metálicos sob medida para os setores industrial, agrícola e agroindustrial. Consulte a viabilidade.",
    h1: "Fabricação de projetos personalizados sob medida",
    intro: "Na ATR METAL, fabricamos peças, componentes, estruturas e equipamentos metálicos sob medida, de acordo com as necessidades de cada aplicação. Atendemos projetos personalizados para os setores industrial, agrícola e agroindustrial, utilizando processos de corte, dobra, calandragem, usinagem e soldagem conforme os requisitos técnicos de cada trabalho. A partir das informações, desenhos ou especificações fornecidas pelo cliente, avaliamos a solução de fabricação mais adequada para cada demanda.",
    applications: ["Peças e componentes industriais personalizados", "Estruturas e equipamentos metálicos", "Soluções para o setor agrícola e agroindustrial", "Consulta de viabilidade de fabricação"],
    solves: "Tem um projeto específico? Solicite um orçamento e apresente sua necessidade à nossa equipe.",
    image: "structure",
    related: ["torno-e-usinagem", "corte-cnc-plasma", "galpoes-e-estruturas-metalicas"],
  },
  // Soldagem e estruturas
  {
    slug: "soldagem-industrial",
    name: "Soldagem em geral",
    category: "Soldagem e estruturas metálicas",
    title: "Soldagem Industrial e Solda em Geral | ATR METAL",
    description: "Soldagem industrial e solda em geral para fabricação, montagem e reparo de estruturas, equipamentos e peças metálicas. ATR METAL, Uruçuí - PI.",
    h1: "Soldagem industrial e solda em geral",
    intro: "A soldagem une componentes metálicos na fabricação de estruturas e equipamentos e também recupera peças trincadas ou quebradas.",
    applications: ["Soldagem de estruturas metálicas", "Fabricação de equipamentos", "Reparo de trincas e quebras", "Reforço de peças e suportes"],
    solves: "Recupera equipamentos sem substituição completa e viabiliza peças sob medida.",
    image: "hero",
    related: ["galpoes-e-estruturas-metalicas", "solda-em-chassi-de-caminhao", "manutencao-industrial"],
  },
  {
    slug: "galpoes-e-estruturas-metalicas",
    name: "Galpões e estruturas metálicas",
    category: "Soldagem e estruturas metálicas",
    title: "Fabricação de Galpões e Estruturas Metálicas | ATR METAL",
    description: "Fabricação de galpões metálicos, estruturas sob medida, telhamento e soldagem de estruturas para aplicações industriais, comerciais e agroindustriais.",
    h1: "Fabricação de galpões e estruturas metálicas",
    intro: "A ATR METAL atua na fabricação de galpões e estruturas metálicas, oferecendo soluções para aplicações industriais, comerciais e agroindustriais. Executamos serviços de fabricação de componentes, telhamento e soldagem de estruturas metálicas, conforme as especificações de cada projeto. Desenvolvemos soluções personalizadas, considerando as dimensões, a aplicação e os requisitos técnicos informados pelo cliente.",
    applications: ["Fabricação de galpões metálicos", "Fabricação e montagem de estruturas metálicas", "Serviços de telhamento", "Soldagem de estruturas metálicas", "Fabricação de componentes estruturais", "Projetos personalizados de estruturas"],
    solves: "Nosso objetivo é fornecer estruturas funcionais e adequadas às necessidades de cada empreendimento.",
    image: "structure",
    related: ["soldagem-industrial", "dobra-de-chapas", "locacao-de-munck"],
  },
  // Agro
  {
    slug: "implementos-agricolas",
    name: "Implementos agrícolas",
    category: "Setor agrícola e agroindustrial",
    title: "Fabricação de Implementos Agrícolas Sob Medida | ATR METAL",
    description: "Fabricação de implementos agrícolas e soluções metálicas sob medida para o setor agropecuário. Projetos personalizados. ATR METAL, Uruçuí - PI.",
    h1: "Fabricação de implementos agrícolas",
    intro: "A ATR METAL desenvolve e fabrica implementos agrícolas e soluções metálicas sob medida para atender às necessidades do setor agropecuário. Trabalhamos com projetos personalizados, fabricação de componentes e estruturas, buscando resistência, funcionalidade e adequação à aplicação de cada cliente.",
    applications: ["Implementos sob medida", "Componentes e estruturas para o campo", "Adaptações conforme a aplicação", "Projetos personalizados"],
    solves: "Oferece um implemento adequado à rotina da propriedade, em vez de adaptar modelos prontos.",
    image: "agro",
    related: ["projetos-sob-medida", "manutencao-agroindustrial", "soldagem-industrial"],
  },
  {
    slug: "redler",
    name: "Fabricação de sistemas Redler",
    category: "Setor agrícola e agroindustrial",
    title: "Fabricação e Manutenção de Redler | ATR METAL",
    description: "Fabricação, recuperação e manutenção de componentes de sistemas Redler para transporte de materiais a granel em instalações industriais e agroindustriais.",
    h1: "Fabricação e manutenção de sistemas Redler",
    intro: "A ATR METAL oferece fabricação e serviços relacionados a sistemas Redler, utilizados no transporte de materiais a granel em instalações industriais e agroindustriais. Desenvolvemos soluções conforme os requisitos de cada aplicação, incluindo componentes e estruturas metálicas sob medida.",
    applications: ["Fabricação de sistemas Redler", "Componentes e estruturas sob medida", "Recuperação de componentes", "Manutenção de sistemas existentes"],
    solves: "Mantém o transporte de granéis funcionando com componentes feitos conforme a instalação.",
    image: "conveyor",
    related: ["elevadores-de-canecas", "roscas-helicoidais", "manutencao-de-secadores"],
  },
  {
    slug: "elevadores-de-canecas",
    name: "Elevadores de canecas",
    category: "Setor agrícola e agroindustrial",
    title: "Fabricação de Elevadores de Canecas e Cabeças | ATR METAL",
    description: "Fabricação de elevadores de canecas, cabeças de elevadores e componentes metálicos, além de manutenção e recuperação. ATR METAL, Uruçuí - PI.",
    h1: "Fabricação de elevadores de canecas",
    intro: "Fabricamos cabeças de elevadores de canecas, elevadores de canecas e componentes metálicos destinados a sistemas de movimentação vertical de materiais. Desenvolvemos soluções para aplicações industriais e agroindustriais, conforme as dimensões, as condições operacionais e as especificações de cada projeto.",
    applications: ["Fabricação de cabeças de elevadores de canecas", "Fabricação de elevadores de canecas", "Componentes metálicos relacionados", "Manutenção e recuperação, conforme viabilidade técnica"],
    solves: "Atende instalações de armazenagem, processamento e movimentação de produtos agrícolas.",
    image: "agro",
    related: ["redler", "manutencao-de-secadores", "roscas-helicoidais"],
  },
  {
    slug: "manutencao-de-secadores",
    name: "Manutenção de secadores",
    category: "Setor agrícola e agroindustrial",
    title: "Manutenção de Secadores e Secadores Rotativos | ATR METAL",
    description: "Manutenção de secadores, secadores rotativos e elevadores de canecas, com fabricação e recuperação de componentes metálicos. ATR METAL.",
    h1: "Manutenção de secadores e equipamentos agroindustriais",
    intro: "A ATR METAL presta serviços de manutenção industrial e agroindustrial em equipamentos utilizados nos processos de secagem e movimentação de produtos agrícolas. Atuamos na manutenção de secadores, elevadores de canecas e secadores rotativos, além da fabricação e recuperação de componentes metálicos conforme as necessidades de cada instalação.",
    applications: ["Manutenção de secadores", "Manutenção de secadores rotativos", "Manutenção de elevadores de canecas", "Recuperação de componentes, conforme avaliação técnica", "Peças sob medida para manutenção"],
    solves: "Atendimento direcionado à manutenção, recuperação e fabricação sob medida, com foco na funcionalidade dos equipamentos.",
    image: "boiler",
    related: ["elevadores-de-canecas", "redler", "manutencao-agroindustrial"],
  },
  // Manutenção e complementares
  {
    slug: "manutencao-industrial",
    name: "Manutenção industrial",
    category: "Manutenção e serviços complementares",
    title: "Manutenção Industrial em Estruturas e Equipamentos | ATR METAL",
    description: "Manutenção industrial em estruturas metálicas, transportadores e equipamentos, com fabricação e recuperação de componentes. ATR METAL, Uruçuí - PI.",
    h1: "Manutenção industrial",
    intro: "Realizamos manutenção em estruturas e equipamentos metálicos industriais, combinando solda, usinagem, corte e montagem.",
    applications: ["Transportadores e elevadores", "Estruturas e plataformas", "Equipamentos térmicos", "Fabricação e recuperação de componentes, conforme avaliação técnica"],
    solves: "Ajuda a recuperar equipamentos e reduzir paradas.",
    image: "boiler",
    related: ["manutencao-agroindustrial", "torno-e-usinagem", "soldagem-industrial"],
  },
  {
    slug: "manutencao-agroindustrial",
    name: "Manutenção agroindustrial",
    category: "Manutenção e serviços complementares",
    title: "Manutenção Agroindustrial | ATR METAL",
    description: "Manutenção agroindustrial em armazéns, sementeiras, cooperativas e unidades de beneficiamento. ATR METAL atende o Centro-Oeste e o MATOPIBA.",
    h1: "Manutenção agroindustrial",
    intro: "Atendemos armazéns, sementeiras, cooperativas e unidades de beneficiamento com manutenção em equipamentos e estruturas metálicas.",
    applications: ["Moegas, silos e secadores", "Transportadores de grãos", "Estruturas de armazéns", "Peças para máquinas agrícolas"],
    solves: "Ajuda a manter a unidade operando nos períodos de safra.",
    image: "conveyor",
    related: ["manutencao-de-secadores", "elevadores-de-canecas", "manutencao-industrial"],
  },
  {
    slug: "locacao-de-munck",
    name: "Locação de caminhão munck",
    category: "Manutenção e serviços complementares",
    title: "Locação de Caminhão Munck | ATR METAL",
    description: "Locação de caminhão munck para içamento, carga, descarga e movimentação de estruturas e equipamentos. Consulte disponibilidade.",
    h1: "Locação de caminhão munck",
    intro: "O caminhão munck combina transporte e guindaste articulado para içar, carregar e posicionar cargas em obras, fazendas e indústrias.",
    applications: ["Carga e descarga de equipamentos", "Montagem de estruturas metálicas", "Movimentação de peças pesadas", "Transporte com içamento"],
    solves: "Dispensa a contratação separada de transporte e guindaste.",
    image: "structure",
    related: ["galpoes-e-estruturas-metalicas", "manutencao-industrial", "manutencao-agroindustrial"],
  },
  {
    slug: "reforma-de-carrocerias-de-caminhao",
    name: "Reforma de carrocerias de caminhão",
    category: "Manutenção e serviços complementares",
    title: "Reforma de Carrocerias de Caminhão | ATR METAL",
    description: "Reforma e recuperação de carrocerias de caminhão: substituição de chapas, reforço estrutural e reparos com solda.",
    h1: "Reforma e recuperação de carrocerias de caminhão",
    intro: "Recuperamos carrocerias metálicas danificadas pelo uso, substituindo partes corroídas e reforçando a estrutura.",
    applications: ["Troca de chapas e assoalhos", "Reforço de longarinas e travessas", "Reparo de laterais e tampas", "Recuperação após desgaste"],
    solves: "Prolonga a vida útil da carroceria com custo menor que a troca completa.",
    image: "structure",
    related: ["solda-em-chassi-de-caminhao", "soldagem-industrial", "implementos-agricolas"],
  },
  {
    slug: "solda-em-chassi-de-caminhao",
    name: "Soldagem em chassis de caminhão",
    category: "Manutenção e serviços complementares",
    title: "Solda em Chassi de Caminhão | ATR METAL",
    description: "Soldagem em chassis de caminhão para reparo de trincas, reforços e adaptações, conforme avaliação técnica. ATR METAL.",
    h1: "Soldagem em chassis de caminhão",
    intro: "Executamos reparos com solda em chassis de caminhão, tratando trincas, quebras e reforços, conforme avaliação técnica.",
    applications: ["Reparo de trincas em longarinas", "Reforços estruturais", "Adaptações e suportes", "Recuperação após avarias"],
    solves: "Evita que pequenas trincas evoluam para quebras maiores.",
    image: "hero",
    related: ["reforma-de-carrocerias-de-caminhao", "soldagem-industrial", "locacao-de-munck"],
  },
];

/** Old URLs that now point to a renamed service. */
export const legacySlugs: Record<string, string> = {
  "carretinhas-agricolas": "implementos-agricolas",
  "reboques-agricolas": "implementos-agricolas",
};

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const servicesByCategory = () =>
  categories.map((c) => ({ category: c, items: services.filter((s) => s.category === c) }));

export const whatsappLink = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
