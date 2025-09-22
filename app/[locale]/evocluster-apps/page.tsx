import Hero from "@/components/specific/evocluster-apps/Hero";
import Evocluster from "@/components/specific/evocluster-apps/EvoCluster";
import Signup from "@/components/specific/evocluster-apps/Signup";
// import Features from "@/components/specific/evocloud/Features";
// import Why from "@/components/specific/evocloud/Why";
// import Learn from "@/components/specific/evocloud/Learn";

export default function Page() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      <Evocluster />
      <Signup />
      {/* <Evocloud/> */}
      {/* <Features/> */}
      {/* <Why/> */}
      {/* <Learn/> */}
    </div>
  );
}
