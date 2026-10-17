"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { getWhatsAppGrowthPlanLink, trackFunnelEvent } from "@/lib/analytics";

const GOOGLE_REVIEWS_URL = "https://www.google.co.in/search?utm_medium=noren&utm_source=gbp&utm_campaign=2026&q=Webworkflo%27s&ludocid=13756383820960255399&lsig=AB86z5V9nz1E1uhJ3Hct0m5oRCII#ebo=0";

const TESTIMONIALS = [
  {
    author: "Saikrishna Konduri",
    role: "Owner, Shobana Men's Luxury Salon",
    avatar: "✂️",
    stars: 5,
    quote: "i made my salon online and i loved the service,its oustanding.",
    badge: "Verified Client • Active Site",
    date: "Google Review"
  },
  {
    author: "Srishanth Madanapally",
    role: "AI & Embedded Systems Engineer",
    avatar: "⚡",
    stars: 5,
    quote: "I made a portfolio for me and i liked it a lot.....",
    badge: "Verified Client • Live Portfolio",
    date: "Google Review"
  },
  {
    author: "Dr. Vinod Chahare",
    role: "Doctor & Consultant",
    avatar: "🩺",
    stars: 5,
    quote: "Impressive work and services.",
    badge: "Verified Reviewer",
    date: "Google Review"
  },
  {
    author: "Balakrishna",
    role: "Business Owner",
    avatar: "💼",
    stars: 5,
    quote: "Good work.",
    badge: "Verified Reviewer",
    date: "Google Review"
  },
  {
    author: "m.vinoda vinu",
    role: "Client",
    avatar: "🌟",
    stars: 5,
    quote: "Excellent service.",
    badge: "Verified Reviewer",
    date: "Google Review"
  },
  {
    author: "Lakshmi Harika",
    role: "Client",
    avatar: "✨",
    stars: 5,
    quote: "Great work.",
    badge: "Verified Reviewer",
    date: "Google Review"
  }
];

const PROOF_IMAGES = [
  {
    id: "t1",
    label: "Google Profile Rating",
    src: "/images/T1.png",
    caption: "5.0 ★ Rating & Verified Google Business Profile Reviews",
  },
  {
    id: "t2",
    label: "Client Reviews (Salon & Portfolio)",
    src: "/images/T2.png",
    caption: "Direct reviews from Saikrishna (Shobana Salon) & Srishanth",
  },
  {
    id: "t3",
    label: "Service Quality Reviews",
    src: "/images/T3.png",
    caption: "5-star feedback on website development and services",
  },
];

export default function Testimonials() {
  const [activeProofIdx, setActiveProofIdx] = useState(0);

  return (
    <section className="sec testimonials-sec" id="testimonials">
      <div className="wrap">
        <motion.div 
          className="sec-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="badge-tag">
            <span className="dot-pulse"></span>
            <span>Real Google Reviews • 100% Authentic Proof</span>
          </div>
          <h2>What Clients Say About Working With Me</h2>
          <p>
            Real feedback from Hyderabad business owners and professionals. Every review is publicly verifiable on Google.
          </p>

          <div style={{ marginTop: '16px' }}>
            <motion.a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="google-badge-link"
              onClick={() => trackFunnelEvent('review_click', { source: 'testimonials_head' })}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="stars">★★★★★</span>
              <strong>5.0 Rating on Google</strong>
              <span>(11 Verified Reviews)</span>
              <span className="arrow">↗</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Testimonials Quote Grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <motion.article 
              key={idx} 
              className="test-card"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="test-header">
                <div className="test-avatar">{t.avatar}</div>
                <div>
                  <h3 className="test-name">{t.author}</h3>
                  <p className="test-role">{t.role}</p>
                </div>
              </div>
              <div className="test-stars">{"★".repeat(t.stars)}</div>
              <p className="test-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="test-footer">
                <span className="test-badge">{t.badge}</span>
                <span className="test-date">{t.date}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Real Screenshot Proof Viewer */}
        <div className="proof-viewer">
          <div className="proof-head">
            <h3>Inspect Original Google Reviews</h3>
            <p>Direct unedited screenshots from the verified Google Business Profile:</p>
            
            <div className="proof-tabs">
              {PROOF_IMAGES.map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  className={`proof-tab ${i === activeProofIdx ? 'active' : ''}`}
                  onClick={() => {
                    setActiveProofIdx(i);
                    trackFunnelEvent('review_click', { source: `tab_${img.id}` });
                  }}
                >
                  {img.label}
                </button>
              ))}
            </div>
          </div>

          <div className="proof-frame">
            <div className="proof-img-wrap">
              <Image
                src={PROOF_IMAGES[activeProofIdx].src}
                alt={PROOF_IMAGES[activeProofIdx].caption}
                width={900}
                height={500}
                className="proof-img"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="proof-caption">
              <span>🔍</span> {PROOF_IMAGES[activeProofIdx].caption}
            </p>
          </div>
        </div>

        {/* Founder Bio Card */}
        <div className="founder-card" id="about">
          <div className="founder-avatar-wrap">
            <div className="founder-avatar-pill">
              <span className="founder-initials">SM</span>
            </div>
            <span className="founder-status-dot"></span>
          </div>
          <div className="founder-content">
            <span className="founder-label">The Person Behind The Code</span>
            <h3 className="founder-name">Srishanth M.</h3>
            <p className="founder-bio">
              Founder & Lead Web Engineer at <strong>Webworkflo&apos;s</strong>, Hyderabad. I personally design and hand-code fast, high-converting websites for businesses across Telangana. No outsourced agencies, no middlemen—just direct, transparent results.
            </p>
            <div className="founder-cta-row">
              <a
                className="btn btn-wa btn-sm"
                href={getWhatsAppGrowthPlanLink("FounderBio")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackFunnelEvent('cta_click', { source: 'founder_whatsapp' })}
              >
                <svg className="ic"><use href="#i-wa" /></svg>
                Chat with Srishanth on WhatsApp
              </a>
              <span className="founder-reply-note">⚡ Usually replies within 1–2 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
