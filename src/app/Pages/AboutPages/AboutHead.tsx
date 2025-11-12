'use client';

import React from "react";
import Image from "next/image";
import { images } from "@/app/data/images";

export default function AboutHead() {
  return (
    <section className="bg-white py-24 font-roboto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">

          {/* --- TEXT SIDE --- */}
          <div className="text-[#1A1F24] flex flex-col justify-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight">
              About Project Plaster
            </h1>

            <p className="mt-6 text-lg leading-relaxed max-w-lg">
              We’re a small plastering business based in Norwich, covering Norfolk & Suffolk.
              No franchise. No corporate nonsense. Just proper workmanship.
            </p>

            <p className="mt-4 text-lg leading-relaxed max-w-lg">
              From full re-skims to patch repairs, we treat every wall like it’s our own home:
              we turn up on time, protect your space, and leave a smooth finish that’s ready to paint.
            </p>

            <p className="mt-4 text-lg leading-relaxed max-w-lg">
              No over-inflated day rates, no excuses, and no disappearing halfway through the job.
            </p>
          </div>

          {/* --- IMAGE SIDE --- */}
          <div className="relative h-[450px] w-full overflow-hidden shadow-md ring-1 ring-[#D7BFA4]/50">
            <Image
              src={images[1]}
              alt="Fresh plaster finish"
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