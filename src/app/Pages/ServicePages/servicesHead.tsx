'use client';
import React, { useRef } from 'react';

export default function ServicesHead() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#E4E4E3] py-1 lg:py-1">
      <div ref={sectionRef} className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <picture>
            <source srcSet='images/project1/side-elevation-1024x683-66a38a096578b.webp' type="image/webp" />
            <img
              className="w-full h-80 object-cover hidden lg:block"
              src='/images/project1/side-elevation-1024x683-66a38a096578b.webpg'
              alt="office content 1"
              loading="lazy"
            />
          </picture>
          <picture>
            <source srcSet='/images/Project1/rear-elevation-1024x704-66a38a07b634d.webp' type="image/webp" />
            <img
              className="w-full h-80 object-cover hidden lg:block"
              src='iimages/Project1/rear-elevation-1024x704-66a38a07b634d.webp'
              alt="office content 2"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="font-light mt-4 lg:mt-0 text-gray-500 sm:text-lg">
          <h2 className="mb-4 font-semibold text-4xl text-gray-900">
            What we can do for you
          </h2>
          <p className="mb-4 text-base text-fontColour">
            We are strategists, designers, and developers. Innovators and problem solvers. Small enough to be simple and
            quick, but big enough to deliver the scope you want at the pace you need. 
          </p>
        </div>
      </div>
    </section>
  );
}
