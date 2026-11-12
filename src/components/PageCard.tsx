import type { ReactNode } from "react";

/** Container claro com sombra suave, no estilo do site atual. */
export function PageCard({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10">
      <div className="overflow-hidden rounded-3xl bg-paper shadow-card ring-1 ring-brand-night/5">
        <div className="border-b border-brand-night/10 px-6 py-8 md:px-12">
          {eyebrow && (
            <p className="mb-1 text-sm font-bold uppercase tracking-widest text-brand-deep">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl font-bold text-brand-night md:text-4xl">{title}</h1>
        </div>
        <div className="px-6 py-8 md:px-12 md:py-10">{children}</div>
      </div>
    </div>
  );
}
