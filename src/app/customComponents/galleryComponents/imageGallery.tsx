'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import FullscreenImage from './FullScreenImage';

export interface ImageItem {
  imageUrl: string;
  category?: string;
  title?: string;
  altText: string;
}

export type GalleryItem = ImageItem;

interface ImageGalleryProps {
  items: GalleryItem[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    }
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % items.length);
    }
  };

  const closeFullscreen = () => {
    setCurrentIndex(null);
  };

  return (
    <section className="bg-white">
      <div className="px-4 py-8 mx-auto max-w-screen-xl lg:px-6 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <button
              key={item.imageUrl}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className="relative h-[500px] w-full overflow-hidden border border-black text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7BFA4]"
              aria-label={`Open gallery image ${index + 1}`}
            >
              <div className="group h-full w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:brightness-75"
                  loading="lazy"
                />
                {(item.title || item.category) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-3 py-2 text-white">
                    {item.title && (
                      <h3 className="text-base font-semibold">{item.title}</h3>
                    )}
                    {item.category && (
                      <p className="text-sm text-white/90">{item.category}</p>
                    )}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
      {currentIndex !== null && (
        <FullscreenImage
          imageUrl={items[currentIndex].imageUrl}
          altText={items[currentIndex].altText}
          currentIndex={currentIndex + 1}
          totalImages={items.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onClose={closeFullscreen}
        />
      )}
    </section>
  );
};

export default ImageGallery;
