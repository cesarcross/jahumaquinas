export type ProductPhoto = { src: string; alt: string };

export type Product = {
  slug: string;
  name: string;
  /** Nome longo usado em títulos/SEO. */
  fullName: string;
  /** Para cards e meta description. */
  shortDescription: string;
  characteristics: string[];
  accessories: { name: string; details?: string[]; photo?: ProductPhoto }[];
  /** A primeira é a principal. Vazio = placeholder visual. */
  photos: ProductPhoto[];
  manualUrl?: string;
  seo: { title: string; description: string };
};

const aspirationTube = {
  name: "Tubo de Aspiração (opcional)",
  details: [
    "Material: alumínio",
    'Diâmetro de 2"',
    "Ideal para raspagem a seco",
    "Adaptação de 1 ou 2 tubos por máquina.",
  ],
  photo: {
    src: "/images/jt2d/jt2d-acessorio-tubo-aspiracao.png",
    alt: "Tubo de aspiração opcional instalado na máquina JAHU",
  },
};

const standardAccessories = [
  { name: "Alavanca para transporte" },
  { name: "Paralama de correia laminada" },
  aspirationTube,
];

// TODO: trocar os recortes de screenshot por fotos em alta resolução e adicionar mais fotos.
export const products: Product[] = [
  {
    slug: "jt2d",
    name: "JT2D",
    fullName: "Politriz de pisos JT2D",
    shortDescription:
      "Politriz para polir e raspar pisos de alta resistência, granilite, mármores, granitos, concreto e epóxi.",
    characteristics: [
      "Mod JT2D motor weg trifásico - 4CV - 4P",
      "Voltagem: 220/380V",
      "Peso: 150kg",
      "Utilizada para polir e raspar pisos.",
      "Pisos de alta resistência, granilite, mármores e granitos, concreto e epoxi.",
      "Construída em alumínio, aço e ferro fundido. Rolamentos esféricos.",
      "Alta produtividade. Utiliza pedra abrasiva para raspar e polir.",
    ],
    accessories: standardAccessories,
    photos: [
      {
        src: "/images/jt2d/jt2d-principal.png",
        alt: "Politriz JAHU JT2D verde com alavanca de transporte",
      },
    ],
    manualUrl: "/manuais/jt2d.pdf",
    seo: {
      title: "Politriz de pisos JT2D",
      description:
        "Politriz JAHU JT2D: motor Weg trifásico 4CV, 220/380V, 150kg. Para polir e raspar granilite, mármore, granito, concreto e epóxi. Baixe o manual.",
    },
  },
  {
    slug: "jm2d",
    name: "JM2D",
    fullName: "Politriz de pisos JM2D",
    shortDescription:
      "Politriz para polir e raspar pisos de alta resistência, granilite, mármores, granitos, concreto e epóxi.",
    characteristics: [
      "Mod JM2D motor weg monofásico - 3CV - 4P",
      "Voltagem: 220/440V",
      "Peso: 160kg",
      "Utilizada para polir e raspar pisos.",
      "Pisos de alta resistência, granilite, mármores e granitos, concreto e epoxi.",
      "Construída em alumínio, aço e ferro fundido. Rolamentos esféricos.",
      "Alta produtividade. Utiliza pedra abrasiva para raspar e polir.",
    ],
    accessories: standardAccessories,
    photos: [
      {
        src: "/images/jm2d/jm2d-principal.png",
        alt: "Politriz JAHU JM2D verde com alavanca de transporte",
      },
    ],
    manualUrl: "/manuais/jm2d.pdf",
    seo: {
      title: "Politriz de pisos JM2D",
      description:
        "Politriz JAHU JM2D: motor Weg monofásico 3CV, 220/440V, 160kg. Para polir e raspar granilite, mármore, granito, concreto e epóxi. Baixe o manual.",
    },
  },
  {
    slug: "jahu-turbo",
    name: "JAHU TURBO",
    fullName: "Raspadora de pisos JAHU TURBO",
    shortDescription:
      "Raspadora de alta produtividade com 2 discos diamantados, em média 300 metros por dia em piso de alta resistência.",
    characteristics: [
      "Mod JAHU TURBO - motor weg 7.5CV - 4P",
      "Voltagem: 220/380V",
      "Peso: 160kg",
      "Utiliza discos com 44 diamantes para raspar.",
      "Utilizada para alta produtividade, com 2 discos diamantados.",
      "Construída em alumínio, aço e ferro fundido. Rolamentos esféricos.",
      "Produz em média 300 metros por dia em piso de alta resistência, dependendo das condições de fundição do piso.",
    ],
    accessories: standardAccessories,
    photos: [
      {
        src: "/images/jahu-turbo/jahu-turbo-principal.png",
        alt: "Máquina JAHU TURBO verde com painel elétrico na alavanca",
      },
    ],
    manualUrl: "/manuais/jahu-turbo.pdf",
    seo: {
      title: "Raspadora de pisos JAHU TURBO",
      description:
        "JAHU TURBO: motor Weg 7.5CV, 220/380V, 160kg, 2 discos diamantados. Alta produtividade para raspar pisos de alta resistência. Baixe o manual.",
    },
  },
  {
    slug: "jahu-3d-lapidadora",
    name: "JAHU 3D LAPIDADORA",
    fullName: "Lapidadora de pisos JAHU 3D",
    shortDescription:
      "Lapidadora ideal para raspar, polir e lapidar pisos, com três diamantes de engate rápido em cada prato.",
    characteristics: [
      "Mod JAHU 3D - motor weg 7.5CV - 4P",
      "Voltagem: 220/380V",
      "Peso: 200kg",
      "Alta produtividade. Utiliza três diamantes de engate rápido em cada prato.",
      "Ideal para raspar, polir e lapidar pisos.",
      "Inclui quadro de comando.",
      "Chave seletora de voltagem 220/380V.",
      "Chave seletora de sentido de rotação dos pratos.",
      "Acessório: engate para aspirador de pó.",
    ],
    accessories: standardAccessories,
    photos: [
      {
        src: "/images/jahu-3d-lapidadora/jahu-3d-lapidadora-principal.png",
        alt: "Lapidadora JAHU 3D com quadro de comando na alavanca",
      },
    ],
    manualUrl: "/manuais/jahu-3d-lapidadora.pdf",
    seo: {
      title: "Lapidadora de pisos JAHU 3D",
      description:
        "Lapidadora JAHU 3D: motor Weg 7.5CV, 220/380V, 200kg, três diamantes de engate rápido por prato. Para raspar, polir e lapidar pisos. Baixe o manual.",
    },
  },
  {
    slug: "jf300-fresadora",
    name: "JF300 FRESADORA",
    fullName: "Fresadora de pisos JF300",
    shortDescription:
      "Fresadora ideal para escarificar, remover, limpar e texturizar pisos, com ferramenta de ponta de Videa.",
    characteristics: [
      "Mod JF 300 - motor weg 4CV - 6P",
      "Voltagem: 220/380/440V ou motor 4CV monofásico",
      "Peso: 150kg",
      "Ideal para escarificar, remover, limpar e texturizar pisos.",
      "Utiliza ferramenta com ponta de Videa (Rosetas).",
      "Cinto auxiliar para ajudar o operador a movimentar o equipamento.",
      'Tubo de aspiração de pó 2"',
    ],
    accessories: [],
    photos: [
      {
        src: "/images/jf300-fresadora/jf300-fresadora-principal.png",
        alt: "Fresadora JAHU JF300 com motor azul e cinto auxiliar",
      },
    ],
    manualUrl: "/manuais/jf300-fresadora.pdf",
    seo: {
      title: "Fresadora de pisos JF300",
      description:
        "Fresadora JAHU JF300: motor Weg 4CV, 150kg. Para escarificar, remover, limpar e texturizar pisos, com ferramenta de ponta de Videa. Baixe o manual.",
    },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
