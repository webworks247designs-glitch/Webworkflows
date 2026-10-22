"use client";

import { useState, useRef, useEffect } from "react";

export default function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      num: "01",
      badge: "STAGE 01",
      spec: "Architecture & Customer Flow",
      title: "Discover",
      desc: "We analyze your business, uncover where your ideal customers are searching online, and map high-converting navigation pathways before designing.",
      milestone: "Conversion wireframe & user journey map approved"
    },
    {
      num: "02",
      badge: "STAGE 02",
      spec: "Bespoke Code & UI Design",
      title: "Build",
      desc: "We craft a high-performance Next.js site tailored specifically to drive bookings, calls, and qualified customer enquiries with sub-second speeds.",
      milestone: "Complete production-ready site preview delivered"
    },
    {
      num: "03",
      badge: "STAGE 03",
      spec: "Lead Tracking & Analytics",
      title: "Track",
      desc: "We configure conversion tracking, WhatsApp automation, and live analytics dashboards so you see exactly which visitors convert into real revenue.",
      milestone: "Live verification dashboard & CRM routing active"
    },
    {
      num: "04",
      badge: "STAGE 04",
      spec: "Launch & Client Growth",
      title: "Scale",
      desc: "Your site goes live with automated Google SEO indexing, SSL certificates, zero-maintenance cloud hosting, and instant lead capture from day one.",
      milestone: "100% full source code ownership & domain launched"
    }
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  const handleScroll = () => {
    if (!sliderRef.current || isDragging) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const cardEl = sliderRef.current.firstElementChild as HTMLElement;
    const cardWidth = cardEl ? cardEl.offsetWidth + 20 : 340;
    const currentIdx = Math.round(scrollLeft / cardWidth);
    setActiveIdx(Math.min(Math.max(currentIdx, 0), stages.length - 1));
  };

  const scrollToStage = (idx: number) => {
    if (!sliderRef.current) return;
    const cardEl = sliderRef.current.firstElementChild as HTMLElement;
    const cardWidth = cardEl ? cardEl.offsetWidth + 20 : 340;
    sliderRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth"
    });
    setActiveIdx(idx);
  };

  const scrollByDirection = (dir: number) => {
    if (!sliderRef.current) return;
    const cardEl = sliderRef.current.firstElementChild as HTMLElement;
    const scrollAmount = cardEl ? cardEl.offsetWidth + 20 : 340;
    sliderRef.current.scrollBy({
      left: dir * scrollAmount,
      behavior: "smooth"
    });
  };

  // Mouse Drag to Scroll handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setStartScrollLeft(sliderRef.current.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const walk = (e.pageX - startX) * 1.5;
    sliderRef.current.scrollLeft = startScrollLeft - walk;
  };

  const onMouseUpOrLeave = () => {
    if (!isDragging || !sliderRef.current) return;
    setIsDragging(false);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [isDragging]);

  return (
    <section className="sec" id="how-it-works" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '18px' }}>
          <div className="sec-head" style={{ margin: 0, textAlign: 'left' }}>
            <div className="badge-tag">
              <span>Execution Methodology</span>
            </div>
            <h2>Structured 4-Stage Process</h2>
            <p style={{ margin: 0 }}>A disciplined engineering and deployment protocol designed to turn qualified visitors into paying clients. Slide horizontally to follow each phase.</p>
          </div>

          {/* Slider Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
            <span style={{ fontSize: '0.82rem', fontFamily: 'var(--mono)', color: 'var(--muted)', fontWeight: 600 }}>
              Stage 0{activeIdx + 1} / 0{stages.length}
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                type="button" 
                onClick={() => scrollByDirection(-1)} 
                disabled={activeIdx === 0}
                aria-label="Previous Stage"
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
                disabled={activeIdx === stages.length - 1}
                aria-label="Next Stage"
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '4px', 
                  border: '1px solid var(--line-strong)', 
                  background: 'var(--surface)', 
                  color: activeIdx === stages.length - 1 ? 'var(--muted)' : 'var(--ink)', 
                  cursor: activeIdx === stages.length - 1 ? 'not-allowed' : 'pointer', 
                  display: 'grid', 
                  placeItems: 'center',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  opacity: activeIdx === stages.length - 1 ? 0.45 : 1,
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
          className="slider-snap-track"
          style={{ 
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: isDragging ? 'none' : 'auto'
          }}
        >
          {stages.map((stage, idx) => (
            <div 
              key={stage.num} 
              className="how-it-works-card"
              style={{ 
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
                <span style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '4px', 
                  background: 'var(--cobalt)', 
                  color: 'var(--on-cobalt)', 
                  fontWeight: 800, 
                  fontSize: '0.88rem',
                  fontFamily: 'var(--mono)'
                }}>
                  {stage.num}
                </span>
                <span style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  {stage.badge}
                </span>
              </div>
              
              <div style={{ 
                background: 'var(--bg)', 
                border: '1px solid var(--line)', 
                borderRadius: '4px', 
                padding: '10px 14px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px' 
              }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--ink)', fontWeight: 700 }}>
                  {stage.spec}
                </span>
              </div>

              <div>
                <h3 style={{ marginBottom: '8px', fontSize: '1.25rem', color: 'var(--ink)' }}>
                  {stage.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  {stage.desc}
                </p>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--wa)', fontWeight: 700, fontSize: '0.85rem' }}>✓</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 600 }}>
                  {stage.milestone}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
          {stages.map((stage, idx) => (
            <button
              key={stage.num}
              type="button"
              onClick={() => scrollToStage(idx)}
              aria-label={`Go to stage ${stage.num}: ${stage.title}`}
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
