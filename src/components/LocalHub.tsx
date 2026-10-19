"use client";

import { useState, useRef, useEffect } from "react";

export default function LocalHub() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const hubs = [
    {
      area: "Hitec City & Madhapur",
      tag: "Tech & Startups",
      description:
        "High-performance Next.js websites for SaaS, AI startups, product agencies, and IT consultancies. Engineered with sub-0.5s speeds and modern aesthetics that impress investors and clients.",
      popularServices: ["SaaS Landing Pages", "Startup Portfolios", "Interactive Dashboards"],
    },
    {
      area: "Gachibowli & Financial District",
      tag: "B2B & Corporate",
      description:
        "High-trust, conversion-engineered digital platforms for B2B enterprises, corporate consultancies, real estate, and financial service firms.",
      popularServices: ["Corporate Websites", "Lead Capture Funnels", "Multi-Page Portals"],
    },
    {
      area: "Banjara Hills & Jubilee Hills",
      tag: "Clinics & Luxury Brands",
      description:
        "Elevated design for healthcare clinics, dental practices, luxury salons, cafes, and boutique retailers focused on direct WhatsApp bookings and foot traffic.",
      popularServices: ["Clinic Appointment Sites", "Digital Menus", "Luxury Brand Stores"],
    },
    {
      area: "Kondapur & Whitefields",
      tag: "Healthcare & Specialized",
      description:
        "Fast-loading medical and professional websites for diagnostic centers, dental clinics, and co-living spaces with one-tap appointment requests.",
      popularServices: ["Doctor Portals", "Service Booking", "Google Review Capture"],
    },
    {
      area: "Kukatpally & KPHB",
      tag: "High-Volume Retail & Institutes",
      description:
        "Lead-generating websites for coaching institutes, training academies, and local commercial stores seeking maximum phone inquiries and WhatsApp chats.",
      popularServices: ["Course Landing Pages", "Pay-Per-Enquiry Setups", "Local Search SEO"],
    },
    {
      area: "Secunderabad & Begumpet",
      tag: "Commercial & Trading",
      description:
        "Clean, trustworthy websites for established trade businesses, distributors, engineering agencies, and home renovation services.",
      popularServices: ["Product Catalogs", "Enquiry Forms", "Company Profile Sites"],
    },
  ];

  const updateScrollState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardEl = sliderRef.current.firstElementChild as HTMLElement;
    const cardWidth = cardEl ? cardEl.offsetWidth + 20 : 340;
    const currentIdx = Math.round(scrollLeft / cardWidth);
    setActiveIdx(Math.min(Math.max(currentIdx, 0), hubs.length - 1));
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const cardEl = sliderRef.current.firstElementChild as HTMLElement;
    const scrollAmount = cardEl ? cardEl.offsetWidth + 20 : 340;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToIdx = (idx: number) => {
    if (!sliderRef.current) return;
    const cardEl = sliderRef.current.firstElementChild as HTMLElement;
    const cardWidth = cardEl ? cardEl.offsetWidth + 20 : 340;
    sliderRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth",
    });
    setActiveIdx(idx);
  };

  // Mouse Drag to slide handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setStartScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    sliderRef.current.scrollLeft = startScrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  return (
    <section className="sec" id="hyderabad-locations">
      <div className="wrap">
        {/* Section Header with Navigation Arrows */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <div className="tag">Local Presence • Hyderabad</div>
            <h2 style={{ marginBottom: "12px" }}>
              Website Design Engineered for Every Hyderabad Hub
            </h2>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "1rem", lineHeight: 1.6 }}>
              Drag or swipe through key commercial hubs. We craft custom websites tailored to rank on Google and convert local searchers into paying clients across Hyderabad.
            </p>
          </div>

          {/* Slider Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              type="button"
              onClick={() => scrollByAmount("left")}
              disabled={!canScrollLeft}
              aria-label="Previous Hyderabad Location"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "var(--surface)",
                border: "1px solid var(--line-strong)",
                color: canScrollLeft ? "var(--ink)" : "var(--muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: canScrollLeft ? "pointer" : "not-allowed",
                opacity: canScrollLeft ? 1 : 0.4,
                transition: "all 0.2s ease",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount("right")}
              disabled={!canScrollRight}
              aria-label="Next Hyderabad Location"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "var(--surface)",
                border: "1px solid var(--line-strong)",
                color: canScrollRight ? "var(--ink)" : "var(--muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: canScrollRight ? "pointer" : "not-allowed",
                opacity: canScrollRight ? 1 : 0.4,
                transition: "all 0.2s ease",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Drag Hint */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.82rem",
            color: "var(--muted)",
            marginBottom: "16px",
          }}
        >
          <span style={{ fontSize: "1rem" }}>↔</span>
          <span>Click &amp; drag horizontally or swipe to explore locations</span>
        </div>

        {/* Horizontal Drag-To-Slide Container */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="slider-snap-track"
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="local-hub-card"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line-strong)",
                borderRadius: "20px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--accent)",
                      background: "rgba(59, 130, 246, 0.1)",
                      border: "1px solid rgba(59, 130, 246, 0.25)",
                      padding: "4px 10px",
                      borderRadius: "999px",
                    }}
                  >
                    {hub.tag}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
                    Hyderabad, IN
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.28rem",
                    fontWeight: 700,
                    marginBottom: "10px",
                    color: "var(--ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {hub.area}
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.55,
                    color: "var(--muted)",
                    marginBottom: "20px",
                  }}
                >
                  {hub.description}
                </p>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--muted)",
                    marginBottom: "10px",
                  }}
                >
                  Recommended Solutions:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {hub.popularServices.map((service, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: "0.76rem",
                        padding: "4px 9px",
                        background: "var(--surface-2, rgba(255,255,255,0.04))",
                        border: "1px solid var(--line)",
                        borderRadius: "6px",
                        color: "var(--ink)",
                      }}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Pagination */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            marginTop: "12px",
            marginBottom: "36px",
          }}
        >
          {hubs.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: activeIdx === idx ? "24px" : "8px",
                height: "8px",
                borderRadius: "999px",
                background: activeIdx === idx ? "var(--accent)" : "var(--line-strong)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </div>

        {/* Local Advantage Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 51, 234, 0.05) 100%)",
            border: "1px solid var(--line-strong)",
            borderRadius: "20px",
            padding: "28px 32px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div>
            <h4
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                marginBottom: "6px",
                color: "var(--ink)",
              }}
            >
              Looking for a local website designer near you in Hyderabad?
            </h4>
            <p
              style={{
                fontSize: "0.92rem",
                color: "var(--muted)",
                maxWidth: "680px",
                margin: 0,
              }}
            >
              Get same-day communication on WhatsApp, direct founder access, and websites built to capture Google search traffic in your specific neighborhood.
            </p>
          </div>

          <a
            href="https://wa.me/919959896378?text=Hi%20Webworkflo%27s%2C%20I%20am%20looking%20for%20a%20website%20designer%20in%20Hyderabad%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa"
            style={{
              padding: "12px 24px",
              fontSize: "0.95rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            Chat on WhatsApp (+91 99598 96378)
          </a>
        </div>
      </div>
    </section>
  );
}
