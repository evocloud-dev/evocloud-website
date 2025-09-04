import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function Carousel({
  logos = [],
  repeat = 3, // default to 3 repeats
  className,
}: {
  logos: string[];
  repeat?: number;
  className?: string;
}) {
  const repeatedLogos = Array.from({ length: repeat }).flatMap(() => logos);

  return (
    <div className={twMerge("overflow-hidden bg-gray-100 px-4 py-6 md:px-4 md:py-16", className)}>
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        <div className="flex animate-scroll gap-12 min-w-[200%]">
          {repeatedLogos.map((src, i) => (
            <Image
              key={i}
              src={src}
              width={100}
              height={100}
              alt={`Logo ${i + 1}`}
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
