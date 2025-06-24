import React, { useState } from 'react';
import Image from 'next/image'; // Import Image from next/image
import FullscreenImage from './FullScreenImage';

export interface ImageItem {
  type: 'image';
  imageUrl: string;
  category: string;
  title?: string;
  altText?: string;
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
    <section className="bg-white dark:bg-dark-gray">
      <div className="px-4 py-8 mx-auto max-w-screen-xl lg:px-6 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden border border-black dark:border-white cursor-pointer"
              onClick={() => setCurrentIndex(index)}
              style={{ height: '500px' }} // Set a fixed height for all images
            >
              <div className="w-full h-full group">
                <Image
                  src={item.imageUrl}
                  alt={item.altText || 'Gallery Image'}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:brightness-75"
                  width={500} // Specify a default width
                  height={500} // Specify a default height
                  loading="lazy" // Lazy load the images
                />
                <h3 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {currentIndex !== null && (
        <FullscreenImage
          imageUrl={items[currentIndex].imageUrl}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onClose={closeFullscreen}
        />
      )}
    </section>
  );
};

export default ImageGallery;