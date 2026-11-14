import { getCurrentYear } from "@/data/year";

/** Ano atual do copyright. O valor vem cacheado e revalidado diariamente. */
export async function CopyrightYear() {
  return <>{await getCurrentYear()}</>;
}
