import Button from '@/app/customComponents/buttons';
import { galleryImages } from '@/app/Data/images';
import { getCopyText, type CopyPayload } from '@/lib/contentful/copy';
import Image from 'next/image';

interface HeroContent {
  eyebrow: string;
  titleLeading: string;
  titleAccent: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  imageUrl: string;
  imageAlt: string;
}

interface HeroProps {
  copy?: CopyPayload;
}

const defaultHeroContent: HeroContent = {
  eyebrow: 'Plastering Services In Norwich, Norfolk & Suffolk',
  titleLeading: 'Plastering for homes and',
  titleAccent: 'businesses in Norfolk.',
  description:
    'We handle fresh plastering, re-skimming and repairs, including the prep work. You get a smooth finish that is ready for painting.',
  primaryCtaLabel: 'Get a Free Quote',
  primaryCtaHref: '/contact',
  secondaryCtaLabel: 'Find Out More',
  secondaryCtaHref: '/about',
  imageUrl: galleryImages[0].src,
  imageAlt: galleryImages[0].alt,
};

export default function Hero({ copy }: HeroProps) {
  const hero = {
    eyebrow: getCopyText(copy, 'hero.eyebrow', defaultHeroContent.eyebrow),
    titleLeading: getCopyText(copy, 'hero.titleLeading', defaultHeroContent.titleLeading),
    titleAccent: getCopyText(copy, 'hero.titleAccent', defaultHeroContent.titleAccent),
    description: getCopyText(copy, 'hero.description', defaultHeroContent.description),
    primaryCtaLabel: getCopyText(copy, 'hero.primaryCtaLabel', defaultHeroContent.primaryCtaLabel),
    primaryCtaHref: getCopyText(copy, 'hero.primaryCtaHref', defaultHeroContent.primaryCtaHref),
    secondaryCtaLabel: getCopyText(
      copy,
      'hero.secondaryCtaLabel',
      defaultHeroContent.secondaryCtaLabel,
    ),
    secondaryCtaHref: getCopyText(
      copy,
      'hero.secondaryCtaHref',
      defaultHeroContent.secondaryCtaHref,
    ),
    imageUrl: getCopyText(copy, 'hero.imageUrl', defaultHeroContent.imageUrl),
    imageAlt: getCopyText(copy, 'hero.imageAlt', defaultHeroContent.imageAlt),
  };

  return (
    <section className="relative isolate flex min-h-[80vh] overflow-hidden pt-14">
      <div className="absolute inset-0 -z-[1]">
        <Image
          src={hero.imageUrl}
          fill
          alt={hero.imageAlt}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1F24]/20"></div>
      </div>

      <div className="w-full px-4 lg:px-6 max-w-screen-xl mx-auto flex items-center">
        <div className="bg-[#1A1F24]/90 backdrop-blur-sm p-8 lg:p-10 max-w-2xl lg:max-w-xl text-left border-l-4 border-[#D7BFA4]">
          <p className="text-lg text-[#EDEDED] tracking-wide">
            {hero.eyebrow}
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">
            <span className="text-[#EDEDED]">{hero.titleLeading}</span>{' '}
            <span className="text-[#D7BFA4]">{hero.titleAccent}</span>
          </h1>

          <p className="mt-4 text-lg text-[#EDEDED]/90 leading-relaxed max-w-prose">
            {hero.description}
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <Button
              variant="primary"
              size="large"
              to={hero.primaryCtaHref}
            >
              {hero.primaryCtaLabel}
            </Button>
            <Button
              variant="tertiary"
              size="large"
              to={hero.secondaryCtaHref}
              ariaLabel="Find out more about Project Plaster"
            >
              {hero.secondaryCtaLabel} <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
