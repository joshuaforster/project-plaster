'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image'; // Import the Image component from next/image

const people = [
  {
    name: 'Larry Lambert',
    role: 'Co-Founder & Project Manager',
    imageUrl: '/images/about/larry.webp', // Ensure the path starts with '/' for public folder
    bio: `Larry’s career began in exhibition construction and management before transitioning to property design and construction in the 70s. He managed an independent property company started by his Grandfather in 1927, gaining extensive experience in complex construction and historical restoration over 50 years.`,
  },
  {
    name: 'Jason Wright',
    role: 'Co-Founder & Project Manager',
    imageUrl: '/images/about/wright.webp', // Ensure the path starts with '/' for public folder
    bio: `Jason has over 42 years in the trade, starting with a City & Guilds in Plumbing and Heating. He founded successful plumbing companies and transitioned to property development, setting up Lambert & Wright with Larry Lambert, delivering top-quality renovations.`,
  },
];

export default function MeetTeam() {
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
    <div>
      <div className="bg-[#323D40] py-24 md:py-32 lg:py-20">
        <div
          ref={sectionRef}
          className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-white">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul className="mt-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none md:gap-x-40">
            {people.map((person) => (
              <li key={person.name}>
                <Image
                  className="w-full rounded-2xl object-cover object-top"
                  src={person.imageUrl}
                  alt={person.name}
                  width={400} // Specify the width of the image
                  height={400} // Specify the height of the image
                  loading="lazy" // Lazy load the images
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-white">{person.name}</h3>
                <p className="text-base leading-7 text-white">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-white">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[#FFFFFF]"></div>
    </div>
  );
}