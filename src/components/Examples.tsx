export default function Examples() {
  return (
    <section className="sec" id="examples" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>What Does an Enquiry Look Like?</h2>
          <p>Your website is structured around the action your customers actually need to take.</p>
        </div>
        
        <div className="svc-grid">
          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <h3 style={{ marginBottom: '8px' }}>Restaurant</h3>
            <p className="for" style={{ color: 'var(--muted)', marginBottom: '16px', fontWeight: 600 }}>Action: "Reserve a Table"</p>
            <p style={{ fontStyle: 'italic', color: 'var(--muted)', background: 'var(--bg)', padding: '16px', borderRadius: '12px' }}>
              "Table for 4 people, Saturday at 8 PM."
            </p>
          </div>

          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <h3 style={{ marginBottom: '8px' }}>Salon</h3>
            <p className="for" style={{ color: 'var(--muted)', marginBottom: '16px', fontWeight: 600 }}>Action: "Book an Appointment"</p>
            <p style={{ fontStyle: 'italic', color: 'var(--muted)', background: 'var(--bg)', padding: '16px', borderRadius: '12px' }}>
              "Haircut appointment, Saturday at 5 PM."
            </p>
          </div>

          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <h3 style={{ marginBottom: '8px' }}>Bakery</h3>
            <p className="for" style={{ color: 'var(--muted)', marginBottom: '16px', fontWeight: 600 }}>Action: "Get a Cake Quote"</p>
            <p style={{ fontStyle: 'italic', color: 'var(--muted)', background: 'var(--bg)', padding: '16px', borderRadius: '12px' }}>
              "2 kg birthday cake needed for October 5."
            </p>
          </div>

          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <h3 style={{ marginBottom: '8px' }}>Local Service</h3>
            <p className="for" style={{ color: 'var(--muted)', marginBottom: '16px', fontWeight: 600 }}>Action: "Request a Quote"</p>
            <p style={{ fontStyle: 'italic', color: 'var(--muted)', background: 'var(--bg)', padding: '16px', borderRadius: '12px' }}>
              "Need an estimate for home service on Friday."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
