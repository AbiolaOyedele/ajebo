/** Joins conditional class names. Falsy values are dropped. */
export function cn(...values: (string | false | null | undefined)[]): string {
  return values.filter(Boolean).join(" ");
}
