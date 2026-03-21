import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { getCopyText } from "@/lib/contentful/copy";
import { getPageContent } from "@/lib/contentful/queries";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Project Plaster collects, uses and protects personal data in line with UK GDPR and the Data Protection Act 2018.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export const revalidate = 300;

export default async function PrivacyPolicyPage() {
  const pageContent = await getPageContent("privacy-policy");
  const copy = pageContent?.copy;
  const pageTitle = getCopyText(copy, "title", "Privacy Policy");
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
          This Privacy Policy explains how Project Plaster collects, uses and protects personal
          data when you contact us, request a quote, or use our website. We aim to handle personal
          data in line with the UK General Data Protection Regulation (UK GDPR) and the Data
          Protection Act 2018.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Who We Are</h2>
        <p className="mt-4 leading-7">
          Project Plaster is a plastering business based in Norwich, serving Norfolk and Suffolk.
          For data protection purposes, Project Plaster is the data controller for the personal data
          covered by this policy.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">What Data We Collect</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
          <li>Contact details, such as your name, email address, phone number and address.</li>
          <li>Enquiry details, such as project information, room photos and preferred dates.</li>
          <li>Service records, such as quotes, invoices, job notes and communications.</li>
          <li>Basic website usage information through cookies and similar technologies.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">How We Use Your Data</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
          <li>To respond to enquiries and provide quotations.</li>
          <li>To schedule and carry out plastering work.</li>
          <li>To manage payments, invoices and accounting records.</li>
          <li>To maintain service quality, records and aftercare.</li>
          <li>To comply with legal and regulatory obligations.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">Lawful Bases (UK GDPR)</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
          <li>
            <strong>Contract:</strong> where processing is needed to provide a quote or carry out
            agreed work.
          </li>
          <li>
            <strong>Legitimate interests:</strong> for day-to-day business operations, record
            keeping and service improvement.
          </li>
          <li>
            <strong>Legal obligation:</strong> where records must be kept for tax, accounting or
            legal compliance.
          </li>
          <li>
            <strong>Consent:</strong> where required, for example for non-essential cookies or
            optional marketing communications.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">Who We Share Data With</h2>
        <p className="mt-4 leading-7">
          We do not sell your personal data. We only share data where necessary with trusted
          service providers (for example website hosting, payment processing, accounting support and
          IT services) or where legally required.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Data Retention</h2>
        <p className="mt-4 leading-7">
          We keep personal data only for as long as necessary for the purposes above. Business and
          financial records may be retained for up to 6 years to meet UK legal and tax obligations.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Cookies</h2>
        <p className="mt-4 leading-7">
          Our website may use essential cookies and, where applicable, analytics cookies to help us
          improve site performance and user experience. You can control cookies in your browser
          settings.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Your Rights</h2>
        <p className="mt-4 leading-7">
          Under UK data protection law, you may have rights to access, correct, erase, restrict or
          object to processing of your personal data, and in some cases request data portability.
          You may also withdraw consent where processing is based on consent.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Complaints</h2>
        <p className="mt-4 leading-7">
          If you have concerns about how your data is handled, contact us first and we will do our
          best to resolve it. You can also complain to the Information Commissioner&apos;s Office
          (ICO) at{" "}
          <a
            className="underline"
            href="https://www.ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            ico.org.uk
          </a>
          .
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Contact</h2>
        <p className="mt-4 leading-7">
          For privacy requests or questions, email{" "}
          <a className="underline" href="mailto:jack@projectplaster.com">
            jack@projectplaster.com
          </a>{" "}
          or call <a className="underline" href="tel:07946057841">07946 057841</a>.
        </p>
      </div>
    </section>
  );
}
