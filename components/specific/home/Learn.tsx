import Link from "next/link";
import React from "react";
import Card, { Cards } from "@/components/general/Card";
import H1 from "@/components/ui/headers/H1";
import OL from "@/components/ui/lists/OL";
import Button3 from "@/components/ui/buttons/cta/Button3";
import Button4 from "@/components/ui/buttons/cta/Button4";
import P1 from "@/components/ui/paragraphs/P1";

export default function Learn() { 
  return (
    <div className="flex items-center justify-center px-4 py-6 md:px-4 md:py-12">
      <div className="max-w-screen-xl w-full mx-auto space-y-10">
        <H1 className="text-foreground text-center">Learn More</H1>

        <Cards className="lg:grid-cols-2">
          <Card className="min-h-80">
            <P1 className="text-primary">What is Platformless?</P1>
            <P1 className="text-foreground text-sm mb-6 leading-relaxed tracking-wide">
              Platformless allows enterprise developers to streamline their
              development process and focus on building apps that deliver value
              to users. This doesn’t mean platforms won’t exist. It just means
              that the complexities of a platform are now hidden from the
              application developers.
            </P1>

            <div className="flex flex-wrap gap-4">
              <Button3 type="button">Learn More</Button3>
              <Button4 type="button">Read Manifesto</Button4>
            </div>
          </Card>
          <Card className="min-h-80">
            <P1 className="text-primary">
              Reasons Why You Shouldn’t Build Your Own Platform
            </P1>
            <OL>
              <li className="">Slows product launch</li>
              <li className="">
                Requires significant effort to implement best practices
              </li>
              <li className="">
                Involves complex technology and specialized skills
              </li>
              <li className="">Demands a committed team</li>
              <li className="">High costs and risks</li>
            </OL>

            <div className="flex flex-wrap gap-4">
              <Button4 type="button">Read Blog</Button4>
            </div>
          </Card>
        </Cards>

        <H1 className="text-foreground text-center">Security and Compliance</H1>

        <P1 className="text-foreground text-center max-w-xl mx-auto">
          At WSO2, we give you peace of mind that our cloud deployments adhere
          to industry standards and best practices for data protection and a
          secure app development experience. See how WSO2 handles{" "}
          <Link href="#" className="underline">
            Security and Compliance.
          </Link>
        </P1>
      </div>
    </div>
  );
}
