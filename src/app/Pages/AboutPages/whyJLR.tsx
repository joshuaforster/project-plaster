'use client';
import React, { useEffect, useState, useRef } from 'react';

const features = [
  {
    name: 'Experienced Project Managers',
    description:
      'Our seasoned project managers guide you through every step of your renovation, ensuring seamless coordination and exceptional results.',
  },
  {
    name: 'Trusted Suppliers',
    description:
      'We collaborate with exclusive and trusted suppliers for all renovation aspects, guaranteeing high-quality materials and reliable service.',
  },
  {
    name: 'Skilled Tradesmen',
    description:
      'All our tradesmen are highly experienced, thoroughly vetted, and come highly recommended, ensuring top-notch craftsmanship in every project.',
  },
  {
    name: 'Award-Winning Expertise',
    description:
      'As Local Authority Building Control (LABC) award winners, we bring recognized excellence and proven expertise to every renovation project.',
  },
  {
    name: 'Customer-Centric Approach',
    description:
      'We take the time to fully understand your vision and needs, offering personalised solutions and additional ideas to enhance your project while ensuring cost-effectiveness without compromising on quality.',
  },
];

export default function WhyJLR() {
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#E4E4E3] py-24 sm:py-32">
      <div
        ref={sectionRef}
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why choose Lambert & Wright?</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-0 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <dl key={feature.name} className="border border-gray-500 p-6">
              <dt className="font-semibold text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-gray-600">{feature.description}</dd>
            </dl>
          ))}
        </div>
      </div>
    </div>
  );
}
