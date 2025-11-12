'use client';

import React, { useEffect, useState, useRef } from 'react';
import Button from '../../customComponents/buttons';
import Image from 'next/image';
import { images } from '@/app/Data/images';

const selectedImages = images.slice(0, 3);

export default function HomeGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top } = sectionRef.current.getBoundingClientRect();
      if (top < window.innerHeight * 0.75) setIsVisible(true);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-24 bg-white transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="px-6 lg:px-8 mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#1A1F24]">
            Recent Work
          </h2>
          <p className="mt-4 text-lg text-[#1A1F24]/90 max-w-2xl mx-auto">
            A few examples of plastering projects completed across Norfolk and Suffolk.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {selectedImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[450px] overflow-hidden border border-[#E5E5E5] shadow-md group"
            >
              <Image
                src={image}
                alt={`Project Plaster gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Button
          variant='primary'
            to="/gallery"
            aria-label="View the full plastering gallery"
            className="bg-[#D7BFA4] text-[#1A1F24] font-semibold text-sm uppercase tracking-wide px-8 py-3 transition-colors duration-300 hover:bg-[#C5AB8E]"
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}