import React from "react";
import H1 from "@/components/ui/headers/H1";
import H2 from "@/components/ui/headers/H2";
import { FaShield } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      <section className="relative h-max md:h-[85vh] bg-cover bg-center px-4 py-6 md:px-4 md:py-16 flex items-center justify-center bg-linear-to-b from-accent to-primary text-background">
        <FaShield className="absolute opacity-25 text-[10rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none hidden md:block" />
        <FaShield className="absolute opacity-20 text-[15rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none hidden md:block" />
        <FaShield className="absolute opacity-15 text-[20rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none hidden md:block" />
        <FaShield className="absolute opacity-10 text-[25rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none hidden md:block" />
        <FaShield className="absolute opacity-5 text-[30rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none md:hidden" />

        <div className="md:max-w-screen-xl z-10">
          <div className="md:max-w-[60%]">

            <H1 className="mb-10">
              About EvoCloud Enterprise-grade Cloud Native Platform
            </H1>

            <H2 className="mb-4">
              EvoCloud aims to provide an open-source alternative to OpenShift, with built-in composable components, runtimes, and orchestrators.
            </H2>
          </div>
        </div>
      </section>
    </>
  );
}
