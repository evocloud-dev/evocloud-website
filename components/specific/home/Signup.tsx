import React from "react";
import H1 from "@/components/ui/headers/H1";
import Button1 from "@/components/ui/buttons/cta/Button1";
import Button2 from "@/components/ui/buttons/cta/Button2";

export default function Signup() {
  return (
    <>
      <svg
        className="border-b border-b-accent"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          className="fill-accent"
          fillOpacity="1"
          d="M0,128L34.3,133.3C68.6,139,137,149,206,160C274.3,171,343,181,411,160C480,139,549,85,617,80C685.7,75,754,117,823,122.7C891.4,128,960,96,1029,96C1097.1,96,1166,128,1234,144C1302.9,160,1371,160,1406,160L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div className="flex items-center justify-center bg-linear-to-b from-accent to-primary px-4 md:px-4">
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
