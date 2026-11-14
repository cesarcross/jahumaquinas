import { cacheLife } from "next/cache";

/**
 * Ano atual.
 *
 * Precisa de `"use cache"`: com `cacheComponents` ligado, ler o relógio durante o
 * render bloqueia o prerender (insight `blocking-prerender-current-time`).
 * `cacheLife("days")` revalida uma vez por dia, então a virada de ano entra sozinha,
 * sem rebuild e sem tornar a página dinâmica.
 */
export async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}
