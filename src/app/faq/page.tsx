'use client'
import React, { useEffect, useState, useRef } from 'react';
import HeaderSection from '../customComponents/headerSection';

const faqs = [
  {
    title: 'Who are Lambert and Wright?',
    answer: 'Lambert and Wright are an experienced and trusted Project Management and Construction team based in Leicestershire. Lambert and Wright have over 70 years’ experience in the area of property renovations and project management.',
  },
  {
    title: 'What services do you offer?',
    answer: 'Whether it’s a new build, a complete home renovation or a refurbishment we have the skills, the experience, and the team to deliver on your dream project.',
  },
  {
    title: 'What are your areas of expertise?',
    answer: 'We specialise in House Renovations, Property Refurbishment, and Property Extensions.',
  },
  {
    title: 'How does the process start?',
    answer: 'If you have a project in mind, we provide a free quotation service to make your dream project come true! Simply give us a call, or drop us an email using the details on this website.',
  },
  {
    title: 'What is the typical timeline for a renovation project?',
    answer: 'The timeline for a renovation project varies depending on the scope and complexity of the work. Generally, small projects can take a few weeks, while larger projects can take several months.',
  },
  {
    title: 'Do you provide architectural planning services?',
    answer: 'Yes, we offer comprehensive architectural planning services to ensure your project meets all building regulations and achieves your desired outcome.',
  },
  {
    title: 'Are you insured?',
    answer: 'Yes, Lambert & Wright are fully insured, providing peace of mind for all our clients.',
  },
  {
    title: 'Can you work with my budget?',
    answer: 'We work closely with our clients to ensure that their projects are completed within budget while still maintaining high standards of quality.',
  },
  {
    title: 'Do you offer a warranty on your work?',
    answer: 'Yes, we offer a warranty on all our work to guarantee the quality and durability of our renovations.',
  },
  {
    title: 'How can I contact you?',
    answer: 'You can contact us via phone, WhatsApp messaging or email. Our contact details are provided on our website. We look forward to discussing your project with you.',
  },
];

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MinusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FAQ: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndices((prevActiveIndices) =>
      prevActiveIndices.includes(index)
        ? prevActiveIndices.filter((i) => i !== index)
        : [...prevActiveIndices, index]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="relative bg-[#E4E4E3] dark:bg-gray-900">
        <HeaderSection
          image="/images/projectVI/bumblebee-cottage-main-street-burton-overy-1-66a36f243e6b8.webp"
          title="FAQ's"
        />
        <div
          ref={sectionRef}
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-800 capitalize dark:text-white">
              Frequently asked questions
            </h2>
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-10">
                  <div
                    className={`group flex items-center mb-4 text-lg font-medium cursor-pointer ${
                      activeIndices.includes(index)
                        ? 'text-[#C58C49]'
                        : 'text-gray-900 dark:text-white'
                    } hover:text-[#C58C49]`}
                    onClick={() => toggleFAQ(index)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={() => toggleFAQ(index)}
                  >
                    {activeIndices.includes(index) ? (
                      <MinusIcon className="mr-2 w-5 h-5 group-hover:text-[#C58C49]" />
                    ) : (
                      <PlusIcon className="mr-2 w-5 h-5 text-[#3B464B] dark:text-white group-hover:text-[#C58C49]" />
                    )}
                    <h3 className="flex items-center group-hover:text-[#C58C49]">{faq.title}</h3>
                  </div>
                  {activeIndices.includes(index) && (
                    <div className="text-[#3B464B] dark:text-white">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;