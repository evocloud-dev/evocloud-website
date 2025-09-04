import Hero from "@/components/specific/infrastructure-pricing/Hero";
import Benefits from "@/components/specific/infrastructure-pricing/Benefits";
import FlexiblePricing from "@/components/specific/infrastructure-pricing/FlexiblePricing";
import StartFreeTrial from "@/components/specific/infrastructure-pricing/StartFreeTrial";

export default function Pricing() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      <Benefits />
      <FlexiblePricing />
      <StartFreeTrial />
    </div>
  );
}
