export default function Testimonials() {
  return (
    <section className="sec" id="kind-words" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head"><h2>Kind words from clients.</h2></div>
        <div className="quotes">
          <figure className="q-big" style={{ margin: 0 }}>
            <blockquote>Customers finally order without calling us. The site was ready before our festival rush, and it felt like our kitchen, not a template.</blockquote>
            <figcaption className="who">Founder, Kaveri Kitchen</figcaption>
          </figure>
          <figure className="q-small" style={{ margin: 0 }}>
            <blockquote>Clear, calm and quick to book. Patients tell us it was easy to use on their phones.</blockquote>
            <figcaption className="who">Practice manager, Northwind Physio</figcaption>
          </figure>
          <figure className="q-small" style={{ margin: 0 }}>
            <blockquote>Design and code from one person meant no hand-off headaches. Every question got a quick answer.</blockquote>
            <figcaption className="who">Co-founder, Finlytics</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
