import type { Metadata } from "next";
import Image from "next/image";
import CTA from "../customComponents/cta";
import { getPageContent, getServicesContent } from "@/lib/contentful/queries";
import { getCopyText } from "@/lib/contentful/copy";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fresh plastering, re-skimming, plaster repairs and preparation services across Norwich, Norfolk and Suffolk.",
  alternates: {
    canonical: "/services",
  },
};

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  benefits: string[];
}

const defaultServices: ServiceItem[] = [
  {
    id: "fresh-plastering",
    title: "Fresh Plastering",
    description: "Brand-new plastering for extensions, renovations and new builds.",
    content: "Smooth, clean, ready-to-paint plaster finish.",
    image: "/images/jack1.webp",
    benefits: ["Extensions and renovations", "Paint-ready finish", "Clean and tidy handover"],
  },
  {
    id: "re-skimming",
    title: "Re-Skimming",
    description: "Over old walls, artex or existing plaster.",
    content: "Modern smooth finish without ripping everything out.",
    image: "/images/jack2.webp",
    benefits: ["Artex and textured wall coverage", "Minimal disruption", "Long-lasting smooth surface"],
  },
  {
    id: "plaster-repairs",
    title: "Plaster Repairs",
    description: "Cracks, leaks, patching, and insurance repairs.",
    content: "Make damaged walls look new again.",
    image: "/images/jack3.webp",
    benefits: ["Cracks and patch repairs", "Ceiling and wall restoration", "Blended finish"],
  },
  {
    id: "prep-work",
    title: "Prep Work Included",
    description: "We handle everything so you don’t have to.",
    content: "Masking, protection, bonding and priming done properly.",
    image: "/images/jack4.webp",
    benefits: ["Surface protection", "Bonding and priming", "Clean working process"],
  },
];

export const revalidate = 300;

function getMergedServices(cmsServices: Awaited<ReturnType<typeof getServicesContent>>): ServiceItem[] {
  if (!cmsServices.length) {
    return defaultServices;
  }

  return cmsServices.map((service, index) => {
    const fallback = defaultServices[index % defaultServices.length];
    return {
      id: service.id,
      title: service.title,
      description: service.description,
      content: service.content || fallback.content,
      image: service.image || fallback.image,
      benefits: service.benefits.length ? service.benefits : fallback.benefits,
    };
  });
}

export default async function ServicesPage() {
  const pageContent = await getPageContent("services");
  const servicesCopy = pageContent?.copy;
  const cmsServices = await getServicesContent();
  const services = getMergedServices(cmsServices);
  const heading = getCopyText(
    servicesCopy,
    "hero.heading",
    "Plastering Services in Norwich, Norfolk & Suffolk",
  );
  const intro = getCopyText(
    servicesCopy,
    "hero.intro",
    "We provide plastering, re-skimming, repairs and full preparation for homes and businesses.",
  );
  const imageAltSuffix = getCopyText(
    servicesCopy,
    "serviceImageAltSuffix",
    "plastering in Norwich",
  );

  return (
    <main className="font-roboto">
      {/* Main SEO Header */}
      <section className="bg-white py-20 text-center">
        <h1 className="text-4xl font-bold text-[#1F2937]">
          {heading}
        </h1>
        <p className="mt-4 text-lg text-[#3B464B] max-w-2xl mx-auto">
          {intro}
        </p>
      </section>

      {/* ALL SERVICES */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`py-20 ${
            index % 2 === 0 ? "bg-[#F5F5F4]" : "bg-white"
          }`}
        >
          <div
            className={`mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-12 items-center ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* IMAGE */}
            <div className="relative w-full lg:w-1/2 h-[420px] overflow-hidden shadow-xl flex justify-center items-center">
              <Image
                src={service.image}
                alt={`${service.title} ${imageAltSuffix}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* TEXT */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-[#1F2937] mb-4">
                {service.title}
              </h2>
              <p className="text-lg text-[#3B464B] mb-4">
                {service.description}
              </p>
              <p className="text-base text-[#3B464B] leading-relaxed">
                {service.content}
              </p>
              {service.benefits && (
                <ul className="mt-6 list-disc pl-5 text-left text-[#3B464B]">
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}


      {/* CTA */}
      <CTA copy={servicesCopy} copyPath="cta" />
    </main>
  );
}
