'use client';

import React from 'react';
import Image from 'next/image'; // Import Image from next/image

interface FullscreenImageProps {
  imageUrl: string;
  onPrevious: () => void;
  onNext: () => void;
  onClose: () => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FullscreenImage: React.FC<FullscreenImageProps> = ({ imageUrl, onPrevious, onNext, onClose }) => {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]" onClick={handleClickOutside}>
      <div className="relative max-h-[90vh] w-auto object-contain cursor-pointer">
        <Image
          src={imageUrl}
          alt="Fullscreen Image"
          layout="intrinsic" // Automatically adjusts the size based on the image dimensions
          width={1200} // Set a default width
          height={800} // Set a default height
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      <button
        className="absolute top-5 right-5 text-white text-3xl"
        onClick={onClose}
      >
        <CloseIcon className="w-8 h-8" />
      </button>
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-2xl p-2 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
      >
        <ArrowLeftIcon className="w-8 h-8" />
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-2xl p-2 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <ArrowRightIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default FullscreenImage;