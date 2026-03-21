import type { Metadata } from 'next';

import ImageGallery from '../customComponents/galleryComponents/imageGallery';
import { galleryImages } from '../Data/images';
import { getPageContent } from '@/lib/contentful/queries';
import { getCopyText } from '@/lib/contentful/copy';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse recent plastering projects completed by Project Plaster across Norwich, Norfolk and Suffolk.',
  alternates: {
    canonical: '/gallery',
  },
};

export const revalidate = 300;

export default async function Gallery() {
  const pageContent = await getPageContent('gallery');
  const galleryCopy = pageContent?.copy;
  const heading = getCopyText(galleryCopy, 'heading', 'Gallery');
  const intro = getCopyText(galleryCopy, 'intro', '');
  const openImageLabel = getCopyText(galleryCopy, 'aria.openImageLabel', 'Open gallery image');
  const closeImageLabel = getCopyText(galleryCopy, 'aria.closeImageLabel', 'Close full-screen image');
  const prevImageLabel = getCopyText(galleryCopy, 'aria.prevImageLabel', 'View previous image');
  const nextImageLabel = getCopyText(galleryCopy, 'aria.nextImageLabel', 'View next image');
  const dialogLabelTemplate = getCopyText(
    galleryCopy,
    'aria.dialogTemplate',
    'Gallery image {current} of {total}',
  );

  return (
    <section className="bg-white py-8">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="max-w-screen-lg mx-auto text-gray-800 sm:text-lg text-center">
          <h1 className="mb-4 text-4xl tracking-tight font-semibold text-gray-900">{heading}</h1>
          {intro ? (
            <p className="mx-auto mt-3 max-w-3xl text-lg text-[#3B464B]">
              {intro}
            </p>
          ) : null}
        </div>

        <div>
          <ImageGallery
            items={galleryImages.map((image) => ({
              imageUrl: image.src,
              altText: image.alt,
            }))}
            labels={{
              openImageLabel,
              closeImageLabel,
              prevImageLabel,
              nextImageLabel,
              dialogLabelTemplate,
            }}
          />
        </div>
      </div>
    </section>
  );
}
