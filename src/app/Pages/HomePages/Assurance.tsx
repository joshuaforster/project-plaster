"use client";

import Image from "next/image";
import Button from "../../customComponents/buttons";
import { images } from "@/app/Data/images";

const features = [
  {
    name: "Fresh Plastering",
    description: "Walls, ceilings, new builds and renovations — clean finish ready to paint.",
  },
  {
    name: "Re-Skimming",
    description: "Transforms old, uneven or textured surfaces into smooth paint-ready walls.",
  },
  {
    name: "Repairs & Patching",
    description: "Cracks, leaks, electrical chases — we repair and blend seamlessly.",
  },
  {
    name: "Prep & Protection",
    description: "We protect flooring, carpets and surfaces — no mess, no shortcuts.",
  },
];

export default function Assurance() {
  return (
    <section className="overflow-hidden bg-[#1F2937] py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* grid with 2 columns on large screens */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 items-center">

          {/* --- TEXT SECTION --- */}
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Smooth finish.<br />
                <span className="text-[#D7BFA4]">Done properly.</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Professional plastering across <strong>Norwich, Norfolk & Suffolk</strong>.
                We prep properly, protect your space, and leave a clean finish that’s ready to paint.
              </p>

              {/* features */}
              <dl className="mt-10 space-y-8 text-base leading-7 text-gray-200 max-w-xl">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="font-semibold text-[#D7BFA4]">
                      • {feature.name}
                    </dt>
                    <dd>{feature.description}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <Button variant="primary" to="/contact">
                  Get A Free Quote
                </Button>
              </div>

            </div>
          </div>

          {/* --- IMAGE SECTION --- */}
          <div className="relative w-full h-80 sm:h-[500px] rounded-xl overflow-hidden shadow-xl ring-1 ring-black/30">
            <Image
              src={images[0]}        // ✅ first image only
              alt="Plastering work example"
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