import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import { DownloadIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductTabs } from "@/components/ProductTabs";
import { company } from "@/data/company";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/produtos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: { canonical: `/produtos/${product.slug}` },
    openGraph: {
      title: `${product.seo.title} | JAHU Máquinas`,
      description: product.seo.description,
      url: `/produtos/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: PageProps<"/produtos/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.fullName,
    description: product.seo.description,
    brand: { "@type": "Brand", name: "JAHU" },
    manufacturer: { "@type": "Organization", name: company.name, url: company.siteUrl },
    url: `${company.siteUrl}/produtos/${product.slug}`,
    ...(product.photos[0] && { image: `${company.siteUrl}${product.photos[0].src}` }),
  };

  const message = `Olá! Tenho interesse na ${product.name}.`;

  return (
    <div className="mx-auto max-w-6xl px-4 pt-10">
      <JsonLd data={jsonLd} />
      <ProductTabs current={product.slug} />

      <article className="mt-6 overflow-hidden rounded-3xl bg-paper shadow-card ring-1 ring-brand-night/5">
        <header className="border-b border-brand-night/10 px-6 py-8 md:px-12">
          <h1 className="text-3xl font-bold text-brand-night md:text-4xl">{product.fullName}</h1>
          <p className="mt-2 text-muted">{product.shortDescription}</p>
        </header>

        <div className="grid gap-10 px-6 py-8 md:grid-cols-[minmax(0,420px)_1fr] md:items-start md:px-12 md:py-10">
          <div className="space-y-6">
          {product.photos.length > 0 ? (
              <ProductGallery photos={product.photos} />
            ) : (
              <div className="grid aspect-[4/5] place-items-center rounded-2xl bg-white p-6 text-center text-sm text-muted ring-1 ring-brand-night/10">
                Fotos em breve
              </div>
            )}

            <div className="flex flex-col gap-3">
              {product.manualUrl && (
                <a
                  href={product.manualUrl}
                  download
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-seal px-5 py-3 font-bold text-seal-ink transition-colors hover:brightness-95"
                >
                  <DownloadIcon width={20} height={20} />
                  Baixar manual (PDF)
                </a>
              )}
              <WhatsAppButton message={message} label={`Pedir orçamento da ${product.name}`} />
              <CallButton />
            </div>
          </div>

          <div className="space-y-8">
            {product.characteristics.length > 0 ? (
              <section aria-labelledby="caracteristicas">
                <h2 id="caracteristicas" className="mb-3 text-lg font-bold uppercase tracking-wide text-brand-night">
                  Características
                </h2>
                <ul className="space-y-2 leading-relaxed text-ink">
                  {product.characteristics.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-machine" aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
              </section>
            ) : (
              <p className="rounded-xl bg-white p-5 text-muted ring-1 ring-brand-night/10">
                As especificações completas desta máquina estão sendo preparadas. Fale com a
                nossa equipe para receber todas as informações.
              </p>
            )}

            {product.accessories.length > 0 && (
              <section aria-labelledby="acessorios">
                <h2 id="acessorios" className="mb-3 text-lg font-bold uppercase tracking-wide text-brand-night">
                  Acessórios
                </h2>
                <ul className="space-y-4">
                  {product.accessories.map((a) => (
                    <li key={a.name} className="rounded-xl bg-white p-4 ring-1 ring-brand-night/10">
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <p className="font-bold text-brand-night">{a.name}</p>
                          {a.details && (
                            <ul className="mt-1 text-sm text-muted">
                              {a.details.map((d) => (
                                <li key={d}>{d}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                        {a.photo && (
                          <Image
                            src={a.photo.src}
                            alt={a.photo.alt}
                            width={234}
                            height={165}
                            sizes="(min-width: 640px) 160px, 112px"
                            className="h-auto w-28 shrink-0 rounded-lg sm:w-40"
                          />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
