"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/content";
import { CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./Logo";

export function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (item: (typeof navItems)[number]) => {
    const base = "match" in item ? item.match : item.href;
    return base === "/" ? pathname === "/" : pathname.startsWith(base);
  };

  return (
    <nav
      aria-label="Principal"
      className="sticky top-0 z-40 bg-brand shadow-[0_6px_20px_-8px_rgb(16_38_90/0.5)]"
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-4 md:grid md:h-24 md:grid-cols-[1fr_auto_1fr]">
        <Logo className="block h-12 shrink-0 md:h-16 md:justify-self-start" />

        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-lg px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                    active ? "bg-white text-brand-deep" : "text-white hover:bg-white/15"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="grid size-12 place-items-center text-white md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon width={28} height={28} /> : <MenuIcon width={28} height={28} />}
        </button>
      </div>

      {open && (
        <ul id="menu-mobile" className="border-t border-white/20 bg-brand-deep px-4 pb-3 md:hidden">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`my-1 block rounded-lg px-4 py-3 font-bold uppercase tracking-wide ${
                    active ? "bg-white text-brand-deep" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
