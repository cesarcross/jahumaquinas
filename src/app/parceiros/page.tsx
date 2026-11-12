import type { Metadata } from "next";
import { PageCard } from "@/components/PageCard";

// TODO (cliente): definir se esta página será mantida ou integrada à home e fornecer o conteúdo.
export const metadata: Metadata = {
  title: "Parceiros",
  alternates: { canonical: "/parceiros" },
  robots: { index: false }, // remover quando houver conteúdo
};

export default function Page() {
  return (
    <PageCard title="Parceiros">
      <p className="text-lg text-muted">Conteúdo em preparação.</p>
    </PageCard>
  );
}
