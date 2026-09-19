import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkDeck from "@/components/WorkDeck";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
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
        <Services />
        <Process />
        <About />
        <Packages />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
