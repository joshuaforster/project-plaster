 "use client";

import React from "react";
import Image from "next/image";
import CTA from "../customComponents/cta";

const services = [
  {
    id: 1,
    title: "Fresh Plastering",
    description: "Brand-new plastering for extensions, renovations and new builds.",
    content: "Smooth, clean, ready-to-paint plaster finish.",
    image: "/images/jack1.webp",
    keywords: ["fresh plastering", "new build plastering", "plastering Norwich"],
  },
  {
    id: 2,
    title: "Re-Skimming",
    description: "Over old walls, artex or existing plaster.",
    content: "Modern smooth finish without ripping everything out.",
    image: "/images/jack2.webp",
    keywords: ["re-skimming walls", "plaster skim coat", "remove artex Norfolk"],
  },
  {
    id: 3,
    title: "Plaster Repairs",
    description: "Cracks, leaks, patching, and insurance repairs.",
    content: "Make damaged walls look new again.",
    image: "/images/jack3.webp",
    keywords: ["plaster repair Norwich", "hole patching", "ceiling repair Suffolk"],
  },
  {
    id: 4,
    title: "Prep Work Included",
    description: "We handle everything so you don’t have to.",
    content: "Masking, protection, bonding and priming done properly.",
    image: "/images/jack4.webp",
    keywords: ["plaster preparation", "surface bonding", "plaster priming Norfolk"],
  },
];

export default function ServicesPage() {
  return (
    <main className="font-roboto">
      {/* Main SEO Header */}
      <section className="bg-white py-20 text-center">
        <h1 className="text-4xl font-bold text-[#1F2937]">
          Plastering Services in Norwich, Norfolk & Suffolk
        </h1>
        <p className="mt-4 text-lg text-[#3B464B] max-w-2xl mx-auto">
          Expert plastering, re-skimming, repairs and full prep work — done properly, no shortcuts.
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
                alt={`${service.title} plastering in Norwich`}
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
              {service.keywords && (
                <ul className="mt-6 list-disc pl-5 text-left text-[#3B464B]">
                  {service.keywords.map((keyword, i) => (
                    <li key={i}>{keyword}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}


      {/* CTA */}
      <CTA />
    </main>
  );
}