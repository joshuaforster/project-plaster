'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface FullscreenImageProps {
  imageUrl: string;
  altText: string;
  currentIndex: number;
  totalImages: number;
  dialogLabelTemplate?: string;
  closeImageLabel?: string;
  prevImageLabel?: string;
  nextImageLabel?: string;
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

const FullscreenImage: React.FC<FullscreenImageProps> = ({
  imageUrl,
  altText,
  currentIndex,
  totalImages,
  dialogLabelTemplate = "Gallery image {current} of {total}",
  closeImageLabel = "Close full-screen image",
  prevImageLabel = "View previous image",
  nextImageLabel = "View next image",
  onPrevious,
  onNext,
  onClose,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrevious();
      if (event.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const dialogLabel = dialogLabelTemplate
    .replace("{current}", String(currentIndex))
    .replace("{total}", String(totalImages));

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
      onClick={handleClickOutside}
      role="dialog"
      aria-modal="true"
      aria-label={dialogLabel}
    >
      <div className="relative h-[80vh] w-[90vw] max-w-6xl">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          sizes="90vw"
          className="object-contain"
          priority
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      <button
        ref={closeButtonRef}
        type="button"
        className="absolute top-5 right-5 rounded-full bg-black/60 p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7BFA4]"
        onClick={onClose}
        aria-label={closeImageLabel}
      >
        <CloseIcon className="w-8 h-8" />
      </button>
      <button
        type="button"
        className="absolute left-5 top-1/2 transform -translate-y-1/2 rounded-full bg-black/70 p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7BFA4]"
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        aria-label={prevImageLabel}
      >
        <ArrowLeftIcon className="w-8 h-8" />
      </button>
      <button
        type="button"
        className="absolute right-5 top-1/2 transform -translate-y-1/2 rounded-full bg-black/70 p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7BFA4]"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label={nextImageLabel}
      >
        <ArrowRightIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default FullscreenImage;
