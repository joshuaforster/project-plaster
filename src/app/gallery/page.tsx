'use client'
import React, { useState } from 'react';
import ImageGallery from '../customComponents/galleryComponents/imageGallery';
import Image from 'next/image';
import { hardcodedItems } from '../Data/imageData';

const categories = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Kitchens & Bathrooms', 'South Leicester', 'Clear'];
// Theres also a general fiel but need to deal with later

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (category:string) => {
    setSelectedCategory(category === 'Clear' ? null : category);
  };

  const filteredItems = selectedCategory
    ? hardcodedItems.filter(item => item.category === selectedCategory)
    : hardcodedItems;

  return (
    <section className="bg-white dark:bg-dark-gray py-8">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="max-w-screen-lg mx-auto text-gray-800 sm:text-lg text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">Gallery</h2>
        </div>

        <div className="max-w-screen-lg mx-auto text-gray-800 sm:text-lg text-center mb-8">
          <p className="mb-4 text-gray-600 text-md">
            Use the buttons below to filter the projects by category. Click &quot;Clear Filters&quot; to view all projects.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-16 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              className={`mx-2 mb-2 px-4 py-2 rounded transition-colors duration-200 ${
                selectedCategory === category ? 'bg-[#323D40] text-white' : 'bg-gray-200'
              } ${
                category === 'Clear'
                  ? 'hover:bg-[#C58C49]'
                  : 'hover:bg-[#323D40] hover:text-white'
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category === 'Clear' ? 'Clear Filter' : category}
            </button>
          ))}
        </div>

        {selectedCategory === null ? (
          categories.filter(category => category !== 'Clear').map(category => (
            <div key={category} className="mb-12">
              <h3 className="text-3xl font-semibold my-4 text-center flex items-center justify-center">
                {category}
                {category === 'Project 3' && (
                  <Image
                    src="/images/logos/labc-logo.png"
                    alt="LABC Logo"
                    className="ml-4 h-16 w-auto inline-block"
                    width={64} // Specify width
                    height={64} // Specify height
                    priority // Optimize for LCP
                  />
                )}
              </h3>
              <ImageGallery items={hardcodedItems.filter(item => item.category === category)} />
            </div>
          ))
        ) : (
          <div>
            <h3 className="text-3xl font-semibold my-4 text-center flex items-center justify-center">
              {selectedCategory}
              {selectedCategory === 'Project 3' && (
                <Image
                  src="/images/logos/LABC+2023.png"
                  alt="LABC Logo"
                  className="ml-4 h-16 w-auto inline-block"
                  width={64} // Specify width
                  height={64} // Specify height
                  priority // Optimize for LCP
                />
              )}
            </h3>
            <ImageGallery items={filteredItems} />
          </div>
        )}
      </div>
    </section>
  );
}