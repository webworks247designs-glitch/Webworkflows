const Stars = () => (
  <div style={{ display: 'flex', gap: '4px', color: '#fbbf24', marginBottom: '12px' }}>
    {[1, 2, 3, 4, 5].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="sec" id="kind-words" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head"><h2>Kind words from clients.</h2></div>
        <div className="quotes">
          <figure className="q-big" style={{ margin: 0 }}>
            <Stars />
            <blockquote>Customers finally order without calling us. The site was ready before our festival rush, and it felt like our kitchen, not a template.</blockquote>
            <figcaption className="who">Founder, Kaveri Kitchen</figcaption>
          </figure>
          <figure className="q-small" style={{ margin: 0 }}>
            <Stars />
            <blockquote>Clear, calm and quick to book. Patients tell us it was easy to use on their phones.</blockquote>
            <figcaption className="who">Practice manager, Northwind Physio</figcaption>
          </figure>
          <figure className="q-small" style={{ margin: 0 }}>
            <Stars />
            <blockquote>Design and code from one person meant no hand-off headaches. Every question got a quick answer.</blockquote>
            <figcaption className="who">Co-founder, Finlytics</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
