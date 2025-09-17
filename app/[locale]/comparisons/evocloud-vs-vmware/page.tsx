import Hero from "@/components/specific/evocloud-vs-vmware/Hero";
// import Benefits from "@/components/specific/evocloud-vs-vmware/Benefits";
import Compare from "@/components/specific/evocloud-vs-vmware/Compare";
import StartFreeTrial from "@/components/specific/evocloud-vs-vmware/StartFreeTrial";

export default function Comparison() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      {/* <Benefits /> */}
      <Compare />
      <StartFreeTrial />
    </div>
  );
}
