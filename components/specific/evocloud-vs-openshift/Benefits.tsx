import React from "react";
import Card, { Cards } from "@/components/general/Card";
import H1 from "@/components/ui/headers/H1";
import P1 from "@/components/ui/paragraphs/P1";
import { GrSystem } from "react-icons/gr";
import { CiClock2 } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";

export default function Mission() {
  return (
    <div className="flex items-center justify-center px-4 py-6 md:px-4 md:py-16">
      <div className="max-w-screen-xl w-full mx-auto space-y-10">
        <H1 className="text-primary text-center">
          The future of devOps redefined
        </H1>

        <Cards className="md:grid-cols-3">
          <Card className="min-h-60">
            <P1 className="text-primary flex flex-row items-center gap-2">
              <GrSystem size={25} />
              <span>Totally flexible infrastructure</span>
            </P1>
            <div className="mb-6">
              <P1 className="text-foreground text-sm flex flex-row items-center gap-2 leading-relaxed tracking-wide">
                <TiTickOutline size={25} />{" "}
                <span>Scale up or down instantly - no lock ins</span>
              </P1>
              <P1 className="text-foreground text-sm flex flex-row items-center gap-2 leading-relaxed tracking-wide">
                <TiTickOutline size={25} />{" "}
                <span>BYO infra option on all plans</span>
              </P1>
              <P1 className="text-foreground text-sm flex flex-row items-center gap-2 leading-relaxed tracking-wide">
                <TiTickOutline size={25} />{" "}
                <span>Combine up to 7 cloud providers</span>
              </P1>
              <P1 className="text-foreground text-sm flex flex-row items-center gap-2 leading-relaxed tracking-wide">
                <TiTickOutline size={25} /> <span>138+ regions globally</span>
              </P1>
            </div>
          </Card>
          <Card className="min-h-60">
            <P1 className="text-primary flex flex-row items-center gap-2">
              <CiClock2 size={25} /> <span>Save time and money</span>
            </P1>
            <div className="mb-6">
              <P1 className="text-foreground text-sm flex flex-row items-center gap-2 leading-relaxed tracking-wide">
                <TiTickOutline size={25} />{" "}
                <span>Scale up or down instantly - no lock ins</span>
              </P1>
              <P1 className="text-foreground text-sm flex flex-row items-center gap-2 leading-relaxed tracking-wide">
                <TiTickOutline size={25} />{" "}
                <span>BYO infra option on all plans</span>
              </P1>
              <P1 className="text-foreground text-sm flex flex-row items-center gap-2 leading-relaxed tracking-wide">
                <TiTickOutline size={25} />{" "}
                <span>Combine up to 7 cloud providers</span>
              </P1>
              <P1 className="text-foreground text-sm flex flex-row items-center gap-2 leading-relaxed tracking-wide">
                <TiTickOutline size={25} /> <span>138+ regions globally</span>
              </P1>
            </div>
          </Card>
          <Card className="min-h-60">
            <P1 className="text-primary flex flex-row items-center gap-2">
              <IoShieldCheckmarkOutline size={25} />
              <span>Enterprise grade services on all plans</span>
            </P1>
            <div className="mb-6">
              <P1 className="text-foreground text-sm flex flex-row items-center gap-2 leading-relaxed tracking-wide">
                <TiTickOutline size={25} />{" "}
                <span>Scale up or down instantly - no lock ins</span>
              </P1>
              <P1 className="text-foreground text-sm flex flex-row items-center gap-2 leading-relaxed tracking-wide">
                <TiTickOutline size={25} />{" "}
                <span>BYO infra option on all plans</span>
              </P1>
              <P1 className="text-foreground text-sm flex flex-row items-center gap-2 leading-relaxed tracking-wide">
                <TiTickOutline size={25} />{" "}
                <span>Combine up to 7 cloud providers</span>
              </P1>
              <P1 className="text-foreground text-sm flex flex-row items-center gap-2 leading-relaxed tracking-wide">
                <TiTickOutline size={25} /> <span>138+ regions globally</span>
              </P1>
            </div>
          </Card>
        </Cards>
      </div>
    </div>
  );
}
