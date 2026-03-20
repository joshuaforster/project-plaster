'use client';

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '@/app/customComponents/buttons';
import { images } from '@/app/Data/images';
import Image from 'next/image';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotate background images every 4 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  // Animation triggers
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: true });

  return (
    <div
      className="relative isolate overflow-hidden h-[80vh] flex pt-14"
    >
      <div className="absolute inset-0 -z-[1]">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            fill
            alt=""
            aria-hidden="true"
            sizes="100vw"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-in-out"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              transform: index === currentImageIndex ? 'scale(1.1)' : 'scale(1)',
            }}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}

        <div className="absolute inset-0 bg-[#1A1F24]/20"></div>
      </div>

      <div className="w-full px-4 lg:px-6 max-w-screen-xl mx-auto flex items-center">
        <div className="bg-[#1A1F24]/90 backdrop-blur-sm p-8 lg:p-10 max-w-2xl lg:max-w-xl text-left border-l-4 border-[#D7BFA4]">
          <p
            ref={paragraphRef}
            className={`text-lg text-[#EDEDED] tracking-wide ${
              paragraphInView ? 'animate-slideInLeft' : 'opacity-0'
            }`}
          >
            Plastering Services In Norwich, Norfolk & Suffolk
          </p>

          <h1
            ref={headerRef}
            className={`text-5xl font-bold mt-4 leading-tight ${
              headerInView ? 'animate-slideInRight' : 'opacity-0'
            }`}
          >
            <span className="text-[#EDEDED]">We’ve got you and your</span>{' '}
            <span className="text-[#D7BFA4]">walls covered.</span>
          </h1>

          <p className="mt-4 text-lg text-[#EDEDED]/90 leading-relaxed max-w-prose">
            Fresh plastering, re-skimming and repairs — all prep work included.  
            No shortcuts. No half-finished jobs. Just a clean, solid finish that’s ready to paint.
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <Button
              variant="tertiary"
              to="/contact"
              className="bg-[#D7BFA4] text-[#1A1F24] px-6 py-3 font-semibold hover:bg-[#C5AB8E] transition-colors duration-300"
            >
              Get a Free Quote
            </Button>
            <Button
              variant="tertiary"
              to="/about"
              ariaLabel="Find out more about Project Plaster"
              className="text-[#D7BFA4] border border-[#D7BFA4] px-6 py-3 font-semibold hover:bg-[#D7BFA4] hover:text-[#1A1F24] transition-colors duration-300"
            >
              Find Out More <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
