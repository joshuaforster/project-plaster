'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { services } from '../../Data/serviceData';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-customGray dark:bg-gray-900 py-16 transition-colors duration-500">
      <div ref={sectionRef} className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-8">
          {services.map((service) => (
            <div key={service.id} className="">
              {/* Use the id in the URL */}
              <Link href={`/services/${service.slug}`}>
                <div className="border-b border-gray-300 pb-8 group cursor-pointer">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-500 group-hover:text-customGold">
                    {service.title}
                  </h3>
                  <p className="text-fontColour mt-2">{service.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;