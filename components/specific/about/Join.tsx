import React from "react";
import H1 from "@/components/ui/headers/H1";
import Button1 from "@/components/ui/buttons/cta/Button1";
import Button2 from "@/components/ui/buttons/cta/Button2";
import P1 from "@/components/ui/paragraphs/P1";

export default function Join() {
  return (
    <>
      <div className="flex items-center justify-center bg-linear-to-b from-accent to-primary px-4 py-6 md:px-4 md:py-16">
        <div className="max-w-screen-xl w-full mx-auto space-y-10">
          <H1 className="text-center">Join our team</H1>
          <P1 className="text-foreground text-center max-w-2xl mx-auto">
            If you love six-sigma uptime metrics, building bullet-proof DevOps
            automations, and working with world-class peers on a win-win-win
            product, get in touch!
          </P1>
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4">
            <Button1
              // type="button"
              className=""
            >
              Apply
            </Button1>

            <Button2
              // type="button"
              className=""
            >
              Contact
            </Button2>
          </div>
        </div>
      </div>
    </>
  );
}
