import React from "react";
import H1 from "@/components/ui/headers/H1";
import H2 from "@/components/ui/headers/H2";
import HeroCollider from "@/components/layout/HeroCollider";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative h-max md:h-[75vh] px-4 py-6 md:py-16 flex items-center justify-center bg-white text-primary-foreground">
        <div className="md:max-w-screen-xl w-full z-10">
          <div className="md:max-w-[60%]">
            <H1 className="mb-10">News, Tutorials, and IT Trends</H1>
            <H2 className="mb-4">
              News, research and analysis of the latest market trends in Cloud Computing, AI, Microservices and more.
            </H2>
          </div>
          <Image
            src="/images/evocloud-layer.webp"
            width={640}
            height={650}
            alt="EvoCloud Features"
            className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
          />
        </div>
        <HeroCollider />
      </section>
    </>
  );
}