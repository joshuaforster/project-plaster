"use client";

import React from "react";
import Image from "next/image";
import { images } from "@/app/Data/images"; // uses your existing image array

export default function AboutProcess() {
  const process = [
    {
      title: "Request a quote",
      text: [
        "Send photos or a short video of the area, or we can visit if needed.",
        "You’ll get an honest price — no inflated day rates, no nonsense."
      ],
      image: images[0],
    },
    {
      title: "Work carried out",
      text: [
        "We protect your space, get the prep right, and leave a clean finish ready for paint.",
        "Reliable, tidy and on time — we treat your house like our own."
      ],
      image: images[1],
    },
  ];

  return (
    <section className="bg-[#1F2937] py-24 font-roboto">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12">

        {process.map((step, idx) => (
          <div key={idx} className="text-center p-6 space-y-6">

            {/* IMAGE */}
            <div className="relative w-full h-72 md:h-80 lg:h-[420px] overflow-hidden rounded-xl shadow-xl ring-1 ring-[#D7BFA4]/60">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority={idx === 0}
              />
            </div>

            {/* TEXT */}
            <h3 className="font-semibold text-3xl text-[#F5F5F4] tracking-tight">
              {step.title}
            </h3>

            <p className="text-lg text-[#E7E7E7] leading-relaxed max-w-lg mx-auto">
              {step.text.join(" ")}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}