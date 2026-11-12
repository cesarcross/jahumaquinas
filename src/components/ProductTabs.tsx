import Link from "next/link";
import { products } from "@/data/products";

export function ProductTabs({ current }: { current?: string }) {
  return (
    <nav aria-label="Produtos">
      <ul className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
        {products.map((p) => {
          const active = p.slug === current;
          return (
            <li key={p.slug} className="shrink-0">
              <Link
                href={`/produtos/${p.slug}`}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-12 items-center rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                  active
                    ? "bg-machine text-white shadow-md"
                    : "bg-machine/10 text-machine-dark ring-1 ring-machine/30 hover:bg-machine/20"
                }`}
              >
                {p.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
