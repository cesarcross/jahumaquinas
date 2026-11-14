export const navItems = [
  { href: "/", label: "Home" },
  { href: "/produtos/jt2d", label: "Produtos", match: "/produtos" },
  { href: "/galeria", label: "Galeria" },
  // { href: "/parceiros", label: "Parceiros" },
  // { href: "/assistencia-tecnica", label: "Assistência Técnica" },
  { href: "/contato", label: "Contato" },
] as const;

export const seals = [
  { id: "bndes", title: "Compre com o Cartão BNDES", short: "Cartão BNDES" },
  { id: "since", title: "Desde 1988", short: "Desde 1988" },
  { id: "nacional", title: "Empresa 100% nacional", short: "100% nacional" },
] as const;

export const home = {
  title: "JAHU Máquinas 100% brasileira desde 1988",
  intro: (years: number) =>
    `A JAHU - Máquinas e Ferramentas, fabrica e comercializa máquinas politrizes e equipamentos para construção civil há ${years} anos. 
  Nossas máquinas trabalham em pisos de alta resistência e atendem médios e grandes empreendimentos, como galpões, mercados, condomínios, 
  hotéis, terrenos, shoppings e aeroportos.`,
  lines: [
    { name: "Lixadeira de pisos" },
    { name: "Lapidadora de pisos" },
    { name: "Raspadora de pisos" },
    { name: "Fresadoras de pisos" },
    { name: "Máquinas para raspar e polir pisos" },
  ],
};
