import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Code-split below-the-fold components to reduce initial JavaScript payload while preserving full SSR for SEO
const WorkDeck = dynamic(() => import("@/components/WorkDeck"));
const CaseStudy = dynamic(() => import("@/components/CaseStudy"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const ModelDifference = dynamic(() => import("@/components/ModelDifference"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const LocalHub = dynamic(() => import("@/components/LocalHub"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Fab = dynamic(() => import("@/components/Fab"));

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
        <LocalHub />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
