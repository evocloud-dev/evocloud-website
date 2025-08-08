import Hero from "@/components/specific/home/Hero";
import Features from "@/components/specific/home/Features";
import Why from "@/components/specific/home/Why";
import Learn from "@/components/specific/home/Learn";
import Signup from "@/components/specific/home/Signup";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Features/>
      <Why/>
      <Learn/>
      <Signup/>
    </div>
  );
}
