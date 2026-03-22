"use client";

import { useState } from "react";

import { getCopyText, type CopyPayload } from "@/lib/contentful/copy";
import ScrollReveal from "@/app/customComponents/ScrollReveal";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqClientProps {
  faqs: FaqItem[];
  copy?: CopyPayload;
}

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 5v14m-7-7h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function FaqClient({ faqs, copy }: FaqClientProps) {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const heading = getCopyText(copy, "heading", "Plastering FAQ");
  const intro = getCopyText(
    copy,
    "intro",
    "Common questions about plastering services in Norwich, Norfolk and Suffolk.",
  );

  const toggleFAQ = (index: number) => {
    setActiveIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index],
    );
  };

  return (
    <section className="bg-[#F5F5F4]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <ScrollReveal>
          <h1 className="mb-4 text-center text-4xl font-bold text-[#1F2937]">
            {heading}
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-[#3B464B]">
            {intro}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 border-t border-gray-200 pt-10">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.id} className="pb-6 border-b border-gray-200" delayMs={index * 45}>
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndices.includes(index)}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="flex w-full items-center text-left text-lg font-medium text-[#1F2937] transition-colors hover:text-[#C58C49] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7BFA4]"
              >
                {activeIndices.includes(index) ? (
                  <MinusIcon className="mr-3 w-5 h-5 text-[#C58C49]" />
                ) : (
                  <PlusIcon className="mr-3 w-5 h-5 text-[#1F2937]" />
                )}
                {faq.question}
              </button>

              {activeIndices.includes(index) && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p className="mt-3 text-[#3B464B] text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
