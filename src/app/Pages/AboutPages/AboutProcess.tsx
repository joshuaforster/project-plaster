'use client';

import React from "react";
import Image from "next/image";
import { images } from "@/app/data/images";

export default function AboutProcess() {
  const process = [
    {
      title: "Request a Quote",
      text: [
        "Send photos or a short video of the area — or we can visit if needed.",
        "You’ll get an honest price upfront — no inflated day rates, no nonsense.",
      ],
      image: images[0],
    },
    {
      title: "Work Carried Out",
      text: [
        "We protect your space, get the prep right, and leave a smooth, clean finish ready for paint.",
        "Reliable, tidy, and on time — we treat your home like our own.",
      ],
      image: images[1],
    },
  ];

  return (
    <section className="bg-[#1A1F24] py-24 font-roboto">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-16">

        {process.map((step, idx) => (
          <div key={idx} className="text-center flex flex-col items-center">
            
            {/* IMAGE */}
            <div className="relative w-full h-72 md:h-80 lg:h-[420px] overflow-hidden shadow-lg ring-1 ring-[#D7BFA4]/50">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>

            {/* TEXT */}
            <h3 className="font-semibold text-3xl text-[#D7BFA4] tracking-tight mt-8">
              {step.title}
            </h3>

            <p className="mt-4 text-lg text-white leading-relaxed max-w-lg mx-auto">
              {step.text.join(" ")}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}