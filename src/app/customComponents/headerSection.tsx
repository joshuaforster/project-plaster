import Image from 'next/image';
import { getCopyText, type CopyPayload } from '@/lib/contentful/copy';

interface HeaderSectionProps {
  image: string;
  title: string;
  copy?: CopyPayload;
  copyPath?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  image,
  title,
  copy,
  copyPath = 'header',
}) => {
  const resolvedTitle = getCopyText(copy, `${copyPath}.title`, title);
  const imageAlt = getCopyText(copy, `${copyPath}.imageAlt`, resolvedTitle);

  return (
    <div className="relative w-full h-96">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="w-full h-96 object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="mb-8 text-4xl font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
          {resolvedTitle}
        </h1>
      </div>
    </div>
  );
};

export default HeaderSection;
