import Image from 'next/image';
import Button from '@/app/customComponents/buttons';
import { galleryImages } from '@/app/Data/images';
import { getCopyObjectArray, getCopyText, type CopyPayload } from '@/lib/contentful/copy';

const defaultFeatures = [
  { name: 'Full preparation', description: 'We protect surfaces, mask edges, and leave every room spotless.' },
  { name: 'Smooth finish', description: 'Our plastering is ready for painting when fully dried.' },
  { name: 'Reliable and tidy', description: 'We arrive when we say we will and clean up properly before we leave.' },
];

interface AssuranceProps {
  copy?: CopyPayload;
}

function mapFeatures(copy?: CopyPayload): { name: string; description: string }[] {
  const items = getCopyObjectArray(copy, 'assurance.features')
    .map((feature) => {
      const name = typeof feature.name === 'string' ? feature.name.trim() : '';
      const description = typeof feature.description === 'string' ? feature.description.trim() : '';
      if (!name || !description) {
        return null;
      }

      return { name, description };
    })
    .filter((feature): feature is { name: string; description: string } => feature !== null);

  return items.length ? items : defaultFeatures;
}

export default function Assurance({ copy }: AssuranceProps) {
  const features = mapFeatures(copy);
  const titleLine = getCopyText(copy, 'assurance.titleLine', 'Professional plastering');
  const titleAccent = getCopyText(copy, 'assurance.titleAccent', 'across Norfolk and Suffolk');
  const body = getCopyText(
    copy,
    'assurance.body',
    'Professional plastering across Norwich, Norfolk & Suffolk. We prep properly, protect your space, and leave a clean finish that’s ready to paint.',
  );
  const ctaLabel = getCopyText(copy, 'assurance.ctaLabel', 'Get A Free Quote');
  const ctaHref = getCopyText(copy, 'assurance.ctaHref', '/contact');
  const imageUrl = getCopyText(copy, 'assurance.imageUrl', galleryImages[0].src);
  const imageAlt = getCopyText(copy, 'assurance.imageAlt', galleryImages[0].alt);

  return (
    <section className="overflow-hidden bg-[#1A1F24] py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 items-center">

          {/* --- TEXT SECTION --- */}
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {titleLine}<br />
                <span className="text-[#D7BFA4]">{titleAccent}</span>
              </h2>

              <p className="mt-6 text-md leading-8 text-white">
                {body}
              </p>

              {/* Features */}
              <dl className="mt-10 space-y-8 text-base leading-7 text-white max-w-xl">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="font-semibold text-[#D7BFA4]">
                      • {feature.name}
                    </dt>
                    <dd className="text-white">{feature.description}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <Button variant="primary" size="large" to={ctaHref}>
                  {ctaLabel}
                </Button>
              </div>
            </div>
          </div>

          {/* --- IMAGE SECTION --- */}
          <div className="relative w-full h-80 sm:h-[500px] overflow-hidden shadow-xl ring-1 ring-black/40">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
