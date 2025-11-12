'use client'

import ImageGallery from '../customComponents/galleryComponents/imageGallery';
import { images } from '../data/images';


export default function Gallery() {

  return (
    <section className="bg-white dark:bg-dark-gray py-8">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="max-w-screen-lg mx-auto text-gray-800 sm:text-lg text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-semibold text-gray-900">Gallery</h2>
        </div>
          <div>

            <ImageGallery items={images.map(image => ({ type: 'image', imageUrl: image, category: '', src: image, alt: '' }))} />
          </div>
      
      </div>
    </section>
  );
}