import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getCopyText } from "@/lib/contentful/copy";
import { getPageContent } from "@/lib/contentful/queries";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "General terms and conditions for plastering quotations, services, payments and customer responsibilities.",
  alternates: {
    canonical: "/terms",
  },
};

export const revalidate = 300;

export default async function TermsPage() {
  const pageContent = await getPageContent("terms");
  const copy = pageContent?.copy;
  const pageTitle = getCopyText(copy, "title", "Terms and Conditions");
  const lastUpdated = getCopyText(copy, "lastUpdated", "Last updated: 20 March 2026");
  const markdownBody = getCopyText(copy, "bodyMarkdown", "");

  if (markdownBody) {
    return (
      <section className="bg-white py-16 text-[#1A1F24]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold">{pageTitle}</h1>
          <p className="mt-4 text-sm text-[#3B464B]">{lastUpdated}</p>
          <article className="prose prose-slate mt-8 max-w-none prose-headings:text-[#1A1F24] prose-p:text-[#1A1F24] prose-li:text-[#1A1F24]">
            <ReactMarkdown>{markdownBody}</ReactMarkdown>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 text-[#1A1F24]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
        <p className="mt-4 text-sm text-[#3B464B]">{lastUpdated}</p>

        <p className="mt-6 leading-7">
          These Terms and Conditions apply to all quotations and plastering services provided by
          Project Plaster. By accepting a quote or booking work, you agree to these terms.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Quotes and Acceptance</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
          <li>Quotes are based on information available at the time and are usually valid for 30 days.</li>
          <li>Quotes may change if site conditions differ from those originally described.</li>
          <li>Work is considered booked once we receive clear confirmation from you.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">2. Scope of Work</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
          <li>We will carry out the work described in your accepted quote.</li>
          <li>Any extra work requested outside the quote will be priced and agreed before completion.</li>
          <li>We may make reasonable technical adjustments to ensure a proper finish.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">3. Customer Responsibilities</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
          <li>Provide safe access to the property and work areas.</li>
          <li>Ensure utilities (water/electricity) are available where needed.</li>
          <li>Remove valuable or fragile items unless otherwise agreed.</li>
          <li>Tell us about known issues that may affect the work (for example damp, leaks or structural defects).</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">4. Dates and Delays</h2>
        <p className="mt-4 leading-7">
          We will aim to meet agreed dates, but timings are estimates and may change due to
          weather, drying conditions, supplier delays, access issues or events outside our control.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Payment Terms</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
          <li>Deposit requirements (if any) are confirmed at booking.</li>
          <li>Stage or final payments are due as set out in your quote/invoice.</li>
          <li>Late payments may incur reasonable recovery costs and statutory interest where applicable.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">6. Cancellations and Rescheduling</h2>
        <p className="mt-4 leading-7">
          If you need to cancel or move dates, please give as much notice as possible. We reserve
          the right to charge for non-recoverable costs already incurred (for example purchased
          materials or allocated labour time).
        </p>

        <h2 className="mt-10 text-2xl font-semibold">7. Workmanship and Defects</h2>
        <p className="mt-4 leading-7">
          We take reasonable care and skill in all work carried out. If you believe there is a
          workmanship issue, notify us promptly and allow us a reasonable opportunity to inspect and
          remedy it.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">8. Liability</h2>
        <p className="mt-4 leading-7">
          Nothing in these terms excludes or limits liability where it would be unlawful to do so.
          Subject to that, liability for indirect or consequential losses is excluded. This does not
          affect your statutory rights, including rights under the Consumer Rights Act 2015.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">9. Privacy</h2>
        <p className="mt-4 leading-7">
          Personal data is handled in accordance with our{" "}
          <Link className="underline" href="/privacy-policy">
            Privacy Policy
          </Link>
          .
        </p>

        <h2 className="mt-10 text-2xl font-semibold">10. Governing Law</h2>
        <p className="mt-4 leading-7">
          These terms are governed by the laws of England and Wales, and disputes are subject to
          the jurisdiction of the courts of England and Wales.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Contact</h2>
        <p className="mt-4 leading-7">
          If you have questions about these terms, email{" "}
          <a className="underline" href="mailto:jack@projectplaster.com">
            jack@projectplaster.com
          </a>{" "}
          or call <a className="underline" href="tel:07946057841">07946 057841</a>.
        </p>
      </div>
    </section>
  );
}
