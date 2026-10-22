import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WorkDeck from "@/components/WorkDeck";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import ModelDifference from "@/components/ModelDifference";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import LocalHub from "@/components/LocalHub";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";

export const metadata: Metadata = {
  title: "Best Website Designer in Hyderabad",
  description:
    "Looking for the best website designer in Hyderabad? Webworkflo's designs fast, modern, and high-converting websites for businesses, clinics, and startups across Hyderabad.",
  keywords: [
    "best website designer in hyderabad",
    "website designers in hyderabad",
    "website designer near me",
    "freelance web designer hyderabad",
    "web developer hyderabad",
    "website designer hitec city",
    "website designer madhapur",
    "website designer gachibowli",
  ],
  alternates: {
    canonical: "/website-designer-hyderabad",
  },
  openGraph: {
    title: "Best Website Designer in Hyderabad | Webworkflo's",
    description:
      "Webworkflo's designs fast, bespoke Next.js websites for businesses across Hyderabad. Zero agency bloat, direct founder collaboration, sub-0.5s speeds.",
    url: "https://webworkflows-owh1.vercel.app/website-designer-hyderabad",
    siteName: "Webworkflo's",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/LOGO.jpg",
        width: 1200,
        height: 630,
        alt: "Best Website Designer in Hyderabad - Webworkflo's",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Website Designer in Hyderabad | Webworkflo's",
    description:
      "Webworkflo's designs fast, bespoke Next.js websites for businesses across Hyderabad. Zero agency bloat, sub-0.5s speeds.",
    images: ["/images/LOGO.jpg"],
  },
};

export default function HyderabadWebDesignerPage() {
  return (
    <>
      <Navbar />
      <main id="top">
        {/* Dedicated SEO Hero Section */}
        <section
          className="sec"
          style={{
            paddingTop: "140px",
            paddingBottom: "60px",
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent 70%)",
          }}
        >
          <div className="wrap" style={{ textAlign: "center", maxWidth: "900px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.25)",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "var(--accent)",
                marginBottom: "24px",
              }}
            >
              <span>📍 Hyderabad, Telangana</span>
              <span>•</span>
              <span>Google Verified Business</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                color: "var(--ink)",
                marginBottom: "20px",
              }}
            >
              Best Website Designer in Hyderabad for Ambitious Businesses
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                lineHeight: 1.6,
                color: "var(--muted)",
                maxWidth: "720px",
                margin: "0 auto 36px auto",
              }}
            >
              Stop losing customers to slow, outdated websites. We design and build custom, sub-0.5s Next.js websites that rank high on Google and convert visitors into high-paying clients across Hyderabad.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "48px",
              }}
            >
              <a
                href="https://wa.me/919959896378?text=Hi%20Webworkflo%27s%2C%20I%20am%20looking%20for%20the%20best%20website%20designer%20in%20Hyderabad."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
                style={{
                  padding: "14px 28px",
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                Discuss Your Project on WhatsApp
              </a>
              <a
                href="#pricing"
                className="btn"
                style={{
                  padding: "14px 28px",
                  fontSize: "1rem",
                  background: "var(--surface)",
                  border: "1px solid var(--line-strong)",
                  color: "var(--ink)",
                }}
              >
                View Packages &amp; Pricing &darr;
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "16px",
                padding: "20px",
                background: "var(--surface)",
                border: "1px solid var(--line-strong)",
                borderRadius: "16px",
                textAlign: "left",
              }}
            >
              <div>
                <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--ink)" }}>
                  &lt; 0.5s Speed
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                  Core Web Vitals 100/100
                </div>
              </div>
              <div>
                <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--ink)" }}>
                  5 to 10 Days
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                  Rapid Launch Delivery
                </div>
              </div>
              <div>
                <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--ink)" }}>
                  100% Direct
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                  Founder-Led Collaboration
                </div>
              </div>
              <div>
                <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--ink)" }}>
                  Built-in SEO
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                  Google Maps &amp; Schema Ready
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Client Proof */}
        <WorkDeck />

        {/* Real Hyderabad Case Study */}
        <CaseStudy />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Fixed vs Pay-Per-Enquiry */}
        <ModelDifference />

        {/* Workflow */}
        <HowItWorks />

        {/* Pricing */}
        <Pricing />

        {/* Hyper-Local Hyderabad Hub */}
        <LocalHub />

        {/* FAQ with Google FAQPage Schema */}
        <FAQ />

        {/* Contact Form */}
        <Contact />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
