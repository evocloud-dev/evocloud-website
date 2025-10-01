import React from "react";
import H1 from "@/components/ui/headers/H1";
import H2 from "@/components/ui/headers/H2";
import Button1 from "@/components/ui/buttons/cta/Button1";
import Button2 from "@/components/ui/buttons/cta/Button2";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative h-max md:h-[45vh] px-4 py-6 md:py-16 flex items-center justify-center bg-white text-primary-foreground">
        <div className="md:max-w-screen-xl z-10">
          <div className="md:max-w-[60%]">
            <H1 className="mb-10">
              EvoCloud vs OpenShift
            </H1>

            <H2 className="mb-4">
              EvoCloud aims to provide an open-source alternative to OpenShift,
              with built-in composable components, runtimes, and orchestrators.
            </H2>

            <div className="flex flex-wrap gap-2 sm:gap-4 mb-10">
              <Button1 className="">
                 Get Started For Free
              </Button1>
              <Button2 className="">
                 Enterprise Support
              </Button2>
            </div>
          </div>
          <Image
            src="/images/evocloud-openshift.svg"
            width={640}
            height={480}
            alt="EvoCloud-and-OpenShift"
            className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
          />
        </div>
      </section>
    </>
  );
}
