"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [isPre, setIsPre] = useState(false);

  useEffect(() => {
    // We already set isPre to false initially to prevent hydration mismatch/hiding
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
          <p className="lede"><span>Webworkflows</span> is an expert freelance web designer in Hyderabad. I design, build and launch fast, good-looking websites for small businesses, start-ups and creators, and I handle every step myself.</p>
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
            className={`scene ${isPre ? "pre" : ""}`}
            id="scene"
            ref={sceneRef}
            role="img"
            aria-label="Three floating layers: structure, interface and code"
          >
            {/* Floating Badges pinned to the scene itself */}
            <div className="floating-badge badge-1">
              <span className="badge-icon">🎨</span>
              <span className="badge-text">UI/UX Design</span>
            </div>
            <div className="floating-badge badge-2">
              <span className="badge-icon">⚡</span>
              <span className="badge-text">Fast Hosting</span>
            </div>
            <div className="floating-badge badge-3">
              <span className="badge-icon">📱</span>
              <span className="badge-text">Mobile-First</span>
            </div>
            <div className="floating-badge badge-4">
              <span className="badge-icon">📈</span>
              <span className="badge-text">SEO Optimized</span>
            </div>
            <div className="floating-badge badge-5">
              <span className="badge-icon">💬</span>
              <span className="badge-text">Enquiry Systems</span>
            </div>

            <div className="stack">
              <div className="layer l-struct">
                <span className="wf" style={{ left: "7%", top: "6%", right: "7%", height: "10%" }}></span>
                <span className="wf" style={{ left: "7%", top: "22%", width: "48%", height: "34%" }}></span>
                <span className="wf x" style={{ right: "7%", top: "22%", width: "33%", height: "34%" }}></span>
                <span className="wf" style={{ left: "7%", top: "63%", width: "27%", height: "24%" }}></span>
                <span className="wf" style={{ left: "37%", top: "63%", width: "27%", height: "24%" }}></span>
                <span className="wf" style={{ left: "67%", top: "63%", width: "26%", height: "24%" }}></span>
                <span className="lbl">Structure</span>
              </div>
              <div className="layer l-ui">
                <span className="ui" style={{ left: "7%", top: "6%", width: "9%", height: "9%", background: "var(--cobalt)" }}></span>
                <span className="ui" style={{ right: "7%", top: "9%", width: "34%", height: "3.5%", background: "var(--line-strong)" }}></span>
                <span className="ui" style={{ left: "7%", top: "24%", width: "44%", height: "6%", background: "var(--ink)" }}></span>
                <span className="ui" style={{ left: "7%", top: "33%", width: "34%", height: "6%", background: "var(--ink)" }}></span>
                <span className="ui" style={{ left: "7%", top: "46%", width: "24%", height: "9%", background: "var(--wa)", borderRadius: "99px" }}></span>
                <span className="ui" style={{ right: "7%", top: "22%", width: "33%", height: "34%", background: "var(--butter)", borderRadius: "50%" }}></span>
                <span className="ui" style={{ left: "7%", top: "63%", width: "27%", height: "24%", background: "var(--mint)" }}></span>
                <span className="ui" style={{ left: "37%", top: "63%", width: "27%", height: "24%", background: "var(--cobalt)", opacity: .85 }}></span>
                <span className="ui" style={{ left: "67%", top: "63%", width: "26%", height: "24%", background: "var(--line)" }}></span>
                <span className="lbl">Interface</span>
              </div>
              <div className="layer l-code">
                <pre><span className="k">&lt;section</span> <span className="y">className</span>=<span className="s">&quot;hero&quot;</span><span className="k">&gt;</span>
                  <span className="k">&lt;h1&gt;</span>Your idea<span className="k">&lt;/h1&gt;</span>
                  <span className="k">&lt;a</span> <span className="y">className</span>=<span className="s">&quot;cta&quot;</span><span className="k">&gt;</span>
                  Let&apos;s talk
                  <span className="k">&lt;/a&gt;</span>
                  <span className="k">&lt;/section&gt;</span></pre>
                <span className="lbl">Code and motion</span>
              </div>
            </div>
          </div>
          <figcaption className="scene-cap">Every site I build has three layers: structure, interface and code.</figcaption>
        </figure>
      </div>
    </section>
  );
}
