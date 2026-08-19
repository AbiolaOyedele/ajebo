const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

/** Formats a whole-Naira amount, e.g. 9500 -> "₦9,500". */
export function formatNaira(amount: number): string {
  return naira.format(amount).replace(/^NGN\s?/, "₦");
}

/** Trims a description to a single card-friendly line. */
export function truncate(text: string, max = 72): string {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(" ", max)).trimEnd()}…`;
}
