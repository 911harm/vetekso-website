/** Maps each ES path to its EN equivalent and vice-versa. */
const ES_TO_EN: Record<string, string> = {
  "/": "/en",
  "/nosotros": "/en/about",
  "/servicios": "/en/services",
  "/contacto": "/en/contact",
  "/a-tu-medida": "/en/tailored",
  "/planes": "/en/quote",
};

const EN_TO_ES: Record<string, string> = Object.fromEntries(
  Object.entries(ES_TO_EN).map(([k, v]) => [v, k])
);

/**
 * Given the current pathname and a target locale, returns the equivalent URL.
 * Falls back to the locale root if no direct mapping exists.
 */
export function getEquivalentPath(
  pathname: string,
  targetLocale: "es" | "en"
): string {
  // Normalise trailing slash
  const clean = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

  if (targetLocale === "en") {
    return ES_TO_EN[clean] ?? "/en";
  }
  return EN_TO_ES[clean] ?? "/";
}
