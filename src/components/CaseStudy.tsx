"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { getWhatsAppGrowthPlanLink, trackFunnelEvent } from "@/lib/analytics";

export default function CaseStudy() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section className="sec case-study-sec" id="case-study">
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
            <span>Real Measured Results • Verified Case Study</span>
          </div>
          <h2>Proof in Practice: How Shobana Salon Scaled Bookings</h2>
          <p>
            Real data from an active Hyderabad client dashboard. See how our pay-per-enquiry model generated genuine customers while eliminating risk.
          </p>
        </motion.div>

        <div className="case-grid">
          {/* Left Column: Analytics Screenshot Card */}
          <div className="case-visual-card">
            <div className="case-visual-header">
              <div className="window-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <span className="case-domain">shobanamensalon.vercel.app/portal/analytics</span>
              <span className="case-status-badge">Live Dashboard</span>
            </div>

            <div 
              className="case-image-wrapper" 
              onClick={() => setIsZoomed(true)} 
              title="Click to view full-resolution client analytics dashboard"
              style={{ cursor: 'pointer' }}
            >
              <Image
                src="/images/realcase.png"
                alt="Shobana Men's Salon Analytics Dashboard showing 5 leads, 2 billable leads, and ₹200 billing"
                width={2670}
                height={840}
                className="case-image"
                sizes="(max-width: 768px) 100vw, 700px"
                priority
              />
              <div className="case-zoom-overlay">
                <span className="zoom-hint">🔍 Tap to expand &amp; inspect</span>
              </div>
            </div>

            <div className="case-caption">
              <span className="caption-icon">🔒</span>
              <span>Direct snapshot from client portal: 5 total leads captured → 2 verified billable appointments → ₹200 total monthly billing.</span>
            </div>
          </div>

          {/* Right Column: Breakdown & Metrics */}
          <div className="case-content-card">
            <div className="case-client-header">
              <span className="client-logo">✂️</span>
              <div>
                <h3 className="client-name">Shobana Men&apos;s Luxury Salon</h3>
                <p className="client-location">Hyderabad • Premium Grooming & Barber Services</p>
              </div>
            </div>

            <div className="case-metric-cards">
              <div className="metric-box">
                <span className="metric-label">Total Leads Captured</span>
                <span className="metric-val">5</span>
                <span className="metric-sub">Site visitors who initiated booking</span>
              </div>
              <div className="metric-box highlight">
                <span className="metric-label">Verified Billable Appointments</span>
                <span className="metric-val highlight">2</span>
                <span className="metric-sub">Attended, genuine haircut & beard bookings</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Total Monthly Billing</span>
                <span className="metric-val green">₹200</span>
                <span className="metric-sub">Strictly ₹100 per verified customer</span>
              </div>
            </div>

            <div className="case-highlights">
              <h4>Why This Matters For Your Business:</h4>
              <ul className="case-checklist">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Zero Pay for Incomplete Enquiries:</strong> 3 visitors clicked but never completed their appointment. The client paid <strong>₹0</strong> for them.
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>High Customer ROI:</strong> A single salon grooming package is typically ₹800–₹1,500. Paying ₹100 per confirmed customer produced an immediate <strong>8x–15x ROI</strong>.
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>100% Transparent Dashboard:</strong> Every lead timestamp, phone number, and verification status is viewable 24/7 in the client portal.
                  </div>
                </li>
              </ul>
            </div>

            <blockquote className="case-testimonial">
              <div className="stars">★★★★★</div>
              <p>&ldquo;i made my salon online and i loved the service,its oustanding.&rdquo;</p>
              <cite>— Saikrishna Konduri, Owner (Verified Google Review)</cite>
            </blockquote>

            <div className="case-cta-row">
              <motion.a
                className="btn btn-wa btn-growth-plan"
                href={getWhatsAppGrowthPlanLink("CaseStudy_Shobana")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackFunnelEvent('cta_click', { source: 'case_study_growth_plan' })}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <svg className="ic"><use href="#i-wa" /></svg>
                Get a Similar Growth Plan for My Business
              </motion.a>
              <motion.a
                className="btn btn-ghost"
                href="https://shobanamensalon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackFunnelEvent('live_site_click', { client: 'Shobana_Salon_CaseStudy' })}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Visit Live Salon Site ↗
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Real Client Dashboard */}
      {isZoomed && (
        <div className="lightbox-backdrop" onClick={() => setIsZoomed(false)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <div className="lightbox-header">
              <div>
                <strong>Shobana Men&apos;s Salon — Analytics Dashboard Snapshot</strong>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: 'var(--muted)' }}>
                  Live metrics: 5 total leads captured → 2 verified appointments → ₹200 billed
                </p>
              </div>
              <button 
                type="button" 
                className="lightbox-close" 
                onClick={() => setIsZoomed(false)}
                aria-label="Close analytics snapshot"
              >
                ✕
              </button>
            </div>
            <div className="lightbox-body" style={{ background: '#FFE500', padding: '12px', borderRadius: '12px', overflow: 'auto' }}>
              <Image
                src="/images/realcase.png"
                alt="Shobana Men's Salon Analytics Dashboard full view"
                width={2670}
                height={840}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
