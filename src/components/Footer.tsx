import Link from "next/link";
import { company } from "@/data/company";
import { navItems } from "@/data/content";
import { CopyrightYear } from "./CopyrightYear";
import { ObfuscatedEmail } from "./ObfuscatedEmail";
import { Seals } from "./Seals";

export function Footer() {
  return (
    <footer className="mt-20 bg-brand-night text-blue-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-2xl font-extrabold text-white">JAHU</p>
          <p className="text-sm leading-relaxed text-blue-100">
            Máquinas para pisos 100% brasileiras desde {company.foundedYear}: lixadeiras,
            lapidadoras, raspadoras, politrizes e fresadoras para construção civil.
          </p>
          <Seals />
        </div>
        <nav aria-label="Rodapé">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Navegação</p>
          <ul className="space-y-2 text-sm">
            {navItems.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="hover:text-white hover:underline">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Contato</p>
          <ul className="space-y-2 text-sm">
            {company.phones.map((p) => (
              <li key={p.e164}>
                <a href={p.href} className="hover:text-white hover:underline">
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <ObfuscatedEmail className="hover:text-white hover:underline" />
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-blue-200">
        © <CopyrightYear /> {company.name} · Todos os direitos reservados
      </div>
    </footer>
  );
}
