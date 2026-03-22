"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroBackgroundCarouselProps {
  slides: HeroSlide[];
  intervalMs?: number;
}

export default function HeroBackgroundCarousel({
  slides,
  intervalMs = 4800,
}: HeroBackgroundCarouselProps) {
  const validSlides = slides.filter((slide) => Boolean(slide.src));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || validSlides.length < 2) {
      return;
    }

    const timerId = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % validSlides.length);
    }, intervalMs);

    return () => window.clearInterval(timerId);
  }, [intervalMs, prefersReducedMotion, validSlides.length]);

  if (!validSlides.length) {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-[1]" aria-hidden="true">
      {validSlides.map((slide, index) => (
        <Image
          key={`${slide.src}-${index}`}
          src={slide.src}
          fill
          alt=""
          priority={index === 0}
          sizes="100vw"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
