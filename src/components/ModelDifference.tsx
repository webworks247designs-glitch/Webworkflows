export default function ModelDifference() {
  return (
    <section className="sec" id="services" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>More Than a Website</h2>
          <p>Everything you need to launch, run, and grow your online presence—designed visually and included as standard.</p>
        </div>

        <div className="svc-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))', 
          gap: 'clamp(16px, 3vw, 24px)' 
        }}>
          
          {/* 1. Custom Web Design */}
          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '20px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--cobalt)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                🎨
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--cobalt)' }}>Tailored UI</span>
            </div>
            
            {/* Visual Preview: Palette & Typography */}
            <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '12px', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#2563EB', display: 'inline-block' }}></span>
                <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
                <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }}></span>
                <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#0F172A', display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)' }}></span>
              </div>
              <span style={{ fontSize: '0.76rem', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>Aa Custom Typography</span>
            </div>

            <div>
              <h3 style={{ marginBottom: '8px', fontSize: '1.15rem' }}>Bespoke Web Design</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Unique layouts tailored specifically to your brand aesthetics and your customers—never generic cookie-cutter templates.
              </p>
            </div>
          </div>

          {/* 2. Instant Lead Generation */}
          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '20px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--wa)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                💬
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--wa)' }}>Lead Capture</span>
            </div>

            {/* Visual Preview: WhatsApp Notification */}
            <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '12px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--wa)', flexShrink: 0 }}></span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink)' }}>New Customer Enquiry</span>
                <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--muted)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>&quot;Can I book an appointment for tomorrow?&quot;</span>
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: '8px', fontSize: '1.15rem' }}>Direct WhatsApp &amp; Forms</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Streamlined enquiry triggers and 1-tap WhatsApp buttons routing high-intent customer requests directly to your phone.
              </p>
            </div>
          </div>

          {/* 3. 100/100 Speed & SEO */}
          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '20px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--mint)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                ⚡
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--mint)' }}>Top Tier Speed</span>
            </div>

            {/* Visual Preview: Google PageSpeed Score */}
            <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '12px', padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10B981', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem', fontWeight: 800 }}>
                  99
                </span>
                <span style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--ink)' }}>PageSpeed Score</span>
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--mint)', fontWeight: 600 }}>0.3s LCP</span>
            </div>

            <div>
              <h3 style={{ marginBottom: '8px', fontSize: '1.15rem' }}>Sub-Second Load Times</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Built on modern Next.js architecture with instant image delivery, passing Google Core Web Vitals with flying colors.
              </p>
            </div>
          </div>

          {/* 4. 100% Mobile-First */}
          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '20px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--butter)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                📱
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--butter)' }}>Responsive</span>
            </div>

            {/* Visual Preview: Bottom Action Bar */}
            <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '12px', padding: '8px 12px', display: 'flex', gap: '8px' }}>
              <span style={{ flex: 1, textAlign: 'center', background: 'var(--surface)', padding: '6px', borderRadius: '8px', fontSize: '0.72rem', fontWeight: 600, color: 'var(--ink)' }}>
                📍 View Menu
              </span>
              <span style={{ flex: 1, textAlign: 'center', background: 'var(--wa)', color: '#000', padding: '6px', borderRadius: '8px', fontSize: '0.72rem', fontWeight: 700 }}>
                💬 Chat Now
              </span>
            </div>

            <div>
              <h3 style={{ marginBottom: '8px', fontSize: '1.15rem' }}>Mobile-First Ergonomics</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Over 80% of your visitors browse on smartphones. Every layout is thumb-friendly, instant, and frictionless.
              </p>
            </div>
          </div>

          {/* 5. Booking & Preorders */}
          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '20px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--cobalt)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                🗓️
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--cobalt)' }}>Interactivity</span>
            </div>

            {/* Visual Preview: Slot Selector */}
            <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '12px', padding: '8px 12px', display: 'flex', gap: '6px', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ padding: '4px 8px', borderRadius: '6px', background: 'var(--surface)', fontSize: '0.72rem', color: 'var(--muted)' }}>10:00 AM</span>
              <span style={{ padding: '4px 8px', borderRadius: '6px', background: 'var(--cobalt)', color: '#fff', fontSize: '0.72rem', fontWeight: 700 }}>11:30 AM ✓</span>
              <span style={{ padding: '4px 8px', borderRadius: '6px', background: 'var(--surface)', fontSize: '0.72rem', color: 'var(--muted)' }}>2:00 PM</span>
            </div>

            <div>
              <h3 style={{ marginBottom: '8px', fontSize: '1.15rem' }}>Menus &amp; Appointment Flows</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Live menu filters, interactive service lists, and appointment booking flows that guide customers to book immediately.
              </p>
            </div>
          </div>

          {/* 6. Managed Cloud & Security */}
          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '20px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--mint)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                🛡️
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--mint)' }}>Security</span>
            </div>

            {/* Visual Preview: Uptime & SSL */}
            <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '12px', padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--ink)', fontWeight: 600 }}>🔒 SSL 256-bit Encrypted</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--mint)', fontWeight: 700 }}>● 99.9% Uptime</span>
            </div>

            <div>
              <h3 style={{ marginBottom: '8px', fontSize: '1.15rem' }}>Zero-Maintenance Cloud</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Global CDN distribution, free automatic SSL certificates, and managed infrastructure—you never worry about servers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
