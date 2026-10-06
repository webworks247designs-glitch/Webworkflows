export default function CustomRate() {
  return (
    <section className="sec" id="custom-rate" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>Why Isn't the Enquiry Rate Fixed?</h2>
          <p>Different businesses have different customer values. A restaurant reservation, salon appointment, bakery order and catering enquiry are not worth the same amount.</p>
        </div>
        
        <div className="svc-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <h3 style={{ marginBottom: '8px' }}>Restaurant</h3>
            <p style={{ color: 'var(--muted)' }}>
              Reservation / order enquiry
            </p>
          </div>

          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <h3 style={{ marginBottom: '8px' }}>Salon</h3>
            <p style={{ color: 'var(--muted)' }}>
              Appointment enquiry
            </p>
          </div>

          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <h3 style={{ marginBottom: '8px' }}>Bakery</h3>
            <p style={{ color: 'var(--muted)' }}>
              Custom cake enquiry
            </p>
          </div>

          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <h3 style={{ marginBottom: '8px' }}>Catering</h3>
            <p style={{ color: 'var(--muted)' }}>
              High-value event enquiry
            </p>
          </div>
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <p className="lede" style={{ marginBottom: '0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            Your rate is determined based on your business, customer value and the type of enquiry being generated.
          </p>
        </div>
      </div>
    </section>
  );
}
