import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import { ArrowIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { Seals } from "@/components/Seals";
import { assistance, company, companyEmail, yearsInBusiness } from "@/data/company";
import { home } from "@/data/content";
import { getCurrentYear } from "@/data/year";
import { products } from "@/data/products";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  url: company.siteUrl,
  logo: `${company.siteUrl}/icon.svg`, // TODO: trocar pelo logo oficial
  foundingDate: String(company.foundedYear),
  telephone: company.phones.map((p) => p.e164),
  email: companyEmail,
  description:
    "Fabricante brasileira de máquinas para pisos: politrizes, lixadeiras, lapidadoras, raspadoras e fresadoras.",
  areaServed: "BR",
  // TODO: adicionar `address` quando o endereço for confirmado.
};

export default async function Home() {
  const years = yearsInBusiness(await getCurrentYear());

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-8 md:pt-12">
        <div className="grid overflow-hidden rounded-3xl bg-brand-night shadow-card md:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 p-8 text-white md:p-12">
            <p className="text-sm font-bold uppercase tracking-widest text-seal">
              Fabricante nacional · Desde {company.foundedYear}
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">{home.title}</h1>
            <p className="text-base leading-relaxed text-blue-100 md:text-lg">
              Lixadeiras, lapidadoras, raspadoras, fresadoras e politrizes de pisos para a
              construção civil, e compra facilitada pelo Cartão BNDES.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/produtos/jt2d"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-brand-night transition-colors hover:bg-blue-50"
              >
                Ver produtos <ArrowIcon width={18} height={18} />
              </Link>
              <WhatsAppButton label="Falar no WhatsApp" />
            </div>
          </div>
          <div className="relative min-h-72 md:min-h-[26rem]">
            <Image
              src="/images/home/estande-feira.png"
              alt="Estande da JAHU em feira com três máquinas verdes, a JAHU Turbo ao centro"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Selos */}
      <section aria-label="Diferenciais" className="mx-auto max-w-6xl px-4 pt-8">
        <Seals variant="cards" />
      </section>

      {/* Sobre + linhas */}
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <div className="grid gap-8 rounded-3xl bg-paper p-8 shadow-card ring-1 ring-brand-night/5 md:grid-cols-2 md:p-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-night md:text-3xl">
              Quem é a JAHU
            </h2>
            <p className="leading-relaxed text-muted">{home.intro(years)}</p>
          </div>
          <ul className="grid content-start gap-3">
            {home.lines.map((line) => (
              <li
                key={line.name}
                className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 font-medium text-brand-night ring-1 ring-brand-night/10"
              >
                <span className="size-2.5 shrink-0 rounded-full bg-machine" aria-hidden />
                {line.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Produtos */}
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <h2 className="mb-6 text-2xl font-bold text-brand-night md:text-3xl">
          Nossas máquinas
        </h2>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/produtos/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-paper shadow-card ring-1 ring-brand-night/5 transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] bg-white">
                  {p.photos[0] ? (
                    <Image
                      src={p.photos[0].src}
                      alt={p.photos[0].alt}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                      className="object-contain p-4"
                    />
                  ) : (
                    <div className="grid h-full place-items-center text-sm font-medium text-muted">
                      Foto em breve
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="text-xl font-bold text-brand-night">{p.name}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted">
                    {p.shortDescription}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-machine-dark group-hover:underline">
                    Ver detalhes <ArrowIcon width={16} height={16} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Assistência */}
      {/* <section className="mx-auto max-w-6xl px-4 pt-14">
        <div className="flex flex-col items-start gap-5 rounded-3xl bg-paper p-8 shadow-card ring-1 ring-brand-night/5 md:flex-row md:items-center md:p-12">
          <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-brand text-white">
            <Image src="/images/assets/repair-tool.png" alt="" width={36} height={36} className="size-9 brightness-0 invert" />
          </span>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-brand-night">
              Revendedor autorizado e assistência técnica
            </h2>
            <p className="mt-1 text-muted">
              {assistance.shortName}: {assistance.description}
            </p>
          </div>
          <Link
            href="/assistencia-tecnica"
            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand-night px-5 py-3 font-bold text-white hover:bg-brand-deep"
          >
            Saiba mais <ArrowIcon width={18} height={18} />
          </Link>
        </div>
      </section> */}

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <div className="rounded-3xl bg-brand-deep p-8 text-center text-white shadow-card md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">Precisa de ajuda para escolher a máquina?</h2>
          <p className="mx-auto mt-2 max-w-xl text-blue-100">
            Fale direto com a JAHU por telefone ou WhatsApp.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton />
            <CallButton tone="dark" label={`Ligar ${company.phones[0].display}`} />
          </div>
        </div>
      </section>
    </>
  );
}
