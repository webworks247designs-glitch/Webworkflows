export default function ModelDifference() {
  return (
    <section className="sec" id="services" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>More Than a Website</h2>
          <p>Everything you need to launch, run, and grow your online presence—included as standard.</p>
        </div>

        <div className="svc-grid" style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          scrollSnapType: 'x mandatory', 
          gap: '24px', 
          paddingBottom: '24px', 
          WebkitOverflowScrolling: 'touch' 
        }}>
          
          <div className="panel" style={{ flex: '0 0 calc(85vw - 48px)', maxWidth: '320px', scrollSnapAlign: 'start', background: 'var(--surface)', border: '1px solid var(--line)', padding: '32px 24px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--cobalt)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
              ✦
            </div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>Custom Web Design</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Tailored, high-converting interfaces designed specifically for your brand and your target audience.
            </p>
          </div>

          <div className="panel" style={{ flex: '0 0 calc(85vw - 48px)', maxWidth: '320px', scrollSnapAlign: 'start', background: 'var(--surface)', border: '1px solid var(--line)', padding: '32px 24px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--butter)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
              ⌖
            </div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>Lead Generation</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Built-in forms, WhatsApp integrations, and clear calls-to-action that turn casual visitors into leads.
            </p>
          </div>

          <div className="panel" style={{ flex: '0 0 calc(85vw - 48px)', maxWidth: '320px', scrollSnapAlign: 'start', background: 'var(--surface)', border: '1px solid var(--line)', padding: '32px 24px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--mint)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
              ⚡
            </div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>Fast & Secure Hosting</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Lightning-fast cloud hosting with SSL certificates included, ensuring your site is always online and secure.
            </p>
          </div>

          <div className="panel" style={{ flex: '0 0 calc(85vw - 48px)', maxWidth: '320px', scrollSnapAlign: 'start', background: 'var(--surface)', border: '1px solid var(--line)', padding: '32px 24px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--line-strong)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
              📱
            </div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>Mobile-First</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Flawless responsive design that looks and works perfectly on smartphones, tablets, and desktops alike.
            </p>
          </div>

          <div className="panel" style={{ flex: '0 0 calc(85vw - 48px)', maxWidth: '320px', scrollSnapAlign: 'start', background: 'var(--surface)', border: '1px solid var(--line)', padding: '32px 24px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--line-strong)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
              🔍
            </div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>SEO Optimization</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              On-page search engine optimization so local customers can easily find your business on Google.
            </p>
          </div>

          <div className="panel" style={{ flex: '0 0 calc(85vw - 48px)', maxWidth: '320px', scrollSnapAlign: 'start', background: 'var(--surface)', border: '1px solid var(--line)', padding: '32px 24px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--line-strong)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
              📊
            </div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>Tracking & Analytics</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Transparent reporting and event tracking so you always know exactly how your website is performing.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
