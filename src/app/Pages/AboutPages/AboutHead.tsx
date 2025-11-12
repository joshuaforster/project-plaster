"use client";

import React from "react";
import Image from "next/image";
import { images } from "@/app/Data/images"; // uses your existing image array

export default function AboutHead() {
  return (
    <section className="bg-[#F5F5F4] py-24 font-roboto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">

          {/* TEXT SIDE */}
          <div className="text-[#1F2937] flex flex-col justify-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#1F2937]">
              About Project Plaster
            </h1>

            <p className="mt-6 text-lg leading-relaxed max-w-lg text-[#3B464B]">
              We’re a small plastering business based in Norwich, covering Norfolk & Suffolk.
              No franchise. No corporate nonsense. Just proper workmanship.
            </p>

            <p className="mt-4 text-lg leading-relaxed max-w-lg text-[#3B464B]">
              From full re-skims to patch repairs, we treat every wall like it’s our own house:
              we turn up on time, protect your space, and leave a clean finish that`s ready to paint.
            </p>

            <p className="mt-4 text-lg leading-relaxed max-w-lg text-[#3B464B]">
              No over-inflated day rates, no excuses, and no disappearing halfway through the job.
            </p>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative h-[450px] w-full rounded-xl overflow-hidden shadow-xl ring-1 ring-[#D7BFA4]/60">
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