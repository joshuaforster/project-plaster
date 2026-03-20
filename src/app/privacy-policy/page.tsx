import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Project Plaster collects and uses personal information from enquiries.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 text-[#1A1F24]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-6 leading-7">
          Project Plaster only collects information you provide through phone, email or contact
          forms for the purpose of replying to your enquiry.
        </p>
        <p className="mt-4 leading-7">
          We do not sell or share your personal information with third parties for marketing.
          Information is retained only as long as needed to respond to your enquiry and provide
          our services.
        </p>
        <p className="mt-4 leading-7">
          To request removal of your information, email{" "}
          <a className="underline" href="mailto:jack@projectplaster.co.uk">
            jack@projectplaster.co.uk
          </a>
          .
        </p>
      </div>
    </section>
  );
}
