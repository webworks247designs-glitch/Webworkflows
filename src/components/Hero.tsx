"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const HERO_SAMPLES = [
  {
    id: "boathouse",
    name: "Restaurant",
    label: "The Boat House",
    icon: "🍽️",
    url: "boat-house-site.vercel.app",
    desktop: "/images/boathouse1.png",
    mobile: "/images/boathouse-mobile.png",
    metric: "Instant Online Orders",
  },
  {
    id: "salon",
    name: "Luxury Salon",
    label: "Shobana Men's Salon",
    icon: "✂️",
    url: "shobanamensalon.vercel.app",
    desktop: "/images/salon1.png",
    mobile: "/images/salon-mobile.png",
    metric: "1-Tap Booking Flow",
  },
  {
    id: "srishanth",
    name: "Tech Portfolio",
    label: "Srishanth M.",
    icon: "⚡",
    url: "srishanth-seven.vercel.app",
    desktop: "/images/srishanth1.png",
    mobile: "/images/srishanth-mobile.png",
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
          <p className="chip-live"><span className="live" aria-hidden="true"></span><span>Open for new projects</span></p>
          <h1>Websites that turn visitors into Leads.</h1>
          <p className="lede"><span>Webworkflo&apos;s</span> is an expert freelance web designer in Hyderabad. I design, build and launch fast, good-looking websites for small businesses, start-ups and creators, and I handle every step myself.</p>
          <div className="cta-row">
            <a className="btn btn-wa" href="#contact"><svg className="ic"><use href="#i-wa" /></svg>Chat on WhatsApp</a>
            <a className="btn btn-ghost" href="#contact"><svg className="ic"><use href="#i-mail" /></svg>Send an email</a>
          </div>
          <ul className="facts">
            <li>Design and code by one person</li>
            <li>Mobile-first and fast</li>
            <li>Replies within a few hours</li>
          </ul>
        </div>

        <figure className="scene-wrap">
          <div
            className="scene"
            id="scene"
            ref={sceneRef}
            role="region"
            aria-label="Interactive 3D device showcase displaying website samples"
          >
            {/* Floating Badges */}
            <div className="floating-badge badge-1">
              <span className="badge-icon">⚡</span>
              <span className="badge-text">99/100 PageSpeed</span>
            </div>
            <div className="floating-badge badge-2">
              <span className="badge-icon">📱</span>
              <span className="badge-text">100% Mobile First</span>
            </div>
            <div className="floating-badge badge-3">
              <span className="badge-icon">💬</span>
              <span className="badge-text">{current.metric}</span>
            </div>

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
                    <span>🔒</span>
                    <span>{current.url}</span>
                  </div>
                </div>
                <div className="macbook-screen">
                  <Image
                    key={`desktop-${current.id}`}
                    src={current.desktop}
                    alt={`${current.label} Desktop Website Preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
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
                    sizes="200px"
                    priority
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
                <span>{sample.icon}</span>
                <span>{sample.name}</span>
              </button>
            ))}
          </div>

          <figcaption className="scene-cap">
            Interactive preview: Real live samples built for desktop and mobile.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
