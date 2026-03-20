import type { Metadata } from 'next';

import ImageGallery from '../customComponents/galleryComponents/imageGallery';
import { galleryImages } from '../Data/images';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse recent plastering projects completed by Project Plaster across Norwich, Norfolk and Suffolk.',
  alternates: {
    canonical: '/gallery',
  },
};

export default function Gallery() {
  return (
    <section className="bg-white py-8">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="max-w-screen-lg mx-auto text-gray-800 sm:text-lg text-center">
          <h1 className="mb-4 text-4xl tracking-tight font-semibold text-gray-900">Gallery</h1>
        </div>

        <div>
          <ImageGallery
            items={galleryImages.map((image, ) => ({
              imageUrl: image.src,
              altText: image.alt,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
