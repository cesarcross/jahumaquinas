import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    ...products.map((p) => `/produtos/${p.slug}`),
    "/assistencia-tecnica",
    "/contato",
    // /galeria e /parceiros entram aqui quando tiverem conteúdo.
  ];
  return paths.map((path) => ({
    url: `${company.siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
