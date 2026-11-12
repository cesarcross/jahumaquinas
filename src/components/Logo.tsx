import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="JAHU Máquinas e Ferramentas – página inicial" className={className}>
      <Image
        src="/images/assets/logo.webp"
        alt="JAHU Máquinas e Ferramentas"
        width={357}
        height={176}
        priority
        className="h-full w-auto"
      />
    </Link>
  );
}
