import React from "react";
import Image from "next/image";
import H1 from "@/components/ui/headers/H1";
import H2 from "@/components/ui/headers/H2";
import H3 from "@/components/ui/headers/H3";
import Button1 from "@/components/ui/buttons/cta/Button1";
import Button2 from "@/components/ui/buttons/cta/Button2";
import { IoLogoMicrosoft } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <>
      <section className="relative h-max md:h-[75vh] px-4 py-6 md:py-16 flex items-center justify-center bg-white text-primary-foreground">
        <div className="max-w-screen-xl w-full mx-auto space-y-10">
            <H3 className="mb-4">
              {t("test")}
            </H3>

            <H1 className="mb-10">
              EvoCloud Enterprise-grade Cloud Native Platform
            </H1>

            <H2 className="mb-4">
              EvoCloud aims to provide an open-source alternative to OpenShift,
              with built-in composable components, runtimes, and orchestrators.
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
        <Image
           src="/images/evocloud-features.webp"
           width={640}
           height={650}
           alt="EvoCloud Features"
           className=""
        />
      </section>
    </>
  );
}
