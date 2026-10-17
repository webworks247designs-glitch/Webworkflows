import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkDeck from "@/components/WorkDeck";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import ModelDifference from "@/components/ModelDifference";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CostFlow from "@/components/CostFlow";
import PricingVerification from "@/components/PricingVerification";
import MeeraAssistant from "@/components/MeeraAssistant";
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
        <CaseStudy />
        <Testimonials />
        <ModelDifference />
        <HowItWorks />
        <Pricing />
        <CostFlow />
        <PricingVerification />
        <MeeraAssistant />
        <Contact />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
