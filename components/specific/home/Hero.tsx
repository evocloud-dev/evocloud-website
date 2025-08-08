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
      <section className="relative h-max md:h-screen bg-cover bg-center px-4 py-6 md:px-4 md:py-12 flex items-center justify-center bg-linear-to-b from-accent to-primary text-background">
        <FaShield className="absolute opacity-25 text-[10rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none hidden md:block" />
        <FaShield className="absolute opacity-20 text-[15rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none hidden md:block" />
        <FaShield className="absolute opacity-15 text-[20rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none hidden md:block" />
        <FaShield className="absolute opacity-10 text-[25rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none hidden md:block" />
        <FaShield className="absolute opacity-5 text-[30rem] top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-background z-0 pointer-events-none md:hidden" />

        <div className="md:max-w-screen-xl z-10">
          <div className="md:max-w-[60%]">
            <H3 className="mb-4">Boost Agility, Reduce Time to Market, Scale Efficiently while Minimizing Cost. </H3>

            <H1 className="mb-10">
              EvoCloud Enterprise-grade Cloud Native Platform
            </H1>

            <H2 className="mb-4">
              A platform built around multi-clustering, multi-tenancy, and hybrid-IaaS with a greater focus on Security, AI workloads, and Autonomous operation in disconnected environment.
              Leverage our provided self-service tools and automated workflows to boost agility, reduce infrastructure cost, and develop SaaS applications faster on a secure, scalable, and self-recovering platform.
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
                Contact Us
              </Button2>
            </div>

            <H2 className="mb-4">Also available on:</H2>

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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className="fill-primary"
          // fill="#0099ff"
          fillOpacity="1"
          d="M0,128L34.3,133.3C68.6,139,137,149,206,160C274.3,171,343,181,411,160C480,139,549,85,617,80C685.7,75,754,117,823,122.7C891.4,128,960,96,1029,96C1097.1,96,1166,128,1234,144C1302.9,160,1371,160,1406,160L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
