import type { Metadata } from "next";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { WhatsAppLogo } from "@/components/WhatsAppLogo";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";
import { PageCard } from "@/components/PageCard";
import { company, defaultWhatsappMessage, whatsappLink } from "@/data/company";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a JAHU Máquinas e Ferramentas por telefone ou WhatsApp, (11) 98195-2433 e (11) 94747-0026, ou por e-mail.",
  alternates: { canonical: "/contato" },
};

const row = "flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-brand-night/10";
const icon = "grid size-12 shrink-0 place-items-center rounded-xl bg-brand text-white";

export default function ContatoPage() {
  return (
    <PageCard title="Contato" eyebrow="Fale com a JAHU">
      <div className="grid gap-4 md:grid-cols-2">
        {company.phones.map((p) => (
          <a key={p.e164} href={p.href} className={`${row} hover:ring-brand`}>
            <span className={icon}>
              <PhoneIcon />
            </span>
            <span>
              <span className="block text-sm text-muted">Telefone</span>
              <span className="text-lg font-bold text-brand-night">{p.display}</span>
            </span>
          </a>
        ))}
        <a href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noopener noreferrer" className={`${row} hover:ring-brand`}>
          <span className="grid size-12 shrink-0 place-items-center">
            <WhatsAppLogo size={48} />
          </span>
          <span>
            <span className="block text-sm text-muted">WhatsApp</span>
            <span className="text-lg font-bold text-brand-night">{company.whatsapp.display}</span>
          </span>
        </a>
        <div className={row}>
          <span className={icon}>
            <MailIcon />
          </span>
          <span>
            <span className="block text-sm text-muted">E-mail</span>
            <ObfuscatedEmail className="break-all text-lg font-bold text-brand-night underline" />
          </span>
        </div>
      </div>
      {/* TODO: endereço e link do Google Maps, quando o cliente confirmar. */}
    </PageCard>
  );
}
