export const company = {
  name: "JAHU Máquinas e Ferramentas",
  shortName: "JAHU",
  foundedYear: 1988,
  siteUrl: "https://jahumaquinas.com.br",
  phones: [
    { display: "(11) 98195-2433", href: "tel:+5511981952433", e164: "+5511981952433" },
    { display: "(11) 94747-0026", href: "tel:+5511947470026", e164: "+5511947470026" },
  ],
  whatsapp: {
    display: "(11) 98195-2433",
    number: "5511981952433",
    e164: "+5511981952433",
  },
  // E-mail oficial. NÃO usar jahu@jahumaquinas.com.br (ver context.md, seções 4.5 e 7).
  email: { user: "jahumaquinas", domain: "gmail.com" },
  // TODO: confirmar endereço físico com o cliente (mapa e LocalBusiness).
  address: null as null | {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    mapsUrl: string;
  },
} as const;

export const companyEmail = `${company.email.user}@${company.email.domain}`;

export function whatsappLink(message: string) {
  return `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Olá! Vim pelo site e gostaria de mais informações sobre as máquinas JAHU.";

export const assistance = {
  name: "APC Manutenção de Máquinas e Equipamentos para Construção Civil S/C Ltda",
  shortName: "APC",
  phones: company.phones,
  description:
    "Assistência técnica de politrizes, acabadoras de superfícies, fresas, serra de corte, etc.",
};
