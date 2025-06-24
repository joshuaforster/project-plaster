'use client';
import React, { useState, useEffect, useRef } from 'react';
import Button from '../../customComponents/buttons';

const images = [
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-1-66a36f243e6b8.webp',
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-2-66a36f244d8b4.webp',
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-3-66a36f31b1271.webp',
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-4-66a36f3254f54.webp',
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-5-66a36f3dbfafa.webp',
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-6-66a36f3f24d12.webp',
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-7-66a36f4a25cce.webp',
  'images/projectVI/bumblebee-cottage-main-street-burton-overy-8-66a36f4b647bc.webp',
];

const services = [
  'Architectural and planning services for all property types',
  'Complete project management for renovations, new builds, and refurbishments',
  'Design consultation for bespoke kitchens, bathrooms, and interior makeovers',
  'Detailed quotations for projects of any size – from garden landscaping to full-scale property transformations',
];

export default function Assurance() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <div ref={sectionRef} className="relative bg-[#323D40] text-white">
      <div className="lg:block hidden lg:absolute lg:inset-0 lg:left-1/2 lg:w-1/2 overflow-hidden">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <picture
              key={index}
              className={`absolute inset-0 h-full w-full transition-transform duration-1000 transform ${
                index === currentImageIndex
                  ? 'translate-x-0'
                  : index < currentImageIndex
                  ? '-translate-x-full'
                  : 'translate-x-full'
              }`}
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <source srcSet={image} type="image/webp" />
              <img
                src={image}
                alt={`Photos ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 xl:px-0">
        <div
          className={`px-6 py-16 lg:px-0 lg:py-24 bg-[#323D40] lg:bg-transparent transition-opacity duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-2xl">
            <h1 className="mt-2 text-3xl font-bold capitalize sm:text-4xl">
              Giving <span className="text-[#55B6D9]">you</span> Confidence
            </h1>
            <p className="mt-4 leading-8">
              Whether it&#39;s a new build, a home renovation, or property refurbishment, we have the expertise, experience, and dedicated team to deliver on your project.
            </p>
            <div className="mt-6 max-w-xl text-base leading-7 lg:max-w-none">
              <h2>We offer:</h2>
              <ul className="space-y-4 list-disc pl-5 mb-12">
                {services.map((service, index) => (
                  <li key={index}>
                    <strong className="font-normal">{service}</strong>
                  </li>
                ))}
              </ul>
              <Button variant="primary" to="/contact" aria-label="Get your free consultation">
                Get Your Free Consultation
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:hidden block w-full h-64 sm:h-80 overflow-hidden">
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <picture
                key={index}
                className={`absolute inset-0 h-full w-full transition-transform duration-1000 transform ${
                  index === currentImageIndex
                    ? 'translate-x-0'
                    : index < currentImageIndex
                    ? '-translate-x-full'
                    : 'translate-x-full'
                }`}
                style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <source srcSet={image} type="image/webp" />
                <img
                  src={image}
                  alt={`Photos ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}