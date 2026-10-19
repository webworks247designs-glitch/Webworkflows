"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { getWhatsAppGrowthPlanLink, trackFunnelEvent } from "@/lib/analytics";

const EXAMPLES = [
  {
    id: "restaurant",
    name: "Restaurant",
    icon: "Dining",
    launch: "₹4,749",
    hosting: "Hosting Included",
    enquiryType: "Table reservation / online order",
    rate: "₹100",
    leads: "15",
    totalCharge: "₹1,500",
    estimatedValue: "₹15,000+",
    image: "/images/boathouse1.png",
    exampleText: "If 15 table reservations or dining orders are generated, your enquiry investment is ₹1,500 for over ₹15,000+ in dining receipts.",
  },
  {
    id: "salon",
    name: "Men's Salon",
    icon: "Grooming",
    launch: "₹4,749",
    hosting: "Hosting Included",
    enquiryType: "Haircut & grooming appointment",
    rate: "₹80",
    leads: "25",
    totalCharge: "₹2,000",
    estimatedValue: "₹18,000+",
    image: "/images/salon1.png",
    exampleText: "If 25 grooming appointments are booked through the website, your enquiry cost is ₹2,000, bringing in repeat clients worth thousands.",
  },
  {
    id: "bakery",
    name: "Bakery / Cafe",
    icon: "Bakery",
    launch: "₹4,749",
    hosting: "Hosting Included",
    enquiryType: "Custom cake / catering preorder",
    rate: "₹120",
    leads: "10",
    totalCharge: "₹1,200",
    estimatedValue: "₹22,000+",
    image: "/images/bakery-showcase.jpg",
    exampleText: "High-ticket custom cakes or event catering enquiries at ₹120 each generate substantial profit margins on every confirmed bake.",
  },
  {
    id: "clinic",
    name: "Physio / Clinic",
    icon: "Clinic",
    launch: "₹4,749",
    hosting: "Hosting Included",
    enquiryType: "Consultation appointment",
    rate: "₹150",
    leads: "20",
    totalCharge: "₹3,000",
    estimatedValue: "₹30,000+",
    image: "/images/clinic-showcase.jpg",
    exampleText: "A clinic charging ₹1,500 per session pays just ₹150 for a patient who often requires 4 to 8 follow-up sessions.",
  },
  {
    id: "ecommerce",
    name: "Boutique Store",
    icon: "Retail",
    launch: "₹4,749",
    hosting: "Hosting Included",
    enquiryType: "Curated order / bulk enquiry",
    rate: "₹100",
    leads: "30",
    totalCharge: "₹3,000",
    estimatedValue: "₹45,000+",
    image: "/images/ecommerce-showcase.jpg",
    exampleText: "Bespoke home decor orders and bulk corporate gifting requests generate high-margin turnover with direct UPI payments.",
  },
];

export default function CostFlow() {
  const [activeIdx, setActiveIdx] = useState(0);
  const cur = EXAMPLES[activeIdx];

  return (
    <section className="sec" id="cost-flow" style={{ paddingTop: 0 }}>
      <div className="wrap">
        
        <motion.div 
          className="sec-head" 
          style={{ textAlign: 'center', marginInline: 'auto' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2>Interactive Model Simulator</h2>
          <p>Select your business type to see how the one-time launch and pay-per-enquiry model works in practice:</p>
        </motion.div>

        {/* Industry Selector Pills */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
          {EXAMPLES.map((ex, idx) => (
            <motion.button
              key={ex.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`sample-pill ${activeIdx === idx ? 'active' : ''}`}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span>{ex.icon}</span>
              <span>{ex.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Simulator Card */}
        <motion.div 
          style={{ 
            maxWidth: '880px', 
            margin: '0 auto', 
            background: 'var(--surface)', 
            border: '1px solid var(--line)', 
            borderRadius: '24px', 
            padding: 'clamp(20px, 4vw, 36px)',
            boxShadow: '0 20px 50px -20px rgba(var(--shadow), 0.3)'
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
            
            {/* Left: Financial Breakdown */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{ fontSize: '1.6rem' }}>{cur.icon}</span>
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{cur.name}</h3>
              </div>
              
              <ul style={{ display: 'grid', gap: '14px', marginBottom: '24px', borderBottom: '1px solid var(--line)', paddingBottom: '24px' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>Launch &amp; Infrastructure:</span>
                  <span style={{ fontWeight: 700, color: 'var(--ink)' }}>{cur.launch}</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>Cloud Hosting:</span>
                  <span style={{ fontWeight: 700, color: 'var(--ink)' }}>{cur.hosting}</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>Enquiry Type:</span>
                  <span style={{ fontWeight: 600, color: 'var(--cobalt)', fontSize: '0.88rem', textAlign: 'right' }}>{cur.enquiryType}</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>Agreed Enquiry Rate:</span>
                  <span style={{ fontWeight: 700, color: 'var(--wa)' }}>{cur.rate} / lead</span>
                </li>
              </ul>

              <div style={{ background: 'var(--bg)', padding: '16px', borderRadius: '14px', border: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>Example: {cur.leads} verified enquiries</span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--ink)' }}>{cur.totalCharge} charge</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px dashed var(--line)' }}>
                  <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--muted)' }}>Est. Business Revenue:</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--mint)' }}>{cur.estimatedValue}</span>
                </div>
                <p style={{ margin: '12px 0 0', fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                  {cur.exampleText}
                </p>
              </div>
            </div>

            {/* Right: Visual Sample Preview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                aspectRatio: '16/10', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                border: '1px solid var(--line)',
                boxShadow: '0 12px 28px -12px rgba(0,0,0,0.5)'
              }}>
                <Image
                  src={cur.image}
                  alt={`${cur.name} Website Sample`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>Verified Design Model</span>
                <a 
                  href={getWhatsAppGrowthPlanLink(`Calculator_${cur.name}`)} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa btn-sm" 
                  style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                  onClick={() => trackFunnelEvent('cta_click', { source: `calculator_${cur.id}` })}
                >
                  Get Growth Plan for {cur.name} →
                </a>
              </div>
            </div>

          </div>

          <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '24px', fontStyle: 'italic', textAlign: 'center', marginInline: 'auto', maxWidth: '650px' }}>
            * The enquiry rate is mutually agreed upon before launch. Cloud hosting is included in the ₹4,749 launch setup.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
