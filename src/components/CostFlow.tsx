export default function CostFlow() {
  return (
    <section className="sec" id="cost-flow" style={{ paddingTop: 0 }}>
      <div className="wrap">
        
        {/* EXAMPLE */}
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '16px', padding: '32px' }}>
          <span style={{ display: 'block', color: 'var(--muted)', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '24px' }}>Example of Our Model</span>
          <h3 style={{ marginBottom: '24px' }}>Restaurant</h3>
          
          <ul style={{ display: 'grid', gap: '16px', marginBottom: '32px', borderBottom: '1px solid var(--line)', paddingBottom: '32px' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--muted)' }}>Launch & Infrastructure:</span>
              <span style={{ fontWeight: 600 }}>₹3,000</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--muted)' }}>Hosting:</span>
              <span style={{ fontWeight: 600 }}>Actual cost</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--muted)' }}>Qualified enquiry rate:</span>
              <span style={{ fontWeight: 600, textAlign: 'right' }}>Set according to the business</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--muted)' }}>Website enquiries:</span>
              <span style={{ fontWeight: 600, textAlign: 'right' }}>Measured through the website</span>
            </li>
          </ul>

          <div style={{ background: 'var(--bg)', padding: '24px', borderRadius: '12px', border: '1px solid var(--line)' }}>
            <p style={{ margin: 0, fontWeight: 500, lineHeight: 1.6 }}>
              Example:<br/>
              If a restaurant's agreed enquiry rate is ₹100 and the website generates 12 qualified enquiries, the enquiry charge is ₹1,200.
            </p>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '16px', fontStyle: 'italic', textAlign: 'center' }}>
            * The actual enquiry rate is agreed before launch.
          </p>
        </div>

      </div>
    </section>
  );
}
