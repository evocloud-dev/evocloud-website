import Hero from "@/components/specific/application-catalog/Hero";
import AppCatalog from "@/components/specific/application-catalog/AppCatalog"
import Signup from "@/components/specific/application-catalog/Signup";
// import Features from "@/components/specific/evocloud/Features";
// import Why from "@/components/specific/evocloud/Why";
// import Learn from "@/components/specific/evocloud/Learn";

export default function Page() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      <AppCatalog />
      <Signup />
      {/* <Evocloud/> */}
      {/* <Features/> */}
      {/* <Why/> */}
      {/* <Learn/> */}
    </div>
  );
}
