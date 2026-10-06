export default function Protection() {
  return (
    <section className="sec" id="protection" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>Start Small. Measure What Happens.</h2>
          <p>You don't need to commit to a large website-development payment just to test whether your website can generate useful enquiries.</p>
        </div>
        
        <div style={{ marginTop: '48px', maxWidth: '1000px', margin: '48px auto 0' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            
            <div style={{ flex: '1 1 180px', padding: '24px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '16px', textAlign: 'center' }}>
              <b style={{ color: 'var(--muted)', display: 'block', fontSize: '1.25rem', marginBottom: '8px' }}>01</b>
              <h3 style={{ margin: 0 }}>Launch</h3>
              <span style={{ display: 'block', color: 'var(--muted)', marginTop: '8px' }}>₹3,000 setup</span>
            </div>
            
            <div style={{ color: 'var(--muted)', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="arr-right">→</span>
            </div>
            
            <div style={{ flex: '1 1 180px', padding: '24px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '16px', textAlign: 'center' }}>
              <b style={{ color: 'var(--muted)', display: 'block', fontSize: '1.25rem', marginBottom: '8px' }}>02</b>
              <h3 style={{ margin: 0 }}>Measure</h3>
              <span style={{ display: 'block', color: 'var(--muted)', marginTop: '8px' }}>Track genuine enquiries</span>
            </div>
            
            <div style={{ color: 'var(--muted)', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="arr-right">→</span>
            </div>
            
            <div style={{ flex: '1 1 180px', padding: '24px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '16px', textAlign: 'center' }}>
              <b style={{ color: 'var(--muted)', display: 'block', fontSize: '1.25rem', marginBottom: '8px' }}>03</b>
              <h3 style={{ margin: 0 }}>Grow</h3>
              <span style={{ display: 'block', color: 'var(--muted)', marginTop: '8px' }}>Grow your business with more customer enquiries</span>
            </div>
            
            <div style={{ color: 'var(--muted)', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="arr-right">→</span>
            </div>

            <div style={{ flex: '1 1 180px', padding: '24px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '16px', textAlign: 'center' }}>
              <b style={{ color: 'var(--muted)', display: 'block', fontSize: '1.25rem', marginBottom: '8px' }}>04</b>
              <h3 style={{ margin: 0 }}>Pay</h3>
              <span style={{ display: 'block', color: 'var(--muted)', marginTop: '8px' }}>Pay per qualified enquiry</span>
            </div>
            
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            .arr-right { transform: rotate(90deg); }
            @media (min-width: 900px) {
              .arr-right { transform: rotate(0deg); }
            }
          `}} />
        </div>
      </div>
    </section>
  );
}
