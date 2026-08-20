import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address so we know where to send the deals.")
    .email("That email address does not look right. Check it and try again."),
});

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Tell us your name so we know who we are replying to."),
  email: z
    .string()
    .trim()
    .min(1, "We need your email address to reply.")
    .email("That email address does not look right. Check it and try again."),
  subject: z.enum(
    ["order-issue", "delivery-question", "feedback", "partnership", "general"],
    { message: "Pick the option that best matches your message." },
  ),
  message: z
    .string()
    .trim()
    .min(10, "Add a little more detail, at least ten characters.")
    .max(2000, "That is longer than we can accept. Please keep it under 2,000 characters."),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type ContactInput = z.infer<typeof contactSchema>;

/** Flattens a Zod failure into one plain-English message per field. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const result: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!result[key]) result[key] = issue.message;
  }
  return result;
}
