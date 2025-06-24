'use client';

import React, { useRef } from 'react';
import Image from 'next/image'; // Import the Image component from next/image

export default function AboutHead() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#323D40] py-12">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <div className="text-base leading-7 text-white lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Lambert & Wright
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  At Lambert & Wright, we take immense pride in the work we do because it defines who we are. Founded by Larry Lambert and Jason Wright, our company boasts over 70 years of combined experience in property builds and renovations. As Local Authority Building Control (LABC) award winners, we are perfectly equipped to manage large-scale renovations, helping homeowners transform their houses into dream homes without needing to move.
                </p>
                <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">Our Story</h2>
                <p className="mt-4">
                  Lambert & Wright was founded by Larry Lambert and Jason Wright who between them, have a wealth of knowledge and experience in property builds and renovation spanning over 70 years! As Local Authority Building Control (LABC) winners, they are the perfect project managers for large-scale renovations.
                </p>
                <p className="mt-4">
                  Lambert & Wright renovations help homeowners create the dream home they have always wanted without having to move from an area that they love.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pl-4 lg:sticky lg:top-24 lg:flex lg:items-stretch">
            <div className="relative overflow-hidden flex-grow">
              <Image
                className="w-full h-full object-cover hidden lg:block lg:h-3/4"
                src="/images/projectVI/bumblebee-cottage-main-street-burton-overy-1-66a36f243e6b8.webp"
                alt="About"
                loading="lazy"
                width={800} // Specify the width of the image
                height={600} // Specify the height of the image
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}