import Hero from "@/components/specific/application-pricing/Hero";
import Benefits from "@/components/specific/application-pricing/Benefits";
import FlexiblePricing from "@/components/specific/application-pricing/FlexiblePricing";
import Signup from "@/components/specific/application-pricing/Signup";

export default function Pricing() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      <Benefits />
      <FlexiblePricing />
      <Signup />
    </div>
  );
}
