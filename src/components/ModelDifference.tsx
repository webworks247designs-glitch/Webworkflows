"use client";

import { useState, useRef, useEffect } from "react";

export default function ModelDifference() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      num: "01",
      tag: "Design & Interface",
      specLeft: "Figma Prototypes",
      specRight: "Design Token Systems",
      title: "UI/UX Design & Interactive Prototyping",
      desc: "Unique layouts and intuitive user journeys tailored specifically to your brand aesthetics. We build interactive clickable prototypes to validate flows before writing a single line of production code.",
      points: [
        "Bespoke visual identity with zero generic templates",
        "Clickable wireframes and user journey mapping",
        "Consistent typography, spacing, and design tokens"
      ]
    },
    {
      num: "02",
      tag: "Frontend & Devices",
      specLeft: "Mobile-First Breakpoints",
      specRight: "Zero Layout Shift",
      title: "Responsive & Cross-Device Optimization",
      desc: "Thumb-friendly, high-performance interfaces engineered to render flawlessly across smartphones, tablets, laptops, and ultra-wide displays with zero viewport glitches.",
      points: [
        "100% thumb-friendly ergonomics for mobile visitors",
        "Tested across Chrome, Safari, Firefox, and Edge",
        "Fluid typography and responsive image rendering"
      ]
    },
    {
      num: "03",
      tag: "Search & Visibility",
      specLeft: "Semantic HTML5",
      specRight: "Schema & OpenGraph",
      title: "Technical & On-Page SEO (Search Engine Optimization)",
      desc: "Search visibility engineered directly into your code with clean semantic hierarchy, lightning-fast crawlability, structured schema markup, and local search optimization.",
      points: [
        "Google Core Web Vitals optimization (sub-second loading)",
        "Structured JSON-LD schema and social OpenGraph tags",
        "Hyderabad local search and business directory sync"
      ]
    },
    {
      num: "04",
      tag: "Cloud & Infrastructure",
      specLeft: "SSL / Edge CDN",
      specRight: "99.9% Uptime SLA",
      title: "Advanced Security & Performance Optimization",
      desc: "Enterprise-grade edge deployment with global CDN distribution, automatic SSL certificate provisioning, sub-second asset delivery, and round-the-clock uptime monitoring.",
      points: [
        "Sub-second asset delivery via global edge CDN",
        "Automated 256-bit SSL encryption and security headers",
        "Zero-maintenance cloud infrastructure with 99.9% uptime"
      ]
    }
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const handleScroll = () => {
    if (!sliderRef.current || isDragging) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const cardWidth = sliderRef.current.firstElementChild ? (sliderRef.current.firstElementChild as HTMLElement).offsetWidth + 20 : 340;
    const currentIdx = Math.round(scrollLeft / cardWidth);
    setActiveIdx(Math.min(Math.max(currentIdx, 0), services.length - 1));
  };

  const scrollToCard = (idx: number) => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.firstElementChild ? (sliderRef.current.firstElementChild as HTMLElement).offsetWidth + 20 : 340;
    sliderRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth"
    });
    setActiveIdx(idx);
  };

  const scrollByDirection = (dir: number) => {
    const nextIdx = Math.min(Math.max(activeIdx + dir, 0), services.length - 1);
    scrollToCard(nextIdx);
  };

  // Mouse Drag to Scroll handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX);
    setStartScrollLeft(sliderRef.current.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const walk = (e.pageX - startX) * 1.5;
    if (Math.abs(walk) > 4) {
      setHasMoved(true);
    }
    sliderRef.current.scrollLeft = startScrollLeft - walk;
  };

  const onMouseUpOrLeave = () => {
    if (!isDragging || !sliderRef.current) return;
    setIsDragging(false);
    // Snap to nearest card
    const cardWidth = sliderRef.current.firstElementChild ? (sliderRef.current.firstElementChild as HTMLElement).offsetWidth + 20 : 340;
    const nearestIdx = Math.round(sliderRef.current.scrollLeft / cardWidth);
    scrollToCard(Math.min(Math.max(nearestIdx, 0), services.length - 1));
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [isDragging]);

  return (
    <section className="sec" id="services" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '18px' }}>
          <div className="sec-head" style={{ margin: 0, textAlign: 'left' }}>
            <div className="badge-tag">
              <span>Services We Provide</span>
            </div>
            <h2>Engineered for Business Outcomes</h2>
            <p style={{ margin: 0 }}>Four foundational services engineered to launch, run, and scale your digital presence. Slide horizontally to explore each capability.</p>
          </div>

          {/* Slider Arrow Controls & Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
            <span style={{ fontSize: '0.82rem', fontFamily: 'var(--mono)', color: 'var(--muted)', fontWeight: 600 }}>
              0{activeIdx + 1} / 0{services.length}
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                type="button" 
                onClick={() => scrollByDirection(-1)} 
                disabled={activeIdx === 0}
                aria-label="Previous Service"
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '4px', 
                  border: '1px solid var(--line-strong)', 
                  background: 'var(--surface)', 
                  color: activeIdx === 0 ? 'var(--muted)' : 'var(--ink)', 
                  cursor: activeIdx === 0 ? 'not-allowed' : 'pointer', 
                  display: 'grid', 
                  placeItems: 'center',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  opacity: activeIdx === 0 ? 0.45 : 1,
                  transition: 'background 0.15s, border-color 0.15s'
                }}
              >
                ←
              </button>
              <button 
                type="button" 
                onClick={() => scrollByDirection(1)} 
                disabled={activeIdx === services.length - 1}
                aria-label="Next Service"
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '4px', 
                  border: '1px solid var(--line-strong)', 
                  background: 'var(--surface)', 
                  color: activeIdx === services.length - 1 ? 'var(--muted)' : 'var(--ink)', 
                  cursor: activeIdx === services.length - 1 ? 'not-allowed' : 'pointer', 
                  display: 'grid', 
                  placeItems: 'center',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  opacity: activeIdx === services.length - 1 ? 0.45 : 1,
                  transition: 'background 0.15s, border-color 0.15s'
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Track with Mouse Drag */}
        <div 
          ref={sliderRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUpOrLeave}
          onMouseLeave={onMouseUpOrLeave}
          style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            scrollSnapType: isDragging ? 'none' : 'x mandatory', 
            gap: '20px', 
            paddingBottom: '16px',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: isDragging ? 'none' : 'auto'
          }}
        >
          {services.map((svc, idx) => (
            <div 
              key={svc.num} 
              className="panel" 
              style={{ 
                flex: '0 0 clamp(300px, 46vw, 500px)',
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always',
                background: 'var(--surface)', 
                border: activeIdx === idx ? '1px solid var(--cobalt)' : '1px solid var(--line)', 
                borderRadius: '4px', 
                padding: '28px 24px', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px',
                transition: 'border-color 0.2s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--cobalt)', fontFamily: 'var(--mono)' }}>
                  {svc.num}
                </span>
                <span style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  {svc.tag}
                </span>
              </div>
              
              <div style={{ 
                background: 'var(--bg)', 
                border: '1px solid var(--line)', 
                borderRadius: '4px', 
                padding: '10px 14px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                gap: '10px' 
              }}>
                <span style={{ fontSize: '0.76rem', color: 'var(--ink)', fontWeight: 600 }}>
                  {svc.specLeft}
                </span>
                <span style={{ fontSize: '0.74rem', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
                  {svc.specRight}
                </span>
              </div>

              <div>
                <h3 style={{ marginBottom: '10px', fontSize: '1.2rem', lineHeight: 1.35, color: 'var(--ink)' }}>
                  {svc.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  {svc.desc}
                </p>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {svc.points.map((point, pIdx) => (
                    <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.84rem', color: 'var(--ink)' }}>
                      <span style={{ color: 'var(--wa)', fontWeight: 700, flexShrink: 0, lineHeight: 1.4 }}>✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
          {services.map((svc, idx) => (
            <button
              key={svc.num}
              type="button"
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to service ${svc.num}: ${svc.title}`}
              style={{
                width: activeIdx === idx ? '24px' : '8px',
                height: '6px',
                borderRadius: '4px',
                background: activeIdx === idx ? 'var(--cobalt)' : 'var(--line-strong)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
