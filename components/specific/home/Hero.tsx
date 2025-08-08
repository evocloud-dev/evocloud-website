import React from "react";
// import { FaCloud } from "react-icons/fa";
// import { FaNetworkWired } from "react-icons/fa6";
import H1 from "@/components/ui/headers/H1";
import H2 from "@/components/ui/headers/H2";
import H3 from "@/components/ui/headers/H3";
import Button1 from "@/components/ui/buttons/cta/Button1";
import Button2 from "@/components/ui/buttons/cta/Button2";
import { FaShield } from "react-icons/fa6";
import { IoLogoMicrosoft } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";

export default function Hero() {
  const positions = [
    {
      top: 10.0,
      left: 70.0,
      rotate: 12,
      scale: "0.95",
      opacity: "0.15",
    },
    {
      top: 30.0,
      left: 75.0,
      rotate: 22,
      scale: "1.1",
      opacity: "0.18",
    },
    {
      top: 55.0,
      left: 65.0,
      rotate: 33,
      scale: "1.05",
      opacity: "0.17",
    },
    {
      top: 80.0,
      left: 78.0,
      rotate: 28,
      scale: "0.93",
      opacity: "0.13",
    },

    {
      top: 20.0,
      left: 15.0,
      rotate: 7,
      scale: "0.88",
      opacity: "0.14",
    },
    {
      top: 70.0,
      left: 10.0,
      rotate: 18,
      scale: "1.12",
      opacity: "0.16",
    },
  ];

  {
    /* {positions?.map((pos, i) => {
          return (
            <FaShield
              key={i}
              className="absolute text-background z-0 pointer-events-none hidden md:block"
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
                transform: `rotate(${pos.rotate}deg) scale(${pos.scale})`,
                opacity: pos.opacity,
                fontSize: "10rem",
                zIndex: 1,
              }}
            />
          );
        })} */
  }

  return (
    <>
      <section className="relative h-max md:h-screen bg-cover bg-center px-4 py-6 md:px-4 md:py-16 flex items-center justify-center bg-linear-to-b from-accent to-primary text-background">
        <FaShield className="absolute opacity-25 text-[10rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none hidden md:block" />
        <FaShield className="absolute opacity-20 text-[15rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none hidden md:block" />
        <FaShield className="absolute opacity-15 text-[20rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none hidden md:block" />
        <FaShield className="absolute opacity-10 text-[25rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none hidden md:block" />
        <FaShield className="absolute opacity-5 text-[30rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none md:hidden" />

        <div className="md:max-w-screen-xl z-10">
          <div className="md:max-w-[60%]">
            <H3 className="mb-4">Embrace a multi-cloud strategy, reduce time to market, and save on cloud cost. </H3>

            <H1 className="mb-10">
              EvoCloud Enterprise-grade Cloud Native Platform
            </H1>

            <H2 className="mb-4">
              EvoCloud aims to provide an open-source alternative to OpenShift, with built-in composable components, runtimes, and orchestrators.
            </H2>

            <div className="flex flex-wrap gap-2 sm:gap-4 mb-10">
              <Button1
                // type="button"
                className=""
              >
                Get Started For Free
              </Button1>

              <Button2
                // type="button"
                className=""
              >
                Enterprise Support
              </Button2>
            </div>

            <H3 className="mb-4">Supported Cloud Infrastructure:</H3>

            <div className="flex flex-wrap gap-2 sm:gap-4">
              <Button2 type="button">
                <IoLogoMicrosoft className="min-h-6 min-w-6" />
                <span>Microsft Azure</span>
              </Button2>
              <Button2 type="button">
                <FaAws className="min-h-6 min-w-6" />
                <span>AWS Marketplace</span>
              </Button2>
              <Button2 type="button">
                <SiGooglecloud className="min-h-6 min-w-6" />
                <span>Google Cloud</span>
              </Button2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
