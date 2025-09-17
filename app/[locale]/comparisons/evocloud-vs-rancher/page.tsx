import Hero from "@/components/specific/evocloud-vs-rancher/Hero";
// import Benefits from "@/components/specific/evocloud-vs-rancher/Benefits";
import Compare from "@/components/specific/evocloud-vs-rancher/Compare";
import StartFreeTrial from "@/components/specific/evocloud-vs-rancher/StartFreeTrial";

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
