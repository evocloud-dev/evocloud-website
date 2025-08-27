import React from "react";
import Card, { Cards } from "@/components/general/Card";
import H1 from "@/components/ui/headers/H1";
import P1 from "@/components/ui/paragraphs/P1";

export default function Mission() {
  return (
    <div className="flex items-center justify-center px-4 py-6 md:px-4 md:py-16">
      <div className="max-w-screen-xl w-full mx-auto space-y-10">
        <H1 className="text-primary text-center">Security and Compliance</H1>

        <P1 className="text-foreground text-center max-w-2xl mx-auto">
          Improve the open-source ecosystem by providing fully managed services
          for a large catalog of curated software, contributing to OSS projects,
          and also creating a recurring revenue for OSS authors.
        </P1>

        <Cards className="md:grid-cols-3">
          <Card className="min-h-64">
            <P1 className="text-primary">Simplicity</P1>
            <P1 className="text-foreground text-sm mb-6 leading-relaxed tracking-wide">
              If maintaining open-source software is your passion, you should
              probably consider joining our team. For the rest of us, there’s
              Elestio: we make open-source software simple and safe.
            </P1>
          </Card>
          <Card className="min-h-64">
            <P1 className="text-primary">Community</P1>
            <P1 className="text-foreground text-sm mb-6 leading-relaxed tracking-wide">
              We can only exist inside a vibrant open-source community of
              high-quality, well maintained software. We do our part to
              contribute via our revenue sharing program and codebase
              contributions.
            </P1>
          </Card>
          <Card className="min-h-64">
            <P1 className="text-primary">Empowerment</P1>
            <P1 className="text-foreground text-sm mb-6 leading-relaxed tracking-wide">
              We empower users with choice: Choose your software, hosting
              provider, region, and enjoy simple, transparent, and predictable
              pricing. No more surprise bills, no more feature barriers.
            </P1>
          </Card>
        </Cards>
      </div>
    </div>
  );
}
