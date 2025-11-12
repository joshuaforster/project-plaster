'use client';

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '@/app/customComponents/buttons';
import { images } from '@/app/Data/images';
import Image from 'next/image';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle image rotation every 4s
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero content */}
      <div className="w-full px-4 lg:px-6 max-w-screen-xl mx-auto flex items-center">
        <div className="bg-black/70 backdrop-blur-sm p-6 lg:p-8 rounded-lg max-w-2xl lg:max-w-xl lg:pt-8 text-left">

            <p
            ref={paragraphRef}
            className={`mt-2 text-lg leading-8 text-white text-shadow ${
                paragraphInView ? 'animate-slideInLeft' : 'opacity-0'
            }`}
            >
            Project Plaster – Norwich, Norfolk & Suffolk
            </p>

            <h1
            ref={headerRef}
            className={`text-5xl font-bold text-white text-shadow mt-4 ${
                headerInView ? 'animate-slideInRight' : 'opacity-0'
            }`}
            >
            Professional Plastering. Done Properly.
            </h1>

            <p className="mt-4 text-lg text-white text-shadow leading-relaxed">
            Fresh plastering, re-skimming and repairs — all prep work included.
            No shortcuts. No half-finished jobs. Just a clean finish that’s ready to paint.
            </p>

            <div className="mt-10 flex items-center gap-x-6">
            <Button variant="tertiary" to="/contact">Get A Free Quote</Button>
            <Button variant="tertiary" to="/about">
                Find Out More <span aria-hidden="true">→</span>
            </Button>
            </div>

        </div>
      </div>
    </div>
  );
}