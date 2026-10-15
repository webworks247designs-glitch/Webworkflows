"use client";

import { getWhatsAppGrowthPlanLink, trackFunnelEvent } from "@/lib/analytics";

const CONCRETE_RATES = [
  {
    icon: "🍽️",
    business: "Cafes & Quick Dining",
    rateRange: "₹20 – ₹40",
    unit: "per confirmed order / table lead",
    avgTicket: "₹400 – ₹1,200",
    typicalRoi: "10x – 25x",
    notes: "High frequency, neighborhood repeat customers."
  },
  {
    icon: "✂️",
    business: "Luxury Salons & Grooming",
    rateRange: "₹50 – ₹100",
    unit: "per booked grooming appointment",
    avgTicket: "₹800 – ₹2,500",
    typicalRoi: "8x – 15x",
    notes: "Proven by Shobana Salon at ₹100/lead."
  },
  {
    icon: "🥐",
    business: "Artisanal Bakeries & Cakes",
    rateRange: "₹60 – ₹120",
    unit: "per custom preorder enquiry",
    avgTicket: "₹1,500 – ₹4,000",
    typicalRoi: "12x – 30x",
    notes: "High-ticket custom cakes & catering hampers."
  },
  {
    icon: "🩺",
    business: "Clinics & Physiotherapy",
    rateRange: "₹150 – ₹250",
    unit: "per patient consultation booked",
    avgTicket: "₹1,000 – ₹3,500",
    typicalRoi: "5x – 12x",
    notes: "Multi-session care with high lifetime value."
  },
  {
    icon: "⚡",
    business: "Portfolios & Freelancers",
    rateRange: "₹0 / lead",
    unit: "Flat setup + optional maintenance",
    avgTicket: "Global Recruiters / Clients",
    typicalRoi: "Career Growth",
    notes: "Simple flat model with no per-lead billing."
  }
];

export default function PricingVerification() {
  return (
    <section className="sec pricing-verify-sec" id="verification-billing">
      <div className="wrap">
        {/* Section 1: How Enquiries are Verified & Billed */}
        <div className="sec-head">
          <div className="badge-tag">
            <span className="dot-pulse"></span>
            <span>Zero-Risk Guarantee • Complete Transparency</span>
          </div>
          <h2>How Enquiries Are Verified, Filtered &amp; Billed</h2>
          <p>
            You only pay for genuine, high-intent prospective customers who contact your business. Here is our exact verification standard:
          </p>
        </div>

        <div className="verify-steps-grid">
          <div className="verify-step-card">
            <div className="step-num">01</div>
            <div className="step-icon">🎯</div>
            <h3>Customer Intent</h3>
            <p>
              A visitor explicitly submits an appointment, table reservation, or quote enquiry on your website with their verified contact info.
            </p>
            <span className="step-pill">What counts</span>
          </div>

          <div className="verify-step-card">
            <div className="step-num">02</div>
            <div className="step-icon">🛡️</div>
            <h3>Automated Spam Filter</h3>
            <p>
              Bot submissions, random clicks, duplicate inquiries, and blank messages are automatically stripped out. <strong>Zero charge.</strong>
            </p>
            <span className="step-pill green">Filtered: ₹0</span>
          </div>

          <div className="verify-step-card">
            <div className="step-num">03</div>
            <div className="step-icon">📊</div>
            <h3>Live Portal &amp; 48h Dispute</h3>
            <p>
              Each lead appears with timestamp in your portal. If a customer is unreachable, fake, or a wrong number, you have <strong>48 hours to dispute with 1 tap</strong>—it is immediately waived.
            </p>
            <span className="step-pill blue">48h Dispute Window</span>
          </div>
        </div>

        {/* Section 2: Realistic Sample Invoice */}
        <div className="invoice-container">
          <div className="invoice-header">
            <div>
              <h3>Realistic Monthly Invoice Simulation</h3>
              <p>Compare Month 1 (Launch) vs Month 2+ (Pure Results)</p>
            </div>
            <span className="invoice-tag">Sample: Hyderabad Salon</span>
          </div>

          <div className="invoice-split">
            {/* Month 1 */}
            <div className="invoice-card">
              <div className="invoice-period">
                <span className="period-badge">Month 1 (Launch &amp; Setup)</span>
                <span className="invoice-total">₹3,400</span>
              </div>
              <ul className="invoice-items">
                <li>
                  <span>Launch &amp; Infrastructure (One-time)</span>
                  <strong>₹3,000</strong>
                </li>
                <li>
                  <span>Hosting Provider (Hostinger, MilesWeb, etc.)</span>
                  <strong>At actual cost</strong>
                </li>
                <li>
                  <span>Hosting Setup &amp; Processing Fee</span>
                  <strong>₹200</strong>
                </li>
                <li>
                  <span>2 Verified Enquiries (@ ₹100/enquiry)</span>
                  <strong>₹200</strong>
                </li>
                <li className="faint">
                  <span>3 Unqualified / Non-converting visits</span>
                  <span className="free-tag">₹0 (Free)</span>
                </li>
              </ul>
              <div className="invoice-foot">
                <span>Domain DNS, SSL, and server configured by hand</span>
              </div>
            </div>

            {/* Month 2 Onward */}
            <div className="invoice-card highlight">
              <div className="invoice-period">
                <span className="period-badge highlight">Month 2 Onward (Ongoing)</span>
                <span className="invoice-total highlight">₹500 + Host</span>
              </div>
              <ul className="invoice-items">
                <li>
                  <span>Ongoing Agency Retainer</span>
                  <strong className="green">₹0 (None)</strong>
                </li>
                <li>
                  <span>Hosting Provider (Hostinger, MilesWeb, etc.)</span>
                  <strong>At actual cost</strong>
                </li>
                <li>
                  <span>Hosting Processing &amp; SSL Maintenance</span>
                  <strong>₹200</strong>
                </li>
                <li>
                  <span>3 Verified Enquiries (@ ₹100/enquiry)</span>
                  <strong>₹300</strong>
                </li>
                <li className="faint">
                  <span>Ordinary website visitors &amp; walk-ins</span>
                  <span className="free-tag">₹0 (Free)</span>
                </li>
              </ul>
              <div className="invoice-foot highlight">
                <span>₹200 processing fee + provider cost. You only pay for real results.</span>
              </div>
            </div>
          </div>
          <p style={{ margin: '20px 0 0 0', fontSize: '0.84rem', color: 'var(--muted)', textAlign: 'center' }}>
            ℹ️ <strong>Hosting Transparency:</strong> Hosting is kept transparent at the respective provider plan (Hostinger, MilesWeb, or any provider of your choice). The ₹200 is our dedicated processing fee for nameserver management, SSL renewals, and server optimization.
          </p>
        </div>

        {/* Section 3: Concrete Industry Rate Table */}
        <div className="concrete-rates-section">
          <div className="sec-head" style={{ marginBottom: '24px' }}>
            <h3>Concrete Rate Ranges by Business Type</h3>
            <p>Every rate is locked in writing before project kickoff so there are zero surprises:</p>
          </div>

          <div className="rates-table-wrap">
            <table className="rates-table">
              <thead>
                <tr>
                  <th>Business Category</th>
                  <th>Verified Lead Rate</th>
                  <th>Typical Order / Ticket</th>
                  <th>Estimated ROI</th>
                  <th>Model Details</th>
                </tr>
              </thead>
              <tbody>
                {CONCRETE_RATES.map((r, i) => (
                  <tr key={i}>
                    <td>
                      <div className="rate-biz-cell">
                        <span className="biz-icon">{r.icon}</span>
                        <strong>{r.business}</strong>
                      </div>
                    </td>
                    <td>
                      <span className="rate-badge">{r.rateRange}</span>
                      <small className="unit-label">{r.unit}</small>
                    </td>
                    <td>{r.avgTicket}</td>
                    <td><strong className="roi-tag">{r.typicalRoi}</strong></td>
                    <td className="notes-cell">{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="verify-cta-card">
          <h3>Ready to turn your website into a measurable customer engine?</h3>
          <p>
            Request a Free Website Growth Plan. We will assess your local competitors, recommend high-converting layouts, and propose a concrete per-enquiry rate tailored to your business.
          </p>
          <div className="cta-row" style={{ justifyContent: 'center' }}>
            <a
              className="btn btn-wa btn-growth-plan"
              href={getWhatsAppGrowthPlanLink("PricingVerification")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFunnelEvent('cta_click', { source: 'pricing_verify_growth_plan' })}
            >
              <svg className="ic"><use href="#i-wa" /></svg>
              Get a Free Website Growth Plan
            </a>
            <a
              className="btn btn-ghost"
              href="#testimonials"
              onClick={() => trackFunnelEvent('review_click', { source: 'pricing_verify_read_reviews' })}
            >
              Read Client Google Reviews ↑
            </a>
          </div>
          <p className="guarantee-micro">
            ⚡ Delivered within 24 hours on WhatsApp • 100% Free • Zero commitment
          </p>
        </div>
      </div>
    </section>
  );
}
