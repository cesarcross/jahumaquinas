import type { Metadata } from "next";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import Image from "next/image";
import { PageCard } from "@/components/PageCard";
import { assistance } from "@/data/company";

export const metadata: Metadata = {
  title: "Assistência técnica e revendedor autorizado",
  description:
    "Assistência técnica de politrizes, acabadoras de superfícies, fresas e serra de corte com a APC, revendedor autorizado JAHU. Telefones (11) 98195-2433 e (11) 94747-0026.",
  alternates: { canonical: "/assistencia-tecnica" },
};

export default function AssistenciaPage() {
  return (
    <PageCard title="Revendedor autorizado e assistência técnica">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
        <div className="space-y-5">
          <p className="text-xl font-bold text-brand-night">{assistance.name}</p>
          <p className="text-lg text-muted">{assistance.description}</p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <CallButton />
            <WhatsAppButton message="Olá! Preciso de assistência técnica para minha máquina JAHU." />
          </div>
        </div>
        <span className="mx-auto grid size-40 place-items-center rounded-3xl bg-brand text-white">
          <Image src="/images/assets/repair-tool.png" alt="" width={96} height={96} className="size-24 brightness-0 invert" />
        </span>
      </div>
    </PageCard>
  );
}
