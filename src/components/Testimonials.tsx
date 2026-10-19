"use client";

import { useState, useRef, useEffect } from "react";
import { trackFunnelEvent } from "@/lib/analytics";

const GOOGLE_REVIEWS_URL = "https://www.google.co.in/search?utm_medium=noren&utm_source=gbp&utm_campaign=2026&q=Webworkflo%27s&ludocid=13756383820960255399&lsig=AB86z5V9nz1E1uhJ3Hct0m5oRCII#ebo=0";

const TESTIMONIALS = [
  {
    author: "Saikrishna Konduri",
    role: "Owner, Shobana Men's Luxury Salon",
    avatar: "SK",
    stars: 5,
    quote: "i made my salon online and i loved the service,its oustanding.",
    badge: "Verified Client / Active Site",
    date: "Google Review"
  },
  {
    author: "Srishanth Madanapally",
    role: "AI & Embedded Systems Engineer",
    avatar: "SM",
    stars: 5,
    quote: "I made a portfolio for me and i liked it a lot.....",
    badge: "Verified Client / Live Portfolio",
    date: "Google Review"
  },
  {
    author: "Dr. Vinod Chahare",
    role: "Doctor & Consultant",
    avatar: "VC",
    stars: 5,
    quote: "Impressive work and services.",
    badge: "Verified Reviewer",
    date: "Google Review"
  },
  {
    author: "Balakrishna",
    role: "Business Owner",
    avatar: "BK",
    stars: 5,
    quote: "Good work.",
    badge: "Verified Reviewer",
    date: "Google Review"
  },
  {
    author: "m.vinoda vinu",
    role: "Client",
    avatar: "MV",
    stars: 5,
    quote: "Excellent service.",
    badge: "Verified Reviewer",
    date: "Google Review"
  },
  {
    author: "Lakshmi Harika",
    role: "Client",
    avatar: "LH",
    stars: 5,
    quote: "Great work.",
    badge: "Verified Reviewer",
    date: "Google Review"
  }
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  const totalItems = TESTIMONIALS.length + 1; // 6 reviews + 1 Google CTA card

  const handleScroll = () => {
    if (!sliderRef.current || isDragging) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const cardEl = sliderRef.current.firstElementChild as HTMLElement;
    const cardWidth = cardEl ? cardEl.offsetWidth + 20 : 340;
    const currentIdx = Math.round(scrollLeft / cardWidth);
    setActiveIdx(Math.min(Math.max(currentIdx, 0), totalItems - 1));
  };

  const scrollToReview = (idx: number) => {
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
  }, [isDragging, totalItems]);

  return (
    <section className="sec testimonials-sec" id="testimonials" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '18px' }}>
          <div className="sec-head" style={{ margin: 0, textAlign: 'left' }}>
            <div className="badge-tag">
              <span>Verified Client Reviews</span>
            </div>
            <h2>What Clients Say About Working With Us</h2>
            <p style={{ margin: '0 0 14px' }}>
              Real feedback from Hyderabad business owners and professionals. Drag horizontally to explore all reviews.
            </p>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="google-badge-link"
              onClick={() => trackFunnelEvent('review_click', { source: 'testimonials_head' })}
            >
              <span className="stars">★★★★★</span>
              <strong>5.0 Rating on Google</strong>
              <span>(11 Verified Reviews)</span>
              <span className="arrow">↗</span>
            </a>
          </div>

          {/* Slider Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
            <span style={{ fontSize: '0.82rem', fontFamily: 'var(--mono)', color: 'var(--muted)', fontWeight: 600 }}>
              0{activeIdx + 1} / 0{totalItems}
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                type="button" 
                onClick={() => scrollByDirection(-1)} 
                disabled={activeIdx === 0}
                aria-label="Previous Review"
                style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '4px', 
                  border: '1px solid var(--line-strong)', 
                  background: 'var(--surface)', 
                  color: activeIdx === 0 ? 'var(--muted)' : 'var(--ink)', 
                  cursor: activeIdx === 0 ? 'not-allowed' : 'pointer', 
                  display: 'grid', 
                  placeItems: 'center',
                  fontSize: '1rem',
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
                disabled={activeIdx === totalItems - 1}
                aria-label="Next Review"
                style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '4px', 
                  border: '1px solid var(--line-strong)', 
                  background: 'var(--surface)', 
                  color: activeIdx === totalItems - 1 ? 'var(--muted)' : 'var(--ink)', 
                  cursor: activeIdx === totalItems - 1 ? 'not-allowed' : 'pointer', 
                  display: 'grid', 
                  placeItems: 'center',
                  fontSize: '1rem',
                  fontWeight: 700,
                  opacity: activeIdx === totalItems - 1 ? 0.45 : 1,
                  transition: 'background 0.15s, border-color 0.15s'
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Testimonials Slider Track with Mouse Drag */}
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
          {TESTIMONIALS.map((t, idx) => (
            <article 
              key={idx} 
              className="test-card test-slide-card"
              style={{
                background: 'var(--surface)',
                border: activeIdx === idx ? '1px solid var(--cobalt)' : '1px solid var(--line)',
                borderRadius: '4px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.2s',
                boxShadow: 'none'
              }}
            >
              <div>
                <div className="test-header">
                  <div className="test-avatar" style={{ fontStyle: 'normal', fontWeight: 700, fontSize: '0.85rem', borderRadius: '4px' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <h3 className="test-name" style={{ fontSize: '1.05rem', color: 'var(--ink)' }}>{t.author}</h3>
                    <p className="test-role">{t.role}</p>
                  </div>
                </div>
                <div className="test-stars" style={{ color: '#FBBC05', marginBottom: '12px' }}>
                  {"★".repeat(t.stars)}
                </div>
                <p className="test-quote" style={{ fontSize: '0.94rem', lineHeight: 1.6, color: 'var(--ink)', margin: '0 0 16px' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="test-footer" style={{ borderTop: '1px solid var(--line)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="test-badge" style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>{t.badge}</span>
                <span className="test-date" style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>{t.date}</span>
              </div>
            </article>
          ))}

          {/* 7th Card: Direct Link to Google Business Profile Reviews */}
          <article 
            className="test-card test-slide-card"
            style={{
              background: 'var(--surface)',
              border: activeIdx === TESTIMONIALS.length ? '1px solid var(--cobalt)' : '1px solid var(--line)',
              borderRadius: '4px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.2s',
              boxShadow: 'none'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--wa)' }}>G</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  Google Business Profile
                </span>
              </div>
              <div style={{ color: '#FBBC05', fontSize: '1.1rem', marginBottom: '8px' }}>
                ★★★★★
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--ink)', marginBottom: '8px' }}>
                5.0 Average Google Rating
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                Every client testimonial is verified and linked directly to our official Google Business Profile in Hyderabad.
              </p>
            </div>
            <div style={{ marginTop: '24px', paddingTop: '14px', borderTop: '1px solid var(--line)' }}>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: '0.85rem', padding: '10px 14px', borderRadius: '4px' }}
                onClick={() => trackFunnelEvent('review_click', { source: 'testimonials_card_cta' })}
              >
                Read All Reviews on Google ↗
              </a>
            </div>
          </article>
        </div>

        {/* Bottom Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
          {Array.from({ length: totalItems }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToReview(idx)}
              aria-label={`Go to review ${idx + 1}`}
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
