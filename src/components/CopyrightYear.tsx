import { cacheLife } from "next/cache";

/** Ano atual, calculado no build e revalidado diariamente (compatível com Cache Components). */
export async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
