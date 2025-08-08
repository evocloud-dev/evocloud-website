import React from "react";

export default function Carousel({
  logos = [],
  repeat = 3, // default to 3 repeats
}: {
  logos: string[];
  repeat?: number;
}) {
  const repeatedLogos = Array.from({ length: repeat }).flatMap(() => logos);

  return (
    <div className="overflow-hidden bg-background px-4 py-6 md:px-4 md:py-12">
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        <div className="flex animate-scroll gap-12 min-w-[200%]">
          {repeatedLogos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Logo ${i + 1}`}
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
