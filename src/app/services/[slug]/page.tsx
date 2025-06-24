'use client';
import ReactMarkdown from 'react-markdown';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { services } from '../../Data/serviceData';
import Image from 'next/image';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((service) => service.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (service?.images && service.images.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % service.images.length);
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [service]);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        {/* Image Section */}
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            {service.images && service.images.length > 1 ? (
              service.images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: index === currentImageIndex ? 1 : 0,
                    transition: 'opacity 2s ease-in-out',
                  }}
                  className="absolute inset-0 w-full h-full"
                />
              ))
            ) : (
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={service.image || '/default-image.jpg'}
                alt={service.title}
                fill
                priority
              />
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-8 pt-8 sm:pb-32 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none xl:w-1/2">
            {/* Back Link */}
            <Link
              href="/services"
              className="text-customBlue hover:text-customGold inline-flex items-center mb-6"
            >
              &larr; Back to All Services
            </Link>

            {/* Title */}
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {service.title}
            </h1>

            {/* Content */}
            <div className="mt-10 max-w-xl text-base leading-8 text-gray-700 lg:max-w-none">
              <div className="prose max-w-none text-gray-900">
                <ReactMarkdown>{service.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}