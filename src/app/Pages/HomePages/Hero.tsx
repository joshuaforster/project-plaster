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
      style={{
        backgroundImage: `url(${images[0]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background carousel */}
      <div className="absolute inset-0 -z-[1]">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            fill
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-in-out"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              transform: index === currentImageIndex ? 'scale(1.1)' : 'scale(1)',
            }}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}

        {/* Dark navy overlay */}
        <div className="absolute inset-0 bg-[#1A1F24]/20"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="w-full px-4 lg:px-6 max-w-screen-xl mx-auto flex items-center">
        <div className="bg-[#1A1F24]/90 backdrop-blur-sm p-8 lg:p-10 max-w-2xl lg:max-w-xl text-left border-l-4 border-[#D7BFA4]">
          
          {/* Tagline */}
          <p
            ref={paragraphRef}
            className={`text-lg text-[#EDEDED] tracking-wide ${
              paragraphInView ? 'animate-slideInLeft' : 'opacity-0'
            }`}
          >
            Project Plaster — Norwich, Norfolk & Suffolk
          </p>

          {/* Main Heading */}
          <h1
            ref={headerRef}
            className={`text-5xl font-bold mt-4 leading-tight ${
              headerInView ? 'animate-slideInRight' : 'opacity-0'
            }`}
          >
            <span className="text-[#EDEDED]">Smooth finish.</span>{' '}
            <span className="text-[#D7BFA4]">Done properly.</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-lg text-[#EDEDED]/90 leading-relaxed max-w-prose">
            Fresh plastering, re-skimming and repairs — all prep work included.  
            No shortcuts. No half-finished jobs. Just a clean, solid finish that’s ready to paint.
          </p>

          {/* CTA Buttons */}
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
              className="text-[#D7BFA4] border border-[#D7BFA4] px-6 py-3 font-semibold hover:bg-[#D7BFA4] hover:text-[#1A1F24] transition-colors duration-300"
            >
              Find Out More →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}