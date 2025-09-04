import Hero from "@/components/specific/engineering-support/Hero";
import Benefits from "@/components/specific/engineering-support/Benefits";
import PricingComparison from "@/components/specific/engineering-support/PricingComparison";
import StartFreeTrial from "@/components/specific/engineering-support/StartFreeTrial";

export default function Pricing() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      <Benefits />
      <PricingComparison />
      <StartFreeTrial />
    </div>
  );
}
