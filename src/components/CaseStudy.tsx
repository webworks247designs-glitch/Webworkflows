"use client";

import { useState } from "react";
import Image from "next/image";
import { getWhatsAppGrowthPlanLink, trackFunnelEvent } from "@/lib/analytics";

export default function CaseStudy() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="sec case-study-sec" id="case-study">
      <div className="wrap">
        <div className="sec-head">
          <div className="badge-tag">
            <span>Client Case Study</span>
          </div>
          <h2>Proof in Practice: How Shobana Salon Scaled Bookings</h2>
          <p>
            Real data from an active Hyderabad client dashboard. See how our pay-per-enquiry model generated genuine customers while eliminating risk.
          </p>
        </div>

        <div className="case-grid">
          {/* Left Column: Analytics Screenshot Card */}
          <div className="case-visual-card">
            <div className="case-visual-header">
              <span className="case-domain">shobanamensalon.vercel.app/portal/analytics</span>
              <span className="case-status-badge">Live Dashboard</span>
            </div>

            <div 
              className="case-image-wrapper" 
              onClick={() => setIsZoomed(true)} 
              title="Click to view full-resolution client analytics dashboard"
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              {!imgLoaded && (
                <div 
                  className="skeleton-box" 
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    minHeight: '260px', 
                    zIndex: 1 
                  }} 
                />
              )}
              <Image
                src="/images/realcase-v2.webp"
                alt="Shobana Men's Salon Analytics Dashboard showing 479 total leads, 330 billable leads, and ₹3,300 billing"
                width={1024}
                height={341}
                className="case-image"
                sizes="(max-width: 768px) 100vw, 700px"
                loading="lazy"
                decoding="async"
                onLoad={() => setImgLoaded(true)}
              />
              <div className="case-zoom-overlay">
                <span className="zoom-hint">Click to inspect full view</span>
              </div>
            </div>

            <div className="case-caption">
              <span>Client Portal Verification: 479 total leads captured, 330 verified billable appointments, ₹3,300 billing.</span>
            </div>
          </div>

          {/* Right Column: Breakdown & Metrics */}
          <div className="case-content-card">
            <div className="case-client-header">
              <div>
                <h3 className="client-name">Shobana Men&apos;s Luxury Salon</h3>
                <p className="client-location">Hyderabad / Premium Grooming and Barber Services</p>
              </div>
            </div>

            <div className="case-metric-cards">
              <div className="metric-box">
                <span className="metric-label">Total Leads Captured</span>
                <span className="metric-val">479</span>
                <span className="metric-sub">Site visitors who initiated booking</span>
              </div>
              <div className="metric-box highlight">
                <span className="metric-label">Verified Billable Appointments</span>
                <span className="metric-val highlight">330</span>
                <span className="metric-sub">Attended haircut and grooming bookings</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Estimated Billing Cost</span>
                <span className="metric-val green">₹3,300</span>
                <span className="metric-sub">Verified performance billing</span>
              </div>
            </div>

            <div className="case-highlights">
              <h4>Why This Matters For Your Business:</h4>
              <ul className="case-checklist" style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <span style={{ fontWeight: 700, color: 'var(--wa)', fontSize: '0.85rem' }}>01</span>
                  <div>
                    <strong>Zero Pay for Incomplete Enquiries:</strong> 149 casual visitors clicked but did not confirm appointments. The client paid <strong>₹0</strong> for them.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <span style={{ fontWeight: 700, color: 'var(--wa)', fontSize: '0.85rem' }}>02</span>
                  <div>
                    <strong>High Customer ROI:</strong> 330 confirmed customer visits produced substantial sustained revenue, delivering an immediate <strong>10x+ ROI</strong>.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontWeight: 700, color: 'var(--wa)', fontSize: '0.85rem' }}>03</span>
                  <div>
                    <strong>100% Transparent Dashboard:</strong> Every lead timestamp, phone number, and verification status is viewable 24/7 in the client portal.
                  </div>
                </li>
              </ul>
            </div>

            <blockquote className="case-testimonial">
              <div className="stars">★★★★★</div>
              <p>&ldquo;i made my salon online and i loved the service,its oustanding.&rdquo;</p>
              <cite>Saikrishna Konduri, Owner (Verified Google Review)</cite>
            </blockquote>

            <div className="case-cta-row">
              <a
                className="btn btn-wa btn-growth-plan"
                href={getWhatsAppGrowthPlanLink("CaseStudy_Shobana")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackFunnelEvent('cta_click', { source: 'case_study_growth_plan' })}
              >
                <svg className="ic"><use href="#i-wa" /></svg>
                Get a Similar Growth Plan for My Business
              </a>
              <a
                className="btn btn-ghost"
                href="https://shobanamensalon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackFunnelEvent('live_site_click', { client: 'Shobana_Salon_CaseStudy' })}
              >
                Visit Live Salon Site ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Real Client Dashboard */}
      {isZoomed && (
        <div className="lightbox-backdrop" onClick={() => setIsZoomed(false)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()} style={{ borderRadius: '4px', border: '1px solid var(--line-strong)', background: 'var(--surface)' }}>
            <div className="lightbox-header">
              <div>
                <strong>Shobana Men&apos;s Salon - Analytics Dashboard Snapshot</strong>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: 'var(--muted)' }}>
                  Live metrics: 479 total leads captured / 330 verified appointments / ₹3,300 billed
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
            <div className="lightbox-body" style={{ background: '#EAE6DE', padding: '16px', borderRadius: '4px', overflow: 'auto' }}>
              <Image
                src="/images/realcase-v2.webp"
                alt="Shobana Men's Salon Analytics Dashboard full view"
                width={1024}
                height={341}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
