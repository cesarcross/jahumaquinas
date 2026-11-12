import { company, defaultWhatsappMessage, whatsappLink } from "@/data/company";
import { PhoneIcon } from "./icons";
import { WhatsAppLogo } from "./WhatsAppLogo";

const btn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold transition-colors";

export function WhatsAppButton({
  message = defaultWhatsappMessage,
  label = "Chamar no WhatsApp",
  className = "",
}: {
  message?: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${btn} bg-machine text-white hover:bg-machine-dark ${className}`}
    >
      <WhatsAppLogo size={26} />
      {label}
    </a>
  );
}

export function CallButton({
  label = "Ligar agora",
  className = "",
  tone = "light",
}: {
  label?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const tones =
    tone === "dark"
      ? "bg-white/10 text-white ring-1 ring-white/40 hover:bg-white/20"
      : "bg-brand-night text-white hover:bg-brand-deep";
  return (
    <a href={company.phones[0].href} className={`${btn} ${tones} ${className}`}>
      <PhoneIcon width={20} height={20} />
      {label}
    </a>
  );
}
