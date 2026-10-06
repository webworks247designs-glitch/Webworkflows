export default function Pricing() {
  return (
    <section className="sec" id="pricing" style={{ paddingTop: 0 }}>
      <div className="wrap">
        
        {/* TWO WAYS TO PAY (Desktop Only) */}
        <div className="show-desktop">
          <div className="sec-head">
            <h2>Two Ways to Pay for Your Website</h2>
            <p>Most website projects use a fixed upfront price. Our model starts with a small launch cost and connects the ongoing performance fee to qualified enquiries.</p>
          </div>
          
          <div className="svc-grid" style={{ marginBottom: '64px' }}>
            {/* Left Panel */}
            <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <h3 style={{ marginBottom: '8px' }}>Typical Fixed-Price Website</h3>
              <p className="price" style={{ color: 'var(--muted)', fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>₹10,000–₹50,000+</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '16px' }}>Common small-business range in India</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '24px' }}>You generally pay for the website project upfront.</p>
              
              <ul style={{ display: 'grid', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--muted)' }}>✓</span>
                  <span style={{ color: 'var(--muted)' }}>Fixed project price</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--muted)' }}>✓</span>
                  <span style={{ color: 'var(--muted)' }}>Pay mainly for design & development</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--muted)' }}>✓</span>
                  <span style={{ color: 'var(--muted)' }}>Website delivered after project completion</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--muted)' }}>✓</span>
                  <span style={{ color: 'var(--muted)' }}>Enquiries are not usually the primary billing metric</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--muted)' }}>✓</span>
                  <span style={{ color: 'var(--muted)' }}>Larger upfront commitment</span>
                </li>
              </ul>
              <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '24px', fontStyle: 'italic' }}>
                *Actual pricing varies by provider, scope, design and features.
              </p>
            </div>

            {/* Right Panel */}
            <div className="panel p-mint" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '16px' }}>Our Enquiry-Based Model</h3>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <p className="price" style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>₹3,000</p>
                <p style={{ margin: 0, fontWeight: 600 }}>One-time Launch & Infrastructure</p>
              </div>
              
              <div style={{ marginTop: '16px' }}>
                <p style={{ fontWeight: 600, margin: 0 }}>+ Hosting</p>
                <p style={{ fontSize: '0.85rem', margin: 0, opacity: 0.8 }}>Charged separately at actual provider cost</p>
              </div>
              
              <div style={{ marginTop: '16px', marginBottom: '24px' }}>
                <p style={{ fontWeight: 600, margin: 0 }}>+ Qualified Enquiries</p>
                <p style={{ fontSize: '0.85rem', margin: 0, opacity: 0.8 }}>Business-specific enquiry rate</p>
              </div>
              
              <p style={{ background: 'rgba(255,255,255,0.2)', padding: '12px', borderRadius: '8px', fontWeight: 600, marginBottom: '24px' }}>
                No compulsory monthly website subscription.
              </p>

              <ul style={{ display: 'grid', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span>✓</span>
                  <span>Low initial commitment</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span>✓</span>
                  <span>Website built around customer action</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span>✓</span>
                  <span>Pay for qualified enquiries</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span>✓</span>
                  <span>Enquiry rate customized by business</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span>✓</span>
                  <span>No charge for ordinary website visitors</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span>✓</span>
                  <span>No charge for unverified walk-ins</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sec-head">
          <h2>Our Pricing Breakdown</h2>
          <p>No large upfront fees. No compulsory monthly retainers.</p>
        </div>

        {/* DESKTOP VIEW (Detailed) */}
        <div className="pkgs show-desktop">
          <article className="pkg">
            <b style={{ color: 'var(--muted)', display: 'block', fontSize: '1.25rem', marginBottom: '8px' }}>01</b>
            <h3>Launch & Infrastructure</h3>
            <p className="price">₹3,000 one-time</p>
            <p style={{ marginTop: '12px', fontSize: '.95rem', color: 'var(--muted)' }}>Covers project setup, business email configuration, deployment, tracking and website launch.</p>
          </article>
          
          <article className="pkg">
            <b style={{ color: 'var(--muted)', display: 'block', fontSize: '1.25rem', marginBottom: '8px' }}>02</b>
            <h3>Hosting</h3>
            <p className="price">Actual provider cost</p>
            <p style={{ marginTop: '12px', fontSize: '.95rem', color: 'var(--muted)' }}>Hosting is kept separate and transparent. Our typical setup is around ₹200, depending on the provider plan.</p>
          </article>

          <article className="pkg">
            <b style={{ color: 'var(--muted)', display: 'block', fontSize: '1.25rem', marginBottom: '8px' }}>03</b>
            <h3>Qualified Enquiries</h3>
            <p className="price">Custom rate</p>
            <p style={{ marginTop: '12px', fontSize: '.95rem', color: 'var(--muted)' }}>The enquiry fee depends on your business and the value of a genuine customer enquiry.</p>
          </article>
        </div>

        {/* MOBILE VIEW (Ultra Concise Side-by-Side) */}
        <div className="show-mobile" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '12px',
          marginTop: '32px'
        }}>
          <article className="pkg" style={{ 
            background: 'var(--surface)', 
            border: '1px solid var(--line)', 
            borderRadius: '16px', 
            padding: '16px 12px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h3 style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Launch</h3>
            <p className="price" style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 8px 0', color: 'var(--ink)' }}>₹3,000</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', margin: 0, lineHeight: 1.3 }}>One-time setup fee</p>
          </article>
          
          <article className="pkg" style={{ 
            background: 'var(--surface)', 
            border: '1px solid var(--line)', 
            borderRadius: '16px', 
            padding: '16px 12px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h3 style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Hosting</h3>
            <p className="price" style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 8px 0', color: 'var(--ink)' }}>At Cost</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', margin: 0, lineHeight: 1.3 }}>Zero markup</p>
          </article>

          <article className="pkg" style={{ 
            background: 'var(--surface)', 
            border: '1px solid var(--cobalt)', 
            borderRadius: '16px', 
            padding: '16px 12px',
            textAlign: 'center',
            background: 'color-mix(in srgb, var(--cobalt) 5%, transparent)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h3 style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Enquiries</h3>
            <p className="price" style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 8px 0', color: 'var(--cobalt)' }}>Custom</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', margin: 0, lineHeight: 1.3 }}>Pay per result</p>
          </article>
        </div>

      </div>
    </section>
  );
}
