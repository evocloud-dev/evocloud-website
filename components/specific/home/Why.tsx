import React from "react";
import H1 from "@/components/ui/headers/H1";
import H4 from "@/components/ui/headers/H4";
import Button3 from "@/components/ui/buttons/cta/Button3";
import Button4 from "@/components/ui/buttons/cta/Button4";
import SectionCard from "@/components/general/SectionCard";
import P1 from "@/components/ui/paragraphs/P1";

export default function Why() {
  return (
    <>
      <div className="flex items-center justify-center bg-linear-to-b from-accent to-primary px-4 py-6 md:px-4 md:py-16">
        <div className="max-w-screen-xl w-full mx-auto space-y-10">
          <H1 className="text-center">Why did we build EvoCloud?</H1>
          <SectionCard className="">
            <div className="md:basis-[60%]">
              <P1 className="text-foreground mb-6">
                For nearly 20 years, we’ve helped our customers build platforms
                so they can accelerate digital transformation. Our customers
                deliver thousands of APIs and applications on these platforms.
              </P1>
              <P1 className="text-foreground mb-6">
                We know building and maintaining platforms is a never-ending
                task that costs a lot of money and usually doesn’t offer the
                right experience for developers.
              </P1>
              <P1 className="text-foreground mb-6">
                We built Choreo so you don’t have to.
              </P1>
              <div className="flex flex-wrap gap-4 md:mb-10">
                <Button3 type="button" className="">
                  Get Started For Free
                </Button3>

                <Button4 type="button" className="">
                  Enterprise Support
                </Button4>
              </div>
            </div>
            <div className="md:basis-[40%]">
              <img
                src="https://wso2.cachefly.net/wso2/sites/all/2023/choreo/why-wso2-important.webp"
                alt=""
              />
            </div>
          </SectionCard>

          <H1 className="text-center">Here’s What Our Customers Say</H1>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 md:grid-rows-5 gap-4 md:gap-6">
            <div className="md:col-span-2 md:row-span-2">
              <iframe
                className="w-full aspect-video rounded-xl"
                src="https://www.youtube.com/embed/6oTurM7gESE"
                title="WSO2 Customer Spotlight"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="md:col-span-2 md:row-span-3 md:col-start-3">
              <Testimonial
                testimony="“Testimonial quote goes here. This is a short paragraph describing the user's experience.”"
                name="Michael Cocca"
                title="Integration Architect"
                logo="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreo/logo_university-of-edinburgh.webp"
              />
            </div>
            <div className="md:col-span-2 md:row-span-2 md:col-start-5">
              <iframe
                className="w-full aspect-video rounded-xl"
                src="https://www.youtube.com/embed/6oTurM7gESE"
                title="WSO2 Customer Spotlight"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="md:col-span-2 md:row-span-3 md:row-start-3">
              <Testimonial
                testimony="“Testimonial quote goes here. This is a short paragraph describing the user's experience.”"
                name="Michael Cocca"
                title="Integration Architect"
                logo="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreo/logo_university-of-edinburgh.webp"
              />
            </div>
            <div className="md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4">
              <iframe
                className="w-full aspect-video rounded-xl"
                src="https://www.youtube.com/embed/6oTurM7gESE"
                title="WSO2 Customer Spotlight"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-3">
              <Testimonial
                testimony="“Testimonial quote goes here. This is a short paragraph describing the user's experience.”"
                name="Michael Cocca"
                title="Integration Architect"
                logo="https://wso2.cachefly.net/wso2/sites/all/image_resources/choreo/logo_university-of-edinburgh.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Testimonial({
  testimony,
  name,
  title,
  logo,
}: {
  testimony?: string;
  name?: string;
  title?: string;
  logo?: string;
}) {
  return (
    <div className="flex flex-col justify-between h-full rounded-xl shadow-md px-3 py-4 md:px-6 md:py-8 text-center bg-linear-to-b from-from to-to text-foreground border border-border">
      <H4 className="text-center text-primary mb-4">❝</H4>

      <P1 className="text-center leading-relaxed tracking-wide mb-6">
        {testimony}
      </P1>

      <div className="mt-auto">
        <P1 className="text-center font-semibold tracking-wide">{name}</P1>
        <P1 className="text-center text-sm tracking-wide text-muted-foreground">
          {title}
        </P1>

        <div className="mt-2">
          <img
            src={logo}
            alt="Company Logo"
            className="mx-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
