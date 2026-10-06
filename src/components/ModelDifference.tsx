export default function ModelDifference() {
  return (
    <section className="sec" id="model-difference" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>More Than a Website</h2>
          <p>A website is useful. A website designed around customer action is more useful.</p>
        </div>

        <div className="svc-grid">
          <div className="panel" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
            <h3 style={{ marginBottom: '24px' }}>Traditional Website Service</h3>
            <ul style={{ display: 'grid', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--muted)' }}>—</span>
                <span>Pay a large amount upfront(approx 30k)</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--muted)' }}>—</span>
                <span>Website gets delivered</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--muted)' }}>—</span>
                <span>Success is difficult to measure</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--muted)' }}>—</span>
                <span>Mostly focused on appearance</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--muted)' }}>—</span>
                <span>Traffic and enquiries are often not part of the service</span>
              </li>
            </ul>
          </div>

          <div className="panel p-cobalt">
            <h3 style={{ marginBottom: '24px' }}>Our Model</h3>
            <ul style={{ display: 'grid', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--butter)' }}>✓</span>
                <span>Low initial setup</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--butter)' }}>✓</span>
                <span>Website designed around enquiries</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--butter)' }}>✓</span>
                <span>Enquiries are tracked</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--butter)' }}>✓</span>
                <span>Clear billing based on measurable activity</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--butter)' }}>✓</span>
                <span>No charge for simple website visits</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--butter)' }}>✓</span>
                <span>No charge for untrackable walk-ins</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--butter)' }}>✓</span>
                <span>Transparent reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
