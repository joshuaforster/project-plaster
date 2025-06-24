'use client';

import React, { useEffect, useState, useRef } from 'react';

interface StepType {
  id: number;
  name: string;
  description: string;
}

const steps: StepType[] = [
  {
    id: 1,
    name: 'Lambert & Wright',
    description: 'Based in the Midlands, Lambert and Wright are award-winning bespoke developers, for creating exceptional properties.',
  },
  {
    id: 2,
    name: 'What We Do',
    description: 'From planning and design to construction and renovation, we manage every aspect of your project. Whether it’s a new build or a property refurbishment, we ensure it’s tailored to your vision.',
  },
  {
    id: 3,
    name: 'Our Expertise',
    description: 'Specialising in house renovations, new builds, and bespoke home improvements, we bring over 30 years of experience to projects across the Midlands, handling everything from plumbing and electrics to period restoration.',
  },
  {
    id: 4,
    name: 'Contact Us',
    description: 'We start with an informal consultation, offering expert advice on how to bring your dream home to life. Whether you’re looking for a small renovation or a large-scale development, we’re here to help.',
  },
];

const Steps: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#323D41] font-roboto">
      <div
        className={`mx-auto max-w-7xl px-6 py-20 lg:px-8 transition-opacity duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-5xl font-bold leading-[1.5] capitalize text-white">
              Your <span className="text-[#55B6D9]">project</span> your way...
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:mt-0 lg:ml-16 lg:max-w-xl lg:grid-cols-2">
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
      className={`flex flex-col gap-y-3 border-l border-white pl-6 text-white transform transition-transform duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <dt className="text-sm leading-6">{step.description}</dt>
      <dd className="order-first text-3xl text-[#55B6D9] font-semibold tracking-tight">{step.name}</dd>
    </dl>
  );
};

export default Steps;
