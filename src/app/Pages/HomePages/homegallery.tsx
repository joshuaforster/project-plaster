import Button from '../../customComponents/buttons';
import Image from 'next/image';
import { galleryImages } from '@/app/Data/images';
import { getCopyText, type CopyPayload } from '@/lib/contentful/copy';

const selectedImages = galleryImages.slice(0, 3);

interface HomeGalleryProps {
  copy?: CopyPayload;
}

export default function HomeGallery({ copy }: HomeGalleryProps) {
  const heading = getCopyText(copy, 'galleryPreview.heading', 'Recent Work');
  const intro = getCopyText(
    copy,
    'galleryPreview.intro',
    'A few examples of plastering projects completed across Norfolk and Suffolk.',
  );
  const ctaLabel = getCopyText(copy, 'galleryPreview.ctaLabel', 'View Full Gallery');
  const ctaAria = getCopyText(copy, 'galleryPreview.ctaAria', 'View the full plastering gallery');

  return (
    <section className="bg-white py-24">
      <div className="px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#1A1F24]">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-[#1A1F24]/90 max-w-2xl mx-auto">
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {selectedImages.map((image, index) => (
            <div
              key={image.src}
              className="relative w-full h-[450px] overflow-hidden border border-[#E5E5E5] shadow-md group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="primary"
            to="/gallery"
            ariaLabel={ctaAria}
            size="large"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
