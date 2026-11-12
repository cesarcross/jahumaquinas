import Image from "next/image";
import { defaultWhatsappMessage, whatsappLink } from "@/data/company";

/** Botão flutuante de WhatsApp, canto inferior direito, em todas as telas. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a JAHU no WhatsApp"
      className="fixed bottom-4 right-4 z-50 block size-16 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 md:bottom-6 md:right-6 md:size-[4.5rem]"
    >
      <Image
        src="/images/assets/walogo.png"
        alt=""
        width={72}
        height={72}
        sizes="72px"
        className="size-full"
      />
    </a>
  );
}
