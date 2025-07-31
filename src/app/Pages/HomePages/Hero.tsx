'use client';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '@/app/customComponents/buttons';

const images = [
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-6-66a36f3f24d12.webp',
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-5-66a36f3dbfafa.webp',
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-2-66a36f244d8b4.webp',
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-7-66a36f4a25cce.webp',
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-1-66a36f243e6b8.webp',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);

  // Carousel effect: switch images every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setInitialLoad(false);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  // Preload only the first image for LCP improvement
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = images[0];
    link.as = 'image';
    link.type = 'image/webp';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: true });

  return (
    <div
      className="relative isolate overflow-hidden h-[80vh] flex pt-14"
      style={{
        backgroundImage: `url(${images[0]})`, // First image as background for quick visual load
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Carousel images with lazy loading */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        {images.map((image, index) => (
          <picture key={index} className="absolute inset-0 w-full h-full">
            <source srcSet={image} type="image/webp" />
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: index === currentImageIndex ? 1 : 0,
                transition: index === 0 ? 'opacity 1s ease-in-out' : 'opacity 2s ease-in-out, transform 4s ease-in-out',
                transform: index === currentImageIndex || (index === 0 && initialLoad) ? 'scale(1.1)' : 'scale(1)',
              }}
              className="absolute inset-0 w-full h-full"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </picture>
        ))}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="w-full px-4 lg:px-6 max-w-screen-xl mx-auto flex items-center">
        <div className="max-w-2xl lg:max-w-xl lg:pt-8 text-left">
          <p
            ref={paragraphRef}
            className={`mt-6 text-lg leading-8 text-white ${
              paragraphInView ? 'animate-slideInLeft' : 'opacity-0'
            }`}
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', lineHeight: '1.5' }}
          >
            Lambert & Wright - Leicester
          </p>
          <h1
            ref={headerRef}
            className={`text-5xl font-bold text-white ${
              headerInView ? 'animate-slideInRight' : 'opacity-0'
            }`}
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', lineHeight: '1.5' }}
          >
            Masters in Refurbishment In Leicester Since 1990
          </h1>
          <p className="mt-4 text-lg text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
            Specialists in property renovations and extensions across Leicester, South Leicestershire, Rutland and the East Midlands.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button variant="tertiary" to="/contact" aria-label="Contact us">
              Get A Free Quote
            </Button>
            <Button variant="tertiary" to="/about" aria-label="Find Out More">
              Find Out More <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down icon */}
      {/* <div className="absolute mt-6 bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-white">Scroll down</p>
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div> */}

      <style>
        {`
          @keyframes slideInRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slideInRight {
            animation: slideInRight 2s ease-in-out forwards;
          }

          .animate-slideInLeft {
            animation: slideInLeft 2s ease-in-out forwards;
          }

          .animate-bounce {
            animation: bounce 2s infinite;
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </div>
  );
}
