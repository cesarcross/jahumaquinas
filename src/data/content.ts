export const navItems = [
  { href: "/", label: "Home" },
  { href: "/produtos/jt2d", label: "Produtos", match: "/produtos" },
  { href: "/galeria", label: "Galeria" },
  { href: "/parceiros", label: "Parceiros" },
  { href: "/assistencia-tecnica", label: "Assistência Técnica" },
  { href: "/contato", label: "Contato" },
] as const;

export const seals = [
  { id: "bndes", title: "Compre com o Cartão BNDES", short: "Cartão BNDES" },
  { id: "since", title: "Desde 1988", short: "Desde 1988" },
  { id: "nacional", title: "Empresa 100% nacional", short: "100% nacional" },
] as const;

export const home = {
  title: "JAHU Máquinas 100% brasileira desde 1988",
  // TODO (cliente): "há mais de 25 anos" vem do texto antigo (rodapé 2014). Confirmar
  // se atualiza para "mais de 35 anos" ou "desde 1988". Mantido como no original.
  intro:
    "A JAHU - Máquinas e Ferramentas, fabrica máquinas politrizes há mais de 25 anos em parceria com a APC - Manutenção de Máquinas e Equipamentos para construção civil. Juntas, são responsáveis pela fabricação, manutenção e comercialização de:",
  lines: [
    { name: "Lixadeira de pisos" },
    { name: "Lapidadora de pisos" },
    { name: "Raspadora de pisos" },
    { name: "Fresadoras de pisos" },
    { name: "Máquinas para raspar e polir pisos" },
  ],
};
