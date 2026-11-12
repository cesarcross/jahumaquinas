import type { Metadata } from "next";
import { PageCard } from "@/components/PageCard";

// TODO (cliente): definir se esta página será mantida ou integrada à home e fornecer o conteúdo.
export const metadata: Metadata = {
  title: "Galeria",
  alternates: { canonical: "/galeria" },
  robots: { index: false }, // remover quando houver conteúdo
};

export default function Page() {
  return (
    <PageCard title="Galeria">
      <p className="text-lg text-muted">Conteúdo em preparação.</p>
    </PageCard>
  );
}
