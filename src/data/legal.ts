import type { LegalPage } from "@/types/content";
import { SITE } from "./site";

/**
 * Structural boilerplate written for a Nigerian food-delivery brand. It follows
 * the section shape of the live AjeboChops legal pages but is NOT legal advice —
 * have counsel review and replace before launch (NDPR compliance in particular).
 */
export const LEGAL_PAGES: readonly LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    intro:
      "How AjeboChops collects, uses and protects your information when you order from our app or website.",
    lastUpdated: "12 August 2026",
    sections: [
      {
        heading: "What information we collect",
        paragraphs: [
          {
            lead: "Account information:",
            text: "Your name, phone number, email address and delivery addresses, provided when you create an AjeboChops account or place an order as a guest.",
          },
          {
            lead: "Order information:",
            text: "The dishes you order, order value, delivery notes, timestamps and the rider assigned to your delivery.",
          },
          {
            lead: "Device information:",
            text: "Device type, operating system version, app version and a device identifier used to keep you signed in and to deliver order notifications.",
          },
          {
            lead: "Location information:",
            text: "With your permission, approximate or precise location so we can estimate delivery times and show riders your door. You can withdraw this permission in your device settings at any time.",
          },
        ],
      },
      {
        heading: "How we use your information",
        paragraphs: [
          {
            text: "We use your information to take and fulfil orders, route riders, process payments, run the stamps and loyalty points programme, respond to support requests, and send you order updates.",
          },
          {
            text: "We also use aggregated, non-identifying order data to decide what to cook more of, where to open next and how to keep delivery times inside our 30 to 50 minute window.",
          },
          {
            text: "We only send marketing messages where you have opted in, and every marketing message carries a one-tap way to stop receiving them.",
          },
        ],
      },
      {
        heading: "Payments",
        paragraphs: [
          {
            text: "Card and bank transfer payments are handled by licensed third-party payment processors. AjeboChops does not store your full card number, CVV or bank credentials on our servers at any point.",
          },
          {
            text: "We receive only a masked reference and the outcome of the transaction, which we keep so we can reconcile orders, issue refunds and answer billing questions.",
          },
        ],
      },
      {
        heading: "How we share information",
        paragraphs: [
          {
            lead: "Riders and kitchen staff:",
            text: "Only the details needed to cook and deliver your order — your first name, delivery address, phone number and order contents.",
          },
          {
            lead: "Service providers:",
            text: "Hosting, analytics, payment and messaging providers who process data on our instructions and are contractually barred from using it for their own purposes.",
          },
          {
            lead: "Legal reasons:",
            text: "Where we are required by Nigerian law, a court order, or a lawful request from a regulator or law-enforcement agency.",
          },
          {
            text: "We do not sell your personal information to anyone, for any purpose.",
          },
        ],
      },
      {
        heading: "Cookies and similar technologies",
        paragraphs: [
          {
            text: "Our website uses strictly necessary cookies to keep your session and cart working. These cannot be switched off without breaking core functionality.",
          },
          {
            text: "Analytics and marketing cookies are only set after you give consent. You can change or withdraw that consent at any time from the cookie settings link in the footer.",
          },
        ],
      },
      {
        heading: "Data security",
        paragraphs: [
          {
            text: "Data is encrypted in transit using TLS and encrypted at rest. Access to customer records is restricted to staff who need it to do their job, and every access is logged.",
          },
          {
            text: "No system is perfectly secure. If a breach affects your personal information we will notify you and the relevant authority without undue delay, and tell you plainly what happened and what to do next.",
          },
        ],
      },
      {
        heading: "How long we keep your data",
        paragraphs: [
          {
            text: "Order and payment records are kept for seven years to meet Nigerian tax and accounting obligations. Account details are kept while your account is open and for twelve months after you close it.",
          },
          {
            text: "Marketing preferences are kept until you withdraw consent. Location data used for a single delivery is discarded once that delivery is complete.",
          },
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          {
            text: "You can ask us for a copy of the personal data we hold about you, ask us to correct anything inaccurate, ask us to delete your account, or object to how we are using your data.",
          },
          {
            text: `Write to ${SITE.email} and we will respond within thirty days. If you are not satisfied with our answer, you can escalate to the Nigeria Data Protection Commission.`,
          },
        ],
      },
      {
        heading: "Children's privacy",
        paragraphs: [
          {
            text: "AjeboChops is not intended for anyone under 18. We do not knowingly collect data from children. If you believe a child has given us their information, contact us and we will delete it.",
          },
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          {
            text: "We update this policy as the service changes. The date at the top always reflects the current version, and we will tell you in the app before any change that materially affects your rights takes effect.",
          },
        ],
      },
    ],
  },
  {
    slug: "terms-and-conditions",
    title: "Terms & Conditions",
    intro:
      "The agreement between you and AjeboChops Ltd. when you order food through our app or website.",
    lastUpdated: "12 August 2026",
    sections: [
      {
        heading: "Agreement to these terms",
        paragraphs: [
          {
            text: `By creating an account, placing an order or otherwise using the ${SITE.name} app or website, you agree to these terms. If you do not agree with them, please do not place an order.`,
          },
          {
            text: "These terms are governed by the laws of the Federal Republic of Nigeria, and the courts of Lagos State have exclusive jurisdiction over any dispute.",
          },
        ],
      },
      {
        heading: "Your account",
        paragraphs: [
          {
            text: "You must be at least 18 years old to hold an account. You are responsible for keeping your login details private and for every order placed from your account.",
          },
          {
            text: "Tell us immediately if you believe someone else has accessed your account. We may suspend an account we reasonably believe is being used fraudulently.",
          },
        ],
      },
      {
        heading: "Orders",
        paragraphs: [
          {
            text: "An order is an offer to buy. It is accepted only when we confirm it in the app. Until then we may decline it — for example if a dish has sold out, the delivery address falls outside our zone, or we cannot verify payment.",
          },
          {
            text: "Once a kitchen has started cooking, an order can no longer be cancelled or amended. Contact support straight away if something is wrong and we will do what we can.",
          },
        ],
      },
      {
        heading: "Pricing and payment",
        paragraphs: [
          {
            text: "All prices are shown in Nigerian Naira and include applicable taxes unless stated otherwise. Delivery fees and any service charges are shown before you confirm payment.",
          },
          {
            text: "Menu prices can change without notice, but the price you see at checkout is the price you pay for that order. Payment is taken at the point of confirmation.",
          },
        ],
      },
      {
        heading: "Delivery",
        paragraphs: [
          {
            text: "Our target window is 30 to 50 minutes within our Lagos delivery zones. Estimates are not guarantees — traffic, weather and order volume all affect them.",
          },
          {
            text: "Someone must be available to receive the order at the address given. If our rider cannot reach you after reasonable attempts, the order may be treated as delivered and no refund will be due.",
          },
        ],
      },
      {
        heading: "Food allergies and dietary requirements",
        paragraphs: [
          {
            text: "Our kitchen handles peanuts, shellfish, dairy, eggs, gluten and other common allergens. We cannot guarantee any dish is free from traces of them.",
          },
          {
            text: "If you have a serious allergy, contact us before ordering rather than relying on the order notes field.",
          },
        ],
      },
      {
        heading: "Refunds and order issues",
        paragraphs: [
          {
            text: "If your order arrives incorrect, incomplete or in unacceptable condition, report it within 24 hours with a photo and we will refund or replace the affected items.",
          },
          {
            text: "Approved refunds are returned to the original payment method within 5 to 10 business days, or immediately as AjeboChops credit if you prefer.",
          },
          {
            text: "We may decline repeated refund claims where there is reasonable evidence of misuse.",
          },
        ],
      },
      {
        heading: "Rewards, stamps and points",
        paragraphs: [
          {
            text: "Stamps and loyalty points have no cash value, cannot be transferred or sold, and can only be redeemed inside the AjeboChops app.",
          },
          {
            text: "Points earned on an order that is later refunded are reversed. We may adjust earning rates or redemption values with reasonable notice in the app.",
          },
        ],
      },
      {
        heading: "Acceptable use",
        paragraphs: [
          {
            text: "Do not abuse our staff or riders, place fraudulent orders, scrape or reverse engineer the service, or use it for anything unlawful. We may suspend or close accounts that do.",
          },
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          {
            text: "Nothing here limits liability for death or personal injury caused by our negligence, or for fraud. Subject to that, our total liability for any order is limited to the amount you paid for it.",
          },
          {
            text: "We are not liable for indirect or consequential loss, such as lost profits or missed events, arising from a late or incorrect delivery.",
          },
        ],
      },
      {
        heading: "Changes to these terms",
        paragraphs: [
          {
            text: "We may update these terms from time to time. Continuing to order after an update means you accept the revised terms. The last-updated date above always reflects the current version.",
          },
        ],
      },
    ],
  },
];

export function getLegalPage(slug: string): LegalPage | undefined {
  return LEGAL_PAGES.find((p) => p.slug === slug);
}
