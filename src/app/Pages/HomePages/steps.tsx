"use client";

import React, { useEffect, useState, useRef } from "react";

interface StepType {
  id: number;
  name: string;
  description: string;
}

const steps: StepType[] = [
  {
    id: 1,
    name: "Prep done properly",
    description:
      "Floors, carpets and surfaces protected before plastering begins. We work tidy.",
  },
  {
    id: 2,
    name: "Clean and accurate plastering",
    description:
      "Fresh plastering, re-skimming and patch repairs. Smooth finish ready to paint.",
  },
  {
    id: 3,
    name: "Respect for your home",
    description:
      "No mess, no shortcuts. We leave the space cleaner than we found it.",
  },
  {
    id: 4,
    name: "Honest pricing",
    description:
      "Send photos or book a visit. Clear pricing, no hiding extra charges.",
  },
];

const Steps: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top } = sectionRef.current.getBoundingClientRect();
      if (top < window.innerHeight * 0.75) setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#1F2937] font-roboto">
      <div
        className={`mx-auto max-w-7xl px-6 py-20 lg:px-8 transition-opacity duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Heading */}
          <div className="max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-5xl font-bold leading-[1.4] capitalize text-white">
              Quality plastering you can{" "}
              <span className="text-[#D7BFA4]">trust</span>
            </h2>
          </div>

          {/* Steps grid */}
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-y-16 lg:mt-0 lg:ml-16 lg:max-w-xl lg:grid-cols-2">
            {steps.map((step) => (
              <Step key={step.id} step={step} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  step: StepType;
  isVisible: boolean;
}

const Step: React.FC<StepProps> = ({ step, isVisible }) => {
  return (
    <dl
      className={`flex flex-col gap-y-3 border-l border-[#D7BFA4] pl-6 text-white transform transition-transform duration-700 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <dt className="text-sm leading-6 text-gray-300">{step.description}</dt>
      <dd className="order-first text-3xl text-[#D7BFA4] font-semibold tracking-tight">
        {step.name}
      </dd>
    </dl>
  );
};

export default Steps;