import Hero from "@/components/specific/about/Hero";
import Mission from "@/components/specific/about/Mission";
import Team from "@/components/specific/about/Team";
import Join from "@/components/specific/about/Join";
// import Features from "@/components/specific/home/Features";
// import Why from "@/components/specific/home/Why";
// import Learn from "@/components/specific/home/Learn";
// import Signup from "@/components/specific/home/Signup";

export default function Home() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      <Mission />
      <Team />
      <Join />
      {/* <Features/> */}
      {/* <Why/> */}
      {/* <Learn/> */}
      {/* <Signup/> */}
    </div>
  );
}
