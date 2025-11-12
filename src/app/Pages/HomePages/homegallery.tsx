"use client";

import React, { useEffect, useState, useRef } from "react";
import Button from "../../customComponents/buttons";
import Image from "next/image";
import { images } from "@/app/Data/images"; // your existing images array

const selectedImages = images.slice(0, 3); // ✅ first 3 images automatically

export default function HomeGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top } = sectionRef.current.getBoundingClientRect();
      if (top < window.innerHeight * 0.75) setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once when mounted

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-24 bg-[#F5F5F4] transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="px-6 lg:px-8 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#1F2937]">Recent Work</h2>
          <p className="mt-4 text-lg text-[#3B464B]">
            A few examples of plastering projects completed across Norfolk & Suffolk.
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {selectedImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-xl group ring-1 ring-[#D7BFA4]/40"
            >
              <Image
                src={image}
                alt={`Plastering gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button to="/gallery" variant="primary" aria-label="View full gallery">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}