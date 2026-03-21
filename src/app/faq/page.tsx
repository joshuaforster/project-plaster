import FaqClient, { type FaqItem } from "./FaqClient";
import { getFaqContent, getPageContent } from "@/lib/contentful/queries";

const defaultFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What areas do you cover?",
    answer: "We cover Norfolk and Suffolk, including Norwich, Great Yarmouth, Ipswich and surrounding areas.",
  },
  {
    id: "faq-2",
    question: "Can you assist with commercial plastering projects?",
    answer: "Yes. We work on both domestic and commercial plastering jobs.",
  },
  {
    id: "faq-3",
    question: "What preparation is needed for the room?",
    answer: "Depending on the surface, we’ll seal and prime all walls and ceilings with an SBR bond to ensure the plaster sticks properly. We’ll also fix or fill any problem areas before applying the plaster.",
  },
  {
    id: "faq-4",
    question: "Can you plaster over artex?",
    answer: "Yes. Depending on the pattern, we either scrape it back and prime it, or prime and plaster over it.",
  },
  {
    id: "faq-5",
    question: "How long does the plaster take to dry?",
    answer: "Fresh plaster usually takes around 3 to 5 days to dry. Drying time depends on moisture levels and ventilation.",
  },
  {
    id: "faq-6",
    question: "Do you offer free quotes?",
    answer: "Yes. Quotes are free. Send photos or a short video, or we can arrange a site visit.",
  },
  {
    id: "faq-7",
    question: "Are you insured?",
    answer: "Yes, we’re fully insured for all the work we carry out, giving you complete peace of mind.",
  },
  {
    id: "faq-8",
    question: "Do you tidy up after the job?",
    answer: "Always. We protect your space before starting, and leave the area clean and ready for painting once the plaster has dried.",
  },
];

export const revalidate = 300;

export default async function FAQ() {
  const [faqEntries, pageContent] = await Promise.all([
    getFaqContent(),
    getPageContent("faq"),
  ]);

  const faqs = faqEntries.length ? faqEntries : defaultFaqs;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient faqs={faqs} copy={pageContent?.copy} />
    </>
  );
}
