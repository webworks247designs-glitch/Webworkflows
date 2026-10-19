"use client";

import { useState } from "react";
import Image from "next/image";
import { getWhatsAppGrowthPlanLink, trackFunnelEvent } from "@/lib/analytics";

interface SimulatorExample {
  id: string;
  name: string;
  launch: string;
  hosting: string;
  enquiryType: string;
  rate: string;
  leads: string;
  totalCharge: string;
  estimatedValue: string;
  image: string;
  exampleText: string;
}

const SIMULATOR_EXAMPLES: SimulatorExample[] = [
  {
    id: "restaurant",
    name: "Dining and Hospitality",
    launch: "₹4,749",
    hosting: "Hosting Included",
    enquiryType: "Table reservation / order request",
    rate: "₹100",
    leads: "15",
    totalCharge: "₹1,500",
    estimatedValue: "₹15,000+",
    image: "/images/boathouse1.png",
    exampleText: "If 15 table reservations or dining orders are generated, your enquiry investment is ₹1,500 for over ₹15,000 in dining revenue.",
  },
  {
    id: "salon",
    name: "Luxury Grooming and Salon",
    launch: "₹4,749",
    hosting: "Hosting Included",
    enquiryType: "Haircut and grooming appointment",
    rate: "₹80",
    leads: "25",
    totalCharge: "₹2,000",
    estimatedValue: "₹18,000+",
    image: "/images/salon1.png",
    exampleText: "If 25 grooming appointments are booked through the website, your enquiry cost is ₹2,000, bringing in repeat clients worth thousands.",
  },
  {
    id: "bakery",
    name: "Artisanal Bakery and Cafe",
    launch: "₹4,749",
    hosting: "Hosting Included",
    enquiryType: "Custom cake / event catering",
    rate: "₹120",
    leads: "10",
    totalCharge: "₹1,200",
    estimatedValue: "₹22,000+",
    image: "/images/bakery-showcase.jpg",
    exampleText: "High-ticket custom cakes or event catering enquiries at ₹120 each generate substantial profit margins on every confirmed bake.",
  },
  {
    id: "clinic",
    name: "Healthcare and Clinical",
    launch: "₹4,749",
    hosting: "Hosting Included",
    enquiryType: "Patient consultation booking",
    rate: "₹150",
    leads: "20",
    totalCharge: "₹3,000",
    estimatedValue: "₹30,000+",
    image: "/images/clinic-showcase.jpg",
    exampleText: "A clinic charging ₹1,500 per session pays ₹150 for a patient who often requires multiple recurring follow-up visits.",
  },
  {
    id: "ecommerce",
    name: "Boutique and Specialty Retail",
    launch: "₹4,749",
    hosting: "Hosting Included",
    enquiryType: "Curated order / bulk enquiry",
    rate: "₹100",
    leads: "30",
    totalCharge: "₹3,000",
    estimatedValue: "₹45,000+",
    image: "/images/ecommerce-showcase.jpg",
    exampleText: "Bespoke product orders and bulk corporate gifting requests generate high-margin turnover with direct UPI payments.",
  },
];

export default function Pricing() {
  const [modelType, setModelType] = useState<"fixed" | "enquiry">("fixed");
  const [activeSimIdx, setActiveSimIdx] = useState(0);
  const [isSwitchingSim, setIsSwitchingSim] = useState(false);
  const curSim = SIMULATOR_EXAMPLES[activeSimIdx];

  const handleToggle = (type: "fixed" | "enquiry") => {
    setModelType(type);
    trackFunnelEvent("pricing_toggle", { selected_model: type });
  };

  const handleSimChange = (idx: number) => {
    setIsSwitchingSim(true);
    setActiveSimIdx(idx);
    setTimeout(() => setIsSwitchingSim(false), 140);
  };

  return (
    <section className="sec" id="pricing" style={{ paddingTop: 0 }}>
      <div className="wrap">
        
        {/* Section Header */}
        <div className="sec-head" style={{ textAlign: "center", marginInline: "auto", maxWidth: "720px" }}>
          <div className="badge-tag" style={{ marginInline: "auto", marginBottom: "16px" }}>
            <span>Transparent Investment Models</span>
          </div>
          <h2>Straightforward, High-Yield Pricing</h2>
          <p>
            Choose between a comprehensive fixed website build or our risk-free, performance-aligned enquiry model.
          </p>
        </div>

        {/* Model Toggle Switcher */}
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            marginBottom: "24px" 
          }}
        >
          <div 
            style={{ 
              display: "inline-flex", 
              background: "var(--surface)", 
              border: "1px solid var(--line-strong)", 
              borderRadius: "4px", 
              padding: "4px",
              gap: "4px"
            }}
          >
            <button
              type="button"
              onClick={() => handleToggle("fixed")}
              style={{
                padding: "10px 22px",
                borderRadius: "4px",
                border: "none",
                background: modelType === "fixed" ? "var(--cobalt)" : "transparent",
                color: modelType === "fixed" ? "var(--on-cobalt)" : "var(--muted)",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "background 0.15s ease, color 0.15s ease",
              }}
            >
              Fixed Website Package
            </button>
            <button
              type="button"
              onClick={() => handleToggle("enquiry")}
              style={{
                padding: "10px 22px",
                borderRadius: "4px",
                border: "none",
                background: modelType === "enquiry" ? "var(--cobalt)" : "transparent",
                color: modelType === "enquiry" ? "var(--on-cobalt)" : "var(--muted)",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "background 0.15s ease, color 0.15s ease",
              }}
            >
              Enquiry-Based Performance Model
            </button>
          </div>
        </div>

        {/* TAB 1: FIXED WEBSITE PACKAGE (STARTING FROM RS 8999) */}
        {modelType === "fixed" && (
          <div 
            style={{ 
              maxWidth: "880px", 
              margin: "0 auto", 
              background: "var(--surface)", 
              border: "1px solid var(--line-strong)", 
              borderRadius: "4px", 
              padding: "clamp(24px, 4vw, 40px)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px", borderBottom: "1px solid var(--line)", paddingBottom: "18px" }}>
              <div>
                <span style={{ textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.8rem", fontWeight: 700, color: "var(--cobalt)", display: "block", marginBottom: "6px" }}>
                  Flagship Custom Website Build
                </span>
                <h3 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", fontWeight: 800, margin: 0, letterSpacing: "-0.03em", color: "var(--ink)", lineHeight: 1 }}>
                  Starting from ₹8,999
                </h3>
                <p style={{ marginTop: "8px", color: "var(--muted)", fontSize: "1rem" }}>
                  Complete production launch with zero recurring monthly platform retainers.
                </p>
              </div>
              <div style={{ background: "var(--bg)", border: "1px solid var(--line)", padding: "6px 14px", borderRadius: "4px" }}>
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--ink)" }}>Standard Delivery: 5 to 7 Days</span>
              </div>
            </div>

            {/* Structured Deliverables List */}
            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted)", marginBottom: "14px" }}>
                Deliverables Included In Build
              </h4>

              <div style={{ display: "grid", gap: "18px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ fontWeight: 800, color: "var(--cobalt)", fontSize: "0.9rem", minWidth: "24px" }}>01</span>
                  <div>
                    <strong style={{ color: "var(--ink)", display: "block", fontSize: "1.05rem" }}>Bespoke UI/UX Architecture</strong>
                    <p style={{ color: "var(--muted)", fontSize: "0.92rem", marginTop: "3px" }}>
                      Handcrafted layout engineered around conversion psychology and visitor retention. Zero cookie-cutter templates.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ fontWeight: 800, color: "var(--cobalt)", fontSize: "0.9rem", minWidth: "24px" }}>02</span>
                  <div>
                    <strong style={{ color: "var(--ink)", display: "block", fontSize: "1.05rem" }}>High-Speed Next.js and Mobile-First Codebase</strong>
                    <p style={{ color: "var(--muted)", fontSize: "0.92rem", marginTop: "3px" }}>
                      Engineered for sub-second page loads, fluid responsiveness on all mobile devices, and high Core Web Vitals scores.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ fontWeight: 800, color: "var(--cobalt)", fontSize: "0.9rem", minWidth: "24px" }}>03</span>
                  <div>
                    <strong style={{ color: "var(--ink)", display: "block", fontSize: "1.05rem" }}>Instant WhatsApp Lead Flow and CRM Capture</strong>
                    <p style={{ color: "var(--muted)", fontSize: "0.92rem", marginTop: "3px" }}>
                      Automated visitor routing directly to your phone so you never miss a prospective paying customer.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ fontWeight: 800, color: "var(--cobalt)", fontSize: "0.9rem", minWidth: "24px" }}>04</span>
                  <div>
                    <strong style={{ color: "var(--ink)", display: "block", fontSize: "1.05rem" }}>Complete Local SEO and Semantic Schema Setup</strong>
                    <p style={{ color: "var(--muted)", fontSize: "0.92rem", marginTop: "3px" }}>
                      Optimized meta tags, OpenGraph previews, and Google Search indexing structure to attract organic inquiries.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ fontWeight: 800, color: "var(--cobalt)", fontSize: "0.9rem", minWidth: "24px" }}>05</span>
                  <div>
                    <strong style={{ color: "var(--ink)", display: "block", fontSize: "1.05rem" }}>100% Full Source Code and Domain Ownership</strong>
                    <p style={{ color: "var(--muted)", fontSize: "0.92rem", marginTop: "3px" }}>
                      You own every line of code, asset, domain registration, and hosting environment outright with no lock-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Area */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", paddingTop: "24px", borderTop: "1px solid var(--line)" }}>
              <a
                href={getWhatsAppGrowthPlanLink("FixedPackage_8999")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
                style={{ padding: "14px 28px", fontSize: "1.05rem" }}
                onClick={() => trackFunnelEvent("cta_click", { source: "pricing_fixed_8999" })}
              >
                <svg className="ic"><use href="#i-wa" /></svg>
                Book Your ₹8,999 Website Build Slot
              </a>
              <span style={{ color: "var(--muted)", fontSize: "0.88rem" }}>
                Strictly limited to 4 client builds per calendar month.
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: ENQUIRY-BASED MODEL WITH INTERACTIVE SIMULATOR */}
        {modelType === "enquiry" && (
          <div>
            {/* Model Summary */}
            <div 
              style={{ 
                maxWidth: "880px", 
                margin: "0 auto 20px", 
                background: "var(--surface)", 
                border: "1px solid var(--line-strong)", 
                borderRadius: "4px", 
                padding: "20px 24px" 
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
                <div>
                  <span style={{ color: "var(--muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>Step 1: Launch Cost</span>
                  <strong style={{ fontSize: "1.4rem", color: "var(--ink)" }}>₹4,749 one-time</strong>
                  <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "4px" }}>Covers design, development, DNS setup and launch.</p>
                </div>
                <div>
                  <span style={{ color: "var(--muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>Step 2: Cloud Hosting</span>
                  <strong style={{ fontSize: "1.4rem", color: "var(--ink)" }}>Hosting Included</strong>
                  <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "4px" }}>High-speed global CDN and SSL included at ₹0 extra fee.</p>
                </div>
                <div>
                  <span style={{ color: "var(--muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>Step 3: Performance</span>
                  <strong style={{ fontSize: "1.4rem", color: "var(--wa)" }}>Pay per lead</strong>
                  <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "4px" }}>Zero charge for casual visitors. Pay only for real customer inquiries.</p>
                </div>
              </div>
            </div>

            {/* Interactive Model Simulator */}
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "6px" }}>Interactive Model Simulator</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.92rem" }}>
                Select an industry to simulate projected monthly cost versus generated client revenue:
              </p>
            </div>

            {/* Industry Selector Tabs */}
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>
              {SIMULATOR_EXAMPLES.map((ex, idx) => (
                <button
                  key={ex.id}
                  type="button"
                  onClick={() => handleSimChange(idx)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "4px",
                    border: `1px solid ${activeSimIdx === idx ? "var(--cobalt)" : "var(--line)"}`,
                    background: activeSimIdx === idx ? "var(--cobalt)" : "var(--surface)",
                    color: activeSimIdx === idx ? "var(--on-cobalt)" : "var(--ink)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {ex.name}
                </button>
              ))}
            </div>

            {/* Simulator Output Card with Skeleton Transition */}
            <div 
              style={{ 
                maxWidth: "880px", 
                margin: "0 auto", 
                background: "var(--surface)", 
                border: "1px solid var(--line-strong)", 
                borderRadius: "4px", 
                padding: "clamp(24px, 4vw, 40px)",
                minHeight: "360px"
              }}
            >
              {isSwitchingSim ? (
                <div style={{ display: "grid", gap: "16px", padding: "16px 0" }}>
                  <div className="skeleton-box" style={{ width: "35%", height: "28px" }} />
                  <div className="skeleton-text" style={{ width: "90%" }} />
                  <div className="skeleton-text" style={{ width: "75%" }} />
                  <div className="skeleton-text" style={{ width: "60%" }} />
                  <div className="skeleton-box" style={{ width: "100%", height: "90px", marginTop: "12px" }} />
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
                  
                  {/* Left: Financial Ledger */}
                  <div>
                    <h4 style={{ margin: "0 0 16px 0", fontSize: "1.3rem", color: "var(--ink)" }}>{curSim.name}</h4>
                    
                    <ul style={{ display: "grid", gap: "12px", marginBottom: "20px", borderBottom: "1px solid var(--line)", paddingBottom: "20px" }}>
                      <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ color: "var(--muted)", fontSize: "0.92rem" }}>One-time Launch:</span>
                        <span style={{ fontWeight: 700, color: "var(--ink)" }}>{curSim.launch}</span>
                      </li>
                    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ color: "var(--muted)", fontSize: "0.92rem" }}>Cloud Hosting:</span>
                      <span style={{ fontWeight: 700, color: "var(--ink)" }}>{curSim.hosting}</span>
                    </li>
                    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ color: "var(--muted)", fontSize: "0.92rem" }}>Enquiry Classification:</span>
                      <span style={{ fontWeight: 600, color: "var(--cobalt)", fontSize: "0.88rem" }}>{curSim.enquiryType}</span>
                    </li>
                    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ color: "var(--muted)", fontSize: "0.92rem" }}>Agreed Enquiry Fee:</span>
                      <span style={{ fontWeight: 700, color: "var(--ink)" }}>{curSim.rate} per lead</span>
                    </li>
                  </ul>

                  <div style={{ background: "var(--bg)", padding: "16px", borderRadius: "4px", border: "1px solid var(--line)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>Scenario: {curSim.leads} verified enquiries</span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--ink)" }}>{curSim.totalCharge} monthly fee</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "8px", borderTop: "1px solid var(--line)" }}>
                      <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--muted)" }}>Projected Business Revenue:</span>
                      <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--cobalt)" }}>{curSim.estimatedValue}</span>
                    </div>
                    <p style={{ margin: "12px 0 0", fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.5 }}>
                      {curSim.exampleText}
                    </p>
                  </div>
                </div>

                {/* Right: Live Work Preview */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ 
                    position: "relative", 
                    width: "100%", 
                    aspectRatio: "16/10", 
                    borderRadius: "4px", 
                    overflow: "hidden", 
                    border: "1px solid var(--line-strong)"
                  }}>
                    <Image
                      src={curSim.image}
                      alt={`${curSim.name} Website Sample`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Verified Live Production Site</span>
                    <a 
                      href={getWhatsAppGrowthPlanLink(`Simulator_${curSim.id}`)} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-wa btn-sm" 
                      onClick={() => trackFunnelEvent("cta_click", { source: `simulator_${curSim.id}` })}
                    >
                      Inquire for {curSim.name} →
                    </a>
                  </div>
                </div>

              </div>
            )}

            <p style={{ color: "var(--muted)", fontSize: "0.82rem", marginTop: "24px", textAlign: "center", marginInline: "auto", maxWidth: "680px" }}>
              Enquiry fee is mutually locked in writing before project kickoff. You have a 48-hour dispute window in your portal for any invalid or unreachable numbers.
            </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
