import type { Metadata } from "next";
import CTA from "../customComponents/cta";
import { getPageContent, getServicesContent } from "@/lib/contentful/queries";
import { getCopyText } from "@/lib/contentful/copy";
import ScrollReveal from "../customComponents/ScrollReveal";

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
}

const defaultServices: ServiceItem[] = [
  {
    id: "all-aspects",
    title: "All aspects of plastering",
    description: "Full internal plastering work for homes, extensions and renovation projects.",
  },
  {
    id: "re-skimming",
    title: "Re-skims",
    description: "Smooth over tired walls and ceilings for a clean, paint-ready finish.",
  },
  {
    id: "repair-work",
    title: "Repair work",
    description: "Patch repairs and damaged area restoration blended into existing surfaces.",
  },
  {
    id: "artex-smoothing",
    title: "Artex smoothing",
    description: "Level out textured ceilings and walls with modern smooth plaster finishes.",
  },
  {
    id: "plasterboarding",
    title: "Plasterboarding",
    description: "Boarding and lining work prepared properly for a quality finish.",
  },
  {
    id: "stud-walls",
    title: "Stud work walls",
    description: "Stud wall installation and boarding for room layouts and alterations.",
  },
  {
    id: "media-walls",
    title: "Media walls",
    description: "Custom media wall preparation, boarding and plastering for clean lines.",
  },
  {
    id: "internal-insulating",
    title: "Internal insulating",
    description: "Internal insulation systems installed with neat boarding and finishing.",
  },
  {
    id: "crack-stitching",
    title: "Crack stitching",
    description: "Structural crack stitching and surface repair to stabilise problem areas.",
  },
];

export const revalidate = 300;

function getMergedServices(cmsServices: Awaited<ReturnType<typeof getServicesContent>>): ServiceItem[] {
  if (!cmsServices.length) {
    return defaultServices;
  }

  return cmsServices.map((service, index) => {
    const fallback = defaultServices[index % defaultServices.length];
    const fallbackDescription = fallback.description;
    return {
      id: service.id,
      title: service.title,
      description:
        service.description ||
        service.content ||
        (service.benefits.length ? service.benefits.join(", ") : "") ||
        fallbackDescription,
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
  const listHeading = getCopyText(
    servicesCopy,
    "list.heading",
    "Services",
  );

  return (
    <main className="font-roboto bg-white text-[#3B464B]">
      {/* Main SEO Header */}
      <section className="bg-white py-20 text-center">
        <ScrollReveal className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold text-[#3B464B]">
            {heading}
          </h1>
          <p className="mt-4 text-lg text-[#3B464B] max-w-2xl mx-auto font-semibold">
            {intro}
          </p>
        </ScrollReveal>
      </section>

      {/* SERVICES LIST */}
      <section className="py-6 pb-16">
        <ScrollReveal className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#3B464B] mb-8">
            {listHeading}
          </h2>
          <ul className="list-disc pl-6 space-y-6 marker:text-[#D7BFA4]">
            {services.map((service) => (
              <li key={service.id} className="text-[#3B464B]">
                <p className="text-xl font-bold leading-tight">
                  {service.title}
                </p>
                <p className="mt-1 text-base font-semibold leading-relaxed">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>


      {/* CTA */}
      <CTA copy={servicesCopy} copyPath="cta" />
    </main>
  );
}
