import Image from "next/image";

/** Logo oficial do WhatsApp (public/images/assets/walogo.png). Decorativo: o texto vizinho descreve a ação. */
export function WhatsAppLogo({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/images/assets/walogo.png"
      alt=""
      width={size}
      height={size}
      sizes={`${size}px`}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
