import { CardIcon, FlagIcon, MedalIcon } from "./icons";
import { seals } from "@/data/content";

const icons = { bndes: CardIcon, since: MedalIcon, nacional: FlagIcon } as const;

/** Selos de venda: BNDES, desde 1988, 100% nacional. */
export function Seals({ variant = "chips" }: { variant?: "chips" | "cards" }) {
  if (variant === "cards") {
    return (
      <ul className="grid gap-4 sm:grid-cols-3">
        {seals.map((s) => {
          const Icon = icons[s.id];
          return (
            <li
              key={s.id}
              className="flex items-center gap-4 rounded-2xl bg-paper p-5 shadow-card ring-1 ring-brand-night/5"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-seal text-seal-ink">
                <Icon width={28} height={28} />
              </span>
              <span className="text-lg font-bold leading-tight text-brand-night">{s.title}</span>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <ul className="flex gap-2 overflow-x-auto py-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible">
      {seals.map((s) => {
        const Icon = icons[s.id];
        return (
          <li
            key={s.id}
            className="flex shrink-0 items-center gap-2 rounded-md bg-seal px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-seal-ink"
          >
            <Icon width={16} height={16} />
            {s.title}
          </li>
        );
      })}
    </ul>
  );
}
