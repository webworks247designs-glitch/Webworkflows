"use client";

import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  const [legalModal, setLegalModal] = useState<"terms" | "privacy" | null>(null);

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          
          <div className="foot-brand">
            <a className="brand" href="#top" style={{ marginRight: 0 }}>
              <span className="mark" aria-hidden="true"></span>
              <span>Webworkflo&apos;s</span>
            </a>
            <p className="foot-desc">
              Websites, design systems &amp; digital craft built by hand in Hyderabad.
            </p>
          </div>

          <div className="foot-nav-col">
            <span className="foot-col-title">Navigation</span>
            <nav className="foot-nav" aria-label="Footer">
              <a href="#work">Work</a>
              <a href="#case-study">Case Study</a>
              <a href="#testimonials">Reviews</a>
              <a href="#pricing">Pricing</a>
              <a href="/website-designer-hyderabad">Hyderabad Web Design</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="foot-google">
            <a
              href="https://www.google.co.in/search?utm_medium=noren&utm_source=gbp&utm_campaign=2026&q=Webworkflo%27s&ludocid=13756383820960255399&lsig=AB86z5V9nz1E1uhJ3Hct0m5oRCII#ebo=0"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-google-link"
              aria-label="Check us out on Google"
            >
              <div className="foot-google-info">
                <div className="foot-google-header">
                  <svg className="foot-google-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span className="foot-google-title">Find us on Google</span>
                </div>
                <span className="foot-google-sub">Verified Business Profile</span>
                <span className="foot-google-cta">Tap to view reviews &rarr;</span>
              </div>

              <div className="foot-google-qr-wrap">
                <Image
                  src="/images/google-qr.png"
                  alt="Find us on Google QR Code"
                  width={100}
                  height={100}
                  className="foot-google-qr"
                  style={{ width: 'auto', height: 'auto', borderRadius: '4px' }}
                />
              </div>
            </a>
          </div>

        </div>

        <div className="foot-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p className="copy">&copy; {year} <span>Webworkflo&apos;s</span>. Handcrafted in Hyderabad, India.</p>
          <div style={{ display: 'flex', gap: '20px', fontSize: '0.85rem', color: 'var(--muted)' }}>
            <button 
              type="button" 
              onClick={() => setLegalModal("terms")} 
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--muted)', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Terms of Service
            </button>
            <button 
              type="button" 
              onClick={() => setLegalModal("privacy")} 
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--muted)', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Legal Document Modal */}
      {legalModal && (
        <div 
          className="lightbox-backdrop" 
          onClick={() => setLegalModal(null)}
          style={{ zIndex: 100 }}
        >
          <div 
            className="lightbox-content" 
            onClick={e => e.stopPropagation()} 
            style={{ 
              maxWidth: '680px', 
              borderRadius: '4px', 
              border: '1px solid var(--line-strong)', 
              background: 'var(--surface)',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: 'clamp(24px, 4vw, 36px)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--line)', paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--ink)' }}>
                {legalModal === "terms" ? "Terms of Service" : "Privacy Policy"}
              </h3>
              <button 
                type="button" 
                onClick={() => setLegalModal(null)} 
                style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: 'var(--muted)' }}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {legalModal === "terms" ? (
              <div style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--muted)' }}>
                <p style={{ marginBottom: '16px' }}>
                  <strong style={{ color: 'var(--ink)' }}>1. Scope of Engagement & Pricing Models:</strong> Webworkflo&apos;s provides bespoke Next.js web development, mobile-first design systems, and digital growth infrastructure. Fixed custom builds start from ₹8,999 with zero recurring monthly platform fees. Our performance enquiry model starts from ₹4,749 one-time (cloud hosting included) with agreed pay-per-verified-lead billing.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  <strong style={{ color: 'var(--ink)' }}>2. 100% Client Code & Asset Ownership:</strong> Upon completion of development and settlement of invoices, all custom source code, frontend assets, design tokens, domain configurations, and credentials belong 100% to the client with zero vendor lock-in.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  <strong style={{ color: 'var(--ink)' }}>3. 48-Hour Enquiry Dispute Standard:</strong> For clients operating on the enquiry-based model, each lead is logged with timestamp and verified contact parameters in your client dashboard. If any enquiry is unreachable, duplicate, spam, or out-of-service, it can be flagged within 48 hours for immediate zero-charge exclusion.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  <strong style={{ color: 'var(--ink)' }}>4. Hosting & Infrastructure Transparency:</strong> Cloud hosting is included in the ₹4,749 launch setup. For custom third-party host migrations (Hostinger, MilesWeb, AWS, Vercel), accounts are registered in the client&apos;s name for full operational independence.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  <strong style={{ color: 'var(--ink)' }}>5. Delivery Timelines & Revisions:</strong> Standard project delivery is 5 to 7 business days from receipt of brand collateral. Each package includes dedicated revision cycles prior to production deployment.
                </p>
                <p>
                  <strong style={{ color: 'var(--ink)' }}>6. Governing Law:</strong> All contracts, representations, and services are governed under the jurisdiction of the commercial courts in Hyderabad, Telangana, India.
                </p>
              </div>
            ) : (
              <div style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--muted)' }}>
                <p style={{ marginBottom: '16px' }}>
                  <strong style={{ color: 'var(--ink)' }}>1. Information Collected:</strong> We collect only business details voluntarily submitted through our website forms, direct WhatsApp consultations, or client onboarding workflows (such as client name, phone number, business niche, and domain preferences).
                </p>
                <p style={{ marginBottom: '16px' }}>
                  <strong style={{ color: 'var(--ink)' }}>2. Strict Zero Data-Selling Policy:</strong> We enforce an absolute policy against selling, leasing, renting, or trading client contact details, phone numbers, or lead logs to third-party marketing companies, advertisers, or data brokers.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  <strong style={{ color: 'var(--ink)' }}>3. Lead Privacy & Cryptographic Security:</strong> Customer phone numbers and booking inquiries generated on client websites are transmitted over encrypted TLS/HTTPS protocols and routed strictly to the designated business owner.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  <strong style={{ color: 'var(--ink)' }}>4. WhatsApp Communication:</strong> WhatsApp inquiries initiated through our website are governed by end-to-end messaging encryption protocols. We use this direct channel solely for project discussions, growth plan delivery, and client support.
                </p>
                <p>
                  <strong style={{ color: 'var(--ink)' }}>5. Right to Erasure & Inquiries:</strong> Clients have the full right to request an extract or permanent deletion of their contact records and consultation notes at any time by reaching out directly via our official channels.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
