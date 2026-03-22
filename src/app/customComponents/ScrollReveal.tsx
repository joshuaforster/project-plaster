"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) {
      return;
    }

    if (typeof window !== "undefined") {
      const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (reducedMotionQuery.matches) {
        window.requestAnimationFrame(() => setIsVisible(true));
        return;
      }
    }

    if (typeof IntersectionObserver === "undefined") {
      window.requestAnimationFrame(() => setIsVisible(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = { transitionDelay: `${delayMs}ms` };

  return (
    <div
      ref={elementRef}
      style={style}
      className={`scroll-reveal ${isVisible ? "scroll-reveal-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
