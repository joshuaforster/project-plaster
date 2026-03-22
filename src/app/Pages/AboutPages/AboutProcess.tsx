import Image from "next/image";

import { galleryImages } from "@/app/Data/images";
import { getCopyObjectArray, getCopyText, type CopyPayload } from "@/lib/contentful/copy";
import ScrollReveal from "@/app/customComponents/ScrollReveal";

interface AboutProcessStep {
  title: string;
  text: string[];
  image: {
    src: string;
    alt: string;
  };
}

interface AboutProcessProps {
  copy?: CopyPayload;
}

const defaultProcess: AboutProcessStep[] = [
  {
    title: "Request a Quote",
    text: [
      "Send photos or a short video of the area, or we can visit if needed.",
      "You get a clear written quote before work starts.",
    ],
    image: galleryImages[0],
  },
  {
    title: "Work Carried Out",
    text: [
      "We protect your space, get the prep right, and leave a smooth, clean finish ready for paint.",
      "We work to schedule, keep things tidy and complete the job properly.",
    ],
    image: galleryImages[1],
  },
];

function getStringList(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

function mapProcess(copy?: CopyPayload): AboutProcessStep[] {
  const items = getCopyObjectArray(copy, "aboutProcess.steps")
    .map((step, index) => {
      const fallback = defaultProcess[index % defaultProcess.length];
      const title = typeof step.title === "string" ? step.title.trim() : "";
      const text = getStringList(step.text);
      const imageSrc = typeof step.imageUrl === "string" ? step.imageUrl.trim() : "";
      const imageAlt = typeof step.imageAlt === "string" ? step.imageAlt.trim() : "";
      if (!title || !text.length) {
        return null;
      }

      return {
        title,
        text,
        image: {
          src: imageSrc || fallback.image.src,
          alt: imageAlt || fallback.image.alt,
        },
      } satisfies AboutProcessStep;
    })
    .filter((step): step is AboutProcessStep => step !== null);

  return items.length ? items : defaultProcess;
}

export default function AboutProcess({ copy }: AboutProcessProps) {
  const process = mapProcess(copy);
  const sectionHeading = getCopyText(copy, "aboutProcess.heading", "");

  return (
    <section className="bg-[#1A1F24] py-24 font-roboto">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        {sectionHeading ? (
          <ScrollReveal className="mb-12">
            <h2 className="text-center text-4xl font-bold text-white">
              {sectionHeading}
            </h2>
          </ScrollReveal>
        ) : null}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {process.map((step, idx) => (
            <ScrollReveal
              key={`${step.title}-${idx}`}
              className="text-center flex flex-col items-center"
              delayMs={idx * 90}
            >
              <div className="relative w-full h-72 md:h-80 lg:h-[420px] overflow-hidden shadow-lg ring-1 ring-[#D7BFA4]/50">
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>

              <h3 className="font-semibold text-3xl text-[#D7BFA4] tracking-tight mt-8">
                {step.title}
              </h3>

              <p className="mt-4 text-lg text-white leading-relaxed max-w-lg mx-auto">
                {step.text.join(" ")}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
