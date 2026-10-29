"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export default function AboutSlideshow({
  slides,
  interval = 4000,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (paused || reduceMotion) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);

    return () => clearInterval(id);
  }, [paused, slides.length, interval]);

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/20 bg-surface"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Photos of Aarav Mandi"
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          aria-hidden={i !== index}
          className={`transition-opacity duration-1000 motion-reduce:transition-none ${
            slide.fit === "contain" ? "object-contain p-6" : "object-cover"
          } ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-3 flex justify-center">
        <div className="flex gap-2 rounded-full bg-background/60 px-3 py-2 backdrop-blur-sm">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-gold"
                  : "w-2 bg-muted/60 hover:bg-gold-light"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
