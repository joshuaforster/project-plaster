'use client';

import React, { useEffect, useState, useRef } from 'react';
import Button from '../../customComponents/buttons';

const selectedImages = [
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-6-66a36f3f24d12.webp',
  'images/Project1/side-elevation-1024x683-66a38a096578b.webp',
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-2-66a36f244d8b4.webp',
];

export default function HomeGallery() {
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
    <div
      ref={sectionRef}
      className={`py-16 bg-white transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="px-4  bg-white lg:px-8 mx-auto max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#3B464B]">Gallery</h2>
          <p className="mt-4 text-lg text-[#3B464B]">
            Take a look at some of the projects we&#39;ve completed. Click the button below to see our full gallery.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {selectedImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden border border-black"
              style={{ height: '500px' }}
            >
              <div className="w-full h-full group">
                <picture>
                  <source srcSet={image} type="webp" />
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            to="/gallery"
            variant="primary"
            aria-label="View more projects in the gallery"
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </div>
  );
}