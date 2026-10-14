export default function CustomRate() {
  return (
    <section className="sec" id="custom-rate" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>Why Isn&apos;t the Enquiry Rate Fixed?</h2>
          <p>Different businesses have different customer transaction values. A restaurant table reservation, salon appointment, custom cake order, and clinic consultation represent completely different revenues.</p>
        </div>
        
        <div className="svc-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          
          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem' }}>🍽️</span>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: 'rgba(234, 179, 8, 0.15)', color: '#EAB308' }}>Avg ₹1,500 Order</span>
            </div>
            <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Restaurant</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', margin: 0 }}>
              Table reservations &amp; bulk food orders. High turnover with repeat neighborhood diners.
            </p>
          </div>

          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem' }}>✂️</span>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: 'rgba(6, 182, 212, 0.15)', color: '#06B6D4' }}>Avg ₹1,200 Visit</span>
            </div>
            <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Barber &amp; Salon</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', margin: 0 }}>
              Grooming and package bookings. High lifetime value through fortnightly re-bookings.
            </p>
          </div>

          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem' }}>🥐</span>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: 'rgba(224, 122, 95, 0.15)', color: '#E07A5F' }}>Avg ₹2,500 Bake</span>
            </div>
            <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Artisanal Bakery</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', margin: 0 }}>
              Custom theme cakes &amp; corporate catering boxes with strong upfront deposit margins.
            </p>
          </div>

          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem' }}>🩺</span>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981' }}>Avg ₹6,000 Care</span>
            </div>
            <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Clinic &amp; Physio</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', margin: 0 }}>
              Specialist consultation and recovery therapies spanning multiple follow-up sessions.
            </p>
          </div>

        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p className="lede" style={{ marginBottom: '0', maxWidth: '780px', marginInline: 'auto', fontSize: '1.05rem' }}>
            Your per-enquiry rate is determined transparently with you before launch, calibrated to ensure your return on investment is always 5x to 15x.
          </p>
        </div>
      </div>
    </section>
  );
}
