"use client";

import { useEffect, useState } from "react";
import { company } from "@/data/company";

/** Monta o e-mail só no cliente para reduzir coleta por robôs de spam. */
export function ObfuscatedEmail({ className = "" }: { className?: string }) {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAddress([company.email.user, "@", company.email.domain].join(""));
  }, []);

  if (!address) {
    return <span className={className}>jahumaquinas [arroba] gmail.com</span>;
  }
  return (
    <a href={`mailto:${address}`} className={className}>
      {address}
    </a>
  );
}
