import { getCopyText, type CopyPayload } from '@/lib/contentful/copy';

interface LocationProps {
  copy?: CopyPayload;
}

const Location = ({ copy }: LocationProps) => {
  const titleLeading = getCopyText(copy, 'location.titleLeading', 'Based in');
  const titleAccent = getCopyText(copy, 'location.titleAccent', 'Norfolk');
  const paragraphOne = getCopyText(
    copy,
    'location.paragraphOne',
    'We’re based in Norwich, working across Norfolk and Suffolk.',
  );
  const paragraphTwo = getCopyText(
    copy,
    'location.paragraphTwo',
    'Whether it’s a small patch repair or a full re-skim, we turn up on time, work tidy, and leave a smooth finish that’s ready to paint.',
  );
  const paragraphThree = getCopyText(
    copy,
    'location.paragraphThree',
    'You will get a clear price upfront, with no hidden extras.',
  );
  const mapTitle = getCopyText(copy, 'location.mapTitle', 'Project Plaster - Norwich, Norfolk');

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 lg:px-8 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold text-[#1A1F24] leading-tight">
            {titleLeading} <span className="text-[#D7BFA4]">{titleAccent}</span>
          </h2>

          <p className="mt-6 text-lg text-[#1A1F24] leading-8">
            {paragraphOne}
          </p>

          <p className="mt-4 text-lg text-[#1A1F24] leading-8">
            {paragraphTwo}
          </p>

          <p className="mt-4 text-lg text-[#1A1F24] leading-8">
            {paragraphThree}
          </p>
        </div>

        {/* MAP */}
        <div className="w-full h-[400px] lg:h-[500px] overflow-hidden shadow-md ring-1 ring-[#D7BFA4]/40">
          <iframe
            title={mapTitle}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9693.726947524138!2d1.2806866!3d52.6308859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9e4c2258b02d1%3A0xdeb26a6e0e2f03be!2sNorwich!5e0!3m2!1sen!2suk!4v1716155000000!5m2!1sen!2suk"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Location;
