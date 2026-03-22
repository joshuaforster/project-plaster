import Image from "next/image";
import { galleryImages } from "@/app/Data/images";
import { getCopyText, type CopyPayload } from "@/lib/contentful/copy";
import ScrollReveal from "@/app/customComponents/ScrollReveal";

interface AboutHeadProps {
  copy?: CopyPayload;
}

export default function AboutHead({ copy }: AboutHeadProps) {
  const title = getCopyText(copy, "aboutHead.title", "About Project Plaster");
  const paragraphOne = getCopyText(
    copy,
    "aboutHead.paragraphOne",
    "We are a local plastering business based in Norwich, covering Norfolk and Suffolk. We focus on reliable service and quality workmanship.",
  );
  const paragraphTwo = getCopyText(
    copy,
    "aboutHead.paragraphTwo",
    "From full re-skims to patch repairs, we turn up on time, protect your space, and leave a smooth finish that is ready to paint.",
  );
  const paragraphThree = getCopyText(
    copy,
    "aboutHead.paragraphThree",
    "We provide clear pricing and keep you updated from quote to completion.",
  );
  const imageUrl = getCopyText(copy, "aboutHead.imageUrl", galleryImages[1].src);
  const imageAlt = getCopyText(copy, "aboutHead.imageAlt", galleryImages[1].alt);

  return (
    <section className="bg-white py-24 font-roboto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">

          {/* --- TEXT SIDE --- */}
          <ScrollReveal className="text-[#1A1F24] flex flex-col justify-center">
            <h2 className="text-4xl font-bold leading-tight tracking-tight">
              {title}
            </h2>

            <p className="mt-6 text-lg leading-relaxed max-w-lg">
              {paragraphOne}
            </p>

            <p className="mt-4 text-lg leading-relaxed max-w-lg">
              {paragraphTwo}
            </p>

            <p className="mt-4 text-lg leading-relaxed max-w-lg">
              {paragraphThree}
            </p>
          </ScrollReveal>

          {/* --- IMAGE SIDE --- */}
          <div className="relative h-[450px] w-full overflow-hidden shadow-md ring-1 ring-[#D7BFA4]/50">
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
