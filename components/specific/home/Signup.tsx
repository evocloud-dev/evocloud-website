import React from "react";
import H1 from "@/components/ui/headers/H1";
import Button1 from "@/components/ui/buttons/cta/Button1";
import Button2 from "@/components/ui/buttons/cta/Button2";

export default function Signup() {
  return (
    <>
      <div className="flex items-center justify-center bg-linear-to-b from-accent to-primary px-4 py-6 md:px-4 md:py-16">
        <div className="max-w-screen-xl w-full mx-auto space-y-10">
          <H1 className="text-center">Sign Up and Get Started</H1>
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4">
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
        </div>
      </div>
    </>
  );
}
