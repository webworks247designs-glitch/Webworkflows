export default function EnquiryRules() {
  return (
    <section className="sec" id="enquiry-rules" style={{ paddingTop: 0 }}>
      <div className="wrap">
        
        <div className="sec-head">
          <h2>What You Don't Pay For</h2>
        </div>
        
        <div className="svc-grid">
          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)', gridColumn: '1 / -1', maxWidth: '600px', margin: '0 auto' }}>
            <ul style={{ display: 'grid', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--muted)' }}>✓</span>
                <span style={{ color: 'var(--muted)' }}>No charge for website visitors</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--muted)' }}>✓</span>
                <span style={{ color: 'var(--muted)' }}>No charge for page views</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--muted)' }}>✓</span>
                <span style={{ color: 'var(--muted)' }}>No charge for random clicks</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--muted)' }}>✓</span>
                <span style={{ color: 'var(--muted)' }}>No charge for spam</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--muted)' }}>✓</span>
                <span style={{ color: 'var(--muted)' }}>No charge for duplicate enquiries</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--muted)' }}>✓</span>
                <span style={{ color: 'var(--muted)' }}>No charge for unverified walk-ins</span>
              </li>
            </ul>

            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--line)', textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: 'var(--ink)' }}>
                If someone sees your website and walks into your business, we don't charge you for that.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
