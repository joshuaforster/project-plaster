import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Standard terms for Project Plaster quotes and plastering services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 text-[#1A1F24]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Terms and Conditions</h1>
        <p className="mt-6 leading-7">
          Quotes are provided based on the information available at the time and are valid for 30
          days unless stated otherwise.
        </p>
        <p className="mt-4 leading-7">
          We will always communicate any additional work required before proceeding. Final payment
          terms are agreed in writing before the job starts.
        </p>
        <p className="mt-4 leading-7">
          If you have questions about these terms, contact{" "}
          <a className="underline" href="mailto:jack@projectplaster.co.uk">
            jack@projectplaster.co.uk
          </a>
          .
        </p>
      </div>
    </section>
  );
}
