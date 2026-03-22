import type { Metadata } from "next";
import Button from "@/app/customComponents/buttons";
import ScrollReveal from "@/app/customComponents/ScrollReveal";
import { getPageContent } from "@/lib/contentful/queries";
import { getCopyText } from "@/lib/contentful/copy";

export const metadata: Metadata = {
  title: "Contact Confirmation",
  description: "Confirmation that your enquiry has been sent to Project Plaster.",
  robots: {
    index: false,
    follow: false,
  },
};

export const revalidate = 300;

export default async function ContactSuccess() {
  const pageContent = await getPageContent("contact-success");
  const copy = pageContent?.copy;
  const heading = getCopyText(copy, "heading", "Thank you");
  const message = getCopyText(
    copy,
    "message",
    "We have received your message and will be in touch soon.",
  );
  const buttonLabel = getCopyText(copy, "button.label", "Back to home");
  const buttonHref = getCopyText(copy, "button.href", "/");

  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4 py-16">
      <ScrollReveal className="max-w-xl">
        <h1 className="text-3xl font-bold mb-4">{heading}</h1>
        <p className="text-lg text-gray-700">
          {message}
        </p>
        <div className="mt-8">
          <Button to={buttonHref} variant="tertiary-dark" size="large">
            {buttonLabel}
          </Button>
        </div>
      </ScrollReveal>
    </div>
  );
}
