import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkDeck from "@/components/WorkDeck";
import HowItWorks from "@/components/HowItWorks";
import ModelDifference from "@/components/ModelDifference";
import Pricing from "@/components/Pricing";
import CostFlow from "@/components/CostFlow";
import CustomRate from "@/components/CustomRate";
import EnquiryRules from "@/components/EnquiryRules";
import Protection from "@/components/Protection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <WorkDeck />
        <HowItWorks />
        <ModelDifference />
        <Pricing />
        <CostFlow />
        <CustomRate />
        <EnquiryRules />
        <Protection />
        <Contact />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
