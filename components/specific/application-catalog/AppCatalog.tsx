import React from "react";
import H1 from "@/components/ui/headers/H1";
import H4 from "@/components/ui/headers/H4";
import Button3 from "@/components/ui/buttons/cta/Button3";
import Button4 from "@/components/ui/buttons/cta/Button4";
import SectionCard from "@/components/general/SectionCard";
import P1 from "@/components/ui/paragraphs/P1";


export default function AppCatalog() {
  return (
    <>
      <div className="flex items-center justify-center bg-linear-to-b from-accent to-primary px-4 py-6 md:px-4 md:py-16">
        <div className="max-w-screen-xl w-full mx-auto space-y-10">
          <H1 className="text-center">Why did we build App Catalog?</H1>
        </div>
      </div>
    </>
  );
}

