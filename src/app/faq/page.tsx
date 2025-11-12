"use client";

import React, { useState, useEffect, useRef } from "react";

const faqs = [
  {
    title: "What areas do you cover?",
    answer: "We cover all of Norfolk and Suffolk — from Norwich and Great Yarmouth to Ipswich and the surrounding areas.",
  },
  {
    title: "Can you assist with commercial plastering projects?",
    answer: "Yes. We’re happy to take on any type of plastering job, whether it’s domestic or commercial work.",
  },
  {
    title: "What preparation is needed for the room?",
    answer: "Depending on the surface, we’ll seal and prime all walls and ceilings with an SBR bond to ensure the plaster sticks properly. We’ll also fix or fill any problem areas before applying the plaster.",
  },
  {
    title: "Can you plaster over artex?",
    answer: "Yes — artex isn’t an issue. Depending on the pattern, we’ll either scrape it back to flatten the surface and prime it, or just prime and plaster straight over the top.",
  },
  {
    title: "How long does the plaster take to dry?",
    answer: "On average, freshly plastered walls and ceilings take between 3–5 days to dry. It depends on how much moisture is in the wall and how well-ventilated the room is.",
  },
  {
    title: "Do you offer free quotes?",
    answer: "Yes — all quotes are completely free. Just send photos or a short video of the job, or we can visit in person to take a look.",
  },
  {
    title: "Are you insured?",
    answer: "Yes, we’re fully insured for all the work we carry out, giving you complete peace of mind.",
  },
  {
    title: "Do you tidy up after the job?",
    answer: "Always. We protect your space before starting, and leave the area clean and ready for painting once the plaster has dried.",
  },
];

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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

export default function FAQ() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-[#F5F5F4] transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="text-4xl font-bold text-[#1F2937] mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 border-t border-gray-200 pt-10">
          {faqs.map((faq, index) => (
            <div key={index} className="pb-6 border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center w-full text-left text-lg font-medium text-[#1F2937] hover:text-[#C58C49] transition-colors"
              >
                {activeIndices.includes(index) ? (
                  <MinusIcon className="mr-3 w-5 h-5 text-[#C58C49]" />
                ) : (
                  <PlusIcon className="mr-3 w-5 h-5 text-[#1F2937]" />
                )}
                {faq.title}
              </button>

              {activeIndices.includes(index) && (
                <p className="mt-3 text-[#3B464B] text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}