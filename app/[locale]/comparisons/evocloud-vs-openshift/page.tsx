import Hero from "@/components/specific/evocloud-vs-openshift/Hero";
// import Benefits from "@/components/specific/evocloud-vs-openshift/Benefits";
import Compare from "@/components/specific/evocloud-vs-openshift/Compare";
import StartFreeTrial from "@/components/specific/evocloud-vs-openshift/StartFreeTrial";

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
