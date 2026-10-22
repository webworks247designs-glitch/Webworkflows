"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getWhatsAppGrowthPlanLink, trackFunnelEvent } from "@/lib/analytics";

const GOOGLE_REVIEWS_URL = "https://www.google.co.in/search?utm_medium=noren&utm_source=gbp&utm_campaign=2026&q=Webworkflo%27s&ludocid=13756383820960255399&lsig=AB86z5V9nz1E1uhJ3Hct0m5oRCII#ebo=0";

const HERO_SAMPLES = [
  {
    id: "boathouse",
    name: "Restaurant",
    label: "The Boat House",
    url: "boat-house-site.vercel.app",
    desktop: "/images/boathouse1.webp",
    mobile: "/images/boathouse-mobile.webp",
    metric: "Instant Online Orders",
  },
  {
    id: "salon",
    name: "Luxury Salon",
    label: "Shobana Men's Salon",
    url: "shobanamensalon.vercel.app",
    desktop: "/images/salon1.webp",
    mobile: "/images/salon-mobile.webp",
    metric: "1-Tap Booking Flow",
  },
  {
    id: "srishanth",
    name: "Tech Portfolio",
    label: "Srishanth M.",
    url: "srishanth-seven.vercel.app",
    desktop: "/images/srishanth1.webp",
    mobile: "/images/srishanth-mobile.webp",
    metric: "High-Performance Next.js",
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-cycle through samples if user is idle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_SAMPLES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !heroRef.current || !sceneRef.current) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const r = heroRef.current.getBoundingClientRect();
    const px = (((e.clientX - r.left) / r.width - 0.5) * 2).toFixed(3);
    const py = (((e.clientY - r.top) / r.height - 0.5) * 2).toFixed(3);

    sceneRef.current.style.setProperty("--px", px);
    sceneRef.current.style.setProperty("--py", py);
  };

  const handlePointerLeave = () => {
    if (!sceneRef.current) return;
    sceneRef.current.style.setProperty("--px", "0");
    sceneRef.current.style.setProperty("--py", "0");
  };

  const current = HERO_SAMPLES[activeIdx];

  return (
    <section
      className="hero"
      id="hero"
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-top-badges">
            <p className="chip-live">
              <span className="live" aria-hidden="true"></span>
              <span>Available for Client Builds / Hyderabad</span>
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-google-review-pill"
              onClick={() => trackFunnelEvent('review_click', { source: 'hero_pill' })}
              title="View 11 Verified Google Reviews for Webworkflo's"
            >
              <span className="stars">★★★★★</span>
              <span className="rating-score">5.0</span>
              <span className="review-meta">(11 Google Reviews)</span>
              <span className="arrow">↗</span>
            </a>
          </div>

          <h1>Websites that turn visitors into Leads.</h1>
          <p className="lede">
            <span>Webworkflo&apos;s</span> is a web design and frontend engineering studio based in Hyderabad. We build fast, tailored websites for small businesses, startups and professionals with direct, measurable ROI.
          </p>
          
          <div className="cta-row hero-cta-row">
            <a 
              className="btn btn-wa btn-growth-plan" 
              href={getWhatsAppGrowthPlanLink("Hero")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFunnelEvent('cta_click', { source: 'hero_primary_growth_plan' })}
            >
              <svg className="ic"><use href="#i-wa" /></svg>
              Get a Free Website Growth Plan
            </a>
            <a 
              className="btn btn-ghost" 
              href="#case-study"
            >
              See Client Proof ↓
            </a>
          </div>

          <p className="hero-cta-guarantee">
            <span>Delivered within 24 hours on WhatsApp / 100% Free / Zero commitment</span>
          </p>

          <ul className="facts">
            <li>Custom UI/UX and hand-coded architecture</li>
            <li>Mobile-first and sub-second load times</li>
            <li>Direct engineer support within hours</li>
          </ul>
        </div>

        <figure className="scene-wrap">
          <div
            className="scene"
            id="scene"
            ref={sceneRef}
            role="region"
            aria-label="Interactive device showcase displaying website samples"
          >
            {/* 3D Device Rig */}
            <div className="device-rig">
              {/* MacBook Display */}
              <div className="macbook">
                <div className="macbook-bar">
                  <div className="macbook-dots">
                    <span className="macbook-dot dot-red"></span>
                    <span className="macbook-dot dot-yellow"></span>
                    <span className="macbook-dot dot-green"></span>
                  </div>
                  <div className="macbook-url">
                    <span>{current.url}</span>
                  </div>
                </div>
                <div className="macbook-screen">
                  <Image
                    key={`desktop-${current.id}`}
                    src={current.desktop}
                    alt={`${current.label} Desktop Website Preview`}
                    fill
                    sizes="(max-width: 768px) 270px, 420px"
                    priority={activeIdx === 0}
                    loading={activeIdx === 0 ? "eager" : "lazy"}
                    fetchPriority={activeIdx === 0 ? "high" : "auto"}
                    className="macbook-img"
                  />
                </div>
              </div>

              {/* Inset iPhone Display */}
              <div className="phone">
                <div className="phone-island"></div>
                <div className="phone-screen">
                  <Image
                    key={`mobile-${current.id}`}
                    src={current.mobile}
                    alt={`${current.label} Mobile Website Preview`}
                    fill
                    sizes="(max-width: 768px) 110px, 170px"
                    priority={activeIdx === 0}
                    loading={activeIdx === 0 ? "eager" : "lazy"}
                    fetchPriority={activeIdx === 0 ? "high" : "auto"}
                    className="phone-img"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sample Switcher Tabs */}
          <div className="sample-pills" role="tablist" aria-label="Website sample selector">
            {HERO_SAMPLES.map((sample, idx) => (
              <button
                key={sample.id}
                role="tab"
                aria-selected={activeIdx === idx}
                className={`sample-pill ${activeIdx === idx ? "active" : ""}`}
                onClick={() => setActiveIdx(idx)}
              >
                <span>{sample.name}</span>
              </button>
            ))}
          </div>

          <figcaption className="scene-cap">
            Live preview: Real production samples built for desktop and mobile.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
