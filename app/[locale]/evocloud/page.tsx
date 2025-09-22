import Hero from "@/components/specific/evocloud/Hero";
import Evocloud from "@/components/specific/evocloud/Evocloud";
import Signup from "@/components/specific/evocloud/Signup";
// import Features from "@/components/specific/evocloud/Features";
// import Why from "@/components/specific/evocloud/Why";
// import Learn from "@/components/specific/evocloud/Learn";

export default function Page() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      <Evocloud />
      <Signup />
      {/* <Features/> */}
      {/* <Why/> */}
      {/* <Learn/> */}
    </div>
  );
}
